"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _transition = _interopRequireDefault(require("../../_util/transition"));
var _useMenuContext = require("./hooks/useMenuContext");
var _SubMenuList = _interopRequireDefault(require("./SubMenuList"));
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'InlineSubMenuList',
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var fixedMode = (0, _vue.computed)(function () {
      return 'inline';
    });
    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
      motion = _useInjectMenu.motion,
      mode = _useInjectMenu.mode,
      defaultMotions = _useInjectMenu.defaultMotions;
    var sameModeRef = (0, _vue.computed)(function () {
      return mode.value === fixedMode.value;
    });
    var destroy = (0, _vue.ref)(!sameModeRef.value);
    var mergedOpen = (0, _vue.computed)(function () {
      return sameModeRef.value ? props.open : false;
    });
    // ================================= Effect =================================
    // Reset destroy state when mode change back
    (0, _vue.watch)(mode, function () {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: 'post'
    });
    var mergedMotion = (0, _vue.computed)(function () {
      var _defaultMotions$value, _defaultMotions$value2;
      var m = motion.value || ((_defaultMotions$value = defaultMotions.value) === null || _defaultMotions$value === void 0 ? void 0 : _defaultMotions$value[fixedMode.value]) || ((_defaultMotions$value2 = defaultMotions.value) === null || _defaultMotions$value2 === void 0 ? void 0 : _defaultMotions$value2.other);
      var res = typeof m === 'function' ? m() : m;
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, res), {}, {
        appear: props.keyPath.length <= 1
      });
    });
    return function () {
      var _slots$default;
      if (destroy.value) {
        return null;
      }
      return (0, _vue.createVNode)(_useMenuContext.MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_transition.default, mergedMotion.value, {
            default: function _default() {
              return [(0, _vue.withDirectives)((0, _vue.createVNode)(_SubMenuList.default, {
                "id": props.id
              }, {
                default: function _default() {
                  return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
                }
              }), [[_vue.vShow, mergedOpen.value]])];
            }
          })];
        }
      });
    };
  }
});
exports.default = _default2;