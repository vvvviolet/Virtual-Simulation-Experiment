"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LIST_IGNORE = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _vcUpload = _interopRequireDefault(require("../vc-upload"));
var _UploadList = _interopRequireDefault(require("./UploadList"));
var _interface = require("./interface");
var _utils = require("./utils");
var _LocaleReceiver = require("../locale-provider/LocaleReceiver");
var _default3 = _interopRequireDefault(require("../locale/default"));
var _propsUtil = require("../_util/props-util");
var _useMergedState3 = _interopRequireDefault(require("../_util/hooks/useMergedState"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _form = require("../form");
var _excluded = ["class", "style"];
var LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");
exports.LIST_IGNORE = LIST_IGNORE;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AUpload',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _interface.uploadProps)(), {
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    showUploadList: true,
    listType: 'text',
    disabled: false,
    supportServerRender: true
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var formItemContext = (0, _form.useInjectFormItemContext)();
    var _useMergedState = (0, _useMergedState3.default)(props.defaultFileList || [], {
        value: (0, _vue.toRef)(props, 'fileList'),
        postState: function postState(list) {
          var timestamp = Date.now();
          return (list !== null && list !== void 0 ? list : []).map(function (file, index) {
            if (!file.uid && !Object.isFrozen(file)) {
              file.uid = "__AUTO__".concat(timestamp, "_").concat(index, "__");
            }
            return file;
          });
        }
      }),
      _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
      mergedFileList = _useMergedState2[0],
      setMergedFileList = _useMergedState2[1];
    var dragState = (0, _vue.ref)('drop');
    var upload = (0, _vue.ref)();
    (0, _vue.onMounted)(function () {
      (0, _devWarning.default)(props.fileList !== undefined || attrs.value === undefined, 'Upload', '`value` is not a valid prop, do you mean `fileList`?');
      (0, _devWarning.default)(props.transformFile === undefined, 'Upload', '`transformFile` is deprecated. Please use `beforeUpload` directly.');
      (0, _devWarning.default)(props.remove === undefined, 'Upload', '`remove` props is deprecated. Please use `remove` event.');
    });
    var onInternalChange = function onInternalChange(file, changedFileList, event) {
      var _props$onUpdateFileL, _props$onChange;
      var cloneList = (0, _toConsumableArray2.default)(changedFileList);
      // Cut to match count
      if (props.maxCount === 1) {
        cloneList = cloneList.slice(-1);
      } else if (props.maxCount) {
        cloneList = cloneList.slice(0, props.maxCount);
      }
      setMergedFileList(cloneList);
      var changeInfo = {
        file: file,
        fileList: cloneList
      };
      if (event) {
        changeInfo.event = event;
      }
      (_props$onUpdateFileL = props['onUpdate:fileList']) === null || _props$onUpdateFileL === void 0 ? void 0 : _props$onUpdateFileL.call(props, changeInfo.fileList);
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, changeInfo);
      formItemContext.onFieldChange();
    };
    var mergedBeforeUpload = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(file, fileListArgs) {
        var beforeUpload, transformFile, parsedFile, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              beforeUpload = props.beforeUpload, transformFile = props.transformFile;
              parsedFile = file;
              if (!beforeUpload) {
                _context.next = 13;
                break;
              }
              _context.next = 5;
              return beforeUpload(file, fileListArgs);
            case 5:
              result = _context.sent;
              if (!(result === false)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", false);
            case 8:
              // Hack for LIST_IGNORE, we add additional info to remove from the list
              delete file[LIST_IGNORE];
              if (!(result === LIST_IGNORE)) {
                _context.next = 12;
                break;
              }
              Object.defineProperty(file, LIST_IGNORE, {
                value: true,
                configurable: true
              });
              return _context.abrupt("return", false);
            case 12:
              if ((0, _typeof2.default)(result) === 'object' && result) {
                parsedFile = result;
              }
            case 13:
              if (!transformFile) {
                _context.next = 17;
                break;
              }
              _context.next = 16;
              return transformFile(parsedFile);
            case 16:
              parsedFile = _context.sent;
            case 17:
              return _context.abrupt("return", parsedFile);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function mergedBeforeUpload(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    var onBatchStart = function onBatchStart(batchFileInfoList) {
      // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
      var filteredFileInfoList = batchFileInfoList.filter(function (info) {
        return !info.file[LIST_IGNORE];
      });
      // Nothing to do since no file need upload
      if (!filteredFileInfoList.length) {
        return;
      }
      var objectFileList = filteredFileInfoList.map(function (info) {
        return (0, _utils.file2Obj)(info.file);
      });
      // Concat new files with prev files
      var newFileList = (0, _toConsumableArray2.default)(mergedFileList.value);
      objectFileList.forEach(function (fileObj) {
        // Replace file if exist
        newFileList = (0, _utils.updateFileList)(fileObj, newFileList);
      });
      objectFileList.forEach(function (fileObj, index) {
        // Repeat trigger `onChange` event for compatible
        var triggerFileObj = fileObj;
        if (!filteredFileInfoList[index].parsedFile) {
          // `beforeUpload` return false
          var originFileObj = fileObj.originFileObj;
          var clone;
          try {
            clone = new File([originFileObj], originFileObj.name, {
              type: originFileObj.type
            });
          } catch (e) {
            clone = new Blob([originFileObj], {
              type: originFileObj.type
            });
            clone.name = originFileObj.name;
            clone.lastModifiedDate = new Date();
            clone.lastModified = new Date().getTime();
          }
          clone.uid = fileObj.uid;
          triggerFileObj = clone;
        } else {
          // Inject `uploading` status
          fileObj.status = 'uploading';
        }
        onInternalChange(triggerFileObj, newFileList);
      });
    };
    var onSuccess = function onSuccess(response, file, xhr) {
      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {
        /* do nothing */
      }
      // removed
      if (!(0, _utils.getFileItem)(file, mergedFileList.value)) {
        return;
      }
      var targetItem = (0, _utils.file2Obj)(file);
      targetItem.status = 'done';
      targetItem.percent = 100;
      targetItem.response = response;
      targetItem.xhr = xhr;
      var nextFileList = (0, _utils.updateFileList)(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList);
    };
    var onProgress = function onProgress(e, file) {
      // removed
      if (!(0, _utils.getFileItem)(file, mergedFileList.value)) {
        return;
      }
      var targetItem = (0, _utils.file2Obj)(file);
      targetItem.status = 'uploading';
      targetItem.percent = e.percent;
      var nextFileList = (0, _utils.updateFileList)(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList, e);
    };
    var onError = function onError(error, response, file) {
      // removed
      if (!(0, _utils.getFileItem)(file, mergedFileList.value)) {
        return;
      }
      var targetItem = (0, _utils.file2Obj)(file);
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';
      var nextFileList = (0, _utils.updateFileList)(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList);
    };
    var handleRemove = function handleRemove(file) {
      var currentFile;
      var mergedRemove = props.onRemove || props.remove;
      Promise.resolve(typeof mergedRemove === 'function' ? mergedRemove(file) : mergedRemove).then(function (ret) {
        // Prevent removing file
        if (ret === false) {
          return;
        }
        var removedFileList = (0, _utils.removeFileItem)(file, mergedFileList.value);
        if (removedFileList) {
          var _mergedFileList$value, _upload$value;
          currentFile = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, file), {}, {
            status: 'removed'
          });
          (_mergedFileList$value = mergedFileList.value) === null || _mergedFileList$value === void 0 ? void 0 : _mergedFileList$value.forEach(function (item) {
            var matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
            if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
              item.status = 'removed';
            }
          });
          (_upload$value = upload.value) === null || _upload$value === void 0 ? void 0 : _upload$value.abort(currentFile);
          onInternalChange(currentFile, removedFileList);
        }
      });
    };
    var onFileDrop = function onFileDrop(e) {
      dragState.value = e.type;
      if (e.type === 'drop') {
        var _props$onDrop;
        (_props$onDrop = props.onDrop) === null || _props$onDrop === void 0 ? void 0 : _props$onDrop.call(props, e);
      }
    };
    expose({
      onBatchStart: onBatchStart,
      onSuccess: onSuccess,
      onProgress: onProgress,
      onError: onError,
      fileList: mergedFileList,
      upload: upload
    });
    var _useConfigInject = (0, _useConfigInject2.default)('upload', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Upload', _default3.default.Upload, (0, _vue.computed)(function () {
        return props.locale;
      })),
      _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
      locale = _useLocaleReceiver2[0];
    var renderUploadList = function renderUploadList(button, buttonVisible) {
      var removeIcon = props.removeIcon,
        previewIcon = props.previewIcon,
        downloadIcon = props.downloadIcon,
        previewFile = props.previewFile,
        onPreview = props.onPreview,
        onDownload = props.onDownload,
        disabled = props.disabled,
        isImageUrl = props.isImageUrl,
        progress = props.progress,
        itemRender = props.itemRender,
        iconRender = props.iconRender,
        showUploadList = props.showUploadList;
      var _ref3 = typeof showUploadList === 'boolean' ? {} : showUploadList,
        showDownloadIcon = _ref3.showDownloadIcon,
        showPreviewIcon = _ref3.showPreviewIcon,
        showRemoveIcon = _ref3.showRemoveIcon;
      return showUploadList ? (0, _vue.createVNode)(_UploadList.default, {
        "listType": props.listType,
        "items": mergedFileList.value,
        "previewFile": previewFile,
        "onPreview": onPreview,
        "onDownload": onDownload,
        "onRemove": handleRemove,
        "showRemoveIcon": !disabled && showRemoveIcon,
        "showPreviewIcon": showPreviewIcon,
        "showDownloadIcon": showDownloadIcon,
        "removeIcon": removeIcon,
        "previewIcon": previewIcon,
        "downloadIcon": downloadIcon,
        "iconRender": iconRender,
        "locale": locale.value,
        "isImageUrl": isImageUrl,
        "progress": progress,
        "itemRender": itemRender,
        "appendActionVisible": buttonVisible,
        "appendAction": button
      }, (0, _objectSpread2.default)({}, slots)) : button === null || button === void 0 ? void 0 : button();
    };
    return function () {
      var _props$id, _classNames2, _slots$default2;
      var listType = props.listType,
        disabled = props.disabled,
        type = props.type;
      var className = attrs.class,
        styleName = attrs.style,
        transAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded);
      var rcUploadProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        onBatchStart: onBatchStart,
        onError: onError,
        onProgress: onProgress,
        onSuccess: onSuccess
      }, transAttrs), props), {}, {
        id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : formItemContext.id.value,
        prefixCls: prefixCls.value,
        beforeUpload: mergedBeforeUpload,
        onChange: undefined
      });
      delete rcUploadProps.remove;
      // Remove id to avoid open by label when trigger is hidden
      // !children: https://github.com/ant-design/ant-design/issues/14298
      // disabled: https://github.com/ant-design/ant-design/issues/16478
      //           https://github.com/ant-design/ant-design/issues/24197
      if (!slots.default || disabled) {
        delete rcUploadProps.id;
      }
      if (type === 'drag') {
        var _classNames, _slots$default;
        var dragCls = (0, _classNames3.default)(prefixCls.value, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-drag"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-drag-uploading"), mergedFileList.value.some(function (file) {
          return file.status === 'uploading';
        })), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-drag-hover"), dragState.value === 'dragover'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames), attrs.class);
        return (0, _vue.createVNode)("span", null, [(0, _vue.createVNode)("div", {
          "class": dragCls,
          "onDrop": onFileDrop,
          "onDragover": onFileDrop,
          "onDragleave": onFileDrop,
          "style": attrs.style
        }, [(0, _vue.createVNode)(_vcUpload.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rcUploadProps), {}, {
          "ref": upload,
          "class": "".concat(prefixCls.value, "-btn")
        }), (0, _objectSpread2.default)({
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-drag-container")
            }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])];
          }
        }, slots))]), renderUploadList()]);
      }
      var uploadButtonCls = (0, _classNames3.default)(prefixCls.value, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-select"), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-select-").concat(listType), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames2));
      var children = (0, _propsUtil.flattenChildren)((_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots));
      var renderUploadButton = function renderUploadButton(uploadButtonStyle) {
        return (0, _vue.createVNode)("div", {
          "class": uploadButtonCls,
          "style": uploadButtonStyle
        }, [(0, _vue.createVNode)(_vcUpload.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rcUploadProps), {}, {
          "ref": upload
        }), slots)]);
      };
      if (listType === 'picture-card') {
        return (0, _vue.createVNode)("span", {
          "class": (0, _classNames3.default)("".concat(prefixCls.value, "-picture-card-wrapper"), attrs.class)
        }, [renderUploadList(renderUploadButton, !!(children && children.length))]);
      }
      return (0, _vue.createVNode)("span", {
        "class": attrs.class
      }, [renderUploadButton(children && children.length ? undefined : {
        display: 'none'
      }), renderUploadList()]);
    };
  }
});
exports.default = _default2;