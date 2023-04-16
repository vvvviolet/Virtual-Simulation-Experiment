import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { computed, ref, watchEffect } from 'vue';
import { useBaseProps } from '../../vc-select';
import KeyCode from '../../_util/KeyCode';
import { SEARCH_MARK } from '../hooks/useSearchOptions';
export default (function (context, options, fieldNames, activeValueCells, setActiveValueCells,
// containerRef: Ref<HTMLElement>,
onKeyBoardSelect) {
  var baseProps = useBaseProps();
  var rtl = computed(function () {
    return baseProps.direction === 'rtl';
  });
  var _ref = [ref([]), ref(), ref([])],
    validActiveValueCells = _ref[0],
    lastActiveIndex = _ref[1],
    lastActiveOptions = _ref[2];
  watchEffect(function () {
    var activeIndex = -1;
    var currentOptions = options.value;
    var mergedActiveIndexes = [];
    var mergedActiveValueCells = [];
    var len = activeValueCells.value.length;
    // Fill validate active value cells and index
    var _loop = function _loop(i) {
      // Mark the active index for current options
      var nextActiveIndex = currentOptions.findIndex(function (option) {
        return option[fieldNames.value.value] === activeValueCells.value[i];
      });
      if (nextActiveIndex === -1) {
        return "break";
      }
      activeIndex = nextActiveIndex;
      mergedActiveIndexes.push(activeIndex);
      mergedActiveValueCells.push(activeValueCells.value[i]);
      currentOptions = currentOptions[activeIndex][fieldNames.value.children];
    };
    for (var i = 0; i < len && currentOptions; i += 1) {
      var _ret = _loop(i);
      if (_ret === "break") break;
    }
    // Fill last active options
    var activeOptions = options.value;
    for (var _i = 0; _i < mergedActiveIndexes.length - 1; _i += 1) {
      activeOptions = activeOptions[mergedActiveIndexes[_i]][fieldNames.value.children];
    }
    var _ref2 = [mergedActiveValueCells, activeIndex, activeOptions];
    validActiveValueCells.value = _ref2[0];
    lastActiveIndex.value = _ref2[1];
    lastActiveOptions.value = _ref2[2];
  });
  // Update active value cells and scroll to target element
  var internalSetActiveValueCells = function internalSetActiveValueCells(next) {
    setActiveValueCells(next);
  };
  // Same options offset
  var offsetActiveOption = function offsetActiveOption(offset) {
    var len = lastActiveOptions.value.length;
    var currentIndex = lastActiveIndex.value;
    if (currentIndex === -1 && offset < 0) {
      currentIndex = len;
    }
    for (var i = 0; i < len; i += 1) {
      currentIndex = (currentIndex + offset + len) % len;
      var option = lastActiveOptions.value[currentIndex];
      if (option && !option.disabled) {
        var value = option[fieldNames.value.value];
        var nextActiveCells = validActiveValueCells.value.slice(0, -1).concat(value);
        internalSetActiveValueCells(nextActiveCells);
        return;
      }
    }
  };
  // Different options offset
  var prevColumn = function prevColumn() {
    if (validActiveValueCells.value.length > 1) {
      var nextActiveCells = validActiveValueCells.value.slice(0, -1);
      internalSetActiveValueCells(nextActiveCells);
    } else {
      baseProps.toggleOpen(false);
    }
  };
  var nextColumn = function nextColumn() {
    var _lastActiveOptions$va;
    var nextOptions = ((_lastActiveOptions$va = lastActiveOptions.value[lastActiveIndex.value]) === null || _lastActiveOptions$va === void 0 ? void 0 : _lastActiveOptions$va[fieldNames.value.children]) || [];
    var nextOption = nextOptions.find(function (option) {
      return !option.disabled;
    });
    if (nextOption) {
      var nextActiveCells = [].concat(_toConsumableArray(validActiveValueCells.value), [nextOption[fieldNames.value.value]]);
      internalSetActiveValueCells(nextActiveCells);
    }
  };
  context.expose({
    // scrollTo: treeRef.current?.scrollTo,
    onKeydown: function onKeydown(event) {
      var which = event.which;
      switch (which) {
        // >>> Arrow keys
        case KeyCode.UP:
        case KeyCode.DOWN:
          {
            var offset = 0;
            if (which === KeyCode.UP) {
              offset = -1;
            } else if (which === KeyCode.DOWN) {
              offset = 1;
            }
            if (offset !== 0) {
              offsetActiveOption(offset);
            }
            break;
          }
        case KeyCode.LEFT:
          {
            if (rtl.value) {
              nextColumn();
            } else {
              prevColumn();
            }
            break;
          }
        case KeyCode.RIGHT:
          {
            if (rtl.value) {
              prevColumn();
            } else {
              nextColumn();
            }
            break;
          }
        case KeyCode.BACKSPACE:
          {
            if (!baseProps.searchValue) {
              prevColumn();
            }
            break;
          }
        // >>> Select
        case KeyCode.ENTER:
          {
            if (validActiveValueCells.value.length) {
              var option = lastActiveOptions.value[lastActiveIndex.value];
              // Search option should revert back of origin options
              var originOptions = (option === null || option === void 0 ? void 0 : option[SEARCH_MARK]) || [];
              if (originOptions.length) {
                onKeyBoardSelect(originOptions.map(function (opt) {
                  return opt[fieldNames.value.value];
                }), originOptions[originOptions.length - 1]);
              } else {
                onKeyBoardSelect(validActiveValueCells.value, option);
              }
            }
            break;
          }
        // >>> Close
        case KeyCode.ESC:
          {
            baseProps.toggleOpen(false);
            if (open) {
              event.stopPropagation();
            }
          }
      }
    },
    onKeyup: function onKeyup() {}
  });
});