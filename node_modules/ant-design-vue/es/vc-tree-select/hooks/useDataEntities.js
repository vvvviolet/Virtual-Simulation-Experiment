import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { convertDataToEntities } from '../../vc-tree/utils/treeUtil';
import { isNil } from '../utils/valueUtil';
import { shallowRef, watchEffect } from 'vue';
import { warning } from '../../vc-util/warning';
export default (function (treeData, fieldNames) {
  var valueEntities = shallowRef(new Map());
  var keyEntities = shallowRef({});
  watchEffect(function () {
    var fieldNamesValue = fieldNames.value;
    var collection = convertDataToEntities(treeData.value, {
      fieldNames: fieldNamesValue,
      initWrapper: function initWrapper(wrapper) {
        return _objectSpread(_objectSpread({}, wrapper), {}, {
          valueEntities: new Map()
        });
      },
      processEntity: function processEntity(entity, wrapper) {
        var val = entity.node[fieldNamesValue.value];
        // Check if exist same value
        if (process.env.NODE_ENV !== 'production') {
          var key = entity.node.key;
          warning(!isNil(val), 'TreeNode `value` is invalidate: undefined');
          warning(!wrapper.valueEntities.has(val), "Same `value` exist in the tree: ".concat(val));
          warning(!key || String(key) === String(val), "`key` or `value` with TreeNode must be the same or you can remove one of them. key: ".concat(key, ", value: ").concat(val, "."));
        }
        wrapper.valueEntities.set(val, entity);
      }
    });
    valueEntities.value = collection.valueEntities;
    keyEntities.value = collection.keyEntities;
  });
  return {
    valueEntities: valueEntities,
    keyEntities: keyEntities
  };
});