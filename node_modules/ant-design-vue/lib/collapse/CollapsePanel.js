"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "collapsePanelProps", {
  enumerable: true,
  get: function get() {
    return _commonProps.collapsePanelProps;
  }
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _PanelContent = _interopRequireDefault(require("./PanelContent"));
var _propsUtil = require("../_util/props-util");
var _commonProps = require("./commonProps");
var _transition = _interopRequireDefault(require("../_util/transition"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ACollapsePanel',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _commonProps.collapsePanelProps)(), {
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
    (0, _devWarning.default)(props.disabled === undefined, 'Collapse.Panel', '`disabled` is deprecated. Please use `collapsible="disabled"` instead.');
    var _useConfigInject = (0, _useConfigInject2.default)('collapse', props),
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
      var headerCls = (0, _classNames3.default)("".concat(prefixClsValue, "-header"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, headerClass, headerClass), (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-header-collapsible-only"), collapsible === 'header'), _classNames));
      var itemCls = (0, _classNames3.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixClsValue, "-item"), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixClsValue, "-item-active"), isActive), (0, _defineProperty2.default)(_classNames2, "".concat(prefixClsValue, "-item-disabled"), disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixClsValue, "-no-arrow"), !showArrow), (0, _defineProperty2.default)(_classNames2, "".concat(attrs.class), !!attrs.class), _classNames2));
      var icon = (0, _vue.createVNode)("i", {
        "class": "arrow"
      }, null);
      if (showArrow && typeof expandIcon === 'function') {
        icon = expandIcon(props);
      }
      var panelContent = (0, _vue.withDirectives)((0, _vue.createVNode)(_PanelContent.default, {
        "prefixCls": prefixClsValue,
        "isActive": isActive,
        "forceRender": forceRender,
        "role": accordion ? 'tabpanel' : null
      }, {
        default: slots.default
      }), [[_vue.vShow, isActive]]);
      var transitionProps = (0, _objectSpread2.default)({
        appear: false,
        css: false
      }, openAnimation);
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "class": itemCls
      }), [(0, _vue.createVNode)("div", {
        "class": headerCls,
        "onClick": function onClick() {
          return collapsible !== 'header' && handleItemClick();
        },
        "role": accordion ? 'tab' : 'button',
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": isActive,
        "onKeypress": handleKeyPress
      }, [showArrow && icon, collapsible === 'header' ? (0, _vue.createVNode)("span", {
        "onClick": handleItemClick,
        "class": "".concat(prefixClsValue, "-header-text")
      }, [header]) : header, extra && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixClsValue, "-extra")
      }, [extra])]), (0, _vue.createVNode)(_transition.default, transitionProps, {
        default: function _default() {
          return [!destroyInactivePanel || isActive ? panelContent : null];
        }
      })]);
    };
  }
});
exports.default = _default2;