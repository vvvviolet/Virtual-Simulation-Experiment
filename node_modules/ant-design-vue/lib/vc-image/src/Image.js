"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeDefaultValue = exports.imageProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _isNumber = _interopRequireDefault(require("lodash/isNumber"));
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var _css = require("../../vc-util/Dom/css");
var _useMergedState3 = _interopRequireDefault(require("../../_util/hooks/useMergedState"));
var _Preview = _interopRequireDefault(require("./Preview"));
var _PreviewGroup = _interopRequireWildcard(require("./PreviewGroup"));
var _excluded = ["icons", "maskClassName"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var imageProps = function imageProps() {
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
    placeholder: _vueTypes.default.any,
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
exports.imageProps = imageProps;
var mergeDefaultValue = function mergeDefaultValue(obj, defaultValues) {
  var res = (0, _objectSpread2.default)({}, obj);
  Object.keys(defaultValues).forEach(function (key) {
    if (obj[key] === undefined) {
      res[key] = defaultValues[key];
    }
  });
  return res;
};
exports.mergeDefaultValue = mergeDefaultValue;
var uuid = 0;
var ImageInternal = (0, _vue.defineComponent)({
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
    var prefixCls = (0, _vue.computed)(function () {
      return props.prefixCls;
    });
    var previewPrefixCls = (0, _vue.computed)(function () {
      return "".concat(prefixCls.value, "-preview");
    });
    var preview = (0, _vue.computed)(function () {
      var defaultValues = {
        visible: undefined,
        onVisibleChange: function onVisibleChange() {},
        getContainer: undefined
      };
      return (0, _typeof2.default)(props.preview) === 'object' ? mergeDefaultValue(props.preview, defaultValues) : defaultValues;
    });
    var src = (0, _vue.computed)(function () {
      var _preview$value$src;
      return (_preview$value$src = preview.value.src) !== null && _preview$value$src !== void 0 ? _preview$value$src : props.src;
    });
    var isCustomPlaceholder = (0, _vue.computed)(function () {
      return props.placeholder && props.placeholder !== true || slots.placeholder;
    });
    var previewVisible = (0, _vue.computed)(function () {
      return preview.value.visible;
    });
    var getPreviewContainer = (0, _vue.computed)(function () {
      return preview.value.getContainer;
    });
    var isControlled = (0, _vue.computed)(function () {
      return previewVisible.value !== undefined;
    });
    var onPreviewVisibleChange = function onPreviewVisibleChange(val, preval) {
      var _preview$value$onVisi, _preview$value;
      (_preview$value$onVisi = (_preview$value = preview.value).onVisibleChange) === null || _preview$value$onVisi === void 0 ? void 0 : _preview$value$onVisi.call(_preview$value, val, preval);
    };
    var _useMergedState = (0, _useMergedState3.default)(!!previewVisible.value, {
        value: previewVisible,
        onChange: onPreviewVisibleChange
      }),
      _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
      isShowPreview = _useMergedState2[0],
      setShowPreview = _useMergedState2[1];
    (0, _vue.watch)(isShowPreview, function (val, preVal) {
      onPreviewVisibleChange(val, preVal);
    });
    var status = (0, _vue.ref)(isCustomPlaceholder.value ? 'loading' : 'normal');
    (0, _vue.watch)(function () {
      return props.src;
    }, function () {
      status.value = isCustomPlaceholder.value ? 'loading' : 'normal';
    });
    var mousePosition = (0, _vue.ref)(null);
    var isError = (0, _vue.computed)(function () {
      return status.value === 'error';
    });
    var groupContext = _PreviewGroup.context.inject();
    var isPreviewGroup = groupContext.isPreviewGroup,
      setCurrent = groupContext.setCurrent,
      setGroupShowPreview = groupContext.setShowPreview,
      setGroupMousePosition = groupContext.setMousePosition,
      registerImage = groupContext.registerImage;
    var currentId = (0, _vue.ref)(uuid++);
    var canPreview = (0, _vue.computed)(function () {
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
        var _getOffset = (0, _css.getOffset)(e.target),
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
    var img = (0, _vue.ref)(null);
    (0, _vue.watch)(function () {
      return img;
    }, function () {
      if (status.value !== 'loading') return;
      if (img.value.complete && (img.value.naturalWidth || img.value.naturalHeight)) {
        onLoad();
      }
    });
    var unRegister = function unRegister() {};
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)([src, canPreview], function () {
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
    (0, _vue.onUnmounted)(function () {
      unRegister();
    });
    var toSizePx = function toSizePx(l) {
      if ((0, _isNumber.default)(l)) return l + 'px';
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
        dialogProps = (0, _objectWithoutProperties2.default)(_preview$value2, _excluded);
      var wrappperClass = (0, _classNames.default)(prefixCls, wrapperClassName, rootClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-error"), isError.value));
      var mergedSrc = isError.value && fallback ? fallback : src.value;
      var imgCommonProps = {
        crossorigin: crossorigin,
        decoding: decoding,
        alt: alt,
        sizes: sizes,
        srcset: srcset,
        usemap: usemap,
        class: (0, _classNames.default)("".concat(prefixCls, "-img"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-img-placeholder"), placeholder === true), cls),
        style: (0, _objectSpread2.default)({
          height: height
        }, style)
      };
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
        "class": wrappperClass,
        "onClick": canPreview.value ? onPreview : function (e) {
          emit('click', e);
        },
        "style": (0, _objectSpread2.default)({
          width: toSizePx(width),
          height: toSizePx(height)
        }, wrapperStyle)
      }, [(0, _vue.createVNode)("img", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, imgCommonProps), isError.value && fallback ? {
        src: fallback
      } : {
        onLoad: onLoad,
        onError: onError,
        src: imgSrc
      }), {}, {
        "ref": img
      }), null), status.value === 'loading' && (0, _vue.createVNode)("div", {
        "aria-hidden": "true",
        "class": "".concat(prefixCls, "-placeholder")
      }, [placeholder || slots.placeholder && slots.placeholder()]), slots.previewMask && canPreview.value && (0, _vue.createVNode)("div", {
        "class": ["".concat(prefixCls, "-mask"), maskClassName]
      }, [slots.previewMask()])]), !isPreviewGroup.value && canPreview.value && (0, _vue.createVNode)(_Preview.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dialogProps), {}, {
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
ImageInternal.PreviewGroup = _PreviewGroup.default;
var _default = ImageInternal;
exports.default = _default;