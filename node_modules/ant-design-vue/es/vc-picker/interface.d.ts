import type { Ref } from 'vue';
import type { VueNode } from '../_util/type';
import type { GenerateConfig } from './generate';
export declare type Locale = {
    locale: string;
    /** Display month before year in date panel header */
    monthBeforeYear?: boolean;
    yearFormat: string;
    monthFormat?: string;
    quarterFormat?: string;
    today: string;
    now: string;
    backToToday: string;
    ok: string;
    timeSelect: string;
    dateSelect: string;
    weekSelect?: string;
    clear: string;
    month: string;
    year: string;
    previousMonth: string;
    nextMonth: string;
    monthSelect: string;
    yearSelect: string;
    decadeSelect: string;
    dayFormat: string;
    dateFormat: string;
    dateTimeFormat: string;
    previousYear: string;
    nextYear: string;
    previousDecade: string;
    nextDecade: string;
    previousCentury: string;
    nextCentury: string;
    shortWeekDays?: string[];
    shortMonths?: string[];
};
export declare type PanelMode = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | 'decade';
export declare type PickerMode = Exclude<PanelMode, 'datetime' | 'decade'>;
export declare type PanelRefProps = {
    onKeydown?: (e: KeyboardEvent) => boolean;
    onBlur?: (e: FocusEvent) => void;
    onClose?: () => void;
};
export declare type NullableDateType<DateType> = DateType | null | undefined;
export declare type OnSelect<DateType> = (value: DateType, type: 'key' | 'mouse' | 'submit') => void;
export declare type PanelSharedProps<DateType> = {
    prefixCls: string;
    generateConfig: GenerateConfig<DateType>;
    value?: NullableDateType<DateType>;
    viewDate: DateType;
    /** [Legacy] Set default display picker view date */
    defaultPickerValue?: DateType;
    locale: Locale;
    disabledDate?: (date: DateType) => boolean;
    prevIcon?: VueNode;
    nextIcon?: VueNode;
    superPrevIcon?: VueNode;
    superNextIcon?: VueNode;
    operationRef: Ref<PanelRefProps>;
    onSelect: OnSelect<DateType>;
    onViewDateChange: (value: DateType) => void;
    onPanelChange: (mode: PanelMode | null, viewValue: DateType) => void;
};
export declare type DisabledTimes = {
    disabledHours?: () => number[];
    disabledMinutes?: (hour: number) => number[];
    disabledSeconds?: (hour: number, minute: number) => number[];
};
export declare type DisabledTime<DateType> = (date: DateType | null) => DisabledTimes;
export declare type OnPanelChange<DateType> = (value: DateType, mode: PanelMode) => void;
export declare type EventValue<DateType> = DateType | null;
export declare type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;
export declare type Components = {
    button?: any;
    rangeItem?: any;
};
export declare type RangeList = {
    label: string;
    onClick: () => void;
    onMouseenter: () => void;
    onMouseleave: () => void;
}[];
export declare type CustomFormat<DateType> = (value: DateType) => string;
