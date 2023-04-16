"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScroll;
exports.isWindow = isWindow;
function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}
function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }
  var method = top ? 'scrollTop' : 'scrollLeft';
  var result = 0;
  if (isWindow(target)) {
    result = target[top ? 'pageYOffset' : 'pageXOffset'];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }
  if (target && !isWindow(target) && typeof result !== 'number') {
    var _documentElement;
    result = (_documentElement = (target.ownerDocument || target).documentElement) === null || _documentElement === void 0 ? void 0 : _documentElement[method];
  }
  return result;
}