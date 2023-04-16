import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { useRafState } from '../hooks/useRaf';
import TabNode from './TabNode';
import useOffsets from '../hooks/useOffsets';
import OperationNode from './OperationNode';
import { useInjectTabs } from '../TabContext';
import useTouchMove from '../hooks/useTouchMove';
import AddButton from './AddButton';
import { onBeforeUnmount, defineComponent, ref, watch, watchEffect, computed } from 'vue';
import PropTypes from '../../../_util/vue-types';
import useSyncState from '../hooks/useSyncState';
import useState from '../../../_util/hooks/useState';
import raf from '../../../_util/raf';
import classNames from '../../../_util/classNames';
import ResizeObserver from '../../../vc-resize-observer';
import { toPx } from '../../../_util/util';
import useRefs from '../../../_util/hooks/useRefs';
import pick from 'lodash-es/pick';
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
export var tabNavListProps = function tabNavListProps() {
  return {
    id: {
      type: String
    },
    tabPosition: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: undefined
    },
    editable: {
      type: Object
    },
    moreIcon: PropTypes.any,
    moreTransitionName: {
      type: String
    },
    mobile: {
      type: Boolean
    },
    tabBarGutter: {
      type: Number
    },
    renderTabBar: {
      type: Function
    },
    locale: {
      type: Object,
      default: undefined
    },
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    }
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TabNavList',
  inheritAttrs: false,
  props: tabNavListProps(),
  slots: ['moreIcon', 'leftExtra', 'rightExtra', 'tabBarExtraContent'],
  emits: ['tabClick', 'tabScroll'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var _useInjectTabs = useInjectTabs(),
      tabs = _useInjectTabs.tabs,
      prefixCls = _useInjectTabs.prefixCls;
    var tabsWrapperRef = ref();
    var tabListRef = ref();
    var operationsRef = ref();
    var innerAddButtonRef = ref();
    var _useRefs = useRefs(),
      _useRefs2 = _slicedToArray(_useRefs, 2),
      setRef = _useRefs2[0],
      btnRefs = _useRefs2[1];
    var tabPositionTopOrBottom = computed(function () {
      return props.tabPosition === 'top' || props.tabPosition === 'bottom';
    });
    var _useSyncState = useSyncState(0, function (next, prev) {
        if (tabPositionTopOrBottom.value && props.onTabScroll) {
          props.onTabScroll({
            direction: next > prev ? 'left' : 'right'
          });
        }
      }),
      _useSyncState2 = _slicedToArray(_useSyncState, 2),
      transformLeft = _useSyncState2[0],
      setTransformLeft = _useSyncState2[1];
    var _useSyncState3 = useSyncState(0, function (next, prev) {
        if (!tabPositionTopOrBottom.value && props.onTabScroll) {
          props.onTabScroll({
            direction: next > prev ? 'top' : 'bottom'
          });
        }
      }),
      _useSyncState4 = _slicedToArray(_useSyncState3, 2),
      transformTop = _useSyncState4[0],
      setTransformTop = _useSyncState4[1];
    var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      wrapperScrollWidth = _useState2[0],
      setWrapperScrollWidth = _useState2[1];
    var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      wrapperScrollHeight = _useState4[0],
      setWrapperScrollHeight = _useState4[1];
    var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      wrapperWidth = _useState6[0],
      setWrapperWidth = _useState6[1];
    var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      wrapperHeight = _useState8[0],
      setWrapperHeight = _useState8[1];
    var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      addWidth = _useState10[0],
      setAddWidth = _useState10[1];
    var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      addHeight = _useState12[0],
      setAddHeight = _useState12[1];
    var _useRafState = useRafState(new Map()),
      _useRafState2 = _slicedToArray(_useRafState, 2),
      tabSizes = _useRafState2[0],
      setTabSizes = _useRafState2[1];
    var tabOffsets = useOffsets(tabs, tabSizes);
    // ========================== Util =========================
    var operationsHiddenClassName = computed(function () {
      return "".concat(prefixCls.value, "-nav-operations-hidden");
    });
    var transformMin = ref(0);
    var transformMax = ref(0);
    watchEffect(function () {
      if (!tabPositionTopOrBottom.value) {
        transformMin.value = Math.min(0, wrapperHeight.value - wrapperScrollHeight.value);
        transformMax.value = 0;
      } else if (props.rtl) {
        transformMin.value = 0;
        transformMax.value = Math.max(0, wrapperScrollWidth.value - wrapperWidth.value);
      } else {
        transformMin.value = Math.min(0, wrapperWidth.value - wrapperScrollWidth.value);
        transformMax.value = 0;
      }
    });
    var alignInRange = function alignInRange(value) {
      if (value < transformMin.value) {
        return transformMin.value;
      }
      if (value > transformMax.value) {
        return transformMax.value;
      }
      return value;
    };
    // ========================= Mobile ========================
    var touchMovingRef = ref();
    var _useState13 = useState(),
      _useState14 = _slicedToArray(_useState13, 2),
      lockAnimation = _useState14[0],
      setLockAnimation = _useState14[1];
    var doLockAnimation = function doLockAnimation() {
      setLockAnimation(Date.now());
    };
    var clearTouchMoving = function clearTouchMoving() {
      clearTimeout(touchMovingRef.value);
    };
    var doMove = function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    };
    useTouchMove(tabsWrapperRef, function (offsetX, offsetY) {
      if (tabPositionTopOrBottom.value) {
        // Skip scroll if place is enough
        if (wrapperWidth.value >= wrapperScrollWidth.value) {
          return false;
        }
        doMove(setTransformLeft, offsetX);
      } else {
        if (wrapperHeight.value >= wrapperScrollHeight.value) {
          return false;
        }
        doMove(setTransformTop, offsetY);
      }
      clearTouchMoving();
      doLockAnimation();
      return true;
    });
    watch(lockAnimation, function () {
      clearTouchMoving();
      if (lockAnimation.value) {
        touchMovingRef.value = setTimeout(function () {
          setLockAnimation(0);
        }, 100);
      }
    });
    // ========================= Scroll ========================
    var scrollToTab = function scrollToTab() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.activeKey;
      var tabOffset = tabOffsets.value.get(key) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if (tabPositionTopOrBottom.value) {
        // ============ Align with top & bottom ============
        var newTransform = transformLeft.value;
        // RTL
        if (props.rtl) {
          if (tabOffset.right < transformLeft.value) {
            newTransform = tabOffset.right;
          } else if (tabOffset.right + tabOffset.width > transformLeft.value + wrapperWidth.value) {
            newTransform = tabOffset.right + tabOffset.width - wrapperWidth.value;
          }
        }
        // LTR
        else if (tabOffset.left < -transformLeft.value) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft.value + wrapperWidth.value) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth.value);
        }
        setTransformTop(0);
        setTransformLeft(alignInRange(newTransform));
      } else {
        // ============ Align with left & right ============
        var _newTransform = transformTop.value;
        if (tabOffset.top < -transformTop.value) {
          _newTransform = -tabOffset.top;
        } else if (tabOffset.top + tabOffset.height > -transformTop.value + wrapperHeight.value) {
          _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight.value);
        }
        setTransformLeft(0);
        setTransformTop(alignInRange(_newTransform));
      }
    };
    var visibleStart = ref(0);
    var visibleEnd = ref(0);
    watchEffect(function () {
      var _ref3;
      var unit;
      var position;
      var transformSize;
      var basicSize;
      var tabContentSize;
      var addSize;
      var tabOffsetsValue = tabOffsets.value;
      if (['top', 'bottom'].includes(props.tabPosition)) {
        unit = 'width';
        basicSize = wrapperWidth.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addWidth.value;
        position = props.rtl ? 'right' : 'left';
        transformSize = Math.abs(transformLeft.value);
      } else {
        unit = 'height';
        basicSize = wrapperHeight.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addHeight.value;
        position = 'top';
        transformSize = -transformTop.value;
      }
      var mergedBasicSize = basicSize;
      if (tabContentSize + addSize > basicSize && tabContentSize < basicSize) {
        mergedBasicSize = basicSize - addSize;
      }
      var tabsVal = tabs.value;
      if (!tabsVal.length) {
        var _ref2;
        return _ref2 = [0, 0], visibleStart.value = _ref2[0], visibleEnd.value = _ref2[1], _ref2;
      }
      var len = tabsVal.length;
      var endIndex = len;
      for (var i = 0; i < len; i += 1) {
        var offset = tabOffsetsValue.get(tabsVal[i].key) || DEFAULT_SIZE;
        if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
          endIndex = i - 1;
          break;
        }
      }
      var startIndex = 0;
      for (var _i = len - 1; _i >= 0; _i -= 1) {
        var _offset = tabOffsetsValue.get(tabsVal[_i].key) || DEFAULT_SIZE;
        if (_offset[position] < transformSize) {
          startIndex = _i + 1;
          break;
        }
      }
      return _ref3 = [startIndex, endIndex], visibleStart.value = _ref3[0], visibleEnd.value = _ref3[1], _ref3;
    });
    var onListHolderResize = function onListHolderResize() {
      var _tabsWrapperRef$value, _tabsWrapperRef$value2, _innerAddButtonRef$va, _tabListRef$value, _tabListRef$value2;
      // Update wrapper records
      var offsetWidth = ((_tabsWrapperRef$value = tabsWrapperRef.value) === null || _tabsWrapperRef$value === void 0 ? void 0 : _tabsWrapperRef$value.offsetWidth) || 0;
      var offsetHeight = ((_tabsWrapperRef$value2 = tabsWrapperRef.value) === null || _tabsWrapperRef$value2 === void 0 ? void 0 : _tabsWrapperRef$value2.offsetHeight) || 0;
      var addDom = ((_innerAddButtonRef$va = innerAddButtonRef.value) === null || _innerAddButtonRef$va === void 0 ? void 0 : _innerAddButtonRef$va.$el) || {};
      var newAddWidth = addDom.offsetWidth || 0;
      var newAddHeight = addDom.offsetHeight || 0;
      setWrapperWidth(offsetWidth);
      setWrapperHeight(offsetHeight);
      setAddWidth(newAddWidth);
      setAddHeight(newAddHeight);
      var newWrapperScrollWidth = (((_tabListRef$value = tabListRef.value) === null || _tabListRef$value === void 0 ? void 0 : _tabListRef$value.offsetWidth) || 0) - newAddWidth;
      var newWrapperScrollHeight = (((_tabListRef$value2 = tabListRef.value) === null || _tabListRef$value2 === void 0 ? void 0 : _tabListRef$value2.offsetHeight) || 0) - newAddHeight;
      setWrapperScrollWidth(newWrapperScrollWidth);
      setWrapperScrollHeight(newWrapperScrollHeight);
      // Update buttons records
      setTabSizes(function () {
        var newSizes = new Map();
        tabs.value.forEach(function (_ref4) {
          var key = _ref4.key;
          var btnRef = btnRefs.value.get(key);
          var btnNode = (btnRef === null || btnRef === void 0 ? void 0 : btnRef.$el) || btnRef;
          if (btnNode) {
            newSizes.set(key, {
              width: btnNode.offsetWidth,
              height: btnNode.offsetHeight,
              left: btnNode.offsetLeft,
              top: btnNode.offsetTop
            });
          }
        });
        return newSizes;
      });
    };
    // ======================== Dropdown =======================
    var hiddenTabs = computed(function () {
      return [].concat(_toConsumableArray(tabs.value.slice(0, visibleStart.value)), _toConsumableArray(tabs.value.slice(visibleEnd.value + 1)));
    });
    // =================== Link & Operations ===================
    var _useState15 = useState(),
      _useState16 = _slicedToArray(_useState15, 2),
      inkStyle = _useState16[0],
      setInkStyle = _useState16[1];
    var activeTabOffset = computed(function () {
      return tabOffsets.value.get(props.activeKey);
    });
    // Delay set ink style to avoid remove tab blink
    var inkBarRafRef = ref();
    var cleanInkBarRaf = function cleanInkBarRaf() {
      raf.cancel(inkBarRafRef.value);
    };
    watch([activeTabOffset, tabPositionTopOrBottom, function () {
      return props.rtl;
    }], function () {
      var newInkStyle = {};
      if (activeTabOffset.value) {
        if (tabPositionTopOrBottom.value) {
          if (props.rtl) {
            newInkStyle.right = toPx(activeTabOffset.value.right);
          } else {
            newInkStyle.left = toPx(activeTabOffset.value.left);
          }
          newInkStyle.width = toPx(activeTabOffset.value.width);
        } else {
          newInkStyle.top = toPx(activeTabOffset.value.top);
          newInkStyle.height = toPx(activeTabOffset.value.height);
        }
      }
      cleanInkBarRaf();
      inkBarRafRef.value = raf(function () {
        setInkStyle(newInkStyle);
      });
    });
    watch([function () {
      return props.activeKey;
    }, activeTabOffset, tabOffsets, tabPositionTopOrBottom], function () {
      scrollToTab();
    }, {
      flush: 'post'
    });
    watch([function () {
      return props.rtl;
    }, function () {
      return props.tabBarGutter;
    }, function () {
      return props.activeKey;
    }, function () {
      return tabs.value;
    }], function () {
      onListHolderResize();
    }, {
      flush: 'post'
    });
    var ExtraContent = function ExtraContent(_ref5) {
      var position = _ref5.position,
        prefixCls = _ref5.prefixCls,
        extra = _ref5.extra;
      if (!extra) return null;
      var content = extra === null || extra === void 0 ? void 0 : extra({
        position: position
      });
      return content ? _createVNode("div", {
        "class": "".concat(prefixCls, "-extra-content")
      }, [content]) : null;
    };
    onBeforeUnmount(function () {
      clearTouchMoving();
      cleanInkBarRaf();
    });
    return function () {
      var _classNames;
      var id = props.id,
        animated = props.animated,
        activeKey = props.activeKey,
        rtl = props.rtl,
        editable = props.editable,
        locale = props.locale,
        tabPosition = props.tabPosition,
        tabBarGutter = props.tabBarGutter,
        onTabClick = props.onTabClick;
      var className = attrs.class,
        style = attrs.style;
      var pre = prefixCls.value;
      // ========================= Render ========================
      var hasDropdown = !!hiddenTabs.value.length;
      var wrapPrefix = "".concat(pre, "-nav-wrap");
      var pingLeft;
      var pingRight;
      var pingTop;
      var pingBottom;
      if (tabPositionTopOrBottom.value) {
        if (rtl) {
          pingRight = transformLeft.value > 0;
          pingLeft = transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        } else {
          pingLeft = transformLeft.value < 0;
          pingRight = -transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        }
      } else {
        pingTop = transformTop.value < 0;
        pingBottom = -transformTop.value + wrapperHeight.value < wrapperScrollHeight.value;
      }
      var tabNodeStyle = {};
      if (tabPosition === 'top' || tabPosition === 'bottom') {
        tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = typeof tabBarGutter === 'number' ? "".concat(tabBarGutter, "px") : tabBarGutter;
      } else {
        tabNodeStyle.marginTop = typeof tabBarGutter === 'number' ? "".concat(tabBarGutter, "px") : tabBarGutter;
      }
      var tabNodes = tabs.value.map(function (tab, i) {
        var key = tab.key;
        return _createVNode(TabNode, {
          "id": id,
          "prefixCls": pre,
          "key": key,
          "tab": tab,
          "style": i === 0 ? undefined : tabNodeStyle,
          "closable": tab.closable,
          "editable": editable,
          "active": key === activeKey,
          "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
          "ref": setRef(key),
          "onClick": function onClick(e) {
            onTabClick(key, e);
          },
          "onFocus": function onFocus() {
            scrollToTab(key);
            doLockAnimation();
            if (!tabsWrapperRef.value) {
              return;
            }
            // Focus element will make scrollLeft change which we should reset back
            if (!rtl) {
              tabsWrapperRef.value.scrollLeft = 0;
            }
            tabsWrapperRef.value.scrollTop = 0;
          }
        }, slots);
      });
      return _createVNode("div", {
        "role": "tablist",
        "class": classNames("".concat(pre, "-nav"), className),
        "style": style,
        "onKeydown": function onKeydown() {
          // No need animation when use keyboard
          doLockAnimation();
        }
      }, [_createVNode(ExtraContent, {
        "position": "left",
        "prefixCls": pre,
        "extra": slots.leftExtra
      }, null), _createVNode(ResizeObserver, {
        "onResize": onListHolderResize
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "class": classNames(wrapPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), _defineProperty(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
            "ref": tabsWrapperRef
          }, [_createVNode(ResizeObserver, {
            "onResize": onListHolderResize
          }, {
            default: function _default() {
              return [_createVNode("div", {
                "ref": tabListRef,
                "class": "".concat(pre, "-nav-list"),
                "style": {
                  transform: "translate(".concat(transformLeft.value, "px, ").concat(transformTop.value, "px)"),
                  transition: lockAnimation.value ? 'none' : undefined
                }
              }, [tabNodes, _createVNode(AddButton, {
                "ref": innerAddButtonRef,
                "prefixCls": pre,
                "locale": locale,
                "editable": editable,
                "style": _objectSpread(_objectSpread({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
                  visibility: hasDropdown ? 'hidden' : null
                })
              }, null), _createVNode("div", {
                "class": classNames("".concat(pre, "-ink-bar"), _defineProperty({}, "".concat(pre, "-ink-bar-animated"), animated.inkBar)),
                "style": inkStyle.value
              }, null)])];
            }
          })])];
        }
      }), _createVNode(OperationNode, _objectSpread(_objectSpread({}, props), {}, {
        "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
        "ref": operationsRef,
        "prefixCls": pre,
        "tabs": hiddenTabs.value,
        "class": !hasDropdown && operationsHiddenClassName.value
      }), pick(slots, ['moreIcon'])), _createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.rightExtra
      }, null), _createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.tabBarExtraContent
      }, null)]);
    };
  }
});