import { inject, provide, computed } from 'vue';
import { defaultValidateMessages } from './utils/messages';
export var FormContextKey = Symbol('formContextKey');
export var useProvideForm = function useProvideForm(state) {
  provide(FormContextKey, state);
};
export var useInjectForm = function useInjectForm() {
  return inject(FormContextKey, {
    name: computed(function () {
      return undefined;
    }),
    labelAlign: computed(function () {
      return 'right';
    }),
    vertical: computed(function () {
      return false;
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addField: function addField(_eventKey, _field) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeField: function removeField(_eventKey) {},
    model: computed(function () {
      return undefined;
    }),
    rules: computed(function () {
      return undefined;
    }),
    colon: computed(function () {
      return undefined;
    }),
    labelWrap: computed(function () {
      return undefined;
    }),
    labelCol: computed(function () {
      return undefined;
    }),
    requiredMark: computed(function () {
      return false;
    }),
    validateTrigger: computed(function () {
      return undefined;
    }),
    onValidate: function onValidate() {},
    validateMessages: computed(function () {
      return defaultValidateMessages;
    })
  });
};
export var FormItemPrefixContextKey = Symbol('formItemPrefixContextKey');
export var useProvideFormItemPrefix = function useProvideFormItemPrefix(state) {
  provide(FormItemPrefixContextKey, state);
};
export var useInjectFormItemPrefix = function useInjectFormItemPrefix() {
  return inject(FormItemPrefixContextKey, {
    prefixCls: computed(function () {
      return '';
    })
  });
};