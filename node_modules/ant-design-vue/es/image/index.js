import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import ImageInternal from '../vc-image';
import { imageProps } from '../vc-image/src/Image';
import defaultLocale from '../locale/en_US';
import useConfigInject from '../_util/hooks/useConfigInject';
import PreviewGroup, { icons } from './PreviewGroup';
import EyeOutlined from "@ant-design/icons-vue/es/icons/EyeOutlined";
import { getTransitionName } from '../_util/transition';
var Image = defineComponent({
  name: 'AImage',
  inheritAttrs: false,
  props: imageProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('image', props),
      prefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      configProvider = _useConfigInject.configProvider;
    var mergedPreview = computed(function () {
      var preview = props.preview;
      if (preview === false) {
        return preview;
      }
      var _preview = _typeof(preview) === 'object' ? preview : {};
      return _objectSpread(_objectSpread({
        icons: icons
      }, _preview), {}, {
        transitionName: getTransitionName(rootPrefixCls.value, 'zoom', _preview.transitionName),
        maskTransitionName: getTransitionName(rootPrefixCls.value, 'fade', _preview.maskTransitionName)
      });
    });
    return function () {
      var _configProvider$local;
      var imageLocale = ((_configProvider$local = configProvider.locale) === null || _configProvider$local === void 0 ? void 0 : _configProvider$local.Image) || defaultLocale.Image;
      var defaultPreviewMask = function defaultPreviewMask() {
        return _createVNode("div", {
          "class": "".concat(prefixCls.value, "-mask-info")
        }, [_createVNode(EyeOutlined, null, null), imageLocale === null || imageLocale === void 0 ? void 0 : imageLocale.preview]);
      };
      var _props$previewMask = props.previewMask,
        previewMask = _props$previewMask === void 0 ? slots.previewMask || defaultPreviewMask : _props$previewMask;
      return _createVNode(ImageInternal, _objectSpread(_objectSpread({}, _objectSpread(_objectSpread(_objectSpread({}, attrs), props), {}, {
        prefixCls: prefixCls.value
      })), {}, {
        "preview": mergedPreview.value
      }), _objectSpread(_objectSpread({}, slots), {}, {
        previewMask: typeof previewMask === 'function' ? previewMask : null
      }));
    };
  }
});
export { imageProps };
Image.PreviewGroup = PreviewGroup;
Image.install = function (app) {
  app.component(Image.name, Image);
  app.component(Image.PreviewGroup.name, Image.PreviewGroup);
  return app;
};
export { PreviewGroup as ImagePreviewGroup };
export default Image;