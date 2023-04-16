import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, ref, watchEffect, defineComponent } from 'vue';
import VcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD, treeSelectProps as vcTreeSelectProps } from '../vc-tree-select';
import classNames from '../_util/classNames';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import omit from '../_util/omit';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import devWarning from '../vc-util/devWarning';
import getIcons from '../select/utils/iconUtil';
import renderSwitcherIcon from '../tree/utils/iconUtil';
import { warning } from '../vc-util/warning';
import { flattenChildren } from '../_util/props-util';
import { useInjectFormItemContext } from '../form/FormItemContext';
var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return "".concat(rootPrefixCls, "-").concat(motion);
};
export function treeSelectProps() {
  return _objectSpread(_objectSpread({}, omit(vcTreeSelectProps(), ['showTreeIcon', 'treeMotion', 'inputIcon', 'getInputElement', 'treeLine', 'customSlots'])), {}, {
    suffixIcon: PropTypes.any,
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: undefined
    },
    treeLine: {
      type: [Boolean, Object],
      default: undefined
    },
    replaceFields: {
      type: Object
    },
    'onUpdate:value': {
      type: Function
    },
    'onUpdate:treeExpandedKeys': {
      type: Function
    },
    'onUpdate:searchValue': {
      type: Function
    }
  });
}
var TreeSelect = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATreeSelect',
  inheritAttrs: false,
  props: initDefaultProps(treeSelectProps(), {
    choiceTransitionName: '',
    listHeight: 256,
    treeIcon: false,
    listItemHeight: 26,
    bordered: true
  }),
  slots: ['title', 'titleRender', 'placeholder', 'maxTagPlaceholder', 'treeIcon', 'switcherIcon', 'notFoundContent'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose,
      emit = _ref.emit;
    warning(!(props.treeData === undefined && slots.default), '`children` of TreeSelect is deprecated. Please use `treeData` instead.');
    watchEffect(function () {
      devWarning(props.multiple !== false || !props.treeCheckable, 'TreeSelect', '`multiple` will always be `true` when `treeCheckable` is true');
      devWarning(props.replaceFields === undefined, 'TreeSelect', '`replaceFields` is deprecated, please use fieldNames instead');
    });
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject('select', props),
      prefixCls = _useConfigInject.prefixCls,
      renderEmpty = _useConfigInject.renderEmpty,
      direction = _useConfigInject.direction,
      virtual = _useConfigInject.virtual,
      dropdownMatchSelectWidth = _useConfigInject.dropdownMatchSelectWidth,
      size = _useConfigInject.size,
      getPopupContainer = _useConfigInject.getPopupContainer,
      getPrefixCls = _useConfigInject.getPrefixCls;
    var rootPrefixCls = computed(function () {
      return getPrefixCls();
    });
    var transitionName = computed(function () {
      return getTransitionName(rootPrefixCls.value, 'slide-up', props.transitionName);
    });
    var choiceTransitionName = computed(function () {
      return getTransitionName(rootPrefixCls.value, '', props.choiceTransitionName);
    });
    var treePrefixCls = computed(function () {
      return getPrefixCls('select-tree', props.prefixCls);
    });
    var treeSelectPrefixCls = computed(function () {
      return getPrefixCls('tree-select', props.prefixCls);
    });
    var mergedDropdownClassName = computed(function () {
      return classNames(props.dropdownClassName, "".concat(treeSelectPrefixCls.value, "-dropdown"), _defineProperty({}, "".concat(treeSelectPrefixCls.value, "-dropdown-rtl"), direction.value === 'rtl'));
    });
    var isMultiple = computed(function () {
      return !!(props.treeCheckable || props.multiple);
    });
    var treeSelectRef = ref();
    expose({
      focus: function focus() {
        var _treeSelectRef$value$, _treeSelectRef$value;
        (_treeSelectRef$value$ = (_treeSelectRef$value = treeSelectRef.value).focus) === null || _treeSelectRef$value$ === void 0 ? void 0 : _treeSelectRef$value$.call(_treeSelectRef$value);
      },
      blur: function blur() {
        var _treeSelectRef$value$2, _treeSelectRef$value2;
        (_treeSelectRef$value$2 = (_treeSelectRef$value2 = treeSelectRef.value).blur) === null || _treeSelectRef$value$2 === void 0 ? void 0 : _treeSelectRef$value$2.call(_treeSelectRef$value2);
      }
    });
    var handleChange = function handleChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit('update:value', args[0]);
      emit.apply(void 0, ['change'].concat(args));
      formItemContext.onFieldChange();
    };
    var handleTreeExpand = function handleTreeExpand(keys) {
      emit('update:treeExpandedKeys', keys);
      emit('treeExpand', keys);
    };
    var handleSearch = function handleSearch(value) {
      emit('update:searchValue', value);
      emit('search', value);
    };
    var handleBlur = function handleBlur(e) {
      emit('blur', e);
      formItemContext.onFieldBlur();
    };
    return function () {
      var _slots$notFoundConten, _slots$switcherIcon, _classNames2;
      var _props$notFoundConten = props.notFoundContent,
        notFoundContent = _props$notFoundConten === void 0 ? (_slots$notFoundConten = slots.notFoundContent) === null || _slots$notFoundConten === void 0 ? void 0 : _slots$notFoundConten.call(slots) : _props$notFoundConten,
        customizePrefixCls = props.prefixCls,
        bordered = props.bordered,
        listHeight = props.listHeight,
        listItemHeight = props.listItemHeight,
        multiple = props.multiple,
        treeIcon = props.treeIcon,
        treeLine = props.treeLine,
        _props$switcherIcon = props.switcherIcon,
        _switcherIcon = _props$switcherIcon === void 0 ? (_slots$switcherIcon = slots.switcherIcon) === null || _slots$switcherIcon === void 0 ? void 0 : _slots$switcherIcon.call(slots) : _props$switcherIcon,
        _props$fieldNames = props.fieldNames,
        fieldNames = _props$fieldNames === void 0 ? props.replaceFields : _props$fieldNames,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      // ===================== Icons =====================
      var _getIcons = getIcons(_objectSpread(_objectSpread({}, props), {}, {
          multiple: isMultiple.value,
          prefixCls: prefixCls.value
        }), slots),
        suffixIcon = _getIcons.suffixIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      // ===================== Empty =====================
      var mergedNotFound;
      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else {
        mergedNotFound = renderEmpty.value('Select');
      }
      // ==================== Render =====================
      var selectProps = omit(props, ['suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'switcherIcon', 'bordered', 'onUpdate:value', 'onUpdate:treeExpandedKeys', 'onUpdate:searchValue']);
      var mergedClassName = classNames(!customizePrefixCls && treeSelectPrefixCls.value, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls.value, "-lg"), size.value === 'large'), _defineProperty(_classNames2, "".concat(prefixCls.value, "-sm"), size.value === 'small'), _defineProperty(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames2, "".concat(prefixCls.value, "-borderless"), !bordered), _classNames2), attrs.class);
      var otherProps = {};
      if (props.treeData === undefined && slots.default) {
        otherProps.children = flattenChildren(slots.default());
      }
      return _createVNode(VcTreeSelect, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, attrs), selectProps), {}, {
        "virtual": virtual.value,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth.value,
        "id": id,
        "fieldNames": fieldNames,
        "ref": treeSelectRef,
        "prefixCls": prefixCls.value,
        "class": mergedClassName,
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "treeLine": !!treeLine,
        "inputIcon": suffixIcon,
        "multiple": multiple,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "switcherIcon": function switcherIcon(nodeProps) {
          return renderSwitcherIcon(treePrefixCls.value, _switcherIcon, treeLine, nodeProps);
        },
        "showTreeIcon": treeIcon,
        "notFoundContent": mergedNotFound,
        "getPopupContainer": getPopupContainer.value,
        "treeMotion": null,
        "dropdownClassName": mergedDropdownClassName.value,
        "choiceTransitionName": choiceTransitionName.value,
        "onChange": handleChange,
        "onBlur": handleBlur,
        "onSearch": handleSearch,
        "onTreeExpand": handleTreeExpand
      }, otherProps), {}, {
        "transitionName": transitionName.value,
        "customSlots": _objectSpread(_objectSpread({}, slots), {}, {
          treeCheckable: function treeCheckable() {
            return _createVNode("span", {
              "class": "".concat(prefixCls.value, "-tree-checkbox-inner")
            }, null);
          }
        }),
        "maxTagPlaceholder": props.maxTagPlaceholder || slots.maxTagPlaceholder
      }), _objectSpread(_objectSpread({}, slots), {}, {
        treeCheckable: function treeCheckable() {
          return _createVNode("span", {
            "class": "".concat(prefixCls.value, "-tree-checkbox-inner")
          }, null);
        }
      }));
    };
  }
});
/* istanbul ignore next */
export var TreeSelectNode = TreeNode;
export default _extends(TreeSelect, {
  TreeNode: TreeNode,
  SHOW_ALL: SHOW_ALL,
  SHOW_PARENT: SHOW_PARENT,
  SHOW_CHILD: SHOW_CHILD,
  install: function install(app) {
    app.component(TreeSelect.name, TreeSelect);
    app.component(TreeSelectNode.displayName, TreeSelectNode);
    return app;
  }
});