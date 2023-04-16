import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"];
import { createVNode as _createVNode } from "vue";
import { useInjectKeysState, useInjectTreeContext } from './contextTypes';
import Indent from './Indent';
import { convertNodePropsToEventData, getTreeNodeProps } from './utils/treeUtil';
import { computed, defineComponent, getCurrentInstance, onMounted, onUpdated, reactive, ref } from 'vue';
import { treeNodeProps } from './props';
import classNames from '../_util/classNames';
import { warning } from '../vc-util/warning';
import pickAttrs from '../_util/pickAttrs';
import eagerComputed from '../_util/eagerComputed';
var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TreeNode',
  inheritAttrs: false,
  props: treeNodeProps,
  isTreeNode: 1,
  slots: ['title', 'icon', 'switcherIcon'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose;
    warning(!('slots' in props.data), "treeData slots is deprecated, please use ".concat(Object.keys(props.data.slots || {}).map(function (key) {
      return '`v-slot:' + key + '` ';
    }), "instead"));
    var dragNodeHighlight = ref(false);
    var context = useInjectTreeContext();
    var _useInjectKeysState = useInjectKeysState(),
      expandedKeysSet = _useInjectKeysState.expandedKeysSet,
      selectedKeysSet = _useInjectKeysState.selectedKeysSet,
      loadedKeysSet = _useInjectKeysState.loadedKeysSet,
      loadingKeysSet = _useInjectKeysState.loadingKeysSet,
      checkedKeysSet = _useInjectKeysState.checkedKeysSet,
      halfCheckedKeysSet = _useInjectKeysState.halfCheckedKeysSet;
    var _context$value = context.value,
      dragOverNodeKey = _context$value.dragOverNodeKey,
      dropPosition = _context$value.dropPosition,
      keyEntities = _context$value.keyEntities;
    var mergedTreeNodeProps = computed(function () {
      return getTreeNodeProps(props.eventKey, {
        expandedKeysSet: expandedKeysSet.value,
        selectedKeysSet: selectedKeysSet.value,
        loadedKeysSet: loadedKeysSet.value,
        loadingKeysSet: loadingKeysSet.value,
        checkedKeysSet: checkedKeysSet.value,
        halfCheckedKeysSet: halfCheckedKeysSet.value,
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        keyEntities: keyEntities
      });
    });
    var expanded = eagerComputed(function () {
      return mergedTreeNodeProps.value.expanded;
    });
    var selected = eagerComputed(function () {
      return mergedTreeNodeProps.value.selected;
    });
    var checked = eagerComputed(function () {
      return mergedTreeNodeProps.value.checked;
    });
    var loaded = eagerComputed(function () {
      return mergedTreeNodeProps.value.loaded;
    });
    var loading = eagerComputed(function () {
      return mergedTreeNodeProps.value.loading;
    });
    var halfChecked = eagerComputed(function () {
      return mergedTreeNodeProps.value.halfChecked;
    });
    var dragOver = eagerComputed(function () {
      return mergedTreeNodeProps.value.dragOver;
    });
    var dragOverGapTop = eagerComputed(function () {
      return mergedTreeNodeProps.value.dragOverGapTop;
    });
    var dragOverGapBottom = eagerComputed(function () {
      return mergedTreeNodeProps.value.dragOverGapBottom;
    });
    var pos = eagerComputed(function () {
      return mergedTreeNodeProps.value.pos;
    });
    var selectHandle = ref();
    var hasChildren = computed(function () {
      var eventKey = props.eventKey;
      var keyEntities = context.value.keyEntities;
      var _ref2 = keyEntities[eventKey] || {},
        children = _ref2.children;
      return !!(children || []).length;
    });
    var isLeaf = computed(function () {
      var isLeaf = props.isLeaf;
      var loadData = context.value.loadData;
      var has = hasChildren.value;
      if (isLeaf === false) {
        return false;
      }
      return isLeaf || !loadData && !has || loadData && loaded.value && !has;
    });
    var nodeState = computed(function () {
      if (isLeaf.value) {
        return null;
      }
      return expanded.value ? ICON_OPEN : ICON_CLOSE;
    });
    var isDisabled = computed(function () {
      var disabled = props.disabled;
      var treeDisabled = context.value.disabled;
      return !!(treeDisabled || disabled);
    });
    var isCheckable = computed(function () {
      var checkable = props.checkable;
      var treeCheckable = context.value.checkable;
      // Return false if tree or treeNode is not checkable
      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    });
    var isSelectable = computed(function () {
      var selectable = props.selectable;
      var treeSelectable = context.value.selectable;
      // Ignore when selectable is undefined or null
      if (typeof selectable === 'boolean') {
        return selectable;
      }
      return treeSelectable;
    });
    var renderArgsData = computed(function () {
      var data = props.data,
        active = props.active,
        checkable = props.checkable,
        disableCheckbox = props.disableCheckbox,
        disabled = props.disabled,
        selectable = props.selectable;
      return _objectSpread(_objectSpread({
        active: active,
        checkable: checkable,
        disableCheckbox: disableCheckbox,
        disabled: disabled,
        selectable: selectable
      }, data), {}, {
        dataRef: data,
        data: data,
        isLeaf: isLeaf.value,
        checked: checked.value,
        expanded: expanded.value,
        loading: loading.value,
        selected: selected.value,
        halfChecked: halfChecked.value
      });
    });
    var instance = getCurrentInstance();
    var eventData = computed(function () {
      var eventKey = props.eventKey;
      var keyEntities = context.value.keyEntities;
      var _ref3 = keyEntities[eventKey] || {},
        parent = _ref3.parent;
      return _objectSpread(_objectSpread({}, convertNodePropsToEventData(_extends({}, props, mergedTreeNodeProps.value))), {}, {
        parent: parent
      });
    });
    var dragNodeEvent = reactive({
      eventData: eventData,
      eventKey: computed(function () {
        return props.eventKey;
      }),
      selectHandle: selectHandle,
      pos: pos,
      key: instance.vnode.key
    });
    expose(dragNodeEvent);
    var onSelectorDoubleClick = function onSelectorDoubleClick(e) {
      var onNodeDoubleClick = context.value.onNodeDoubleClick;
      onNodeDoubleClick(e, eventData.value);
    };
    var onSelect = function onSelect(e) {
      if (isDisabled.value) return;
      var onNodeSelect = context.value.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, eventData.value);
    };
    var onCheck = function onCheck(e) {
      if (isDisabled.value) return;
      var disableCheckbox = props.disableCheckbox;
      var onNodeCheck = context.value.onNodeCheck;
      if (!isCheckable.value || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked.value;
      onNodeCheck(e, eventData.value, targetChecked);
    };
    var onSelectorClick = function onSelectorClick(e) {
      // Click trigger before select/check operation
      var onNodeClick = context.value.onNodeClick;
      onNodeClick(e, eventData.value);
      if (isSelectable.value) {
        onSelect(e);
      } else {
        onCheck(e);
      }
    };
    var onMouseEnter = function onMouseEnter(e) {
      var onNodeMouseEnter = context.value.onNodeMouseEnter;
      onNodeMouseEnter(e, eventData.value);
    };
    var onMouseLeave = function onMouseLeave(e) {
      var onNodeMouseLeave = context.value.onNodeMouseLeave;
      onNodeMouseLeave(e, eventData.value);
    };
    var onContextmenu = function onContextmenu(e) {
      var onNodeContextMenu = context.value.onNodeContextMenu;
      onNodeContextMenu(e, eventData.value);
    };
    var onDragStart = function onDragStart(e) {
      var onNodeDragStart = context.value.onNodeDragStart;
      e.stopPropagation();
      dragNodeHighlight.value = true;
      onNodeDragStart(e, dragNodeEvent);
      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {
        // empty
      }
    };
    var onDragEnter = function onDragEnter(e) {
      var onNodeDragEnter = context.value.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, dragNodeEvent);
    };
    var onDragOver = function onDragOver(e) {
      var onNodeDragOver = context.value.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, dragNodeEvent);
    };
    var onDragLeave = function onDragLeave(e) {
      var onNodeDragLeave = context.value.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, dragNodeEvent);
    };
    var onDragEnd = function onDragEnd(e) {
      var onNodeDragEnd = context.value.onNodeDragEnd;
      e.stopPropagation();
      dragNodeHighlight.value = false;
      onNodeDragEnd(e, dragNodeEvent);
    };
    var onDrop = function onDrop(e) {
      var onNodeDrop = context.value.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();
      dragNodeHighlight.value = false;
      onNodeDrop(e, dragNodeEvent);
    };
    // Disabled item still can be switch
    var onExpand = function onExpand(e) {
      var onNodeExpand = context.value.onNodeExpand;
      if (loading.value) return;
      onNodeExpand(e, eventData.value);
    };
    var isDraggable = function isDraggable() {
      var data = props.data;
      var draggable = context.value.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
    };
    // ==================== Render: Drag Handler ====================
    var renderDragHandler = function renderDragHandler() {
      var _context$value2 = context.value,
        draggable = _context$value2.draggable,
        prefixCls = _context$value2.prefixCls;
      return draggable !== null && draggable !== void 0 && draggable.icon ? _createVNode("span", {
        "class": "".concat(prefixCls, "-draggable-icon")
      }, [draggable.icon]) : null;
    };
    var renderSwitcherIconDom = function renderSwitcherIconDom() {
      var _context$value$slots, _props$data, _props$data$slots;
      var _props$switcherIcon = props.switcherIcon,
        switcherIconFromProps = _props$switcherIcon === void 0 ? slots.switcherIcon || ((_context$value$slots = context.value.slots) === null || _context$value$slots === void 0 ? void 0 : _context$value$slots[(_props$data = props.data) === null || _props$data === void 0 ? void 0 : (_props$data$slots = _props$data.slots) === null || _props$data$slots === void 0 ? void 0 : _props$data$slots.switcherIcon]) : _props$switcherIcon;
      var switcherIconFromCtx = context.value.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
      // if switcherIconDom is null, no render switcher span
      if (typeof switcherIcon === 'function') {
        return switcherIcon(renderArgsData.value);
      }
      return switcherIcon;
    };
    // Load data to avoid default expanded tree without data
    var syncLoadData = function syncLoadData() {
      //const { expanded, loading, loaded } = props;
      var _context$value3 = context.value,
        loadData = _context$value3.loadData,
        onNodeLoad = _context$value3.onNodeLoad;
      if (loading.value) {
        return;
      }
      // read from state to avoid loadData at same time
      if (loadData && expanded.value && !isLeaf.value) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        if (!hasChildren.value && !loaded.value) {
          onNodeLoad(eventData.value);
        }
      }
    };
    onMounted(function () {
      syncLoadData();
    });
    onUpdated(function () {
      // https://github.com/vueComponent/ant-design-vue/issues/4835
      syncLoadData();
    });
    // Switcher
    var renderSwitcher = function renderSwitcher() {
      var prefixCls = context.value.prefixCls;
      // if switcherIconDom is null, no render switcher span
      var switcherIconDom = renderSwitcherIconDom();
      if (isLeaf.value) {
        return switcherIconDom !== false ? _createVNode("span", {
          "class": classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, [switcherIconDom]) : null;
      }
      var switcherCls = classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded.value ? ICON_OPEN : ICON_CLOSE));
      return switcherIconDom !== false ? _createVNode("span", {
        "onClick": onExpand,
        "class": switcherCls
      }, [switcherIconDom]) : null;
    };
    // Checkbox
    var renderCheckbox = function renderCheckbox() {
      var _context$value$custom, _context$value4;
      var disableCheckbox = props.disableCheckbox;
      var prefixCls = context.value.prefixCls;
      var disabled = isDisabled.value;
      var checkable = isCheckable.value;
      if (!checkable) return null;
      return _createVNode("span", {
        "class": classNames("".concat(prefixCls, "-checkbox"), checked.value && "".concat(prefixCls, "-checkbox-checked"), !checked.value && halfChecked.value && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        "onClick": onCheck
      }, [(_context$value$custom = (_context$value4 = context.value).customCheckable) === null || _context$value$custom === void 0 ? void 0 : _context$value$custom.call(_context$value4)]);
    };
    var renderIcon = function renderIcon() {
      var prefixCls = context.value.prefixCls;
      return _createVNode("span", {
        "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(nodeState.value || 'docu'), loading.value && "".concat(prefixCls, "-icon_loading"))
      }, null);
    };
    var renderDropIndicator = function renderDropIndicator() {
      var disabled = props.disabled,
        eventKey = props.eventKey;
      var _context$value5 = context.value,
        draggable = _context$value5.draggable,
        dropLevelOffset = _context$value5.dropLevelOffset,
        dropPosition = _context$value5.dropPosition,
        prefixCls = _context$value5.prefixCls,
        indent = _context$value5.indent,
        dropIndicatorRender = _context$value5.dropIndicatorRender,
        dragOverNodeKey = _context$value5.dragOverNodeKey,
        direction = _context$value5.direction;
      var rootDraggable = draggable !== false;
      // allowDrop is calculated in Tree.tsx, there is no need for calc it here
      var showIndicator = !disabled && rootDraggable && dragOverNodeKey === eventKey;
      return showIndicator ? dropIndicatorRender({
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        indent: indent,
        prefixCls: prefixCls,
        direction: direction
      }) : null;
    };
    // Icon + Title
    var renderSelector = function renderSelector() {
      var _context$value$slots2, _props$data2, _props$data2$slots, _context$value$slots3;
      var _props$icon = props.icon,
        icon = _props$icon === void 0 ? slots.icon : _props$icon,
        data = props.data;
      var title = slots.title || ((_context$value$slots2 = context.value.slots) === null || _context$value$slots2 === void 0 ? void 0 : _context$value$slots2[(_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : (_props$data2$slots = _props$data2.slots) === null || _props$data2$slots === void 0 ? void 0 : _props$data2$slots.title]) || ((_context$value$slots3 = context.value.slots) === null || _context$value$slots3 === void 0 ? void 0 : _context$value$slots3.title) || props.title;
      var _context$value6 = context.value,
        prefixCls = _context$value6.prefixCls,
        showIcon = _context$value6.showIcon,
        treeIcon = _context$value6.icon,
        loadData = _context$value6.loadData;
      var disabled = isDisabled.value;
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper");
      // Icon - Still show loading icon when loading without showIcon
      var $icon;
      if (showIcon) {
        var _context$value$slots4, _data$slots;
        var currentIcon = icon || ((_context$value$slots4 = context.value.slots) === null || _context$value$slots4 === void 0 ? void 0 : _context$value$slots4[data === null || data === void 0 ? void 0 : (_data$slots = data.slots) === null || _data$slots === void 0 ? void 0 : _data$slots.icon]) || treeIcon;
        $icon = currentIcon ? _createVNode("span", {
          "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, [typeof currentIcon === 'function' ? currentIcon(renderArgsData.value) : currentIcon]) : renderIcon();
      } else if (loadData && loading.value) {
        $icon = renderIcon();
      }
      // Title
      var titleNode;
      if (typeof title === 'function') {
        titleNode = title(renderArgsData.value);
        // } else if (contextSlots.titleRender) {
        //   titleNode = contextSlots.titleRender(renderArgsData.value);
      } else {
        titleNode = title;
      }
      titleNode = titleNode === undefined ? defaultTitle : titleNode;
      var $title = _createVNode("span", {
        "class": "".concat(prefixCls, "-title")
      }, [titleNode]);
      return _createVNode("span", {
        "ref": selectHandle,
        "title": typeof title === 'string' ? title : '',
        "class": classNames("".concat(wrapClass), "".concat(wrapClass, "-").concat(nodeState.value || 'normal'), !disabled && (selected.value || dragNodeHighlight.value) && "".concat(prefixCls, "-node-selected")),
        "onMouseenter": onMouseEnter,
        "onMouseleave": onMouseLeave,
        "onContextmenu": onContextmenu,
        "onClick": onSelectorClick,
        "onDblclick": onSelectorDoubleClick
      }, [$icon, $title, renderDropIndicator()]);
    };
    return function () {
      var _classNames;
      var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
        eventKey = _props$attrs.eventKey,
        isLeaf = _props$attrs.isLeaf,
        isStart = _props$attrs.isStart,
        isEnd = _props$attrs.isEnd,
        domRef = _props$attrs.domRef,
        active = _props$attrs.active,
        data = _props$attrs.data,
        onMousemove = _props$attrs.onMousemove,
        selectable = _props$attrs.selectable,
        otherProps = _objectWithoutProperties(_props$attrs, _excluded);
      var _context$value7 = context.value,
        prefixCls = _context$value7.prefixCls,
        filterTreeNode = _context$value7.filterTreeNode,
        keyEntities = _context$value7.keyEntities,
        dropContainerKey = _context$value7.dropContainerKey,
        dropTargetKey = _context$value7.dropTargetKey,
        draggingNodeKey = _context$value7.draggingNodeKey;
      var disabled = isDisabled.value;
      var dataOrAriaAttributeProps = pickAttrs(otherProps, {
        aria: true,
        data: true
      });
      var _ref4 = keyEntities[eventKey] || {},
        level = _ref4.level;
      var isEndNode = isEnd[isEnd.length - 1];
      var mergedDraggable = isDraggable();
      var draggableWithoutDisabled = !disabled && mergedDraggable;
      var dragging = draggingNodeKey === eventKey;
      var ariaSelected = selectable !== undefined ? {
        'aria-selected': !!selectable
      } : undefined;
      // console.log(1);
      return _createVNode("div", _objectSpread(_objectSpread({
        "ref": domRef,
        "class": classNames(attrs.class, "".concat(prefixCls, "-treenode"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded.value ? 'open' : 'close'), !isLeaf), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked.value), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked.value), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-selected"), selected.value), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-loading"), loading.value), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-active"), active), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-draggable"), draggableWithoutDisabled), _defineProperty(_classNames, "dragging", dragging), _defineProperty(_classNames, 'drop-target', dropTargetKey === eventKey), _defineProperty(_classNames, 'drop-container', dropContainerKey === eventKey), _defineProperty(_classNames, 'drag-over', !disabled && dragOver.value), _defineProperty(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop.value), _defineProperty(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom.value), _defineProperty(_classNames, 'filter-node', filterTreeNode && filterTreeNode(eventData.value)), _classNames)),
        "style": attrs.style,
        "draggable": draggableWithoutDisabled,
        "aria-grabbed": dragging,
        "onDragstart": draggableWithoutDisabled ? onDragStart : undefined,
        "onDragenter": mergedDraggable ? onDragEnter : undefined,
        "onDragover": mergedDraggable ? onDragOver : undefined,
        "onDragleave": mergedDraggable ? onDragLeave : undefined,
        "onDrop": mergedDraggable ? onDrop : undefined,
        "onDragend": mergedDraggable ? onDragEnd : undefined,
        "onMousemove": onMousemove
      }, ariaSelected), dataOrAriaAttributeProps), [_createVNode(Indent, {
        "prefixCls": prefixCls,
        "level": level,
        "isStart": isStart,
        "isEnd": isEnd
      }, null), renderDragHandler(), renderSwitcher(), renderCheckbox(), renderSelector()]);
    };
  }
});