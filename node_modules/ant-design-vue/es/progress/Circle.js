import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { presetPrimaryColors } from '@ant-design/colors';
import { Circle as VCCircle } from '../vc-progress';
import { getSuccessPercent, validProgress } from './utils';
import { progressProps } from './props';
function getPercentage(_ref) {
  var percent = _ref.percent,
    success = _ref.success,
    successPercent = _ref.successPercent;
  var realSuccessPercent = validProgress(getSuccessPercent({
    success: success,
    successPercent: successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
}
function getStrokeColor(_ref2) {
  var _ref2$success = _ref2.success,
    success = _ref2$success === void 0 ? {} : _ref2$success,
    strokeColor = _ref2.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || presetPrimaryColors.green, strokeColor || null];
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Circle',
  inheritAttrs: false,
  props: progressProps(),
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    var gapDeg = computed(function () {
      // Support gapDeg = 0 when type = 'dashboard'
      if (props.gapDegree || props.gapDegree === 0) {
        return props.gapDegree;
      }
      if (props.type === 'dashboard') {
        return 75;
      }
      return undefined;
    });
    var circleStyle = computed(function () {
      var circleSize = props.width || 120;
      return {
        width: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        height: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        fontSize: "".concat(circleSize * 0.15 + 6, "px")
      };
    });
    var circleWidth = computed(function () {
      return props.strokeWidth || 6;
    });
    var gapPos = computed(function () {
      return props.gapPosition || props.type === 'dashboard' && 'bottom' || 'top';
    });
    // using className to style stroke color
    var percent = computed(function () {
      return getPercentage(props);
    });
    var isGradient = computed(function () {
      return Object.prototype.toString.call(props.strokeColor) === '[object Object]';
    });
    var strokeColor = computed(function () {
      return getStrokeColor({
        success: props.success,
        strokeColor: props.strokeColor
      });
    });
    var wrapperClassName = computed(function () {
      var _ref4;
      return _ref4 = {}, _defineProperty(_ref4, "".concat(props.prefixCls, "-inner"), true), _defineProperty(_ref4, "".concat(props.prefixCls, "-circle-gradient"), isGradient.value), _ref4;
    });
    return function () {
      var _slots$default;
      return _createVNode("div", {
        "class": wrapperClassName.value,
        "style": circleStyle.value
      }, [_createVNode(VCCircle, {
        "percent": percent.value,
        "strokeWidth": circleWidth.value,
        "trailWidth": circleWidth.value,
        "strokeColor": strokeColor.value,
        "strokeLinecap": props.strokeLinecap,
        "trailColor": props.trailColor,
        "prefixCls": props.prefixCls,
        "gapDegree": gapDeg.value,
        "gapPosition": gapPos.value
      }, null), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});