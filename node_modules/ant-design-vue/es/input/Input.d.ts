import type { FocusEventHandler } from '../_util/EventInterface';
export declare function fixControlledValue(value: string | number): string;
export declare function resolveOnChange(target: HTMLInputElement, e: Event, onChange: Function, targetValue?: string): void;
export interface InputFocusOptions extends FocusOptions {
    cursor?: 'start' | 'end' | 'all';
}
export declare function triggerFocus(element?: HTMLInputElement | HTMLTextAreaElement, option?: InputFocusOptions): void;
declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    inputPrefixCls: StringConstructor;
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
    autocomplete: StringConstructor;
    type: {
        type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    name: StringConstructor;
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    showCount: {
        type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    valueModifiers: ObjectConstructor;
    hidden: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    inputPrefixCls: StringConstructor;
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
    autocomplete: StringConstructor;
    type: {
        type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    name: StringConstructor;
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    showCount: {
        type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    valueModifiers: ObjectConstructor;
    hidden: BooleanConstructor;
}>>, {
    hidden: boolean;
    disabled: boolean;
    value: string | number;
    type: import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>;
    readonly: boolean;
    autofocus: boolean;
    loading: boolean;
    allowClear: boolean;
    bordered: boolean;
    lazy: boolean;
}>;
export default _default;
