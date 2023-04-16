import type { FocusEventHandler, MouseEventHandler } from '../../_util/EventInterface';
import type { CSSProperties, PropType } from 'vue';
import type { PickerLocale } from '.';
import type { SizeType } from '../../config-provider';
import type { AlignType } from '../../vc-align/interface';
import type { CustomFormat, DisabledTime, DisabledTimes, EventValue, PanelMode, PickerMode, RangeValue } from '../../vc-picker/interface';
import type { DateRender } from '../../vc-picker/panels/DatePanel/DateBody';
import type { MonthCellRender } from '../../vc-picker/panels/MonthPanel/MonthBody';
import type { SharedTimeProps } from '../../vc-picker/panels/TimePanel';
import type { RangeDateRender, RangeInfo, RangeType } from '../../vc-picker/RangePicker';
import type { VueNode } from '../../_util/type';
declare function commonProps<DateType = any>(): {
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: PropType<AlignType>;
    };
    popupStyle: {
        type: PropType<CSSProperties>;
    };
    transitionName: StringConstructor;
    placeholder: StringConstructor;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: NumberConstructor;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    /** Make input readOnly to avoid popup keyboard in mobile */
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: PropType<string | CustomFormat<DateType> | (string | CustomFormat<DateType>)[]>;
    };
    getPopupContainer: {
        type: PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: PropType<(originPanel: VueNode) => VueNode>;
    };
    onChange: {
        type: PropType<(value: DateType | string | null, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: PropType<(value: DateType | string | null) => void>;
    };
    onOk: {
        type: PropType<(value: DateType | string | null) => void>;
    };
    onOpenChange: {
        type: PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
    onMousedown: {
        type: PropType<MouseEventHandler>;
    };
    onMouseup: {
        type: PropType<MouseEventHandler>;
    };
    onMouseenter: {
        type: PropType<MouseEventHandler>;
    };
    onMouseleave: {
        type: PropType<MouseEventHandler>;
    };
    onClick: {
        type: PropType<MouseEventHandler>;
    };
    onContextmenu: {
        type: PropType<MouseEventHandler>;
    };
    onKeydown: {
        type: PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: PropType<boolean | SharedTimeProps<DateType>>;
        default: any;
    };
    locale: {
        type: PropType<PickerLocale>;
    };
    size: {
        type: PropType<SizeType>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: PropType<DateRender<DateType>>;
    };
    disabledDate: {
        type: PropType<(date: DateType) => boolean>;
    };
    mode: {
        type: PropType<PanelMode>;
    };
    picker: {
        type: PropType<PickerMode>;
    };
    valueFormat: StringConstructor;
    /** @deprecated Please use `disabledTime` instead. */
    disabledHours: PropType<() => number[]>;
    /** @deprecated Please use `disabledTime` instead. */
    disabledMinutes: PropType<(hour: number) => number[]>;
    /** @deprecated Please use `disabledTime` instead. */
    disabledSeconds: PropType<(hour: number, minute: number) => number[]>;
};
export interface CommonProps<DateType> {
    id?: string;
    prefixCls?: string;
    dropdownClassName?: string;
    dropdownAlign?: AlignType;
    popupStyle?: CSSProperties;
    transitionName?: string;
    placeholder?: string;
    allowClear?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    tabindex?: number;
    open?: boolean;
    defaultOpen?: boolean;
    inputReadOnly?: boolean;
    format?: string | CustomFormat<DateType> | (string | CustomFormat<DateType>)[];
    suffixIcon?: VueNode;
    clearIcon?: VueNode;
    prevIcon?: VueNode;
    nextIcon?: VueNode;
    superPrevIcon?: VueNode;
    superNextIcon?: VueNode;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    panelRender?: (originPanel: VueNode) => VueNode;
    onChange?: (value: DateType | string | null, dateString: string) => void;
    'onUpdate:value'?: (value: DateType | string | null) => void;
    onOk?: (value: DateType | string | null) => void;
    onOpenChange?: (open: boolean) => void;
    'onUpdate:open'?: (open: boolean) => void;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    onMousedown?: MouseEventHandler;
    onMouseup?: MouseEventHandler;
    onMouseenter?: MouseEventHandler;
    onMouseleave?: MouseEventHandler;
    onClick?: MouseEventHandler;
    onContextmenu?: MouseEventHandler;
    onKeydown?: (event: KeyboardEvent, preventDefault: () => void) => void;
    role?: string;
    name?: string;
    autocomplete?: string;
    direction?: 'ltr' | 'rtl';
    showToday?: boolean;
    showTime?: boolean | SharedTimeProps<DateType>;
    locale?: PickerLocale;
    size?: SizeType;
    bordered?: boolean;
    dateRender?: DateRender<DateType>;
    disabledDate?: (date: DateType) => boolean;
    mode?: PanelMode;
    picker?: PickerMode;
    valueFormat?: string;
}
declare function datePickerProps<DateType = any>(): {
    defaultPickerValue: {
        type: PropType<string | DateType>;
    };
    defaultValue: {
        type: PropType<string | DateType>;
    };
    value: {
        type: PropType<string | DateType>;
    };
    disabledTime: {
        type: PropType<DisabledTime<DateType>>;
    };
    renderExtraFooter: {
        type: PropType<(mode: PanelMode) => VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: PropType<MonthCellRender<DateType>>;
    };
    monthCellContentRender: {
        type: PropType<MonthCellRender<DateType>>;
    };
};
export interface DatePickerProps<DateType> {
    defaultPickerValue?: DateType | string;
    defaultValue?: DateType | string;
    value?: DateType | string;
    disabledTime?: DisabledTime<DateType>;
    renderExtraFooter?: (mode: PanelMode) => VueNode;
    showNow?: boolean;
    monthCellRender?: MonthCellRender<DateType>;
    monthCellContentRender?: MonthCellRender<DateType>;
}
declare function rangePickerProps<DateType>(): {
    allowEmpty: {
        type: PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: PropType<RangeDateRender<DateType>>;
    };
    defaultPickerValue: {
        type: PropType<[DateType, DateType] | [string, string]>;
    };
    defaultValue: {
        type: PropType<[DateType, DateType] | [string, string]>;
    };
    value: {
        type: PropType<[DateType, DateType] | [string, string]>;
    };
    disabledTime: {
        type: PropType<(date: EventValue<DateType>, type: RangeType) => DisabledTimes>;
    };
    disabled: {
        type: PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: PropType<() => VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: PropType<Record<string, [DateType, DateType] | (() => Exclude<RangeValue<DateType>, null>)>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: PropType<[PanelMode, PanelMode]>;
    };
    onChange: {
        type: PropType<(value: RangeValue<DateType> | RangeValue<string> | null, dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: PropType<(value: RangeValue<DateType> | RangeValue<string> | null) => void>;
    };
    onCalendarChange: {
        type: PropType<(values: RangeValue<DateType> | RangeValue<string>, formatString: [string, string], info: RangeInfo) => void>;
    };
    onPanelChange: {
        type: PropType<(values: RangeValue<DateType> | RangeValue<string>, modes: [PanelMode, PanelMode]) => void>;
    };
    onOk: {
        type: PropType<(dates: RangeValue<DateType> | RangeValue<string>) => void>;
    };
};
export interface RangePickerProps<DateType> {
    allowEmpty?: [boolean, boolean];
    dateRender?: RangeDateRender<DateType>;
    defaultPickerValue?: RangeValue<DateType> | RangeValue<string>;
    defaultValue?: RangeValue<DateType> | RangeValue<string>;
    value?: RangeValue<DateType> | RangeValue<string>;
    disabledTime?: (date: EventValue<DateType>, type: RangeType) => DisabledTimes;
    disabled?: [boolean, boolean];
    renderExtraFooter?: () => VueNode;
    separator?: string;
    ranges?: Record<string, Exclude<RangeValue<DateType>, null> | (() => Exclude<RangeValue<DateType>, null>)>;
    placeholder?: [string, string];
    mode?: [PanelMode, PanelMode];
    onChange?: (value: RangeValue<DateType> | RangeValue<string> | null, dateString: [string, string]) => void;
    'onUpdate:value'?: (value: RangeValue<DateType> | RangeValue<string> | null) => void;
    onCalendarChange?: (values: RangeValue<DateType> | RangeValue<string>, formatString: [string, string], info: RangeInfo) => void;
    onPanelChange?: (values: RangeValue<DateType> | RangeValue<string>, modes: [PanelMode, PanelMode]) => void;
    onOk?: (dates: RangeValue<DateType> | RangeValue<string>) => void;
}
export declare type ExtraDatePickerProps<DateType> = {
    valueFormat?: string;
    defaultPickerValue?: DateType | string;
    defaultValue?: DateType | string;
    value?: DateType | string;
};
export declare type ExtraRangePickerProps<DateType> = {
    valueFormat?: string;
    defaultPickerValue?: RangeValue<DateType> | RangeValue<string>;
    defaultValue?: RangeValue<DateType> | RangeValue<string>;
    value?: RangeValue<DateType> | RangeValue<string>;
};
export { commonProps, datePickerProps, rangePickerProps };
