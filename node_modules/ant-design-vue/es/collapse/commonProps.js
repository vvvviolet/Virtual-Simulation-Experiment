import { tuple } from '../_util/type';
import PropTypes from '../_util/vue-types';
var collapseProps = function collapseProps() {
  return {
    prefixCls: String,
    activeKey: {
      type: [Array, Number, String]
    },
    defaultActiveKey: {
      type: [Array, Number, String]
    },
    accordion: {
      type: Boolean,
      default: undefined
    },
    destroyInactivePanel: {
      type: Boolean,
      default: undefined
    },
    bordered: {
      type: Boolean,
      default: undefined
    },
    expandIcon: Function,
    openAnimation: PropTypes.object,
    expandIconPosition: PropTypes.oneOf(tuple('left', 'right')),
    collapsible: {
      type: String
    },
    ghost: {
      type: Boolean,
      default: undefined
    },
    onChange: Function,
    'onUpdate:activeKey': Function
  };
};
var collapsePanelProps = function collapsePanelProps() {
  return {
    openAnimation: PropTypes.object,
    prefixCls: String,
    header: PropTypes.any,
    headerClass: String,
    showArrow: {
      type: Boolean,
      default: undefined
    },
    isActive: {
      type: Boolean,
      default: undefined
    },
    destroyInactivePanel: {
      type: Boolean,
      default: undefined
    },
    /** @deprecated Use `collapsible="disabled"` instead */
    disabled: {
      type: Boolean,
      default: undefined
    },
    accordion: {
      type: Boolean,
      default: undefined
    },
    forceRender: {
      type: Boolean,
      default: undefined
    },
    expandIcon: Function,
    extra: PropTypes.any,
    panelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    collapsible: {
      type: String
    },
    role: String,
    onItemClick: {
      type: Function
    }
  };
};
export { collapseProps, collapsePanelProps };