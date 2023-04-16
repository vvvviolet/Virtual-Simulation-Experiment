"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRangeViewDates;
var _miscUtil = require("../utils/miscUtil");
var _dateUtil = require("../utils/dateUtil");
var _vue = require("vue");
function getStartEndDistance(startDate, endDate, picker, generateConfig) {
  var startNext = (0, _dateUtil.getClosingViewDate)(startDate, picker, generateConfig, 1);
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
        return (0, _dateUtil.isSameDecade)(generateConfig, start, end);
      });
    case 'quarter':
    case 'month':
      return getDistance(function (start, end) {
        return (0, _dateUtil.isSameYear)(generateConfig, start, end);
      });
    default:
      return getDistance(function (start, end) {
        return (0, _dateUtil.isSameMonth)(generateConfig, start, end);
      });
  }
}
function getRangeViewDate(values, index, picker, generateConfig) {
  var startDate = (0, _miscUtil.getValue)(values, 0);
  var endDate = (0, _miscUtil.getValue)(values, 1);
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
        return (0, _dateUtil.getClosingViewDate)(endDate, picker, generateConfig, -1);
    }
  }
  return startDate;
}
function useRangeViewDates(_ref) {
  var values = _ref.values,
    picker = _ref.picker,
    defaultDates = _ref.defaultDates,
    generateConfig = _ref.generateConfig;
  var defaultViewDates = (0, _vue.ref)([(0, _miscUtil.getValue)(defaultDates, 0), (0, _miscUtil.getValue)(defaultDates, 1)]);
  var viewDates = (0, _vue.ref)(null);
  var startDate = (0, _vue.computed)(function () {
    return (0, _miscUtil.getValue)(values.value, 0);
  });
  var endDate = (0, _vue.computed)(function () {
    return (0, _miscUtil.getValue)(values.value, 1);
  });
  var getViewDate = function getViewDate(index) {
    // If set default view date, use it
    if (defaultViewDates.value[index]) {
      return defaultViewDates.value[index];
    }
    return (0, _miscUtil.getValue)(viewDates.value, index) || getRangeViewDate(values.value, index, picker.value, generateConfig.value) || startDate.value || endDate.value || generateConfig.value.getNow();
  };
  var startViewDate = (0, _vue.ref)(null);
  var endViewDate = (0, _vue.ref)(null);
  (0, _vue.watchEffect)(function () {
    startViewDate.value = getViewDate(0);
    endViewDate.value = getViewDate(1);
  });
  function setViewDate(viewDate, index) {
    if (viewDate) {
      var newViewDates = (0, _miscUtil.updateValues)(viewDates.value, viewDate, index);
      // Set view date will clean up default one
      // Should always be an array
      defaultViewDates.value = (0, _miscUtil.updateValues)(defaultViewDates.value, null, index) || [null, null];
      // Reset another one when not have value
      var anotherIndex = (index + 1) % 2;
      if (!(0, _miscUtil.getValue)(values.value, anotherIndex)) {
        newViewDates = (0, _miscUtil.updateValues)(newViewDates, viewDate, anotherIndex);
      }
      viewDates.value = newViewDates;
    } else if (startDate.value || endDate.value) {
      // Reset all when has values when `viewDate` is `null` which means from open trigger
      viewDates.value = null;
    }
  }
  return [startViewDate, endViewDate, setViewDate];
}