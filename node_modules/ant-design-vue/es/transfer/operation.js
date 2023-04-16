import { createVNode as _createVNode } from "vue";
import LeftOutlined from "@ant-design/icons-vue/es/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons-vue/es/icons/RightOutlined";
import Button from '../button';
function noop() {}
var Operation = function Operation(props) {
  var disabled = props.disabled,
    _props$moveToLeft = props.moveToLeft,
    moveToLeft = _props$moveToLeft === void 0 ? noop : _props$moveToLeft,
    _props$moveToRight = props.moveToRight,
    moveToRight = _props$moveToRight === void 0 ? noop : _props$moveToRight,
    _props$leftArrowText = props.leftArrowText,
    leftArrowText = _props$leftArrowText === void 0 ? '' : _props$leftArrowText,
    _props$rightArrowText = props.rightArrowText,
    rightArrowText = _props$rightArrowText === void 0 ? '' : _props$rightArrowText,
    leftActive = props.leftActive,
    rightActive = props.rightActive,
    className = props.class,
    style = props.style,
    direction = props.direction,
    oneWay = props.oneWay;
  return _createVNode("div", {
    "class": className,
    "style": style
  }, [_createVNode(Button, {
    "type": "primary",
    "size": "small",
    "disabled": disabled || !rightActive,
    "onClick": moveToRight,
    "icon": direction !== 'rtl' ? _createVNode(RightOutlined, null, null) : _createVNode(LeftOutlined, null, null)
  }, {
    default: function _default() {
      return [rightArrowText];
    }
  }), !oneWay && _createVNode(Button, {
    "type": "primary",
    "size": "small",
    "disabled": disabled || !leftActive,
    "onClick": moveToLeft,
    "icon": direction !== 'rtl' ? _createVNode(LeftOutlined, null, null) : _createVNode(RightOutlined, null, null)
  }, {
    default: function _default() {
      return [leftArrowText];
    }
  })]);
};
Operation.displayName = 'Operation';
Operation.inheritAttrs = false;
export default Operation;