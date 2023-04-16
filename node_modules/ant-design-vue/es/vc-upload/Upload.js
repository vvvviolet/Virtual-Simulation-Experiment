import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent, ref } from 'vue';
import { initDefaultProps } from '../_util/props-util';
import AjaxUpload from './AjaxUploader';
import { uploadProps } from './interface';
function empty() {}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Upload',
  inheritAttrs: false,
  props: initDefaultProps(uploadProps(), {
    componentTag: 'span',
    prefixCls: 'rc-upload',
    data: {},
    headers: {},
    name: 'file',
    multipart: false,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
    openFileDialogOnClick: true
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var uploader = ref();
    var abort = function abort(file) {
      var _uploader$value;
      (_uploader$value = uploader.value) === null || _uploader$value === void 0 ? void 0 : _uploader$value.abort(file);
    };
    expose({
      abort: abort
    });
    return function () {
      return _createVNode(AjaxUpload, _objectSpread(_objectSpread(_objectSpread({}, props), attrs), {}, {
        "ref": uploader
      }), slots);
    };
  }
});