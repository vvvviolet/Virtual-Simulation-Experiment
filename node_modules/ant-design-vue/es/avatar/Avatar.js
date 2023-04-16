import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue';
import { getPropsSlot } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
import useBreakpoint from '../_util/hooks/useBreakpoint';
import { responsiveArray } from '../_util/responsiveObserve';
import useConfigInject from '../_util/hooks/useConfigInject';
import ResizeObserver from '../vc-resize-observer';
import { useInjectSize } from '../_util/hooks/useSize';
import eagerComputed from '../_util/eagerComputed';
export var avatarProps = function avatarProps() {
  return {
    prefixCls: String,
    shape: {
      type: String,
      default: 'circle'
    },
    size: {
      type: [Number, String, Object],
      default: function _default() {
        return 'default';
      }
    },
    src: String,
    /** Srcset of image avatar */
    srcset: String,
    icon: PropTypes.any,
    alt: String,
    gap: Number,
    draggable: {
      type: Boolean,
      default: undefined
    },
    crossOrigin: String,
    loadError: {
      type: Function
    }
  };
};
var Avatar = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AAvatar',
  inheritAttrs: false,
  props: avatarProps(),
  slots: ['icon'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var isImgExist = ref(true);
    var isMounted = ref(false);
    var scale = ref(1);
    var avatarChildrenRef = ref(null);
    var avatarNodeRef = ref(null);
    var _useConfigInject = useConfigInject('avatar', props),
      prefixCls = _useConfigInject.prefixCls;
    var groupSize = useInjectSize();
    var size = computed(function () {
      return props.size === 'default' ? groupSize.value : props.size;
    });
    var screens = useBreakpoint();
    var responsiveSize = eagerComputed(function () {
      if (_typeof(props.size) !== 'object') {
        return undefined;
      }
      var currentBreakpoint = responsiveArray.find(function (screen) {
        return screens.value[screen];
      });
      var currentSize = props.size[currentBreakpoint];
      return currentSize;
    });
    var responsiveSizeStyle = function responsiveSizeStyle(hasIcon) {
      if (responsiveSize.value) {
        return {
          width: "".concat(responsiveSize.value, "px"),
          height: "".concat(responsiveSize.value, "px"),
          lineHeight: "".concat(responsiveSize.value, "px"),
          fontSize: "".concat(hasIcon ? responsiveSize.value / 2 : 18, "px")
        };
      }
      return {};
    };
    var setScaleParam = function setScaleParam() {
      if (!avatarChildrenRef.value || !avatarNodeRef.value) {
        return;
      }
      var childrenWidth = avatarChildrenRef.value.offsetWidth; // offsetWidth avoid affecting be transform scale
      var nodeWidth = avatarNodeRef.value.offsetWidth;
      // denominator is 0 is no meaning
      if (childrenWidth !== 0 && nodeWidth !== 0) {
        var _props$gap = props.gap,
          gap = _props$gap === void 0 ? 4 : _props$gap;
        if (gap * 2 < nodeWidth) {
          scale.value = nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1;
        }
      }
    };
    var handleImgLoadError = function handleImgLoadError() {
      var loadError = props.loadError;
      var errorFlag = loadError === null || loadError === void 0 ? void 0 : loadError();
      if (errorFlag !== false) {
        isImgExist.value = false;
      }
    };
    watch(function () {
      return props.src;
    }, function () {
      nextTick(function () {
        isImgExist.value = true;
        scale.value = 1;
      });
    });
    watch(function () {
      return props.gap;
    }, function () {
      nextTick(function () {
        setScaleParam();
      });
    });
    onMounted(function () {
      nextTick(function () {
        setScaleParam();
        isMounted.value = true;
      });
    });
    return function () {
      var _classString, _slots$default;
      var shape = props.shape,
        src = props.src,
        alt = props.alt,
        srcset = props.srcset,
        draggable = props.draggable,
        crossOrigin = props.crossOrigin;
      var icon = getPropsSlot(slots, props, 'icon');
      var pre = prefixCls.value;
      var classString = (_classString = {}, _defineProperty(_classString, "".concat(attrs.class), !!attrs.class), _defineProperty(_classString, pre, true), _defineProperty(_classString, "".concat(pre, "-lg"), size.value === 'large'), _defineProperty(_classString, "".concat(pre, "-sm"), size.value === 'small'), _defineProperty(_classString, "".concat(pre, "-").concat(shape), shape), _defineProperty(_classString, "".concat(pre, "-image"), src && isImgExist.value), _defineProperty(_classString, "".concat(pre, "-icon"), icon), _classString);
      var sizeStyle = typeof size.value === 'number' ? {
        width: "".concat(size.value, "px"),
        height: "".concat(size.value, "px"),
        lineHeight: "".concat(size.value, "px"),
        fontSize: icon ? "".concat(size.value / 2, "px") : '18px'
      } : {};
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var childrenToRender;
      if (src && isImgExist.value) {
        childrenToRender = _createVNode("img", {
          "draggable": draggable,
          "src": src,
          "srcset": srcset,
          "onError": handleImgLoadError,
          "alt": alt,
          "crossorigin": crossOrigin
        }, null);
      } else if (icon) {
        childrenToRender = icon;
      } else if (isMounted.value || scale.value !== 1) {
        var transformString = "scale(".concat(scale.value, ") translateX(-50%)");
        var childrenStyle = {
          msTransform: transformString,
          WebkitTransform: transformString,
          transform: transformString
        };
        var sizeChildrenStyle = typeof size.value === 'number' ? {
          lineHeight: "".concat(size.value, "px")
        } : {};
        childrenToRender = _createVNode(ResizeObserver, {
          "onResize": setScaleParam
        }, {
          default: function _default() {
            return [_createVNode("span", {
              "class": "".concat(pre, "-string"),
              "ref": avatarChildrenRef,
              "style": _objectSpread(_objectSpread({}, sizeChildrenStyle), childrenStyle)
            }, [children])];
          }
        });
      } else {
        childrenToRender = _createVNode("span", {
          "class": "".concat(pre, "-string"),
          "ref": avatarChildrenRef,
          "style": {
            opacity: 0
          }
        }, [children]);
      }
      return _createVNode("span", _objectSpread(_objectSpread({}, attrs), {}, {
        "ref": avatarNodeRef,
        "class": classString,
        "style": [sizeStyle, responsiveSizeStyle(!!icon), attrs.style]
      }), [childrenToRender]);
    };
  }
});
export default Avatar;