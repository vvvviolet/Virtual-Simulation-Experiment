"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));
var _TextArea = _interopRequireDefault(require("../input/TextArea"));
var _EnterOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EnterOutlined"));
var editableProps = function editableProps() {
  return {
    prefixCls: String,
    value: String,
    maxlength: Number,
    autoSize: {
      type: [Boolean, Object]
    },
    onSave: Function,
    onCancel: Function,
    onEnd: Function,
    onChange: Function,
    originContent: String,
    direction: String
  };
};
var Editable = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Editable',
  props: editableProps(),
  // emits: ['save', 'cancel', 'end', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var state = (0, _vue.reactive)({
      current: props.value || '',
      lastKeyCode: undefined,
      inComposition: false,
      cancelFlag: false
    });
    (0, _vue.watch)(function () {
      return props.value;
    }, function (current) {
      state.current = current;
    });
    var textArea = (0, _vue.ref)();
    (0, _vue.onMounted)(function () {
      if (textArea.value) {
        var _textArea$value;
        var resizableTextArea = (_textArea$value = textArea.value) === null || _textArea$value === void 0 ? void 0 : _textArea$value.resizableTextArea;
        var innerTextArea = resizableTextArea === null || resizableTextArea === void 0 ? void 0 : resizableTextArea.textArea;
        innerTextArea.focus();
        var length = innerTextArea.value.length;
        innerTextArea.setSelectionRange(length, length);
      }
    });
    function saveTextAreaRef(node) {
      textArea.value = node;
    }
    function onChange(_ref2) {
      var value = _ref2.target.value;
      state.current = value.replace(/[\r\n]/g, '');
      emit('change', state.current);
    }
    function onCompositionStart() {
      state.inComposition = true;
    }
    function onCompositionEnd() {
      state.inComposition = false;
    }
    function onKeyDown(e) {
      var keyCode = e.keyCode;
      if (keyCode === _KeyCode.default.ENTER) {
        e.preventDefault();
      }
      // We don't record keyCode when IME is using
      if (state.inComposition) return;
      state.lastKeyCode = keyCode;
    }
    function onKeyUp(e) {
      var keyCode = e.keyCode,
        ctrlKey = e.ctrlKey,
        altKey = e.altKey,
        metaKey = e.metaKey,
        shiftKey = e.shiftKey;
      // Check if it's a real key
      if (state.lastKeyCode === keyCode && !state.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === _KeyCode.default.ENTER) {
          confirmChange();
          emit('end');
        } else if (keyCode === _KeyCode.default.ESC) {
          state.current = props.originContent;
          emit('cancel');
        }
      }
    }
    function onBlur() {
      confirmChange();
    }
    function confirmChange() {
      emit('save', state.current.trim());
    }
    var textAreaClassName = (0, _vue.computed)(function () {
      var _ref3;
      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(props.prefixCls), true), (0, _defineProperty2.default)(_ref3, "".concat(props.prefixCls, "-edit-content"), true), (0, _defineProperty2.default)(_ref3, "".concat(props.prefixCls, "-rtl"), props.direction === 'rtl'), _ref3;
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": textAreaClassName.value
      }, [(0, _vue.createVNode)(_TextArea.default, {
        "ref": saveTextAreaRef,
        "maxlength": props.maxlength,
        "value": state.current,
        "onChange": onChange,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "onCompositionstart": onCompositionStart,
        "onCompositionend": onCompositionEnd,
        "onBlur": onBlur,
        "rows": 1,
        "autoSize": props.autoSize === undefined || props.autoSize
      }, null), slots.enterIcon ? slots.enterIcon({
        className: "".concat(props.prefixCls, "-edit-content-confirm")
      }) : (0, _vue.createVNode)(_EnterOutlined.default, {
        "class": "".concat(props.prefixCls, "-edit-content-confirm")
      }, null)]);
    };
  }
});
var _default = Editable;
exports.default = _default;