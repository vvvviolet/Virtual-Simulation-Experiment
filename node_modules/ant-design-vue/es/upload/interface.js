function uploadProps() {
  return {
    capture: [Boolean, String],
    type: String,
    name: String,
    defaultFileList: Array,
    fileList: Array,
    action: [String, Function],
    directory: {
      type: Boolean,
      default: undefined
    },
    data: [Object, Function],
    method: String,
    headers: Object,
    showUploadList: {
      type: [Boolean, Object],
      default: undefined
    },
    multiple: {
      type: Boolean,
      default: undefined
    },
    accept: String,
    beforeUpload: Function,
    onChange: Function,
    'onUpdate:fileList': Function,
    onDrop: Function,
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onReject: Function,
    onRemove: Function,
    /** @deprecated Please use `onRemove` directly */
    remove: Function,
    supportServerRender: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    customRequest: Function,
    withCredentials: {
      type: Boolean,
      default: undefined
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: undefined
    },
    locale: {
      type: Object,
      default: undefined
    },
    id: String,
    previewFile: Function,
    /** @deprecated Please use `beforeUpload` directly */
    transformFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    progress: Object,
    itemRender: Function,
    /** Config max count of `fileList`. Will replace current one when `maxCount` is 1 */
    maxCount: Number,
    height: [Number, String],
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function
  };
}
function uploadListProps() {
  return {
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onRemove: Function,
    items: Array,
    progress: Object,
    prefixCls: String,
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
    locale: {
      type: Object,
      default: undefined
    },
    previewFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    appendAction: Function,
    appendActionVisible: {
      type: Boolean,
      default: undefined
    },
    itemRender: Function
  };
}
export { uploadProps, uploadListProps };