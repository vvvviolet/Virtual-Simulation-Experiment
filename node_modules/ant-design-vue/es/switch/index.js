import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, onBeforeMount, ref, computed, onMounted, nextTick, watch } from 'vue';
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined";
import PropTypes from '../_util/vue-types';
import KeyCode from '../_util/KeyCode';
import Wave from '../_util/wave';
import warning from '../_util/warning';
import { tuple, withInstall } from '../_util/type';
import { getPropsSlot } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useInjectFormItemContext } from '../form/FormItemContext';
import omit from '../_util/omit';
export var SwitchSizes = tuple('small', 'default');
export var switchProps = function switchProps() {
  return {
    id: String,
    prefixCls: String,
    size: PropTypes.oneOf(SwitchSizes),
    disabled: {
      type: Boolean,
      default: undefined
    },
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autofocus: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: undefined
    },
    checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]),
    checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]).def(true),
    unCheckedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]).def(false),
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onMouseup: {
      type: Function
    },
    'onUpdate:checked': {
      type: Function
    },
    onBlur: Function,
    onFocus: Function
  };
};
var Switch = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ASwitch',
  __ANT_SWITCH: true,
  inheritAttrs: false,
  props: switchProps(),
  slots: ['checkedChildren', 'unCheckedChildren'],
  // emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown', 'blur'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose,
      emit = _ref.emit;
    var formItemContext = useInjectFormItemContext();
    onBeforeMount(function () {
      warning(!('defaultChecked' in attrs), 'Switch', "'defaultChecked' is deprecated, please use 'v-model:checked'");
      warning(!('value' in attrs), 'Switch', '`value` is not validate prop, do you mean `checked`?');
    });
    var checked = ref(props.checked !== undefined ? props.checked : attrs.defaultChecked);
    var checkedStatus = computed(function () {
      return checked.value === props.checkedValue;
    });
    watch(function () {
      return props.checked;
    }, function () {
      checked.value = props.checked;
    });
    var _useConfigInject = useConfigInject('switch', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size;
    var refSwitchNode = ref();
    var focus = function focus() {
      var _refSwitchNode$value;
      (_refSwitchNode$value = refSwitchNode.value) === null || _refSwitchNode$value === void 0 ? void 0 : _refSwitchNode$value.focus();
    };
    var blur = function blur() {
      var _refSwitchNode$value2;
      (_refSwitchNode$value2 = refSwitchNode.value) === null || _refSwitchNode$value2 === void 0 ? void 0 : _refSwitchNode$value2.blur();
    };
    expose({
      focus: focus,
      blur: blur
    });
    onMounted(function () {
      nextTick(function () {
        if (props.autofocus && !props.disabled) {
          refSwitchNode.value.focus();
        }
      });
    });
    var setChecked = function setChecked(check, e) {
      if (props.disabled) {
        return;
      }
      emit('update:checked', check);
      emit('change', check, e);
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur(e) {
      emit('blur', e);
    };
    var handleClick = function handleClick(e) {
      focus();
      var newChecked = checkedStatus.value ? props.unCheckedValue : props.checkedValue;
      setChecked(newChecked, e);
      emit('click', newChecked, e);
    };
    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === KeyCode.LEFT) {
        setChecked(props.unCheckedValue, e);
      } else if (e.keyCode === KeyCode.RIGHT) {
        setChecked(props.checkedValue, e);
      }
      emit('keydown', e);
    };
    var handleMouseUp = function handleMouseUp(e) {
      var _refSwitchNode$value3;
      (_refSwitchNode$value3 = refSwitchNode.value) === null || _refSwitchNode$value3 === void 0 ? void 0 : _refSwitchNode$value3.blur();
      emit('mouseup', e);
    };
    var classNames = computed(function () {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-small"), size.value === 'small'), _defineProperty(_ref2, "".concat(prefixCls.value, "-loading"), props.loading), _defineProperty(_ref2, "".concat(prefixCls.value, "-checked"), checkedStatus.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-disabled"), props.disabled), _defineProperty(_ref2, prefixCls.value, true), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _props$id;
      return _createVNode(Wave, {
        "insertExtraNode": true
      }, {
        default: function _default() {
          return [_createVNode("button", _objectSpread(_objectSpread(_objectSpread({}, omit(props, ['prefixCls', 'checkedChildren', 'unCheckedChildren', 'checked', 'autofocus', 'checkedValue', 'unCheckedValue', 'id', 'onChange', 'onUpdate:checked'])), attrs), {}, {
            "id": (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : formItemContext.id.value,
            "onKeydown": handleKeyDown,
            "onClick": handleClick,
            "onBlur": handleBlur,
            "onMouseup": handleMouseUp,
            "type": "button",
            "role": "switch",
            "aria-checked": checked.value,
            "disabled": props.disabled || props.loading,
            "class": [attrs.class, classNames.value],
            "ref": refSwitchNode
          }), [_createVNode("div", {
            "class": "".concat(prefixCls.value, "-handle")
          }, [props.loading ? _createVNode(LoadingOutlined, {
            "class": "".concat(prefixCls.value, "-loading-icon")
          }, null) : null]), _createVNode("span", {
            "class": "".concat(prefixCls.value, "-inner")
          }, [checkedStatus.value ? getPropsSlot(slots, props, 'checkedChildren') : getPropsSlot(slots, props, 'unCheckedChildren')])])];
        }
      });
    };
  }
});
export default withInstall(Switch);