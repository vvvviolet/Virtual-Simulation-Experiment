import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["class", "style"];
import { createVNode as _createVNode } from "vue";
import { isPresetColor } from './utils';
import { defineComponent, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
export var ribbonProps = function ribbonProps() {
  return {
    prefix: String,
    color: {
      type: String
    },
    text: PropTypes.any,
    placement: {
      type: String,
      default: 'end'
    }
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ABadgeRibbon',
  inheritAttrs: false,
  props: ribbonProps(),
  slots: ['text'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var _useConfigInject = useConfigInject('ribbon', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var colorInPreset = computed(function () {
      return isPresetColor(props.color);
    });
    var ribbonCls = computed(function () {
      var _ref2;
      return [prefixCls.value, "".concat(prefixCls.value, "-placement-").concat(props.placement), (_ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_ref2, "".concat(prefixCls.value, "-color-").concat(props.color), colorInPreset.value), _ref2)];
    });
    return function () {
      var _slots$default, _slots$text;
      var className = attrs.class,
        style = attrs.style,
        restAttrs = _objectWithoutProperties(attrs, _excluded);
      var colorStyle = {};
      var cornerColorStyle = {};
      if (props.color && !colorInPreset.value) {
        colorStyle.background = props.color;
        cornerColorStyle.color = props.color;
      }
      return _createVNode("div", _objectSpread({
        "class": "".concat(prefixCls.value, "-wrapper")
      }, restAttrs), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), _createVNode("div", {
        "class": [ribbonCls.value, className],
        "style": _objectSpread(_objectSpread({}, colorStyle), style)
      }, [_createVNode("span", {
        "class": "".concat(prefixCls.value, "-text")
      }, [props.text || ((_slots$text = slots.text) === null || _slots$text === void 0 ? void 0 : _slots$text.call(slots))]), _createVNode("div", {
        "class": "".concat(prefixCls.value, "-corner"),
        "style": cornerColorStyle
      }, null)])]);
    };
  }
});