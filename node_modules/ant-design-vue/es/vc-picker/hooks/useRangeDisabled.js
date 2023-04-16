import { getValue } from '../utils/miscUtil';
import { isSameDate, getQuarter } from '../utils/dateUtil';
import { computed } from 'vue';
export default function useRangeDisabled(_ref, openRecordsRef) {
  var picker = _ref.picker,
    locale = _ref.locale,
    selectedValue = _ref.selectedValue,
    disabledDate = _ref.disabledDate,
    disabled = _ref.disabled,
    generateConfig = _ref.generateConfig;
  var startDate = computed(function () {
    return getValue(selectedValue.value, 0);
  });
  var endDate = computed(function () {
    return getValue(selectedValue.value, 1);
  });
  function weekFirstDate(date) {
    return generateConfig.value.locale.getWeekFirstDate(locale.value.locale, date);
  }
  function monthNumber(date) {
    var year = generateConfig.value.getYear(date);
    var month = generateConfig.value.getMonth(date);
    return year * 100 + month;
  }
  function quarterNumber(date) {
    var year = generateConfig.value.getYear(date);
    var quarter = getQuarter(generateConfig.value, date);
    return year * 10 + quarter;
  }
  var disabledStartDate = function disabledStartDate(date) {
    var _disabledDate$value;
    if (disabledDate && disabledDate !== null && disabledDate !== void 0 && (_disabledDate$value = disabledDate.value) !== null && _disabledDate$value !== void 0 && _disabledDate$value.call(disabledDate, date)) {
      return true;
    }
    // Disabled range
    if (disabled[1] && endDate) {
      return !isSameDate(generateConfig.value, date, endDate.value) && generateConfig.value.isAfter(date, endDate.value);
    }
    // Disabled part
    if (openRecordsRef.value[1] && endDate.value) {
      switch (picker.value) {
        case 'quarter':
          return quarterNumber(date) > quarterNumber(endDate.value);
        case 'month':
          return monthNumber(date) > monthNumber(endDate.value);
        case 'week':
          return weekFirstDate(date) > weekFirstDate(endDate.value);
        default:
          return !isSameDate(generateConfig.value, date, endDate.value) && generateConfig.value.isAfter(date, endDate.value);
      }
    }
    return false;
  };
  var disabledEndDate = function disabledEndDate(date) {
    var _disabledDate$value2;
    if ((_disabledDate$value2 = disabledDate.value) !== null && _disabledDate$value2 !== void 0 && _disabledDate$value2.call(disabledDate, date)) {
      return true;
    }
    // Disabled range
    if (disabled[0] && startDate) {
      return !isSameDate(generateConfig.value, date, endDate.value) && generateConfig.value.isAfter(startDate.value, date);
    }
    // Disabled part
    if (openRecordsRef.value[0] && startDate.value) {
      switch (picker.value) {
        case 'quarter':
          return quarterNumber(date) < quarterNumber(startDate.value);
        case 'month':
          return monthNumber(date) < monthNumber(startDate.value);
        case 'week':
          return weekFirstDate(date) < weekFirstDate(startDate.value);
        default:
          return !isSameDate(generateConfig.value, date, startDate.value) && generateConfig.value.isAfter(startDate.value, date);
      }
    }
    return false;
  };
  return [disabledStartDate, disabledEndDate];
}