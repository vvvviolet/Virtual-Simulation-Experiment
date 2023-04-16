import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { provide, defineComponent, reactive, watch } from 'vue';
import warning from '../_util/warning';
import { withInstall } from '../_util/type';
export var ANT_MARK = 'internalMark';
var LocaleProvider = defineComponent({
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
    warning(props.ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead');
    var state = reactive({
      antLocale: _objectSpread(_objectSpread({}, props.locale), {}, {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide('localeData', state);
    watch(function () {
      return props.locale;
    }, function () {
      state.antLocale = _objectSpread(_objectSpread({}, props.locale), {}, {
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
export default withInstall(LocaleProvider);