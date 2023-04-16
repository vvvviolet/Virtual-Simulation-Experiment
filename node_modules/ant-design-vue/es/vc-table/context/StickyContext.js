import isStyleSupport from '../../_util/styleChecker';
import { onMounted, ref } from 'vue';
var supportSticky = ref(false);
export var useProvideSticky = function useProvideSticky() {
  onMounted(function () {
    supportSticky.value = supportSticky.value || isStyleSupport('position', 'sticky');
  });
};
export var useInjectSticky = function useInjectSticky() {
  return supportSticky;
};