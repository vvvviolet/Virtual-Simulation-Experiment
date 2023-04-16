import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["scrollTop"];
/**
 * Our algorithm have additional one ghost item
 * whose index as `data.length` to simplify the calculation
 */
export var GHOST_ITEM_KEY = '__vc_ghost_item__';
/**
 * Safari has the elasticity effect which provides negative `scrollTop` value.
 * We should ignore it since will make scroll animation shake.
 */
export function alignScrollTop(scrollTop, scrollRange) {
  if (scrollTop < 0) {
    return 0;
  }
  if (scrollTop >= scrollRange) {
    return scrollRange;
  }
  return scrollTop;
}
/**
 * Get node `offsetHeight`. We prefer node is a dom element directly.
 * But if not provided, downgrade to `findDOMNode` to get the real dom element.
 */
export function getNodeHeight(node) {
  return node ? node.offsetHeight : 0;
}
/**
 * Calculate the located item absolute top with whole scroll height
 */
export function getItemAbsoluteTop(_ref) {
  var scrollTop = _ref.scrollTop,
    rest = _objectWithoutProperties(_ref, _excluded);
  return scrollTop + getItemRelativeTop(rest);
}
/**
 * Calculate the located item related top with current window height
 */
export function getItemRelativeTop(_ref2) {
  var itemIndex = _ref2.itemIndex,
    itemOffsetPtg = _ref2.itemOffsetPtg,
    itemElementHeights = _ref2.itemElementHeights,
    scrollPtg = _ref2.scrollPtg,
    clientHeight = _ref2.clientHeight,
    getItemKey = _ref2.getItemKey;
  var locatedItemHeight = itemElementHeights[getItemKey(itemIndex)] || 0;
  var locatedItemTop = scrollPtg * clientHeight;
  var locatedItemOffset = itemOffsetPtg * locatedItemHeight;
  return Math.floor(locatedItemTop - locatedItemOffset);
}
export function getCompareItemRelativeTop(_ref3) {
  var locatedItemRelativeTop = _ref3.locatedItemRelativeTop,
    locatedItemIndex = _ref3.locatedItemIndex,
    compareItemIndex = _ref3.compareItemIndex,
    startIndex = _ref3.startIndex,
    endIndex = _ref3.endIndex,
    getItemKey = _ref3.getItemKey,
    itemElementHeights = _ref3.itemElementHeights;
  var originCompareItemTop = locatedItemRelativeTop;
  var compareItemKey = getItemKey(compareItemIndex);
  if (compareItemIndex <= locatedItemIndex) {
    for (var index = locatedItemIndex; index >= startIndex; index -= 1) {
      var key = getItemKey(index);
      if (key === compareItemKey) {
        break;
      }
      var prevItemKey = getItemKey(index - 1);
      originCompareItemTop -= itemElementHeights[prevItemKey] || 0;
    }
  } else {
    for (var _index = locatedItemIndex; _index <= endIndex; _index += 1) {
      var _key = getItemKey(_index);
      if (_key === compareItemKey) {
        break;
      }
      originCompareItemTop += itemElementHeights[_key] || 0;
    }
  }
  return originCompareItemTop;
}
export function getScrollPercentage(_ref4) {
  var scrollTop = _ref4.scrollTop,
    scrollHeight = _ref4.scrollHeight,
    clientHeight = _ref4.clientHeight;
  if (scrollHeight <= clientHeight) {
    return 0;
  }
  var scrollRange = scrollHeight - clientHeight;
  var alignedScrollTop = alignScrollTop(scrollTop, scrollRange);
  var scrollTopPtg = alignedScrollTop / scrollRange;
  return scrollTopPtg;
}
export function getElementScrollPercentage(element) {
  if (!element) {
    return 0;
  }
  return getScrollPercentage(element);
}
/**
 * Get location item and its align percentage with the scroll percentage.
 * We should measure current scroll position to decide which item is the location item.
 * And then fill the top count and bottom count with the base of location item.
 *
 * `total` should be the real count instead of `total - 1` in calculation.
 */
function getLocationItem(scrollPtg, total) {
  var itemIndex = Math.floor(scrollPtg * total);
  var itemTopPtg = itemIndex / total;
  var itemBottomPtg = (itemIndex + 1) / total;
  var itemOffsetPtg = (scrollPtg - itemTopPtg) / (itemBottomPtg - itemTopPtg);
  return {
    index: itemIndex,
    offsetPtg: itemOffsetPtg
  };
}
/**
 * Get display items start, end, located item index. This is pure math calculation
 */
export function getRangeIndex(scrollPtg, itemCount, visibleCount) {
  var _getLocationItem = getLocationItem(scrollPtg, itemCount),
    index = _getLocationItem.index,
    offsetPtg = _getLocationItem.offsetPtg;
  var beforeCount = Math.ceil(scrollPtg * visibleCount);
  var afterCount = Math.ceil((1 - scrollPtg) * visibleCount);
  return {
    itemIndex: index,
    itemOffsetPtg: offsetPtg,
    startIndex: Math.max(0, index - beforeCount),
    endIndex: Math.min(itemCount - 1, index + afterCount)
  };
}
export function requireVirtual(height, itemHeight, count, virtual) {
  return virtual !== false && typeof height === 'number' && count * itemHeight > height;
}