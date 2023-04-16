import { inject, provide } from 'vue';
export var SummaryContextKey = Symbol('SummaryContextProps');
export var useProvideSummary = function useProvideSummary(props) {
  provide(SummaryContextKey, props);
};
export var useInjectSummary = function useInjectSummary() {
  return inject(SummaryContextKey, {});
};