import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent, onBeforeUnmount, onMounted, onUpdated, ref, Text, watch, watchEffect } from 'vue';
import Wave from '../_util/wave';
import buttonProps from './buttonTypes';
import { flattenChildren, initDefaultProps } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
import devWarning from '../vc-util/devWarning';
import LoadingIcon from './LoadingIcon';
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
}
export { buttonProps };
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AButton',
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(buttonProps(), {
    type: 'default'
  }),
  slots: ['icon'],
  // emits: ['click', 'mousedown'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      emit = _ref.emit;
    var _useConfigInject = useConfigInject('btn', props),
      prefixCls = _useConfigInject.prefixCls,
      autoInsertSpaceInButton = _useConfigInject.autoInsertSpaceInButton,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size;
    var buttonNodeRef = ref(null);
    var delayTimeoutRef = ref(undefined);
    var isNeedInserted = false;
    var innerLoading = ref(false);
    var hasTwoCNChar = ref(false);
    var autoInsertSpace = computed(function () {
      return autoInsertSpaceInButton.value !== false;
    });
    // =============== Update Loading ===============
    var loadingOrDelay = computed(function () {
      return _typeof(props.loading) === 'object' && props.loading.delay ? props.loading.delay || true : !!props.loading;
    });
    watch(loadingOrDelay, function (val) {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === 'number') {
        delayTimeoutRef.value = setTimeout(function () {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    var classes = computed(function () {
      var _ref2;
      var type = props.type,
        _props$shape = props.shape,
        shape = _props$shape === void 0 ? 'default' : _props$shape,
        ghost = props.ghost,
        block = props.block,
        danger = props.danger;
      var pre = prefixCls.value;
      var sizeClassNameMap = {
        large: 'lg',
        small: 'sm',
        middle: undefined
      };
      var sizeFullname = size.value;
      var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';
      return _ref2 = {}, _defineProperty(_ref2, "".concat(pre), true), _defineProperty(_ref2, "".concat(pre, "-").concat(type), type), _defineProperty(_ref2, "".concat(pre, "-").concat(shape), shape !== 'default' && shape), _defineProperty(_ref2, "".concat(pre, "-").concat(sizeCls), sizeCls), _defineProperty(_ref2, "".concat(pre, "-loading"), innerLoading.value), _defineProperty(_ref2, "".concat(pre, "-background-ghost"), ghost && !isUnborderedButtonType(type)), _defineProperty(_ref2, "".concat(pre, "-two-chinese-chars"), hasTwoCNChar.value && autoInsertSpace.value), _defineProperty(_ref2, "".concat(pre, "-block"), block), _defineProperty(_ref2, "".concat(pre, "-dangerous"), !!danger), _defineProperty(_ref2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    var fixTwoCNChar = function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      var node = buttonNodeRef.value;
      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }
      var buttonText = node.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    var handleClick = function handleClick(event) {
      // https://github.com/ant-design/ant-design/issues/30207
      if (innerLoading.value || props.disabled) {
        event.preventDefault();
        return;
      }
      emit('click', event);
    };
    var insertSpace = function insertSpace(child, needInserted) {
      var SPACE = needInserted ? ' ' : '';
      if (child.type === Text) {
        var text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split('').join(SPACE);
        }
        return _createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(function () {
      devWarning(!(props.ghost && isUnborderedButtonType(props.type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
    });
    onMounted(fixTwoCNChar);
    onUpdated(fixTwoCNChar);
    onBeforeUnmount(function () {
      delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
    });
    return function () {
      var _slots$icon, _slots$default;
      var _props$icon = props.icon,
        icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots) : _props$icon;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnborderedButtonType(props.type);
      var type = props.type,
        htmlType = props.htmlType,
        disabled = props.disabled,
        href = props.href,
        title = props.title,
        target = props.target,
        onMousedown = props.onMousedown;
      var iconType = innerLoading.value ? 'loading' : icon;
      var buttonProps = _objectSpread(_objectSpread({}, attrs), {}, {
        title: title,
        disabled: disabled,
        class: [classes.value, attrs.class, _defineProperty({}, "".concat(prefixCls.value, "-icon-only"), children.length === 0 && !!iconType)],
        onClick: handleClick,
        onMousedown: onMousedown
      });
      // https://github.com/vueComponent/ant-design-vue/issues/4930
      if (!disabled) {
        delete buttonProps.disabled;
      }
      var iconNode = icon && !innerLoading.value ? icon : _createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      var kids = children.map(function (child) {
        return insertSpace(child, isNeedInserted && autoInsertSpace.value);
      });
      if (href !== undefined) {
        return _createVNode("a", _objectSpread(_objectSpread({}, buttonProps), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]);
      }
      var buttonNode = _createVNode("button", _objectSpread(_objectSpread({}, buttonProps), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (isUnborderedButtonType(type)) {
        return buttonNode;
      }
      return _createVNode(Wave, {
        "ref": "wave",
        "disabled": !!innerLoading.value
      }, {
        default: function _default() {
          return [buttonNode];
        }
      });
    };
  }
});