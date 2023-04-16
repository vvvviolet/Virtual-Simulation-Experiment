import { createVNode as _createVNode } from "vue";
import useMergeProps from '../hooks/useMergeProps';
import { useInjectPanel } from '../PanelContext';
var HIDDEN_STYLE = {
  visibility: 'hidden'
};
function Header(_props, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    _props$prevIcon = props.prevIcon,
    prevIcon = _props$prevIcon === void 0 ? "\u2039" : _props$prevIcon,
    _props$nextIcon = props.nextIcon,
    nextIcon = _props$nextIcon === void 0 ? "\u203A" : _props$nextIcon,
    _props$superPrevIcon = props.superPrevIcon,
    superPrevIcon = _props$superPrevIcon === void 0 ? "\xAB" : _props$superPrevIcon,
    _props$superNextIcon = props.superNextIcon,
    superNextIcon = _props$superNextIcon === void 0 ? "\xBB" : _props$superNextIcon,
    onSuperPrev = props.onSuperPrev,
    onSuperNext = props.onSuperNext,
    onPrev = props.onPrev,
    onNext = props.onNext;
  var _useInjectPanel = useInjectPanel(),
    hideNextBtn = _useInjectPanel.hideNextBtn,
    hidePrevBtn = _useInjectPanel.hidePrevBtn;
  return _createVNode("div", {
    "class": prefixCls
  }, [onSuperPrev && _createVNode("button", {
    "type": "button",
    "onClick": onSuperPrev,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-super-prev-btn"),
    "style": hidePrevBtn.value ? HIDDEN_STYLE : {}
  }, [superPrevIcon]), onPrev && _createVNode("button", {
    "type": "button",
    "onClick": onPrev,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-prev-btn"),
    "style": hidePrevBtn.value ? HIDDEN_STYLE : {}
  }, [prevIcon]), _createVNode("div", {
    "class": "".concat(prefixCls, "-view")
  }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), onNext && _createVNode("button", {
    "type": "button",
    "onClick": onNext,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-next-btn"),
    "style": hideNextBtn.value ? HIDDEN_STYLE : {}
  }, [nextIcon]), onSuperNext && _createVNode("button", {
    "type": "button",
    "onClick": onSuperNext,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-super-next-btn"),
    "style": hideNextBtn.value ? HIDDEN_STYLE : {}
  }, [superNextIcon])]);
}
Header.displayName = 'Header';
Header.inheritAttrs = false;
export default Header;