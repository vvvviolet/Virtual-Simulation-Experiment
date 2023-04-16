import type { PanelMode, PickerMode } from '../../vc-picker/interface';
import type { GenerateConfig } from '../../vc-picker/generate/index';
export default function generateSinglePicker<DateType, ExtraProps = {}>(generateConfig: GenerateConfig<DateType>, extraProps: ExtraProps): {
    DatePicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps> : {
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>, import("vue").ExtractDefaultPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>>;
    WeekPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps> : {
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>, import("vue").ExtractDefaultPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>>;
    MonthPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps> : {
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>, import("vue").ExtractDefaultPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>>;
    YearPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps> : {
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>, import("vue").ExtractDefaultPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>>;
    TimePicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps> : {
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>, import("vue").ExtractDefaultPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>>;
    QuarterPicker: import("vue").DefineComponent<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps extends import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }> ? import("vue").ExtractPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps> : {
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>, import("vue").ExtractDefaultPropTypes<{
        defaultPickerValue: {
            type: import("vue").PropType<string | DateType>;
        };
        defaultValue: {
            type: import("vue").PropType<string | DateType>;
        };
        value: {
            type: import("vue").PropType<string | DateType>;
        };
        disabledTime: {
            type: import("vue").PropType<import("../../vc-picker/interface").DisabledTime<DateType>>;
        };
        renderExtraFooter: {
            type: import("vue").PropType<(mode: PanelMode) => import("../../_util/type").VueNode>;
        };
        showNow: {
            type: BooleanConstructor;
            default: any;
        };
        monthCellRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
        };
        monthCellContentRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<DateType>>;
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
            type: import("vue").PropType<string | import("../../vc-picker/interface").CustomFormat<DateType> | (string | import("../../vc-picker/interface").CustomFormat<DateType>)[]>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
            type: import("vue").PropType<(originPanel: import("../../_util/type").VueNode) => import("../../_util/type").VueNode>;
        };
        onChange: {
            type: import("vue").PropType<(value: string | DateType, dateString: string) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: string | DateType) => void>;
        };
        onOk: {
            type: import("vue").PropType<(value: string | DateType) => void>;
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
        dateRender: {
            type: import("vue").PropType<import("../../vc-picker/panels/DatePanel/DateBody").DateRender<DateType>>;
        };
        disabledDate: {
            type: import("vue").PropType<(date: DateType) => boolean>;
        };
        mode: {
            type: import("vue").PropType<PanelMode>;
        };
        picker: {
            type: import("vue").PropType<PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import("vue").PropType<() => number[]>;
        disabledMinutes: import("vue").PropType<(hour: number) => number[]>;
        disabledSeconds: import("vue").PropType<(hour: number, minute: number) => number[]>;
    } & ExtraProps>>;
};
