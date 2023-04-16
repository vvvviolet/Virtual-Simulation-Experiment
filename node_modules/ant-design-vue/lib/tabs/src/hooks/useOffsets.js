"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOffsets;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes) {
  var offsetMap = (0, _vue.ref)(new Map());
  (0, _vue.watchEffect)(function () {
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
      var entity = map.get(key) || (0, _objectSpread2.default)({}, data);
      // Right
      entity.right = rightOffset - entity.left - entity.width;
      // Update entity
      map.set(key, entity);
    }
    offsetMap.value = new Map(map);
  });
  return offsetMap;
}