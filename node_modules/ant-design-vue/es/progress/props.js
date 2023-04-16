import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';
export var progressStatuses = tuple('normal', 'exception', 'active', 'success');
var ProgressType = tuple('line', 'circle', 'dashboard');
var ProgressSize = tuple('default', 'small');
export var progressProps = function progressProps() {
  return {
    prefixCls: String,
    type: PropTypes.oneOf(ProgressType),
    percent: Number,
    format: {
      type: Function
    },
    status: PropTypes.oneOf(progressStatuses),
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
    size: PropTypes.oneOf(ProgressSize),
    steps: Number,
    /** @deprecated Use `success` instead */
    successPercent: Number,
    title: String
  };
};