import { computed, inject, provide } from 'vue';
var SlotsContextKey = Symbol('SlotsContextProps');
export var useProvideSlots = function useProvideSlots(props) {
  provide(SlotsContextKey, props);
};
export var useInjectSlots = function useInjectSlots() {
  return inject(SlotsContextKey, computed(function () {
    return {};
  }));
};
var ContextKey = Symbol('ContextProps');
export var useProvideTableContext = function useProvideTableContext(props) {
  provide(ContextKey, props);
};
export var useInjectTableContext = function useInjectTableContext() {
  return inject(ContextKey, {
    onResizeColumn: function onResizeColumn() {}
  });
};