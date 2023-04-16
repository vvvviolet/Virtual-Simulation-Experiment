import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { shallowRef, toRaw, onMounted, onUpdated, ref, defineComponent, watchEffect, computed, nextTick, onBeforeUnmount, reactive, watch } from 'vue';
import Filler from './Filler';
import Item from './Item';
import ScrollBar from './ScrollBar';
import useHeights from './hooks/useHeights';
import useScrollTo from './hooks/useScrollTo';
import useFrameWheel from './hooks/useFrameWheel';
import useMobileTouchMove from './hooks/useMobileTouchMove';
import useOriginScroll from './hooks/useOriginScroll';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import supportsPassive from '../_util/supportsPassive';
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
    return _createVNode(Item, {
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
var List = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'List',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: PropTypes.array,
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
    var useVirtual = computed(function () {
      var height = props.height,
        itemHeight = props.itemHeight,
        virtual = props.virtual;
      return !!(virtual !== false && height && itemHeight);
    });
    var inVirtual = computed(function () {
      var height = props.height,
        itemHeight = props.itemHeight,
        data = props.data;
      return useVirtual.value && data && itemHeight * data.length > height;
    });
    var state = reactive({
      scrollTop: 0,
      scrollMoving: false
    });
    var data = computed(function () {
      return props.data || EMPTY_DATA;
    });
    var mergedData = shallowRef([]);
    watch(data, function () {
      mergedData.value = toRaw(data.value).slice();
    }, {
      immediate: true
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var itemKey = shallowRef(function (_item) {
      return undefined;
    });
    watch(function () {
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
    var componentRef = ref();
    var fillerInnerRef = ref();
    var scrollBarRef = ref(); // Hack on scrollbar to enable flash call
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
    var _useHeights = useHeights(mergedData, getKey, null, null),
      _useHeights2 = _slicedToArray(_useHeights, 4),
      setInstance = _useHeights2[0],
      collectHeight = _useHeights2[1],
      heights = _useHeights2[2],
      updatedMark = _useHeights2[3];
    var calRes = reactive({
      scrollHeight: undefined,
      start: 0,
      end: 0,
      offset: undefined
    });
    var offsetHeight = ref(0);
    onMounted(function () {
      nextTick(function () {
        var _fillerInnerRef$value;
        offsetHeight.value = ((_fillerInnerRef$value = fillerInnerRef.value) === null || _fillerInnerRef$value === void 0 ? void 0 : _fillerInnerRef$value.offsetHeight) || 0;
      });
    });
    onUpdated(function () {
      nextTick(function () {
        var _fillerInnerRef$value2;
        offsetHeight.value = ((_fillerInnerRef$value2 = fillerInnerRef.value) === null || _fillerInnerRef$value2 === void 0 ? void 0 : _fillerInnerRef$value2.offsetHeight) || 0;
      });
    });
    watch([useVirtual, mergedData], function () {
      if (!useVirtual.value) {
        _extends(calRes, {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.value.length - 1,
          offset: undefined
        });
      }
    }, {
      immediate: true
    });
    watch([useVirtual, mergedData, offsetHeight, inVirtual], function () {
      // Always use virtual scroll bar in avoid shaking
      if (useVirtual.value && !inVirtual.value) {
        _extends(calRes, {
          scrollHeight: offsetHeight.value,
          start: 0,
          end: mergedData.value.length - 1,
          offset: undefined
        });
      }
    }, {
      immediate: true
    });
    watch([inVirtual, useVirtual, function () {
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
      _extends(calRes, {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      });
    }, {
      immediate: true
    });
    // =============================== In Range ===============================
    var maxScrollHeight = computed(function () {
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
    var isScrollAtTop = computed(function () {
      return state.scrollTop <= 0;
    });
    var isScrollAtBottom = computed(function () {
      return state.scrollTop >= maxScrollHeight.value;
    });
    var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
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
    var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
        syncScrollTop(function (top) {
          var newTop = top + offsetY;
          return newTop;
        });
      }),
      _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2),
      onRawWheel = _useFrameWheel2[0],
      onFireFoxScroll = _useFrameWheel2[1];
    // Mobile touch move
    useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
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
        componentRef.value.removeEventListener('wheel', onRawWheel, supportsPassive ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.value.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };
    watchEffect(function () {
      nextTick(function () {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener('wheel', onRawWheel, supportsPassive ? {
            passive: false
          } : false);
          componentRef.value.addEventListener('DOMMouseScroll', onFireFoxScroll);
          componentRef.value.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
        }
      });
    });
    onBeforeUnmount(function () {
      removeEventListener();
    });
    // ================================= Ref ==================================
    var scrollTo = useScrollTo(componentRef, mergedData, heights, props, getKey, collectHeight, syncScrollTop, function () {
      var _scrollBarRef$value;
      (_scrollBarRef$value = scrollBarRef.value) === null || _scrollBarRef$value === void 0 ? void 0 : _scrollBarRef$value.delayHidden();
    });
    expose({
      scrollTo: scrollTo
    });
    var componentStyle = computed(function () {
      var cs = null;
      if (props.height) {
        cs = _objectSpread(_defineProperty({}, props.fullHeight ? 'height' : 'maxHeight', props.height + 'px'), ScrollStyle);
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
    watch([function () {
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
    var _this$$props$this$$at = _objectSpread(_objectSpread({}, this.$props), this.$attrs),
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
      restProps = _objectWithoutProperties(_this$$props$this$$at, _excluded);
    var mergedClassName = classNames(prefixCls, className);
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
    return _createVNode("div", _objectSpread({
      "style": _objectSpread(_objectSpread({}, style), {}, {
        position: 'relative'
      }),
      "class": mergedClassName
    }, restProps), [_createVNode(Component, {
      "class": "".concat(prefixCls, "-holder"),
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll
    }, {
      default: function _default() {
        return [_createVNode(Filler, {
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
    }), useVirtual && _createVNode(ScrollBar, {
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
export default List;