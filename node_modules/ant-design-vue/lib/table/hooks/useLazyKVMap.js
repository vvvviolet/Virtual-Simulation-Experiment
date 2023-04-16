"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLazyKVMap;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _vue = require("vue");
function useLazyKVMap(dataRef, childrenColumnNameRef, getRowKeyRef) {
  var mapCacheRef = (0, _vue.shallowRef)({});
  (0, _vue.watch)([dataRef, childrenColumnNameRef, getRowKeyRef], function () {
    var kvMap = new Map();
    var getRowKey = getRowKeyRef.value;
    var childrenColumnName = childrenColumnNameRef.value;
    /* eslint-disable no-inner-declarations */
    function dig(records) {
      records.forEach(function (record, index) {
        var rowKey = getRowKey(record, index);
        kvMap.set(rowKey, record);
        if (record && (0, _typeof2.default)(record) === 'object' && childrenColumnName in record) {
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