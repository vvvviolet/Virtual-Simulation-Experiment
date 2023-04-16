import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["height"],
  _excluded2 = ["style"];
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue';
import Upload from './Upload';
import { uploadProps } from './interface';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AUploadDragger',
  inheritAttrs: false,
  props: uploadProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    return function () {
      var height = props.height,
        restProps = _objectWithoutProperties(props, _excluded);
      var style = attrs.style,
        restAttrs = _objectWithoutProperties(attrs, _excluded2);
      var draggerProps = _objectSpread(_objectSpread(_objectSpread({}, restProps), restAttrs), {}, {
        type: 'drag',
        style: _objectSpread(_objectSpread({}, style), {}, {
          height: typeof height === 'number' ? "".concat(height, "px") : height
        })
      });
      return _createVNode(Upload, draggerProps, slots);
    };
  }
});