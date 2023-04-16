"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleProps = exports.default = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _type = require("../_util/type");
var _warning = _interopRequireDefault(require("../_util/warning"));
var _Base = _interopRequireWildcard(require("./Base"));
var _excluded = ["level"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TITLE_ELE_LIST = (0, _type.tupleNum)(1, 2, 3, 4, 5);
var titleProps = function titleProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)((0, _Base.baseProps)(), ['component', 'strong'])), {}, {
    level: Number
  });
};
exports.titleProps = titleProps;
var Title = function Title(props, _ref) {
  var slots = _ref.slots,
    attrs = _ref.attrs;
  var _props$level = props.level,
    level = _props$level === void 0 ? 1 : _props$level,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var component;
  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
    (0, _warning.default)(false, 'Typography', 'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value.');
    component = 'h1';
  }
  var titleProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
    component: component
  }, attrs);
  return (0, _vue.createVNode)(_Base.default, titleProps, slots);
};
Title.displayName = 'ATypographyTitle';
Title.inheritAttrs = false;
Title.props = titleProps();
var _default = Title;
exports.default = _default;