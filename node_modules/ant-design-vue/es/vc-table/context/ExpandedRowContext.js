import { inject, provide } from 'vue';
export var ExpandedRowContextKey = Symbol('ExpandedRowProps');
export var useProvideExpandedRow = function useProvideExpandedRow(props) {
  provide(ExpandedRowContextKey, props);
};
export var useInjectExpandedRow = function useInjectExpandedRow() {
  return inject(ExpandedRowContextKey, {});
};