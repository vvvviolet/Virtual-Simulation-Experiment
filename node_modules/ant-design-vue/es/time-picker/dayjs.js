import _extends from "@babel/runtime/helpers/esm/extends";
import createTimePicker from './time-picker';
import dayjsGenerateConfig from '../vc-picker/generate/dayjs';
var _createTimePicker = createTimePicker(dayjsGenerateConfig),
  TimePicker = _createTimePicker.TimePicker,
  TimeRangePicker = _createTimePicker.TimeRangePicker;
/* istanbul ignore next */
export { TimePicker, TimeRangePicker };
export default _extends(TimePicker, {
  TimePicker: TimePicker,
  TimeRangePicker: TimeRangePicker,
  install: function install(app) {
    app.component(TimePicker.name, TimePicker);
    app.component(TimeRangePicker.name, TimeRangePicker);
    return app;
  }
});