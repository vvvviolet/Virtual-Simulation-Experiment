import { watch, ref } from 'vue';
export default function useHeights(mergedData, getKey, onItemAdd, onItemRemove) {
  var instance = new Map();
  var heights = new Map();
  var updatedMark = ref(Symbol('update'));
  watch(mergedData, function () {
    updatedMark.value = Symbol('update');
  });
  var heightUpdateId = 0;
  function collectHeight() {
    heightUpdateId += 1;
    var currentId = heightUpdateId;
    Promise.resolve().then(function () {
      // Only collect when it's latest call
      if (currentId !== heightUpdateId) return;
      // let changed = false;
      instance.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;
          if (heights.get(key) !== offsetHeight) {
            //changed = true;
            updatedMark.value = Symbol('update');
            heights.set(key, element.offsetHeight);
          }
        }
      });
    });
  }
  function setInstance(item, ins) {
    var key = getKey(item);
    var origin = instance.get(key);
    if (ins) {
      instance.set(key, ins.$el || ins);
      collectHeight();
    } else {
      instance.delete(key);
    }
    // Instance changed
    if (!origin !== !ins) {
      if (ins) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  return [setInstance, collectHeight, heights, updatedMark];
}