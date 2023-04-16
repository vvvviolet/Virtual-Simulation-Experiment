import { provide, inject } from 'vue';
var TreeSelectContextPropsKey = Symbol('TreeSelectContextPropsKey');
export function useProvideSelectContext(props) {
  return provide(TreeSelectContextPropsKey, props);
}
export default function useInjectSelectContext() {
  return inject(TreeSelectContextPropsKey, {});
}