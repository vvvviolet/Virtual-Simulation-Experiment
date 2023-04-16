"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResizeObserver = useResizeObserver;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _tryOnScopeDispose = require("./tryOnScopeDispose");
var _vue = require("vue");
var _unrefElement = require("./unrefElement");
var _useSupported = require("./useSupported");
var _configurable = require("./_configurable");
var _excluded = ["window"];
/**
 * Reports changes to the dimensions of an Element's content or the border-box
 *
 * @see https://vueuse.org/useResizeObserver
 * @param target
 * @param callback
 * @param options
 */
function useResizeObserver(target, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$window = options.window,
    window = _options$window === void 0 ? _configurable.defaultWindow : _options$window,
    observerOptions = (0, _objectWithoutProperties2.default)(options, _excluded);
  var observer;
  var isSupported = (0, _useSupported.useSupported)(function () {
    return window && 'ResizeObserver' in window;
  });
  var cleanup = function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };
  var stopWatch = (0, _vue.watch)(function () {
    return (0, _unrefElement.unrefElement)(target);
  }, function (el) {
    cleanup();
    if (isSupported.value && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, {
    immediate: true,
    flush: 'post'
  });
  var stop = function stop() {
    cleanup();
    stopWatch();
  };
  (0, _tryOnScopeDispose.tryOnScopeDispose)(stop);
  return {
    isSupported: isSupported,
    stop: stop
  };
}