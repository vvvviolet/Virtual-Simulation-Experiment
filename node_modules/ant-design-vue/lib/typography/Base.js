"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.baseProps = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _transButton = _interopRequireDefault(require("../_util/transButton"));
var _raf = _interopRequireDefault(require("../_util/raf"));
var _styleChecker = require("../_util/styleChecker");
var _Editable = _interopRequireDefault(require("./Editable"));
var _util = _interopRequireDefault(require("./util"));
var _Typography = _interopRequireDefault(require("./Typography"));
var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _copyToClipboard = _interopRequireDefault(require("../_util/copy-to-clipboard"));
var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));
var _CopyOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CopyOutlined"));
var _EditOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EditOutlined"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _useMergedState3 = _interopRequireDefault(require("../_util/hooks/useMergedState"));
var _excluded = ["type", "disabled", "content", "class", "style"];
var isLineClampSupport = (0, _styleChecker.isStyleSupport)('webkitLineClamp');
var isTextOverflowSupport = (0, _styleChecker.isStyleSupport)('textOverflow');
var ELLIPSIS_STR = '...';
var baseProps = function baseProps() {
  return {
    editable: {
      type: [Boolean, Object],
      default: undefined
    },
    copyable: {
      type: [Boolean, Object],
      default: undefined
    },
    prefixCls: String,
    component: String,
    type: String,
    disabled: {
      type: Boolean,
      default: undefined
    },
    ellipsis: {
      type: [Boolean, Object],
      default: undefined
    },
    code: {
      type: Boolean,
      default: undefined
    },
    mark: {
      type: Boolean,
      default: undefined
    },
    underline: {
      type: Boolean,
      default: undefined
    },
    delete: {
      type: Boolean,
      default: undefined
    },
    strong: {
      type: Boolean,
      default: undefined
    },
    keyboard: {
      type: Boolean,
      default: undefined
    },
    content: String,
    'onUpdate:content': Function
  };
};
exports.baseProps = baseProps;
var Base = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Base',
  inheritAttrs: false,
  props: baseProps(),
  // emits: ['update:content'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      emit = _ref.emit;
    var _useConfigInject = (0, _useConfigInject2.default)('typography', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var state = (0, _vue.reactive)({
      copied: false,
      ellipsisText: '',
      ellipsisContent: null,
      isEllipsis: false,
      expanded: false,
      clientRendered: false,
      //locale
      expandStr: '',
      copyStr: '',
      copiedStr: '',
      editStr: '',
      copyId: undefined,
      rafId: undefined,
      prevProps: undefined,
      originContent: ''
    });
    var contentRef = (0, _vue.ref)();
    var editIcon = (0, _vue.ref)();
    var ellipsis = (0, _vue.computed)(function () {
      var ellipsis = props.ellipsis;
      if (!ellipsis) return {};
      return (0, _objectSpread2.default)({
        rows: 1,
        expandable: false
      }, (0, _typeof2.default)(ellipsis) === 'object' ? ellipsis : null);
    });
    (0, _vue.onMounted)(function () {
      state.clientRendered = true;
    });
    (0, _vue.onBeforeUnmount)(function () {
      clearTimeout(state.copyId);
      _raf.default.cancel(state.rafId);
    });
    (0, _vue.watch)([function () {
      return ellipsis.value.rows;
    }, function () {
      return props.content;
    }], function () {
      (0, _vue.nextTick)(function () {
        resizeOnNextFrame();
      });
    }, {
      flush: 'post',
      deep: true,
      immediate: true
    });
    (0, _vue.watchEffect)(function () {
      if (props.content === undefined) {
        (0, _warning.default)(!props.editable, 'Typography', 'When `editable` is enabled, please use `content` instead of children');
        (0, _warning.default)(!props.ellipsis, 'Typography', 'When `ellipsis` is enabled, please use `content` instead of children');
      }
    });
    function getChildrenText() {
      var _contentRef$value, _contentRef$value$$el;
      return props.ellipsis || props.editable ? props.content : (_contentRef$value = contentRef.value) === null || _contentRef$value === void 0 ? void 0 : (_contentRef$value$$el = _contentRef$value.$el) === null || _contentRef$value$$el === void 0 ? void 0 : _contentRef$value$$el.innerText;
    }
    // =============== Expand ===============
    function onExpandClick(e) {
      var onExpand = ellipsis.value.onExpand;
      state.expanded = true;
      onExpand === null || onExpand === void 0 ? void 0 : onExpand(e);
    }
    // ================ Edit ================
    function onEditClick(e) {
      e.preventDefault();
      state.originContent = props.content;
      triggerEdit(true);
    }
    function onEditChange(value) {
      onContentChange(value);
      triggerEdit(false);
    }
    function onContentChange(value) {
      var onChange = editable.value.onChange;
      if (value !== props.content) {
        emit('update:content', value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
      }
    }
    function onEditCancel() {
      var _editable$value$onCan, _editable$value;
      (_editable$value$onCan = (_editable$value = editable.value).onCancel) === null || _editable$value$onCan === void 0 ? void 0 : _editable$value$onCan.call(_editable$value);
      triggerEdit(false);
    }
    // ================ Copy ================
    function onCopyClick(e) {
      e.preventDefault();
      e.stopPropagation();
      var copyable = props.copyable;
      var copyConfig = (0, _objectSpread2.default)({}, (0, _typeof2.default)(copyable) === 'object' ? copyable : null);
      if (copyConfig.text === undefined) {
        copyConfig.text = getChildrenText();
      }
      (0, _copyToClipboard.default)(copyConfig.text || '');
      state.copied = true;
      (0, _vue.nextTick)(function () {
        if (copyConfig.onCopy) {
          copyConfig.onCopy();
        }
        state.copyId = setTimeout(function () {
          state.copied = false;
        }, 3000);
      });
    }
    var editable = (0, _vue.computed)(function () {
      var editable = props.editable;
      if (!editable) return {
        editing: false
      };
      return (0, _objectSpread2.default)({}, (0, _typeof2.default)(editable) === 'object' ? editable : null);
    });
    var _useMergedState = (0, _useMergedState3.default)(false, {
        value: (0, _vue.computed)(function () {
          return editable.value.editing;
        })
      }),
      _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
      editing = _useMergedState2[0],
      setEditing = _useMergedState2[1];
    function triggerEdit(edit) {
      var onStart = editable.value.onStart;
      if (edit && onStart) {
        onStart();
      }
      setEditing(edit);
    }
    (0, _vue.watch)(editing, function (val) {
      if (!val) {
        var _editIcon$value;
        (_editIcon$value = editIcon.value) === null || _editIcon$value === void 0 ? void 0 : _editIcon$value.focus();
      }
    }, {
      flush: 'post'
    });
    // ============== Ellipsis ==============
    function resizeOnNextFrame() {
      _raf.default.cancel(state.rafId);
      state.rafId = (0, _raf.default)(function () {
        // Do not bind `syncEllipsis`. It need for test usage on prototype
        syncEllipsis();
      });
    }
    var canUseCSSEllipsis = (0, _vue.computed)(function () {
      var _ellipsis$value = ellipsis.value,
        rows = _ellipsis$value.rows,
        expandable = _ellipsis$value.expandable,
        suffix = _ellipsis$value.suffix,
        onEllipsis = _ellipsis$value.onEllipsis,
        tooltip = _ellipsis$value.tooltip;
      if (suffix || tooltip) return false;
      // Can't use css ellipsis since we need to provide the place for button
      if (props.editable || props.copyable || expandable || onEllipsis) {
        return false;
      }
      if (rows === 1) {
        return isTextOverflowSupport;
      }
      return isLineClampSupport;
    });
    var syncEllipsis = function syncEllipsis() {
      var _contentRef$value2, _contentRef$value3;
      var ellipsisText = state.ellipsisText,
        isEllipsis = state.isEllipsis;
      var _ellipsis$value2 = ellipsis.value,
        rows = _ellipsis$value2.rows,
        suffix = _ellipsis$value2.suffix,
        onEllipsis = _ellipsis$value2.onEllipsis;
      if (!rows || rows < 0 || !((_contentRef$value2 = contentRef.value) !== null && _contentRef$value2 !== void 0 && _contentRef$value2.$el) || state.expanded || props.content === undefined) return;
      // Do not measure if css already support ellipsis
      if (canUseCSSEllipsis.value) return;
      var _measure = (0, _util.default)((_contentRef$value3 = contentRef.value) === null || _contentRef$value3 === void 0 ? void 0 : _contentRef$value3.$el, {
          rows: rows,
          suffix: suffix
        }, props.content, renderOperations(true), ELLIPSIS_STR),
        content = _measure.content,
        text = _measure.text,
        ell = _measure.ellipsis;
      if (ellipsisText !== text || state.isEllipsis !== ell) {
        state.ellipsisText = text;
        state.ellipsisContent = content;
        state.isEllipsis = ell;
        if (isEllipsis !== ell && onEllipsis) {
          onEllipsis(ell);
        }
      }
    };
    function wrapperDecorations(_ref2, content) {
      var mark = _ref2.mark,
        code = _ref2.code,
        underline = _ref2.underline,
        del = _ref2.delete,
        strong = _ref2.strong,
        keyboard = _ref2.keyboard;
      var currentContent = content;
      function wrap(needed, Tag) {
        if (!needed) return;
        var _currentContent = function () {
          return currentContent;
        }();
        currentContent = (0, _vue.createVNode)(Tag, null, {
          default: function _default() {
            return [_currentContent];
          }
        });
      }
      wrap(strong, 'strong');
      wrap(underline, 'u');
      wrap(del, 'del');
      wrap(code, 'code');
      wrap(mark, 'mark');
      wrap(keyboard, 'kbd');
      return currentContent;
    }
    function renderExpand(forceRender) {
      var _ellipsis$value3 = ellipsis.value,
        expandable = _ellipsis$value3.expandable,
        symbol = _ellipsis$value3.symbol;
      if (!expandable) return null;
      // force render expand icon for measure usage or it will cause dead loop
      if (!forceRender && (state.expanded || !state.isEllipsis)) return null;
      var expandContent = (slots.ellipsisSymbol ? slots.ellipsisSymbol() : symbol) || state.expandStr;
      return (0, _vue.createVNode)("a", {
        "key": "expand",
        "class": "".concat(prefixCls.value, "-expand"),
        "onClick": onExpandClick,
        "aria-label": state.expandStr
      }, [expandContent]);
    }
    function renderEdit() {
      if (!props.editable) return;
      var _props$editable = props.editable,
        tooltip = _props$editable.tooltip,
        _props$editable$trigg = _props$editable.triggerType,
        triggerType = _props$editable$trigg === void 0 ? ['icon'] : _props$editable$trigg;
      var icon = slots.editableIcon ? slots.editableIcon() : (0, _vue.createVNode)(_EditOutlined.default, {
        "role": "button"
      }, null);
      var title = slots.editableTooltip ? slots.editableTooltip() : state.editStr;
      var ariaLabel = typeof title === 'string' ? title : '';
      return triggerType.indexOf('icon') !== -1 ? (0, _vue.createVNode)(_tooltip.default, {
        "key": "edit",
        "title": tooltip === false ? '' : title
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_transButton.default, {
            "ref": editIcon,
            "class": "".concat(prefixCls.value, "-edit"),
            "onClick": onEditClick,
            "aria-label": ariaLabel
          }, {
            default: function _default() {
              return [icon];
            }
          })];
        }
      }) : null;
    }
    function renderCopy() {
      if (!props.copyable) return;
      var tooltip = props.copyable.tooltip;
      var defaultTitle = state.copied ? state.copiedStr : state.copyStr;
      var title = slots.copyableTooltip ? slots.copyableTooltip({
        copied: state.copied
      }) : defaultTitle;
      var ariaLabel = typeof title === 'string' ? title : '';
      var defaultIcon = state.copied ? (0, _vue.createVNode)(_CheckOutlined.default, null, null) : (0, _vue.createVNode)(_CopyOutlined.default, null, null);
      var icon = slots.copyableIcon ? slots.copyableIcon({
        copied: !!state.copied
      }) : defaultIcon;
      return (0, _vue.createVNode)(_tooltip.default, {
        "key": "copy",
        "title": tooltip === false ? '' : title
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_transButton.default, {
            "class": ["".concat(prefixCls.value, "-copy"), (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-copy-success"), state.copied)],
            "onClick": onCopyClick,
            "aria-label": ariaLabel
          }, {
            default: function _default() {
              return [icon];
            }
          })];
        }
      });
    }
    function renderEditInput() {
      var className = attrs.class,
        style = attrs.style;
      var _editable$value2 = editable.value,
        maxlength = _editable$value2.maxlength,
        autoSize = _editable$value2.autoSize,
        onEnd = _editable$value2.onEnd;
      return (0, _vue.createVNode)(_Editable.default, {
        "class": className,
        "style": style,
        "prefixCls": prefixCls.value,
        "value": props.content,
        "originContent": state.originContent,
        "maxlength": maxlength,
        "autoSize": autoSize,
        "onSave": onEditChange,
        "onChange": onContentChange,
        "onCancel": onEditCancel,
        "onEnd": onEnd,
        "direction": direction.value
      }, {
        enterIcon: slots.editableEnterIcon
      });
    }
    function renderOperations(forceRenderExpanded) {
      return [renderExpand(forceRenderExpanded), renderEdit(), renderCopy()].filter(function (node) {
        return node;
      });
    }
    return function () {
      var _slots$default;
      var _editable$value$trigg = editable.value.triggerType,
        triggerType = _editable$value$trigg === void 0 ? ['icon'] : _editable$value$trigg;
      var _children = props.ellipsis || props.editable ? props.content !== undefined ? props.content : (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots) : slots.default ? slots.default() : props.content;
      if (editing.value) {
        return renderEditInput();
      }
      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "componentName": "Text",
        "children": function children(locale) {
          var _ref4;
          var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
            type = _props$attrs.type,
            disabled = _props$attrs.disabled,
            content = _props$attrs.content,
            className = _props$attrs.class,
            style = _props$attrs.style,
            restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
          var _ellipsis$value4 = ellipsis.value,
            rows = _ellipsis$value4.rows,
            suffix = _ellipsis$value4.suffix,
            tooltip = _ellipsis$value4.tooltip;
          var edit = locale.edit,
            copyStr = locale.copy,
            copied = locale.copied,
            expand = locale.expand;
          state.editStr = edit;
          state.copyStr = copyStr;
          state.copiedStr = copied;
          state.expandStr = expand;
          var textProps = (0, _omit.default)(restProps, ['prefixCls', 'editable', 'copyable', 'ellipsis', 'mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'onUpdate:content']);
          var cssEllipsis = canUseCSSEllipsis.value;
          var cssTextOverflow = rows === 1 && cssEllipsis;
          var cssLineClamp = rows && rows > 1 && cssEllipsis;
          var textNode = _children;
          var ariaLabel;
          // Only use js ellipsis when css ellipsis not support
          if (rows && state.isEllipsis && !state.expanded && !cssEllipsis) {
            var _restContent;
            var _title = restProps.title;
            var restContent = _title || '';
            if (!_title && (typeof _children === 'string' || typeof _children === 'number')) {
              restContent = String(_children);
            }
            // show rest content as title on symbol
            restContent = (_restContent = restContent) === null || _restContent === void 0 ? void 0 : _restContent.slice(String(state.ellipsisContent || '').length);
            // We move full content to outer element to avoid repeat read the content by accessibility
            textNode = (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.toRaw)(state.ellipsisContent), (0, _vue.createVNode)("span", {
              "title": restContent,
              "aria-hidden": "true"
            }, [ELLIPSIS_STR]), suffix]);
          } else {
            textNode = (0, _vue.createVNode)(_vue.Fragment, null, [_children, suffix]);
          }
          textNode = wrapperDecorations(props, textNode);
          var showTooltip = tooltip && rows && state.isEllipsis && !state.expanded && !cssEllipsis;
          var title = slots.ellipsisTooltip ? slots.ellipsisTooltip() : tooltip;
          return (0, _vue.createVNode)(_vcResizeObserver.default, {
            "onResize": resizeOnNextFrame,
            "disabled": !rows
          }, {
            default: function _default() {
              return [(0, _vue.createVNode)(_Typography.default, (0, _objectSpread2.default)({
                "ref": contentRef,
                "class": [(_ref4 = {}, (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-").concat(type), type), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-disabled"), disabled), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-ellipsis"), rows), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-single-line"), rows === 1 && !state.isEllipsis), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-ellipsis-single-line"), cssTextOverflow), (0, _defineProperty2.default)(_ref4, "".concat(prefixCls.value, "-ellipsis-multiple-line"), cssLineClamp), _ref4), className],
                "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
                  WebkitLineClamp: cssLineClamp ? rows : undefined
                }),
                "aria-label": ariaLabel,
                "direction": direction.value,
                "onClick": triggerType.indexOf('text') !== -1 ? onEditClick : function () {}
              }, textProps), {
                default: function _default() {
                  return [showTooltip ? (0, _vue.createVNode)(_tooltip.default, {
                    "title": tooltip === true ? _children : title
                  }, {
                    default: function _default() {
                      return [(0, _vue.createVNode)("span", null, [textNode])];
                    }
                  }) : textNode, renderOperations()];
                }
              })];
            }
          });
        }
      }, null);
    };
  }
});
var _default2 = Base;
exports.default = _default2;