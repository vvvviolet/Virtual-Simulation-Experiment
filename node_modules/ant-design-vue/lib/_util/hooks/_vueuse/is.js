"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamp = exports.rand = exports.now = exports.noop = exports.isWindow = exports.isString = exports.isObject = exports.isNumber = exports.isIOS = exports.isFunction = exports.isDef = exports.isClient = exports.isBoolean = exports.hasOwn = exports.clamp = exports.assert = void 0;
var _window, _window$navigator;
var isClient = typeof window !== 'undefined';
exports.isClient = isClient;
var isDef = function isDef(val) {
  return typeof val !== 'undefined';
};
exports.isDef = isDef;
var assert = function assert(condition) {
  var _console;
  for (var _len = arguments.length, infos = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    infos[_key - 1] = arguments[_key];
  }
  if (!condition) (_console = console).warn.apply(_console, infos);
};
exports.assert = assert;
var toString = Object.prototype.toString;
var isBoolean = function isBoolean(val) {
  return typeof val === 'boolean';
};
exports.isBoolean = isBoolean;
var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
exports.isFunction = isFunction;
var isNumber = function isNumber(val) {
  return typeof val === 'number';
};
exports.isNumber = isNumber;
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var isObject = function isObject(val) {
  return toString.call(val) === '[object Object]';
};
exports.isObject = isObject;
var isWindow = function isWindow(val) {
  return typeof window !== 'undefined' && toString.call(val) === '[object Window]';
};
exports.isWindow = isWindow;
var now = function now() {
  return Date.now();
};
exports.now = now;
var timestamp = function timestamp() {
  return +Date.now();
};
exports.timestamp = timestamp;
var clamp = function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
};
exports.clamp = clamp;
var noop = function noop() {};
exports.noop = noop;
var rand = function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.rand = rand;
var isIOS = /* #__PURE__ */isClient && ((_window = window) === null || _window === void 0 ? void 0 : (_window$navigator = _window.navigator) === null || _window$navigator === void 0 ? void 0 : _window$navigator.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
exports.isIOS = isIOS;
var hasOwn = function hasOwn(val, key) {
  return Object.prototype.hasOwnProperty.call(val, key);
};
exports.hasOwn = hasOwn;