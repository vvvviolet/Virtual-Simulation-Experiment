"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabNavListProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useRaf = require("../hooks/useRaf");
var _TabNode = _interopRequireDefault(require("./TabNode"));
var _useOffsets = _interopRequireDefault(require("../hooks/useOffsets"));
var _OperationNode = _interopRequireDefault(require("./OperationNode"));
var _TabContext = require("../TabContext");
var _useTouchMove = _interopRequireDefault(require("../hooks/useTouchMove"));
var _AddButton = _interopRequireDefault(require("./AddButton"));
var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));
var _useSyncState5 = _interopRequireDefault(require("../hooks/useSyncState"));
var _useState17 = _interopRequireDefault(require("../../../_util/hooks/useState"));
var _raf = _interopRequireDefault(require("../../../_util/raf"));
var _classNames3 = _interopRequireDefault(require("../../../_util/classNames"));
var _vcResizeObserver = _interopRequireDefault(require("../../../vc-resize-observer"));
var _util = require("../../../_util/util");
var _useRefs3 = _interopRequireDefault(require("../../../_util/hooks/useRefs"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
var tabNavListProps = function tabNavListProps() {
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
    moreIcon: _vueTypes.default.any,
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
exports.tabNavListProps = tabNavListProps;
var _default2 = (0, _vue.defineComponent)({
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
    var _useInjectTabs = (0, _TabContext.useInjectTabs)(),
      tabs = _useInjectTabs.tabs,
      prefixCls = _useInjectTabs.prefixCls;
    var tabsWrapperRef = (0, _vue.ref)();
    var tabListRef = (0, _vue.ref)();
    var operationsRef = (0, _vue.ref)();
    var innerAddButtonRef = (0, _vue.ref)();
    var _useRefs = (0, _useRefs3.default)(),
      _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
      setRef = _useRefs2[0],
      btnRefs = _useRefs2[1];
    var tabPositionTopOrBottom = (0, _vue.computed)(function () {
      return props.tabPosition === 'top' || props.tabPosition === 'bottom';
    });
    var _useSyncState = (0, _useSyncState5.default)(0, function (next, prev) {
        if (tabPositionTopOrBottom.value && props.onTabScroll) {
          props.onTabScroll({
            direction: next > prev ? 'left' : 'right'
          });
        }
      }),
      _useSyncState2 = (0, _slicedToArray2.default)(_useSyncState, 2),
      transformLeft = _useSyncState2[0],
      setTransformLeft = _useSyncState2[1];
    var _useSyncState3 = (0, _useSyncState5.default)(0, function (next, prev) {
        if (!tabPositionTopOrBottom.value && props.onTabScroll) {
          props.onTabScroll({
            direction: next > prev ? 'top' : 'bottom'
          });
        }
      }),
      _useSyncState4 = (0, _slicedToArray2.default)(_useSyncState3, 2),
      transformTop = _useSyncState4[0],
      setTransformTop = _useSyncState4[1];
    var _useState = (0, _useState17.default)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      wrapperScrollWidth = _useState2[0],
      setWrapperScrollWidth = _useState2[1];
    var _useState3 = (0, _useState17.default)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      wrapperScrollHeight = _useState4[0],
      setWrapperScrollHeight = _useState4[1];
    var _useState5 = (0, _useState17.default)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      wrapperWidth = _useState6[0],
      setWrapperWidth = _useState6[1];
    var _useState7 = (0, _useState17.default)(null),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      wrapperHeight = _useState8[0],
      setWrapperHeight = _useState8[1];
    var _useState9 = (0, _useState17.default)(0),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      addWidth = _useState10[0],
      setAddWidth = _useState10[1];
    var _useState11 = (0, _useState17.default)(0),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      addHeight = _useState12[0],
      setAddHeight = _useState12[1];
    var _useRafState = (0, _useRaf.useRafState)(new Map()),
      _useRafState2 = (0, _slicedToArray2.default)(_useRafState, 2),
      tabSizes = _useRafState2[0],
      setTabSizes = _useRafState2[1];
    var tabOffsets = (0, _useOffsets.default)(tabs, tabSizes);
    // ========================== Util =========================
    var operationsHiddenClassName = (0, _vue.computed)(function () {
      return "".concat(prefixCls.value, "-nav-operations-hidden");
    });
    var transformMin = (0, _vue.ref)(0);
    var transformMax = (0, _vue.ref)(0);
    (0, _vue.watchEffect)(function () {
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
    var touchMovingRef = (0, _vue.ref)();
    var _useState13 = (0, _useState17.default)(),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
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
    (0, _useTouchMove.default)(tabsWrapperRef, function (offsetX, offsetY) {
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
    (0, _vue.watch)(lockAnimation, function () {
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
    var visibleStart = (0, _vue.ref)(0);
    var visibleEnd = (0, _vue.ref)(0);
    (0, _vue.watchEffect)(function () {
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
    var hiddenTabs = (0, _vue.computed)(function () {
      return [].concat((0, _toConsumableArray2.default)(tabs.value.slice(0, visibleStart.value)), (0, _toConsumableArray2.default)(tabs.value.slice(visibleEnd.value + 1)));
    });
    // =================== Link & Operations ===================
    var _useState15 = (0, _useState17.default)(),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      inkStyle = _useState16[0],
      setInkStyle = _useState16[1];
    var activeTabOffset = (0, _vue.computed)(function () {
      return tabOffsets.value.get(props.activeKey);
    });
    // Delay set ink style to avoid remove tab blink
    var inkBarRafRef = (0, _vue.ref)();
    var cleanInkBarRaf = function cleanInkBarRaf() {
      _raf.default.cancel(inkBarRafRef.value);
    };
    (0, _vue.watch)([activeTabOffset, tabPositionTopOrBottom, function () {
      return props.rtl;
    }], function () {
      var newInkStyle = {};
      if (activeTabOffset.value) {
        if (tabPositionTopOrBottom.value) {
          if (props.rtl) {
            newInkStyle.right = (0, _util.toPx)(activeTabOffset.value.right);
          } else {
            newInkStyle.left = (0, _util.toPx)(activeTabOffset.value.left);
          }
          newInkStyle.width = (0, _util.toPx)(activeTabOffset.value.width);
        } else {
          newInkStyle.top = (0, _util.toPx)(activeTabOffset.value.top);
          newInkStyle.height = (0, _util.toPx)(activeTabOffset.value.height);
        }
      }
      cleanInkBarRaf();
      inkBarRafRef.value = (0, _raf.default)(function () {
        setInkStyle(newInkStyle);
      });
    });
    (0, _vue.watch)([function () {
      return props.activeKey;
    }, activeTabOffset, tabOffsets, tabPositionTopOrBottom], function () {
      scrollToTab();
    }, {
      flush: 'post'
    });
    (0, _vue.watch)([function () {
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
      return content ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-extra-content")
      }, [content]) : null;
    };
    (0, _vue.onBeforeUnmount)(function () {
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
        return (0, _vue.createVNode)(_TabNode.default, {
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
      return (0, _vue.createVNode)("div", {
        "role": "tablist",
        "class": (0, _classNames3.default)("".concat(pre, "-nav"), className),
        "style": style,
        "onKeydown": function onKeydown() {
          // No need animation when use keyboard
          doLockAnimation();
        }
      }, [(0, _vue.createVNode)(ExtraContent, {
        "position": "left",
        "prefixCls": pre,
        "extra": slots.leftExtra
      }, null), (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": onListHolderResize
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": (0, _classNames3.default)(wrapPrefix, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), (0, _defineProperty2.default)(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), (0, _defineProperty2.default)(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), (0, _defineProperty2.default)(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
            "ref": tabsWrapperRef
          }, [(0, _vue.createVNode)(_vcResizeObserver.default, {
            "onResize": onListHolderResize
          }, {
            default: function _default() {
              return [(0, _vue.createVNode)("div", {
                "ref": tabListRef,
                "class": "".concat(pre, "-nav-list"),
                "style": {
                  transform: "translate(".concat(transformLeft.value, "px, ").concat(transformTop.value, "px)"),
                  transition: lockAnimation.value ? 'none' : undefined
                }
              }, [tabNodes, (0, _vue.createVNode)(_AddButton.default, {
                "ref": innerAddButtonRef,
                "prefixCls": pre,
                "locale": locale,
                "editable": editable,
                "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
                  visibility: hasDropdown ? 'hidden' : null
                })
              }, null), (0, _vue.createVNode)("div", {
                "class": (0, _classNames3.default)("".concat(pre, "-ink-bar"), (0, _defineProperty2.default)({}, "".concat(pre, "-ink-bar-animated"), animated.inkBar)),
                "style": inkStyle.value
              }, null)])];
            }
          })])];
        }
      }), (0, _vue.createVNode)(_OperationNode.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
        "ref": operationsRef,
        "prefixCls": pre,
        "tabs": hiddenTabs.value,
        "class": !hasDropdown && operationsHiddenClassName.value
      }), (0, _pick.default)(slots, ['moreIcon'])), (0, _vue.createVNode)(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.rightExtra
      }, null), (0, _vue.createVNode)(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.tabBarExtraContent
      }, null)]);
    };
  }
});
exports.default = _default2;