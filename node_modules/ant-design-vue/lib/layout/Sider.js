"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.siderProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _type = require("../_util/type");
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _isNumeric = _interopRequireDefault(require("../_util/isNumeric"));
var _BarsOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/BarsOutlined"));
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));
var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LeftOutlined"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _injectionKey = require("./injectionKey");
var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px',
  xxxl: '1999.98px'
};
var siderProps = function siderProps() {
  return {
    prefixCls: String,
    collapsible: {
      type: Boolean,
      default: undefined
    },
    collapsed: {
      type: Boolean,
      default: undefined
    },
    defaultCollapsed: {
      type: Boolean,
      default: undefined
    },
    reverseArrow: {
      type: Boolean,
      default: undefined
    },
    zeroWidthTriggerStyle: {
      type: Object,
      default: undefined
    },
    trigger: _vueTypes.default.any,
    width: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    collapsedWidth: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    breakpoint: _vueTypes.default.oneOf((0, _type.tuple)('xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl')),
    theme: _vueTypes.default.oneOf((0, _type.tuple)('light', 'dark')).def('dark'),
    onBreakpoint: Function,
    onCollapse: Function
  };
};
exports.siderProps = siderProps;
var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ALayoutSider',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(siderProps(), {
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 80
  }),
  emits: ['breakpoint', 'update:collapsed', 'collapse'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs,
      slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('layout-sider', props),
      prefixCls = _useConfigInject.prefixCls;
    var siderHook = (0, _vue.inject)(_injectionKey.SiderHookProviderKey, undefined);
    var collapsed = (0, _vue.ref)(!!(props.collapsed !== undefined ? props.collapsed : props.defaultCollapsed));
    var below = (0, _vue.ref)(false);
    (0, _vue.watch)(function () {
      return props.collapsed;
    }, function () {
      collapsed.value = !!props.collapsed;
    });
    (0, _vue.provide)(_injectionKey.SiderCollapsedKey, collapsed);
    var handleSetCollapsed = function handleSetCollapsed(value, type) {
      if (props.collapsed === undefined) {
        collapsed.value = value;
      }
      emit('update:collapsed', value);
      emit('collapse', value, type);
    };
    // ========================= Responsive =========================
    var responsiveHandlerRef = (0, _vue.ref)(function (mql) {
      below.value = mql.matches;
      emit('breakpoint', mql.matches);
      if (collapsed.value !== mql.matches) {
        handleSetCollapsed(mql.matches, 'responsive');
      }
    });
    var mql;
    function responsiveHandler(mql) {
      return responsiveHandlerRef.value(mql);
    }
    var uniqueId = generateId('ant-sider-');
    siderHook && siderHook.addSider(uniqueId);
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(function () {
        return props.breakpoint;
      }, function () {
        try {
          var _mql;
          (_mql = mql) === null || _mql === void 0 ? void 0 : _mql.removeEventListener('change', responsiveHandler);
        } catch (error) {
          var _mql2;
          (_mql2 = mql) === null || _mql2 === void 0 ? void 0 : _mql2.removeListener(responsiveHandler);
        }
        if (typeof window !== 'undefined') {
          var _window = window,
            matchMedia = _window.matchMedia;
          if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
            mql = matchMedia("(max-width: ".concat(dimensionMaxMap[props.breakpoint], ")"));
            try {
              mql.addEventListener('change', responsiveHandler);
            } catch (error) {
              mql.addListener(responsiveHandler);
            }
            responsiveHandler(mql);
          }
        }
      }, {
        immediate: true
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      try {
        var _mql3;
        (_mql3 = mql) === null || _mql3 === void 0 ? void 0 : _mql3.removeEventListener('change', responsiveHandler);
      } catch (error) {
        var _mql4;
        (_mql4 = mql) === null || _mql4 === void 0 ? void 0 : _mql4.removeListener(responsiveHandler);
      }
      siderHook && siderHook.removeSider(uniqueId);
    });
    var toggle = function toggle() {
      handleSetCollapsed(!collapsed.value, 'clickTrigger');
    };
    return function () {
      var _slots$trigger, _classNames, _slots$default;
      var pre = prefixCls.value;
      var collapsedWidth = props.collapsedWidth,
        width = props.width,
        reverseArrow = props.reverseArrow,
        zeroWidthTriggerStyle = props.zeroWidthTriggerStyle,
        _props$trigger = props.trigger,
        trigger = _props$trigger === void 0 ? (_slots$trigger = slots.trigger) === null || _slots$trigger === void 0 ? void 0 : _slots$trigger.call(slots) : _props$trigger,
        collapsible = props.collapsible,
        theme = props.theme;
      var rawWidth = collapsed.value ? collapsedWidth : width;
      // use "px" as fallback unit for width
      var siderWidth = (0, _isNumeric.default)(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      // special trigger when collapsedWidth == 0
      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? (0, _vue.createVNode)("span", {
        "onClick": toggle,
        "class": (0, _classNames2.default)("".concat(pre, "-zero-width-trigger"), "".concat(pre, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        "style": zeroWidthTriggerStyle
      }, [trigger || (0, _vue.createVNode)(_BarsOutlined.default, null, null)]) : null;
      var iconObj = {
        expanded: reverseArrow ? (0, _vue.createVNode)(_RightOutlined.default, null, null) : (0, _vue.createVNode)(_LeftOutlined.default, null, null),
        collapsed: reverseArrow ? (0, _vue.createVNode)(_LeftOutlined.default, null, null) : (0, _vue.createVNode)(_RightOutlined.default, null, null)
      };
      var status = collapsed.value ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-trigger"),
        "onClick": toggle,
        "style": {
          width: siderWidth
        }
      }, [trigger || defaultTrigger]) : null;
      var divStyle = [attrs.style, {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      }];
      var siderCls = (0, _classNames2.default)(pre, "".concat(pre, "-").concat(theme), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(pre, "-collapsed"), !!collapsed.value), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-below"), !!below.value), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), attrs.class);
      return (0, _vue.createVNode)("aside", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "class": siderCls,
        "style": divStyle
      }), [(0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-children")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), collapsible || below.value && zeroWidthTrigger ? triggerDom : null]);
    };
  }
});
exports.default = _default;