"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TabPane", {
  enumerable: true,
  get: function get() {
    return _TabPane.default;
  }
});
exports.default = void 0;
var _Tabs = _interopRequireDefault(require("./Tabs"));
var _TabPane = _interopRequireDefault(require("./TabPanelList/TabPane"));
// base rc-tabs 11.12.0
var _default = _Tabs.default;
exports.default = _default;