import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { watch, computed, inject, provide, ref, onBeforeUnmount, getCurrentInstance, defineComponent } from 'vue';
import devWarning from '../vc-util/devWarning';
var ContextKey = Symbol('ContextProps');
var InternalContextKey = Symbol('InternalContextProps');
export var useProvideFormItemContext = function useProvideFormItemContext(props) {
  var useValidation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : computed(function () {
    return true;
  });
  var formItemFields = ref(new Map());
  var addFormItemField = function addFormItemField(key, type) {
    formItemFields.value.set(key, type);
    formItemFields.value = new Map(formItemFields.value);
  };
  var removeFormItemField = function removeFormItemField(key) {
    formItemFields.value.delete(key);
    formItemFields.value = new Map(formItemFields.value);
  };
  var instance = getCurrentInstance();
  watch([useValidation, formItemFields], function () {
    if (process.env.NODE_ENV !== 'production') {
      if (useValidation.value && formItemFields.value.size > 1) {
        devWarning(false, 'Form.Item', "FormItem can only collect one field item, you haved set ".concat(_toConsumableArray(formItemFields.value.values()).map(function (v) {
          return "`".concat(v.name, "`");
        }).join(', '), " ").concat(formItemFields.value.size, " field items.\n        You can set not need to be collected fields into `a-form-item-rest`"));
        var cur = instance;
        while (cur.parent) {
          console.warn('at', cur.type);
          cur = cur.parent;
        }
      }
    }
  });
  provide(ContextKey, props);
  provide(InternalContextKey, {
    addFormItemField: addFormItemField,
    removeFormItemField: removeFormItemField
  });
};
var defaultContext = {
  id: computed(function () {
    return undefined;
  }),
  onFieldBlur: function onFieldBlur() {},
  onFieldChange: function onFieldChange() {},
  clearValidate: function clearValidate() {}
};
var defaultInternalContext = {
  addFormItemField: function addFormItemField() {},
  removeFormItemField: function removeFormItemField() {}
};
export var useInjectFormItemContext = function useInjectFormItemContext() {
  var internalContext = inject(InternalContextKey, defaultInternalContext);
  var formItemFieldKey = Symbol('FormItemFieldKey');
  var instance = getCurrentInstance();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  onBeforeUnmount(function () {
    internalContext.removeFormItemField(formItemFieldKey);
  });
  // We should prevent the passing of context for children
  provide(InternalContextKey, defaultInternalContext);
  provide(ContextKey, defaultContext);
  return inject(ContextKey, defaultContext);
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AFormItemRest',
  setup: function setup(_, _ref) {
    var slots = _ref.slots;
    provide(InternalContextKey, defaultInternalContext);
    provide(ContextKey, defaultContext);
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});