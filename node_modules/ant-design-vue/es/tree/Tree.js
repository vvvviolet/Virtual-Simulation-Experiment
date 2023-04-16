import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { watchEffect, ref, defineComponent, computed } from 'vue';
import classNames from '../_util/classNames';
import VcTree from '../vc-tree';
import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { treeProps as vcTreeProps } from '../vc-tree/props';
import useConfigInject from '../_util/hooks/useConfigInject';
import renderSwitcherIcon from './utils/iconUtil';
import dropIndicatorRender from './utils/dropIndicator';
import devWarning from '../vc-util/devWarning';
import { warning } from '../vc-util/warning';
import omit from '../_util/omit';
export var treeProps = function treeProps() {
  var baseTreeProps = vcTreeProps();
  return _objectSpread(_objectSpread({}, baseTreeProps), {}, {
    showLine: {
      type: [Boolean, Object],
      default: undefined
    },
    /** 是否支持多选 */
    multiple: {
      type: Boolean,
      default: undefined
    },
    /** 是否自动展开父节点 */
    autoExpandParent: {
      type: Boolean,
      default: undefined
    },
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: {
      type: Boolean,
      default: undefined
    },
    /** 是否支持选中 */
    checkable: {
      type: Boolean,
      default: undefined
    },
    /** 是否禁用树 */
    disabled: {
      type: Boolean,
      default: undefined
    },
    /** 默认展开所有树节点 */
    defaultExpandAll: {
      type: Boolean,
      default: undefined
    },
    /** 默认展开对应树节点 */
    defaultExpandParent: {
      type: Boolean,
      default: undefined
    },
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: {
      type: Array
    },
    /** （受控）展开指定的树节点 */
    expandedKeys: {
      type: Array
    },
    /** （受控）选中复选框的树节点 */
    checkedKeys: {
      type: [Array, Object]
    },
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: {
      type: Array
    },
    /** （受控）设置选中的树节点 */
    selectedKeys: {
      type: Array
    },
    /** 默认选中的树节点 */
    defaultSelectedKeys: {
      type: Array
    },
    selectable: {
      type: Boolean,
      default: undefined
    },
    loadedKeys: {
      type: Array
    },
    draggable: {
      type: Boolean,
      default: undefined
    },
    showIcon: {
      type: Boolean,
      default: undefined
    },
    icon: {
      type: Function
    },
    switcherIcon: PropTypes.any,
    prefixCls: String,
    /**
     * @default{title,key,children}
     * deprecated, please use `fieldNames` instead
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: {
      type: Object
    },
    blockNode: {
      type: Boolean,
      default: undefined
    },
    openAnimation: PropTypes.any,
    onDoubleclick: baseTreeProps.onDblclick,
    'onUpdate:selectedKeys': Function,
    'onUpdate:checkedKeys': Function,
    'onUpdate:expandedKeys': Function
  });
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATree',
  inheritAttrs: false,
  props: initDefaultProps(treeProps(), {
    checkable: false,
    selectable: true,
    showIcon: false,
    blockNode: false
  }),
  slots: ['icon', 'title', 'switcherIcon', 'titleRender'],
  // emits: [
  //   'update:selectedKeys',
  //   'update:checkedKeys',
  //   'update:expandedKeys',
  //   'expand',
  //   'select',
  //   'check',
  //   'doubleclick',
  //   'dblclick',
  // ],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      emit = _ref.emit,
      slots = _ref.slots;
    warning(!(props.treeData === undefined && slots.default), '`children` of Tree is deprecated. Please use `treeData` instead.');
    var _useConfigInject = useConfigInject('tree', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      virtual = _useConfigInject.virtual;
    var treeRef = ref();
    var scrollTo = function scrollTo(scroll) {
      var _treeRef$value;
      (_treeRef$value = treeRef.value) === null || _treeRef$value === void 0 ? void 0 : _treeRef$value.scrollTo(scroll);
    };
    expose({
      treeRef: treeRef,
      onNodeExpand: function onNodeExpand() {
        var _treeRef$value2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_treeRef$value2 = treeRef.value) === null || _treeRef$value2 === void 0 ? void 0 : _treeRef$value2.onNodeExpand.apply(_treeRef$value2, args);
      },
      scrollTo: scrollTo,
      selectedKeys: computed(function () {
        var _treeRef$value3;
        return (_treeRef$value3 = treeRef.value) === null || _treeRef$value3 === void 0 ? void 0 : _treeRef$value3.selectedKeys;
      }),
      checkedKeys: computed(function () {
        var _treeRef$value4;
        return (_treeRef$value4 = treeRef.value) === null || _treeRef$value4 === void 0 ? void 0 : _treeRef$value4.checkedKeys;
      }),
      halfCheckedKeys: computed(function () {
        var _treeRef$value5;
        return (_treeRef$value5 = treeRef.value) === null || _treeRef$value5 === void 0 ? void 0 : _treeRef$value5.halfCheckedKeys;
      }),
      loadedKeys: computed(function () {
        var _treeRef$value6;
        return (_treeRef$value6 = treeRef.value) === null || _treeRef$value6 === void 0 ? void 0 : _treeRef$value6.loadedKeys;
      }),
      loadingKeys: computed(function () {
        var _treeRef$value7;
        return (_treeRef$value7 = treeRef.value) === null || _treeRef$value7 === void 0 ? void 0 : _treeRef$value7.loadingKeys;
      }),
      expandedKeys: computed(function () {
        var _treeRef$value8;
        return (_treeRef$value8 = treeRef.value) === null || _treeRef$value8 === void 0 ? void 0 : _treeRef$value8.expandedKeys;
      })
    });
    watchEffect(function () {
      devWarning(props.replaceFields === undefined, 'Tree', '`replaceFields` is deprecated, please use fieldNames instead');
    });
    var handleCheck = function handleCheck(checkedObjOrKeys, eventObj) {
      emit('update:checkedKeys', checkedObjOrKeys);
      emit('check', checkedObjOrKeys, eventObj);
    };
    var handleExpand = function handleExpand(expandedKeys, eventObj) {
      emit('update:expandedKeys', expandedKeys);
      emit('expand', expandedKeys, eventObj);
    };
    var handleSelect = function handleSelect(selectedKeys, eventObj) {
      emit('update:selectedKeys', selectedKeys);
      emit('select', selectedKeys, eventObj);
    };
    return function () {
      var _classNames;
      var showIcon = props.showIcon,
        showLine = props.showLine,
        _props$switcherIcon = props.switcherIcon,
        _switcherIcon = _props$switcherIcon === void 0 ? slots.switcherIcon : _props$switcherIcon,
        _props$icon = props.icon,
        icon = _props$icon === void 0 ? slots.icon : _props$icon,
        blockNode = props.blockNode,
        checkable = props.checkable,
        selectable = props.selectable,
        _props$fieldNames = props.fieldNames,
        fieldNames = _props$fieldNames === void 0 ? props.replaceFields : _props$fieldNames,
        _props$motion = props.motion,
        motion = _props$motion === void 0 ? props.openAnimation : _props$motion,
        _props$itemHeight = props.itemHeight,
        itemHeight = _props$itemHeight === void 0 ? 28 : _props$itemHeight,
        onDoubleclick = props.onDoubleclick,
        onDblclick = props.onDblclick;
      var newProps = _objectSpread(_objectSpread(_objectSpread({}, attrs), omit(props, ['onUpdate:checkedKeys', 'onUpdate:expandedKeys', 'onUpdate:selectedKeys', 'onDoubleclick'])), {}, {
        showLine: Boolean(showLine),
        dropIndicatorRender: dropIndicatorRender,
        fieldNames: fieldNames,
        icon: icon,
        itemHeight: itemHeight
      });
      var children = slots.default ? filterEmpty(slots.default()) : undefined;
      return _createVNode(VcTree, _objectSpread(_objectSpread({}, newProps), {}, {
        "virtual": virtual.value,
        "motion": motion,
        "ref": treeRef,
        "prefixCls": prefixCls.value,
        "class": classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-icon-hide"), !showIcon), _defineProperty(_classNames, "".concat(prefixCls.value, "-block-node"), blockNode), _defineProperty(_classNames, "".concat(prefixCls.value, "-unselectable"), !selectable), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames), attrs.class),
        "direction": direction.value,
        "checkable": checkable,
        "selectable": selectable,
        "switcherIcon": function switcherIcon(nodeProps) {
          return renderSwitcherIcon(prefixCls.value, _switcherIcon, showLine, nodeProps);
        },
        "onCheck": handleCheck,
        "onExpand": handleExpand,
        "onSelect": handleSelect,
        "onDblclick": onDblclick || onDoubleclick,
        "children": children
      }), _objectSpread(_objectSpread({}, slots), {}, {
        checkable: function checkable() {
          return _createVNode("span", {
            "class": "".concat(prefixCls.value, "-checkbox-inner")
          }, null);
        }
      }));
    };
  }
});