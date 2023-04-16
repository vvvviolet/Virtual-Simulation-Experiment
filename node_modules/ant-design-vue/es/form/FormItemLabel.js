import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import Col from '../grid/Col';
import { useInjectForm } from './context';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale/default';
import classNames from '../_util/classNames';
var FormItemLabel = function FormItemLabel(props, _ref) {
  var _props$label, _slots$label, _slots$tooltip, _classNames2;
  var slots = _ref.slots,
    emit = _ref.emit,
    attrs = _ref.attrs;
  var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
    prefixCls = _props$attrs.prefixCls,
    htmlFor = _props$attrs.htmlFor,
    labelCol = _props$attrs.labelCol,
    labelAlign = _props$attrs.labelAlign,
    colon = _props$attrs.colon,
    required = _props$attrs.required,
    requiredMark = _props$attrs.requiredMark;
  var _useLocaleReceiver = useLocaleReceiver('Form'),
    _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
    formLocale = _useLocaleReceiver2[0];
  var label = (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots);
  if (!label) return null;
  var _useInjectForm = useInjectForm(),
    vertical = _useInjectForm.vertical,
    contextLabelAlign = _useInjectForm.labelAlign,
    contextLabelCol = _useInjectForm.labelCol,
    labelWrap = _useInjectForm.labelWrap,
    contextColon = _useInjectForm.colon;
  var mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  var mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = classNames(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.class, _defineProperty({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap.value));
  var labelChildren = label;
  // Keep label is original where there should have no colon
  var computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  var haveColon = computedColon && !vertical.value;
  // Remove duplicated user input colon
  if (haveColon && typeof label === 'string' && label.trim() !== '') {
    labelChildren = label.replace(/[:|：]\s*$/, '');
  }
  labelChildren = _createVNode(_Fragment, null, [labelChildren, (_slots$tooltip = slots.tooltip) === null || _slots$tooltip === void 0 ? void 0 : _slots$tooltip.call(slots, {
    class: "".concat(prefixCls, "-item-tooltip")
  })]);
  // Add required mark if optional
  if (requiredMark === 'optional' && !required) {
    var _formLocale$value, _defaultLocale$Form;
    labelChildren = _createVNode(_Fragment, null, [labelChildren, _createVNode("span", {
      "class": "".concat(prefixCls, "-item-optional")
    }, [((_formLocale$value = formLocale.value) === null || _formLocale$value === void 0 ? void 0 : _formLocale$value.optional) || ((_defaultLocale$Form = defaultLocale.Form) === null || _defaultLocale$Form === void 0 ? void 0 : _defaultLocale$Form.optional)])]);
  }
  var labelClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-required"), required), _defineProperty(_classNames2, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), _defineProperty(_classNames2, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames2));
  return _createVNode(Col, _objectSpread(_objectSpread({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: function _default() {
      return [_createVNode("label", {
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
export default FormItemLabel;