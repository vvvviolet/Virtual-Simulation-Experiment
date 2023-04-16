import { inject, provide } from 'vue';
var CascaderContextKey = Symbol('CascaderContextKey');
export var useProvideCascader = function useProvideCascader(props) {
  provide(CascaderContextKey, props);
};
export var useInjectCascader = function useInjectCascader() {
  return inject(CascaderContextKey);
};