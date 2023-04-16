"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideGlobalForm = exports.useInjectGlobalForm = exports.configProviderProps = exports.GlobalFormContextKey = exports.GlobalConfigContextKey = void 0;
var _vue = require("vue");
var GlobalFormContextKey = Symbol('GlobalFormContextKey');
exports.GlobalFormContextKey = GlobalFormContextKey;
var useProvideGlobalForm = function useProvideGlobalForm(state) {
  (0, _vue.provide)(GlobalFormContextKey, state);
};
exports.useProvideGlobalForm = useProvideGlobalForm;
var useInjectGlobalForm = function useInjectGlobalForm() {
  return (0, _vue.inject)(GlobalFormContextKey, {
    validateMessages: (0, _vue.computed)(function () {
      return undefined;
    })
  });
};
exports.useInjectGlobalForm = useInjectGlobalForm;
var GlobalConfigContextKey = Symbol('GlobalConfigContextKey');
exports.GlobalConfigContextKey = GlobalConfigContextKey;
var configProviderProps = function configProviderProps() {
  return {
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: {
      type: Object,
      default: undefined
    },
    input: {
      type: Object
    },
    autoInsertSpaceInButton: {
      type: Boolean,
      default: undefined
    },
    locale: {
      type: Object,
      default: undefined
    },
    pageHeader: {
      type: Object
    },
    componentSize: {
      type: String
    },
    direction: {
      type: String
    },
    space: {
      type: Object
    },
    virtual: {
      type: Boolean,
      default: undefined
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: true
    },
    form: {
      type: Object,
      default: undefined
    },
    // internal use
    notUpdateGlobalConfig: Boolean
  };
};
exports.configProviderProps = configProviderProps;