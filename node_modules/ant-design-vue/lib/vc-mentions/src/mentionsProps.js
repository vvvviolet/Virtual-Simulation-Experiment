"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vcMentionsProps = exports.mentionsProps = exports.defaultProps = exports.default = exports.PlaceMent = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var _propsUtil = require("../../_util/props-util");
var _util = require("./util");
var _type = require("../../_util/type");
var PlaceMent = (0, _type.tuple)('top', 'bottom');
exports.PlaceMent = PlaceMent;
var mentionsProps = {
  autofocus: {
    type: Boolean,
    default: undefined
  },
  prefix: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.string)]),
  prefixCls: String,
  value: String,
  disabled: {
    type: Boolean,
    default: undefined
  },
  split: String,
  transitionName: String,
  placement: _vueTypes.default.oneOf(PlaceMent),
  character: _vueTypes.default.any,
  characterRender: Function,
  filterOption: {
    type: [Boolean, Function]
  },
  validateSearch: Function,
  getPopupContainer: {
    type: Function
  },
  options: {
    type: Array,
    default: function _default() {
      return undefined;
    }
  },
  loading: {
    type: Boolean,
    default: undefined
  },
  rows: [Number, String],
  direction: {
    type: String
  }
};
exports.mentionsProps = mentionsProps;
var vcMentionsProps = (0, _objectSpread2.default)({}, mentionsProps);
exports.vcMentionsProps = vcMentionsProps;
var defaultProps = {
  prefix: '@',
  split: ' ',
  rows: 1,
  validateSearch: _util.validateSearch,
  filterOption: function filterOption() {
    return _util.filterOption;
  }
};
exports.defaultProps = defaultProps;
var _default2 = (0, _propsUtil.initDefaultProps)(vcMentionsProps, defaultProps);
exports.default = _default2;