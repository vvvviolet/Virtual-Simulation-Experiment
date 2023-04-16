"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeletonButtonProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _propsUtil = require("../_util/props-util");
var _Element = _interopRequireWildcard(require("./Element"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var skeletonButtonProps = function skeletonButtonProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _Element.skeletonElementProps)()), {}, {
    size: String,
    block: Boolean
  });
};
exports.skeletonButtonProps = skeletonButtonProps;
var SkeletonButton = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASkeletonButton',
  props: (0, _propsUtil.initDefaultProps)(skeletonButtonProps(), {
    size: 'default'
  }),
  setup: function setup(props) {
    var _useConfigInject = (0, _useConfigInject2.default)('skeleton', props),
      prefixCls = _useConfigInject.prefixCls;
    var cls = (0, _vue.computed)(function () {
      var _classNames;
      return (0, _classNames2.default)(prefixCls.value, "".concat(prefixCls.value, "-element"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-active"), props.active), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-block"), props.block), _classNames));
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": cls.value
      }, [(0, _vue.createVNode)(_Element.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        "prefixCls": "".concat(prefixCls.value, "-button")
      }), null)]);
    };
  }
});
var _default = SkeletonButton;
exports.default = _default;