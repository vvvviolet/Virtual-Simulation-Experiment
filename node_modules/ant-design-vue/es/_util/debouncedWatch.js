import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["eventFilter"],
  _excluded2 = ["debounce"];
// copy from https://github.dev/vueuse/vueuse
import { unref, watch } from 'vue';
var bypassFilter = function bypassFilter(invoke) {
  return invoke();
};
/**
 * Create an EventFilter that debounce the events
 *
 * @param ms
 */
export function debounceFilter(ms) {
  var timer;
  var filter = function filter(invoke) {
    var duration = unref(ms);
    if (timer) clearTimeout(timer);
    if (duration <= 0) return invoke();
    timer = setTimeout(invoke, duration);
  };
  return filter;
}
/**
 * @internal
 */
function createFilterWrapper(filter, fn) {
  function wrapper() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    filter(function () {
      return fn.apply(_this, args);
    }, {
      fn: fn,
      thisArg: this,
      args: args
    });
  }
  return wrapper;
}
// implementation
export function watchWithFilter(source, cb) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$eventFilter = options.eventFilter,
    eventFilter = _options$eventFilter === void 0 ? bypassFilter : _options$eventFilter,
    watchOptions = _objectWithoutProperties(options, _excluded);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
// implementation
export default function debouncedWatch(source, cb) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$debounce = options.debounce,
    debounce = _options$debounce === void 0 ? 0 : _options$debounce,
    watchOptions = _objectWithoutProperties(options, _excluded2);
  return watchWithFilter(source, cb, _objectSpread(_objectSpread({}, watchOptions), {}, {
    eventFilter: debounceFilter(debounce)
  }));
}