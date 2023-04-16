"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ImagePreviewGroup", {
  enumerable: true,
  get: function get() {
    return _PreviewGroup.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "imageProps", {
  enumerable: true,
  get: function get() {
    return _Image.imageProps;
  }
});
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _vcImage = _interopRequireDefault(require("../vc-image"));
var _Image = require("../vc-image/src/Image");
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _PreviewGroup = _interopRequireWildcard(require("./PreviewGroup"));
var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EyeOutlined"));
var _transition = require("../_util/transition");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Image = (0, _vue.defineComponent)({
  name: 'AImage',
  inheritAttrs: false,
  props: (0, _Image.imageProps)(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = (0, _useConfigInject2.default)('image', props),
      prefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      configProvider = _useConfigInject.configProvider;
    var mergedPreview = (0, _vue.computed)(function () {
      var preview = props.preview;
      if (preview === false) {
        return preview;
      }
      var _preview = (0, _typeof2.default)(preview) === 'object' ? preview : {};
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({
        icons: _PreviewGroup.icons
      }, _preview), {}, {
        transitionName: (0, _transition.getTransitionName)(rootPrefixCls.value, 'zoom', _preview.transitionName),
        maskTransitionName: (0, _transition.getTransitionName)(rootPrefixCls.value, 'fade', _preview.maskTransitionName)
      });
    });
    return function () {
      var _configProvider$local;
      var imageLocale = ((_configProvider$local = configProvider.locale) === null || _configProvider$local === void 0 ? void 0 : _configProvider$local.Image) || _en_US.default.Image;
      var defaultPreviewMask = function defaultPreviewMask() {
        return (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls.value, "-mask-info")
        }, [(0, _vue.createVNode)(_EyeOutlined.default, null, null), imageLocale === null || imageLocale === void 0 ? void 0 : imageLocale.preview]);
      };
      var _props$previewMask = props.previewMask,
        previewMask = _props$previewMask === void 0 ? slots.previewMask || defaultPreviewMask : _props$previewMask;
      return (0, _vue.createVNode)(_vcImage.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), props), {}, {
        prefixCls: prefixCls.value
      })), {}, {
        "preview": mergedPreview.value
      }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
        previewMask: typeof previewMask === 'function' ? previewMask : null
      }));
    };
  }
});
Image.PreviewGroup = _PreviewGroup.default;
Image.install = function (app) {
  app.component(Image.name, Image);
  app.component(Image.PreviewGroup.name, Image.PreviewGroup);
  return app;
};
var _default = Image;
exports.default = _default;