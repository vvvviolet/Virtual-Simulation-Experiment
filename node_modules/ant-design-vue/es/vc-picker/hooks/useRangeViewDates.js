import { getValue, updateValues } from '../utils/miscUtil';
import { getClosingViewDate, isSameYear, isSameMonth, isSameDecade } from '../utils/dateUtil';
import { watchEffect, computed, ref } from 'vue';
function getStartEndDistance(startDate, endDate, picker, generateConfig) {
  var startNext = getClosingViewDate(startDate, picker, generateConfig, 1);
  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return 'same';
    }
    if (compareFunc(startNext, endDate)) {
      return 'closing';
    }
    return 'far';
  }
  switch (picker) {
    case 'year':
      return getDistance(function (start, end) {
        return isSameDecade(generateConfig, start, end);
      });
    case 'quarter':
    case 'month':
      return getDistance(function (start, end) {
        return isSameYear(generateConfig, start, end);
      });
    default:
      return getDistance(function (start, end) {
        return isSameMonth(generateConfig, start, end);
      });
  }
}
function getRangeViewDate(values, index, picker, generateConfig) {
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);
  if (index === 0) {
    return startDate;
  }
  if (startDate && endDate) {
    var distance = getStartEndDistance(startDate, endDate, picker, generateConfig);
    switch (distance) {
      case 'same':
        return startDate;
      case 'closing':
        return startDate;
      default:
        return getClosingViewDate(endDate, picker, generateConfig, -1);
    }
  }
  return startDate;
}
export default function useRangeViewDates(_ref) {
  var values = _ref.values,
    picker = _ref.picker,
    defaultDates = _ref.defaultDates,
    generateConfig = _ref.generateConfig;
  var defaultViewDates = ref([getValue(defaultDates, 0), getValue(defaultDates, 1)]);
  var viewDates = ref(null);
  var startDate = computed(function () {
    return getValue(values.value, 0);
  });
  var endDate = computed(function () {
    return getValue(values.value, 1);
  });
  var getViewDate = function getViewDate(index) {
    // If set default view date, use it
    if (defaultViewDates.value[index]) {
      return defaultViewDates.value[index];
    }
    return getValue(viewDates.value, index) || getRangeViewDate(values.value, index, picker.value, generateConfig.value) || startDate.value || endDate.value || generateConfig.value.getNow();
  };
  var startViewDate = ref(null);
  var endViewDate = ref(null);
  watchEffect(function () {
    startViewDate.value = getViewDate(0);
    endViewDate.value = getViewDate(1);
  });
  function setViewDate(viewDate, index) {
    if (viewDate) {
      var newViewDates = updateValues(viewDates.value, viewDate, index);
      // Set view date will clean up default one
      // Should always be an array
      defaultViewDates.value = updateValues(defaultViewDates.value, null, index) || [null, null];
      // Reset another one when not have value
      var anotherIndex = (index + 1) % 2;
      if (!getValue(values.value, anotherIndex)) {
        newViewDates = updateValues(newViewDates, viewDate, anotherIndex);
      }
      viewDates.value = newViewDates;
    } else if (startDate.value || endDate.value) {
      // Reset all when has values when `viewDate` is `null` which means from open trigger
      viewDates.value = null;
    }
  }
  return [startViewDate, endViewDate, setViewDate];
}