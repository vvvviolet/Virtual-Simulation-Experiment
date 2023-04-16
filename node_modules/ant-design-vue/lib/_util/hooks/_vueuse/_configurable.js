"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultWindow = exports.defaultNavigator = exports.defaultLocation = exports.defaultDocument = void 0;
var _is = require("./is");
var defaultWindow = /* #__PURE__ */_is.isClient ? window : undefined;
exports.defaultWindow = defaultWindow;
var defaultDocument = /* #__PURE__ */_is.isClient ? window.document : undefined;
exports.defaultDocument = defaultDocument;
var defaultNavigator = /* #__PURE__ */_is.isClient ? window.navigator : undefined;
exports.defaultNavigator = defaultNavigator;
var defaultLocation = /* #__PURE__ */_is.isClient ? window.location : undefined;
exports.defaultLocation = defaultLocation;