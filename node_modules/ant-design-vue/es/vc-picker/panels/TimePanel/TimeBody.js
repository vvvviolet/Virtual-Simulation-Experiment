import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import TimeUnitColumn from './TimeUnitColumn';
import { leftPad } from '../../utils/miscUtil';
import { setTime as utilSetTime } from '../../utils/timeUtil';
import { cloneElement } from '../../../_util/vnode';
import { onBeforeUpdate, ref, watchEffect, computed, defineComponent } from 'vue';
function generateUnits(start, end, step, disabledUnits) {
  var units = [];
  for (var i = start; i <= end; i += step) {
    units.push({
      label: leftPad(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i)
    });
  }
  return units;
}
var TimeBody = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TimeBody',
  inheritAttrs: false,
  props: ['generateConfig', 'prefixCls', 'operationRef', 'activeColumnIndex', 'value', 'showHour', 'showMinute', 'showSecond', 'use12Hours', 'hourStep', 'minuteStep', 'secondStep', 'disabledHours', 'disabledMinutes', 'disabledSeconds', 'disabledTime', 'hideDisabledOptions', 'onSelect'],
  setup: function setup(props) {
    var originHour = computed(function () {
      return props.value ? props.generateConfig.getHour(props.value) : -1;
    });
    var isPM = computed(function () {
      if (props.use12Hours) {
        return originHour.value >= 12; // -1 means should display AM
      } else {
        return false;
      }
    });
    var hour = computed(function () {
      // Should additional logic to handle 12 hours
      if (props.use12Hours) {
        return originHour.value % 12;
      } else {
        return originHour.value;
      }
    });
    var minute = computed(function () {
      return props.value ? props.generateConfig.getMinute(props.value) : -1;
    });
    var second = computed(function () {
      return props.value ? props.generateConfig.getSecond(props.value) : -1;
    });
    var now = ref(props.generateConfig.getNow());
    var mergedDisabledHours = ref();
    var mergedDisabledMinutes = ref();
    var mergedDisabledSeconds = ref();
    onBeforeUpdate(function () {
      now.value = props.generateConfig.getNow();
    });
    watchEffect(function () {
      if (props.disabledTime) {
        var disabledConfig = props.disabledTime(now);
        var _ref = [disabledConfig.disabledHours, disabledConfig.disabledMinutes, disabledConfig.disabledSeconds];
        mergedDisabledHours.value = _ref[0];
        mergedDisabledMinutes.value = _ref[1];
        mergedDisabledSeconds.value = _ref[2];
      } else {
        var _ref2 = [props.disabledHours, props.disabledMinutes, props.disabledSeconds];
        mergedDisabledHours.value = _ref2[0];
        mergedDisabledMinutes.value = _ref2[1];
        mergedDisabledSeconds.value = _ref2[2];
      }
    });
    var setTime = function setTime(isNewPM, newHour, newMinute, newSecond) {
      var newDate = props.value || props.generateConfig.getNow();
      var mergedHour = Math.max(0, newHour);
      var mergedMinute = Math.max(0, newMinute);
      var mergedSecond = Math.max(0, newSecond);
      newDate = utilSetTime(props.generateConfig, newDate, !props.use12Hours || !isNewPM ? mergedHour : mergedHour + 12, mergedMinute, mergedSecond);
      return newDate;
    };
    // ========================= Unit =========================
    var rawHours = computed(function () {
      var _props$hourStep;
      return generateUnits(0, 23, (_props$hourStep = props.hourStep) !== null && _props$hourStep !== void 0 ? _props$hourStep : 1, mergedDisabledHours.value && mergedDisabledHours.value());
    });
    // const memorizedRawHours = useMemo(() => rawHours, rawHours, shouldUnitsUpdate);
    var AMPMDisabled = computed(function () {
      if (!props.use12Hours) {
        return [false, false];
      }
      var AMPMDisabled = [true, true];
      rawHours.value.forEach(function (_ref3) {
        var disabled = _ref3.disabled,
          hourValue = _ref3.value;
        if (disabled) return;
        if (hourValue >= 12) {
          AMPMDisabled[1] = false;
        } else {
          AMPMDisabled[0] = false;
        }
      });
      return AMPMDisabled;
    });
    var hours = computed(function () {
      if (!props.use12Hours) return rawHours.value;
      return rawHours.value.filter(isPM.value ? function (hourMeta) {
        return hourMeta.value >= 12;
      } : function (hourMeta) {
        return hourMeta.value < 12;
      }).map(function (hourMeta) {
        var hourValue = hourMeta.value % 12;
        var hourLabel = hourValue === 0 ? '12' : leftPad(hourValue, 2);
        return _objectSpread(_objectSpread({}, hourMeta), {}, {
          label: hourLabel,
          value: hourValue
        });
      });
    });
    var minutes = computed(function () {
      var _props$minuteStep;
      return generateUnits(0, 59, (_props$minuteStep = props.minuteStep) !== null && _props$minuteStep !== void 0 ? _props$minuteStep : 1, mergedDisabledMinutes.value && mergedDisabledMinutes.value(originHour.value));
    });
    var seconds = computed(function () {
      var _props$secondStep;
      return generateUnits(0, 59, (_props$secondStep = props.secondStep) !== null && _props$secondStep !== void 0 ? _props$secondStep : 1, mergedDisabledSeconds.value && mergedDisabledSeconds.value(originHour.value, minute.value));
    });
    return function () {
      var prefixCls = props.prefixCls,
        operationRef = props.operationRef,
        activeColumnIndex = props.activeColumnIndex,
        showHour = props.showHour,
        showMinute = props.showMinute,
        showSecond = props.showSecond,
        use12Hours = props.use12Hours,
        hideDisabledOptions = props.hideDisabledOptions,
        onSelect = props.onSelect;
      var columns = [];
      var contentPrefixCls = "".concat(prefixCls, "-content");
      var columnPrefixCls = "".concat(prefixCls, "-time-panel");
      // ====================== Operations ======================
      operationRef.value = {
        onUpDown: function onUpDown(diff) {
          var column = columns[activeColumnIndex];
          if (column) {
            var valueIndex = column.units.findIndex(function (unit) {
              return unit.value === column.value;
            });
            var unitLen = column.units.length;
            for (var i = 1; i < unitLen; i += 1) {
              var nextUnit = column.units[(valueIndex + diff * i + unitLen) % unitLen];
              if (nextUnit.disabled !== true) {
                column.onSelect(nextUnit.value);
                break;
              }
            }
          }
        }
      };
      // ======================== Render ========================
      function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
        if (condition !== false) {
          columns.push({
            node: cloneElement(node, {
              prefixCls: columnPrefixCls,
              value: columnValue,
              active: activeColumnIndex === columns.length,
              onSelect: onColumnSelect,
              units: units,
              hideDisabledOptions: hideDisabledOptions
            }),
            onSelect: onColumnSelect,
            value: columnValue,
            units: units
          });
        }
      }
      // Hour
      addColumnNode(showHour, _createVNode(TimeUnitColumn, {
        "key": "hour"
      }, null), hour.value, hours.value, function (num) {
        onSelect(setTime(isPM.value, num, minute.value, second.value), 'mouse');
      });
      // Minute
      addColumnNode(showMinute, _createVNode(TimeUnitColumn, {
        "key": "minute"
      }, null), minute.value, minutes.value, function (num) {
        onSelect(setTime(isPM.value, hour.value, num, second.value), 'mouse');
      });
      // Second
      addColumnNode(showSecond, _createVNode(TimeUnitColumn, {
        "key": "second"
      }, null), second.value, seconds.value, function (num) {
        onSelect(setTime(isPM.value, hour.value, minute.value, num), 'mouse');
      });
      // 12 Hours
      var PMIndex = -1;
      if (typeof isPM.value === 'boolean') {
        PMIndex = isPM.value ? 1 : 0;
      }
      addColumnNode(use12Hours === true, _createVNode(TimeUnitColumn, {
        "key": "12hours"
      }, null), PMIndex, [{
        label: 'AM',
        value: 0,
        disabled: AMPMDisabled.value[0]
      }, {
        label: 'PM',
        value: 1,
        disabled: AMPMDisabled.value[1]
      }], function (num) {
        onSelect(setTime(!!num, hour.value, minute.value, second.value), 'mouse');
      });
      return _createVNode("div", {
        "class": contentPrefixCls
      }, [columns.map(function (_ref4) {
        var node = _ref4.node;
        return node;
      })]);
    };
  }
});
export default TimeBody;