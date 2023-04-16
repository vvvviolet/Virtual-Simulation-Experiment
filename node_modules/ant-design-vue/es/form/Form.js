import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { defineComponent, computed, watch, ref } from 'vue';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import warning from '../_util/warning';
import FormItem from './FormItem';
import { getNamePath, containsNamePath, cloneByNamePathList } from './utils/valueUtil';
import { defaultValidateMessages } from './utils/messages';
import { allPromiseFinish } from './utils/asyncUtil';
import { toArray } from './utils/typeUtil';
import isEqual from 'lodash-es/isEqual';
import scrollIntoView from 'scroll-into-view-if-needed';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { tuple } from '../_util/type';
import { useInjectSize } from '../_util/hooks/useSize';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useProvideForm } from './context';
import useForm from './useForm';
import { useInjectGlobalForm } from '../config-provider/context';
export var formProps = function formProps() {
  return {
    layout: PropTypes.oneOf(tuple('horizontal', 'inline', 'vertical')),
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    colon: {
      type: Boolean,
      default: undefined
    },
    labelAlign: PropTypes.oneOf(tuple('left', 'right')),
    labelWrap: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    requiredMark: {
      type: [String, Boolean],
      default: undefined
    },
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark: {
      type: Boolean,
      default: undefined
    },
    model: PropTypes.object,
    rules: {
      type: Object
    },
    validateMessages: {
      type: Object,
      default: undefined
    },
    validateOnRuleChange: {
      type: Boolean,
      default: undefined
    },
    // 提交失败自动滚动到第一个错误字段
    scrollToFirstError: {
      type: [Boolean, Object]
    },
    onSubmit: Function,
    name: String,
    validateTrigger: {
      type: [String, Array]
    },
    size: {
      type: String
    },
    onValuesChange: {
      type: Function
    },
    onFieldsChange: {
      type: Function
    },
    onFinish: {
      type: Function
    },
    onFinishFailed: {
      type: Function
    },
    onValidate: {
      type: Function
    }
  };
};
function isEqualName(name1, name2) {
  return isEqual(toArray(name1), toArray(name2));
}
var Form = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AForm',
  inheritAttrs: false,
  props: initDefaultProps(formProps(), {
    layout: 'horizontal',
    hideRequiredMark: false,
    colon: true
  }),
  Item: FormItem,
  useForm: useForm,
  // emits: ['finishFailed', 'submit', 'finish', 'validate'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots,
      expose = _ref.expose,
      attrs = _ref.attrs;
    var size = useInjectSize(props);
    var _useConfigInject = useConfigInject('form', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      contextForm = _useConfigInject.form;
    var requiredMark = computed(function () {
      return props.requiredMark === '' || props.requiredMark;
    });
    var mergedRequiredMark = computed(function () {
      var _contextForm$value;
      if (requiredMark.value !== undefined) {
        return requiredMark.value;
      }
      if (contextForm && ((_contextForm$value = contextForm.value) === null || _contextForm$value === void 0 ? void 0 : _contextForm$value.requiredMark) !== undefined) {
        return contextForm.value.requiredMark;
      }
      if (props.hideRequiredMark) {
        return false;
      }
      return true;
    });
    var mergedColon = computed(function () {
      var _props$colon, _contextForm$value2;
      return (_props$colon = props.colon) !== null && _props$colon !== void 0 ? _props$colon : (_contextForm$value2 = contextForm.value) === null || _contextForm$value2 === void 0 ? void 0 : _contextForm$value2.colon;
    });
    var _useInjectGlobalForm = useInjectGlobalForm(),
      globalValidateMessages = _useInjectGlobalForm.validateMessages;
    var validateMessages = computed(function () {
      return _objectSpread(_objectSpread(_objectSpread({}, defaultValidateMessages), globalValidateMessages.value), props.validateMessages);
    });
    var formClassName = computed(function () {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props.layout), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-hide-required-mark"), mergedRequiredMark.value === false), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(size.value), size.value), _classNames));
    });
    var lastValidatePromise = ref();
    var fields = {};
    var addField = function addField(eventKey, field) {
      fields[eventKey] = field;
    };
    var removeField = function removeField(eventKey) {
      delete fields[eventKey];
    };
    var getFieldsByNameList = function getFieldsByNameList(nameList) {
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? toArray(nameList).map(getNamePath) : [];
      if (!provideNameList) {
        return Object.values(fields);
      } else {
        return Object.values(fields).filter(function (field) {
          return namePathList.findIndex(function (namePath) {
            return isEqualName(namePath, field.fieldName.value);
          }) > -1;
        });
      }
    };
    var resetFields = function resetFields(name) {
      if (!props.model) {
        warning(false, 'Form', 'model is required for resetFields to work.');
        return;
      }
      getFieldsByNameList(name).forEach(function (field) {
        field.resetField();
      });
    };
    var clearValidate = function clearValidate(name) {
      getFieldsByNameList(name).forEach(function (field) {
        field.clearValidate();
      });
    };
    var handleFinishFailed = function handleFinishFailed(errorInfo) {
      var scrollToFirstError = props.scrollToFirstError;
      emit('finishFailed', errorInfo);
      if (scrollToFirstError && errorInfo.errorFields.length) {
        var scrollToFieldOptions = {};
        if (_typeof(scrollToFirstError) === 'object') {
          scrollToFieldOptions = scrollToFirstError;
        }
        scrollToField(errorInfo.errorFields[0].name, scrollToFieldOptions);
      }
    };
    var validate = function validate() {
      return validateField.apply(void 0, arguments);
    };
    var scrollToField = function scrollToField(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var fields = getFieldsByNameList(name ? [name] : undefined);
      if (fields.length) {
        var fieldId = fields[0].fieldId.value;
        var node = fieldId ? document.getElementById(fieldId) : null;
        if (node) {
          scrollIntoView(node, _objectSpread({
            scrollMode: 'if-needed',
            block: 'nearest'
          }, options));
        }
      }
    };
    // eslint-disable-next-line no-unused-vars
    var getFieldsValue = function getFieldsValue() {
      var nameList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (nameList === true) {
        var allNameList = [];
        Object.values(fields).forEach(function (_ref2) {
          var namePath = _ref2.namePath;
          allNameList.push(namePath.value);
        });
        return cloneByNamePathList(props.model, allNameList);
      } else {
        return cloneByNamePathList(props.model, nameList);
      }
    };
    var validateFields = function validateFields(nameList, options) {
      warning(!(nameList instanceof Function), 'Form', 'validateFields/validateField/validate not support callback, please use promise instead');
      if (!props.model) {
        warning(false, 'Form', 'model is required for validateFields to work.');
        return Promise.reject('Form `model` is required for validateFields to work.');
      }
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? toArray(nameList).map(getNamePath) : [];
      // Collect result in promise list
      var promiseList = [];
      Object.values(fields).forEach(function (field) {
        var _field$rules;
        // Add field if not provide `nameList`
        if (!provideNameList) {
          namePathList.push(field.namePath.value);
        }
        // Skip if without rule
        if (!((_field$rules = field.rules) !== null && _field$rules !== void 0 && _field$rules.value.length)) {
          return;
        }
        var fieldNamePath = field.namePath.value;
        // Add field validate rule in to promise list
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
          var promise = field.validateRules(_objectSpread({
            validateMessages: validateMessages.value
          }, options));
          // Wrap promise with field
          promiseList.push(promise.then(function () {
            return {
              name: fieldNamePath,
              errors: [],
              warnings: []
            };
          }).catch(function (ruleErrors) {
            var mergedErrors = [];
            var mergedWarnings = [];
            ruleErrors.forEach(function (_ref3) {
              var warningOnly = _ref3.rule.warningOnly,
                errors = _ref3.errors;
              if (warningOnly) {
                mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
              } else {
                mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      var summaryPromise = allPromiseFinish(promiseList);
      lastValidatePromise.value = summaryPromise;
      var returnPromise = summaryPromise.then(function () {
        if (lastValidatePromise.value === summaryPromise) {
          return Promise.resolve(getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      }).catch(function (results) {
        var errorList = results.filter(function (result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: lastValidatePromise.value !== summaryPromise
        });
      });
      // Do not throw in console
      returnPromise.catch(function (e) {
        return e;
      });
      return returnPromise;
    };
    var validateField = function validateField() {
      return validateFields.apply(void 0, arguments);
    };
    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      emit('submit', e);
      if (props.model) {
        var res = validateFields();
        res.then(function (values) {
          emit('finish', values);
        }).catch(function (errors) {
          handleFinishFailed(errors);
        });
      }
    };
    expose({
      resetFields: resetFields,
      clearValidate: clearValidate,
      validateFields: validateFields,
      getFieldsValue: getFieldsValue,
      validate: validate,
      scrollToField: scrollToField
    });
    useProvideForm({
      model: computed(function () {
        return props.model;
      }),
      name: computed(function () {
        return props.name;
      }),
      labelAlign: computed(function () {
        return props.labelAlign;
      }),
      labelCol: computed(function () {
        return props.labelCol;
      }),
      labelWrap: computed(function () {
        return props.labelWrap;
      }),
      wrapperCol: computed(function () {
        return props.wrapperCol;
      }),
      vertical: computed(function () {
        return props.layout === 'vertical';
      }),
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      validateTrigger: computed(function () {
        return props.validateTrigger;
      }),
      rules: computed(function () {
        return props.rules;
      }),
      addField: addField,
      removeField: removeField,
      onValidate: function onValidate(name, status, errors) {
        emit('validate', name, status, errors);
      },
      validateMessages: validateMessages
    });
    watch(function () {
      return props.rules;
    }, function () {
      if (props.validateOnRuleChange) {
        validateFields();
      }
    });
    return function () {
      var _slots$default;
      return _createVNode("form", _objectSpread(_objectSpread({}, attrs), {}, {
        "onSubmit": handleSubmit,
        "class": [formClassName.value, attrs.class]
      }), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
export default Form;