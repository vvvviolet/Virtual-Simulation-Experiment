"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setDefaultIndicator = setDefaultIndicator;
exports.spinProps = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _configProvider = require("../config-provider");
var _excluded = ["class", "style"];
var spinProps = function spinProps() {
  return {
    prefixCls: String,
    spinning: {
      type: Boolean,
      default: undefined
    },
    size: String,
    wrapperClassName: String,
    tip: _vueTypes.default.any,
    delay: Number,
    indicator: _vueTypes.default.any
  };
};
// Render indicator
exports.spinProps = spinProps;
var defaultIndicator = null;
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
function setDefaultIndicator(Content) {
  var Indicator = Content.indicator;
  defaultIndicator = typeof Indicator === 'function' ? Indicator : function () {
    return (0, _vue.createVNode)(Indicator, null, null);
  };
}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASpin',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(spinProps(), {
    size: 'default',
    spinning: true,
    wrapperClassName: ''
  }),
  setup: function setup() {
    return {
      originalUpdateSpinning: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    var spinning = this.spinning,
      delay = this.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    return {
      sSpinning: spinning && !shouldBeDelayed
    };
  },
  created: function created() {
    this.originalUpdateSpinning = this.updateSpinning;
    this.debouncifyUpdateSpinning(this.$props);
  },
  mounted: function mounted() {
    this.updateSpinning();
  },
  updated: function updated() {
    var _this = this;
    (0, _vue.nextTick)(function () {
      _this.debouncifyUpdateSpinning();
      _this.updateSpinning();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.cancelExistingSpin();
  },
  methods: {
    debouncifyUpdateSpinning: function debouncifyUpdateSpinning(props) {
      var _ref = props || this.$props,
        delay = _ref.delay;
      if (delay) {
        this.cancelExistingSpin();
        this.updateSpinning = (0, _debounce.default)(this.originalUpdateSpinning, delay);
      }
    },
    updateSpinning: function updateSpinning() {
      var spinning = this.spinning,
        sSpinning = this.sSpinning;
      if (sSpinning !== spinning) {
        this.sSpinning = spinning;
      }
    },
    cancelExistingSpin: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;
      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    },
    renderIndicator: function renderIndicator(prefixCls) {
      var dotClassName = "".concat(prefixCls, "-dot");
      var indicator = (0, _propsUtil.getComponent)(this, 'indicator');
      // should not be render default indicator when indicator value is null
      if (indicator === null) {
        return null;
      }
      if (Array.isArray(indicator)) {
        indicator = indicator.length === 1 ? indicator[0] : indicator;
      }
      if ((0, _vue.isVNode)(indicator)) {
        return (0, _vue.cloneVNode)(indicator, {
          class: dotClassName
        });
      }
      if (defaultIndicator && (0, _vue.isVNode)(defaultIndicator())) {
        return (0, _vue.cloneVNode)(defaultIndicator(), {
          class: dotClassName
        });
      }
      return (0, _vue.createVNode)("span", {
        "class": "".concat(dotClassName, " ").concat(prefixCls, "-dot-spin")
      }, [(0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), (0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), (0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), (0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null)]);
    }
  },
  render: function render() {
    var _this$$slots$tip, _this$$slots, _spinClassName;
    var _this$$props = this.$props,
      size = _this$$props.size,
      customizePrefixCls = _this$$props.prefixCls,
      _this$$props$tip = _this$$props.tip,
      tip = _this$$props$tip === void 0 ? (_this$$slots$tip = (_this$$slots = this.$slots).tip) === null || _this$$slots$tip === void 0 ? void 0 : _this$$slots$tip.call(_this$$slots) : _this$$props$tip,
      wrapperClassName = _this$$props.wrapperClassName;
    var _this$$attrs = this.$attrs,
      cls = _this$$attrs.class,
      style = _this$$attrs.style,
      divProps = (0, _objectWithoutProperties2.default)(_this$$attrs, _excluded);
    var _this$configProvider = this.configProvider,
      getPrefixCls = _this$configProvider.getPrefixCls,
      direction = _this$configProvider.direction;
    var prefixCls = getPrefixCls('spin', customizePrefixCls);
    var sSpinning = this.sSpinning;
    var spinClassName = (_spinClassName = {}, (0, _defineProperty2.default)(_spinClassName, prefixCls, true), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-spinning"), sSpinning), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-show-text"), !!tip), (0, _defineProperty2.default)(_spinClassName, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2.default)(_spinClassName, cls, !!cls), _spinClassName);
    var spinElement = (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, divProps), {}, {
      "style": style,
      "class": spinClassName
    }), [this.renderIndicator(prefixCls), tip ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-text")
    }, [tip]) : null]);
    var children = (0, _propsUtil.getSlot)(this);
    if (children && children.length) {
      var _containerClassName;
      var containerClassName = (_containerClassName = {}, (0, _defineProperty2.default)(_containerClassName, "".concat(prefixCls, "-container"), true), (0, _defineProperty2.default)(_containerClassName, "".concat(prefixCls, "-blur"), sSpinning), _containerClassName);
      return (0, _vue.createVNode)("div", {
        "class": ["".concat(prefixCls, "-nested-loading"), wrapperClassName]
      }, [sSpinning && (0, _vue.createVNode)("div", {
        "key": "loading"
      }, [spinElement]), (0, _vue.createVNode)("div", {
        "class": containerClassName,
        "key": "container"
      }, [children])]);
    }
    return spinElement;
  }
});
exports.default = _default;