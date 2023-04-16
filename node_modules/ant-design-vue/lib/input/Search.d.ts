import type { PropType } from 'vue';
import type { ChangeEvent } from '../_util/EventInterface';
declare const _default: import("vue").DefineComponent<{
    inputPrefixCls: StringConstructor;
    enterButton: import("vue-types").VueTypeValidableDef<any>;
    onSearch: {
        type: PropType<(value: string, event?: ChangeEvent | MouseEvent | KeyboardEvent) => void>;
    };
    id: StringConstructor;
    prefixCls: StringConstructor;
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: {
        type: PropType<string | number>;
        default: any;
    };
    placeholder: {
        type: PropType<string | number>;
    };
    autocomplete: StringConstructor;
    type: {
        type: PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    name: StringConstructor;
    size: {
        type: PropType<import("../button").ButtonSize>;
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
        type: PropType<boolean | import("./inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeydown: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onFocus: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onChange: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    'onUpdate:value': PropType<(val: string) => void>;
    valueModifiers: ObjectConstructor;
    hidden: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    inputPrefixCls: StringConstructor;
    enterButton: import("vue-types").VueTypeValidableDef<any>;
    onSearch: {
        type: PropType<(value: string, event?: ChangeEvent | MouseEvent | KeyboardEvent) => void>;
    };
    id: StringConstructor;
    prefixCls: StringConstructor;
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: {
        type: PropType<string | number>;
        default: any;
    };
    placeholder: {
        type: PropType<string | number>;
    };
    autocomplete: StringConstructor;
    type: {
        type: PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    name: StringConstructor;
    size: {
        type: PropType<import("../button").ButtonSize>;
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
        type: PropType<boolean | import("./inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeydown: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onFocus: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onChange: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    'onUpdate:value': PropType<(val: string) => void>;
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
