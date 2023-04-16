"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VcStepProps = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function isString(str) {
  return typeof str === 'string';
}
function noop() {}
var VcStepProps = function VcStepProps() {
  return {
    prefixCls: String,
    wrapperStyle: {
      type: Object,
      default: undefined
    },
    itemWidth: String,
    active: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    status: String,
    iconPrefix: String,
    icon: _vueTypes.default.any,
    adjustMarginRight: String,
    stepNumber: Number,
    stepIndex: Number,
    description: _vueTypes.default.any,
    title: _vueTypes.default.any,
    subTitle: _vueTypes.default.any,
    progressDot: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func])),
    tailContent: _vueTypes.default.any,
    icons: _vueTypes.default.shape({
      finish: _vueTypes.default.any,
      error: _vueTypes.default.any
    }).loose,
    onClick: Function,
    onStepClick: Function,
    stepIcon: Function
  };
};
exports.VcStepProps = VcStepProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Step',
  props: VcStepProps(),
  slots: ['title', 'subTitle', 'description', 'tailContent', 'stepIcon', 'progressDot'],
  emits: ['click', 'stepClick'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var onItemClick = function onItemClick(e) {
      emit('click', e);
      emit('stepClick', props.stepIndex);
    };
    var renderIconNode = function renderIconNode(_ref2) {
      var _iconClassName;
      var icon = _ref2.icon,
        title = _ref2.title,
        description = _ref2.description;
      var prefixCls = props.prefixCls,
        stepNumber = props.stepNumber,
        status = props.status,
        iconPrefix = props.iconPrefix,
        icons = props.icons,
        _props$progressDot = props.progressDot,
        progressDot = _props$progressDot === void 0 ? slots.progressDot : _props$progressDot,
        _props$stepIcon = props.stepIcon,
        stepIcon = _props$stepIcon === void 0 ? slots.stepIcon : _props$stepIcon;
      var iconNode;
      var iconClassName = (_iconClassName = {}, (0, _defineProperty2.default)(_iconClassName, "".concat(prefixCls, "-icon"), true), (0, _defineProperty2.default)(_iconClassName, "".concat(iconPrefix, "icon"), true), (0, _defineProperty2.default)(_iconClassName, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), (0, _defineProperty2.default)(_iconClassName, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && icons && !icons.finish), (0, _defineProperty2.default)(_iconClassName, "".concat(iconPrefix, "icon-close"), !icon && status === 'error' && icons && !icons.error), _iconClassName);
      var iconDot = (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-icon-dot")
      }, null);
      // `progressDot` enjoy the highest priority
      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [progressDot({
            iconDot: iconDot,
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description,
            prefixCls: prefixCls
          })]);
        } else {
          iconNode = (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [iconDot]);
        }
      } else if (icon && !isString(icon)) {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icon]);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.finish]);
      } else if (icons && icons.error && status === 'error') {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.error]);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = (0, _vue.createVNode)("span", {
          "class": iconClassName
        }, null);
      } else {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [stepNumber]);
      }
      if (stepIcon) {
        iconNode = stepIcon({
          index: stepNumber - 1,
          status: status,
          title: title,
          description: description,
          node: iconNode
        });
      }
      return iconNode;
    };
    return function () {
      var _slots$title, _slots$description, _slots$subTitle, _slots$icon, _classString;
      var prefixCls = props.prefixCls,
        itemWidth = props.itemWidth,
        active = props.active,
        _props$status = props.status,
        status = _props$status === void 0 ? 'wait' : _props$status,
        tailContent = props.tailContent,
        adjustMarginRight = props.adjustMarginRight,
        disabled = props.disabled,
        _props$title = props.title,
        title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots) : _props$title,
        _props$description = props.description,
        description = _props$description === void 0 ? (_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots) : _props$description,
        _props$subTitle = props.subTitle,
        subTitle = _props$subTitle === void 0 ? (_slots$subTitle = slots.subTitle) === null || _slots$subTitle === void 0 ? void 0 : _slots$subTitle.call(slots) : _props$subTitle,
        _props$icon = props.icon,
        icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots) : _props$icon,
        onClick = props.onClick,
        onStepClick = props.onStepClick;
      var classString = (_classString = {}, (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-item"), true), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-item-").concat(status), true), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-item-custom"), icon), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-item-active"), active), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-item-disabled"), disabled === true), _classString);
      var stepProps = {
        class: classString
      };
      var stepItemStyle = {};
      if (itemWidth) {
        stepItemStyle.width = itemWidth;
      }
      if (adjustMarginRight) {
        stepItemStyle.marginRight = adjustMarginRight;
      }
      var accessibilityProps = {
        onClick: onClick || noop
      };
      if (onStepClick && !disabled) {
        accessibilityProps.role = 'button';
        accessibilityProps.tabindex = 0;
        accessibilityProps.onClick = onItemClick;
      }
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, stepProps), {}, {
        "style": stepItemStyle
      }), [(0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, accessibilityProps), {}, {
        "class": "".concat(prefixCls, "-item-container")
      }), [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-item-tail")
      }, [tailContent]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-item-icon")
      }, [renderIconNode({
        icon: icon,
        title: title,
        description: description
      })]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-item-content")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-item-title")
      }, [title, subTitle && (0, _vue.createVNode)("div", {
        "title": subTitle,
        "class": "".concat(prefixCls, "-item-subtitle")
      }, [subTitle])]), description && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-item-description")
      }, [description])])])]);
    };
  }
});
exports.default = _default;