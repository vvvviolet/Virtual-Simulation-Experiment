import { inject, provide } from 'vue';
export var ResizeContextKey = Symbol('ResizeContextProps');
export var useProvideResize = function useProvideResize(props) {
  provide(ResizeContextKey, props);
};
export var useInjectResize = function useInjectResize() {
  return inject(ResizeContextKey, {
    onColumnResize: function onColumnResize() {}
  });
};