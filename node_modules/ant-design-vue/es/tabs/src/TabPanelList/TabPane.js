import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, watch, computed } from 'vue';
import PropTypes from '../../../_util/vue-types';
var tabPaneProps = function tabPaneProps() {
  return {
    tab: PropTypes.any,
    disabled: {
      type: Boolean
    },
    forceRender: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    animated: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    destroyInactiveTabPane: {
      type: Boolean
    },
    // Pass by TabPaneList
    prefixCls: {
      type: String
    },
    tabKey: {
      type: [String, Number]
    },
    id: {
      type: String
    }
    // closeIcon: PropTypes.any,
  };
};

export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATabPane',
  inheritAttrs: false,
  __ANT_TAB_PANE: true,
  props: tabPaneProps(),
  slots: ['closeIcon', 'tab'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var visited = ref(props.forceRender);
    watch([function () {
      return props.active;
    }, function () {
      return props.destroyInactiveTabPane;
    }], function () {
      if (props.active) {
        visited.value = true;
      } else if (props.destroyInactiveTabPane) {
        visited.value = false;
      }
    }, {
      immediate: true
    });
    var mergedStyle = computed(function () {
      if (!props.active) {
        if (props.animated) {
          return {
            visibility: 'hidden',
            height: 0,
            overflowY: 'hidden'
          };
        } else {
          return {
            display: 'none'
          };
        }
      }
      return {};
    });
    return function () {
      var _slots$default;
      var prefixCls = props.prefixCls,
        forceRender = props.forceRender,
        id = props.id,
        active = props.active,
        tabKey = props.tabKey;
      return _createVNode("div", {
        "id": id && "".concat(id, "-panel-").concat(tabKey),
        "role": "tabpanel",
        "tabindex": active ? 0 : -1,
        "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
        "aria-hidden": !active,
        "style": [mergedStyle.value, attrs.style],
        "class": ["".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), attrs.class]
      }, [(active || visited.value || forceRender) && ((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))]);
    };
  }
});