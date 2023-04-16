"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _empty = _interopRequireDefault(require("./empty"));
var _simple = _interopRequireDefault(require("./simple"));
var _propsUtil = require("../_util/props-util");
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _excluded = ["image", "description", "imageStyle", "class"];
var defaultEmptyImg = (0, _vue.createVNode)(_empty.default, null, null);
var simpleEmptyImg = (0, _vue.createVNode)(_simple.default, null, null);
var Empty = function Empty(props, _ref) {
  var _slots$description;
  var _ref$slots = _ref.slots,
    slots = _ref$slots === void 0 ? {} : _ref$slots,
    attrs = _ref.attrs;
  var _useConfigInject = (0, _useConfigInject2.default)('empty', props),
    direction = _useConfigInject.direction,
    prefixClsRef = _useConfigInject.prefixCls;
  var prefixCls = prefixClsRef.value;
  var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
    _props$attrs$image = _props$attrs.image,
    image = _props$attrs$image === void 0 ? defaultEmptyImg : _props$attrs$image,
    _props$attrs$descript = _props$attrs.description,
    description = _props$attrs$descript === void 0 ? ((_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots)) || undefined : _props$attrs$descript,
    imageStyle = _props$attrs.imageStyle,
    _props$attrs$class = _props$attrs.class,
    className = _props$attrs$class === void 0 ? '' : _props$attrs$class,
    restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
  return (0, _vue.createVNode)(_LocaleReceiver.default, {
    "componentName": "Empty",
    "children": function children(locale) {
      var _classNames;
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;
      if (typeof image === 'string') {
        imageNode = (0, _vue.createVNode)("img", {
          "alt": alt,
          "src": image
        }, null);
      } else {
        imageNode = image;
      }
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "class": (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _classNames))
      }, restProps), [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-image"),
        "style": imageStyle
      }, [imageNode]), des && (0, _vue.createVNode)("p", {
        "class": "".concat(prefixCls, "-description")
      }, [des]), slots.default && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [(0, _propsUtil.filterEmpty)(slots.default())])]);
    }
  }, null);
};
Empty.displayName = 'AEmpty';
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
Empty.inheritAttrs = false;
Empty.props = {
  prefixCls: String,
  image: _vueTypes.default.any,
  description: _vueTypes.default.any,
  imageStyle: {
    type: Object,
    default: undefined
  }
};
var _default = (0, _type.withInstall)(Empty);
exports.default = _default;