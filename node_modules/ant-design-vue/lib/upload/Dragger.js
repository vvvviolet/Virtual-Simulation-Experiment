"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Upload = _interopRequireDefault(require("./Upload"));
var _interface = require("./interface");
var _excluded = ["height"],
  _excluded2 = ["style"];
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AUploadDragger',
  inheritAttrs: false,
  props: (0, _interface.uploadProps)(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    return function () {
      var height = props.height,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var style = attrs.style,
        restAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded2);
      var draggerProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), restAttrs), {}, {
        type: 'drag',
        style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
          height: typeof height === 'number' ? "".concat(height, "px") : height
        })
      });
      return (0, _vue.createVNode)(_Upload.default, draggerProps, slots);
    };
  }
});
exports.default = _default;