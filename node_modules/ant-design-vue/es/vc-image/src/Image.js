import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["icons", "maskClassName"];
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { ref, watch, defineComponent, computed, onMounted, onUnmounted } from 'vue';
import isNumber from 'lodash-es/isNumber';
import cn from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import { getOffset } from '../../vc-util/Dom/css';
import useMergedState from '../../_util/hooks/useMergedState';
import Preview from './Preview';
import PreviewGroup, { context } from './PreviewGroup';
export var imageProps = function imageProps() {
  return {
    src: String,
    wrapperClassName: String,
    wrapperStyle: {
      type: Object,
      default: undefined
    },
    rootClassName: String,
    prefixCls: String,
    previewPrefixCls: String,
    previewMask: {
      type: [Boolean, Function],
      default: undefined
    },
    placeholder: PropTypes.any,
    fallback: String,
    preview: {
      type: [Boolean, Object],
      default: true
    },
    onClick: {
      type: Function
    },
    onError: {
      type: Function
    }
  };
};
export var mergeDefaultValue = function mergeDefaultValue(obj, defaultValues) {
  var res = _objectSpread({}, obj);
  Object.keys(defaultValues).forEach(function (key) {
    if (obj[key] === undefined) {
      res[key] = defaultValues[key];
    }
  });
  return res;
};
var uuid = 0;
var ImageInternal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Image',
  inheritAttrs: false,
  props: imageProps(),
  emits: ['click', 'error'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var prefixCls = computed(function () {
      return props.prefixCls;
    });
    var previewPrefixCls = computed(function () {
      return "".concat(prefixCls.value, "-preview");
    });
    var preview = computed(function () {
      var defaultValues = {
        visible: undefined,
        onVisibleChange: function onVisibleChange() {},
        getContainer: undefined
      };
      return _typeof(props.preview) === 'object' ? mergeDefaultValue(props.preview, defaultValues) : defaultValues;
    });
    var src = computed(function () {
      var _preview$value$src;
      return (_preview$value$src = preview.value.src) !== null && _preview$value$src !== void 0 ? _preview$value$src : props.src;
    });
    var isCustomPlaceholder = computed(function () {
      return props.placeholder && props.placeholder !== true || slots.placeholder;
    });
    var previewVisible = computed(function () {
      return preview.value.visible;
    });
    var getPreviewContainer = computed(function () {
      return preview.value.getContainer;
    });
    var isControlled = computed(function () {
      return previewVisible.value !== undefined;
    });
    var onPreviewVisibleChange = function onPreviewVisibleChange(val, preval) {
      var _preview$value$onVisi, _preview$value;
      (_preview$value$onVisi = (_preview$value = preview.value).onVisibleChange) === null || _preview$value$onVisi === void 0 ? void 0 : _preview$value$onVisi.call(_preview$value, val, preval);
    };
    var _useMergedState = useMergedState(!!previewVisible.value, {
        value: previewVisible,
        onChange: onPreviewVisibleChange
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      isShowPreview = _useMergedState2[0],
      setShowPreview = _useMergedState2[1];
    watch(isShowPreview, function (val, preVal) {
      onPreviewVisibleChange(val, preVal);
    });
    var status = ref(isCustomPlaceholder.value ? 'loading' : 'normal');
    watch(function () {
      return props.src;
    }, function () {
      status.value = isCustomPlaceholder.value ? 'loading' : 'normal';
    });
    var mousePosition = ref(null);
    var isError = computed(function () {
      return status.value === 'error';
    });
    var groupContext = context.inject();
    var isPreviewGroup = groupContext.isPreviewGroup,
      setCurrent = groupContext.setCurrent,
      setGroupShowPreview = groupContext.setShowPreview,
      setGroupMousePosition = groupContext.setMousePosition,
      registerImage = groupContext.registerImage;
    var currentId = ref(uuid++);
    var canPreview = computed(function () {
      return props.preview && !isError.value;
    });
    var onLoad = function onLoad() {
      status.value = 'normal';
    };
    var onError = function onError(e) {
      status.value = 'error';
      emit('error', e);
    };
    var onPreview = function onPreview(e) {
      if (!isControlled.value) {
        var _getOffset = getOffset(e.target),
          left = _getOffset.left,
          top = _getOffset.top;
        if (isPreviewGroup.value) {
          setCurrent(currentId.value);
          setGroupMousePosition({
            x: left,
            y: top
          });
        } else {
          mousePosition.value = {
            x: left,
            y: top
          };
        }
      }
      if (isPreviewGroup.value) {
        setGroupShowPreview(true);
      } else {
        setShowPreview(true);
      }
      emit('click', e);
    };
    var onPreviewClose = function onPreviewClose() {
      setShowPreview(false);
      if (!isControlled.value) {
        mousePosition.value = null;
      }
    };
    var img = ref(null);
    watch(function () {
      return img;
    }, function () {
      if (status.value !== 'loading') return;
      if (img.value.complete && (img.value.naturalWidth || img.value.naturalHeight)) {
        onLoad();
      }
    });
    var unRegister = function unRegister() {};
    onMounted(function () {
      watch([src, canPreview], function () {
        unRegister();
        if (!isPreviewGroup.value) {
          return function () {};
        }
        unRegister = registerImage(currentId.value, src.value, canPreview.value);
        if (!canPreview.value) {
          unRegister();
        }
      }, {
        flush: 'post',
        immediate: true
      });
    });
    onUnmounted(function () {
      unRegister();
    });
    var toSizePx = function toSizePx(l) {
      if (isNumber(l)) return l + 'px';
      return l;
    };
    return function () {
      var prefixCls = props.prefixCls,
        wrapperClassName = props.wrapperClassName,
        fallback = props.fallback,
        imgSrc = props.src,
        placeholder = props.placeholder,
        wrapperStyle = props.wrapperStyle,
        rootClassName = props.rootClassName;
      var width = attrs.width,
        height = attrs.height,
        crossorigin = attrs.crossorigin,
        decoding = attrs.decoding,
        alt = attrs.alt,
        sizes = attrs.sizes,
        srcset = attrs.srcset,
        usemap = attrs.usemap,
        cls = attrs.class,
        style = attrs.style;
      var _preview$value2 = preview.value,
        icons = _preview$value2.icons,
        maskClassName = _preview$value2.maskClassName,
        dialogProps = _objectWithoutProperties(_preview$value2, _excluded);
      var wrappperClass = cn(prefixCls, wrapperClassName, rootClassName, _defineProperty({}, "".concat(prefixCls, "-error"), isError.value));
      var mergedSrc = isError.value && fallback ? fallback : src.value;
      var imgCommonProps = {
        crossorigin: crossorigin,
        decoding: decoding,
        alt: alt,
        sizes: sizes,
        srcset: srcset,
        usemap: usemap,
        class: cn("".concat(prefixCls, "-img"), _defineProperty({}, "".concat(prefixCls, "-img-placeholder"), placeholder === true), cls),
        style: _objectSpread({
          height: height
        }, style)
      };
      return _createVNode(_Fragment, null, [_createVNode("div", {
        "class": wrappperClass,
        "onClick": canPreview.value ? onPreview : function (e) {
          emit('click', e);
        },
        "style": _objectSpread({
          width: toSizePx(width),
          height: toSizePx(height)
        }, wrapperStyle)
      }, [_createVNode("img", _objectSpread(_objectSpread(_objectSpread({}, imgCommonProps), isError.value && fallback ? {
        src: fallback
      } : {
        onLoad: onLoad,
        onError: onError,
        src: imgSrc
      }), {}, {
        "ref": img
      }), null), status.value === 'loading' && _createVNode("div", {
        "aria-hidden": "true",
        "class": "".concat(prefixCls, "-placeholder")
      }, [placeholder || slots.placeholder && slots.placeholder()]), slots.previewMask && canPreview.value && _createVNode("div", {
        "class": ["".concat(prefixCls, "-mask"), maskClassName]
      }, [slots.previewMask()])]), !isPreviewGroup.value && canPreview.value && _createVNode(Preview, _objectSpread(_objectSpread({}, dialogProps), {}, {
        "aria-hidden": !isShowPreview.value,
        "visible": isShowPreview.value,
        "prefixCls": previewPrefixCls.value,
        "onClose": onPreviewClose,
        "mousePosition": mousePosition.value,
        "src": mergedSrc,
        "alt": alt,
        "getContainer": getPreviewContainer.value,
        "icons": icons,
        "rootClassName": rootClassName
      }), null)]);
    };
  }
});
ImageInternal.PreviewGroup = PreviewGroup;
export default ImageInternal;