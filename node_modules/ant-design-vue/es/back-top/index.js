import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { defineComponent, nextTick, onActivated, onBeforeUnmount, onMounted, reactive, ref, watch, onDeactivated } from 'vue';
import VerticalAlignTopOutlined from "@ant-design/icons-vue/es/icons/VerticalAlignTopOutlined";
import addEventListener from '../vc-util/Dom/addEventListener';
import getScroll from '../_util/getScroll';
import { getTransitionProps, Transition } from '../_util/transition';
import scrollTo from '../_util/scrollTo';
import { withInstall } from '../_util/type';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import useConfigInject from '../_util/hooks/useConfigInject';
export var backTopProps = function backTopProps() {
  return {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    duration: {
      type: Number,
      default: 450
    },
    target: Function,
    prefixCls: String,
    onClick: Function
    // visible: { type: Boolean, default: undefined }, // Only for test. Don't use it.
  };
};

var BackTop = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ABackTop',
  inheritAttrs: false,
  props: backTopProps(),
  // emits: ['click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      emit = _ref.emit;
    var _useConfigInject = useConfigInject('back-top', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var domRef = ref();
    var state = reactive({
      visible: false,
      scrollEvent: null
    });
    var getDefaultTarget = function getDefaultTarget() {
      return domRef.value && domRef.value.ownerDocument ? domRef.value.ownerDocument : window;
    };
    var scrollToTop = function scrollToTop(e) {
      var _props$target = props.target,
        target = _props$target === void 0 ? getDefaultTarget : _props$target,
        duration = props.duration;
      scrollTo(0, {
        getContainer: target,
        duration: duration
      });
      emit('click', e);
    };
    var handleScroll = throttleByAnimationFrame(function (e) {
      var visibilityHeight = props.visibilityHeight;
      var scrollTop = getScroll(e.target, true);
      state.visible = scrollTop > visibilityHeight;
    });
    var bindScrollEvent = function bindScrollEvent() {
      var target = props.target;
      var getTarget = target || getDefaultTarget;
      var container = getTarget();
      state.scrollEvent = addEventListener(container, 'scroll', function (e) {
        handleScroll(e);
      });
      handleScroll({
        target: container
      });
    };
    var scrollRemove = function scrollRemove() {
      if (state.scrollEvent) {
        state.scrollEvent.remove();
      }
      handleScroll.cancel();
    };
    watch(function () {
      return props.target;
    }, function () {
      scrollRemove();
      nextTick(function () {
        bindScrollEvent();
      });
    });
    onMounted(function () {
      nextTick(function () {
        bindScrollEvent();
      });
    });
    onActivated(function () {
      nextTick(function () {
        bindScrollEvent();
      });
    });
    onDeactivated(function () {
      scrollRemove();
    });
    onBeforeUnmount(function () {
      scrollRemove();
    });
    return function () {
      var _class, _slots$default;
      var defaultElement = _createVNode("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [_createVNode("div", {
        "class": "".concat(prefixCls.value, "-icon")
      }, [_createVNode(VerticalAlignTopOutlined, null, null)])]);
      var divProps = _objectSpread(_objectSpread({}, attrs), {}, {
        onClick: scrollToTop,
        class: (_class = {}, _defineProperty(_class, "".concat(prefixCls.value), true), _defineProperty(_class, "".concat(attrs.class), attrs.class), _defineProperty(_class, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _class)
      });
      var transitionProps = getTransitionProps('fade');
      return _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [_withDirectives(_createVNode("div", _objectSpread(_objectSpread({}, divProps), {}, {
            "ref": domRef
          }), [((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)) || defaultElement]), [[_vShow, state.visible]])];
        }
      });
    };
  }
});
export default withInstall(BackTop);