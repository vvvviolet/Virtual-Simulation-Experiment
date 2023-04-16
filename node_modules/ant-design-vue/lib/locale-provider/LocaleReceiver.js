"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.useLocaleReceiver = useLocaleReceiver;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
var _default2 = _interopRequireDefault(require("./default"));
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'LocaleReceiver',
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var localeData = (0, _vue.inject)('localeData', {});
    var locale = (0, _vue.computed)(function () {
      var _props$componentName = props.componentName,
        componentName = _props$componentName === void 0 ? 'global' : _props$componentName,
        defaultLocale = props.defaultLocale;
      var locale = defaultLocale || _default2.default[componentName || 'global'];
      var antLocale = localeData.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    });
    var localeCode = (0, _vue.computed)(function () {
      var antLocale = localeData.antLocale;
      var localeCode = antLocale && antLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (antLocale && antLocale.exist && !localeCode) {
        return _default2.default.locale;
      }
      return localeCode;
    });
    return function () {
      var children = props.children || slots.default;
      var antLocale = localeData.antLocale;
      return children === null || children === void 0 ? void 0 : children(locale.value, localeCode.value, antLocale);
    };
  }
});
exports.default = _default;
function useLocaleReceiver(componentName, defaultLocale, propsLocale) {
  var localeData = (0, _vue.inject)('localeData', {});
  var componentLocale = (0, _vue.computed)(function () {
    var antLocale = localeData.antLocale;
    var locale = (0, _vue.unref)(defaultLocale) || _default2.default[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {}), (0, _vue.unref)(propsLocale) || {});
  });
  return [componentLocale];
}