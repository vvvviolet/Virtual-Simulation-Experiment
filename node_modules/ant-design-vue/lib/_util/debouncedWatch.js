"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounceFilter = debounceFilter;
exports.default = debouncedWatch;
exports.watchWithFilter = watchWithFilter;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _vue = require("vue");
var _excluded = ["eventFilter"],
  _excluded2 = ["debounce"];
var bypassFilter = function bypassFilter(invoke) {
  return invoke();
};
/**
 * Create an EventFilter that debounce the events
 *
 * @param ms
 */
function debounceFilter(ms) {
  var timer;
  var filter = function filter(invoke) {
    var duration = (0, _vue.unref)(ms);
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
function watchWithFilter(source, cb) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$eventFilter = options.eventFilter,
    eventFilter = _options$eventFilter === void 0 ? bypassFilter : _options$eventFilter,
    watchOptions = (0, _objectWithoutProperties2.default)(options, _excluded);
  return (0, _vue.watch)(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
// implementation
function debouncedWatch(source, cb) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$debounce = options.debounce,
    debounce = _options$debounce === void 0 ? 0 : _options$debounce,
    watchOptions = (0, _objectWithoutProperties2.default)(options, _excluded2);
  return watchWithFilter(source, cb, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, watchOptions), {}, {
    eventFilter: debounceFilter(debounce)
  }));
}