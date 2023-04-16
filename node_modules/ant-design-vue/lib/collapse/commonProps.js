"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collapseProps = exports.collapsePanelProps = void 0;
var _type = require("../_util/type");
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
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
    openAnimation: _vueTypes.default.object,
    expandIconPosition: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right')),
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
exports.collapseProps = collapseProps;
var collapsePanelProps = function collapsePanelProps() {
  return {
    openAnimation: _vueTypes.default.object,
    prefixCls: String,
    header: _vueTypes.default.any,
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
    extra: _vueTypes.default.any,
    panelKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    collapsible: {
      type: String
    },
    role: String,
    onItemClick: {
      type: Function
    }
  };
};
exports.collapsePanelProps = collapsePanelProps;