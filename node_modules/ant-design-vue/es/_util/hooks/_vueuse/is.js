var _window, _window$navigator;
export var isClient = typeof window !== 'undefined';
export var isDef = function isDef(val) {
  return typeof val !== 'undefined';
};
export var assert = function assert(condition) {
  var _console;
  for (var _len = arguments.length, infos = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    infos[_key - 1] = arguments[_key];
  }
  if (!condition) (_console = console).warn.apply(_console, infos);
};
var toString = Object.prototype.toString;
export var isBoolean = function isBoolean(val) {
  return typeof val === 'boolean';
};
export var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
export var isNumber = function isNumber(val) {
  return typeof val === 'number';
};
export var isString = function isString(val) {
  return typeof val === 'string';
};
export var isObject = function isObject(val) {
  return toString.call(val) === '[object Object]';
};
export var isWindow = function isWindow(val) {
  return typeof window !== 'undefined' && toString.call(val) === '[object Window]';
};
export var now = function now() {
  return Date.now();
};
export var timestamp = function timestamp() {
  return +Date.now();
};
export var clamp = function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
};
export var noop = function noop() {};
export var rand = function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export var isIOS = /* #__PURE__ */isClient && ((_window = window) === null || _window === void 0 ? void 0 : (_window$navigator = _window.navigator) === null || _window$navigator === void 0 ? void 0 : _window$navigator.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
export var hasOwn = function hasOwn(val, key) {
  return Object.prototype.hasOwnProperty.call(val, key);
};