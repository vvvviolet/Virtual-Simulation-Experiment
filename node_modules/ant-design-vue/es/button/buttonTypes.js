import PropTypes from '../_util/vue-types';
export function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type: type
  };
}
export var buttonProps = function buttonProps() {
  return {
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: 'button'
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function _default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    ghost: {
      type: Boolean,
      default: undefined
    },
    block: {
      type: Boolean,
      default: undefined
    },
    danger: {
      type: Boolean,
      default: undefined
    },
    icon: PropTypes.any,
    href: String,
    target: String,
    title: String,
    onClick: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  };
};
export default buttonProps;