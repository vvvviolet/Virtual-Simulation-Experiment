import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
var TransBtn = function TransBtn(props, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  var className = props.class,
    customizeIcon = props.customizeIcon,
    customizeIconProps = props.customizeIconProps,
    _onMousedown = props.onMousedown,
    onClick = props.onClick;
  var icon;
  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return _createVNode("span", {
    "class": className,
    "onMousedown": function onMousedown(event) {
      event.preventDefault();
      if (_onMousedown) {
        _onMousedown(event);
      }
    },
    "style": {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    "unselectable": "on",
    "onClick": onClick,
    "aria-hidden": true
  }, [icon !== undefined ? icon : _createVNode("span", {
    "class": className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    })
  }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
};
TransBtn.inheritAttrs = false;
TransBtn.displayName = 'TransBtn';
TransBtn.props = {
  class: String,
  customizeIcon: PropTypes.any,
  customizeIconProps: PropTypes.any,
  onMousedown: Function,
  onClick: Function
};
export default TransBtn;