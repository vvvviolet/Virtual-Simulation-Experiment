"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stepsProps = exports.stepProps = exports.default = exports.Step = void 0;
var _vue = require("vue");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));
var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _vcSteps = _interopRequireWildcard(require("../vc-steps"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _useBreakpoint = _interopRequireDefault(require("../_util/hooks/useBreakpoint"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _progress = _interopRequireDefault(require("../progress"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _Step = require("../vc-steps/Step");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var stepsProps = function stepsProps() {
  return {
    prefixCls: String,
    iconPrefix: String,
    current: Number,
    initial: Number,
    percent: Number,
    responsive: {
      type: Boolean,
      default: undefined
    },
    labelPlacement: String,
    status: String,
    size: String,
    direction: String,
    progressDot: {
      type: [Boolean, Function],
      default: undefined
    },
    type: String,
    onChange: Function,
    'onUpdate:current': Function
  };
};
exports.stepsProps = stepsProps;
var stepProps = function stepProps() {
  return {
    description: _vueTypes.default.any,
    icon: _vueTypes.default.any,
    status: String,
    disabled: {
      type: Boolean,
      default: undefined
    },
    title: _vueTypes.default.any,
    subTitle: _vueTypes.default.any,
    onClick: Function
  };
};
exports.stepProps = stepProps;
var Steps = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASteps',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(stepsProps(), {
    current: 0,
    responsive: true,
    labelPlacement: 'horizontal'
  }),
  slots: ['progressDot'],
  // emits: ['update:current', 'change'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var _useConfigInject = (0, _useConfigInject2.default)('steps', props),
      prefixCls = _useConfigInject.prefixCls,
      rtlDirection = _useConfigInject.direction,
      configProvider = _useConfigInject.configProvider;
    var screens = (0, _useBreakpoint.default)();
    var direction = (0, _vue.computed)(function () {
      return props.responsive && screens.value.xs ? 'vertical' : props.direction;
    });
    var iconPrefix = (0, _vue.computed)(function () {
      return configProvider.getPrefixCls('', props.iconPrefix);
    });
    var handleChange = function handleChange(current) {
      emit('update:current', current);
      emit('change', current);
    };
    var stepIconRender = function stepIconRender(_ref2) {
      var node = _ref2.node,
        status = _ref2.status;
      if (status === 'process' && props.percent !== undefined) {
        // currently it's hard-coded, since we can't easily read the actually width of icon
        var progressWidth = props.size === 'small' ? 32 : 40;
        var iconWithProgress = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-progress-icon")
        }, [(0, _vue.createVNode)(_progress.default, {
          "type": "circle",
          "percent": props.percent,
          "width": progressWidth,
          "strokeWidth": 4,
          "format": function format() {
            return null;
          }
        }, null), node]);
        return iconWithProgress;
      }
      return node;
    };
    return function () {
      var _classNames;
      var stepsClassName = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), rtlDirection.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-with-progress"), props.percent !== undefined), _classNames), attrs.class);
      var icons = {
        finish: (0, _vue.createVNode)(_CheckOutlined.default, {
          "class": "".concat(prefixCls, "-finish-icon")
        }, null),
        error: (0, _vue.createVNode)(_CloseOutlined.default, {
          "class": "".concat(prefixCls, "-error-icon")
        }, null)
      };
      return (0, _vue.createVNode)(_vcSteps.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "icons": icons
      }, (0, _omit.default)(props, ['percent', 'responsive'])), {}, {
        "direction": direction.value,
        "prefixCls": prefixCls.value,
        "iconPrefix": iconPrefix.value,
        "class": stepsClassName,
        "onChange": handleChange
      }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
        stepIcon: stepIconRender
      }));
    };
  }
});
/* istanbul ignore next */
var Step = (0, _vue.defineComponent)((0, _objectSpread2.default)((0, _objectSpread2.default)({
  compatConfig: {
    MODE: 3
  }
}, _vcSteps.Step), {}, {
  name: 'AStep',
  props: (0, _Step.VcStepProps)()
}));
exports.Step = Step;
var _default = (0, _extends2.default)(Steps, {
  Step: Step,
  install: function install(app) {
    app.component(Steps.name, Steps);
    app.component(Step.name, Step);
    return app;
  }
});
exports.default = _default;