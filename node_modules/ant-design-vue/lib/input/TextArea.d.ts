import type { FocusEventHandler } from '../_util/EventInterface';
declare const _default: import("vue").DefineComponent<{
    rows: NumberConstructor;
    autosize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    autoSize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    onResize: {
        type: import("vue").PropType<(size: {
            width: number;
            height: number;
        }) => void>;
    };
    onCompositionstart: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
    onCompositionend: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
    valueModifiers: ObjectConstructor;
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    hidden: BooleanConstructor;
    prefixCls: StringConstructor;
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    type: {
        type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    id: StringConstructor;
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    autocomplete: StringConstructor;
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    inputPrefixCls: StringConstructor;
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    showCount: {
        type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rows: NumberConstructor;
    autosize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    autoSize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    onResize: {
        type: import("vue").PropType<(size: {
            width: number;
            height: number;
        }) => void>;
    };
    onCompositionstart: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
    onCompositionend: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
    valueModifiers: ObjectConstructor;
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    hidden: BooleanConstructor;
    prefixCls: StringConstructor;
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    type: {
        type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    id: StringConstructor;
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    autocomplete: StringConstructor;
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    inputPrefixCls: StringConstructor;
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    showCount: {
        type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
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
    autosize: any;
    autoSize: any;
}>;
export default _default;
