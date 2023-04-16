"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _Filler = _interopRequireDefault(require("./Filler"));
var _Item = _interopRequireDefault(require("./Item"));
var _ScrollBar = _interopRequireDefault(require("./ScrollBar"));
var _useHeights3 = _interopRequireDefault(require("./hooks/useHeights"));
var _useScrollTo = _interopRequireDefault(require("./hooks/useScrollTo"));
var _useFrameWheel3 = _interopRequireDefault(require("./hooks/useFrameWheel"));
var _useMobileTouchMove = _interopRequireDefault(require("./hooks/useMobileTouchMove"));
var _useOriginScroll = _interopRequireDefault(require("./hooks/useOriginScroll"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _supportsPassive = _interopRequireDefault(require("../_util/supportsPassive"));
var _excluded = ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return (0, _vue.createVNode)(_Item.default, {
      "key": key,
      "setRef": function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, {
      default: function _default() {
        return [node];
      }
    });
  });
}
var List = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'List',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: _vueTypes.default.array,
    height: Number,
    itemHeight: Number,
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: {
      type: Boolean,
      default: undefined
    },
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: {
      type: Boolean,
      default: undefined
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup: function setup(props, _ref2) {
    var expose = _ref2.expose;
    // ================================= MISC =================================
    var useVirtual = (0, _vue.computed)(function () {
      var height = props.height,
        itemHeight = props.itemHeight,
        virtual = props.virtual;
      return !!(virtual !== false && height && itemHeight);
    });
    var inVirtual = (0, _vue.computed)(function () {
      var height = props.height,
        itemHeight = props.itemHeight,
        data = props.data;
      return useVirtual.value && data && itemHeight * data.length > height;
    });
    var state = (0, _vue.reactive)({
      scrollTop: 0,
      scrollMoving: false
    });
    var data = (0, _vue.computed)(function () {
      return props.data || EMPTY_DATA;
    });
    var mergedData = (0, _vue.shallowRef)([]);
    (0, _vue.watch)(data, function () {
      mergedData.value = (0, _vue.toRaw)(data.value).slice();
    }, {
      immediate: true
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var itemKey = (0, _vue.shallowRef)(function (_item) {
      return undefined;
    });
    (0, _vue.watch)(function () {
      return props.itemKey;
    }, function (val) {
      if (typeof val === 'function') {
        itemKey.value = val;
      } else {
        itemKey.value = function (item) {
          return item === null || item === void 0 ? void 0 : item[val];
        };
      }
    }, {
      immediate: true
    });
    var componentRef = (0, _vue.ref)();
    var fillerInnerRef = (0, _vue.ref)();
    var scrollBarRef = (0, _vue.ref)(); // Hack on scrollbar to enable flash call
    // =============================== Item Key ===============================
    var getKey = function getKey(item) {
      return itemKey.value(item);
    };
    var sharedConfig = {
      getKey: getKey
    };
    // ================================ Scroll ================================
    function syncScrollTop(newTop) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(state.scrollTop);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }
      state.scrollTop = alignedTop;
    }
    // ================================ Height ================================
    var _useHeights = (0, _useHeights3.default)(mergedData, getKey, null, null),
      _useHeights2 = (0, _slicedToArray2.default)(_useHeights, 4),
      setInstance = _useHeights2[0],
      collectHeight = _useHeights2[1],
      heights = _useHeights2[2],
      updatedMark = _useHeights2[3];
    var calRes = (0, _vue.reactive)({
      scrollHeight: undefined,
      start: 0,
      end: 0,
      offset: undefined
    });
    var offsetHeight = (0, _vue.ref)(0);
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        var _fillerInnerRef$value;
        offsetHeight.value = ((_fillerInnerRef$value = fillerInnerRef.value) === null || _fillerInnerRef$value === void 0 ? void 0 : _fillerInnerRef$value.offsetHeight) || 0;
      });
    });
    (0, _vue.onUpdated)(function () {
      (0, _vue.nextTick)(function () {
        var _fillerInnerRef$value2;
        offsetHeight.value = ((_fillerInnerRef$value2 = fillerInnerRef.value) === null || _fillerInnerRef$value2 === void 0 ? void 0 : _fillerInnerRef$value2.offsetHeight) || 0;
      });
    });
    (0, _vue.watch)([useVirtual, mergedData], function () {
      if (!useVirtual.value) {
        (0, _extends2.default)(calRes, {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.value.length - 1,
          offset: undefined
        });
      }
    }, {
      immediate: true
    });
    (0, _vue.watch)([useVirtual, mergedData, offsetHeight, inVirtual], function () {
      // Always use virtual scroll bar in avoid shaking
      if (useVirtual.value && !inVirtual.value) {
        (0, _extends2.default)(calRes, {
          scrollHeight: offsetHeight.value,
          start: 0,
          end: mergedData.value.length - 1,
          offset: undefined
        });
      }
    }, {
      immediate: true
    });
    (0, _vue.watch)([inVirtual, useVirtual, function () {
      return state.scrollTop;
    }, mergedData, updatedMark, function () {
      return props.height;
    }, offsetHeight], function () {
      if (!useVirtual.value || !inVirtual.value) {
        return;
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.value.length;
      var data = mergedData.value;
      var scrollTop = state.scrollTop;
      var itemHeight = props.itemHeight,
        height = props.height;
      var scrollTopHeight = scrollTop + height;
      for (var i = 0; i < dataLen; i += 1) {
        var item = data[i];
        var key = getKey(item);
        var cacheHeight = heights.get(key);
        if (cacheHeight === undefined) {
          cacheHeight = itemHeight;
        }
        var currentItemBottom = itemTop + cacheHeight;
        if (startIndex === undefined && currentItemBottom >= scrollTop) {
          startIndex = i;
          startOffset = itemTop;
        }
        // Check item bottom in the range. We will render additional one item for motion usage
        if (endIndex === undefined && currentItemBottom > scrollTopHeight) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      // Fallback to normal if not match. This code should never reach
      /* istanbul ignore next */
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
      }
      if (endIndex === undefined) {
        endIndex = dataLen - 1;
      }
      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, dataLen);
      (0, _extends2.default)(calRes, {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      });
    }, {
      immediate: true
    });
    // =============================== In Range ===============================
    var maxScrollHeight = (0, _vue.computed)(function () {
      return calRes.scrollHeight - props.height;
    });
    function keepInRange(newScrollTop) {
      var newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    var isScrollAtTop = (0, _vue.computed)(function () {
      return state.scrollTop <= 0;
    });
    var isScrollAtBottom = (0, _vue.computed)(function () {
      return state.scrollTop >= maxScrollHeight.value;
    });
    var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom);
    // ================================ Scroll ================================
    function onScrollBar(newScrollTop) {
      var newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    // When data size reduce. It may trigger native scroll event back to fit scroll position
    function onFallbackScroll(e) {
      var _props$onScroll;
      var newScrollTop = e.currentTarget.scrollTop;
      if (Math.abs(newScrollTop - state.scrollTop) >= 1) {
        syncScrollTop(newScrollTop);
      }
      // Trigger origin onScroll
      (_props$onScroll = props.onScroll) === null || _props$onScroll === void 0 ? void 0 : _props$onScroll.call(props, e);
    }
    // Since this added in global,should use ref to keep update
    var _useFrameWheel = (0, _useFrameWheel3.default)(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
        syncScrollTop(function (top) {
          var newTop = top + offsetY;
          return newTop;
        });
      }),
      _useFrameWheel2 = (0, _slicedToArray2.default)(_useFrameWheel, 2),
      onRawWheel = _useFrameWheel2[0],
      onFireFoxScroll = _useFrameWheel2[1];
    // Mobile touch move
    (0, _useMobileTouchMove.default)(useVirtual, componentRef, function (deltaY, smoothOffset) {
      if (originScroll(deltaY, smoothOffset)) {
        return false;
      }
      onRawWheel({
        preventDefault: function preventDefault() {},
        deltaY: deltaY
      });
      return true;
    });
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual.value) {
        e.preventDefault();
      }
    }
    var removeEventListener = function removeEventListener() {
      if (componentRef.value) {
        componentRef.value.removeEventListener('wheel', onRawWheel, _supportsPassive.default ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.value.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };
    (0, _vue.watchEffect)(function () {
      (0, _vue.nextTick)(function () {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener('wheel', onRawWheel, _supportsPassive.default ? {
            passive: false
          } : false);
          componentRef.value.addEventListener('DOMMouseScroll', onFireFoxScroll);
          componentRef.value.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      removeEventListener();
    });
    // ================================= Ref ==================================
    var scrollTo = (0, _useScrollTo.default)(componentRef, mergedData, heights, props, getKey, collectHeight, syncScrollTop, function () {
      var _scrollBarRef$value;
      (_scrollBarRef$value = scrollBarRef.value) === null || _scrollBarRef$value === void 0 ? void 0 : _scrollBarRef$value.delayHidden();
    });
    expose({
      scrollTo: scrollTo
    });
    var componentStyle = (0, _vue.computed)(function () {
      var cs = null;
      if (props.height) {
        cs = (0, _objectSpread3.default)((0, _defineProperty2.default)({}, props.fullHeight ? 'height' : 'maxHeight', props.height + 'px'), ScrollStyle);
        if (useVirtual.value) {
          cs.overflowY = 'hidden';
          if (state.scrollMoving) {
            cs.pointerEvents = 'none';
          }
        }
      }
      return cs;
    });
    // ================================ Effect ================================
    /** We need told outside that some list not rendered */
    (0, _vue.watch)([function () {
      return calRes.start;
    }, function () {
      return calRes.end;
    }, mergedData], function () {
      if (props.onVisibleChange) {
        var renderList = mergedData.value.slice(calRes.start, calRes.end + 1);
        props.onVisibleChange(renderList, mergedData.value);
      }
    }, {
      flush: 'post'
    });
    return {
      state: state,
      mergedData: mergedData,
      componentStyle: componentStyle,
      onFallbackScroll: onFallbackScroll,
      onScrollBar: onScrollBar,
      componentRef: componentRef,
      useVirtual: useVirtual,
      calRes: calRes,
      collectHeight: collectHeight,
      setInstance: setInstance,
      sharedConfig: sharedConfig,
      scrollBarRef: scrollBarRef,
      fillerInnerRef: fillerInnerRef
    };
  },
  render: function render() {
    var _this = this;
    var _this$$props$this$$at = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, this.$props), this.$attrs),
      _this$$props$this$$at2 = _this$$props$this$$at.prefixCls,
      prefixCls = _this$$props$this$$at2 === void 0 ? 'rc-virtual-list' : _this$$props$this$$at2,
      height = _this$$props$this$$at.height,
      itemHeight = _this$$props$this$$at.itemHeight,
      fullHeight = _this$$props$this$$at.fullHeight,
      data = _this$$props$this$$at.data,
      itemKey = _this$$props$this$$at.itemKey,
      virtual = _this$$props$this$$at.virtual,
      _this$$props$this$$at3 = _this$$props$this$$at.component,
      Component = _this$$props$this$$at3 === void 0 ? 'div' : _this$$props$this$$at3,
      onScroll = _this$$props$this$$at.onScroll,
      _this$$props$this$$at4 = _this$$props$this$$at.children,
      children = _this$$props$this$$at4 === void 0 ? this.$slots.default : _this$$props$this$$at4,
      style = _this$$props$this$$at.style,
      className = _this$$props$this$$at.class,
      restProps = (0, _objectWithoutProperties2.default)(_this$$props$this$$at, _excluded);
    var mergedClassName = (0, _classNames.default)(prefixCls, className);
    var scrollTop = this.state.scrollTop;
    var _this$calRes = this.calRes,
      scrollHeight = _this$calRes.scrollHeight,
      offset = _this$calRes.offset,
      start = _this$calRes.start,
      end = _this$calRes.end;
    var componentStyle = this.componentStyle,
      onFallbackScroll = this.onFallbackScroll,
      onScrollBar = this.onScrollBar,
      useVirtual = this.useVirtual,
      collectHeight = this.collectHeight,
      sharedConfig = this.sharedConfig,
      setInstance = this.setInstance,
      mergedData = this.mergedData;
    return (0, _vue.createVNode)("div", (0, _objectSpread3.default)({
      "style": (0, _objectSpread3.default)((0, _objectSpread3.default)({}, style), {}, {
        position: 'relative'
      }),
      "class": mergedClassName
    }, restProps), [(0, _vue.createVNode)(Component, {
      "class": "".concat(prefixCls, "-holder"),
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_Filler.default, {
          "prefixCls": prefixCls,
          "height": scrollHeight,
          "offset": offset,
          "onInnerResize": collectHeight,
          "ref": "fillerInnerRef"
        }, {
          default: function _default() {
            return renderChildren(mergedData, start, end, setInstance, children, sharedConfig);
          }
        })];
      }
    }), useVirtual && (0, _vue.createVNode)(_ScrollBar.default, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": function onStartMove() {
        _this.state.scrollMoving = true;
      },
      "onStopMove": function onStopMove() {
        _this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
var _default2 = List;
exports.default = _default2;