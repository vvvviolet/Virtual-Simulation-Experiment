import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import KeyCode from '../_util/KeyCode';
import TextArea from '../input/TextArea';
import EnterOutlined from "@ant-design/icons-vue/es/icons/EnterOutlined";
import { defineComponent, ref, reactive, watch, onMounted, computed } from 'vue';
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
var Editable = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Editable',
  props: editableProps(),
  // emits: ['save', 'cancel', 'end', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var state = reactive({
      current: props.value || '',
      lastKeyCode: undefined,
      inComposition: false,
      cancelFlag: false
    });
    watch(function () {
      return props.value;
    }, function (current) {
      state.current = current;
    });
    var textArea = ref();
    onMounted(function () {
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
      if (keyCode === KeyCode.ENTER) {
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
        if (keyCode === KeyCode.ENTER) {
          confirmChange();
          emit('end');
        } else if (keyCode === KeyCode.ESC) {
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
    var textAreaClassName = computed(function () {
      var _ref3;
      return _ref3 = {}, _defineProperty(_ref3, "".concat(props.prefixCls), true), _defineProperty(_ref3, "".concat(props.prefixCls, "-edit-content"), true), _defineProperty(_ref3, "".concat(props.prefixCls, "-rtl"), props.direction === 'rtl'), _ref3;
    });
    return function () {
      return _createVNode("div", {
        "class": textAreaClassName.value
      }, [_createVNode(TextArea, {
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
      }) : _createVNode(EnterOutlined, {
        "class": "".concat(props.prefixCls, "-edit-content-confirm")
      }, null)]);
    };
  }
});
export default Editable;