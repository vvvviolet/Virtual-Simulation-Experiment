"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _treeUtil = require("../../vc-tree/utils/treeUtil");
var _valueUtil = require("../utils/valueUtil");
var _vue = require("vue");
var _warning = require("../../vc-util/warning");
var _default = function _default(treeData, fieldNames) {
  var valueEntities = (0, _vue.shallowRef)(new Map());
  var keyEntities = (0, _vue.shallowRef)({});
  (0, _vue.watchEffect)(function () {
    var fieldNamesValue = fieldNames.value;
    var collection = (0, _treeUtil.convertDataToEntities)(treeData.value, {
      fieldNames: fieldNamesValue,
      initWrapper: function initWrapper(wrapper) {
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, wrapper), {}, {
          valueEntities: new Map()
        });
      },
      processEntity: function processEntity(entity, wrapper) {
        var val = entity.node[fieldNamesValue.value];
        // Check if exist same value
        if (process.env.NODE_ENV !== 'production') {
          var key = entity.node.key;
          (0, _warning.warning)(!(0, _valueUtil.isNil)(val), 'TreeNode `value` is invalidate: undefined');
          (0, _warning.warning)(!wrapper.valueEntities.has(val), "Same `value` exist in the tree: ".concat(val));
          (0, _warning.warning)(!key || String(key) === String(val), "`key` or `value` with TreeNode must be the same or you can remove one of them. key: ".concat(key, ", value: ").concat(val, "."));
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
};
exports.default = _default;