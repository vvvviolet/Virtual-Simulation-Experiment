"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ANT_MARK = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
var _warning = _interopRequireDefault(require("../_util/warning"));
var _type = require("../_util/type");
var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;
var LocaleProvider = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ALocaleProvider',
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    (0, _warning.default)(props.ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead');
    var state = (0, _vue.reactive)({
      antLocale: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.locale), {}, {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    (0, _vue.provide)('localeData', state);
    (0, _vue.watch)(function () {
      return props.locale;
    }, function () {
      state.antLocale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.locale), {}, {
        exist: true
      });
    }, {
      immediate: true
    });
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
/* istanbul ignore next */
LocaleProvider.install = function (app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};
var _default = (0, _type.withInstall)(LocaleProvider);
exports.default = _default;