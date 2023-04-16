"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "dialogProps", {
  enumerable: true,
  get: function get() {
    return _IDialogPropTypes.default;
  }
});
var _DialogWrap = _interopRequireDefault(require("./DialogWrap"));
var _IDialogPropTypes = _interopRequireDefault(require("./IDialogPropTypes"));
// based on vc-dialog 8.6.0
var _default = _DialogWrap.default;
exports.default = _default;