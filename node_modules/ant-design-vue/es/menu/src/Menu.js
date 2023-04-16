import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { Fragment as _Fragment, createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { Teleport, computed, defineComponent, ref, inject, watchEffect, watch, onMounted, unref } from 'vue';
import shallowEqual from '../../_util/shallowequal';
import useProvideMenu, { MenuContextProvider, useProvideFirstLevel } from './hooks/useMenuContext';
import useConfigInject from '../../_util/hooks/useConfigInject';
import devWarning from '../../vc-util/devWarning';
import uniq from 'lodash-es/uniq';
import { SiderCollapsedKey } from '../../layout/injectionKey';
import { flattenChildren } from '../../_util/props-util';
import Overflow from '../../vc-overflow';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import EllipsisOutlined from "@ant-design/icons-vue/es/icons/EllipsisOutlined";
import { cloneElement } from '../../_util/vnode';
import { OVERFLOW_KEY, PathContext } from './hooks/useKeyPath';
import collapseMotion from '../../_util/collapseMotion';
export var menuProps = function menuProps() {
  return {
    id: String,
    prefixCls: String,
    disabled: Boolean,
    inlineCollapsed: Boolean,
    disabledOverflow: Boolean,
    forceSubMenuRender: Boolean,
    openKeys: Array,
    selectedKeys: Array,
    activeKey: String,
    selectable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    motion: Object,
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    inlineIndent: {
      type: Number,
      default: 24
    },
    subMenuOpenDelay: {
      type: Number,
      default: 0.1
    },
    subMenuCloseDelay: {
      type: Number,
      default: 0.1
    },
    builtinPlacements: {
      type: Object
    },
    triggerSubMenuAction: {
      type: String,
      default: 'hover'
    },
    getPopupContainer: Function,
    expandIcon: Function,
    onOpenChange: Function,
    onSelect: Function,
    onDeselect: Function,
    onClick: [Function, Array],
    onFocus: Function,
    onBlur: Function,
    onMousedown: Function,
    'onUpdate:openKeys': Function,
    'onUpdate:selectedKeys': Function,
    'onUpdate:activeKey': Function
  };
};
var EMPTY_LIST = [];
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AMenu',
  inheritAttrs: false,
  props: menuProps(),
  slots: ['expandIcon', 'overflowedIndicator'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('menu', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      getPrefixCls = _useConfigInject.getPrefixCls;
    var store = ref({});
    var siderCollapsed = inject(SiderCollapsedKey, ref(undefined));
    var inlineCollapsed = computed(function () {
      if (siderCollapsed.value !== undefined) {
        return siderCollapsed.value;
      }
      return props.inlineCollapsed;
    });
    var isMounted = ref(false);
    onMounted(function () {
      isMounted.value = true;
    });
    watchEffect(function () {
      devWarning(!(props.inlineCollapsed === true && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
      devWarning(!(siderCollapsed.value !== undefined && props.inlineCollapsed === true), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    });
    var activeKeys = ref([]);
    var mergedSelectedKeys = ref([]);
    var keyMapStore = ref({});
    watch(store, function () {
      var newKeyMapStore = {};
      for (var _i = 0, _Object$values = Object.values(store.value); _i < _Object$values.length; _i++) {
        var menuInfo = _Object$values[_i];
        newKeyMapStore[menuInfo.key] = menuInfo;
      }
      keyMapStore.value = newKeyMapStore;
    }, {
      flush: 'post'
    });
    watchEffect(function () {
      if (props.activeKey !== undefined) {
        var keys = [];
        var menuInfo = props.activeKey ? keyMapStore.value[props.activeKey] : undefined;
        if (menuInfo && props.activeKey !== undefined) {
          keys = uniq([].concat(unref(menuInfo.parentKeys), props.activeKey));
        } else {
          keys = [];
        }
        if (!shallowEqual(activeKeys.value, keys)) {
          activeKeys.value = keys;
        }
      }
    });
    watch(function () {
      return props.selectedKeys;
    }, function (selectedKeys) {
      if (selectedKeys) {
        mergedSelectedKeys.value = selectedKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    var selectedSubMenuKeys = ref([]);
    watch([keyMapStore, mergedSelectedKeys], function () {
      var subMenuParentKeys = [];
      mergedSelectedKeys.value.forEach(function (key) {
        var menuInfo = keyMapStore.value[key];
        if (menuInfo) {
          subMenuParentKeys = subMenuParentKeys.concat(unref(menuInfo.parentKeys));
        }
      });
      subMenuParentKeys = uniq(subMenuParentKeys);
      if (!shallowEqual(selectedSubMenuKeys.value, subMenuParentKeys)) {
        selectedSubMenuKeys.value = subMenuParentKeys;
      }
    }, {
      immediate: true
    });
    // >>>>> Trigger select
    var triggerSelection = function triggerSelection(info) {
      if (!props.selectable) {
        return;
      }
      // Insert or Remove
      var targetKey = info.key;
      var exist = mergedSelectedKeys.value.includes(targetKey);
      var newSelectedKeys;
      if (props.multiple) {
        if (exist) {
          newSelectedKeys = mergedSelectedKeys.value.filter(function (key) {
            return key !== targetKey;
          });
        } else {
          newSelectedKeys = [].concat(_toConsumableArray(mergedSelectedKeys.value), [targetKey]);
        }
      } else {
        newSelectedKeys = [targetKey];
      }
      // Trigger event
      var selectInfo = _objectSpread(_objectSpread({}, info), {}, {
        selectedKeys: newSelectedKeys
      });
      if (!shallowEqual(newSelectedKeys, mergedSelectedKeys.value)) {
        if (props.selectedKeys === undefined) {
          mergedSelectedKeys.value = newSelectedKeys;
        }
        emit('update:selectedKeys', newSelectedKeys);
        if (exist && props.multiple) {
          emit('deselect', selectInfo);
        } else {
          emit('select', selectInfo);
        }
      }
      if (mergedMode.value !== 'inline' && !props.multiple && mergedOpenKeys.value.length) {
        triggerOpenKeys(EMPTY_LIST);
      }
    };
    var mergedOpenKeys = ref([]);
    watch(function () {
      return props.openKeys;
    }, function () {
      var openKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mergedOpenKeys.value;
      if (!shallowEqual(mergedOpenKeys.value, openKeys)) {
        mergedOpenKeys.value = openKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    var timeout;
    var changeActiveKeys = function changeActiveKeys(keys) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (props.activeKey === undefined) {
          activeKeys.value = keys;
        }
        emit('update:activeKey', keys[keys.length - 1]);
      });
    };
    var disabled = computed(function () {
      return !!props.disabled;
    });
    var isRtl = computed(function () {
      return direction.value === 'rtl';
    });
    var mergedMode = ref('vertical');
    var mergedInlineCollapsed = ref(false);
    watchEffect(function () {
      if ((props.mode === 'inline' || props.mode === 'vertical') && inlineCollapsed.value) {
        mergedMode.value = 'vertical';
        mergedInlineCollapsed.value = inlineCollapsed.value;
      } else {
        mergedMode.value = props.mode;
        mergedInlineCollapsed.value = false;
      }
    });
    var isInlineMode = computed(function () {
      return mergedMode.value === 'inline';
    });
    var triggerOpenKeys = function triggerOpenKeys(keys) {
      mergedOpenKeys.value = keys;
      emit('update:openKeys', keys);
      emit('openChange', keys);
    };
    // >>>>> Cache & Reset open keys when inlineCollapsed changed
    var inlineCacheOpenKeys = ref(mergedOpenKeys.value);
    var mountRef = ref(false);
    // Cache
    watch(mergedOpenKeys, function () {
      if (isInlineMode.value) {
        inlineCacheOpenKeys.value = mergedOpenKeys.value;
      }
    }, {
      immediate: true
    });
    // Restore
    watch(isInlineMode, function () {
      if (!mountRef.value) {
        mountRef.value = true;
        return;
      }
      if (isInlineMode.value) {
        mergedOpenKeys.value = inlineCacheOpenKeys.value;
      } else {
        // Trigger open event in case its in control
        triggerOpenKeys(EMPTY_LIST);
      }
    }, {
      immediate: true
    });
    var className = computed(function () {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-root"), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(mergedMode.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-inline-collapsed"), mergedInlineCollapsed.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), isRtl.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(props.theme), true), _ref2;
    });
    var rootPrefixCls = computed(function () {
      return getPrefixCls();
    });
    var defaultMotions = computed(function () {
      return {
        horizontal: {
          name: "".concat(rootPrefixCls.value, "-slide-up")
        },
        inline: collapseMotion,
        other: {
          name: "".concat(rootPrefixCls.value, "-zoom-big")
        }
      };
    });
    useProvideFirstLevel(true);
    var getChildrenKeys = function getChildrenKeys() {
      var eventKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keys = [];
      var storeValue = store.value;
      eventKeys.forEach(function (eventKey) {
        var _storeValue$eventKey = storeValue[eventKey],
          key = _storeValue$eventKey.key,
          childrenEventKeys = _storeValue$eventKey.childrenEventKeys;
        keys.push.apply(keys, [key].concat(_toConsumableArray(getChildrenKeys(unref(childrenEventKeys)))));
      });
      return keys;
    };
    // ========================= Open =========================
    /**
     * Click for item. SubMenu do not have selection status
     */
    var onInternalClick = function onInternalClick(info) {
      emit('click', info);
      triggerSelection(info);
    };
    var onInternalOpenChange = function onInternalOpenChange(key, open) {
      var _keyMapStore$value$ke;
      var childrenEventKeys = ((_keyMapStore$value$ke = keyMapStore.value[key]) === null || _keyMapStore$value$ke === void 0 ? void 0 : _keyMapStore$value$ke.childrenEventKeys) || [];
      var newOpenKeys = mergedOpenKeys.value.filter(function (k) {
        return k !== key;
      });
      if (open) {
        newOpenKeys.push(key);
      } else if (mergedMode.value !== 'inline') {
        // We need find all related popup to close
        var subPathKeys = getChildrenKeys(unref(childrenEventKeys));
        newOpenKeys = uniq(newOpenKeys.filter(function (k) {
          return !subPathKeys.includes(k);
        }));
      }
      if (!shallowEqual(mergedOpenKeys, newOpenKeys)) {
        triggerOpenKeys(newOpenKeys);
      }
    };
    var registerMenuInfo = function registerMenuInfo(key, info) {
      store.value = _objectSpread(_objectSpread({}, store.value), {}, _defineProperty({}, key, info));
    };
    var unRegisterMenuInfo = function unRegisterMenuInfo(key) {
      delete store.value[key];
      store.value = _objectSpread({}, store.value);
    };
    var lastVisibleIndex = ref(0);
    var expandIcon = computed(function () {
      return props.expandIcon || slots.expandIcon ? function (opt) {
        var icon = props.expandIcon || slots.expandIcon;
        icon = typeof icon === 'function' ? icon(opt) : icon;
        return cloneElement(icon, {
          class: "".concat(prefixCls.value, "-submenu-expand-icon")
        }, false);
      } : null;
    });
    useProvideMenu({
      store: store,
      prefixCls: prefixCls,
      activeKeys: activeKeys,
      openKeys: mergedOpenKeys,
      selectedKeys: mergedSelectedKeys,
      changeActiveKeys: changeActiveKeys,
      disabled: disabled,
      rtl: isRtl,
      mode: mergedMode,
      inlineIndent: computed(function () {
        return props.inlineIndent;
      }),
      subMenuCloseDelay: computed(function () {
        return props.subMenuCloseDelay;
      }),
      subMenuOpenDelay: computed(function () {
        return props.subMenuOpenDelay;
      }),
      builtinPlacements: computed(function () {
        return props.builtinPlacements;
      }),
      triggerSubMenuAction: computed(function () {
        return props.triggerSubMenuAction;
      }),
      getPopupContainer: computed(function () {
        return props.getPopupContainer;
      }),
      inlineCollapsed: mergedInlineCollapsed,
      antdMenuTheme: computed(function () {
        return props.theme;
      }),
      siderCollapsed: siderCollapsed,
      defaultMotions: computed(function () {
        return isMounted.value ? defaultMotions.value : null;
      }),
      motion: computed(function () {
        return isMounted.value ? props.motion : null;
      }),
      overflowDisabled: ref(undefined),
      onOpenChange: onInternalOpenChange,
      onItemClick: onInternalClick,
      registerMenuInfo: registerMenuInfo,
      unRegisterMenuInfo: unRegisterMenuInfo,
      selectedSubMenuKeys: selectedSubMenuKeys,
      isRootMenu: ref(true),
      expandIcon: expandIcon,
      forceSubMenuRender: computed(function () {
        return props.forceSubMenuRender;
      })
    });
    return function () {
      var _slots$default, _slots$overflowedIndi;
      var childList = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var allVisible = lastVisibleIndex.value >= childList.length - 1 || mergedMode.value !== 'horizontal' || props.disabledOverflow;
      // >>>>> Children
      var wrappedChildList = mergedMode.value !== 'horizontal' || props.disabledOverflow ? childList :
      // Need wrap for overflow dropdown that do not response for open
      childList.map(function (child, index) {
        return (// Always wrap provider to avoid sub node re-mount
          _createVNode(MenuContextProvider, {
            "key": child.key,
            "overflowDisabled": index > lastVisibleIndex.value
          }, {
            default: function _default() {
              return child;
            }
          })
        );
      });
      var overflowedIndicator = ((_slots$overflowedIndi = slots.overflowedIndicator) === null || _slots$overflowedIndi === void 0 ? void 0 : _slots$overflowedIndi.call(slots)) || _createVNode(EllipsisOutlined, null, null);
      return _createVNode(Overflow, _objectSpread(_objectSpread({}, attrs), {}, {
        "onMousedown": props.onMousedown,
        "prefixCls": "".concat(prefixCls.value, "-overflow"),
        "component": "ul",
        "itemComponent": MenuItem,
        "class": [className.value, attrs.class],
        "role": "menu",
        "id": props.id,
        "data": wrappedChildList,
        "renderRawItem": function renderRawItem(node) {
          return node;
        },
        "renderRawRest": function renderRawRest(omitItems) {
          // We use origin list since wrapped list use context to prevent open
          var len = omitItems.length;
          var originOmitItems = len ? childList.slice(-len) : null;
          return _createVNode(_Fragment, null, [_createVNode(SubMenu, {
            "eventKey": OVERFLOW_KEY,
            "key": OVERFLOW_KEY,
            "title": overflowedIndicator,
            "disabled": allVisible,
            "internalPopupClose": len === 0
          }, {
            default: function _default() {
              return originOmitItems;
            }
          }), _createVNode(PathContext, null, {
            default: function _default() {
              return [_createVNode(SubMenu, {
                "eventKey": OVERFLOW_KEY,
                "key": OVERFLOW_KEY,
                "title": overflowedIndicator,
                "disabled": allVisible,
                "internalPopupClose": len === 0
              }, {
                default: function _default() {
                  return originOmitItems;
                }
              })];
            }
          })]);
        },
        "maxCount": mergedMode.value !== 'horizontal' || props.disabledOverflow ? Overflow.INVALIDATE : Overflow.RESPONSIVE,
        "ssr": "full",
        "data-menu-list": true,
        "onVisibleChange": function onVisibleChange(newLastIndex) {
          lastVisibleIndex.value = newLastIndex;
        }
      }), {
        default: function _default() {
          return [_createVNode(Teleport, {
            "to": "body"
          }, {
            default: function _default() {
              return [_createVNode("div", {
                "style": {
                  display: 'none'
                },
                "aria-hidden": true
              }, [_createVNode(PathContext, null, {
                default: function _default() {
                  return [wrappedChildList];
                }
              })])];
            }
          })];
        }
      });
    };
  }
});