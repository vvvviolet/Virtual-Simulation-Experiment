import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
var _excluded = ["componentTag", "prefixCls", "disabled", "id", "multiple", "accept", "capture", "directory", "openFileDialogOnClick", "onMouseenter", "onMouseleave"];
import { createVNode as _createVNode } from "vue";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import defaultRequest from './request';
import getUid from './uid';
import attrAccept from './attr-accept';
import traverseFileTree from './traverseFileTree';
import { uploadProps } from './interface';
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import pickAttrs from '../_util/pickAttrs';
import partition from 'lodash-es/partition';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AjaxUploader',
  inheritAttrs: false,
  props: uploadProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var uid = ref(getUid());
    var reqs = {};
    var fileInput = ref();
    var isMounted = false;
    /**
     * Process file before upload. When all the file is ready, we start upload.
     */
    var processFile = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file, fileList) {
        var beforeUpload, transformedFile, action, mergedAction, data, mergedData, parsedData, parsedFile, mergedParsedFile;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              beforeUpload = props.beforeUpload;
              transformedFile = file;
              if (!beforeUpload) {
                _context.next = 14;
                break;
              }
              _context.prev = 3;
              _context.next = 6;
              return beforeUpload(file, fileList);
            case 6:
              transformedFile = _context.sent;
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              // Rejection will also trade as false
              transformedFile = false;
            case 12:
              if (!(transformedFile === false)) {
                _context.next = 14;
                break;
              }
              return _context.abrupt("return", {
                origin: file,
                parsedFile: null,
                action: null,
                data: null
              });
            case 14:
              // Get latest action
              action = props.action;
              if (!(typeof action === 'function')) {
                _context.next = 21;
                break;
              }
              _context.next = 18;
              return action(file);
            case 18:
              mergedAction = _context.sent;
              _context.next = 22;
              break;
            case 21:
              mergedAction = action;
            case 22:
              // Get latest data
              data = props.data;
              if (!(typeof data === 'function')) {
                _context.next = 29;
                break;
              }
              _context.next = 26;
              return data(file);
            case 26:
              mergedData = _context.sent;
              _context.next = 30;
              break;
            case 29:
              mergedData = data;
            case 30:
              parsedData =
              // string type is from legacy `transformFile`.
              // Not sure if this will work since no related test case works with it
              (_typeof(transformedFile) === 'object' || typeof transformedFile === 'string') && transformedFile ? transformedFile : file;
              if (parsedData instanceof File) {
                parsedFile = parsedData;
              } else {
                parsedFile = new File([parsedData], file.name, {
                  type: file.type
                });
              }
              mergedParsedFile = parsedFile;
              mergedParsedFile.uid = file.uid;
              return _context.abrupt("return", {
                origin: file,
                data: mergedData,
                parsedFile: mergedParsedFile,
                action: mergedAction
              });
            case 35:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 9]]);
      }));
      return function processFile(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    var post = function post(_ref3) {
      var data = _ref3.data,
        origin = _ref3.origin,
        action = _ref3.action,
        parsedFile = _ref3.parsedFile;
      if (!isMounted) {
        return;
      }
      var onStart = props.onStart,
        customRequest = props.customRequest,
        name = props.name,
        headers = props.headers,
        withCredentials = props.withCredentials,
        method = props.method;
      var uid = origin.uid;
      var request = customRequest || defaultRequest;
      var requestOption = {
        action: action,
        filename: name,
        data: data,
        file: parsedFile,
        headers: headers,
        withCredentials: withCredentials,
        method: method || 'post',
        onProgress: function onProgress(e) {
          var onProgress = props.onProgress;
          onProgress === null || onProgress === void 0 ? void 0 : onProgress(e, parsedFile);
        },
        onSuccess: function onSuccess(ret, xhr) {
          var onSuccess = props.onSuccess;
          onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(ret, parsedFile, xhr);
          delete reqs[uid];
        },
        onError: function onError(err, ret) {
          var onError = props.onError;
          onError === null || onError === void 0 ? void 0 : onError(err, ret, parsedFile);
          delete reqs[uid];
        }
      };
      onStart(origin);
      reqs[uid] = request(requestOption);
    };
    var reset = function reset() {
      uid.value = getUid();
    };
    var abort = function abort(file) {
      if (file) {
        var _uid = file.uid ? file.uid : file;
        if (reqs[_uid] && reqs[_uid].abort) {
          reqs[_uid].abort();
        }
        delete reqs[_uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }
          delete reqs[uid];
        });
      }
    };
    onMounted(function () {
      isMounted = true;
    });
    onBeforeUnmount(function () {
      isMounted = false;
      abort();
    });
    var uploadFiles = function uploadFiles(files) {
      var originFiles = _toConsumableArray(files);
      var postFiles = originFiles.map(function (file) {
        // eslint-disable-next-line no-param-reassign
        file.uid = getUid();
        return processFile(file, originFiles);
      });
      // Batch upload files
      Promise.all(postFiles).then(function (fileList) {
        var onBatchStart = props.onBatchStart;
        onBatchStart === null || onBatchStart === void 0 ? void 0 : onBatchStart(fileList.map(function (_ref4) {
          var origin = _ref4.origin,
            parsedFile = _ref4.parsedFile;
          return {
            file: origin,
            parsedFile: parsedFile
          };
        }));
        fileList.filter(function (file) {
          return file.parsedFile !== null;
        }).forEach(function (file) {
          post(file);
        });
      });
    };
    var onChange = function onChange(e) {
      var accept = props.accept,
        directory = props.directory;
      var files = e.target.files;
      var acceptedFiles = _toConsumableArray(files).filter(function (file) {
        return !directory || attrAccept(file, accept);
      });
      uploadFiles(acceptedFiles);
      reset();
    };
    var onClick = function onClick(e) {
      var el = fileInput.value;
      if (!el) {
        return;
      }
      var onClick = props.onClick;
      // TODO
      // if (children && (children as any).type === 'button') {
      //   const parent = el.parentNode as HTMLInputElement;
      //   parent.focus();
      //   parent.querySelector('button').blur();
      // }
      el.click();
      if (onClick) {
        onClick(e);
      }
    };
    var onKeyDown = function onKeyDown(e) {
      if (e.key === 'Enter') {
        onClick(e);
      }
    };
    var onFileDrop = function onFileDrop(e) {
      var multiple = props.multiple;
      e.preventDefault();
      if (e.type === 'dragover') {
        return;
      }
      if (props.directory) {
        traverseFileTree(Array.prototype.slice.call(e.dataTransfer.items), uploadFiles, function (_file) {
          return attrAccept(_file, props.accept);
        });
      } else {
        var files = partition(Array.prototype.slice.call(e.dataTransfer.files), function (file) {
          return attrAccept(file, props.accept);
        });
        var successFiles = files[0];
        var errorFiles = files[1];
        if (multiple === false) {
          successFiles = successFiles.slice(0, 1);
        }
        uploadFiles(successFiles);
        if (errorFiles.length && props.onReject) props.onReject(errorFiles);
      }
    };
    expose({
      abort: abort
    });
    return function () {
      var _cls, _slots$default;
      var Tag = props.componentTag,
        prefixCls = props.prefixCls,
        disabled = props.disabled,
        id = props.id,
        multiple = props.multiple,
        accept = props.accept,
        capture = props.capture,
        directory = props.directory,
        openFileDialogOnClick = props.openFileDialogOnClick,
        onMouseenter = props.onMouseenter,
        onMouseleave = props.onMouseleave,
        otherProps = _objectWithoutProperties(props, _excluded);
      var cls = (_cls = {}, _defineProperty(_cls, prefixCls, true), _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_cls, attrs.class, !!attrs.class), _cls);
      // because input don't have directory/webkitdirectory type declaration
      var dirProps = directory ? {
        directory: 'directory',
        webkitdirectory: 'webkitdirectory'
      } : {};
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? onClick : function () {},
        onKeydown: openFileDialogOnClick ? onKeyDown : function () {},
        onMouseenter: onMouseenter,
        onMouseleave: onMouseleave,
        onDrop: onFileDrop,
        onDragover: onFileDrop,
        tabindex: '0'
      };
      return _createVNode(Tag, _objectSpread(_objectSpread({}, events), {}, {
        "class": cls,
        "role": "button",
        "style": attrs.style
      }), {
        default: function _default() {
          return [_createVNode("input", _objectSpread(_objectSpread(_objectSpread({}, pickAttrs(otherProps, {
            aria: true,
            data: true
          })), {}, {
            "id": id,
            "type": "file",
            "ref": fileInput,
            "onClick": function onClick(e) {
              return e.stopPropagation();
            },
            "key": uid.value,
            "style": {
              display: 'none'
            },
            "accept": accept
          }, dirProps), {}, {
            "multiple": multiple,
            "onChange": onChange
          }, capture != null ? {
            capture: capture
          } : {}), null), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});