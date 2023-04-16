"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));
var _PaperClipOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PaperClipOutlined"));
var _PictureTwoTone = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PictureTwoTone"));
var _FileTwoTone = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FileTwoTone"));
var _interface = require("../interface");
var _utils = require("../utils");
var _button = _interopRequireDefault(require("../../button"));
var _ListItem = _interopRequireDefault(require("./ListItem"));
var _propsUtil = require("../../_util/props-util");
var _useConfigInject2 = _interopRequireDefault(require("../../_util/hooks/useConfigInject"));
var _transition = require("../../_util/transition");
var _collapseMotion = _interopRequireDefault(require("../../_util/collapseMotion"));
var HackSlot = function HackSlot(_, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  return (0, _propsUtil.filterEmpty)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))[0];
};
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AUploadList',
  props: (0, _propsUtil.initDefaultProps)((0, _interface.uploadListProps)(), {
    listType: 'text',
    progress: {
      strokeWidth: 2,
      showInfo: false
    },
    showRemoveIcon: true,
    showDownloadIcon: false,
    showPreviewIcon: true,
    previewFile: _utils.previewImage,
    isImageUrl: _utils.isImageUrl,
    items: [],
    appendActionVisible: true
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
      expose = _ref2.expose;
    var motionAppear = (0, _vue.ref)(false);
    var instance = (0, _vue.getCurrentInstance)();
    (0, _vue.onMounted)(function () {
      motionAppear.value == true;
    });
    (0, _vue.watchEffect)(function () {
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
      var fileIcon = props.isImageUrl && props.isImageUrl(file) ? (0, _vue.createVNode)(_PictureTwoTone.default, null, null) : (0, _vue.createVNode)(_FileTwoTone.default, null, null);
      var icon = isLoading ? (0, _vue.createVNode)(_LoadingOutlined.default, null, null) : (0, _vue.createVNode)(_PaperClipOutlined.default, null, null);
      if (props.listType === 'picture') {
        icon = isLoading ? (0, _vue.createVNode)(_LoadingOutlined.default, null, null) : fileIcon;
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
      if ((0, _propsUtil.isValidElement)(customIcon)) {
        return (0, _vue.createVNode)(_button.default, btnProps, {
          icon: function icon() {
            return customIcon;
          }
        });
      }
      return (0, _vue.createVNode)(_button.default, btnProps, {
        default: function _default() {
          return [(0, _vue.createVNode)("span", null, [customIcon])];
        }
      });
    };
    expose({
      handlePreview: onInternalPreview,
      handleDownload: onInternalDownload
    });
    var _useConfigInject = (0, _useConfigInject2.default)('upload', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var listClassNames = (0, _vue.computed)(function () {
      var _ref4;
      return _ref4 = {}, (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-list"), true), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-list-").concat(props.listType), true), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-list-rtl"), direction.value === 'rtl'), _ref4;
    });
    var transitionGroupProps = (0, _vue.computed)(function () {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _collapseMotion.default)("".concat(prefixCls.value, "-").concat(props.listType === 'picture-card' ? 'animate-inline' : 'animate'))), (0, _transition.getTransitionGroupProps)("".concat(prefixCls.value, "-").concat(props.listType === 'picture-card' ? 'animate-inline' : 'animate'))), {}, {
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
      return (0, _vue.createVNode)(_transition.TransitionGroup, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, transitionGroupProps.value), {}, {
        "tag": "div"
      }), {
        default: function _default() {
          return [items.map(function (file) {
            var key = file.uid;
            return (0, _vue.createVNode)(_ListItem.default, {
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
            }, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
              iconRender: internalIconRender,
              actionIconRender: actionIconRender
            }));
          }), appendAction ? (0, _vue.withDirectives)((0, _vue.createVNode)(HackSlot, {
            "key": "__ant_upload_appendAction"
          }, {
            default: function _default() {
              return appendActionDom;
            }
          }), [[_vue.vShow, !!appendActionVisible]]) : null];
        }
      });
    };
  }
});
exports.default = _default2;