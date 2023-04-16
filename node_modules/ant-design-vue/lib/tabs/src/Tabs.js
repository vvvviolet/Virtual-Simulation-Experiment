"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabsProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _TabNavList = _interopRequireDefault(require("./TabNavList"));
var _TabPanelList = _interopRequireDefault(require("./TabPanelList"));
var _propsUtil = require("../../_util/props-util");
var _useConfigInject2 = _interopRequireDefault(require("../../_util/hooks/useConfigInject"));
var _useState5 = _interopRequireDefault(require("../../_util/hooks/useState"));
var _isMobile = _interopRequireDefault(require("../../vc-util/isMobile"));
var _useMergedState5 = _interopRequireDefault(require("../../_util/hooks/useMergedState"));
var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));
var _PlusOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PlusOutlined"));
var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));
var _TabContext = require("./TabContext");
var _pick = _interopRequireDefault(require("lodash/pick"));
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var _omit = _interopRequireDefault(require("../../_util/omit"));
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role

// Used for accessibility
var uuid = 0;
var tabsProps = function tabsProps() {
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
    tabBarExtraContent: _vueTypes.default.any
  };
};
exports.tabsProps = tabsProps;
function parseTabList(children) {
  return children.map(function (node) {
    if ((0, _propsUtil.isValidElement)(node)) {
      var props = (0, _objectSpread2.default)({}, node.props || {});
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];
        delete props[k];
        props[(0, _vue.camelize)(k)] = v;
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
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({
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
var InternalTabs = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'InternalTabs',
  inheritAttrs: false,
  props: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _propsUtil.initDefaultProps)(tabsProps(), {
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
    (0, _devWarning.default)(!(props.onPrevClick !== undefined) && !(props.onNextClick !== undefined), 'Tabs', '`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.');
    (0, _devWarning.default)(!(props.tabBarExtraContent !== undefined), 'Tabs', '`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.');
    (0, _devWarning.default)(!(slots.tabBarExtraContent !== undefined), 'Tabs', '`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.');
    var _useConfigInject = (0, _useConfigInject2.default)('tabs', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size,
      rootPrefixCls = _useConfigInject.rootPrefixCls;
    var rtl = (0, _vue.computed)(function () {
      return direction.value === 'rtl';
    });
    var mergedAnimated = (0, _vue.computed)(function () {
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
        return (0, _objectSpread2.default)({
          inkBar: true,
          tabPane: false
        }, (0, _typeof2.default)(animated) === 'object' ? animated : {});
      }
    });
    // ======================== Mobile ========================
    var _useState = (0, _useState5.default)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1];
    (0, _vue.onMounted)(function () {
      // Only update on the client side
      setMobile((0, _isMobile.default)());
    });
    // ====================== Active Key ======================
    var _useMergedState = (0, _useMergedState5.default)(function () {
        var _props$tabs$;
        return (_props$tabs$ = props.tabs[0]) === null || _props$tabs$ === void 0 ? void 0 : _props$tabs$.key;
      }, {
        value: (0, _vue.computed)(function () {
          return props.activeKey;
        }),
        defaultValue: props.defaultActiveKey
      }),
      _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];
    var _useState3 = (0, _useState5.default)(function () {
        return props.tabs.findIndex(function (tab) {
          return tab.key === mergedActiveKey.value;
        });
      }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1];
    (0, _vue.watchEffect)(function () {
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
    var _useMergedState3 = (0, _useMergedState5.default)(null, {
        value: (0, _vue.computed)(function () {
          return props.id;
        })
      }),
      _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
      mergedId = _useMergedState4[0],
      setMergedId = _useMergedState4[1];
    var mergedTabPosition = (0, _vue.computed)(function () {
      if (mobile.value && !['left', 'right'].includes(props.tabPosition)) {
        return 'top';
      } else {
        return props.tabPosition;
      }
    });
    (0, _vue.onMounted)(function () {
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
    (0, _TabContext.useProvideTabs)({
      tabs: (0, _vue.computed)(function () {
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
            return (0, _vue.createVNode)(_CloseOutlined.default, null, null);
          },
          addIcon: slots.addIcon ? slots.addIcon : function () {
            return (0, _vue.createVNode)(_PlusOutlined.default, null, null);
          },
          showAdd: hideAdd !== true
        };
      }
      var tabNavBar;
      var tabNavBarProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, sharedProps), {}, {
        moreTransitionName: "".concat(rootPrefixCls.value, "-slide-up"),
        editable: editable,
        locale: locale,
        tabBarGutter: tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll: onTabScroll,
        style: tabBarStyle
      });
      if (renderTabBar) {
        tabNavBar = renderTabBar((0, _objectSpread2.default)((0, _objectSpread2.default)({}, tabNavBarProps), {}, {
          DefaultTabBar: _TabNavList.default
        }));
      } else {
        tabNavBar = (0, _vue.createVNode)(_TabNavList.default, tabNavBarProps, (0, _pick.default)(slots, ['moreIcon', 'leftExtra', 'rightExtra', 'tabBarExtraContent']));
      }
      var pre = prefixCls.value;
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "id": id,
        "class": (0, _classNames2.default)(pre, "".concat(pre, "-").concat(mergedTabPosition.value), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(pre, "-").concat(size.value), size.value), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-card"), ['card', 'editable-card'].includes(type)), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-editable-card"), type === 'editable-card'), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-centered"), centered), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-mobile"), mobile.value), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-editable"), type === 'editable-card'), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-rtl"), rtl.value), _classNames), attrs.class)
      }), [tabNavBar, (0, _vue.createVNode)(_TabPanelList.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "destroyInactiveTabPane": destroyInactiveTabPane
      }, sharedProps), {}, {
        "animated": mergedAnimated.value
      }), null)]);
    };
  }
});
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ATabs',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(tabsProps(), {
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
      var tabs = parseTabList((0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)));
      return (0, _vue.createVNode)(InternalTabs, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(props, ['onUpdate:activeKey'])), attrs), {}, {
        "onChange": handleChange,
        "tabs": tabs
      }), slots);
    };
  }
});
exports.default = _default;