import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import PreviewGroup from '../vc-image/src/PreviewGroup';
import { computed, defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import RotateLeftOutlined from "@ant-design/icons-vue/es/icons/RotateLeftOutlined";
import RotateRightOutlined from "@ant-design/icons-vue/es/icons/RotateRightOutlined";
import ZoomInOutlined from "@ant-design/icons-vue/es/icons/ZoomInOutlined";
import ZoomOutOutlined from "@ant-design/icons-vue/es/icons/ZoomOutOutlined";
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import LeftOutlined from "@ant-design/icons-vue/es/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons-vue/es/icons/RightOutlined";
export var icons = {
  rotateLeft: _createVNode(RotateLeftOutlined, null, null),
  rotateRight: _createVNode(RotateRightOutlined, null, null),
  zoomIn: _createVNode(ZoomInOutlined, null, null),
  zoomOut: _createVNode(ZoomOutOutlined, null, null),
  close: _createVNode(CloseOutlined, null, null),
  left: _createVNode(LeftOutlined, null, null),
  right: _createVNode(RightOutlined, null, null)
};
var InternalPreviewGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AImagePreviewGroup',
  inheritAttrs: false,
  props: {
    previewPrefixCls: String
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var _useConfigInject = useConfigInject('image', props),
      getPrefixCls = _useConfigInject.getPrefixCls;
    var prefixCls = computed(function () {
      return getPrefixCls('image-preview', props.previewPrefixCls);
    });
    return function () {
      return _createVNode(PreviewGroup, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, attrs), props)), {}, {
        "icons": icons,
        "previewPrefixCls": prefixCls.value
      }), slots);
    };
  }
});
export default InternalPreviewGroup;