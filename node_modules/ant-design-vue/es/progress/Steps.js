import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { progressProps } from './props';
export var stepsProps = function stepsProps() {
  return _objectSpread(_objectSpread({}, progressProps()), {}, {
    steps: Number,
    size: {
      type: String
    },
    strokeColor: String,
    trailColor: String
  });
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Steps',
  props: stepsProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var current = computed(function () {
      return Math.round(props.steps * ((props.percent || 0) / 100));
    });
    var stepWidth = computed(function () {
      return props.size === 'small' ? 2 : 14;
    });
    var styledSteps = computed(function () {
      var steps = props.steps,
        _props$strokeWidth = props.strokeWidth,
        strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
        strokeColor = props.strokeColor,
        trailColor = props.trailColor,
        prefixCls = props.prefixCls;
      var temp = [];
      for (var i = 0; i < steps; i += 1) {
        var _cls;
        var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-steps-item"), true), _defineProperty(_cls, "".concat(prefixCls, "-steps-item-active"), i <= current.value - 1), _cls);
        temp.push(_createVNode("div", {
          "key": i,
          "class": cls,
          "style": {
            backgroundColor: i <= current.value - 1 ? strokeColor : trailColor,
            width: "".concat(stepWidth.value, "px"),
            height: "".concat(strokeWidth, "px")
          }
        }, null));
      }
      return temp;
    });
    return function () {
      var _slots$default;
      return _createVNode("div", {
        "class": "".concat(props.prefixCls, "-steps-outer")
      }, [styledSteps.value, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});