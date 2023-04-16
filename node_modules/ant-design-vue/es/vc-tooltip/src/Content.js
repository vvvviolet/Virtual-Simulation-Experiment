import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../../_util/vue-types';
var tooltipContentProps = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: PropTypes.any
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Content',
  props: tooltipContentProps,
  slots: ['overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$overlay;
      return _createVNode("div", {
        "class": "".concat(props.prefixCls, "-inner"),
        "id": props.id,
        "role": "tooltip",
        "style": props.overlayInnerStyle
      }, [(_slots$overlay = slots.overlay) === null || _slots$overlay === void 0 ? void 0 : _slots$overlay.call(slots)]);
    };
  }
});