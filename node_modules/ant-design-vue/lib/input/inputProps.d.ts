import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
import type { LiteralUnion, VueNode } from '../_util/type';
import type { ChangeEventHandler, CompositionEventHandler, FocusEventHandler, KeyboardEventHandler } from '../_util/EventInterface';
export declare const inputDefaultValue: string;
declare const inputProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    inputPrefixCls: StringConstructor;
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
        type: PropType<LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    name: StringConstructor;
    size: {
        type: PropType<SizeType>;
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
        type: PropType<boolean | ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: PropType<KeyboardEventHandler>;
    onKeydown: PropType<KeyboardEventHandler>;
    onKeyup: PropType<KeyboardEventHandler>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onChange: PropType<ChangeEventHandler>;
    onInput: PropType<ChangeEventHandler>;
    'onUpdate:value': PropType<(val: string) => void>;
    valueModifiers: ObjectConstructor;
    hidden: BooleanConstructor;
};
export default inputProps;
export declare type InputProps = Partial<ExtractPropTypes<ReturnType<typeof inputProps>>>;
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export interface ShowCountProps {
    formatter: (args: {
        count: number;
        maxlength?: number;
    }) => VueNode;
}
declare const textAreaProps: () => {
    rows: NumberConstructor;
    autosize: {
        type: PropType<boolean | AutoSizeType>;
        default: any;
    };
    autoSize: {
        type: PropType<boolean | AutoSizeType>;
        default: any;
    };
    onResize: {
        type: PropType<(size: {
            width: number;
            height: number;
        }) => void>;
    };
    onCompositionstart: PropType<CompositionEventHandler>;
    onCompositionend: PropType<CompositionEventHandler>;
    valueModifiers: ObjectConstructor;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onChange: PropType<ChangeEventHandler>;
    onInput: PropType<ChangeEventHandler>;
    onKeydown: PropType<KeyboardEventHandler>;
    onKeyup: PropType<KeyboardEventHandler>;
    hidden: BooleanConstructor;
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    type: {
        type: PropType<LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
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
    'onUpdate:value': PropType<(val: string) => void>;
    autocomplete: StringConstructor;
    placeholder: {
        type: PropType<string | number>;
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
        type: PropType<boolean | ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: PropType<KeyboardEventHandler>;
};
export { textAreaProps };
export declare type TextAreaProps = Partial<ExtractPropTypes<ReturnType<typeof textAreaProps>>>;
