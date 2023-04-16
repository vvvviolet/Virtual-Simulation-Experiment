"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderProps = exports.default = void 0;
var _vue = require("vue");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Slider = _interopRequireDefault(require("../vc-slider/src/Slider"));
var _Range = _interopRequireDefault(require("../vc-slider/src/Range"));
var _Handle = _interopRequireDefault(require("../vc-slider/src/Handle"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _SliderTooltip = _interopRequireDefault(require("./SliderTooltip"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _FormItemContext = require("../form/FormItemContext");
var _excluded = ["value", "dragging", "index"],
  _excluded2 = ["tooltipPrefixCls", "range", "id"];
var defaultTipFormatter = function defaultTipFormatter(value) {
  return typeof value === 'number' ? value.toString() : '';
};
var sliderProps = function sliderProps() {
  return {
    id: String,
    prefixCls: String,
    tooltipPrefixCls: String,
    range: {
      type: [Boolean, Object],
      default: undefined
    },
    reverse: {
      type: Boolean,
      default: undefined
    },
    min: Number,
    max: Number,
    step: {
      type: [Number, Object]
    },
    marks: {
      type: Object
    },
    dots: {
      type: Boolean,
      default: undefined
    },
    value: {
      type: [Number, Array]
    },
    defaultValue: {
      type: [Number, Array]
    },
    included: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    vertical: {
      type: Boolean,
      default: undefined
    },
    tipFormatter: {
      type: [Function, Object],
      default: function _default() {
        return defaultTipFormatter;
      }
    },
    tooltipVisible: {
      type: Boolean,
      default: undefined
    },
    tooltipPlacement: {
      type: String
    },
    getTooltipPopupContainer: {
      type: Function
    },
    autofocus: {
      type: Boolean,
      default: undefined
    },
    handleStyle: {
      type: [Object, Array]
    },
    trackStyle: {
      type: [Object, Array]
    },
    onChange: {
      type: Function
    },
    onAfterChange: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    'onUpdate:value': {
      type: Function
    }
  };
};
exports.sliderProps = sliderProps;
var Slider = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASlider',
  inheritAttrs: false,
  props: sliderProps(),
  // emits: ['update:value', 'change', 'afterChange', 'blur'],
  slots: ['mark'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    var _useConfigInject = (0, _useConfigInject2.default)('slider', props),
      prefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer,
      configProvider = _useConfigInject.configProvider;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var sliderRef = (0, _vue.ref)();
    var visibles = (0, _vue.ref)({});
    var toggleTooltipVisible = function toggleTooltipVisible(index, visible) {
      visibles.value[index] = visible;
    };
    var tooltipPlacement = (0, _vue.computed)(function () {
      if (props.tooltipPlacement) {
        return props.tooltipPlacement;
      }
      if (!props.vertical) {
        return 'top';
      }
      return direction.value === 'rtl' ? 'left' : 'right';
    });
    var focus = function focus() {
      var _sliderRef$value;
      (_sliderRef$value = sliderRef.value) === null || _sliderRef$value === void 0 ? void 0 : _sliderRef$value.focus();
    };
    var blur = function blur() {
      var _sliderRef$value2;
      (_sliderRef$value2 = sliderRef.value) === null || _sliderRef$value2 === void 0 ? void 0 : _sliderRef$value2.blur();
    };
    var handleChange = function handleChange(val) {
      emit('update:value', val);
      emit('change', val);
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur(e) {
      emit('blur', e);
    };
    expose({
      focus: focus,
      blur: blur
    });
    var handleWithTooltip = function handleWithTooltip(_ref2) {
      var tooltipPrefixCls = _ref2.tooltipPrefixCls,
        _ref2$info = _ref2.info,
        value = _ref2$info.value,
        dragging = _ref2$info.dragging,
        index = _ref2$info.index,
        restProps = (0, _objectWithoutProperties2.default)(_ref2$info, _excluded);
      var tipFormatter = props.tipFormatter,
        tooltipVisible = props.tooltipVisible,
        getTooltipPopupContainer = props.getTooltipPopupContainer;
      var isTipFormatter = tipFormatter ? visibles.value[index] || dragging : false;
      var visible = tooltipVisible || tooltipVisible === undefined && isTipFormatter;
      return (0, _vue.createVNode)(_SliderTooltip.default, {
        "prefixCls": tooltipPrefixCls,
        "title": tipFormatter ? tipFormatter(value) : '',
        "visible": visible,
        "placement": tooltipPlacement.value,
        "transitionName": "".concat(rootPrefixCls.value, "-zoom-down"),
        "key": index,
        "overlayClassName": "".concat(prefixCls.value, "-tooltip"),
        "getPopupContainer": getTooltipPopupContainer || getPopupContainer.value
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_Handle.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
            "value": value,
            "onMouseenter": function onMouseenter() {
              return toggleTooltipVisible(index, true);
            },
            "onMouseleave": function onMouseleave() {
              return toggleTooltipVisible(index, false);
            }
          }), null)];
        }
      });
    };
    return function () {
      var customizeTooltipPrefixCls = props.tooltipPrefixCls,
        range = props.range,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded2);
      var tooltipPrefixCls = configProvider.getPrefixCls('tooltip', customizeTooltipPrefixCls);
      var cls = (0, _classNames2.default)(attrs.class, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
      // make reverse default on rtl direction
      if (direction.value === 'rtl' && !restProps.vertical) {
        restProps.reverse = !restProps.reverse;
      }
      // extrack draggableTrack from range={{ ... }}
      var draggableTrack;
      if ((0, _typeof2.default)(range) === 'object') {
        draggableTrack = range.draggableTrack;
      }
      if (range) {
        return (0, _vue.createVNode)(_Range.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
          "step": restProps.step,
          "draggableTrack": draggableTrack,
          "class": cls,
          "ref": sliderRef,
          "handle": function handle(info) {
            return handleWithTooltip({
              tooltipPrefixCls: tooltipPrefixCls,
              prefixCls: prefixCls.value,
              info: info
            });
          },
          "prefixCls": prefixCls.value,
          "onChange": handleChange,
          "onBlur": handleBlur
        }), {
          mark: slots.mark
        });
      }
      return (0, _vue.createVNode)(_Slider.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
        "id": id,
        "step": restProps.step,
        "class": cls,
        "ref": sliderRef,
        "handle": function handle(info) {
          return handleWithTooltip({
            tooltipPrefixCls: tooltipPrefixCls,
            prefixCls: prefixCls.value,
            info: info
          });
        },
        "prefixCls": prefixCls.value,
        "onChange": handleChange,
        "onBlur": handleBlur
      }), {
        mark: slots.mark
      });
    };
  }
});
var _default2 = (0, _type.withInstall)(Slider);
exports.default = _default2;