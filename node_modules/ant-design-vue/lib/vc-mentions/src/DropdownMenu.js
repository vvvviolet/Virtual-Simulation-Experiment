"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _menu = _interopRequireWildcard(require("../../menu"));
var _MentionsContext = _interopRequireDefault(require("./MentionsContext"));
var _spin = _interopRequireDefault(require("../../spin"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function noop() {}
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'DropdownMenu',
  props: {
    prefixCls: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  slots: ['notFoundContent', 'option'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _inject = (0, _vue.inject)(_MentionsContext.default, {
        activeIndex: (0, _vue.ref)(),
        loading: (0, _vue.ref)(false)
      }),
      activeIndex = _inject.activeIndex,
      setActiveIndex = _inject.setActiveIndex,
      selectOption = _inject.selectOption,
      _inject$onFocus = _inject.onFocus,
      onFocus = _inject$onFocus === void 0 ? noop : _inject$onFocus,
      loading = _inject.loading;
    var timeoutId;
    var onMousedown = function onMousedown(e) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        onFocus(e);
      });
    };
    (0, _vue.onBeforeUnmount)(function () {
      clearTimeout(timeoutId);
    });
    return function () {
      var _slots$notFoundConten;
      var prefixCls = props.prefixCls,
        options = props.options;
      var activeOption = options[activeIndex.value] || {};
      return (0, _vue.createVNode)(_menu.default, {
        "prefixCls": "".concat(prefixCls, "-menu"),
        "activeKey": activeOption.value,
        "onSelect": function onSelect(_ref2) {
          var key = _ref2.key;
          var option = options.find(function (_ref3) {
            var value = _ref3.value;
            return value === key;
          });
          selectOption(option);
        },
        "onMousedown": onMousedown
      }, {
        default: function _default() {
          return [!loading.value && options.map(function (option, index) {
            var _slots$option, _slots$option2;
            var value = option.value,
              disabled = option.disabled,
              _option$label = option.label,
              label = _option$label === void 0 ? option.value : _option$label;
            return (0, _vue.createVNode)(_menu.Item, {
              "key": value,
              "disabled": disabled,
              "onMouseenter": function onMouseenter() {
                setActiveIndex(index);
              }
            }, {
              default: function _default() {
                return [(_slots$option = (_slots$option2 = slots.option) === null || _slots$option2 === void 0 ? void 0 : _slots$option2.call(slots, option)) !== null && _slots$option !== void 0 ? _slots$option : typeof label === 'function' ? label({
                  value: value,
                  disabled: disabled
                }) : label];
              }
            });
          }), !loading.value && options.length === 0 ? (0, _vue.createVNode)(_menu.Item, {
            "key": "notFoundContent",
            "disabled": true
          }, {
            default: function _default() {
              return [(_slots$notFoundConten = slots.notFoundContent) === null || _slots$notFoundConten === void 0 ? void 0 : _slots$notFoundConten.call(slots)];
            }
          }) : null, loading.value && (0, _vue.createVNode)(_menu.Item, {
            "key": "loading",
            "disabled": true
          }, {
            default: function _default() {
              return [(0, _vue.createVNode)(_spin.default, {
                "size": "small"
              }, null)];
            }
          })];
        }
      });
    };
  }
});
exports.default = _default2;