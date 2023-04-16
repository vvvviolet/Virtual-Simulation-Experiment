"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spaceProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _useFlexGapSupport = _interopRequireDefault(require("../_util/hooks/useFlexGapSupport"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
var spaceProps = function spaceProps() {
  return {
    prefixCls: String,
    size: {
      type: [String, Number, Array]
    },
    direction: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')).def('horizontal'),
    align: _vueTypes.default.oneOf((0, _type.tuple)('start', 'end', 'center', 'baseline')),
    wrap: {
      type: Boolean,
      default: undefined
    }
  };
};
exports.spaceProps = spaceProps;
function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}
var Space = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASpace',
  props: spaceProps(),
  slots: ['split'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('space', props),
      prefixCls = _useConfigInject.prefixCls,
      space = _useConfigInject.space,
      directionConfig = _useConfigInject.direction;
    var supportFlexGap = (0, _useFlexGapSupport.default)();
    var size = (0, _vue.computed)(function () {
      var _ref2, _props$size, _space$value;
      return (_ref2 = (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : (_space$value = space.value) === null || _space$value === void 0 ? void 0 : _space$value.size) !== null && _ref2 !== void 0 ? _ref2 : 'small';
    });
    var horizontalSize = (0, _vue.ref)();
    var verticalSize = (0, _vue.ref)();
    (0, _vue.watch)(size, function () {
      var _map = (Array.isArray(size.value) ? size.value : [size.value, size.value]).map(function (item) {
        return getNumberSize(item);
      });
      var _map2 = (0, _slicedToArray2.default)(_map, 2);
      horizontalSize.value = _map2[0];
      verticalSize.value = _map2[1];
    }, {
      immediate: true
    });
    var mergedAlign = (0, _vue.computed)(function () {
      return props.align === undefined && props.direction === 'horizontal' ? 'center' : props.align;
    });
    var cn = (0, _vue.computed)(function () {
      var _classNames;
      return (0, _classNames2.default)(prefixCls.value, "".concat(prefixCls.value, "-").concat(props.direction), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), directionConfig.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-align-").concat(mergedAlign.value), mergedAlign.value), _classNames));
    });
    var marginDirection = (0, _vue.computed)(function () {
      return directionConfig.value === 'rtl' ? 'marginLeft' : 'marginRight';
    });
    var style = (0, _vue.computed)(function () {
      var gapStyle = {};
      if (supportFlexGap.value) {
        gapStyle.columnGap = "".concat(horizontalSize.value, "px");
        gapStyle.rowGap = "".concat(verticalSize.value, "px");
      }
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, gapStyle), props.wrap && {
        flexWrap: 'wrap',
        marginBottom: "".concat(-verticalSize.value, "px")
      });
    });
    return function () {
      var _slots$default, _slots$split;
      var wrap = props.wrap,
        _props$direction = props.direction,
        direction = _props$direction === void 0 ? 'horizontal' : _props$direction;
      var items = (0, _propsUtil.filterEmpty)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var len = items.length;
      if (len === 0) {
        return null;
      }
      var split = (_slots$split = slots.split) === null || _slots$split === void 0 ? void 0 : _slots$split.call(slots);
      var itemClassName = "".concat(prefixCls.value, "-item");
      var horizontalSizeVal = horizontalSize.value;
      var latestIndex = len - 1;
      return (0, _vue.createVNode)("div", {
        "class": cn.value,
        "style": style.value
      }, [items.map(function (child, index) {
        var itemStyle = {};
        if (!supportFlexGap.value) {
          if (direction === 'vertical') {
            if (index < latestIndex) {
              itemStyle = {
                marginBottom: "".concat(horizontalSizeVal / (split ? 2 : 1), "px")
              };
            }
          } else {
            itemStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, index < latestIndex && (0, _defineProperty2.default)({}, marginDirection.value, "".concat(horizontalSizeVal / (split ? 2 : 1), "px"))), wrap && {
              paddingBottom: "".concat(verticalSize.value, "px")
            });
          }
        }
        return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
          "class": itemClassName,
          "style": itemStyle
        }, [child]), index < latestIndex && split && (0, _vue.createVNode)("span", {
          "class": "".concat(itemClassName, "-split"),
          "style": itemStyle
        }, [split])]);
      })]);
    };
  }
});
var _default = (0, _type.withInstall)(Space);
exports.default = _default;