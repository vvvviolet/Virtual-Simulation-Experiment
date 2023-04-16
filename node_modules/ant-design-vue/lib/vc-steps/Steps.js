"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _vnode = require("../_util/vnode");
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _excluded = ["prefixCls"];
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Steps',
  props: {
    type: _vueTypes.default.string.def('default'),
    prefixCls: _vueTypes.default.string.def('vc-steps'),
    iconPrefix: _vueTypes.default.string.def('vc'),
    direction: _vueTypes.default.string.def('horizontal'),
    labelPlacement: _vueTypes.default.string.def('horizontal'),
    status: _vueTypes.default.string.def('process'),
    size: _vueTypes.default.string.def(''),
    progressDot: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func]).def(undefined),
    initial: _vueTypes.default.number.def(0),
    current: _vueTypes.default.number.def(0),
    icons: _vueTypes.default.shape({
      finish: _vueTypes.default.any,
      error: _vueTypes.default.any
    }).loose,
    stepIcon: Function
  },
  slots: ['stepIcon', 'progressDot'],
  emits: ['change'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var onStepClick = function onStepClick(next) {
      var current = props.current;
      if (current !== next) {
        emit('change', next);
      }
    };
    return function () {
      var _classNames, _slots$default;
      var prefixCls = props.prefixCls,
        direction = props.direction,
        type = props.type,
        labelPlacement = props.labelPlacement,
        iconPrefix = props.iconPrefix,
        status = props.status,
        size = props.size,
        current = props.current,
        _props$progressDot = props.progressDot,
        progressDot = _props$progressDot === void 0 ? slots.progressDot : _props$progressDot,
        initial = props.initial,
        icons = props.icons,
        _props$stepIcon = props.stepIcon,
        stepIcon = _props$stepIcon === void 0 ? slots.stepIcon : _props$stepIcon;
      var isNav = type === 'navigation';
      var adjustedLabelPlacement = progressDot ? 'vertical' : labelPlacement;
      var classString = (0, _classNames2.default)(prefixCls, "".concat(prefixCls, "-").concat(direction), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), direction === 'horizontal'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot"), !!progressDot), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-navigation"), isNav), _classNames));
      var children = (0, _propsUtil.filterEmpty)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return (0, _vue.createVNode)("div", {
        "class": classString
      }, [children.map(function (child, index) {
        // description: PropTypes.any,
        // icon: PropTypes.any,
        // status: PropTypes.oneOf(tuple('wait', 'process', 'finish', 'error')),
        // disabled: { type: Boolean, default: undefined },
        // title: PropTypes.any,
        // subTitle: PropTypes.any,
        var _ref2 = child.props || {},
          _ref2$prefixCls = _ref2.prefixCls,
          pre = _ref2$prefixCls === void 0 ? prefixCls : _ref2$prefixCls,
          restProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
        var stepNumber = initial + index;
        var stepProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
          stepNumber: stepNumber + 1,
          stepIndex: stepNumber,
          key: stepNumber,
          prefixCls: pre,
          iconPrefix: iconPrefix,
          progressDot: progressDot,
          icons: icons,
          stepIcon: stepIcon,
          onStepClick: onStepClick
        });
        // fix tail color
        if (status === 'error' && index === current - 1) {
          stepProps.class = "".concat(prefixCls, "-next-error");
        }
        if (!restProps.status) {
          if (stepNumber === current) {
            stepProps.status = status;
          } else if (stepNumber < current) {
            stepProps.status = 'finish';
          } else {
            stepProps.status = 'wait';
          }
        }
        stepProps.active = stepNumber === current;
        return (0, _vnode.cloneElement)(child, stepProps);
      })]);
    };
  }
});
exports.default = _default;