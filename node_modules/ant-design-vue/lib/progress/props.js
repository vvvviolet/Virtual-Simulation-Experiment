"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressStatuses = exports.progressProps = void 0;
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _type = require("../_util/type");
var progressStatuses = (0, _type.tuple)('normal', 'exception', 'active', 'success');
exports.progressStatuses = progressStatuses;
var ProgressType = (0, _type.tuple)('line', 'circle', 'dashboard');
var ProgressSize = (0, _type.tuple)('default', 'small');
var progressProps = function progressProps() {
  return {
    prefixCls: String,
    type: _vueTypes.default.oneOf(ProgressType),
    percent: Number,
    format: {
      type: Function
    },
    status: _vueTypes.default.oneOf(progressStatuses),
    showInfo: {
      type: Boolean,
      default: undefined
    },
    strokeWidth: Number,
    strokeLinecap: String,
    strokeColor: {
      type: [String, Object],
      default: undefined
    },
    trailColor: String,
    width: Number,
    success: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    gapDegree: Number,
    gapPosition: String,
    size: _vueTypes.default.oneOf(ProgressSize),
    steps: Number,
    /** @deprecated Use `success` instead */
    successPercent: Number,
    title: String
  };
};
exports.progressProps = progressProps;