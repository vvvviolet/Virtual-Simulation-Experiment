import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { unref, inject, defineComponent, computed } from 'vue';
import defaultLocaleData from './default';
export default defineComponent({
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
    var localeData = inject('localeData', {});
    var locale = computed(function () {
      var _props$componentName = props.componentName,
        componentName = _props$componentName === void 0 ? 'global' : _props$componentName,
        defaultLocale = props.defaultLocale;
      var locale = defaultLocale || defaultLocaleData[componentName || 'global'];
      var antLocale = localeData.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _objectSpread(_objectSpread({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    });
    var localeCode = computed(function () {
      var antLocale = localeData.antLocale;
      var localeCode = antLocale && antLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (antLocale && antLocale.exist && !localeCode) {
        return defaultLocaleData.locale;
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
export function useLocaleReceiver(componentName, defaultLocale, propsLocale) {
  var localeData = inject('localeData', {});
  var componentLocale = computed(function () {
    var antLocale = localeData.antLocale;
    var locale = unref(defaultLocale) || defaultLocaleData[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _objectSpread(_objectSpread(_objectSpread({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {}), unref(propsLocale) || {});
  });
  return [componentLocale];
}