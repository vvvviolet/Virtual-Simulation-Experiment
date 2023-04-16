"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkProps = exports.default = void 0;
var _vue = require("vue");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _Base = _interopRequireWildcard(require("./Base"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _excluded = ["ellipsis", "rel"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var linkProps = function linkProps() {
  return (0, _omit.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _Base.baseProps)()), {}, {
    ellipsis: {
      type: Boolean,
      default: undefined
    }
  }), ['component']);
};
exports.linkProps = linkProps;
var Link = function Link(props, _ref) {
  var slots = _ref.slots,
    attrs = _ref.attrs;
  var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
    ellipsis = _props$attrs.ellipsis,
    rel = _props$attrs.rel,
    restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
  (0, _warning.default)((0, _typeof2.default)(ellipsis) !== 'object', 'Typography.Link', '`ellipsis` only supports boolean value.');
  var mergedProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
    ellipsis: !!ellipsis,
    component: 'a'
  });
  // https://github.com/ant-design/ant-design/issues/26622
  // @ts-ignore
  delete mergedProps.navigate;
  return (0, _vue.createVNode)(_Base.default, mergedProps, slots);
};
Link.displayName = 'ATypographyLink';
Link.inheritAttrs = false;
Link.props = linkProps();
var _default = Link;
exports.default = _default;