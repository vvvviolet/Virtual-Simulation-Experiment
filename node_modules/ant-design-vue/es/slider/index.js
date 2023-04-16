import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "dragging", "index"],
  _excluded2 = ["tooltipPrefixCls", "range", "id"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, ref, defineComponent } from 'vue';
import VcSlider from '../vc-slider/src/Slider';
import VcRange from '../vc-slider/src/Range';
import VcHandle from '../vc-slider/src/Handle';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import SliderTooltip from './SliderTooltip';
import classNames from '../_util/classNames';
import { useInjectFormItemContext } from '../form/FormItemContext';
var defaultTipFormatter = function defaultTipFormatter(value) {
  return typeof value === 'number' ? value.toString() : '';
};
export var sliderProps = function sliderProps() {
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
var Slider = defineComponent({
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
    var _useConfigInject = useConfigInject('slider', props),
      prefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer,
      configProvider = _useConfigInject.configProvider;
    var formItemContext = useInjectFormItemContext();
    var sliderRef = ref();
    var visibles = ref({});
    var toggleTooltipVisible = function toggleTooltipVisible(index, visible) {
      visibles.value[index] = visible;
    };
    var tooltipPlacement = computed(function () {
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
        restProps = _objectWithoutProperties(_ref2$info, _excluded);
      var tipFormatter = props.tipFormatter,
        tooltipVisible = props.tooltipVisible,
        getTooltipPopupContainer = props.getTooltipPopupContainer;
      var isTipFormatter = tipFormatter ? visibles.value[index] || dragging : false;
      var visible = tooltipVisible || tooltipVisible === undefined && isTipFormatter;
      return _createVNode(SliderTooltip, {
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
          return [_createVNode(VcHandle, _objectSpread(_objectSpread({}, restProps), {}, {
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
        restProps = _objectWithoutProperties(props, _excluded2);
      var tooltipPrefixCls = configProvider.getPrefixCls('tooltip', customizeTooltipPrefixCls);
      var cls = classNames(attrs.class, _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
      // make reverse default on rtl direction
      if (direction.value === 'rtl' && !restProps.vertical) {
        restProps.reverse = !restProps.reverse;
      }
      // extrack draggableTrack from range={{ ... }}
      var draggableTrack;
      if (_typeof(range) === 'object') {
        draggableTrack = range.draggableTrack;
      }
      if (range) {
        return _createVNode(VcRange, _objectSpread(_objectSpread({}, restProps), {}, {
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
      return _createVNode(VcSlider, _objectSpread(_objectSpread({}, restProps), {}, {
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
export default withInstall(Slider);