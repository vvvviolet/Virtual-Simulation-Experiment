import type { App } from 'vue';
import type { PickerProps, PickerDateProps, RangePickerProps as BaseRangePickerProps } from './generatePicker';
import type { ExtraDatePickerProps, ExtraRangePickerProps } from './generatePicker/props';
export declare type DatePickerProps = PickerProps<Date> & ExtraDatePickerProps<Date>;
export declare type MonthPickerProps = Omit<PickerDateProps<Date>, 'picker'> & ExtraDatePickerProps<Date>;
export declare type WeekPickerProps = Omit<PickerDateProps<Date>, 'picker'> & ExtraDatePickerProps<Date>;
export declare type RangePickerProps = BaseRangePickerProps<Date> & ExtraRangePickerProps<Date>;
declare const WeekPicker: import("vue").DefineComponent<{
    defaultPickerValue: {
        type: import("vue").PropType<string | Date>;
    };
    defaultValue: {
        type: import("vue").PropType<string | Date>;
    };
    value: {
        type: import("vue").PropType<string | Date>;
    };
    disabledTime: {
        type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    monthCellContentRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onChange: {
        type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOk: {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    mode: {
        type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultPickerValue: {
        type: import("vue").PropType<string | Date>;
    };
    defaultValue: {
        type: import("vue").PropType<string | Date>;
    };
    value: {
        type: import("vue").PropType<string | Date>;
    };
    disabledTime: {
        type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    monthCellContentRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onChange: {
        type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOk: {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    mode: {
        type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}>>, {
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
}>, MonthPicker: import("vue").DefineComponent<{
    defaultPickerValue: {
        type: import("vue").PropType<string | Date>;
    };
    defaultValue: {
        type: import("vue").PropType<string | Date>;
    };
    value: {
        type: import("vue").PropType<string | Date>;
    };
    disabledTime: {
        type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    monthCellContentRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onChange: {
        type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOk: {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    mode: {
        type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultPickerValue: {
        type: import("vue").PropType<string | Date>;
    };
    defaultValue: {
        type: import("vue").PropType<string | Date>;
    };
    value: {
        type: import("vue").PropType<string | Date>;
    };
    disabledTime: {
        type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    monthCellContentRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onChange: {
        type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOk: {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    mode: {
        type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}>>, {
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
}>, QuarterPicker: import("vue").DefineComponent<{
    defaultPickerValue: {
        type: import("vue").PropType<string | Date>;
    };
    defaultValue: {
        type: import("vue").PropType<string | Date>;
    };
    value: {
        type: import("vue").PropType<string | Date>;
    };
    disabledTime: {
        type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    monthCellContentRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onChange: {
        type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOk: {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    mode: {
        type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultPickerValue: {
        type: import("vue").PropType<string | Date>;
    };
    defaultValue: {
        type: import("vue").PropType<string | Date>;
    };
    value: {
        type: import("vue").PropType<string | Date>;
    };
    disabledTime: {
        type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    monthCellContentRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onChange: {
        type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOk: {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    mode: {
        type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}>>, {
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
}>, RangePicker: import("vue").DefineComponent<{
    allowEmpty: {
        type: import("vue").PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/RangePicker").RangeDateRender<Date>>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<[string, string] | [Date, Date]>;
    };
    defaultValue: {
        type: import("vue").PropType<[string, string] | [Date, Date]>;
    };
    value: {
        type: import("vue").PropType<[string, string] | [Date, Date]>;
    };
    disabledTime: {
        type: import("vue").PropType<(date: Date, type: import("../vc-picker/RangePicker").RangeType) => import("../vc-picker/interface").DisabledTimes>;
    };
    disabled: {
        type: import("vue").PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<() => import("../_util/type").VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: import("vue").PropType<Record<string, [Date, Date] | (() => [Date, Date])>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: import("vue").PropType<[import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]>;
    };
    onChange: {
        type: import("vue").PropType<(value: [string, string] | [Date, Date], dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: [string, string] | [Date, Date]) => void>;
    };
    onCalendarChange: {
        type: import("vue").PropType<(values: [string, string] | [Date, Date], formatString: [string, string], info: import("../vc-picker/RangePicker").RangeInfo) => void>;
    };
    onPanelChange: {
        type: import("vue").PropType<(values: [string, string] | [Date, Date], modes: [import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]) => void>;
    };
    onOk: {
        type: import("vue").PropType<(dates: [string, string] | [Date, Date]) => void>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    transitionName: StringConstructor;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    allowEmpty: {
        type: import("vue").PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/RangePicker").RangeDateRender<Date>>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<[string, string] | [Date, Date]>;
    };
    defaultValue: {
        type: import("vue").PropType<[string, string] | [Date, Date]>;
    };
    value: {
        type: import("vue").PropType<[string, string] | [Date, Date]>;
    };
    disabledTime: {
        type: import("vue").PropType<(date: Date, type: import("../vc-picker/RangePicker").RangeType) => import("../vc-picker/interface").DisabledTimes>;
    };
    disabled: {
        type: import("vue").PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<() => import("../_util/type").VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: import("vue").PropType<Record<string, [Date, Date] | (() => [Date, Date])>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: import("vue").PropType<[import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]>;
    };
    onChange: {
        type: import("vue").PropType<(value: [string, string] | [Date, Date], dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: [string, string] | [Date, Date]) => void>;
    };
    onCalendarChange: {
        type: import("vue").PropType<(values: [string, string] | [Date, Date], formatString: [string, string], info: import("../vc-picker/RangePicker").RangeInfo) => void>;
    };
    onPanelChange: {
        type: import("vue").PropType<(values: [string, string] | [Date, Date], modes: [import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]) => void>;
    };
    onOk: {
        type: import("vue").PropType<(dates: [string, string] | [Date, Date]) => void>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    transitionName: StringConstructor;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}>>, {
    open: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showToday: boolean;
    inputReadOnly: boolean;
}>;
export { RangePicker, WeekPicker, MonthPicker, QuarterPicker };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            open: boolean;
            disabled: boolean;
            autofocus: boolean;
            defaultOpen: boolean;
            allowClear: boolean;
            bordered: boolean;
            showTime: any;
            showNow: boolean;
            showToday: boolean;
            inputReadOnly: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            defaultPickerValue: {
                type: import("vue").PropType<string | Date>;
            };
            defaultValue: {
                type: import("vue").PropType<string | Date>;
            };
            value: {
                type: import("vue").PropType<string | Date>;
            };
            disabledTime: {
                type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
            };
            renderExtraFooter: {
                type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
            };
            showNow: {
                type: BooleanConstructor;
                default: any;
            };
            monthCellRender: {
                type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
            };
            monthCellContentRender: {
                type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
            };
            id: StringConstructor;
            dropdownClassName: StringConstructor;
            dropdownAlign: {
                type: import("vue").PropType<import("../vc-align/interface").AlignType>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
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
            inputReadOnly: {
                type: BooleanConstructor;
                default: any;
            };
            format: {
                type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
            };
            getPopupContainer: {
                type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
            };
            panelRender: {
                type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
            };
            onChange: {
                type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
            };
            'onUpdate:value': {
                type: import("vue").PropType<(value: string | Date) => void>;
            };
            onOk: {
                type: import("vue").PropType<(value: string | Date) => void>;
            };
            onOpenChange: {
                type: import("vue").PropType<(open: boolean) => void>;
            };
            'onUpdate:open': {
                type: import("vue").PropType<(open: boolean) => void>;
            };
            onFocus: {
                type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            };
            onBlur: {
                type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            };
            onMousedown: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onMouseup: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onMouseenter: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onMouseleave: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onClick: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onContextmenu: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onKeydown: {
                type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
            };
            role: StringConstructor;
            name: StringConstructor;
            autocomplete: StringConstructor;
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            showToday: {
                type: BooleanConstructor;
                default: any;
            };
            showTime: {
                type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
                default: any;
            };
            locale: {
                type: import("vue").PropType<import("./generatePicker").PickerLocale>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dateRender: {
                type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
            };
            disabledDate: {
                type: import("vue").PropType<(date: Date) => boolean>;
            };
            mode: {
                type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
            };
            picker: {
                type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
            };
            valueFormat: StringConstructor;
            disabledHours: import("vue").PropType<() => number[]>;
            disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
            disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "disabled" | "autofocus" | "defaultOpen" | "allowClear" | "bordered" | "showTime" | "showNow" | "showToday" | "inputReadOnly">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            defaultPickerValue: {
                type: import("vue").PropType<string | Date>;
            };
            defaultValue: {
                type: import("vue").PropType<string | Date>;
            };
            value: {
                type: import("vue").PropType<string | Date>;
            };
            disabledTime: {
                type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
            };
            renderExtraFooter: {
                type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
            };
            showNow: {
                type: BooleanConstructor;
                default: any;
            };
            monthCellRender: {
                type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
            };
            monthCellContentRender: {
                type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
            };
            id: StringConstructor;
            dropdownClassName: StringConstructor;
            dropdownAlign: {
                type: import("vue").PropType<import("../vc-align/interface").AlignType>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
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
            inputReadOnly: {
                type: BooleanConstructor;
                default: any;
            };
            format: {
                type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
            };
            getPopupContainer: {
                type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
            };
            panelRender: {
                type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
            };
            onChange: {
                type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
            };
            'onUpdate:value': {
                type: import("vue").PropType<(value: string | Date) => void>;
            };
            onOk: {
                type: import("vue").PropType<(value: string | Date) => void>;
            };
            onOpenChange: {
                type: import("vue").PropType<(open: boolean) => void>;
            };
            'onUpdate:open': {
                type: import("vue").PropType<(open: boolean) => void>;
            };
            onFocus: {
                type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            };
            onBlur: {
                type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            };
            onMousedown: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onMouseup: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onMouseenter: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onMouseleave: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onClick: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onContextmenu: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            };
            onKeydown: {
                type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
            };
            role: StringConstructor;
            name: StringConstructor;
            autocomplete: StringConstructor;
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            showToday: {
                type: BooleanConstructor;
                default: any;
            };
            showTime: {
                type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
                default: any;
            };
            locale: {
                type: import("vue").PropType<import("./generatePicker").PickerLocale>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dateRender: {
                type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
            };
            disabledDate: {
                type: import("vue").PropType<(date: Date) => boolean>;
            };
            mode: {
                type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
            };
            picker: {
                type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
            };
            valueFormat: StringConstructor;
            disabledHours: import("vue").PropType<() => number[]>;
            disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
            disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            open: boolean;
            disabled: boolean;
            autofocus: boolean;
            defaultOpen: boolean;
            allowClear: boolean;
            bordered: boolean;
            showTime: any;
            showNow: boolean;
            showToday: boolean;
            inputReadOnly: boolean;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    defaultPickerValue: {
        type: import("vue").PropType<string | Date>;
    };
    defaultValue: {
        type: import("vue").PropType<string | Date>;
    };
    value: {
        type: import("vue").PropType<string | Date>;
    };
    disabledTime: {
        type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
    };
    showNow: {
        type: BooleanConstructor;
        default: any;
    };
    monthCellRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    monthCellContentRender: {
        type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../vc-align/interface").AlignType>;
    };
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
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
    inputReadOnly: {
        type: BooleanConstructor;
        default: any;
    };
    format: {
        type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
    };
    onChange: {
        type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOk: {
        type: import("vue").PropType<(value: string | Date) => void>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
    onKeydown: {
        type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    showToday: {
        type: BooleanConstructor;
        default: any;
    };
    showTime: {
        type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./generatePicker").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dateRender: {
        type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
    };
    disabledDate: {
        type: import("vue").PropType<(date: Date) => boolean>;
    };
    mode: {
        type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
    };
    picker: {
        type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    WeekPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }>>, {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
    }>;
    MonthPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }>>, {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
    }>;
    YearPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }>>, {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
    }>;
    RangePicker: import("vue").DefineComponent<{
        allowEmpty: {
            type: import("vue").PropType<[boolean, boolean]>;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/RangePicker").RangeDateRender<Date>>;
        };
        defaultPickerValue: {
            type: import("vue").PropType<[string, string] | [Date, Date]>;
        };
        defaultValue: {
            type: import("vue").PropType<[string, string] | [Date, Date]>;
        };
        value: {
            type: import("vue").PropType<[string, string] | [Date, Date]>;
        };
        disabledTime: {
            type: import("vue").PropType<(date: Date, type: import("../vc-picker/RangePicker").RangeType) => import("../vc-picker/interface").DisabledTimes>;
        };
        disabled: {
            type: import("vue").PropType<boolean | [boolean, boolean]>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<() => import("../_util/type").VueNode>;
        };
        separator: {
            type: StringConstructor;
        };
        ranges: {
            type: import("vue").PropType<Record<string, [Date, Date] | (() => [Date, Date])>>;
        };
        placeholder: ArrayConstructor;
        mode: {
            type: import("vue").PropType<[import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]>;
        };
        onChange: {
            type: import("vue").PropType<(value: [string, string] | [Date, Date], dateString: [string, string]) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: [string, string] | [Date, Date]) => void>;
        };
        onCalendarChange: {
            type: import("vue").PropType<(values: [string, string] | [Date, Date], formatString: [string, string], info: import("../vc-picker/RangePicker").RangeInfo) => void>;
        };
        onPanelChange: {
            type: import("vue").PropType<(values: [string, string] | [Date, Date], modes: [import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]) => void>;
        };
        onOk: {
            type: import("vue").PropType<(dates: [string, string] | [Date, Date]) => void>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        transitionName: StringConstructor;
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        autofocus: {
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        allowEmpty: {
            type: import("vue").PropType<[boolean, boolean]>;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/RangePicker").RangeDateRender<Date>>;
        };
        defaultPickerValue: {
            type: import("vue").PropType<[string, string] | [Date, Date]>;
        };
        defaultValue: {
            type: import("vue").PropType<[string, string] | [Date, Date]>;
        };
        value: {
            type: import("vue").PropType<[string, string] | [Date, Date]>;
        };
        disabledTime: {
            type: import("vue").PropType<(date: Date, type: import("../vc-picker/RangePicker").RangeType) => import("../vc-picker/interface").DisabledTimes>;
        };
        disabled: {
            type: import("vue").PropType<boolean | [boolean, boolean]>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<() => import("../_util/type").VueNode>;
        };
        separator: {
            type: StringConstructor;
        };
        ranges: {
            type: import("vue").PropType<Record<string, [Date, Date] | (() => [Date, Date])>>;
        };
        placeholder: ArrayConstructor;
        mode: {
            type: import("vue").PropType<[import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]>;
        };
        onChange: {
            type: import("vue").PropType<(value: [string, string] | [Date, Date], dateString: [string, string]) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: [string, string] | [Date, Date]) => void>;
        };
        onCalendarChange: {
            type: import("vue").PropType<(values: [string, string] | [Date, Date], formatString: [string, string], info: import("../vc-picker/RangePicker").RangeInfo) => void>;
        };
        onPanelChange: {
            type: import("vue").PropType<(values: [string, string] | [Date, Date], modes: [import("../vc-picker/interface").PanelMode, import("../vc-picker/interface").PanelMode]) => void>;
        };
        onOk: {
            type: import("vue").PropType<(dates: [string, string] | [Date, Date]) => void>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        transitionName: StringConstructor;
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        autofocus: {
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }>>, {
        open: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showToday: boolean;
        inputReadOnly: boolean;
    }>;
    TimePicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }>>, {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
    }>;
    QuarterPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | Date>;
        };
        defaultValue: {
            type: import("vue").PropType<string | Date>;
        };
        value: {
            type: import("vue").PropType<string | Date>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../vc-picker/interface").DisabledTime<Date>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Date>>;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
            type: import("vue").PropType<import("../vc-align/interface").AlignType>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
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
        inputReadOnly: {
            type: BooleanConstructor;
            default: any;
        };
        format: {
            type: import("vue").PropType<string | import("../vc-picker/interface").CustomFormat<Date> | (string | import("../vc-picker/interface").CustomFormat<Date>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | Date, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | Date) => void>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        onFocus: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onBlur: {
            type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseup: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseenter: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onMouseleave: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        };
        onKeydown: {
            type: import("vue").PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        showToday: {
            type: BooleanConstructor;
            default: any;
        };
        showTime: {
            type: import("vue").PropType<boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Date>>;
            default: any;
        };
        locale: {
            type: import("vue").PropType<import("./generatePicker").PickerLocale>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dateRender: {
            type: import("vue").PropType<import("../vc-picker/panels/DatePanel/DateBody").DateRender<Date>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: Date) => boolean>;
        };
        mode: {
            type: import("vue").PropType<import("../vc-picker/interface").PanelMode>;
        };
        picker: {
            type: import("vue").PropType<import("../vc-picker/interface").PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    }>>, {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
    }>;
    install: (app: App) => App<any>;
};
export default _default;
