import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["index", "directives", "className", "style"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import classNames from '../../../_util/classNames';
import PropTypes from '../../../_util/vue-types';
import addEventListener from '../../../vc-util/Dom/addEventListener';
import warning from '../../../_util/warning';
import { initDefaultProps, getSlot } from '../../../_util/props-util';
import Steps from './Steps';
import Marks from './Marks';
import Handle from '../Handle';
import * as utils from '../utils';
import BaseMixin from '../../../_util/BaseMixin';
import supportsPassive from '../../../_util/supportsPassive';
function noop() {}
export default function createSlider(Component) {
  // const displayName = `ComponentEnhancer(${Component.displayName})`
  var propTypes = {
    id: String,
    min: Number,
    max: Number,
    step: Number,
    marks: PropTypes.object,
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
    minimumTrackStyle: PropTypes.object,
    maximumTrackStyle: PropTypes.object,
    handleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
    trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
    railStyle: PropTypes.object,
    dotStyle: PropTypes.object,
    activeDotStyle: PropTypes.object,
    autofocus: {
      type: Boolean,
      default: undefined
    },
    draggableTrack: {
      type: Boolean,
      default: undefined
    }
  };
  return defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: 'CreateSlider',
    mixins: [BaseMixin, Component],
    inheritAttrs: false,
    slots: ['mark'],
    props: initDefaultProps(propTypes, {
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
      warning(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
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
          restProps = _objectWithoutProperties(_ref, _excluded);
        delete restProps.dragging;
        if (restProps.value === null) {
          return null;
        }
        var handleProps = _objectSpread(_objectSpread({}, restProps), {}, {
          class: className,
          style: style,
          key: index
        });
        return _createVNode(Handle, handleProps, null);
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
          this.startBounds = _toConsumableArray(bounds);
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
        this.onTouchMoveListener = addEventListener(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = addEventListener(this.document, 'touchend', this.onEnd);
      },
      addDocumentMouseEvents: function addDocumentMouseEvents() {
        this.onMouseMoveListener = addEventListener(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = addEventListener(this.document, 'mouseup', this.onEnd);
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
      var sliderClassName = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), vertical), _classNames));
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
      var touchEvents = _defineProperty({}, supportsPassive ? 'onTouchstartPassive' : 'onTouchstart', disabled ? noop : this.onTouchStart);
      return _createVNode("div", _objectSpread(_objectSpread({
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
      }), [_createVNode("div", {
        "class": "".concat(prefixCls, "-rail"),
        "style": _objectSpread(_objectSpread({}, maximumTrackStyle), railStyle)
      }, null), tracks, _createVNode(Steps, {
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
      }, null), handles, _createVNode(Marks, markProps, {
        mark: this.$slots.mark
      }), getSlot(this)]);
    }
  });
}