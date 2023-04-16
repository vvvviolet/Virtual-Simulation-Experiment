"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _PreviewGroup = _interopRequireDefault(require("../vc-image/src/PreviewGroup"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _RotateLeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RotateLeftOutlined"));
var _RotateRightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RotateRightOutlined"));
var _ZoomInOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ZoomInOutlined"));
var _ZoomOutOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ZoomOutOutlined"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));
var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LeftOutlined"));
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));
var icons = {
  rotateLeft: (0, _vue.createVNode)(_RotateLeftOutlined.default, null, null),
  rotateRight: (0, _vue.createVNode)(_RotateRightOutlined.default, null, null),
  zoomIn: (0, _vue.createVNode)(_ZoomInOutlined.default, null, null),
  zoomOut: (0, _vue.createVNode)(_ZoomOutOutlined.default, null, null),
  close: (0, _vue.createVNode)(_CloseOutlined.default, null, null),
  left: (0, _vue.createVNode)(_LeftOutlined.default, null, null),
  right: (0, _vue.createVNode)(_RightOutlined.default, null, null)
};
exports.icons = icons;
var InternalPreviewGroup = (0, _vue.defineComponent)({
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
    var _useConfigInject = (0, _useConfigInject2.default)('image', props),
      getPrefixCls = _useConfigInject.getPrefixCls;
    var prefixCls = (0, _vue.computed)(function () {
      return getPrefixCls('image-preview', props.previewPrefixCls);
    });
    return function () {
      return (0, _vue.createVNode)(_PreviewGroup.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), props)), {}, {
        "icons": icons,
        "previewPrefixCls": prefixCls.value
      }), slots);
    };
  }
});
var _default = InternalPreviewGroup;
exports.default = _default;