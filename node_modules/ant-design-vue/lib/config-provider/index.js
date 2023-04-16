"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalConfigForApi = exports.globalConfig = exports.defaultPrefixCls = exports.defaultConfigProvider = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _renderEmpty = _interopRequireDefault(require("./renderEmpty"));
var _localeProvider = _interopRequireWildcard(require("../locale-provider"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _message = _interopRequireDefault(require("../message"));
var _notification = _interopRequireDefault(require("../notification"));
var _cssVariables = require("./cssVariables");
var _default3 = _interopRequireDefault(require("../locale/default"));
var _context = require("./context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var defaultPrefixCls = 'ant';
exports.defaultPrefixCls = defaultPrefixCls;
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
var globalConfigByCom = (0, _vue.reactive)({});
var globalConfigBySet = (0, _vue.reactive)({}); // 权重最大
var globalConfigForApi = (0, _vue.reactive)({});
exports.globalConfigForApi = globalConfigForApi;
(0, _vue.watchEffect)(function () {
  (0, _extends2.default)(globalConfigForApi, globalConfigByCom, globalConfigBySet);
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
  stopWatchEffect = (0, _vue.watchEffect)(function () {
    (0, _extends2.default)(globalConfigBySet, (0, _vue.reactive)(params));
    (0, _extends2.default)(globalConfigForApi, (0, _vue.reactive)(params));
  });
  if (params.theme) {
    (0, _cssVariables.registerTheme)(getGlobalPrefixCls(), params.theme);
  }
};
var globalConfig = function globalConfig() {
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
exports.globalConfig = globalConfig;
var ConfigProvider = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AConfigProvider',
  inheritAttrs: false,
  props: (0, _context.configProviderProps)(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var getPrefixCls = function getPrefixCls(suffixCls, customizePrefixCls) {
      var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === void 0 ? 'ant' : _props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };
    var renderEmptyComponent = function renderEmptyComponent(name) {
      var renderEmpty = props.renderEmpty || slots.renderEmpty || _renderEmpty.default;
      return renderEmpty(name);
    };
    var getPrefixClsWrapper = function getPrefixClsWrapper(suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
    var configProvider = (0, _vue.reactive)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      getPrefixCls: getPrefixClsWrapper,
      renderEmpty: renderEmptyComponent
    }));
    Object.keys(props).forEach(function (key) {
      (0, _vue.watch)(function () {
        return props[key];
      }, function () {
        configProvider[key] = props[key];
      });
    });
    if (!props.notUpdateGlobalConfig) {
      (0, _extends2.default)(globalConfigByCom, configProvider);
      (0, _vue.watch)(configProvider, function () {
        (0, _extends2.default)(globalConfigByCom, configProvider);
      });
    }
    var validateMessagesRef = (0, _vue.computed)(function () {
      // Additional Form provider
      var validateMessages = {};
      if (props.locale) {
        var _props$locale$Form, _defaultLocale$Form;
        validateMessages = ((_props$locale$Form = props.locale.Form) === null || _props$locale$Form === void 0 ? void 0 : _props$locale$Form.defaultValidateMessages) || ((_defaultLocale$Form = _default3.default.Form) === null || _defaultLocale$Form === void 0 ? void 0 : _defaultLocale$Form.defaultValidateMessages) || {};
      }
      if (props.form && props.form.validateMessages) {
        validateMessages = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, validateMessages), props.form.validateMessages);
      }
      return validateMessages;
    });
    (0, _context.useProvideGlobalForm)({
      validateMessages: validateMessagesRef
    });
    (0, _vue.provide)('configProvider', configProvider);
    var renderProvider = function renderProvider(legacyLocale) {
      var _slots$default;
      return (0, _vue.createVNode)(_localeProvider.default, {
        "locale": props.locale || legacyLocale,
        "ANT_MARK__": _localeProvider.ANT_MARK
      }, {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
    (0, _vue.watchEffect)(function () {
      if (props.direction) {
        _message.default.config({
          rtl: props.direction === 'rtl'
        });
        _notification.default.config({
          rtl: props.direction === 'rtl'
        });
      }
    });
    return function () {
      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "children": function children(_, __, legacyLocale) {
          return renderProvider(legacyLocale);
        }
      }, null);
    };
  }
});
var defaultConfigProvider = (0, _vue.reactive)({
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty.default,
  direction: 'ltr'
});
exports.defaultConfigProvider = defaultConfigProvider;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function (app) {
  app.component(ConfigProvider.name, ConfigProvider);
};
var _default2 = ConfigProvider;
exports.default = _default2;