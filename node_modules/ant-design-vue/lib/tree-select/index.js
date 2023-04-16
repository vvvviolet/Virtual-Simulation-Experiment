"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TreeSelectNode = void 0;
exports.treeSelectProps = treeSelectProps;
var _vue = require("vue");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vcTreeSelect = _interopRequireWildcard(require("../vc-tree-select"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _iconUtil = _interopRequireDefault(require("../select/utils/iconUtil"));
var _iconUtil2 = _interopRequireDefault(require("../tree/utils/iconUtil"));
var _warning = require("../vc-util/warning");
var _propsUtil = require("../_util/props-util");
var _FormItemContext = require("../form/FormItemContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return "".concat(rootPrefixCls, "-").concat(motion);
};
function treeSelectProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)((0, _vcTreeSelect.treeSelectProps)(), ['showTreeIcon', 'treeMotion', 'inputIcon', 'getInputElement', 'treeLine', 'customSlots'])), {}, {
    suffixIcon: _vueTypes.default.any,
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
var TreeSelect = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ATreeSelect',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(treeSelectProps(), {
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
    (0, _warning.warning)(!(props.treeData === undefined && slots.default), '`children` of TreeSelect is deprecated. Please use `treeData` instead.');
    (0, _vue.watchEffect)(function () {
      (0, _devWarning.default)(props.multiple !== false || !props.treeCheckable, 'TreeSelect', '`multiple` will always be `true` when `treeCheckable` is true');
      (0, _devWarning.default)(props.replaceFields === undefined, 'TreeSelect', '`replaceFields` is deprecated, please use fieldNames instead');
    });
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var _useConfigInject = (0, _useConfigInject2.default)('select', props),
      prefixCls = _useConfigInject.prefixCls,
      renderEmpty = _useConfigInject.renderEmpty,
      direction = _useConfigInject.direction,
      virtual = _useConfigInject.virtual,
      dropdownMatchSelectWidth = _useConfigInject.dropdownMatchSelectWidth,
      size = _useConfigInject.size,
      getPopupContainer = _useConfigInject.getPopupContainer,
      getPrefixCls = _useConfigInject.getPrefixCls;
    var rootPrefixCls = (0, _vue.computed)(function () {
      return getPrefixCls();
    });
    var transitionName = (0, _vue.computed)(function () {
      return getTransitionName(rootPrefixCls.value, 'slide-up', props.transitionName);
    });
    var choiceTransitionName = (0, _vue.computed)(function () {
      return getTransitionName(rootPrefixCls.value, '', props.choiceTransitionName);
    });
    var treePrefixCls = (0, _vue.computed)(function () {
      return getPrefixCls('select-tree', props.prefixCls);
    });
    var treeSelectPrefixCls = (0, _vue.computed)(function () {
      return getPrefixCls('tree-select', props.prefixCls);
    });
    var mergedDropdownClassName = (0, _vue.computed)(function () {
      return (0, _classNames3.default)(props.dropdownClassName, "".concat(treeSelectPrefixCls.value, "-dropdown"), (0, _defineProperty2.default)({}, "".concat(treeSelectPrefixCls.value, "-dropdown-rtl"), direction.value === 'rtl'));
    });
    var isMultiple = (0, _vue.computed)(function () {
      return !!(props.treeCheckable || props.multiple);
    });
    var treeSelectRef = (0, _vue.ref)();
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
      var _getIcons = (0, _iconUtil.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
      var selectProps = (0, _omit.default)(props, ['suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'switcherIcon', 'bordered', 'onUpdate:value', 'onUpdate:treeExpandedKeys', 'onUpdate:searchValue']);
      var mergedClassName = (0, _classNames3.default)(!customizePrefixCls && treeSelectPrefixCls.value, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-lg"), size.value === 'large'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-sm"), size.value === 'small'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-borderless"), !bordered), _classNames2), attrs.class);
      var otherProps = {};
      if (props.treeData === undefined && slots.default) {
        otherProps.children = (0, _propsUtil.flattenChildren)(slots.default());
      }
      return (0, _vue.createVNode)(_vcTreeSelect.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), selectProps), {}, {
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
          return (0, _iconUtil2.default)(treePrefixCls.value, _switcherIcon, treeLine, nodeProps);
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
        "customSlots": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
          treeCheckable: function treeCheckable() {
            return (0, _vue.createVNode)("span", {
              "class": "".concat(prefixCls.value, "-tree-checkbox-inner")
            }, null);
          }
        }),
        "maxTagPlaceholder": props.maxTagPlaceholder || slots.maxTagPlaceholder
      }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
        treeCheckable: function treeCheckable() {
          return (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls.value, "-tree-checkbox-inner")
          }, null);
        }
      }));
    };
  }
});
/* istanbul ignore next */
var TreeSelectNode = _vcTreeSelect.TreeNode;
exports.TreeSelectNode = TreeSelectNode;
var _default = (0, _extends2.default)(TreeSelect, {
  TreeNode: _vcTreeSelect.TreeNode,
  SHOW_ALL: _vcTreeSelect.SHOW_ALL,
  SHOW_PARENT: _vcTreeSelect.SHOW_PARENT,
  SHOW_CHILD: _vcTreeSelect.SHOW_CHILD,
  install: function install(app) {
    app.component(TreeSelect.name, TreeSelect);
    app.component(TreeSelectNode.displayName, TreeSelectNode);
    return app;
  }
});
exports.default = _default;