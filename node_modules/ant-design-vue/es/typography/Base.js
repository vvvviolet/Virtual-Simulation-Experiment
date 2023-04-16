import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["type", "disabled", "content", "class", "style"];
import { Fragment as _Fragment, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import warning from '../_util/warning';
import TransButton from '../_util/transButton';
import raf from '../_util/raf';
import { isStyleSupport } from '../_util/styleChecker';
import Editable from './Editable';
import measure from './util';
import Typography from './Typography';
import ResizeObserver from '../vc-resize-observer';
import Tooltip from '../tooltip';
import copy from '../_util/copy-to-clipboard';
import CheckOutlined from "@ant-design/icons-vue/es/icons/CheckOutlined";
import CopyOutlined from "@ant-design/icons-vue/es/icons/CopyOutlined";
import EditOutlined from "@ant-design/icons-vue/es/icons/EditOutlined";
import { defineComponent, reactive, ref, onMounted, onBeforeUnmount, watch, watchEffect, nextTick, computed, toRaw } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';
import useMergedState from '../_util/hooks/useMergedState';
var isLineClampSupport = isStyleSupport('webkitLineClamp');
var isTextOverflowSupport = isStyleSupport('textOverflow');
var ELLIPSIS_STR = '...';
export var baseProps = function baseProps() {
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
var Base = defineComponent({
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
    var _useConfigInject = useConfigInject('typography', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var state = reactive({
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
    var contentRef = ref();
    var editIcon = ref();
    var ellipsis = computed(function () {
      var ellipsis = props.ellipsis;
      if (!ellipsis) return {};
      return _objectSpread({
        rows: 1,
        expandable: false
      }, _typeof(ellipsis) === 'object' ? ellipsis : null);
    });
    onMounted(function () {
      state.clientRendered = true;
    });
    onBeforeUnmount(function () {
      clearTimeout(state.copyId);
      raf.cancel(state.rafId);
    });
    watch([function () {
      return ellipsis.value.rows;
    }, function () {
      return props.content;
    }], function () {
      nextTick(function () {
        resizeOnNextFrame();
      });
    }, {
      flush: 'post',
      deep: true,
      immediate: true
    });
    watchEffect(function () {
      if (props.content === undefined) {
        warning(!props.editable, 'Typography', 'When `editable` is enabled, please use `content` instead of children');
        warning(!props.ellipsis, 'Typography', 'When `ellipsis` is enabled, please use `content` instead of children');
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
      var copyConfig = _objectSpread({}, _typeof(copyable) === 'object' ? copyable : null);
      if (copyConfig.text === undefined) {
        copyConfig.text = getChildrenText();
      }
      copy(copyConfig.text || '');
      state.copied = true;
      nextTick(function () {
        if (copyConfig.onCopy) {
          copyConfig.onCopy();
        }
        state.copyId = setTimeout(function () {
          state.copied = false;
        }, 3000);
      });
    }
    var editable = computed(function () {
      var editable = props.editable;
      if (!editable) return {
        editing: false
      };
      return _objectSpread({}, _typeof(editable) === 'object' ? editable : null);
    });
    var _useMergedState = useMergedState(false, {
        value: computed(function () {
          return editable.value.editing;
        })
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      editing = _useMergedState2[0],
      setEditing = _useMergedState2[1];
    function triggerEdit(edit) {
      var onStart = editable.value.onStart;
      if (edit && onStart) {
        onStart();
      }
      setEditing(edit);
    }
    watch(editing, function (val) {
      if (!val) {
        var _editIcon$value;
        (_editIcon$value = editIcon.value) === null || _editIcon$value === void 0 ? void 0 : _editIcon$value.focus();
      }
    }, {
      flush: 'post'
    });
    // ============== Ellipsis ==============
    function resizeOnNextFrame() {
      raf.cancel(state.rafId);
      state.rafId = raf(function () {
        // Do not bind `syncEllipsis`. It need for test usage on prototype
        syncEllipsis();
      });
    }
    var canUseCSSEllipsis = computed(function () {
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
      var _measure = measure((_contentRef$value3 = contentRef.value) === null || _contentRef$value3 === void 0 ? void 0 : _contentRef$value3.$el, {
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
        currentContent = _createVNode(Tag, null, {
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
      return _createVNode("a", {
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
      var icon = slots.editableIcon ? slots.editableIcon() : _createVNode(EditOutlined, {
        "role": "button"
      }, null);
      var title = slots.editableTooltip ? slots.editableTooltip() : state.editStr;
      var ariaLabel = typeof title === 'string' ? title : '';
      return triggerType.indexOf('icon') !== -1 ? _createVNode(Tooltip, {
        "key": "edit",
        "title": tooltip === false ? '' : title
      }, {
        default: function _default() {
          return [_createVNode(TransButton, {
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
      var defaultIcon = state.copied ? _createVNode(CheckOutlined, null, null) : _createVNode(CopyOutlined, null, null);
      var icon = slots.copyableIcon ? slots.copyableIcon({
        copied: !!state.copied
      }) : defaultIcon;
      return _createVNode(Tooltip, {
        "key": "copy",
        "title": tooltip === false ? '' : title
      }, {
        default: function _default() {
          return [_createVNode(TransButton, {
            "class": ["".concat(prefixCls.value, "-copy"), _defineProperty({}, "".concat(prefixCls.value, "-copy-success"), state.copied)],
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
      return _createVNode(Editable, {
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
      return _createVNode(LocaleReceiver, {
        "componentName": "Text",
        "children": function children(locale) {
          var _ref4;
          var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
            type = _props$attrs.type,
            disabled = _props$attrs.disabled,
            content = _props$attrs.content,
            className = _props$attrs.class,
            style = _props$attrs.style,
            restProps = _objectWithoutProperties(_props$attrs, _excluded);
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
          var textProps = omit(restProps, ['prefixCls', 'editable', 'copyable', 'ellipsis', 'mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'onUpdate:content']);
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
            textNode = _createVNode(_Fragment, null, [toRaw(state.ellipsisContent), _createVNode("span", {
              "title": restContent,
              "aria-hidden": "true"
            }, [ELLIPSIS_STR]), suffix]);
          } else {
            textNode = _createVNode(_Fragment, null, [_children, suffix]);
          }
          textNode = wrapperDecorations(props, textNode);
          var showTooltip = tooltip && rows && state.isEllipsis && !state.expanded && !cssEllipsis;
          var title = slots.ellipsisTooltip ? slots.ellipsisTooltip() : tooltip;
          return _createVNode(ResizeObserver, {
            "onResize": resizeOnNextFrame,
            "disabled": !rows
          }, {
            default: function _default() {
              return [_createVNode(Typography, _objectSpread({
                "ref": contentRef,
                "class": [(_ref4 = {}, _defineProperty(_ref4, "".concat(prefixCls.value, "-").concat(type), type), _defineProperty(_ref4, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty(_ref4, "".concat(prefixCls.value, "-ellipsis"), rows), _defineProperty(_ref4, "".concat(prefixCls.value, "-single-line"), rows === 1 && !state.isEllipsis), _defineProperty(_ref4, "".concat(prefixCls.value, "-ellipsis-single-line"), cssTextOverflow), _defineProperty(_ref4, "".concat(prefixCls.value, "-ellipsis-multiple-line"), cssLineClamp), _ref4), className],
                "style": _objectSpread(_objectSpread({}, style), {}, {
                  WebkitLineClamp: cssLineClamp ? rows : undefined
                }),
                "aria-label": ariaLabel,
                "direction": direction.value,
                "onClick": triggerType.indexOf('text') !== -1 ? onEditClick : function () {}
              }, textProps), {
                default: function _default() {
                  return [showTooltip ? _createVNode(Tooltip, {
                    "title": tooltip === true ? _children : title
                  }, {
                    default: function _default() {
                      return [_createVNode("span", null, [textNode])];
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
export default Base;