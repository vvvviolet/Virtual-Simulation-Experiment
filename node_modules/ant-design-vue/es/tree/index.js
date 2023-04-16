import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { defineComponent } from 'vue';
import Tree from './Tree';
import { TreeNode as VcTreeNode } from '../vc-tree';
import DirectoryTree from './DirectoryTree';
import { treeNodeProps } from '../vc-tree/props';
/* istanbul ignore next */
var TreeNode = defineComponent(_objectSpread(_objectSpread({}, VcTreeNode), {}, {
  name: 'ATreeNode',
  props: treeNodeProps
}));
export { DirectoryTree, TreeNode };
export default _extends(Tree, {
  DirectoryTree: DirectoryTree,
  TreeNode: TreeNode,
  install: function install(app) {
    app.component(Tree.name, Tree);
    app.component(TreeNode.name, TreeNode);
    app.component(DirectoryTree.name, DirectoryTree);
    return app;
  }
});