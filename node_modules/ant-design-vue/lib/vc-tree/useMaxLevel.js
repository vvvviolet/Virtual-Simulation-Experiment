"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMaxLevel;
var _vue = require("vue");
function useMaxLevel(keyEntities) {
  var maxLevel = (0, _vue.ref)(0);
  var levelEntities = (0, _vue.shallowRef)();
  (0, _vue.watchEffect)(function () {
    var newLevelEntities = new Map();
    var newMaxLevel = 0;
    var keyEntitiesValue = keyEntities.value || {};
    // Convert entities by level for calculation
    for (var key in keyEntitiesValue) {
      if (Object.prototype.hasOwnProperty.call(keyEntitiesValue, key)) {
        var entity = keyEntitiesValue[key];
        var level = entity.level;
        var levelSet = newLevelEntities.get(level);
        if (!levelSet) {
          levelSet = new Set();
          newLevelEntities.set(level, levelSet);
        }
        levelSet.add(entity);
        newMaxLevel = Math.max(newMaxLevel, level);
      }
    }
    maxLevel.value = newMaxLevel;
    levelEntities.value = newLevelEntities;
  });
  return {
    maxLevel: maxLevel,
    levelEntities: levelEntities
  };
}