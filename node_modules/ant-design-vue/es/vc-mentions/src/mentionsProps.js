import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from '../../_util/vue-types';
import { initDefaultProps } from '../../_util/props-util';
import { filterOption as defaultFilterOption, validateSearch as defaultValidateSearch } from './util';
import { tuple } from '../../_util/type';
export var PlaceMent = tuple('top', 'bottom');
export var mentionsProps = {
  autofocus: {
    type: Boolean,
    default: undefined
  },
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  prefixCls: String,
  value: String,
  disabled: {
    type: Boolean,
    default: undefined
  },
  split: String,
  transitionName: String,
  placement: PropTypes.oneOf(PlaceMent),
  character: PropTypes.any,
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
export var vcMentionsProps = _objectSpread({}, mentionsProps);
export var defaultProps = {
  prefix: '@',
  split: ' ',
  rows: 1,
  validateSearch: defaultValidateSearch,
  filterOption: function filterOption() {
    return defaultFilterOption;
  }
};
export default initDefaultProps(vcMentionsProps, defaultProps);