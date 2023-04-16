import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
export var skeletonTitleProps = function skeletonTitleProps() {
  return {
    prefixCls: String,
    width: {
      type: [Number, String]
    }
  };
};
var SkeletonTitle = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'SkeletonTitle',
  props: skeletonTitleProps(),
  setup: function setup(props) {
    return function () {
      var prefixCls = props.prefixCls,
        width = props.width;
      var zWidth = typeof width === 'number' ? "".concat(width, "px") : width;
      return _createVNode("h3", {
        "class": prefixCls,
        "style": {
          width: zWidth
        }
      }, null);
    };
  }
});
export default SkeletonTitle;