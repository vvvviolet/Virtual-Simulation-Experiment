import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { tuple } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
export var timelineItemProps = function timelineItemProps() {
  return {
    prefixCls: String,
    color: String,
    dot: PropTypes.any,
    pending: {
      type: Boolean,
      default: undefined
    },
    position: PropTypes.oneOf(tuple('left', 'right', '')).def(''),
    label: PropTypes.any
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATimelineItem',
  props: initDefaultProps(timelineItemProps(), {
    color: 'blue',
    pending: false
  }),
  slots: ['dot', 'label'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('timeline', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _slots$label, _slots$dot, _classNames, _classNames2, _slots$default;
      var _props$color = props.color,
        color = _props$color === void 0 ? '' : _props$color,
        pending = props.pending,
        _props$label = props.label,
        label = _props$label === void 0 ? (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots) : _props$label,
        _props$dot = props.dot,
        dot = _props$dot === void 0 ? (_slots$dot = slots.dot) === null || _slots$dot === void 0 ? void 0 : _slots$dot.call(slots) : _props$dot;
      var itemClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-item"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-item-pending"), pending), _classNames));
      var dotClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls.value, "-item-head"), true), _defineProperty(_classNames2, "".concat(prefixCls.value, "-item-head-custom"), dot), _defineProperty(_classNames2, "".concat(prefixCls.value, "-item-head-").concat(color), true), _classNames2));
      var customColor = /blue|red|green|gray/.test(color || '') ? undefined : color;
      return _createVNode("li", {
        "class": itemClassName
      }, [label && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-label")
      }, [label]), _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-tail")
      }, null), _createVNode("div", {
        "class": dotClassName,
        "style": {
          borderColor: customColor,
          color: customColor
        }
      }, [dot]), _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-content")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});