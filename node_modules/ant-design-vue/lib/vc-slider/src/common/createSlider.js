"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSlider;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));
var _addEventListener = _interopRequireDefault(require("../../../vc-util/Dom/addEventListener"));
var _warning = _interopRequireDefault(require("../../../_util/warning"));
var _propsUtil = require("../../../_util/props-util");
var _Steps = _interopRequireDefault(require("./Steps"));
var _Marks = _interopRequireDefault(require("./Marks"));
var _Handle = _interopRequireDefault(require("../Handle"));
var utils = _interopRequireWildcard(require("../utils"));
var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));
var _supportsPassive = _interopRequireDefault(require("../../../_util/supportsPassive"));
var _excluded = ["index", "directives", "className", "style"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function noop() {}
function createSlider(Component) {
  // const displayName = `ComponentEnhancer(${Component.displayName})`
  var propTypes = {
    id: String,
    min: Number,
    max: Number,
    step: Number,
    marks: _vueTypes.default.object,
    included: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    disabled: {
      type: Boolean,
      default: undefined
    },
    handle: Function,
    dots: {
      type: Boolean,
      default: undefined
    },
    vertical: {
      type: Boolean,
      default: undefined
    },
    reverse: {
      type: Boolean,
      default: undefined
    },
    minimumTrackStyle: _vueTypes.default.object,
    maximumTrackStyle: _vueTypes.default.object,
    handleStyle: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.arrayOf(_vueTypes.default.object)]),
    trackStyle: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.arrayOf(_vueTypes.default.object)]),
    railStyle: _vueTypes.default.object,
    dotStyle: _vueTypes.default.object,
    activeDotStyle: _vueTypes.default.object,
    autofocus: {
      type: Boolean,
      default: undefined
    },
    draggableTrack: {
      type: Boolean,
      default: undefined
    }
  };
  return (0, _vue.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: 'CreateSlider',
    mixins: [_BaseMixin.default, Component],
    inheritAttrs: false,
    slots: ['mark'],
    props: (0, _propsUtil.initDefaultProps)(propTypes, {
      prefixCls: 'rc-slider',
      min: 0,
      max: 100,
      step: 1,
      marks: {},
      included: true,
      disabled: false,
      dots: false,
      vertical: false,
      reverse: false,
      trackStyle: [{}],
      handleStyle: [{}],
      railStyle: {},
      dotStyle: {},
      activeDotStyle: {}
    }),
    emits: ['change', 'blur', 'focus'],
    data: function data() {
      var step = this.step,
        max = this.max,
        min = this.min;
      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line
      (0, _warning.default)(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
      this.handlesRefs = {};
      return {};
    },
    mounted: function mounted() {
      var _this = this;
      this.$nextTick(function () {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        _this.document = _this.sliderRef && _this.sliderRef.ownerDocument;
        // this.setHandleRefs()
        var autofocus = _this.autofocus,
          disabled = _this.disabled;
        if (autofocus && !disabled) {
          _this.focus();
        }
      });
    },
    beforeUnmount: function beforeUnmount() {
      var _this2 = this;
      this.$nextTick(function () {
        // if (super.componentWillUnmount) super.componentWillUnmount()
        _this2.removeDocumentEvents();
      });
    },
    methods: {
      defaultHandle: function defaultHandle(_ref) {
        var index = _ref.index,
          directives = _ref.directives,
          className = _ref.className,
          style = _ref.style,
          restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
        delete restProps.dragging;
        if (restProps.value === null) {
          return null;
        }
        var handleProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
          class: className,
          style: style,
          key: index
        });
        return (0, _vue.createVNode)(_Handle.default, handleProps, null);
      },
      onDown: function onDown(e, position) {
        var p = position;
        var _this$$props = this.$props,
          draggableTrack = _this$$props.draggableTrack,
          isVertical = _this$$props.vertical;
        var bounds = this.$data.bounds;
        var value = draggableTrack && this.positionGetValue ? this.positionGetValue(p) || [] : [];
        var inPoint = utils.isEventFromHandle(e, this.handlesRefs);
        this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function (n, i) {
          var v = !i ? n >= bounds[i] : true;
          return i === value.length - 1 ? n <= bounds[i] : v;
        }).some(function (c) {
          return !c;
        });
        if (this.dragTrack) {
          this.dragOffset = p;
          this.startBounds = (0, _toConsumableArray2.default)(bounds);
        } else {
          if (!inPoint) {
            this.dragOffset = 0;
          } else {
            var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
            this.dragOffset = p - handlePosition;
            p = handlePosition;
          }
          this.onStart(p);
        }
      },
      onMouseDown: function onMouseDown(e) {
        if (e.button !== 0) {
          return;
        }
        this.removeDocumentEvents();
        var isVertical = this.$props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        this.onDown(e, position);
        this.addDocumentMouseEvents();
      },
      onTouchStart: function onTouchStart(e) {
        if (utils.isNotTouchEvent(e)) return;
        var isVertical = this.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        this.onDown(e, position);
        this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      },
      onFocus: function onFocus(e) {
        var vertical = this.vertical;
        if (utils.isEventFromHandle(e, this.handlesRefs) && !this.dragTrack) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          this.dragOffset = 0;
          this.onStart(handlePosition);
          utils.pauseEvent(e);
          this.$emit('focus', e);
        }
      },
      onBlur: function onBlur(e) {
        if (!this.dragTrack) {
          this.onEnd();
        }
        this.$emit('blur', e);
      },
      onMouseUp: function onMouseUp() {
        if (this.handlesRefs[this.prevMovedHandleIndex]) {
          this.handlesRefs[this.prevMovedHandleIndex].clickFocus();
        }
      },
      onMouseMove: function onMouseMove(e) {
        if (!this.sliderRef) {
          this.onEnd();
          return;
        }
        var position = utils.getMousePosition(this.vertical, e);
        this.onMove(e, position - this.dragOffset, this.dragTrack, this.startBounds);
      },
      onTouchMove: function onTouchMove(e) {
        if (utils.isNotTouchEvent(e) || !this.sliderRef) {
          this.onEnd();
          return;
        }
        var position = utils.getTouchPosition(this.vertical, e);
        this.onMove(e, position - this.dragOffset, this.dragTrack, this.startBounds);
      },
      onKeyDown: function onKeyDown(e) {
        if (this.sliderRef && utils.isEventFromHandle(e, this.handlesRefs)) {
          this.onKeyboard(e);
        }
      },
      onClickMarkLabel: function onClickMarkLabel(e, value) {
        var _this3 = this;
        e.stopPropagation();
        this.onChange({
          sValue: value
        });
        this.setState({
          sValue: value
        }, function () {
          return _this3.onEnd(true);
        });
      },
      getSliderStart: function getSliderStart() {
        var slider = this.sliderRef;
        var vertical = this.vertical,
          reverse = this.reverse;
        var rect = slider.getBoundingClientRect();
        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }
        return window.pageXOffset + (reverse ? rect.right : rect.left);
      },
      getSliderLength: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }
        var coords = slider.getBoundingClientRect();
        return this.vertical ? coords.height : coords.width;
      },
      addDocumentTouchEvents: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = (0, _addEventListener.default)(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = (0, _addEventListener.default)(this.document, 'touchend', this.onEnd);
      },
      addDocumentMouseEvents: function addDocumentMouseEvents() {
        this.onMouseMoveListener = (0, _addEventListener.default)(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = (0, _addEventListener.default)(this.document, 'mouseup', this.onEnd);
      },
      removeDocumentEvents: function removeDocumentEvents() {
        /* eslint-disable no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      },
      focus: function focus() {
        var _this$handlesRefs$;
        if (this.$props.disabled) {
          return;
        }
        (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
      },
      blur: function blur() {
        var _this4 = this;
        if (this.$props.disabled) {
          return;
        }
        Object.keys(this.handlesRefs).forEach(function (key) {
          var _this4$handlesRefs$ke, _this4$handlesRefs$ke2;
          (_this4$handlesRefs$ke = _this4.handlesRefs[key]) === null || _this4$handlesRefs$ke === void 0 ? void 0 : (_this4$handlesRefs$ke2 = _this4$handlesRefs$ke.blur) === null || _this4$handlesRefs$ke2 === void 0 ? void 0 : _this4$handlesRefs$ke2.call(_this4$handlesRefs$ke);
        });
      },
      calcValue: function calcValue(offset) {
        var vertical = this.vertical,
          min = this.min,
          max = this.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      },
      calcValueByPos: function calcValueByPos(position) {
        var sign = this.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      },
      calcOffset: function calcOffset(value) {
        var min = this.min,
          max = this.max;
        var ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
      },
      saveSlider: function saveSlider(slider) {
        this.sliderRef = slider;
      },
      saveHandle: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    },
    render: function render() {
      var _classNames;
      var prefixCls = this.prefixCls,
        marks = this.marks,
        dots = this.dots,
        step = this.step,
        included = this.included,
        disabled = this.disabled,
        vertical = this.vertical,
        reverse = this.reverse,
        min = this.min,
        max = this.max,
        maximumTrackStyle = this.maximumTrackStyle,
        railStyle = this.railStyle,
        dotStyle = this.dotStyle,
        activeDotStyle = this.activeDotStyle,
        id = this.id;
      var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
      var _this$renderSlider = this.renderSlider(),
        tracks = _this$renderSlider.tracks,
        handles = _this$renderSlider.handles;
      var sliderClassName = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-vertical"), vertical), _classNames));
      var markProps = {
        vertical: vertical,
        marks: marks,
        included: included,
        lowerBound: this.getLowerBound(),
        upperBound: this.getUpperBound(),
        max: max,
        min: min,
        reverse: reverse,
        class: "".concat(prefixCls, "-mark"),
        onClickLabel: disabled ? noop : this.onClickMarkLabel
      };
      var touchEvents = (0, _defineProperty2.default)({}, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', disabled ? noop : this.onTouchStart);
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "id": id,
        "ref": this.saveSlider,
        "tabindex": "-1",
        "class": sliderClassName
      }, touchEvents), {}, {
        "onMousedown": disabled ? noop : this.onMouseDown,
        "onMouseup": disabled ? noop : this.onMouseUp,
        "onKeydown": disabled ? noop : this.onKeyDown,
        "onFocus": disabled ? noop : this.onFocus,
        "onBlur": disabled ? noop : this.onBlur,
        "style": style
      }), [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-rail"),
        "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, maximumTrackStyle), railStyle)
      }, null), tracks, (0, _vue.createVNode)(_Steps.default, {
        "prefixCls": prefixCls,
        "vertical": vertical,
        "reverse": reverse,
        "marks": marks,
        "dots": dots,
        "step": step,
        "included": included,
        "lowerBound": this.getLowerBound(),
        "upperBound": this.getUpperBound(),
        "max": max,
        "min": min,
        "dotStyle": dotStyle,
        "activeDotStyle": activeDotStyle
      }, null), handles, (0, _vue.createVNode)(_Marks.default, markProps, {
        mark: this.$slots.mark
      }), (0, _propsUtil.getSlot)(this)]);
    }
  });
}