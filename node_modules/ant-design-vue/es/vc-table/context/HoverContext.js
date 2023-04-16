import { ref, inject, provide } from 'vue';
export var HoverContextKey = Symbol('HoverContextProps');
export var useProvideHover = function useProvideHover(props) {
  provide(HoverContextKey, props);
};
export var useInjectHover = function useInjectHover() {
  return inject(HoverContextKey, {
    startRow: ref(-1),
    endRow: ref(-1),
    onHover: function onHover() {}
  });
};