"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvidePanel = exports.useInjectPanel = exports.default = void 0;
var _vue = require("vue");
var PanelContextKey = Symbol('PanelContextProps');
var useProvidePanel = function useProvidePanel(props) {
  (0, _vue.provide)(PanelContextKey, props);
};
exports.useProvidePanel = useProvidePanel;
var useInjectPanel = function useInjectPanel() {
  return (0, _vue.inject)(PanelContextKey, {});
};
exports.useInjectPanel = useInjectPanel;
var _default = PanelContextKey;
exports.default = _default;