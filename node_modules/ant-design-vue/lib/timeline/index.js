"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TimelineItem", {
  enumerable: true,
  get: function get() {
    return _TimelineItem.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "timelineItemProps", {
  enumerable: true,
  get: function get() {
    return _TimelineItem.timelineItemProps;
  }
});
Object.defineProperty(exports, "timelineProps", {
  enumerable: true,
  get: function get() {
    return _Timeline.timelineProps;
  }
});
var _Timeline = _interopRequireWildcard(require("./Timeline"));
var _TimelineItem = _interopRequireWildcard(require("./TimelineItem"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_Timeline.default.Item = _TimelineItem.default;
/* istanbul ignore next */
_Timeline.default.install = function (app) {
  app.component(_Timeline.default.name, _Timeline.default);
  app.component(_TimelineItem.default.name, _TimelineItem.default);
  return app;
};
var _default = _Timeline.default;
exports.default = _default;