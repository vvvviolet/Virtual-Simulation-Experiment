import _extends from "@babel/runtime/helpers/esm/extends";
import dayjsGenerateConfig from '../vc-picker/generate/dayjs';
import generatePicker from './generatePicker';
var _generatePicker = generatePicker(dayjsGenerateConfig),
  DatePicker = _generatePicker.DatePicker,
  WeekPicker = _generatePicker.WeekPicker,
  MonthPicker = _generatePicker.MonthPicker,
  YearPicker = _generatePicker.YearPicker,
  TimePicker = _generatePicker.TimePicker,
  QuarterPicker = _generatePicker.QuarterPicker,
  RangePicker = _generatePicker.RangePicker;
/* istanbul ignore next */
export { RangePicker, WeekPicker, MonthPicker, QuarterPicker };
export default _extends(DatePicker, {
  WeekPicker: WeekPicker,
  MonthPicker: MonthPicker,
  YearPicker: YearPicker,
  RangePicker: RangePicker,
  TimePicker: TimePicker,
  QuarterPicker: QuarterPicker,
  install: function install(app) {
    app.component(DatePicker.name, DatePicker);
    app.component(RangePicker.name, RangePicker);
    app.component(MonthPicker.name, MonthPicker);
    app.component(WeekPicker.name, WeekPicker);
    app.component(QuarterPicker.name, QuarterPicker);
    return app;
  }
});