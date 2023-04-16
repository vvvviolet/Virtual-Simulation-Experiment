import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { defineComponent, inject, provide, toRef } from 'vue';
var MenuContextKey = Symbol('menuContextKey');
var useProvideMenu = function useProvideMenu(props) {
  provide(MenuContextKey, props);
};
var useInjectMenu = function useInjectMenu() {
  return inject(MenuContextKey);
};
var ForceRenderKey = Symbol('ForceRenderKey');
export var useProvideForceRender = function useProvideForceRender(forceRender) {
  provide(ForceRenderKey, forceRender);
};
export var useInjectForceRender = function useInjectForceRender() {
  return inject(ForceRenderKey, false);
};
var MenuFirstLevelContextKey = Symbol('menuFirstLevelContextKey');
var useProvideFirstLevel = function useProvideFirstLevel(firstLevel) {
  provide(MenuFirstLevelContextKey, firstLevel);
};
var useInjectFirstLevel = function useInjectFirstLevel() {
  return inject(MenuFirstLevelContextKey, true);
};
var MenuContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'MenuContextProvider',
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: undefined
    },
    overflowDisabled: {
      type: Boolean,
      default: undefined
    },
    isRootMenu: {
      type: Boolean,
      default: undefined
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var menuContext = useInjectMenu();
    var newContext = _objectSpread({}, menuContext);
    // 确保传入的属性不会动态增删
    // 不需要 watch 变化
    if (props.mode !== undefined) {
      newContext.mode = toRef(props, 'mode');
    }
    if (props.isRootMenu !== undefined) {
      newContext.isRootMenu = toRef(props, 'isRootMenu');
    }
    if (props.overflowDisabled !== undefined) {
      newContext.overflowDisabled = toRef(props, 'overflowDisabled');
    }
    useProvideMenu(newContext);
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export { useProvideMenu, MenuContextKey, useInjectMenu, MenuFirstLevelContextKey, useProvideFirstLevel, useInjectFirstLevel, MenuContextProvider };
export default useProvideMenu;