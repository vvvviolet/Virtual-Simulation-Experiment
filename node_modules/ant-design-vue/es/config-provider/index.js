import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { computed, reactive, provide, defineComponent, watch, watchEffect } from 'vue';
import defaultRenderEmpty from './renderEmpty';
import LocaleProvider, { ANT_MARK } from '../locale-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import message from '../message';
import notification from '../notification';
import { registerTheme } from './cssVariables';
import defaultLocale from '../locale/default';
import { configProviderProps, useProvideGlobalForm } from './context';
export var defaultPrefixCls = 'ant';
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
var globalConfigByCom = reactive({});
var globalConfigBySet = reactive({}); // 权重最大
export var globalConfigForApi = reactive({});
watchEffect(function () {
  _extends(globalConfigForApi, globalConfigByCom, globalConfigBySet);
  globalConfigForApi.prefixCls = getGlobalPrefixCls();
  globalConfigForApi.getPrefixCls = function (suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "".concat(globalConfigForApi.prefixCls, "-").concat(suffixCls) : globalConfigForApi.prefixCls;
  };
  globalConfigForApi.getRootPrefixCls = function (rootPrefixCls, customizePrefixCls) {
    // Customize rootPrefixCls is first priority
    if (rootPrefixCls) {
      return rootPrefixCls;
    }
    // If Global prefixCls provided, use this
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls
    if (customizePrefixCls && customizePrefixCls.includes('-')) {
      return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  };
});
var stopWatchEffect;
var setGlobalConfig = function setGlobalConfig(params) {
  if (stopWatchEffect) {
    stopWatchEffect();
  }
  stopWatchEffect = watchEffect(function () {
    _extends(globalConfigBySet, reactive(params));
    _extends(globalConfigForApi, reactive(params));
  });
  if (params.theme) {
    registerTheme(getGlobalPrefixCls(), params.theme);
  }
};
export var globalConfig = function globalConfig() {
  return {
    getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
    },
    getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
      // Customize rootPrefixCls is first priority
      if (rootPrefixCls) {
        return rootPrefixCls;
      }
      // If Global prefixCls provided, use this
      if (globalConfigForApi.prefixCls) {
        return globalConfigForApi.prefixCls;
      }
      // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls
      if (customizePrefixCls && customizePrefixCls.includes('-')) {
        return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
      }
      // Fallback to default prefixCls
      return getGlobalPrefixCls();
    }
  };
};
var ConfigProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AConfigProvider',
  inheritAttrs: false,
  props: configProviderProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var getPrefixCls = function getPrefixCls(suffixCls, customizePrefixCls) {
      var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === void 0 ? 'ant' : _props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };
    var renderEmptyComponent = function renderEmptyComponent(name) {
      var renderEmpty = props.renderEmpty || slots.renderEmpty || defaultRenderEmpty;
      return renderEmpty(name);
    };
    var getPrefixClsWrapper = function getPrefixClsWrapper(suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
    var configProvider = reactive(_objectSpread(_objectSpread({}, props), {}, {
      getPrefixCls: getPrefixClsWrapper,
      renderEmpty: renderEmptyComponent
    }));
    Object.keys(props).forEach(function (key) {
      watch(function () {
        return props[key];
      }, function () {
        configProvider[key] = props[key];
      });
    });
    if (!props.notUpdateGlobalConfig) {
      _extends(globalConfigByCom, configProvider);
      watch(configProvider, function () {
        _extends(globalConfigByCom, configProvider);
      });
    }
    var validateMessagesRef = computed(function () {
      // Additional Form provider
      var validateMessages = {};
      if (props.locale) {
        var _props$locale$Form, _defaultLocale$Form;
        validateMessages = ((_props$locale$Form = props.locale.Form) === null || _props$locale$Form === void 0 ? void 0 : _props$locale$Form.defaultValidateMessages) || ((_defaultLocale$Form = defaultLocale.Form) === null || _defaultLocale$Form === void 0 ? void 0 : _defaultLocale$Form.defaultValidateMessages) || {};
      }
      if (props.form && props.form.validateMessages) {
        validateMessages = _objectSpread(_objectSpread({}, validateMessages), props.form.validateMessages);
      }
      return validateMessages;
    });
    useProvideGlobalForm({
      validateMessages: validateMessagesRef
    });
    provide('configProvider', configProvider);
    var renderProvider = function renderProvider(legacyLocale) {
      var _slots$default;
      return _createVNode(LocaleProvider, {
        "locale": props.locale || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
    watchEffect(function () {
      if (props.direction) {
        message.config({
          rtl: props.direction === 'rtl'
        });
        notification.config({
          rtl: props.direction === 'rtl'
        });
      }
    });
    return function () {
      return _createVNode(LocaleReceiver, {
        "children": function children(_, __, legacyLocale) {
          return renderProvider(legacyLocale);
        }
      }, null);
    };
  }
});
export var defaultConfigProvider = reactive({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: defaultRenderEmpty,
  direction: 'ltr'
});
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function (app) {
  app.component(ConfigProvider.name, ConfigProvider);
};
export default ConfigProvider;