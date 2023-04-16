import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
import TabNavList from './TabNavList';
import TabPanelList from './TabPanelList';
import { defineComponent, computed, onMounted, watchEffect, camelize } from 'vue';
import { flattenChildren, initDefaultProps, isValidElement } from '../../_util/props-util';
import useConfigInject from '../../_util/hooks/useConfigInject';
import useState from '../../_util/hooks/useState';
import isMobile from '../../vc-util/isMobile';
import useMergedState from '../../_util/hooks/useMergedState';
import classNames from '../../_util/classNames';
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import PlusOutlined from "@ant-design/icons-vue/es/icons/PlusOutlined";
import devWarning from '../../vc-util/devWarning';
import { useProvideTabs } from './TabContext';
import pick from 'lodash-es/pick';
import PropTypes from '../../_util/vue-types';
import omit from '../../_util/omit';
// Used for accessibility
var uuid = 0;
export var tabsProps = function tabsProps() {
  return {
    prefixCls: {
      type: String
    },
    id: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    defaultActiveKey: {
      type: [String, Number]
    },
    direction: {
      type: String
    },
    animated: {
      type: [Boolean, Object]
    },
    renderTabBar: {
      type: Function
    },
    tabBarGutter: {
      type: Number
    },
    tabBarStyle: {
      type: Object
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    },
    hideAdd: Boolean,
    type: {
      type: String
    },
    size: {
      type: String
    },
    centered: Boolean,
    onEdit: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    },
    'onUpdate:activeKey': {
      type: Function
    },
    // Accessibility
    locale: {
      type: Object,
      default: undefined
    },
    onPrevClick: Function,
    onNextClick: Function,
    tabBarExtraContent: PropTypes.any
  };
};
function parseTabList(children) {
  return children.map(function (node) {
    if (isValidElement(node)) {
      var props = _objectSpread({}, node.props || {});
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];
        delete props[k];
        props[camelize(k)] = v;
      }
      var slots = node.children || {};
      var key = node.key !== undefined ? node.key : undefined;
      var _props$tab = props.tab,
        tab = _props$tab === void 0 ? slots.tab : _props$tab,
        disabled = props.disabled,
        forceRender = props.forceRender,
        closable = props.closable,
        animated = props.animated,
        active = props.active,
        destroyInactiveTabPane = props.destroyInactiveTabPane;
      return _objectSpread(_objectSpread({
        key: key
      }, props), {}, {
        node: node,
        closeIcon: slots.closeIcon,
        tab: tab,
        disabled: disabled === '' || disabled,
        forceRender: forceRender === '' || forceRender,
        closable: closable === '' || closable,
        animated: animated === '' || animated,
        active: active === '' || active,
        destroyInactiveTabPane: destroyInactiveTabPane === '' || destroyInactiveTabPane
      });
    }
    return null;
  }).filter(function (tab) {
    return tab;
  });
}
var InternalTabs = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'InternalTabs',
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, initDefaultProps(tabsProps(), {
    tabPosition: 'top',
    animated: {
      inkBar: true,
      tabPane: false
    }
  })), {}, {
    tabs: {
      type: Array
    }
  }),
  slots: ['tabBarExtraContent', 'leftExtra', 'rightExtra', 'moreIcon', 'addIcon', 'removeIcon', 'renderTabBar'],
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    devWarning(!(props.onPrevClick !== undefined) && !(props.onNextClick !== undefined), 'Tabs', '`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.');
    devWarning(!(props.tabBarExtraContent !== undefined), 'Tabs', '`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.');
    devWarning(!(slots.tabBarExtraContent !== undefined), 'Tabs', '`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.');
    var _useConfigInject = useConfigInject('tabs', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size,
      rootPrefixCls = _useConfigInject.rootPrefixCls;
    var rtl = computed(function () {
      return direction.value === 'rtl';
    });
    var mergedAnimated = computed(function () {
      var animated = props.animated,
        tabPosition = props.tabPosition;
      if (animated === false || ['left', 'right'].includes(tabPosition)) {
        return {
          inkBar: false,
          tabPane: false
        };
      } else if (animated === true) {
        return {
          inkBar: true,
          tabPane: true
        };
      } else {
        return _objectSpread({
          inkBar: true,
          tabPane: false
        }, _typeof(animated) === 'object' ? animated : {});
      }
    });
    // ======================== Mobile ========================
    var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1];
    onMounted(function () {
      // Only update on the client side
      setMobile(isMobile());
    });
    // ====================== Active Key ======================
    var _useMergedState = useMergedState(function () {
        var _props$tabs$;
        return (_props$tabs$ = props.tabs[0]) === null || _props$tabs$ === void 0 ? void 0 : _props$tabs$.key;
      }, {
        value: computed(function () {
          return props.activeKey;
        }),
        defaultValue: props.defaultActiveKey
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];
    var _useState3 = useState(function () {
        return props.tabs.findIndex(function (tab) {
          return tab.key === mergedActiveKey.value;
        });
      }),
      _useState4 = _slicedToArray(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1];
    watchEffect(function () {
      var newActiveIndex = props.tabs.findIndex(function (tab) {
        return tab.key === mergedActiveKey.value;
      });
      if (newActiveIndex === -1) {
        var _props$tabs$newActive;
        newActiveIndex = Math.max(0, Math.min(activeIndex.value, props.tabs.length - 1));
        setMergedActiveKey((_props$tabs$newActive = props.tabs[newActiveIndex]) === null || _props$tabs$newActive === void 0 ? void 0 : _props$tabs$newActive.key);
      }
      setActiveIndex(newActiveIndex);
    });
    // ===================== Accessibility ====================
    var _useMergedState3 = useMergedState(null, {
        value: computed(function () {
          return props.id;
        })
      }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      mergedId = _useMergedState4[0],
      setMergedId = _useMergedState4[1];
    var mergedTabPosition = computed(function () {
      if (mobile.value && !['left', 'right'].includes(props.tabPosition)) {
        return 'top';
      } else {
        return props.tabPosition;
      }
    });
    onMounted(function () {
      if (!props.id) {
        setMergedId("rc-tabs-".concat(process.env.NODE_ENV === 'test' ? 'test' : uuid));
        uuid += 1;
      }
    });
    // ======================== Events ========================
    var onInternalTabClick = function onInternalTabClick(key, e) {
      var _props$onTabClick;
      (_props$onTabClick = props.onTabClick) === null || _props$onTabClick === void 0 ? void 0 : _props$onTabClick.call(props, key, e);
      var isActiveChanged = key !== mergedActiveKey.value;
      setMergedActiveKey(key);
      if (isActiveChanged) {
        var _props$onChange;
        (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, key);
      }
    };
    useProvideTabs({
      tabs: computed(function () {
        return props.tabs;
      }),
      prefixCls: prefixCls
    });
    return function () {
      var _classNames;
      var id = props.id,
        type = props.type,
        tabBarGutter = props.tabBarGutter,
        tabBarStyle = props.tabBarStyle,
        locale = props.locale,
        destroyInactiveTabPane = props.destroyInactiveTabPane,
        _props$renderTabBar = props.renderTabBar,
        renderTabBar = _props$renderTabBar === void 0 ? slots.renderTabBar : _props$renderTabBar,
        onTabScroll = props.onTabScroll,
        hideAdd = props.hideAdd,
        centered = props.centered;
      // ======================== Render ========================
      var sharedProps = {
        id: mergedId.value,
        activeKey: mergedActiveKey.value,
        animated: mergedAnimated.value,
        tabPosition: mergedTabPosition.value,
        rtl: rtl.value,
        mobile: mobile.value
      };
      var editable;
      if (type === 'editable-card') {
        editable = {
          onEdit: function onEdit(editType, _ref2) {
            var _props$onEdit;
            var key = _ref2.key,
              event = _ref2.event;
            (_props$onEdit = props.onEdit) === null || _props$onEdit === void 0 ? void 0 : _props$onEdit.call(props, editType === 'add' ? event : key, editType);
          },
          removeIcon: function removeIcon() {
            return _createVNode(CloseOutlined, null, null);
          },
          addIcon: slots.addIcon ? slots.addIcon : function () {
            return _createVNode(PlusOutlined, null, null);
          },
          showAdd: hideAdd !== true
        };
      }
      var tabNavBar;
      var tabNavBarProps = _objectSpread(_objectSpread({}, sharedProps), {}, {
        moreTransitionName: "".concat(rootPrefixCls.value, "-slide-up"),
        editable: editable,
        locale: locale,
        tabBarGutter: tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll: onTabScroll,
        style: tabBarStyle
      });
      if (renderTabBar) {
        tabNavBar = renderTabBar(_objectSpread(_objectSpread({}, tabNavBarProps), {}, {
          DefaultTabBar: TabNavList
        }));
      } else {
        tabNavBar = _createVNode(TabNavList, tabNavBarProps, pick(slots, ['moreIcon', 'leftExtra', 'rightExtra', 'tabBarExtraContent']));
      }
      var pre = prefixCls.value;
      return _createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "id": id,
        "class": classNames(pre, "".concat(pre, "-").concat(mergedTabPosition.value), (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-").concat(size.value), size.value), _defineProperty(_classNames, "".concat(pre, "-card"), ['card', 'editable-card'].includes(type)), _defineProperty(_classNames, "".concat(pre, "-editable-card"), type === 'editable-card'), _defineProperty(_classNames, "".concat(pre, "-centered"), centered), _defineProperty(_classNames, "".concat(pre, "-mobile"), mobile.value), _defineProperty(_classNames, "".concat(pre, "-editable"), type === 'editable-card'), _defineProperty(_classNames, "".concat(pre, "-rtl"), rtl.value), _classNames), attrs.class)
      }), [tabNavBar, _createVNode(TabPanelList, _objectSpread(_objectSpread({
        "destroyInactiveTabPane": destroyInactiveTabPane
      }, sharedProps), {}, {
        "animated": mergedAnimated.value
      }), null)]);
    };
  }
});
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATabs',
  inheritAttrs: false,
  props: initDefaultProps(tabsProps(), {
    tabPosition: 'top',
    animated: {
      inkBar: true,
      tabPane: false
    }
  }),
  slots: ['tabBarExtraContent', 'leftExtra', 'rightExtra', 'moreIcon', 'addIcon', 'removeIcon', 'renderTabBar'],
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup: function setup(props, _ref3) {
    var attrs = _ref3.attrs,
      slots = _ref3.slots,
      emit = _ref3.emit;
    var handleChange = function handleChange(key) {
      emit('update:activeKey', key);
      emit('change', key);
    };
    return function () {
      var _slots$default;
      var tabs = parseTabList(flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)));
      return _createVNode(InternalTabs, _objectSpread(_objectSpread(_objectSpread({}, omit(props, ['onUpdate:activeKey'])), attrs), {}, {
        "onChange": handleChange,
        "tabs": tabs
      }), slots);
    };
  }
});