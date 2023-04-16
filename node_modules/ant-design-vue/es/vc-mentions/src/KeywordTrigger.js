import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Trigger from '../../vc-trigger';
import DropdownMenu from './DropdownMenu';
import { computed, defineComponent } from 'vue';
var BUILT_IN_PLACEMENTS = {
  bottomRight: {
    points: ['tl', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  bottomLeft: {
    points: ['tr', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['bl', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['br', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'KeywordTrigger',
  props: {
    loading: {
      type: Boolean,
      default: undefined
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    prefixCls: String,
    placement: String,
    visible: {
      type: Boolean,
      default: undefined
    },
    transitionName: String,
    getPopupContainer: Function,
    direction: String
  },
  slots: ['notFoundContent', 'option'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var getDropdownPrefix = function getDropdownPrefix() {
      return "".concat(props.prefixCls, "-dropdown");
    };
    var getDropdownElement = function getDropdownElement() {
      var options = props.options;
      return _createVNode(DropdownMenu, {
        "prefixCls": getDropdownPrefix(),
        "options": options
      }, {
        notFoundContent: slots.notFoundContent,
        option: slots.option
      });
    };
    var popupPlacement = computed(function () {
      var placement = props.placement,
        direction = props.direction;
      var popupPlacement = 'topRight';
      if (direction === 'rtl') {
        popupPlacement = placement === 'top' ? 'topLeft' : 'bottomLeft';
      } else {
        popupPlacement = placement === 'top' ? 'topRight' : 'bottomRight';
      }
      return popupPlacement;
    });
    return function () {
      var visible = props.visible,
        transitionName = props.transitionName,
        getPopupContainer = props.getPopupContainer;
      return _createVNode(Trigger, {
        "prefixCls": getDropdownPrefix(),
        "popupVisible": visible,
        "popup": getDropdownElement(),
        "popupPlacement": popupPlacement.value,
        "popupTransitionName": transitionName,
        "builtinPlacements": BUILT_IN_PLACEMENTS,
        "getPopupContainer": getPopupContainer
      }, {
        default: slots.default
      });
    };
  }
});