import type { RangePickerTimeProps } from '../date-picker/generatePicker';
import type { CommonProps, DatePickerProps } from '../date-picker/generatePicker/props';
import type { GenerateConfig } from '../vc-picker/generate';
import type { PanelMode, RangeValue } from '../vc-picker/interface';
export interface TimePickerLocale {
    placeholder?: string;
    rangePlaceholder?: [string, string];
}
export declare const timePickerProps: () => {
    format: StringConstructor;
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    showHour: {
        type: BooleanConstructor;
        default: any;
    };
    showMinute: {
        type: BooleanConstructor;
        default: any;
    };
    showSecond: {
        type: BooleanConstructor;
        default: any;
    };
    use12Hours: {
        type: BooleanConstructor;
        default: any;
    };
    hourStep: NumberConstructor;
    minuteStep: NumberConstructor;
    secondStep: NumberConstructor;
    hideDisabledOptions: {
        type: BooleanConstructor;
        default: any;
    };
    popupClassName: StringConstructor;
};
export interface CommonTimePickerProps {
    format?: string;
    showNow?: boolean;
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
    use12Hours?: boolean;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    hideDisabledOptions?: boolean;
    popupClassName?: string;
}
export declare type TimeRangePickerProps<DateType> = Omit<RangePickerTimeProps<DateType>, 'picker' | 'defaultPickerValue' | 'defaultValue' | 'value' | 'onChange' | 'onPanelChange' | 'onOk'> & {
    popupClassName?: string;
    valueFormat?: string;
    defaultPickerValue?: RangeValue<DateType> | RangeValue<string>;
    defaultValue?: RangeValue<DateType> | RangeValue<string>;
    value?: RangeValue<DateType> | RangeValue<string>;
    onChange?: (value: RangeValue<DateType> | RangeValue<string> | null, dateString: [string, string]) => void;
    'onUpdate:value'?: (value: RangeValue<DateType> | RangeValue<string> | null) => void;
    onPanelChange?: (values: RangeValue<DateType> | RangeValue<string>, modes: [PanelMode, PanelMode]) => void;
    onOk?: (dates: RangeValue<DateType> | RangeValue<string>) => void;
};
export declare type TimePickerProps<DateType> = CommonProps<DateType> & DatePickerProps<DateType> & CommonTimePickerProps & {
    addon?: () => void;
};
declare function createTimePicker<DateType, DTimePickerProps extends TimePickerProps<DateType> = TimePickerProps<DateType>, DTimeRangePickerProps extends TimeRangePickerProps<DateType> = TimeRangePickerProps<DateType>>(generateConfig: GenerateConfig<DateType>): {
    TimePicker: import("vue").DefineComponent<DTimePickerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<DTimePickerProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<DTimePickerProps> : DTimePickerProps>, import("vue").ExtractDefaultPropTypes<DTimePickerProps>>;
    TimeRangePicker: import("vue").DefineComponent<DTimeRangePickerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<DTimeRangePickerProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<DTimeRangePickerProps> : DTimeRangePickerProps>, import("vue").ExtractDefaultPropTypes<DTimeRangePickerProps>>;
};
export default createTimePicker;
