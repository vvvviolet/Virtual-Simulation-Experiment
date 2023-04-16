"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _configProvider = require("../../config-provider");
var _default = function _default(name, props) {
  var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
  var prefixCls = (0, _vue.computed)(function () {
    return configProvider.getPrefixCls(name, props.prefixCls);
  });
  var direction = (0, _vue.computed)(function () {
    var _props$direction;
    return (_props$direction = props.direction) !== null && _props$direction !== void 0 ? _props$direction : configProvider.direction;
  });
  var rootPrefixCls = (0, _vue.computed)(function () {
    return configProvider.getPrefixCls();
  });
  var autoInsertSpaceInButton = (0, _vue.computed)(function () {
    return configProvider.autoInsertSpaceInButton;
  });
  var renderEmpty = (0, _vue.computed)(function () {
    return configProvider.renderEmpty;
  });
  var space = (0, _vue.computed)(function () {
    return configProvider.space;
  });
  var pageHeader = (0, _vue.computed)(function () {
    return configProvider.pageHeader;
  });
  var form = (0, _vue.computed)(function () {
    return configProvider.form;
  });
  var getTargetContainer = (0, _vue.computed)(function () {
    return props.getTargetContainer || configProvider.getTargetContainer;
  });
  var getPopupContainer = (0, _vue.computed)(function () {
    return props.getPopupContainer || configProvider.getPopupContainer;
  });
  var dropdownMatchSelectWidth = (0, _vue.computed)(function () {
    var _props$dropdownMatchS;
    return (_props$dropdownMatchS = props.dropdownMatchSelectWidth) !== null && _props$dropdownMatchS !== void 0 ? _props$dropdownMatchS : configProvider.dropdownMatchSelectWidth;
  });
  var virtual = (0, _vue.computed)(function () {
    return (props.virtual === undefined ? configProvider.virtual !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  var size = (0, _vue.computed)(function () {
    return props.size || configProvider.componentSize;
  });
  var autocomplete = (0, _vue.computed)(function () {
    var _configProvider$input;
    return props.autocomplete || ((_configProvider$input = configProvider.input) === null || _configProvider$input === void 0 ? void 0 : _configProvider$input.autocomplete);
  });
  var csp = (0, _vue.computed)(function () {
    return configProvider.csp;
  });
  return {
    configProvider: configProvider,
    prefixCls: prefixCls,
    direction: direction,
    size: size,
    getTargetContainer: getTargetContainer,
    getPopupContainer: getPopupContainer,
    space: space,
    pageHeader: pageHeader,
    form: form,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    renderEmpty: renderEmpty,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    rootPrefixCls: rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete: autocomplete,
    csp: csp
  };
};
exports.default = _default;