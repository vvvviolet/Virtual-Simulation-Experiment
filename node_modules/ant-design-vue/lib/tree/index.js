"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DirectoryTree", {
  enumerable: true,
  get: function get() {
    return _DirectoryTree.default;
  }
});
exports.default = exports.TreeNode = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
var _Tree = _interopRequireDefault(require("./Tree"));
var _vcTree = require("../vc-tree");
var _DirectoryTree = _interopRequireDefault(require("./DirectoryTree"));
var _props = require("../vc-tree/props");
/* istanbul ignore next */
var TreeNode = (0, _vue.defineComponent)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _vcTree.TreeNode), {}, {
  name: 'ATreeNode',
  props: _props.treeNodeProps
}));
exports.TreeNode = TreeNode;
var _default = (0, _extends2.default)(_Tree.default, {
  DirectoryTree: _DirectoryTree.default,
  TreeNode: TreeNode,
  install: function install(app) {
    app.component(_Tree.default.name, _Tree.default);
    app.component(TreeNode.name, TreeNode);
    app.component(_DirectoryTree.default.name, _DirectoryTree.default);
    return app;
  }
});
exports.default = _default;