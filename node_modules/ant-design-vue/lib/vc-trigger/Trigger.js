"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _contains = _interopRequireDefault(require("../vc-util/Dom/contains"));
var _raf = _interopRequireDefault(require("../_util/raf"));
var _propsUtil = require("../_util/props-util");
var _requestAnimationTimeout = require("../_util/requestAnimationTimeout");
var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));
var _Popup = _interopRequireDefault(require("./Popup"));
var _alignUtil = require("./utils/alignUtil");
var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));
var _Portal = _interopRequireDefault(require("../_util/Portal"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _vnode = require("../_util/vnode");
var _supportsPassive = _interopRequireDefault(require("../_util/supportsPassive"));
var _context = require("./context");
function noop() {}
function returnEmptyString() {
  return '';
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
var ALL_HANDLERS = ['onClick', 'onMousedown', 'onTouchstart', 'onMouseenter', 'onMouseleave', 'onFocus', 'onBlur', 'onContextmenu'];
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Trigger',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    action: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.string)]).def([]),
    showAction: _vueTypes.default.any.def([]),
    hideAction: _vueTypes.default.any.def([]),
    getPopupClassNameFromAlign: _vueTypes.default.any.def(returnEmptyString),
    onPopupVisibleChange: Function,
    afterPopupVisibleChange: _vueTypes.default.func.def(noop),
    popup: _vueTypes.default.any,
    popupStyle: {
      type: Object,
      default: undefined
    },
    prefixCls: _vueTypes.default.string.def('rc-trigger-popup'),
    popupClassName: _vueTypes.default.string.def(''),
    popupPlacement: String,
    builtinPlacements: _vueTypes.default.object,
    popupTransitionName: String,
    popupAnimation: _vueTypes.default.any,
    mouseEnterDelay: _vueTypes.default.number.def(0),
    mouseLeaveDelay: _vueTypes.default.number.def(0.1),
    zIndex: Number,
    focusDelay: _vueTypes.default.number.def(0),
    blurDelay: _vueTypes.default.number.def(0.15),
    getPopupContainer: Function,
    getDocument: _vueTypes.default.func.def(returnDocument),
    forceRender: {
      type: Boolean,
      default: undefined
    },
    destroyPopupOnHide: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    // onPopupAlign: PropTypes.func.def(noop),
    popupAlign: _vueTypes.default.object.def(function () {
      return {};
    }),
    popupVisible: {
      type: Boolean,
      default: undefined
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    maskTransitionName: String,
    maskAnimation: String,
    stretch: String,
    alignPoint: {
      type: Boolean,
      default: undefined
    },
    autoDestroy: {
      type: Boolean,
      default: false
    },
    mobile: Object,
    getTriggerDOMNode: Function,
    // portal context will change
    tryPopPortal: Boolean // no need reactive
  },
  setup: function setup(props) {
    var align = (0, _vue.computed)(function () {
      var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return (0, _alignUtil.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    });
    var _useInjectTrigger = (0, _context.useInjectTrigger)(props.tryPopPortal),
      setPortal = _useInjectTrigger.setPortal,
      popPortal = _useInjectTrigger.popPortal;
    var popupRef = (0, _vue.ref)(null);
    var setPopupRef = function setPopupRef(val) {
      popupRef.value = val;
    };
    return {
      popPortal: popPortal,
      setPortal: setPortal,
      vcTriggerContext: (0, _vue.inject)('vcTriggerContext', {}),
      popupRef: popupRef,
      setPopupRef: setPopupRef,
      triggerRef: (0, _vue.ref)(null),
      align: align,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: false,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data: function data() {
    var _this = this,
      _this$setPortal;
    var props = this.$props;
    var popupVisible;
    if (this.popupVisible !== undefined) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach(function (h) {
      _this["fire".concat(h)] = function (e) {
        _this.fireEvents(h, e);
      };
    });
    (_this$setPortal = this.setPortal) === null || _this$setPortal === void 0 ? void 0 : _this$setPortal.call(this, (0, _vue.createVNode)(_Portal.default, {
      "key": "portal",
      "getContainer": this.getContainer,
      "didUpdate": this.handlePortalUpdate
    }, {
      default: this.getComponent
    }));
    return {
      prevPopupVisible: popupVisible,
      sPopupVisible: popupVisible,
      point: null
    };
  },
  watch: {
    popupVisible: function popupVisible(val) {
      if (val !== undefined) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  created: function created() {
    (0, _vue.provide)('vcTriggerContext', {
      onPopupMouseDown: this.onPopupMouseDown
    });
    (0, _context.useProvidePortal)(this);
  },
  deactivated: function deactivated() {
    this.setPopupVisible(false);
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.updatedCal();
    });
  },
  updated: function updated() {
    var _this3 = this;
    this.$nextTick(function () {
      _this3.updatedCal();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
    _raf.default.cancel(this.attachId);
  },
  methods: {
    updatedCal: function updatedCal() {
      var props = this.$props;
      var state = this.$data;
      // We must listen to `mousedown` or `touchstart`, edge case:
      // https://github.com/ant-design/ant-design/issues/5804
      // https://github.com/react-component/calendar/issues/250
      // https://github.com/react-component/trigger/issues/50
      if (state.sPopupVisible) {
        var currentDocument;
        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props.getDocument(this.getRootDomNode());
          this.clickOutsideHandler = (0, _addEventListener.default)(currentDocument, 'mousedown', this.onDocumentClick);
        }
        // always hide on mobile
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
          this.touchOutsideHandler = (0, _addEventListener.default)(currentDocument, 'touchstart', this.onDocumentClick, _supportsPassive.default ? {
            passive: false
          } : false);
        }
        // close popup when trigger type contains 'onContextmenu' and document is scrolling.
        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
          this.contextmenuOutsideHandler1 = (0, _addEventListener.default)(currentDocument, 'scroll', this.onContextmenuClose);
        }
        // close popup when trigger type contains 'onContextmenu' and window is blur.
        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = (0, _addEventListener.default)(window, 'blur', this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter: function onMouseenter(e) {
      var mouseEnterDelay = this.$props.mouseEnterDelay;
      this.fireEvents('onMouseenter', e);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
    },
    onMouseMove: function onMouseMove(e) {
      this.fireEvents('onMousemove', e);
      this.setPoint(e);
    },
    onMouseleave: function onMouseleave(e) {
      this.fireEvents('onMouseleave', e);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function onPopupMouseenter() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function onPopupMouseleave(e) {
      var _this$popupRef;
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && (0, _contains.default)((_this$popupRef = this.popupRef) === null || _this$popupRef === void 0 ? void 0 : _this$popupRef.getElement(), e.relatedTarget)) {
        return;
      }
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onFocus: function onFocus(e) {
      this.fireEvents('onFocus', e);
      // incase focusin and focusout
      this.clearDelayTimer();
      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown: function onMousedown(e) {
      this.fireEvents('onMousedown', e);
      this.preClickTime = Date.now();
    },
    onTouchstart: function onTouchstart(e) {
      this.fireEvents('onTouchstart', e);
      this.preTouchTime = Date.now();
    },
    onBlur: function onBlur(e) {
      if (!(0, _contains.default)(e.target, e.relatedTarget || document.activeElement)) {
        this.fireEvents('onBlur', e);
        this.clearDelayTimer();
        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu: function onContextmenu(e) {
      e.preventDefault();
      this.fireEvents('onContextmenu', e);
      this.setPopupVisible(true, e);
    },
    onContextmenuClose: function onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick: function onClick(event) {
      this.fireEvents('onClick', event);
      // focus will trigger click
      if (this.focusTime) {
        var preTime;
        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }
        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }
        this.focusTime = 0;
      }
      this.preClickTime = 0;
      this.preTouchTime = 0;
      // Only prevent default when all the action is click.
      // https://github.com/ant-design/ant-design/issues/17043
      // https://github.com/ant-design/ant-design/issues/17291
      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }
      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }
      var nextVisible = !this.$data.sPopupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown: function onPopupMouseDown() {
      var _this4 = this;
      var _this$vcTriggerContex = this.vcTriggerContext,
        vcTriggerContext = _this$vcTriggerContex === void 0 ? {} : _this$vcTriggerContex;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(function () {
        _this4.hasPopupMouseDown = false;
      }, 0);
      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown.apply(vcTriggerContext, arguments);
      }
    },
    onDocumentClick: function onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }
      var target = event.target;
      var root = this.getRootDomNode();
      var popupNode = this.getPopupDomNode();
      if (
      // mousedown on the target should also close popup when action is contextMenu.
      // https://github.com/ant-design/ant-design/issues/29853
      (!(0, _contains.default)(root, target) || this.isContextMenuOnly()) && !(0, _contains.default)(popupNode, target) && !this.hasPopupMouseDown) {
        // https://github.com/vuejs/core/issues/4462
        // vue 动画bug导致 https://github.com/vueComponent/ant-design-vue/issues/5259，
        // 改成延时解决
        this.delaySetPopupVisible(false, 0.1);
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      var _this$popupRef2;
      // for test
      return ((_this$popupRef2 = this.popupRef) === null || _this$popupRef2 === void 0 ? void 0 : _this$popupRef2.getElement()) || null;
    },
    getRootDomNode: function getRootDomNode() {
      var getTriggerDOMNode = this.$props.getTriggerDOMNode;
      if (getTriggerDOMNode) {
        var domNode = (0, _propsUtil.findDOMNode)(this.triggerRef);
        return (0, _propsUtil.findDOMNode)(getTriggerDOMNode(domNode));
      }
      try {
        var _domNode = (0, _propsUtil.findDOMNode)(this.triggerRef);
        if (_domNode) {
          return _domNode;
        }
      } catch (err) {
        // Do nothing
      }
      return (0, _propsUtil.findDOMNode)(this);
    },
    handleGetPopupClassFromAlign: function handleGetPopupClassFromAlign(align) {
      var className = [];
      var props = this.$props;
      var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls,
        alignPoint = props.alignPoint,
        getPopupClassNameFromAlign = props.getPopupClassNameFromAlign;
      if (popupPlacement && builtinPlacements) {
        className.push((0, _alignUtil.getAlignPopupClassName)(builtinPlacements, prefixCls, align, alignPoint));
      }
      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }
      return className.join(' ');
    },
    getPopupAlign: function getPopupAlign() {
      var props = this.$props;
      var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return (0, _alignUtil.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    },
    getComponent: function getComponent() {
      var _this5 = this;
      var mouseProps = {};
      if (this.isMouseEnterToShow()) {
        mouseProps.onMouseenter = this.onPopupMouseenter;
      }
      if (this.isMouseLeaveToHide()) {
        mouseProps.onMouseleave = this.onPopupMouseleave;
      }
      mouseProps.onMousedown = this.onPopupMouseDown;
      mouseProps[_supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart'] = this.onPopupMouseDown;
      var handleGetPopupClassFromAlign = this.handleGetPopupClassFromAlign,
        getRootDomNode = this.getRootDomNode,
        getContainer = this.getContainer,
        $attrs = this.$attrs;
      var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        destroyPopupOnHide = _this$$props.destroyPopupOnHide,
        popupClassName = _this$$props.popupClassName,
        popupAnimation = _this$$props.popupAnimation,
        popupTransitionName = _this$$props.popupTransitionName,
        popupStyle = _this$$props.popupStyle,
        mask = _this$$props.mask,
        maskAnimation = _this$$props.maskAnimation,
        maskTransitionName = _this$$props.maskTransitionName,
        zIndex = _this$$props.zIndex,
        stretch = _this$$props.stretch,
        alignPoint = _this$$props.alignPoint,
        mobile = _this$$props.mobile,
        forceRender = _this$$props.forceRender;
      var _this$$data = this.$data,
        sPopupVisible = _this$$data.sPopupVisible,
        point = _this$$data.point;
      var popupProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint ? point : null,
        align: this.align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign,
        stretch: stretch,
        getRootDomNode: getRootDomNode,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        getContainer: getContainer,
        class: popupClassName,
        style: popupStyle,
        onAlign: $attrs.onPopupAlign || noop
      }, mouseProps), {}, {
        ref: this.setPopupRef,
        mobile: mobile,
        forceRender: forceRender
      });
      return (0, _vue.createVNode)(_Popup.default, popupProps, {
        default: this.$slots.popup || function () {
          return (0, _propsUtil.getComponent)(_this5, 'popup');
        }
      });
    },
    attachParent: function attachParent(popupContainer) {
      var _this6 = this;
      _raf.default.cancel(this.attachId);
      var _this$$props2 = this.$props,
        getPopupContainer = _this$$props2.getPopupContainer,
        getDocument = _this$$props2.getDocument;
      var domNode = this.getRootDomNode();
      var mountNode;
      if (!getPopupContainer) {
        mountNode = getDocument(this.getRootDomNode()).body;
      } else if (domNode || getPopupContainer.length === 0) {
        // Compatible for legacy getPopupContainer with domNode argument.
        // If no need `domNode` argument, will call directly.
        // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
        mountNode = getPopupContainer(domNode);
      }
      if (mountNode) {
        mountNode.appendChild(popupContainer);
      } else {
        // Retry after frame render in case parent not ready
        this.attachId = (0, _raf.default)(function () {
          _this6.attachParent(popupContainer);
        });
      }
    },
    getContainer: function getContainer() {
      var props = this.$props;
      var getDocument = props.getDocument;
      var popupContainer = getDocument(this.getRootDomNode()).createElement('div');
      // Make sure default popup container will never cause scrollbar appearing
      // https://github.com/react-component/trigger/issues/41
      popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      this.attachParent(popupContainer);
      return popupContainer;
    },
    setPopupVisible: function setPopupVisible(sPopupVisible, event) {
      var alignPoint = this.alignPoint,
        prevPopupVisible = this.sPopupVisible,
        onPopupVisibleChange = this.onPopupVisibleChange;
      this.clearDelayTimer();
      if (prevPopupVisible !== sPopupVisible) {
        if (!(0, _propsUtil.hasProp)(this, 'popupVisible')) {
          this.setState({
            sPopupVisible: sPopupVisible,
            prevPopupVisible: prevPopupVisible
          });
        }
        onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
      }
      // Always record the point position since mouseEnterDelay will delay the show
      if (alignPoint && event && sPopupVisible) {
        this.setPoint(event);
      }
    },
    setPoint: function setPoint(point) {
      var alignPoint = this.$props.alignPoint;
      if (!alignPoint || !point) return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    handlePortalUpdate: function handlePortalUpdate() {
      if (this.prevPopupVisible !== this.sPopupVisible) {
        this.afterPopupVisibleChange(this.sPopupVisible);
      }
    },
    delaySetPopupVisible: function delaySetPopupVisible(visible, delayS, event) {
      var _this7 = this;
      var delay = delayS * 1000;
      this.clearDelayTimer();
      if (delay) {
        var point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = (0, _requestAnimationTimeout.requestAnimationTimeout)(function () {
          _this7.setPopupVisible(visible, point);
          _this7.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    },
    clearDelayTimer: function clearDelayTimer() {
      if (this.delayTimer) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }
      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains: function createTwoChains(event) {
      var fn = function fn() {};
      var events = (0, _propsUtil.getEvents)(this);
      if (this.childOriginEvents[event] && events[event]) {
        return this["fire".concat(event)];
      }
      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow: function isClickToShow() {
      var _this$$props3 = this.$props,
        action = _this$$props3.action,
        showAction = _this$$props3.showAction;
      return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
    },
    isContextMenuOnly: function isContextMenuOnly() {
      var action = this.$props.action;
      return action === 'contextmenu' || action.length === 1 && action[0] === 'contextmenu';
    },
    isContextmenuToShow: function isContextmenuToShow() {
      var _this$$props4 = this.$props,
        action = _this$$props4.action,
        showAction = _this$$props4.showAction;
      return action.indexOf('contextmenu') !== -1 || showAction.indexOf('contextmenu') !== -1;
    },
    isClickToHide: function isClickToHide() {
      var _this$$props5 = this.$props,
        action = _this$$props5.action,
        hideAction = _this$$props5.hideAction;
      return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
    },
    isMouseEnterToShow: function isMouseEnterToShow() {
      var _this$$props6 = this.$props,
        action = _this$$props6.action,
        showAction = _this$$props6.showAction;
      return action.indexOf('hover') !== -1 || showAction.indexOf('mouseenter') !== -1;
    },
    isMouseLeaveToHide: function isMouseLeaveToHide() {
      var _this$$props7 = this.$props,
        action = _this$$props7.action,
        hideAction = _this$$props7.hideAction;
      return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseleave') !== -1;
    },
    isFocusToShow: function isFocusToShow() {
      var _this$$props8 = this.$props,
        action = _this$$props8.action,
        showAction = _this$$props8.showAction;
      return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
    },
    isBlurToHide: function isBlurToHide() {
      var _this$$props9 = this.$props,
        action = _this$$props9.action,
        hideAction = _this$$props9.hideAction;
      return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
    },
    forcePopupAlign: function forcePopupAlign() {
      if (this.$data.sPopupVisible) {
        var _this$popupRef3;
        (_this$popupRef3 = this.popupRef) === null || _this$popupRef3 === void 0 ? void 0 : _this$popupRef3.forceAlign();
      }
    },
    fireEvents: function fireEvents(type, e) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e);
      }
      var event = this.$props[type] || this.$attrs[type];
      if (event) {
        event(e);
      }
    },
    close: function close() {
      this.setPopupVisible(false);
    }
  },
  render: function render() {
    var _this8 = this;
    var $attrs = this.$attrs;
    var children = (0, _propsUtil.filterEmpty)((0, _propsUtil.getSlot)(this));
    var alignPoint = this.$props.alignPoint;
    var child = children[0];
    this.childOriginEvents = (0, _propsUtil.getEvents)(child);
    var newChildProps = {
      key: 'trigger'
    };
    if (this.isContextmenuToShow()) {
      newChildProps.onContextmenu = this.onContextmenu;
    } else {
      newChildProps.onContextmenu = this.createTwoChains('onContextmenu');
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMousedown = this.onMousedown;
      newChildProps[_supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart'] = this.onTouchstart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMousedown = this.createTwoChains('onMousedown');
      newChildProps[_supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart'] = this.createTwoChains('onTouchstart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseenter = this.onMouseenter;
      if (alignPoint) {
        newChildProps.onMousemove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseenter = this.createTwoChains('onMouseenter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseleave = this.onMouseleave;
    } else {
      newChildProps.onMouseleave = this.createTwoChains('onMouseleave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = function (e) {
        if (e && (!e.relatedTarget || !(0, _contains.default)(e.target, e.relatedTarget))) {
          _this8.createTwoChains('onBlur')(e);
        }
      };
    }
    var childrenClassName = (0, _classNames.default)(child && child.props && child.props.class, $attrs.class);
    if (childrenClassName) {
      newChildProps.class = childrenClassName;
    }
    var trigger = (0, _vnode.cloneElement)(child, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, newChildProps), {}, {
      ref: 'triggerRef'
    }), true, true);
    if (this.popPortal) {
      return trigger;
    } else {
      var portal = (0, _vue.createVNode)(_Portal.default, {
        "key": "portal",
        "getContainer": this.getContainer,
        "didUpdate": this.handlePortalUpdate
      }, {
        default: this.getComponent
      });
      return (0, _vue.createVNode)(_vue.Fragment, null, [portal, trigger]);
    }
  }
});
exports.default = _default;