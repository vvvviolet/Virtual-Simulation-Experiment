import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { withDirectives as _withDirectives, vShow as _vShow, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined";
import PaperClipOutlined from "@ant-design/icons-vue/es/icons/PaperClipOutlined";
import PictureTwoTone from "@ant-design/icons-vue/es/icons/PictureTwoTone";
import FileTwoTone from "@ant-design/icons-vue/es/icons/FileTwoTone";
import { uploadListProps } from '../interface';
import { previewImage, isImageUrl } from '../utils';
import Button from '../../button';
import ListItem from './ListItem';
import { computed, defineComponent, getCurrentInstance, onMounted, ref, watchEffect } from 'vue';
import { filterEmpty, initDefaultProps, isValidElement } from '../../_util/props-util';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { getTransitionGroupProps, TransitionGroup } from '../../_util/transition';
import collapseMotion from '../../_util/collapseMotion';
var HackSlot = function HackSlot(_, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  return filterEmpty((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))[0];
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AUploadList',
  props: initDefaultProps(uploadListProps(), {
    listType: 'text',
    progress: {
      strokeWidth: 2,
      showInfo: false
    },
    showRemoveIcon: true,
    showDownloadIcon: false,
    showPreviewIcon: true,
    previewFile: previewImage,
    isImageUrl: isImageUrl,
    items: [],
    appendActionVisible: true
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
      expose = _ref2.expose;
    var motionAppear = ref(false);
    var instance = getCurrentInstance();
    onMounted(function () {
      motionAppear.value == true;
    });
    watchEffect(function () {
      if (props.listType !== 'picture' && props.listType !== 'picture-card') {
        return;
      }
      (props.items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
          return;
        }
        file.thumbUrl = '';
        if (props.previewFile) {
          props.previewFile(file.originFileObj).then(function (previewDataUrl) {
            // Need append '' to avoid dead loop
            file.thumbUrl = previewDataUrl || '';
            instance.update();
          });
        }
      });
    });
    // ============================= Events =============================
    var onInternalPreview = function onInternalPreview(file, e) {
      if (!props.onPreview) {
        return;
      }
      e === null || e === void 0 ? void 0 : e.preventDefault();
      return props.onPreview(file);
    };
    var onInternalDownload = function onInternalDownload(file) {
      if (typeof props.onDownload === 'function') {
        props.onDownload(file);
      } else if (file.url) {
        window.open(file.url);
      }
    };
    var onInternalClose = function onInternalClose(file) {
      var _props$onRemove;
      (_props$onRemove = props.onRemove) === null || _props$onRemove === void 0 ? void 0 : _props$onRemove.call(props, file);
    };
    var internalIconRender = function internalIconRender(_ref3) {
      var file = _ref3.file;
      var iconRender = props.iconRender || slots.iconRender;
      if (iconRender) {
        return iconRender({
          file: file,
          listType: props.listType
        });
      }
      var isLoading = file.status === 'uploading';
      var fileIcon = props.isImageUrl && props.isImageUrl(file) ? _createVNode(PictureTwoTone, null, null) : _createVNode(FileTwoTone, null, null);
      var icon = isLoading ? _createVNode(LoadingOutlined, null, null) : _createVNode(PaperClipOutlined, null, null);
      if (props.listType === 'picture') {
        icon = isLoading ? _createVNode(LoadingOutlined, null, null) : fileIcon;
      } else if (props.listType === 'picture-card') {
        icon = isLoading ? props.locale.uploading : fileIcon;
      }
      return icon;
    };
    var actionIconRender = function actionIconRender(opt) {
      var customIcon = opt.customIcon,
        callback = opt.callback,
        prefixCls = opt.prefixCls,
        title = opt.title;
      var btnProps = {
        type: 'text',
        size: 'small',
        title: title,
        onClick: function onClick() {
          callback();
        },
        class: "".concat(prefixCls, "-list-item-card-actions-btn")
      };
      if (isValidElement(customIcon)) {
        return _createVNode(Button, btnProps, {
          icon: function icon() {
            return customIcon;
          }
        });
      }
      return _createVNode(Button, btnProps, {
        default: function _default() {
          return [_createVNode("span", null, [customIcon])];
        }
      });
    };
    expose({
      handlePreview: onInternalPreview,
      handleDownload: onInternalDownload
    });
    var _useConfigInject = useConfigInject('upload', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var listClassNames = computed(function () {
      var _ref4;
      return _ref4 = {}, _defineProperty(_ref4, "".concat(prefixCls.value, "-list"), true), _defineProperty(_ref4, "".concat(prefixCls.value, "-list-").concat(props.listType), true), _defineProperty(_ref4, "".concat(prefixCls.value, "-list-rtl"), direction.value === 'rtl'), _ref4;
    });
    var transitionGroupProps = computed(function () {
      return _objectSpread(_objectSpread(_objectSpread({}, collapseMotion("".concat(prefixCls.value, "-").concat(props.listType === 'picture-card' ? 'animate-inline' : 'animate'))), getTransitionGroupProps("".concat(prefixCls.value, "-").concat(props.listType === 'picture-card' ? 'animate-inline' : 'animate'))), {}, {
        class: listClassNames.value,
        appear: motionAppear.value
      });
    });
    return function () {
      var listType = props.listType,
        locale = props.locale,
        isImgUrl = props.isImageUrl,
        _props$items = props.items,
        items = _props$items === void 0 ? [] : _props$items,
        showPreviewIcon = props.showPreviewIcon,
        showRemoveIcon = props.showRemoveIcon,
        showDownloadIcon = props.showDownloadIcon,
        removeIcon = props.removeIcon,
        previewIcon = props.previewIcon,
        downloadIcon = props.downloadIcon,
        progress = props.progress,
        appendAction = props.appendAction,
        itemRender = props.itemRender,
        appendActionVisible = props.appendActionVisible;
      var appendActionDom = appendAction === null || appendAction === void 0 ? void 0 : appendAction();
      return _createVNode(TransitionGroup, _objectSpread(_objectSpread({}, transitionGroupProps.value), {}, {
        "tag": "div"
      }), {
        default: function _default() {
          return [items.map(function (file) {
            var key = file.uid;
            return _createVNode(ListItem, {
              "key": key,
              "locale": locale,
              "prefixCls": prefixCls.value,
              "file": file,
              "items": items,
              "progress": progress,
              "listType": listType,
              "isImgUrl": isImgUrl,
              "showPreviewIcon": showPreviewIcon,
              "showRemoveIcon": showRemoveIcon,
              "showDownloadIcon": showDownloadIcon,
              "onPreview": onInternalPreview,
              "onDownload": onInternalDownload,
              "onClose": onInternalClose,
              "removeIcon": removeIcon,
              "previewIcon": previewIcon,
              "downloadIcon": downloadIcon,
              "itemRender": itemRender
            }, _objectSpread(_objectSpread({}, slots), {}, {
              iconRender: internalIconRender,
              actionIconRender: actionIconRender
            }));
          }), appendAction ? _withDirectives(_createVNode(HackSlot, {
            "key": "__ant_upload_appendAction"
          }, {
            default: function _default() {
              return appendActionDom;
            }
          }), [[_vShow, !!appendActionVisible]]) : null];
        }
      });
    };
  }
});