import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["class", "style"];
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import VcUpload from '../vc-upload';
import UploadList from './UploadList';
import { uploadProps } from './interface';
import { file2Obj, getFileItem, removeFileItem, updateFileList } from './utils';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale/default';
import { computed, defineComponent, onMounted, ref, toRef } from 'vue';
import { flattenChildren, initDefaultProps } from '../_util/props-util';
import useMergedState from '../_util/hooks/useMergedState';
import devWarning from '../vc-util/devWarning';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
import { useInjectFormItemContext } from '../form';
export var LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AUpload',
  inheritAttrs: false,
  props: initDefaultProps(uploadProps(), {
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
    var formItemContext = useInjectFormItemContext();
    var _useMergedState = useMergedState(props.defaultFileList || [], {
        value: toRef(props, 'fileList'),
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
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedFileList = _useMergedState2[0],
      setMergedFileList = _useMergedState2[1];
    var dragState = ref('drop');
    var upload = ref();
    onMounted(function () {
      devWarning(props.fileList !== undefined || attrs.value === undefined, 'Upload', '`value` is not a valid prop, do you mean `fileList`?');
      devWarning(props.transformFile === undefined, 'Upload', '`transformFile` is deprecated. Please use `beforeUpload` directly.');
      devWarning(props.remove === undefined, 'Upload', '`remove` props is deprecated. Please use `remove` event.');
    });
    var onInternalChange = function onInternalChange(file, changedFileList, event) {
      var _props$onUpdateFileL, _props$onChange;
      var cloneList = _toConsumableArray(changedFileList);
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file, fileListArgs) {
        var beforeUpload, transformFile, parsedFile, result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
              if (_typeof(result) === 'object' && result) {
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
        return file2Obj(info.file);
      });
      // Concat new files with prev files
      var newFileList = _toConsumableArray(mergedFileList.value);
      objectFileList.forEach(function (fileObj) {
        // Replace file if exist
        newFileList = updateFileList(fileObj, newFileList);
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
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.status = 'done';
      targetItem.percent = 100;
      targetItem.response = response;
      targetItem.xhr = xhr;
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList);
    };
    var onProgress = function onProgress(e, file) {
      // removed
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.status = 'uploading';
      targetItem.percent = e.percent;
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList, e);
    };
    var onError = function onError(error, response, file) {
      // removed
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
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
        var removedFileList = removeFileItem(file, mergedFileList.value);
        if (removedFileList) {
          var _mergedFileList$value, _upload$value;
          currentFile = _objectSpread(_objectSpread({}, file), {}, {
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
    var _useConfigInject = useConfigInject('upload', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var _useLocaleReceiver = useLocaleReceiver('Upload', defaultLocale.Upload, computed(function () {
        return props.locale;
      })),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
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
      return showUploadList ? _createVNode(UploadList, {
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
      }, _objectSpread({}, slots)) : button === null || button === void 0 ? void 0 : button();
    };
    return function () {
      var _props$id, _classNames2, _slots$default2;
      var listType = props.listType,
        disabled = props.disabled,
        type = props.type;
      var className = attrs.class,
        styleName = attrs.style,
        transAttrs = _objectWithoutProperties(attrs, _excluded);
      var rcUploadProps = _objectSpread(_objectSpread(_objectSpread({
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
        var dragCls = classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-drag"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-drag-uploading"), mergedFileList.value.some(function (file) {
          return file.status === 'uploading';
        })), _defineProperty(_classNames, "".concat(prefixCls.value, "-drag-hover"), dragState.value === 'dragover'), _defineProperty(_classNames, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames), attrs.class);
        return _createVNode("span", null, [_createVNode("div", {
          "class": dragCls,
          "onDrop": onFileDrop,
          "onDragover": onFileDrop,
          "onDragleave": onFileDrop,
          "style": attrs.style
        }, [_createVNode(VcUpload, _objectSpread(_objectSpread({}, rcUploadProps), {}, {
          "ref": upload,
          "class": "".concat(prefixCls.value, "-btn")
        }), _objectSpread({
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-drag-container")
            }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])];
          }
        }, slots))]), renderUploadList()]);
      }
      var uploadButtonCls = classNames(prefixCls.value, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls.value, "-select"), true), _defineProperty(_classNames2, "".concat(prefixCls.value, "-select-").concat(listType), true), _defineProperty(_classNames2, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames2));
      var children = flattenChildren((_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots));
      var renderUploadButton = function renderUploadButton(uploadButtonStyle) {
        return _createVNode("div", {
          "class": uploadButtonCls,
          "style": uploadButtonStyle
        }, [_createVNode(VcUpload, _objectSpread(_objectSpread({}, rcUploadProps), {}, {
          "ref": upload
        }), slots)]);
      };
      if (listType === 'picture-card') {
        return _createVNode("span", {
          "class": classNames("".concat(prefixCls.value, "-picture-card-wrapper"), attrs.class)
        }, [renderUploadList(renderUploadButton, !!(children && children.length))]);
      }
      return _createVNode("span", {
        "class": attrs.class
      }, [renderUploadButton(children && children.length ? undefined : {
        display: 'none'
      }), renderUploadList()]);
    };
  }
});