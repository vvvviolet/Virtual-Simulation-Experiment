"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _propsUtil = require("../_util/props-util");
var _AjaxUploader = _interopRequireDefault(require("./AjaxUploader"));
var _interface = require("./interface");
function empty() {}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Upload',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _interface.uploadProps)(), {
    componentTag: 'span',
    prefixCls: 'rc-upload',
    data: {},
    headers: {},
    name: 'file',
    multipart: false,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
    openFileDialogOnClick: true
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var uploader = (0, _vue.ref)();
    var abort = function abort(file) {
      var _uploader$value;
      (_uploader$value = uploader.value) === null || _uploader$value === void 0 ? void 0 : _uploader$value.abort(file);
    };
    expose({
      abort: abort
    });
    return function () {
      return (0, _vue.createVNode)(_AjaxUploader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs), {}, {
        "ref": uploader
      }), slots);
    };
  }
});
exports.default = _default;