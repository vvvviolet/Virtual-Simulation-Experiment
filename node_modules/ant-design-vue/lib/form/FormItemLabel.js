"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Col = _interopRequireDefault(require("../grid/Col"));
var _context = require("./context");
var _LocaleReceiver = require("../locale-provider/LocaleReceiver");
var _default3 = _interopRequireDefault(require("../locale/default"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var FormItemLabel = function FormItemLabel(props, _ref) {
  var _props$label, _slots$label, _slots$tooltip, _classNames2;
  var slots = _ref.slots,
    emit = _ref.emit,
    attrs = _ref.attrs;
  var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
    prefixCls = _props$attrs.prefixCls,
    htmlFor = _props$attrs.htmlFor,
    labelCol = _props$attrs.labelCol,
    labelAlign = _props$attrs.labelAlign,
    colon = _props$attrs.colon,
    required = _props$attrs.required,
    requiredMark = _props$attrs.requiredMark;
  var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Form'),
    _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
    formLocale = _useLocaleReceiver2[0];
  var label = (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots);
  if (!label) return null;
  var _useInjectForm = (0, _context.useInjectForm)(),
    vertical = _useInjectForm.vertical,
    contextLabelAlign = _useInjectForm.labelAlign,
    contextLabelCol = _useInjectForm.labelCol,
    labelWrap = _useInjectForm.labelWrap,
    contextColon = _useInjectForm.colon;
  var mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  var mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = (0, _classNames3.default)(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.class, (0, _defineProperty2.default)({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap.value));
  var labelChildren = label;
  // Keep label is original where there should have no colon
  var computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  var haveColon = computedColon && !vertical.value;
  // Remove duplicated user input colon
  if (haveColon && typeof label === 'string' && label.trim() !== '') {
    labelChildren = label.replace(/[:|：]\s*$/, '');
  }
  labelChildren = (0, _vue.createVNode)(_vue.Fragment, null, [labelChildren, (_slots$tooltip = slots.tooltip) === null || _slots$tooltip === void 0 ? void 0 : _slots$tooltip.call(slots, {
    class: "".concat(prefixCls, "-item-tooltip")
  })]);
  // Add required mark if optional
  if (requiredMark === 'optional' && !required) {
    var _formLocale$value, _defaultLocale$Form;
    labelChildren = (0, _vue.createVNode)(_vue.Fragment, null, [labelChildren, (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-item-optional")
    }, [((_formLocale$value = formLocale.value) === null || _formLocale$value === void 0 ? void 0 : _formLocale$value.optional) || ((_defaultLocale$Form = _default3.default.Form) === null || _defaultLocale$Form === void 0 ? void 0 : _defaultLocale$Form.optional)])]);
  }
  var labelClassName = (0, _classNames3.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-item-required"), required), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames2));
  return (0, _vue.createVNode)(_Col.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: function _default() {
      return [(0, _vue.createVNode)("label", {
        "for": htmlFor,
        "class": labelClassName,
        "title": typeof label === 'string' ? label : '',
        "onClick": function onClick(e) {
          return emit('click', e);
        }
      }, [labelChildren])];
    }
  });
};
FormItemLabel.displayName = 'FormItemLabel';
FormItemLabel.inheritAttrs = false;
var _default2 = FormItemLabel;
exports.default = _default2;