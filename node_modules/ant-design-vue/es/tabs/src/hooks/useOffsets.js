import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { ref, watchEffect } from 'vue';
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
export default function useOffsets(tabs, tabSizes) {
  var offsetMap = ref(new Map());
  watchEffect(function () {
    var _tabsValue$;
    var map = new Map();
    var tabsValue = tabs.value;
    var lastOffset = tabSizes.value.get((_tabsValue$ = tabsValue[0]) === null || _tabsValue$ === void 0 ? void 0 : _tabsValue$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabsValue.length; i += 1) {
      var key = tabsValue[i].key;
      var data = tabSizes.value.get(key);
      // Reuse last one when not exist yet
      if (!data) {
        var _tabsValue;
        data = tabSizes.value.get((_tabsValue = tabsValue[i - 1]) === null || _tabsValue === void 0 ? void 0 : _tabsValue.key) || DEFAULT_SIZE;
      }
      var entity = map.get(key) || _objectSpread({}, data);
      // Right
      entity.right = rightOffset - entity.left - entity.width;
      // Update entity
      map.set(key, entity);
    }
    offsetMap.value = new Map(map);
  });
  return offsetMap;
}