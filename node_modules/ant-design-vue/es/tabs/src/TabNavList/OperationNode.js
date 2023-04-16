import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import Menu, { MenuItem } from '../../../menu';
import Dropdown from '../../../vc-dropdown';
import AddButton from './AddButton';
import KeyCode from '../../../_util/KeyCode';
import classNames from '../../../_util/classNames';
import { defineComponent, watch, computed, onMounted } from 'vue';
import PropTypes from '../../../_util/vue-types';
import useState from '../../../_util/hooks/useState';
import EllipsisOutlined from "@ant-design/icons-vue/es/icons/EllipsisOutlined";
export var operationNodeProps = {
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  tabs: {
    type: Object
  },
  rtl: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  activeKey: {
    type: [String, Number]
  },
  mobile: {
    type: Boolean
  },
  moreIcon: PropTypes.any,
  moreTransitionName: {
    type: String
  },
  editable: {
    type: Object
  },
  locale: {
    type: Object,
    default: undefined
  },
  removeAriaLabel: String,
  onTabClick: {
    type: Function
  }
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'OperationNode',
  inheritAttrs: false,
  props: operationNodeProps,
  emits: ['tabClick'],
  slots: ['moreIcon'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    // ======================== Dropdown ========================
    var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];
    var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedKey = _useState4[0],
      setSelectedKey = _useState4[1];
    var selectOffset = function selectOffset(offset) {
      var enabledTabs = props.tabs.filter(function (tab) {
        return !tab.disabled;
      });
      var selectedIndex = enabledTabs.findIndex(function (tab) {
        return tab.key === selectedKey.value;
      }) || 0;
      var len = enabledTabs.length;
      for (var i = 0; i < len; i += 1) {
        selectedIndex = (selectedIndex + offset + len) % len;
        var tab = enabledTabs[selectedIndex];
        if (!tab.disabled) {
          setSelectedKey(tab.key);
          return;
        }
      }
    };
    var onKeyDown = function onKeyDown(e) {
      var which = e.which;
      if (!open.value) {
        if ([KeyCode.DOWN, KeyCode.SPACE, KeyCode.ENTER].includes(which)) {
          setOpen(true);
          e.preventDefault();
        }
        return;
      }
      switch (which) {
        case KeyCode.UP:
          selectOffset(-1);
          e.preventDefault();
          break;
        case KeyCode.DOWN:
          selectOffset(1);
          e.preventDefault();
          break;
        case KeyCode.ESC:
          setOpen(false);
          break;
        case KeyCode.SPACE:
        case KeyCode.ENTER:
          if (selectedKey.value !== null) props.onTabClick(selectedKey.value, e);
          break;
      }
    };
    var popupId = computed(function () {
      return "".concat(props.id, "-more-popup");
    });
    var selectedItemId = computed(function () {
      return selectedKey.value !== null ? "".concat(popupId.value, "-").concat(selectedKey.value) : null;
    });
    var onRemoveTab = function onRemoveTab(event, key) {
      event.preventDefault();
      event.stopPropagation();
      props.editable.onEdit('remove', {
        key: key,
        event: event
      });
    };
    onMounted(function () {
      watch(selectedKey, function () {
        var ele = document.getElementById(selectedItemId.value);
        if (ele && ele.scrollIntoView) {
          ele.scrollIntoView(false);
        }
      }, {
        flush: 'post',
        immediate: true
      });
    });
    watch(open, function () {
      if (!open.value) {
        setSelectedKey(null);
      }
    });
    return function () {
      var _slots$moreIcon;
      var prefixCls = props.prefixCls,
        id = props.id,
        tabs = props.tabs,
        locale = props.locale,
        mobile = props.mobile,
        _props$moreIcon = props.moreIcon,
        moreIcon = _props$moreIcon === void 0 ? ((_slots$moreIcon = slots.moreIcon) === null || _slots$moreIcon === void 0 ? void 0 : _slots$moreIcon.call(slots)) || _createVNode(EllipsisOutlined, null, null) : _props$moreIcon,
        moreTransitionName = props.moreTransitionName,
        editable = props.editable,
        tabBarGutter = props.tabBarGutter,
        rtl = props.rtl,
        onTabClick = props.onTabClick;
      var dropdownPrefix = "".concat(prefixCls, "-dropdown");
      var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
      // ========================= Render =========================
      var moreStyle = _defineProperty({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
      if (!tabs.length) {
        moreStyle.visibility = 'hidden';
        moreStyle.order = 1;
      }
      var overlayClassName = classNames(_defineProperty({}, "".concat(dropdownPrefix, "-rtl"), rtl));
      var moreNode = mobile ? null : _createVNode(Dropdown, {
        "prefixCls": dropdownPrefix,
        "trigger": ['hover'],
        "visible": open.value,
        "transitionName": moreTransitionName,
        "onVisibleChange": setOpen,
        "overlayClassName": overlayClassName,
        "mouseEnterDelay": 0.1,
        "mouseLeaveDelay": 0.1
      }, {
        overlay: function overlay() {
          return _createVNode(Menu, {
            "onClick": function onClick(_ref2) {
              var key = _ref2.key,
                domEvent = _ref2.domEvent;
              onTabClick(key, domEvent);
              setOpen(false);
            },
            "id": popupId.value,
            "tabindex": -1,
            "role": "listbox",
            "aria-activedescendant": selectedItemId.value,
            "selectedKeys": [selectedKey.value],
            "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
          }, {
            default: function _default() {
              return [tabs.map(function (tab) {
                var _tab$closeIcon, _editable$removeIcon;
                var removable = editable && tab.closable !== false && !tab.disabled;
                return _createVNode(MenuItem, {
                  "key": tab.key,
                  "id": "".concat(popupId.value, "-").concat(tab.key),
                  "role": "option",
                  "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
                  "disabled": tab.disabled
                }, {
                  default: function _default() {
                    return [_createVNode("span", null, [typeof tab.tab === 'function' ? tab.tab() : tab.tab]), removable && _createVNode("button", {
                      "type": "button",
                      "aria-label": props.removeAriaLabel || 'remove',
                      "tabindex": 0,
                      "class": "".concat(dropdownPrefix, "-menu-item-remove"),
                      "onClick": function onClick(e) {
                        e.stopPropagation();
                        onRemoveTab(e, tab.key);
                      }
                    }, [((_tab$closeIcon = tab.closeIcon) === null || _tab$closeIcon === void 0 ? void 0 : _tab$closeIcon.call(tab)) || ((_editable$removeIcon = editable.removeIcon) === null || _editable$removeIcon === void 0 ? void 0 : _editable$removeIcon.call(editable)) || '×'])];
                  }
                });
              })];
            }
          });
        },
        default: function _default() {
          return _createVNode("button", {
            "type": "button",
            "class": "".concat(prefixCls, "-nav-more"),
            "style": moreStyle,
            "tabindex": -1,
            "aria-hidden": "true",
            "aria-haspopup": "listbox",
            "aria-controls": popupId.value,
            "id": "".concat(id, "-more"),
            "aria-expanded": open.value,
            "onKeydown": onKeyDown
          }, [moreIcon]);
        }
      });
      return _createVNode("div", {
        "class": classNames("".concat(prefixCls, "-nav-operations"), attrs.class),
        "style": attrs.style
      }, [moreNode, _createVNode(AddButton, {
        "prefixCls": prefixCls,
        "locale": locale,
        "editable": editable
      }, null)]);
    };
  }
});