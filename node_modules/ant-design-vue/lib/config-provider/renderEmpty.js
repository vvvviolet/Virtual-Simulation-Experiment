"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _empty = _interopRequireDefault(require("../empty"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var RenderEmpty = function RenderEmpty(props) {
  var _useConfigInject = (0, _useConfigInject2.default)('empty', props),
    prefixCls = _useConfigInject.prefixCls;
  var renderHtml = function renderHtml(componentName) {
    switch (componentName) {
      case 'Table':
      case 'List':
        return (0, _vue.createVNode)(_empty.default, {
          "image": _empty.default.PRESENTED_IMAGE_SIMPLE
        }, null);
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return (0, _vue.createVNode)(_empty.default, {
          "image": _empty.default.PRESENTED_IMAGE_SIMPLE,
          "class": "".concat(prefixCls.value, "-small")
        }, null);
      default:
        return (0, _vue.createVNode)(_empty.default, null, null);
    }
  };
  return renderHtml(props.componentName);
};
function renderEmpty(componentName) {
  return (0, _vue.createVNode)(RenderEmpty, {
    "componentName": componentName
  }, null);
}
var _default = renderEmpty;
exports.default = _default;