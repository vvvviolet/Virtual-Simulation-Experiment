import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import useState from '../../_util/hooks/useState';
import { computed } from 'vue';
export var DEFAULT_PAGE_SIZE = 10;
export function getPaginationParam(pagination, mergedPagination) {
  var param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  var paginationObj = pagination && _typeof(pagination) === 'object' ? pagination : {};
  Object.keys(paginationObj).forEach(function (pageProp) {
    var value = mergedPagination[pageProp];
    if (typeof value !== 'function') {
      param[pageProp] = value;
    }
  });
  return param;
}
function extendsObject() {
  var result = {};
  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }
  list.forEach(function (obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        if (val !== undefined) {
          result[key] = val;
        }
      });
    }
  });
  return result;
}
export default function usePagination(totalRef, paginationRef, onChange) {
  var pagination = computed(function () {
    return paginationRef.value && _typeof(paginationRef.value) === 'object' ? paginationRef.value : {};
  });
  var paginationTotal = computed(function () {
    return pagination.value.total || 0;
  });
  var _useState = useState(function () {
      return {
        current: 'defaultCurrent' in pagination.value ? pagination.value.defaultCurrent : 1,
        pageSize: 'defaultPageSize' in pagination.value ? pagination.value.defaultPageSize : DEFAULT_PAGE_SIZE
      };
    }),
    _useState2 = _slicedToArray(_useState, 2),
    innerPagination = _useState2[0],
    setInnerPagination = _useState2[1];
  // ============ Basic Pagination Config ============
  var mergedPagination = computed(function () {
    var mP = extendsObject(innerPagination.value, pagination.value, {
      total: paginationTotal.value > 0 ? paginationTotal.value : totalRef.value
    });
    // Reset `current` if data length or pageSize changed
    var maxPage = Math.ceil((paginationTotal.value || totalRef.value) / mP.pageSize);
    if (mP.current > maxPage) {
      // Prevent a maximum page count of 0
      mP.current = maxPage || 1;
    }
    return mP;
  });
  var refreshPagination = function refreshPagination(current, pageSize) {
    if (pagination.value === false) return;
    setInnerPagination({
      current: current !== null && current !== void 0 ? current : 1,
      pageSize: pageSize || mergedPagination.value.pageSize
    });
  };
  var onInternalChange = function onInternalChange(current, pageSize) {
    if (pagination.value) {
      var _pagination$value$onC, _pagination$value;
      (_pagination$value$onC = (_pagination$value = pagination.value).onChange) === null || _pagination$value$onC === void 0 ? void 0 : _pagination$value$onC.call(_pagination$value, current, pageSize);
    }
    refreshPagination(current, pageSize);
    onChange(current, pageSize || mergedPagination.value.pageSize);
  };
  return [computed(function () {
    return pagination.value === false ? {} : _objectSpread(_objectSpread({}, mergedPagination.value), {}, {
      onChange: onInternalChange
    });
  }), refreshPagination];
}