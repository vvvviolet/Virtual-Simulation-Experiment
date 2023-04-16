import { onBeforeUnmount, onMounted } from 'vue';
export default function useSelectTriggerControl(refs, open, triggerOpen) {
  function onGlobalMouseDown(event) {
    var _refs$, _refs$2, _refs$2$value;
    var target = event.target;
    if (target.shadowRoot && event.composed) {
      target = event.composedPath()[0] || target;
    }
    var elements = [(_refs$ = refs[0]) === null || _refs$ === void 0 ? void 0 : _refs$.value, (_refs$2 = refs[1]) === null || _refs$2 === void 0 ? void 0 : (_refs$2$value = _refs$2.value) === null || _refs$2$value === void 0 ? void 0 : _refs$2$value.getPopupElement()];
    if (open.value && elements.every(function (element) {
      return element && !element.contains(target) && element !== target;
    })) {
      // Should trigger close
      triggerOpen(false);
    }
  }
  onMounted(function () {
    window.addEventListener('mousedown', onGlobalMouseDown);
  });
  onBeforeUnmount(function () {
    window.removeEventListener('mousedown', onGlobalMouseDown);
  });
}