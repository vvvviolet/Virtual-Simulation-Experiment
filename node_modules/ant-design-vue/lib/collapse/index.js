"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CollapsePanel", {
  enumerable: true,
  get: function get() {
    return _CollapsePanel.default;
  }
});
Object.defineProperty(exports, "collapsePanelProps", {
  enumerable: true,
  get: function get() {
    return _CollapsePanel.collapsePanelProps;
  }
});
Object.defineProperty(exports, "collapseProps", {
  enumerable: true,
  get: function get() {
    return _Collapse.collapseProps;
  }
});
exports.default = void 0;
var _Collapse = _interopRequireWildcard(require("./Collapse"));
var _CollapsePanel = _interopRequireWildcard(require("./CollapsePanel"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_Collapse.default.Panel = _CollapsePanel.default;
/* istanbul ignore next */
_Collapse.default.install = function (app) {
  app.component(_Collapse.default.name, _Collapse.default);
  app.component(_CollapsePanel.default.name, _CollapsePanel.default);
  return app;
};
var _default = _Collapse.default;
exports.default = _default;