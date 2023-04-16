import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { withDirectives as _withDirectives, createVNode as _createVNode, vShow as _vShow } from "vue";
import { computed, defineComponent, ref, watch } from 'vue';
import Transition from '../../_util/transition';
import { useInjectMenu, MenuContextProvider } from './hooks/useMenuContext';
import SubMenuList from './SubMenuList';
export default defineComponent({
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
    var fixedMode = computed(function () {
      return 'inline';
    });
    var _useInjectMenu = useInjectMenu(),
      motion = _useInjectMenu.motion,
      mode = _useInjectMenu.mode,
      defaultMotions = _useInjectMenu.defaultMotions;
    var sameModeRef = computed(function () {
      return mode.value === fixedMode.value;
    });
    var destroy = ref(!sameModeRef.value);
    var mergedOpen = computed(function () {
      return sameModeRef.value ? props.open : false;
    });
    // ================================= Effect =================================
    // Reset destroy state when mode change back
    watch(mode, function () {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: 'post'
    });
    var mergedMotion = computed(function () {
      var _defaultMotions$value, _defaultMotions$value2;
      var m = motion.value || ((_defaultMotions$value = defaultMotions.value) === null || _defaultMotions$value === void 0 ? void 0 : _defaultMotions$value[fixedMode.value]) || ((_defaultMotions$value2 = defaultMotions.value) === null || _defaultMotions$value2 === void 0 ? void 0 : _defaultMotions$value2.other);
      var res = typeof m === 'function' ? m() : m;
      return _objectSpread(_objectSpread({}, res), {}, {
        appear: props.keyPath.length <= 1
      });
    });
    return function () {
      var _slots$default;
      if (destroy.value) {
        return null;
      }
      return _createVNode(MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: function _default() {
          return [_createVNode(Transition, mergedMotion.value, {
            default: function _default() {
              return [_withDirectives(_createVNode(SubMenuList, {
                "id": props.id
              }, {
                default: function _default() {
                  return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
                }
              }), [[_vShow, mergedOpen.value]])];
            }
          })];
        }
      });
    };
  }
});