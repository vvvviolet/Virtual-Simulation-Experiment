"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _TransBtn = _interopRequireDefault(require("./TransBtn"));
var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _pickAttrs = _interopRequireDefault(require("../_util/pickAttrs"));
var _propsUtil = require("../_util/props-util");
var _createRef = _interopRequireDefault(require("../_util/createRef"));
var _vcVirtualList = _interopRequireDefault(require("../vc-virtual-list"));
var _useMemo = _interopRequireDefault(require("../_util/hooks/useMemo"));
var _platformUtil = require("./utils/platformUtil");
var _omit = _interopRequireDefault(require("../_util/omit"));
var _useBaseProps = _interopRequireDefault(require("./hooks/useBaseProps"));
var _SelectContext = _interopRequireDefault(require("./SelectContext"));
var _excluded = ["disabled", "title", "children", "style", "class", "className"];
function isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
var OptionList = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'OptionList',
  inheritAttrs: false,
  slots: ['option'],
  setup: function setup(_, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots;
    var baseProps = (0, _useBaseProps.default)();
    var props = (0, _SelectContext.default)();
    var itemPrefixCls = (0, _vue.computed)(function () {
      return "".concat(baseProps.prefixCls, "-item");
    });
    var memoFlattenOptions = (0, _useMemo.default)(function () {
      return props.flattenOptions;
    }, [function () {
      return baseProps.open;
    }, function () {
      return props.flattenOptions;
    }], function (next) {
      return next[0];
    });
    // =========================== List ===========================
    var listRef = (0, _createRef.default)();
    var onListMouseDown = function onListMouseDown(event) {
      event.preventDefault();
    };
    var scrollIntoView = function scrollIntoView(args) {
      if (listRef.current) {
        listRef.current.scrollTo(typeof args === 'number' ? {
          index: args
        } : args);
      }
    };
    // ========================== Active ==========================
    var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var len = memoFlattenOptions.value.length;
      for (var i = 0; i < len; i += 1) {
        var current = (index + i * offset + len) % len;
        var _memoFlattenOptions$v = memoFlattenOptions.value[current],
          group = _memoFlattenOptions$v.group,
          data = _memoFlattenOptions$v.data;
        if (!group && !data.disabled) {
          return current;
        }
      }
      return -1;
    };
    var state = (0, _vue.reactive)({
      activeIndex: getEnabledActiveIndex(0)
    });
    var setActive = function setActive(index) {
      var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      state.activeIndex = index;
      var info = {
        source: fromKeyboard ? 'keyboard' : 'mouse'
      };
      // Trigger active event
      var flattenItem = memoFlattenOptions.value[index];
      if (!flattenItem) {
        props.onActiveValue(null, -1, info);
        return;
      }
      props.onActiveValue(flattenItem.value, index, info);
    };
    // Auto active first item when list length or searchValue changed
    (0, _vue.watch)([function () {
      return memoFlattenOptions.value.length;
    }, function () {
      return baseProps.searchValue;
    }], function () {
      setActive(props.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    });
    // https://github.com/ant-design/ant-design/issues/34975
    var isSelected = function isSelected(value) {
      return props.rawValues.has(value) && baseProps.mode !== 'combobox';
    };
    // Auto scroll to item position in single mode
    (0, _vue.watch)([function () {
      return baseProps.open;
    }, function () {
      return baseProps.searchValue;
    }], function () {
      if (!baseProps.multiple && baseProps.open && props.rawValues.size === 1) {
        var value = Array.from(props.rawValues)[0];
        var index = (0, _vue.toRaw)(memoFlattenOptions.value).findIndex(function (_ref2) {
          var data = _ref2.data;
          return data[props.fieldNames.value] === value;
        });
        if (index !== -1) {
          setActive(index);
          (0, _vue.nextTick)(function () {
            scrollIntoView(index);
          });
        }
      }
      // Force trigger scrollbar visible when open
      if (baseProps.open) {
        (0, _vue.nextTick)(function () {
          var _listRef$current;
          (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
        });
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    // ========================== Values ==========================
    var onSelectValue = function onSelectValue(value) {
      if (value !== undefined) {
        props.onSelect(value, {
          selected: !props.rawValues.has(value)
        });
      }
      // Single mode should always close by select
      if (!baseProps.multiple) {
        baseProps.toggleOpen(false);
      }
    };
    var getLabel = function getLabel(item) {
      return typeof item.label === 'function' ? item.label() : item.label;
    };
    function renderItem(index) {
      var item = memoFlattenOptions.value[index];
      if (!item) return null;
      var itemData = item.data || {};
      var value = itemData.value;
      var group = item.group;
      var attrs = (0, _pickAttrs.default)(itemData, true);
      var mergedLabel = getLabel(item);
      return item ? (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
      }, attrs), {}, {
        "key": index,
        "role": group ? 'presentation' : 'option',
        "id": "".concat(baseProps.id, "_list_").concat(index),
        "aria-selected": isSelected(value)
      }), [value]) : null;
    }
    var onKeydown = function onKeydown(event) {
      var which = event.which,
        ctrlKey = event.ctrlKey;
      switch (which) {
        // >>> Arrow keys & ctrl + n/p on Mac
        case _KeyCode.default.N:
        case _KeyCode.default.P:
        case _KeyCode.default.UP:
        case _KeyCode.default.DOWN:
          {
            var offset = 0;
            if (which === _KeyCode.default.UP) {
              offset = -1;
            } else if (which === _KeyCode.default.DOWN) {
              offset = 1;
            } else if ((0, _platformUtil.isPlatformMac)() && ctrlKey) {
              if (which === _KeyCode.default.N) {
                offset = 1;
              } else if (which === _KeyCode.default.P) {
                offset = -1;
              }
            }
            if (offset !== 0) {
              var nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset, offset);
              scrollIntoView(nextActiveIndex);
              setActive(nextActiveIndex, true);
            }
            break;
          }
        // >>> Select
        case _KeyCode.default.ENTER:
          {
            // value
            var item = memoFlattenOptions.value[state.activeIndex];
            if (item && !item.data.disabled) {
              onSelectValue(item.value);
            } else {
              onSelectValue(undefined);
            }
            if (baseProps.open) {
              event.preventDefault();
            }
            break;
          }
        // >>> Close
        case _KeyCode.default.ESC:
          {
            baseProps.toggleOpen(false);
            if (baseProps.open) {
              event.stopPropagation();
            }
          }
      }
    };
    var onKeyup = function onKeyup() {};
    var scrollTo = function scrollTo(index) {
      scrollIntoView(index);
    };
    expose({
      onKeydown: onKeydown,
      onKeyup: onKeyup,
      scrollTo: scrollTo
    });
    return function () {
      // const {
      //   renderItem,
      //   listRef,
      //   onListMouseDown,
      //   itemPrefixCls,
      //   setActive,
      //   onSelectValue,
      //   memoFlattenOptions,
      //   $slots,
      // } = this as any;
      var id = baseProps.id,
        notFoundContent = baseProps.notFoundContent,
        onPopupScroll = baseProps.onPopupScroll;
      var menuItemSelectedIcon = props.menuItemSelectedIcon,
        fieldNames = props.fieldNames,
        virtual = props.virtual,
        listHeight = props.listHeight,
        listItemHeight = props.listItemHeight;
      var renderOption = slots.option;
      var activeIndex = state.activeIndex;
      var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
        return fieldNames[key];
      });
      // ========================== Render ==========================
      if (memoFlattenOptions.value.length === 0) {
        return (0, _vue.createVNode)("div", {
          "role": "listbox",
          "id": "".concat(id, "_list"),
          "class": "".concat(itemPrefixCls.value, "-empty"),
          "onMousedown": onListMouseDown
        }, [notFoundContent]);
      }
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
        "role": "listbox",
        "id": "".concat(id, "_list"),
        "style": {
          height: 0,
          width: 0,
          overflow: 'hidden'
        }
      }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), (0, _vue.createVNode)(_vcVirtualList.default, {
        "itemKey": "key",
        "ref": listRef,
        "data": memoFlattenOptions.value,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "fullHeight": false,
        "onMousedown": onListMouseDown,
        "onScroll": onPopupScroll,
        "virtual": virtual
      }, {
        default: function _default(item, itemIndex) {
          var _classNames;
          var group = item.group,
            groupOption = item.groupOption,
            data = item.data,
            value = item.value;
          var key = data.key;
          var label = typeof item.label === 'function' ? item.label() : item.label;
          // Group
          if (group) {
            var _data$title;
            var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) && label;
            return (0, _vue.createVNode)("div", {
              "class": (0, _classNames2.default)(itemPrefixCls.value, "".concat(itemPrefixCls.value, "-group")),
              "title": groupTitle
            }, [renderOption ? renderOption(data) : label !== undefined ? label : key]);
          }
          var disabled = data.disabled,
            title = data.title,
            children = data.children,
            style = data.style,
            cls = data.class,
            className = data.className,
            otherProps = (0, _objectWithoutProperties2.default)(data, _excluded);
          var passedProps = (0, _omit.default)(otherProps, omitFieldNameList);
          // Option
          var selected = isSelected(value);
          var optionPrefixCls = "".concat(itemPrefixCls.value, "-option");
          var optionClassName = (0, _classNames2.default)(itemPrefixCls.value, optionPrefixCls, cls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
          var mergedLabel = getLabel(item);
          var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
          // https://github.com/ant-design/ant-design/issues/34145
          var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
          // https://github.com/ant-design/ant-design/issues/26717
          var optionTitle = isTitleType(content) ? content.toString() : undefined;
          if (title !== undefined) {
            optionTitle = title;
          }
          return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, passedProps), {}, {
            "aria-selected": selected,
            "class": optionClassName,
            "title": optionTitle,
            "onMousemove": function onMousemove(e) {
              if (otherProps.onMousemove) {
                otherProps.onMousemove(e);
              }
              if (activeIndex === itemIndex || disabled) {
                return;
              }
              setActive(itemIndex);
            },
            "onClick": function onClick(e) {
              if (!disabled) {
                onSelectValue(value);
              }
              if (otherProps.onClick) {
                otherProps.onClick(e);
              }
            },
            "style": style
          }), [(0, _vue.createVNode)("div", {
            "class": "".concat(optionPrefixCls, "-content")
          }, [renderOption ? renderOption(data) : content]), (0, _propsUtil.isValidElement)(menuItemSelectedIcon) || selected, iconVisible && (0, _vue.createVNode)(_TransBtn.default, {
            "class": "".concat(itemPrefixCls.value, "-option-state"),
            "customizeIcon": menuItemSelectedIcon,
            "customizeIconProps": {
              isSelected: selected
            }
          }, {
            default: function _default() {
              return [selected ? '✓' : null];
            }
          })]);
        }
      })]);
    };
  }
});
var _default2 = OptionList;
exports.default = _default2;