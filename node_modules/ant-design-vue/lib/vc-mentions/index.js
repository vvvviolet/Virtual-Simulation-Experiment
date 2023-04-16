"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Option", {
  enumerable: true,
  get: function get() {
    return _Option.default;
  }
});
exports.default = void 0;
var _Mentions = _interopRequireDefault(require("./src/Mentions"));
var _Option = _interopRequireDefault(require("./src/Option"));
// base rc-mentions .6.2
var _default = _Mentions.default;
exports.default = _default;