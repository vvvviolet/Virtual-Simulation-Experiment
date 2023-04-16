import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["window"];
import { tryOnScopeDispose } from './tryOnScopeDispose';
import { watch } from 'vue';
import { unrefElement } from './unrefElement';
import { useSupported } from './useSupported';
import { defaultWindow } from './_configurable';
/**
 * Reports changes to the dimensions of an Element's content or the border-box
 *
 * @see https://vueuse.org/useResizeObserver
 * @param target
 * @param callback
 * @param options
 */
export function useResizeObserver(target, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$window = options.window,
    window = _options$window === void 0 ? defaultWindow : _options$window,
    observerOptions = _objectWithoutProperties(options, _excluded);
  var observer;
  var isSupported = useSupported(function () {
    return window && 'ResizeObserver' in window;
  });
  var cleanup = function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };
  var stopWatch = watch(function () {
    return unrefElement(target);
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
  tryOnScopeDispose(stop);
  return {
    isSupported: isSupported,
    stop: stop
  };
}