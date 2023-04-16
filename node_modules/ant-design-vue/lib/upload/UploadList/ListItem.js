"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EyeOutlined"));
var _DeleteOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DeleteOutlined"));
var _DownloadOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownloadOutlined"));
var _tooltip = _interopRequireDefault(require("../../tooltip"));
var _progress = _interopRequireDefault(require("../../progress"));
var _useConfigInject2 = _interopRequireDefault(require("../../_util/hooks/useConfigInject"));
var _transition = _interopRequireWildcard(require("../../_util/transition"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var listItemProps = function listItemProps() {
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
exports.listItemProps = listItemProps;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ListItem',
  inheritAttrs: false,
  props: listItemProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var showProgress = (0, _vue.ref)(false);
    var progressRafRef = (0, _vue.ref)();
    (0, _vue.onMounted)(function () {
      progressRafRef.value = setTimeout(function () {
        showProgress.value = true;
      }, 300);
    });
    (0, _vue.onBeforeUnmount)(function () {
      clearTimeout(progressRafRef.value);
    });
    var _useConfigInject = (0, _useConfigInject2.default)('upload', props),
      rootPrefixCls = _useConfigInject.rootPrefixCls;
    var transitionProps = (0, _vue.computed)(function () {
      return (0, _transition.getTransitionProps)("".concat(rootPrefixCls.value, "-fade"));
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
      var icon = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-text-icon")
      }, [iconNode]);
      if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
          var _uploadingClassName;
          var uploadingClassName = (_uploadingClassName = {}, (0, _defineProperty2.default)(_uploadingClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), (0, _defineProperty2.default)(_uploadingClassName, "".concat(prefixCls, "-list-item-file"), file.status !== 'uploading'), _uploadingClassName);
          icon = (0, _vue.createVNode)("div", {
            "class": uploadingClassName
          }, [iconNode]);
        } else {
          var _aClassName;
          var thumbnail = isImgUrl !== null && isImgUrl !== void 0 && isImgUrl(file) ? (0, _vue.createVNode)("img", {
            "src": file.thumbUrl || file.url,
            "alt": file.name,
            "class": "".concat(prefixCls, "-list-item-image")
          }, null) : iconNode;
          var aClassName = (_aClassName = {}, (0, _defineProperty2.default)(_aClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), (0, _defineProperty2.default)(_aClassName, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _aClassName);
          icon = (0, _vue.createVNode)("a", {
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
      var infoUploadingClass = (_infoUploadingClass = {}, (0, _defineProperty2.default)(_infoUploadingClass, "".concat(prefixCls, "-list-item"), true), (0, _defineProperty2.default)(_infoUploadingClass, "".concat(prefixCls, "-list-item-").concat(file.status), true), (0, _defineProperty2.default)(_infoUploadingClass, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _infoUploadingClass);
      var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
      var removeIcon = showRemoveIcon ? actionIconRender({
        customIcon: customRemoveIcon ? customRemoveIcon({
          file: file
        }) : (0, _vue.createVNode)(_DeleteOutlined.default, null, null),
        callback: function callback() {
          return onClose(file);
        },
        prefixCls: prefixCls,
        title: locale.removeFile
      }) : null;
      var downloadIcon = showDownloadIcon && file.status === 'done' ? actionIconRender({
        customIcon: customDownloadIcon ? customDownloadIcon({
          file: file
        }) : (0, _vue.createVNode)(_DownloadOutlined.default, null, null),
        callback: function callback() {
          return onDownload(file);
        },
        prefixCls: prefixCls,
        title: locale.downloadFile
      }) : null;
      var downloadOrDelete = listType !== 'picture-card' && (0, _vue.createVNode)("span", {
        "key": "download-delete",
        "class": ["".concat(prefixCls, "-list-item-card-actions"), {
          picture: listType === 'picture'
        }]
      }, [downloadIcon, removeIcon]);
      var listItemNameClass = "".concat(prefixCls, "-list-item-name");
      var preview = file.url ? [(0, _vue.createVNode)("a", (0, _objectSpread2.default)((0, _objectSpread2.default)({
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
      }), [file.name]), downloadOrDelete] : [(0, _vue.createVNode)("span", {
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
      var previewIcon = showPreviewIcon ? (0, _vue.createVNode)("a", {
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
      }) : (0, _vue.createVNode)(_EyeOutlined.default, null, null)]) : null;
      var actions = listType === 'picture-card' && file.status !== 'uploading' && (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-list-item-actions")
      }, [previewIcon, file.status === 'done' && downloadIcon, removeIcon]);
      var message;
      if (file.response && typeof file.response === 'string') {
        message = file.response;
      } else {
        var _file$error, _file$error2;
        message = ((_file$error = file.error) === null || _file$error === void 0 ? void 0 : _file$error.statusText) || ((_file$error2 = file.error) === null || _file$error2 === void 0 ? void 0 : _file$error2.message) || locale.uploadError;
      }
      var iconAndPreview = (0, _vue.createVNode)("span", {
        "class": spanClassName
      }, [icon, preview]);
      var dom = (0, _vue.createVNode)("div", {
        "class": infoUploadingClass
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-list-item-info")
      }, [iconAndPreview]), actions, showProgress.value && (0, _vue.createVNode)(_transition.default, transitionProps.value, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-list-item-progress")
          }, ['percent' in file ? (0, _vue.createVNode)(_progress.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, progressProps), {}, {
            "type": "line",
            "percent": file.percent
          }), null) : null]), [[_vue.vShow, file.status === 'uploading']])];
        }
      })]);
      var listContainerNameClass = (_listContainerNameCla = {}, (0, _defineProperty2.default)(_listContainerNameCla, "".concat(prefixCls, "-list-").concat(listType, "-container"), true), (0, _defineProperty2.default)(_listContainerNameCla, "".concat(className), !!className), _listContainerNameCla);
      var item = file.status === 'error' ? (0, _vue.createVNode)(_tooltip.default, {
        "title": message,
        "getPopupContainer": function getPopupContainer(node) {
          return node.parentNode;
        }
      }, {
        default: function _default() {
          return [dom];
        }
      }) : dom;
      return (0, _vue.createVNode)("div", {
        "class": listContainerNameClass,
        "style": style,
        "ref": _vue.ref
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
exports.default = _default2;