import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { conductCheck } from '../../vc-tree/utils/conductUtil';
import { shallowRef, watchEffect } from 'vue';
export default (function (rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities, maxLevel, levelEntities) {
  var newRawCheckedValues = shallowRef([]);
  var newRawHalfCheckedValues = shallowRef([]);
  watchEffect(function () {
    var checkedKeys = rawLabeledValues.value.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    var halfCheckedKeys = rawHalfCheckedValues.value.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    var missingValues = checkedKeys.filter(function (key) {
      return !keyEntities.value[key];
    });
    if (treeConduction.value) {
      var _conductCheck = conductCheck(checkedKeys, true, keyEntities.value, maxLevel.value, levelEntities.value);
      checkedKeys = _conductCheck.checkedKeys;
      halfCheckedKeys = _conductCheck.halfCheckedKeys;
    }
    newRawCheckedValues.value = Array.from(new Set([].concat(_toConsumableArray(missingValues), _toConsumableArray(checkedKeys))));
    newRawHalfCheckedValues.value = halfCheckedKeys;
  });
  return [newRawCheckedValues, newRawHalfCheckedValues];
});