import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["disabled", "title", "children", "style", "class", "className"];
import { resolveDirective as _resolveDirective, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import TransBtn from './TransBtn';
import KeyCode from '../_util/KeyCode';
import classNames from '../_util/classNames';
import pickAttrs from '../_util/pickAttrs';
import { isValidElement } from '../_util/props-util';
import createRef from '../_util/createRef';
import { computed, defineComponent, nextTick, reactive, toRaw, watch } from 'vue';
import List from '../vc-virtual-list';
import useMemo from '../_util/hooks/useMemo';
import { isPlatformMac } from './utils/platformUtil';
import omit from '../_util/omit';
import useBaseProps from './hooks/useBaseProps';
import useSelectProps from './SelectContext';
function isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
var OptionList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'OptionList',
  inheritAttrs: false,
  slots: ['option'],
  setup: function setup(_, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots;
    var baseProps = useBaseProps();
    var props = useSelectProps();
    var itemPrefixCls = computed(function () {
      return "".concat(baseProps.prefixCls, "-item");
    });
    var memoFlattenOptions = useMemo(function () {
      return props.flattenOptions;
    }, [function () {
      return baseProps.open;
    }, function () {
      return props.flattenOptions;
    }], function (next) {
      return next[0];
    });
    // =========================== List ===========================
    var listRef = createRef();
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
    var state = reactive({
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
    watch([function () {
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
    watch([function () {
      return baseProps.open;
    }, function () {
      return baseProps.searchValue;
    }], function () {
      if (!baseProps.multiple && baseProps.open && props.rawValues.size === 1) {
        var value = Array.from(props.rawValues)[0];
        var index = toRaw(memoFlattenOptions.value).findIndex(function (_ref2) {
          var data = _ref2.data;
          return data[props.fieldNames.value] === value;
        });
        if (index !== -1) {
          setActive(index);
          nextTick(function () {
            scrollIntoView(index);
          });
        }
      }
      // Force trigger scrollbar visible when open
      if (baseProps.open) {
        nextTick(function () {
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
      var attrs = pickAttrs(itemData, true);
      var mergedLabel = getLabel(item);
      return item ? _createVNode("div", _objectSpread(_objectSpread({
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
        case KeyCode.N:
        case KeyCode.P:
        case KeyCode.UP:
        case KeyCode.DOWN:
          {
            var offset = 0;
            if (which === KeyCode.UP) {
              offset = -1;
            } else if (which === KeyCode.DOWN) {
              offset = 1;
            } else if (isPlatformMac() && ctrlKey) {
              if (which === KeyCode.N) {
                offset = 1;
              } else if (which === KeyCode.P) {
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
        case KeyCode.ENTER:
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
        case KeyCode.ESC:
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
        return _createVNode("div", {
          "role": "listbox",
          "id": "".concat(id, "_list"),
          "class": "".concat(itemPrefixCls.value, "-empty"),
          "onMousedown": onListMouseDown
        }, [notFoundContent]);
      }
      return _createVNode(_Fragment, null, [_createVNode("div", {
        "role": "listbox",
        "id": "".concat(id, "_list"),
        "style": {
          height: 0,
          width: 0,
          overflow: 'hidden'
        }
      }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), _createVNode(List, {
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
            return _createVNode("div", {
              "class": classNames(itemPrefixCls.value, "".concat(itemPrefixCls.value, "-group")),
              "title": groupTitle
            }, [renderOption ? renderOption(data) : label !== undefined ? label : key]);
          }
          var disabled = data.disabled,
            title = data.title,
            children = data.children,
            style = data.style,
            cls = data.class,
            className = data.className,
            otherProps = _objectWithoutProperties(data, _excluded);
          var passedProps = omit(otherProps, omitFieldNameList);
          // Option
          var selected = isSelected(value);
          var optionPrefixCls = "".concat(itemPrefixCls.value, "-option");
          var optionClassName = classNames(itemPrefixCls.value, optionPrefixCls, cls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
          var mergedLabel = getLabel(item);
          var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
          // https://github.com/ant-design/ant-design/issues/34145
          var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
          // https://github.com/ant-design/ant-design/issues/26717
          var optionTitle = isTitleType(content) ? content.toString() : undefined;
          if (title !== undefined) {
            optionTitle = title;
          }
          return _createVNode("div", _objectSpread(_objectSpread({}, passedProps), {}, {
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
          }), [_createVNode("div", {
            "class": "".concat(optionPrefixCls, "-content")
          }, [renderOption ? renderOption(data) : content]), isValidElement(menuItemSelectedIcon) || selected, iconVisible && _createVNode(TransBtn, {
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
export default OptionList;