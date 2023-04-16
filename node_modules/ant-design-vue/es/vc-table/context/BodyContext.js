import { inject, provide } from 'vue';
export var BodyContextKey = Symbol('BodyContextProps');
export var useProvideBody = function useProvideBody(props) {
  provide(BodyContextKey, props);
};
export var useInjectBody = function useInjectBody() {
  return inject(BodyContextKey, {});
};