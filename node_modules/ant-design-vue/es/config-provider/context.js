import { computed, inject, provide } from 'vue';
export var GlobalFormContextKey = Symbol('GlobalFormContextKey');
export var useProvideGlobalForm = function useProvideGlobalForm(state) {
  provide(GlobalFormContextKey, state);
};
export var useInjectGlobalForm = function useInjectGlobalForm() {
  return inject(GlobalFormContextKey, {
    validateMessages: computed(function () {
      return undefined;
    })
  });
};
export var GlobalConfigContextKey = Symbol('GlobalConfigContextKey');
export var configProviderProps = function configProviderProps() {
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