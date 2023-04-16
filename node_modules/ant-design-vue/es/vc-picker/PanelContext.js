import { inject, provide } from 'vue';
var PanelContextKey = Symbol('PanelContextProps');
export var useProvidePanel = function useProvidePanel(props) {
  provide(PanelContextKey, props);
};
export var useInjectPanel = function useInjectPanel() {
  return inject(PanelContextKey, {});
};
export default PanelContextKey;