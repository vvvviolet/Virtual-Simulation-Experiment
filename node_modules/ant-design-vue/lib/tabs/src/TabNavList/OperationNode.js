"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operationNodeProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _menu = _interopRequireWildcard(require("../../../menu"));
var _vcDropdown = _interopRequireDefault(require("../../../vc-dropdown"));
var _AddButton = _interopRequireDefault(require("./AddButton"));
var _KeyCode = _interopRequireDefault(require("../../../_util/KeyCode"));
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));
var _useState5 = _interopRequireDefault(require("../../../_util/hooks/useState"));
var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EllipsisOutlined"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var operationNodeProps = {
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
  moreIcon: _vueTypes.default.any,
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
exports.operationNodeProps = operationNodeProps;
var _default2 = (0, _vue.defineComponent)({
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
    var _useState = (0, _useState5.default)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];
    var _useState3 = (0, _useState5.default)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
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
        if ([_KeyCode.default.DOWN, _KeyCode.default.SPACE, _KeyCode.default.ENTER].includes(which)) {
          setOpen(true);
          e.preventDefault();
        }
        return;
      }
      switch (which) {
        case _KeyCode.default.UP:
          selectOffset(-1);
          e.preventDefault();
          break;
        case _KeyCode.default.DOWN:
          selectOffset(1);
          e.preventDefault();
          break;
        case _KeyCode.default.ESC:
          setOpen(false);
          break;
        case _KeyCode.default.SPACE:
        case _KeyCode.default.ENTER:
          if (selectedKey.value !== null) props.onTabClick(selectedKey.value, e);
          break;
      }
    };
    var popupId = (0, _vue.computed)(function () {
      return "".concat(props.id, "-more-popup");
    });
    var selectedItemId = (0, _vue.computed)(function () {
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
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(selectedKey, function () {
        var ele = document.getElementById(selectedItemId.value);
        if (ele && ele.scrollIntoView) {
          ele.scrollIntoView(false);
        }
      }, {
        flush: 'post',
        immediate: true
      });
    });
    (0, _vue.watch)(open, function () {
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
        moreIcon = _props$moreIcon === void 0 ? ((_slots$moreIcon = slots.moreIcon) === null || _slots$moreIcon === void 0 ? void 0 : _slots$moreIcon.call(slots)) || (0, _vue.createVNode)(_EllipsisOutlined.default, null, null) : _props$moreIcon,
        moreTransitionName = props.moreTransitionName,
        editable = props.editable,
        tabBarGutter = props.tabBarGutter,
        rtl = props.rtl,
        onTabClick = props.onTabClick;
      var dropdownPrefix = "".concat(prefixCls, "-dropdown");
      var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
      // ========================= Render =========================
      var moreStyle = (0, _defineProperty2.default)({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
      if (!tabs.length) {
        moreStyle.visibility = 'hidden';
        moreStyle.order = 1;
      }
      var overlayClassName = (0, _classNames2.default)((0, _defineProperty2.default)({}, "".concat(dropdownPrefix, "-rtl"), rtl));
      var moreNode = mobile ? null : (0, _vue.createVNode)(_vcDropdown.default, {
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
          return (0, _vue.createVNode)(_menu.default, {
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
                return (0, _vue.createVNode)(_menu.MenuItem, {
                  "key": tab.key,
                  "id": "".concat(popupId.value, "-").concat(tab.key),
                  "role": "option",
                  "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
                  "disabled": tab.disabled
                }, {
                  default: function _default() {
                    return [(0, _vue.createVNode)("span", null, [typeof tab.tab === 'function' ? tab.tab() : tab.tab]), removable && (0, _vue.createVNode)("button", {
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
          return (0, _vue.createVNode)("button", {
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
      return (0, _vue.createVNode)("div", {
        "class": (0, _classNames2.default)("".concat(prefixCls, "-nav-operations"), attrs.class),
        "style": attrs.style
      }, [moreNode, (0, _vue.createVNode)(_AddButton.default, {
        "prefixCls": prefixCls,
        "locale": locale,
        "editable": editable
      }, null)]);
    };
  }
});
exports.default = _default2;