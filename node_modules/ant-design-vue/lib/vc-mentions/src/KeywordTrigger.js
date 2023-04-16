"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _vcTrigger = _interopRequireDefault(require("../../vc-trigger"));
var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));
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
var _default2 = (0, _vue.defineComponent)({
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
      return (0, _vue.createVNode)(_DropdownMenu.default, {
        "prefixCls": getDropdownPrefix(),
        "options": options
      }, {
        notFoundContent: slots.notFoundContent,
        option: slots.option
      });
    };
    var popupPlacement = (0, _vue.computed)(function () {
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
      return (0, _vue.createVNode)(_vcTrigger.default, {
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
exports.default = _default2;