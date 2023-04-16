import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { withDirectives as _withDirectives, resolveDirective as _resolveDirective, vShow as _vShow, createVNode as _createVNode } from "vue";
import PanelContent from './PanelContent';
import { initDefaultProps } from '../_util/props-util';
import { collapsePanelProps } from './commonProps';
import { defineComponent } from 'vue';
import Transition from '../_util/transition';
import classNames from '../_util/classNames';
import devWarning from '../vc-util/devWarning';
import useConfigInject from '../_util/hooks/useConfigInject';
export { collapsePanelProps };
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACollapsePanel',
  inheritAttrs: false,
  props: initDefaultProps(collapsePanelProps(), {
    showArrow: true,
    isActive: false,
    onItemClick: function onItemClick() {},
    headerClass: '',
    forceRender: false
  }),
  slots: ['expandIcon', 'extra', 'header'],
  // emits: ['itemClick'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs;
    devWarning(props.disabled === undefined, 'Collapse.Panel', '`disabled` is deprecated. Please use `collapsible="disabled"` instead.');
    var _useConfigInject = useConfigInject('collapse', props),
      prefixCls = _useConfigInject.prefixCls;
    var handleItemClick = function handleItemClick() {
      emit('itemClick', props.panelKey);
    };
    var handleKeyPress = function handleKeyPress(e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        handleItemClick();
      }
    };
    return function () {
      var _slots$header, _slots$extra, _classNames, _classNames2;
      var _props$header = props.header,
        header = _props$header === void 0 ? (_slots$header = slots.header) === null || _slots$header === void 0 ? void 0 : _slots$header.call(slots) : _props$header,
        headerClass = props.headerClass,
        isActive = props.isActive,
        showArrow = props.showArrow,
        destroyInactivePanel = props.destroyInactivePanel,
        accordion = props.accordion,
        forceRender = props.forceRender,
        openAnimation = props.openAnimation,
        _props$expandIcon = props.expandIcon,
        expandIcon = _props$expandIcon === void 0 ? slots.expandIcon : _props$expandIcon,
        _props$extra = props.extra,
        extra = _props$extra === void 0 ? (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots) : _props$extra,
        collapsible = props.collapsible;
      var disabled = collapsible === 'disabled';
      var prefixClsValue = prefixCls.value;
      var headerCls = classNames("".concat(prefixClsValue, "-header"), (_classNames = {}, _defineProperty(_classNames, headerClass, headerClass), _defineProperty(_classNames, "".concat(prefixClsValue, "-header-collapsible-only"), collapsible === 'header'), _classNames));
      var itemCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixClsValue, "-item"), true), _defineProperty(_classNames2, "".concat(prefixClsValue, "-item-active"), isActive), _defineProperty(_classNames2, "".concat(prefixClsValue, "-item-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixClsValue, "-no-arrow"), !showArrow), _defineProperty(_classNames2, "".concat(attrs.class), !!attrs.class), _classNames2));
      var icon = _createVNode("i", {
        "class": "arrow"
      }, null);
      if (showArrow && typeof expandIcon === 'function') {
        icon = expandIcon(props);
      }
      var panelContent = _withDirectives(_createVNode(PanelContent, {
        "prefixCls": prefixClsValue,
        "isActive": isActive,
        "forceRender": forceRender,
        "role": accordion ? 'tabpanel' : null
      }, {
        default: slots.default
      }), [[_vShow, isActive]]);
      var transitionProps = _objectSpread({
        appear: false,
        css: false
      }, openAnimation);
      return _createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": itemCls
      }), [_createVNode("div", {
        "class": headerCls,
        "onClick": function onClick() {
          return collapsible !== 'header' && handleItemClick();
        },
        "role": accordion ? 'tab' : 'button',
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": isActive,
        "onKeypress": handleKeyPress
      }, [showArrow && icon, collapsible === 'header' ? _createVNode("span", {
        "onClick": handleItemClick,
        "class": "".concat(prefixClsValue, "-header-text")
      }, [header]) : header, extra && _createVNode("div", {
        "class": "".concat(prefixClsValue, "-extra")
      }, [extra])]), _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [!destroyInactivePanel || isActive ? panelContent : null];
        }
      })]);
    };
  }
});