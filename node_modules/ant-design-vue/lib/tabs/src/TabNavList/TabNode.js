"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _KeyCode = _interopRequireDefault(require("../../../_util/KeyCode"));
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'TabNode',
  props: {
    id: {
      type: String
    },
    prefixCls: {
      type: String
    },
    tab: {
      type: Object
    },
    active: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    editable: {
      type: Object
    },
    onClick: {
      type: Function
    },
    onResize: {
      type: Function
    },
    renderWrapper: {
      type: Function
    },
    removeAriaLabel: {
      type: String
    },
    // onRemove: { type: Function as PropType<() => void> },
    onFocus: {
      type: Function
    }
  },
  emits: ['click', 'resize', 'remove', 'focus'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs;
    var domRef = (0, _vue.ref)();
    function onInternalClick(e) {
      var _props$tab;
      if ((_props$tab = props.tab) !== null && _props$tab !== void 0 && _props$tab.disabled) {
        return;
      }
      props.onClick(e);
    }
    expose({
      domRef: domRef
    });
    // onBeforeUnmount(() => {
    //   props.onRemove();
    // });
    function onRemoveTab(event) {
      var _props$tab2;
      event.preventDefault();
      event.stopPropagation();
      props.editable.onEdit('remove', {
        key: (_props$tab2 = props.tab) === null || _props$tab2 === void 0 ? void 0 : _props$tab2.key,
        event: event
      });
    }
    var removable = (0, _vue.computed)(function () {
      var _props$tab3;
      return props.editable && props.closable !== false && !((_props$tab3 = props.tab) !== null && _props$tab3 !== void 0 && _props$tab3.disabled);
    });
    return function () {
      var _classNames, _editable$removeIcon;
      var prefixCls = props.prefixCls,
        id = props.id,
        active = props.active,
        _props$tab4 = props.tab,
        key = _props$tab4.key,
        tab = _props$tab4.tab,
        disabled = _props$tab4.disabled,
        closeIcon = _props$tab4.closeIcon,
        renderWrapper = props.renderWrapper,
        removeAriaLabel = props.removeAriaLabel,
        editable = props.editable,
        onFocus = props.onFocus;
      var tabPrefix = "".concat(prefixCls, "-tab");
      var node = (0, _vue.createVNode)("div", {
        "key": key,
        "ref": domRef,
        "class": (0, _classNames2.default)(tabPrefix, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(tabPrefix, "-with-remove"), removable.value), (0, _defineProperty2.default)(_classNames, "".concat(tabPrefix, "-active"), active), (0, _defineProperty2.default)(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
        "style": attrs.style,
        "onClick": onInternalClick
      }, [(0, _vue.createVNode)("div", {
        "role": "tab",
        "aria-selected": active,
        "id": id && "".concat(id, "-tab-").concat(key),
        "class": "".concat(tabPrefix, "-btn"),
        "aria-controls": id && "".concat(id, "-panel-").concat(key),
        "aria-disabled": disabled,
        "tabindex": disabled ? null : 0,
        "onClick": function onClick(e) {
          e.stopPropagation();
          onInternalClick(e);
        },
        "onKeydown": function onKeydown(e) {
          if ([_KeyCode.default.SPACE, _KeyCode.default.ENTER].includes(e.which)) {
            e.preventDefault();
            onInternalClick(e);
          }
        },
        "onFocus": onFocus
      }, [typeof tab === 'function' ? tab() : tab]), removable.value && (0, _vue.createVNode)("button", {
        "type": "button",
        "aria-label": removeAriaLabel || 'remove',
        "tabindex": 0,
        "class": "".concat(tabPrefix, "-remove"),
        "onClick": function onClick(e) {
          e.stopPropagation();
          onRemoveTab(e);
        }
      }, [(closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon()) || ((_editable$removeIcon = editable.removeIcon) === null || _editable$removeIcon === void 0 ? void 0 : _editable$removeIcon.call(editable)) || '×'])]);
      return renderWrapper ? renderWrapper(node) : node;
    };
  }
});
exports.default = _default;