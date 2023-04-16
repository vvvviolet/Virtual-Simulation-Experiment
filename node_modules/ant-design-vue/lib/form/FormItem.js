"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formItemProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _Row = _interopRequireDefault(require("../grid/Row"));
var _propsUtil = require("../_util/props-util");
var _validateUtil = require("./utils/validateUtil");
var _valueUtil = require("./utils/valueUtil");
var _typeUtil = require("./utils/typeUtil");
var _warning = require("../vc-util/warning");
var _find = _interopRequireDefault(require("lodash/find"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _context = require("./context");
var _FormItemLabel = _interopRequireDefault(require("./FormItemLabel"));
var _FormItemInput = _interopRequireDefault(require("./FormItemInput"));
var _FormItemContext = require("./FormItemContext");
var _useDebounce = _interopRequireDefault(require("./utils/useDebounce"));
var ValidateStatuses = (0, _type.tuple)('success', 'warning', 'error', 'validating', '');
function getPropByPath(obj, namePathList, strict) {
  var tempObj = obj;
  var keyArr = namePathList;
  var i = 0;
  try {
    for (var len = keyArr.length; i < len - 1; ++i) {
      if (!tempObj && !strict) break;
      var key = keyArr[i];
      if (key in tempObj) {
        tempObj = tempObj[key];
      } else {
        if (strict) {
          throw Error('please transfer a valid name path to form item!');
        }
        break;
      }
    }
    if (strict && !tempObj) {
      throw Error('please transfer a valid name path to form item!');
    }
  } catch (error) {
    console.error('please transfer a valid name path to form item!');
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : undefined
  };
}
var formItemProps = function formItemProps() {
  return {
    htmlFor: String,
    prefixCls: String,
    label: _vueTypes.default.any,
    help: _vueTypes.default.any,
    extra: _vueTypes.default.any,
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    hasFeedback: {
      type: Boolean,
      default: false
    },
    colon: {
      type: Boolean,
      default: undefined
    },
    labelAlign: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right')),
    prop: {
      type: [String, Number, Array]
    },
    name: {
      type: [String, Number, Array]
    },
    rules: [Array, Object],
    autoLink: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: undefined
    },
    validateFirst: {
      type: Boolean,
      default: undefined
    },
    validateStatus: _vueTypes.default.oneOf((0, _type.tuple)('', 'success', 'warning', 'error', 'validating')),
    validateTrigger: {
      type: [String, Array]
    },
    messageVariables: {
      type: Object
    },
    hidden: Boolean,
    noStyle: Boolean
  };
};
exports.formItemProps = formItemProps;
var indexGuid = 0;
// default form item id prefix.
var defaultItemNamePrefixCls = 'form_item';
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AFormItem',
  inheritAttrs: false,
  __ANT_NEW_FORM_ITEM: true,
  props: formItemProps(),
  slots: ['help', 'label', 'extra'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    (0, _warning.warning)(props.prop === undefined, "`prop` is deprecated. Please use `name` instead.");
    var eventKey = "form-item-".concat(++indexGuid);
    var _useConfigInject = (0, _useConfigInject2.default)('form', props),
      prefixCls = _useConfigInject.prefixCls;
    var formContext = (0, _context.useInjectForm)();
    var fieldName = (0, _vue.computed)(function () {
      return props.name || props.prop;
    });
    var errors = (0, _vue.ref)([]);
    var validateDisabled = (0, _vue.ref)(false);
    var inputRef = (0, _vue.ref)();
    var namePath = (0, _vue.computed)(function () {
      var val = fieldName.value;
      return (0, _valueUtil.getNamePath)(val);
    });
    var fieldId = (0, _vue.computed)(function () {
      if (!namePath.value.length) {
        return undefined;
      } else {
        var formName = formContext.name.value;
        var mergedId = namePath.value.join('_');
        return formName ? "".concat(formName, "_").concat(mergedId) : "".concat(defaultItemNamePrefixCls, "_").concat(mergedId);
      }
    });
    var getNewFieldValue = function getNewFieldValue() {
      var model = formContext.model.value;
      if (!model || !fieldName.value) {
        return;
      } else {
        return getPropByPath(model, namePath.value, true).v;
      }
    };
    var fieldValue = (0, _vue.computed)(function () {
      return getNewFieldValue();
    });
    var initialValue = (0, _vue.ref)((0, _cloneDeep.default)(fieldValue.value));
    var mergedValidateTrigger = (0, _vue.computed)(function () {
      var validateTrigger = props.validateTrigger !== undefined ? props.validateTrigger : formContext.validateTrigger.value;
      validateTrigger = validateTrigger === undefined ? 'change' : validateTrigger;
      return (0, _typeUtil.toArray)(validateTrigger);
    });
    var rulesRef = (0, _vue.computed)(function () {
      var formRules = formContext.rules.value;
      var selfRules = props.rules;
      var requiredRule = props.required !== undefined ? {
        required: !!props.required,
        trigger: mergedValidateTrigger.value
      } : [];
      var prop = getPropByPath(formRules, namePath.value);
      formRules = formRules ? prop.o[prop.k] || prop.v : [];
      var rules = [].concat(selfRules || formRules || []);
      if ((0, _find.default)(rules, function (rule) {
        return rule.required;
      })) {
        return rules;
      } else {
        return rules.concat(requiredRule);
      }
    });
    var isRequired = (0, _vue.computed)(function () {
      var rules = rulesRef.value;
      var isRequired = false;
      if (rules && rules.length) {
        rules.every(function (rule) {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired || props.required;
    });
    var validateState = (0, _vue.ref)();
    (0, _vue.watchEffect)(function () {
      validateState.value = props.validateStatus;
    });
    var messageVariables = (0, _vue.computed)(function () {
      var variables = {};
      if (typeof props.label === 'string') {
        variables.label = props.label;
      } else if (props.name) {
        variables.label = String(name);
      }
      if (props.messageVariables) {
        variables = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, variables), props.messageVariables);
      }
      return variables;
    });
    var validateRules = function validateRules(options) {
      // no name, no value, so the validate result is incorrect
      if (namePath.value.length === 0) {
        return;
      }
      var _props$validateFirst = props.validateFirst,
        validateFirst = _props$validateFirst === void 0 ? false : _props$validateFirst;
      var _ref2 = options || {},
        triggerName = _ref2.triggerName;
      var filteredRules = rulesRef.value;
      if (triggerName) {
        filteredRules = filteredRules.filter(function (rule) {
          var trigger = rule.trigger;
          if (!trigger && !mergedValidateTrigger.value.length) {
            return true;
          }
          var triggerList = (0, _typeUtil.toArray)(trigger || mergedValidateTrigger.value);
          return triggerList.includes(triggerName);
        });
      }
      if (!filteredRules.length) {
        return Promise.resolve();
      }
      var promise = (0, _validateUtil.validateRules)(namePath.value, fieldValue.value, filteredRules, (0, _objectSpread2.default)({
        validateMessages: formContext.validateMessages.value
      }, options), validateFirst, messageVariables.value);
      validateState.value = 'validating';
      errors.value = [];
      promise.catch(function (e) {
        return e;
      }).then(function () {
        var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (validateState.value === 'validating') {
          var res = results.filter(function (result) {
            return result && result.errors.length;
          });
          validateState.value = res.length ? 'error' : 'success';
          errors.value = res.map(function (r) {
            return r.errors;
          });
          formContext.onValidate(fieldName.value, !errors.value.length, errors.value.length ? (0, _vue.toRaw)(errors.value[0]) : null);
        }
      });
      return promise;
    };
    var _onFieldBlur = function onFieldBlur() {
      validateRules({
        triggerName: 'blur'
      });
    };
    var _onFieldChange = function onFieldChange() {
      if (validateDisabled.value) {
        validateDisabled.value = false;
        return;
      }
      validateRules({
        triggerName: 'change'
      });
    };
    var clearValidate = function clearValidate() {
      validateState.value = props.validateStatus;
      validateDisabled.value = false;
      errors.value = [];
    };
    var resetField = function resetField() {
      validateState.value = props.validateStatus;
      validateDisabled.value = true;
      errors.value = [];
      var model = formContext.model.value || {};
      var value = fieldValue.value;
      var prop = getPropByPath(model, namePath.value, true);
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue.value);
      } else {
        prop.o[prop.k] = initialValue.value;
      }
      // reset validateDisabled after onFieldChange triggered
      (0, _vue.nextTick)(function () {
        validateDisabled.value = false;
      });
    };
    var htmlFor = (0, _vue.computed)(function () {
      return props.htmlFor === undefined ? fieldId.value : props.htmlFor;
    });
    var onLabelClick = function onLabelClick() {
      var id = htmlFor.value;
      if (!id || !inputRef.value) {
        return;
      }
      var control = inputRef.value.$el.querySelector("[id=\"".concat(id, "\"]"));
      if (control && control.focus) {
        control.focus();
      }
    };
    expose({
      onFieldBlur: _onFieldBlur,
      onFieldChange: _onFieldChange,
      clearValidate: clearValidate,
      resetField: resetField
    });
    (0, _FormItemContext.useProvideFormItemContext)({
      id: fieldId,
      onFieldBlur: function onFieldBlur() {
        if (props.autoLink) {
          _onFieldBlur();
        }
      },
      onFieldChange: function onFieldChange() {
        if (props.autoLink) {
          _onFieldChange();
        }
      },
      clearValidate: clearValidate
    }, (0, _vue.computed)(function () {
      return !!(props.autoLink && formContext.model.value && fieldName.value);
    }));
    var registered = false;
    (0, _vue.watch)(fieldName, function (val) {
      if (val) {
        if (!registered) {
          registered = true;
          formContext.addField(eventKey, {
            fieldValue: fieldValue,
            fieldId: fieldId,
            fieldName: fieldName,
            resetField: resetField,
            clearValidate: clearValidate,
            namePath: namePath,
            validateRules: validateRules,
            rules: rulesRef
          });
        }
      } else {
        registered = false;
        formContext.removeField(eventKey);
      }
    }, {
      immediate: true
    });
    (0, _vue.onBeforeUnmount)(function () {
      formContext.removeField(eventKey);
    });
    var debounceErrors = (0, _useDebounce.default)(errors);
    var mergedValidateStatus = (0, _vue.computed)(function () {
      if (props.validateStatus !== undefined) {
        return props.validateStatus;
      } else if (debounceErrors.value.length) {
        return 'error';
      }
      return validateState.value;
    });
    var itemClassName = (0, _vue.computed)(function () {
      var _ref3;
      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item"), true), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-feedback"), mergedValidateStatus.value && props.hasFeedback), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-success"), mergedValidateStatus.value === 'success'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-warning"), mergedValidateStatus.value === 'warning'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-has-error"), mergedValidateStatus.value === 'error'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-is-validating"), mergedValidateStatus.value === 'validating'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-hidden"), props.hidden), _ref3;
    });
    return function () {
      var _slots$default, _props$help;
      if (props.noStyle) return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var help = (_props$help = props.help) !== null && _props$help !== void 0 ? _props$help : slots.help ? (0, _propsUtil.filterEmpty)(slots.help()) : null;
      return (0, _vue.createVNode)(_Row.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "class": [itemClassName.value, help !== undefined && help !== null || debounceErrors.value.length ? "".concat(prefixCls.value, "-item-with-help") : '', attrs.class],
        "key": "row"
      }), {
        default: function _default() {
          var _props$label, _slots$label, _props$extra, _slots$extra;
          return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_FormItemLabel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            "htmlFor": htmlFor.value,
            "required": isRequired.value,
            "requiredMark": formContext.requiredMark.value,
            "prefixCls": prefixCls.value,
            "onClick": onLabelClick,
            "label": (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots)
          }), null), (0, _vue.createVNode)(_FormItemInput.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            "errors": help !== undefined && help !== null ? (0, _typeUtil.toArray)(help) : debounceErrors.value,
            "prefixCls": prefixCls.value,
            "status": mergedValidateStatus.value,
            "ref": inputRef,
            "help": help,
            "extra": (_props$extra = props.extra) !== null && _props$extra !== void 0 ? _props$extra : (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots)
          }), {
            default: slots.default
          })]);
        }
      });
    };
  }
});
exports.default = _default2;