"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideFormItemContext = exports.useInjectFormItemContext = exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _vue = require("vue");
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var ContextKey = Symbol('ContextProps');
var InternalContextKey = Symbol('InternalContextProps');
var useProvideFormItemContext = function useProvideFormItemContext(props) {
  var useValidation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _vue.computed)(function () {
    return true;
  });
  var formItemFields = (0, _vue.ref)(new Map());
  var addFormItemField = function addFormItemField(key, type) {
    formItemFields.value.set(key, type);
    formItemFields.value = new Map(formItemFields.value);
  };
  var removeFormItemField = function removeFormItemField(key) {
    formItemFields.value.delete(key);
    formItemFields.value = new Map(formItemFields.value);
  };
  var instance = (0, _vue.getCurrentInstance)();
  (0, _vue.watch)([useValidation, formItemFields], function () {
    if (process.env.NODE_ENV !== 'production') {
      if (useValidation.value && formItemFields.value.size > 1) {
        (0, _devWarning.default)(false, 'Form.Item', "FormItem can only collect one field item, you haved set ".concat((0, _toConsumableArray2.default)(formItemFields.value.values()).map(function (v) {
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
  (0, _vue.provide)(ContextKey, props);
  (0, _vue.provide)(InternalContextKey, {
    addFormItemField: addFormItemField,
    removeFormItemField: removeFormItemField
  });
};
exports.useProvideFormItemContext = useProvideFormItemContext;
var defaultContext = {
  id: (0, _vue.computed)(function () {
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
var useInjectFormItemContext = function useInjectFormItemContext() {
  var internalContext = (0, _vue.inject)(InternalContextKey, defaultInternalContext);
  var formItemFieldKey = Symbol('FormItemFieldKey');
  var instance = (0, _vue.getCurrentInstance)();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  (0, _vue.onBeforeUnmount)(function () {
    internalContext.removeFormItemField(formItemFieldKey);
  });
  // We should prevent the passing of context for children
  (0, _vue.provide)(InternalContextKey, defaultInternalContext);
  (0, _vue.provide)(ContextKey, defaultContext);
  return (0, _vue.inject)(ContextKey, defaultContext);
};
exports.useInjectFormItemContext = useInjectFormItemContext;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AFormItemRest',
  setup: function setup(_, _ref) {
    var slots = _ref.slots;
    (0, _vue.provide)(InternalContextKey, defaultInternalContext);
    (0, _vue.provide)(ContextKey, defaultContext);
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
exports.default = _default;