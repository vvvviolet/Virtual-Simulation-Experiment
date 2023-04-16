import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { convertDataToEntities } from '../../vc-tree/utils/treeUtil';
import { VALUE_SPLIT } from '../utils/commonUtil';
import { computed } from 'vue';
/** Lazy parse options data into conduct-able info to avoid perf issue in single mode */
export default (function (options, fieldNames) {
  var entities = computed(function () {
    return convertDataToEntities(options.value, {
      fieldNames: fieldNames.value,
      initWrapper: function initWrapper(wrapper) {
        return _objectSpread(_objectSpread({}, wrapper), {}, {
          pathKeyEntities: {}
        });
      },
      processEntity: function processEntity(entity, wrapper) {
        var pathKey = entity.nodes.map(function (node) {
          return node[fieldNames.value.value];
        }).join(VALUE_SPLIT);
        wrapper.pathKeyEntities[pathKey] = entity;
        // Overwrite origin key.
        // this is very hack but we need let conduct logic work with connect path
        entity.key = pathKey;
      }
    }).pathKeyEntities;
  });
  return entities;
});