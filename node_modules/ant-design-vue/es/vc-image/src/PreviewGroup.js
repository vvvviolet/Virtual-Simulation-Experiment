import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { ref, provide as _provide, defineComponent, inject as _inject, watch, reactive, computed, watchEffect } from 'vue';
import { mergeDefaultValue } from './Image';
import Preview from './Preview';
import useMergedState from '../../_util/hooks/useMergedState';
var previewGroupContext = Symbol('previewGroupContext');
export var context = {
  provide: function provide(val) {
    _provide(previewGroupContext, val);
  },
  inject: function inject() {
    return _inject(previewGroupContext, {
      isPreviewGroup: ref(false),
      previewUrls: computed(function () {
        return new Map();
      }),
      setPreviewUrls: function setPreviewUrls() {},
      current: ref(null),
      setCurrent: function setCurrent() {},
      setShowPreview: function setShowPreview() {},
      setMousePosition: function setMousePosition() {},
      registerImage: null,
      rootClassName: ''
    });
  }
};
var Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'PreviewGroup',
  inheritAttrs: false,
  props: {
    previewPrefixCls: String,
    preview: {
      type: [Boolean, Object],
      default: true
    },
    icons: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var preview = computed(function () {
      var defaultValues = {
        visible: undefined,
        onVisibleChange: function onVisibleChange() {},
        getContainer: undefined,
        current: 0
      };
      return _typeof(props.preview) === 'object' ? mergeDefaultValue(props.preview, defaultValues) : defaultValues;
    });
    var previewUrls = reactive(new Map());
    var current = ref();
    var previewVisible = computed(function () {
      return preview.value.visible;
    });
    var getPreviewContainer = computed(function () {
      return preview.value.getContainer;
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
    var mousePosition = ref(null);
    var isControlled = computed(function () {
      return previewVisible.value !== undefined;
    });
    var previewUrlsKeys = computed(function () {
      return Array.from(previewUrls.keys());
    });
    var currentControlledKey = computed(function () {
      return previewUrlsKeys.value[preview.value.current];
    });
    var canPreviewUrls = computed(function () {
      return new Map(Array.from(previewUrls).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          canPreview = _ref3[1].canPreview;
        return !!canPreview;
      }).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          id = _ref5[0],
          url = _ref5[1].url;
        return [id, url];
      }));
    });
    var setPreviewUrls = function setPreviewUrls(id, url) {
      var canPreview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      previewUrls.set(id, {
        url: url,
        canPreview: canPreview
      });
    };
    var setCurrent = function setCurrent(val) {
      current.value = val;
    };
    var setMousePosition = function setMousePosition(val) {
      mousePosition.value = val;
    };
    var registerImage = function registerImage(id, url) {
      var canPreview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var unRegister = function unRegister() {
        previewUrls.delete(id);
      };
      previewUrls.set(id, {
        url: url,
        canPreview: canPreview
      });
      return unRegister;
    };
    var onPreviewClose = function onPreviewClose(e) {
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      setShowPreview(false);
      setMousePosition(null);
    };
    watch(currentControlledKey, function (val) {
      setCurrent(val);
    }, {
      immediate: true,
      flush: 'post'
    });
    watchEffect(function () {
      if (isShowPreview.value && isControlled.value) {
        setCurrent(currentControlledKey.value);
      }
    }, {
      flush: 'post'
    });
    context.provide({
      isPreviewGroup: ref(true),
      previewUrls: canPreviewUrls,
      setPreviewUrls: setPreviewUrls,
      current: current,
      setCurrent: setCurrent,
      setShowPreview: setShowPreview,
      setMousePosition: setMousePosition,
      registerImage: registerImage
    });
    return function () {
      var dialogProps = _extends({}, (_objectDestructuringEmpty(preview.value), preview.value));
      return _createVNode(_Fragment, null, [slots.default && slots.default(), _createVNode(Preview, _objectSpread(_objectSpread({}, dialogProps), {}, {
        "ria-hidden": !isShowPreview.value,
        "visible": isShowPreview.value,
        "prefixCls": props.previewPrefixCls,
        "onClose": onPreviewClose,
        "mousePosition": mousePosition.value,
        "src": canPreviewUrls.value.get(current.value),
        "icons": props.icons,
        "getContainer": getPreviewContainer.value
      }), null)]);
    };
  }
});
export default Group;