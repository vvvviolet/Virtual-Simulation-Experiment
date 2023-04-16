import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import EyeOutlined from "@ant-design/icons-vue/es/icons/EyeOutlined";
import DeleteOutlined from "@ant-design/icons-vue/es/icons/DeleteOutlined";
import DownloadOutlined from "@ant-design/icons-vue/es/icons/DownloadOutlined";
import Tooltip from '../../tooltip';
import Progress from '../../progress';
import useConfigInject from '../../_util/hooks/useConfigInject';
import Transition, { getTransitionProps } from '../../_util/transition';
export var listItemProps = function listItemProps() {
  return {
    prefixCls: String,
    locale: {
      type: Object,
      default: undefined
    },
    file: Object,
    items: Array,
    listType: String,
    isImgUrl: Function,
    showRemoveIcon: {
      type: Boolean,
      default: undefined
    },
    showDownloadIcon: {
      type: Boolean,
      default: undefined
    },
    showPreviewIcon: {
      type: Boolean,
      default: undefined
    },
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function,
    iconRender: Function,
    actionIconRender: Function,
    itemRender: Function,
    onPreview: Function,
    onClose: Function,
    onDownload: Function,
    progress: Object
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ListItem',
  inheritAttrs: false,
  props: listItemProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var showProgress = ref(false);
    var progressRafRef = ref();
    onMounted(function () {
      progressRafRef.value = setTimeout(function () {
        showProgress.value = true;
      }, 300);
    });
    onBeforeUnmount(function () {
      clearTimeout(progressRafRef.value);
    });
    var _useConfigInject = useConfigInject('upload', props),
      rootPrefixCls = _useConfigInject.rootPrefixCls;
    var transitionProps = computed(function () {
      return getTransitionProps("".concat(rootPrefixCls.value, "-fade"));
    });
    return function () {
      var _infoUploadingClass, _listContainerNameCla;
      var prefixCls = props.prefixCls,
        locale = props.locale,
        listType = props.listType,
        file = props.file,
        items = props.items,
        progressProps = props.progress,
        _props$iconRender = props.iconRender,
        iconRender = _props$iconRender === void 0 ? slots.iconRender : _props$iconRender,
        _props$actionIconRend = props.actionIconRender,
        actionIconRender = _props$actionIconRend === void 0 ? slots.actionIconRender : _props$actionIconRend,
        _props$itemRender = props.itemRender,
        itemRender = _props$itemRender === void 0 ? slots.itemRender : _props$itemRender,
        isImgUrl = props.isImgUrl,
        showPreviewIcon = props.showPreviewIcon,
        showRemoveIcon = props.showRemoveIcon,
        showDownloadIcon = props.showDownloadIcon,
        _props$previewIcon = props.previewIcon,
        customPreviewIcon = _props$previewIcon === void 0 ? slots.previewIcon : _props$previewIcon,
        _props$removeIcon = props.removeIcon,
        customRemoveIcon = _props$removeIcon === void 0 ? slots.removeIcon : _props$removeIcon,
        _props$downloadIcon = props.downloadIcon,
        customDownloadIcon = _props$downloadIcon === void 0 ? slots.downloadIcon : _props$downloadIcon,
        onPreview = props.onPreview,
        onDownload = props.onDownload,
        onClose = props.onClose;
      var className = attrs.class,
        style = attrs.style;
      // This is used for legacy span make scrollHeight the wrong value.
      // We will force these to be `display: block` with non `picture-card`
      var spanClassName = "".concat(prefixCls, "-span");
      var iconNode = iconRender({
        file: file
      });
      var icon = _createVNode("div", {
        "class": "".concat(prefixCls, "-text-icon")
      }, [iconNode]);
      if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
          var _uploadingClassName;
          var uploadingClassName = (_uploadingClassName = {}, _defineProperty(_uploadingClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty(_uploadingClassName, "".concat(prefixCls, "-list-item-file"), file.status !== 'uploading'), _uploadingClassName);
          icon = _createVNode("div", {
            "class": uploadingClassName
          }, [iconNode]);
        } else {
          var _aClassName;
          var thumbnail = isImgUrl !== null && isImgUrl !== void 0 && isImgUrl(file) ? _createVNode("img", {
            "src": file.thumbUrl || file.url,
            "alt": file.name,
            "class": "".concat(prefixCls, "-list-item-image")
          }, null) : iconNode;
          var aClassName = (_aClassName = {}, _defineProperty(_aClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty(_aClassName, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _aClassName);
          icon = _createVNode("a", {
            "class": aClassName,
            "onClick": function onClick(e) {
              return onPreview(file, e);
            },
            "href": file.url || file.thumbUrl,
            "target": "_blank",
            "rel": "noopener noreferrer"
          }, [thumbnail]);
        }
      }
      var infoUploadingClass = (_infoUploadingClass = {}, _defineProperty(_infoUploadingClass, "".concat(prefixCls, "-list-item"), true), _defineProperty(_infoUploadingClass, "".concat(prefixCls, "-list-item-").concat(file.status), true), _defineProperty(_infoUploadingClass, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _infoUploadingClass);
      var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
      var removeIcon = showRemoveIcon ? actionIconRender({
        customIcon: customRemoveIcon ? customRemoveIcon({
          file: file
        }) : _createVNode(DeleteOutlined, null, null),
        callback: function callback() {
          return onClose(file);
        },
        prefixCls: prefixCls,
        title: locale.removeFile
      }) : null;
      var downloadIcon = showDownloadIcon && file.status === 'done' ? actionIconRender({
        customIcon: customDownloadIcon ? customDownloadIcon({
          file: file
        }) : _createVNode(DownloadOutlined, null, null),
        callback: function callback() {
          return onDownload(file);
        },
        prefixCls: prefixCls,
        title: locale.downloadFile
      }) : null;
      var downloadOrDelete = listType !== 'picture-card' && _createVNode("span", {
        "key": "download-delete",
        "class": ["".concat(prefixCls, "-list-item-card-actions"), {
          picture: listType === 'picture'
        }]
      }, [downloadIcon, removeIcon]);
      var listItemNameClass = "".concat(prefixCls, "-list-item-name");
      var preview = file.url ? [_createVNode("a", _objectSpread(_objectSpread({
        "key": "view",
        "target": "_blank",
        "rel": "noopener noreferrer",
        "class": listItemNameClass,
        "title": file.name
      }, linkProps), {}, {
        "href": file.url,
        "onClick": function onClick(e) {
          return onPreview(file, e);
        }
      }), [file.name]), downloadOrDelete] : [_createVNode("span", {
        "key": "view",
        "class": listItemNameClass,
        "onClick": function onClick(e) {
          return onPreview(file, e);
        },
        "title": file.name
      }, [file.name]), downloadOrDelete];
      var previewStyle = {
        pointerEvents: 'none',
        opacity: 0.5
      };
      var previewIcon = showPreviewIcon ? _createVNode("a", {
        "href": file.url || file.thumbUrl,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "style": file.url || file.thumbUrl ? undefined : previewStyle,
        "onClick": function onClick(e) {
          return onPreview(file, e);
        },
        "title": locale.previewFile
      }, [customPreviewIcon ? customPreviewIcon({
        file: file
      }) : _createVNode(EyeOutlined, null, null)]) : null;
      var actions = listType === 'picture-card' && file.status !== 'uploading' && _createVNode("span", {
        "class": "".concat(prefixCls, "-list-item-actions")
      }, [previewIcon, file.status === 'done' && downloadIcon, removeIcon]);
      var message;
      if (file.response && typeof file.response === 'string') {
        message = file.response;
      } else {
        var _file$error, _file$error2;
        message = ((_file$error = file.error) === null || _file$error === void 0 ? void 0 : _file$error.statusText) || ((_file$error2 = file.error) === null || _file$error2 === void 0 ? void 0 : _file$error2.message) || locale.uploadError;
      }
      var iconAndPreview = _createVNode("span", {
        "class": spanClassName
      }, [icon, preview]);
      var dom = _createVNode("div", {
        "class": infoUploadingClass
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-list-item-info")
      }, [iconAndPreview]), actions, showProgress.value && _createVNode(Transition, transitionProps.value, {
        default: function _default() {
          return [_withDirectives(_createVNode("div", {
            "class": "".concat(prefixCls, "-list-item-progress")
          }, ['percent' in file ? _createVNode(Progress, _objectSpread(_objectSpread({}, progressProps), {}, {
            "type": "line",
            "percent": file.percent
          }), null) : null]), [[_vShow, file.status === 'uploading']])];
        }
      })]);
      var listContainerNameClass = (_listContainerNameCla = {}, _defineProperty(_listContainerNameCla, "".concat(prefixCls, "-list-").concat(listType, "-container"), true), _defineProperty(_listContainerNameCla, "".concat(className), !!className), _listContainerNameCla);
      var item = file.status === 'error' ? _createVNode(Tooltip, {
        "title": message,
        "getPopupContainer": function getPopupContainer(node) {
          return node.parentNode;
        }
      }, {
        default: function _default() {
          return [dom];
        }
      }) : dom;
      return _createVNode("div", {
        "class": listContainerNameClass,
        "style": style,
        "ref": ref
      }, [itemRender ? itemRender({
        originNode: item,
        file: file,
        fileList: items,
        actions: {
          download: onDownload.bind(null, file),
          preview: onPreview.bind(null, file),
          remove: onClose.bind(null, file)
        }
      }) : item]);
    };
  }
});