import type { GenerateConfig } from '../../vc-picker/generate/index';
import type { PanelMode } from '../../vc-picker/interface';
export default function generateRangePicker<DateType, ExtraProps = {}>(generateConfig: GenerateConfig<DateType>, extraProps: ExtraProps): import("vue").DefineComponent<{
    allowEmpty: {
        type: import("vue").PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: import("vue").PropType<import("../../vc-picker/RangePicker").RangeDateRender<DateType>>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    defaultValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    value: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    disabledTime: {
        type: import("vue").PropType<(date: DateType, type: import("../../vc-picker/RangePicker").RangeType) => import("../../vc-picker/interface").DisabledTimes>;
    };
    disabled: {
        type: import("vue").PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<() => import("../../_util/type").VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: import("vue").PropType<Record<string, [DateType, DateType] | (() => [DateType, DateType])>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: import("vue").PropType<[PanelMode, PanelMode]>;
    };
    onChange: {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType], dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType]) => void>;
    };
    onCalendarChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], formatString: [string, string], info: import("../../vc-picker/RangePicker").RangeInfo) => void>;
    };
    onPanelChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], modes: [PanelMode, PanelMode]) => void>;
    };
    onOk: {
        type: import("vue").PropType<(dates: [string, string] | [DateType, DateType]) => void>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../../vc-align/interface").AlignType>;
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
        type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
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
        type: import("vue").PropType<boolean | import("../../vc-picker/panels/TimePanel").SharedTimeProps<DateType>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./interface").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    disabledDate: {
        type: import("vue").PropType<(date: DateType) => boolean>;
    };
    picker: {
        type: import("vue").PropType<import("../../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
} & ExtraProps, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    allowEmpty: {
        type: import("vue").PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: import("vue").PropType<import("../../vc-picker/RangePicker").RangeDateRender<DateType>>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    defaultValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    value: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    disabledTime: {
        type: import("vue").PropType<(date: DateType, type: import("../../vc-picker/RangePicker").RangeType) => import("../../vc-picker/interface").DisabledTimes>;
    };
    disabled: {
        type: import("vue").PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<() => import("../../_util/type").VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: import("vue").PropType<Record<string, [DateType, DateType] | (() => [DateType, DateType])>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: import("vue").PropType<[PanelMode, PanelMode]>;
    };
    onChange: {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType], dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType]) => void>;
    };
    onCalendarChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], formatString: [string, string], info: import("../../vc-picker/RangePicker").RangeInfo) => void>;
    };
    onPanelChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], modes: [PanelMode, PanelMode]) => void>;
    };
    onOk: {
        type: import("vue").PropType<(dates: [string, string] | [DateType, DateType]) => void>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../../vc-align/interface").AlignType>;
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
        type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
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
        type: import("vue").PropType<boolean | import("../../vc-picker/panels/TimePanel").SharedTimeProps<DateType>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./interface").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    disabledDate: {
        type: import("vue").PropType<(date: DateType) => boolean>;
    };
    picker: {
        type: import("vue").PropType<import("../../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
} & ExtraProps extends import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}> ? import("vue").ExtractPropTypes<{
    allowEmpty: {
        type: import("vue").PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: import("vue").PropType<import("../../vc-picker/RangePicker").RangeDateRender<DateType>>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    defaultValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    value: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    disabledTime: {
        type: import("vue").PropType<(date: DateType, type: import("../../vc-picker/RangePicker").RangeType) => import("../../vc-picker/interface").DisabledTimes>;
    };
    disabled: {
        type: import("vue").PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<() => import("../../_util/type").VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: import("vue").PropType<Record<string, [DateType, DateType] | (() => [DateType, DateType])>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: import("vue").PropType<[PanelMode, PanelMode]>;
    };
    onChange: {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType], dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType]) => void>;
    };
    onCalendarChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], formatString: [string, string], info: import("../../vc-picker/RangePicker").RangeInfo) => void>;
    };
    onPanelChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], modes: [PanelMode, PanelMode]) => void>;
    };
    onOk: {
        type: import("vue").PropType<(dates: [string, string] | [DateType, DateType]) => void>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../../vc-align/interface").AlignType>;
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
        type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
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
        type: import("vue").PropType<boolean | import("../../vc-picker/panels/TimePanel").SharedTimeProps<DateType>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./interface").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    disabledDate: {
        type: import("vue").PropType<(date: DateType) => boolean>;
    };
    picker: {
        type: import("vue").PropType<import("../../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
} & ExtraProps> : {
    allowEmpty: {
        type: import("vue").PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: import("vue").PropType<import("../../vc-picker/RangePicker").RangeDateRender<DateType>>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    defaultValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    value: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    disabledTime: {
        type: import("vue").PropType<(date: DateType, type: import("../../vc-picker/RangePicker").RangeType) => import("../../vc-picker/interface").DisabledTimes>;
    };
    disabled: {
        type: import("vue").PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<() => import("../../_util/type").VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: import("vue").PropType<Record<string, [DateType, DateType] | (() => [DateType, DateType])>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: import("vue").PropType<[PanelMode, PanelMode]>;
    };
    onChange: {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType], dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType]) => void>;
    };
    onCalendarChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], formatString: [string, string], info: import("../../vc-picker/RangePicker").RangeInfo) => void>;
    };
    onPanelChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], modes: [PanelMode, PanelMode]) => void>;
    };
    onOk: {
        type: import("vue").PropType<(dates: [string, string] | [DateType, DateType]) => void>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../../vc-align/interface").AlignType>;
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
        type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
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
        type: import("vue").PropType<boolean | import("../../vc-picker/panels/TimePanel").SharedTimeProps<DateType>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./interface").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    disabledDate: {
        type: import("vue").PropType<(date: DateType) => boolean>;
    };
    picker: {
        type: import("vue").PropType<import("../../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
} & ExtraProps>, import("vue").ExtractDefaultPropTypes<{
    allowEmpty: {
        type: import("vue").PropType<[boolean, boolean]>;
    };
    dateRender: {
        type: import("vue").PropType<import("../../vc-picker/RangePicker").RangeDateRender<DateType>>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    defaultValue: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    value: {
        type: import("vue").PropType<[string, string] | [DateType, DateType]>;
    };
    disabledTime: {
        type: import("vue").PropType<(date: DateType, type: import("../../vc-picker/RangePicker").RangeType) => import("../../vc-picker/interface").DisabledTimes>;
    };
    disabled: {
        type: import("vue").PropType<boolean | [boolean, boolean]>;
    };
    renderExtraFooter: {
        type: import("vue").PropType<() => import("../../_util/type").VueNode>;
    };
    separator: {
        type: StringConstructor;
    };
    ranges: {
        type: import("vue").PropType<Record<string, [DateType, DateType] | (() => [DateType, DateType])>>;
    };
    placeholder: ArrayConstructor;
    mode: {
        type: import("vue").PropType<[PanelMode, PanelMode]>;
    };
    onChange: {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType], dateString: [string, string]) => void>;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: [string, string] | [DateType, DateType]) => void>;
    };
    onCalendarChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], formatString: [string, string], info: import("../../vc-picker/RangePicker").RangeInfo) => void>;
    };
    onPanelChange: {
        type: import("vue").PropType<(values: [string, string] | [DateType, DateType], modes: [PanelMode, PanelMode]) => void>;
    };
    onOk: {
        type: import("vue").PropType<(dates: [string, string] | [DateType, DateType]) => void>;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
        type: import("vue").PropType<import("../../vc-align/interface").AlignType>;
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
        type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
        type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    onFocus: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onBlur: {
        type: import("vue").PropType<import("../../_util/EventInterface").FocusEventHandler>;
    };
    onMousedown: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseup: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseenter: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onMouseleave: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../../_util/EventInterface").MouseEventHandler>;
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
        type: import("vue").PropType<boolean | import("../../vc-picker/panels/TimePanel").SharedTimeProps<DateType>>;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./interface").PickerLocale>;
    };
    size: {
        type: import("vue").PropType<import("../../button").ButtonSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    disabledDate: {
        type: import("vue").PropType<(date: DateType) => boolean>;
    };
    picker: {
        type: import("vue").PropType<import("../../vc-picker/interface").PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import("vue").PropType<() => number[]>;
    disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
    disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
} & ExtraProps>>;
