import _typeof from "@babel/runtime/helpers/esm/typeof";
import { watch, shallowRef } from 'vue';
export default function useLazyKVMap(dataRef, childrenColumnNameRef, getRowKeyRef) {
  var mapCacheRef = shallowRef({});
  watch([dataRef, childrenColumnNameRef, getRowKeyRef], function () {
    var kvMap = new Map();
    var getRowKey = getRowKeyRef.value;
    var childrenColumnName = childrenColumnNameRef.value;
    /* eslint-disable no-inner-declarations */
    function dig(records) {
      records.forEach(function (record, index) {
        var rowKey = getRowKey(record, index);
        kvMap.set(rowKey, record);
        if (record && _typeof(record) === 'object' && childrenColumnName in record) {
          dig(record[childrenColumnName] || []);
        }
      });
    }
    /* eslint-enable */
    dig(dataRef.value);
    mapCacheRef.value = {
      kvMap: kvMap
    };
  }, {
    deep: true,
    immediate: true
  });
  function getRecordByKey(key) {
    return mapCacheRef.value.kvMap.get(key);
  }
  return [getRecordByKey];
}