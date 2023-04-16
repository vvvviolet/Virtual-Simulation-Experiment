import { inject, provide } from 'vue';
export var TableContextKey = Symbol('TableContextProps');
export var useProvideTable = function useProvideTable(props) {
  provide(TableContextKey, props);
};
export var useInjectTable = function useInjectTable() {
  return inject(TableContextKey, {});
};