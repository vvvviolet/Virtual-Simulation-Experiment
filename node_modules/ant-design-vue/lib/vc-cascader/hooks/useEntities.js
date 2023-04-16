"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _treeUtil = require("../../vc-tree/utils/treeUtil");
var _commonUtil = require("../utils/commonUtil");
var _vue = require("vue");
/** Lazy parse options data into conduct-able info to avoid perf issue in single mode */
var _default = function _default(options, fieldNames) {
  var entities = (0, _vue.computed)(function () {
    return (0, _treeUtil.convertDataToEntities)(options.value, {
      fieldNames: fieldNames.value,
      initWrapper: function initWrapper(wrapper) {
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, wrapper), {}, {
          pathKeyEntities: {}
        });
      },
      processEntity: function processEntity(entity, wrapper) {
        var pathKey = entity.nodes.map(function (node) {
          return node[fieldNames.value.value];
        }).join(_commonUtil.VALUE_SPLIT);
        wrapper.pathKeyEntities[pathKey] = entity;
        // Overwrite origin key.
        // this is very hack but we need let conduct logic work with connect path
        entity.key = pathKey;
      }
    }).pathKeyEntities;
  });
  return entities;
};
exports.default = _default;