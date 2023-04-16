import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { isEmptyElement, initDefaultProps, flattenChildren, isValidElement } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import { collapseProps } from './commonProps';
import { getDataAndAriaProps } from '../_util/util';
import { computed, defineComponent, ref, watch } from 'vue';
import RightOutlined from "@ant-design/icons-vue/es/icons/RightOutlined";
import firstNotUndefined from '../_util/firstNotUndefined';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import collapseMotion from '../_util/collapseMotion';
function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = _typeof(currentActiveKey);
    currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function (key) {
    return String(key);
  });
}
export { collapseProps };
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACollapse',
  inheritAttrs: false,
  props: initDefaultProps(collapseProps(), {
    accordion: false,
    destroyInactivePanel: false,
    bordered: true,
    openAnimation: collapseMotion('ant-motion-collapse', false),
    expandIconPosition: 'left'
  }),
  slots: ['expandIcon'],
  // emits: ['change', 'update:activeKey'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var stateActiveKey = ref(getActiveKeysArray(firstNotUndefined([props.activeKey, props.defaultActiveKey])));
    watch(function () {
      return props.activeKey;
    }, function () {
      stateActiveKey.value = getActiveKeysArray(props.activeKey);
    }, {
      deep: true
    });
    var _useConfigInject = useConfigInject('collapse', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var iconPosition = computed(function () {
      var expandIconPosition = props.expandIconPosition;
      if (expandIconPosition !== undefined) {
        return expandIconPosition;
      }
      return direction.value === 'rtl' ? 'right' : 'left';
    });
    var renderExpandIcon = function renderExpandIcon(panelProps) {
      var _props$expandIcon = props.expandIcon,
        expandIcon = _props$expandIcon === void 0 ? slots.expandIcon : _props$expandIcon;
      var icon = expandIcon ? expandIcon(panelProps) : _createVNode(RightOutlined, {
        "rotate": panelProps.isActive ? 90 : undefined
      }, null);
      return _createVNode("div", null, [isValidElement(Array.isArray(expandIcon) ? icon[0] : icon) ? cloneElement(icon, {
        class: "".concat(prefixCls.value, "-arrow")
      }, false) : icon]);
    };
    var setActiveKey = function setActiveKey(activeKey) {
      if (props.activeKey === undefined) {
        stateActiveKey.value = activeKey;
      }
      var newKey = props.accordion ? activeKey[0] : activeKey;
      emit('update:activeKey', newKey);
      emit('change', newKey);
    };
    var onClickItem = function onClickItem(key) {
      var activeKey = stateActiveKey.value;
      if (props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = _toConsumableArray(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      setActiveKey(activeKey);
    };
    var getNewChild = function getNewChild(child, index) {
      var _child$key, _child$children, _child$children$heade;
      if (isEmptyElement(child)) return;
      var activeKey = stateActiveKey.value;
      var accordion = props.accordion,
        destroyInactivePanel = props.destroyInactivePanel,
        collapsible = props.collapsible,
        openAnimation = props.openAnimation;
      // If there is no key provide, use the panel order as default key
      var key = String((_child$key = child.key) !== null && _child$key !== void 0 ? _child$key : index);
      var _ref2 = child.props || {},
        _ref2$header = _ref2.header,
        header = _ref2$header === void 0 ? (_child$children = child.children) === null || _child$children === void 0 ? void 0 : (_child$children$heade = _child$children.header) === null || _child$children$heade === void 0 ? void 0 : _child$children$heade.call(_child$children) : _ref2$header,
        headerClass = _ref2.headerClass,
        childCollapsible = _ref2.collapsible,
        disabled = _ref2.disabled;
      var isActive = false;
      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }
      var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
      // legacy 2.x
      if (disabled || disabled === '') {
        mergeCollapsible = 'disabled';
      }
      var newProps = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls.value,
        destroyInactivePanel: destroyInactivePanel,
        openAnimation: openAnimation,
        accordion: accordion,
        onItemClick: mergeCollapsible === 'disabled' ? null : onClickItem,
        expandIcon: renderExpandIcon,
        collapsible: mergeCollapsible
      };
      return cloneElement(child, newProps);
    };
    var getItems = function getItems() {
      var _slots$default;
      return flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)).map(getNewChild);
    };
    return function () {
      var _classNames;
      var accordion = props.accordion,
        bordered = props.bordered,
        ghost = props.ghost;
      var collapseClassName = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls.value, true), _defineProperty(_classNames, "".concat(prefixCls.value, "-borderless"), !bordered), _defineProperty(_classNames, "".concat(prefixCls.value, "-icon-position-").concat(iconPosition.value), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-ghost"), !!ghost), _defineProperty(_classNames, attrs.class, !!attrs.class), _classNames));
      return _createVNode("div", _objectSpread(_objectSpread({
        "class": collapseClassName
      }, getDataAndAriaProps(attrs)), {}, {
        "style": attrs.style,
        "role": accordion ? 'tablist' : null
      }), [getItems()]);
    };
  }
});