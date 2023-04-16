import type { ExtractPropTypes, PropType } from 'vue';
import type { FocusEventHandler, KeyboardEventHandler, MouseEventHandler, ChangeEventHandler, CompositionEventHandler, ClipboardEventHandler } from '../../_util/EventInterface';
export declare const inputProps: {
    inputRef: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    id: StringConstructor;
    inputElement: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    autocomplete: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: any;
    };
    activeDescendantId: StringConstructor;
    value: StringConstructor;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    /** Pass accessibility props to input */
    attrs: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    onKeydown: {
        type: PropType<KeyboardEventHandler>;
    };
    onMousedown: {
        type: PropType<MouseEventHandler>;
    };
    onChange: {
        type: PropType<ChangeEventHandler>;
    };
    onPaste: {
        type: PropType<ClipboardEventHandler>;
    };
    onCompositionstart: {
        type: PropType<CompositionEventHandler>;
    };
    onCompositionend: {
        type: PropType<CompositionEventHandler>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
};
export declare type InputProps = Partial<ExtractPropTypes<typeof inputProps>>;
declare const Input: import("vue").DefineComponent<{
    inputRef: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    id: StringConstructor;
    inputElement: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    autocomplete: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: any;
    };
    activeDescendantId: StringConstructor;
    value: StringConstructor;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    /** Pass accessibility props to input */
    attrs: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    onKeydown: {
        type: PropType<KeyboardEventHandler>;
    };
    onMousedown: {
        type: PropType<MouseEventHandler>;
    };
    onChange: {
        type: PropType<ChangeEventHandler>;
    };
    onPaste: {
        type: PropType<ClipboardEventHandler>;
    };
    onCompositionstart: {
        type: PropType<CompositionEventHandler>;
    };
    onCompositionend: {
        type: PropType<CompositionEventHandler>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    inputRef: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    id: StringConstructor;
    inputElement: import("vue-types").VueTypeValidableDef<import("../../_util/type").VueNode>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    autocomplete: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: any;
    };
    activeDescendantId: StringConstructor;
    value: StringConstructor;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    /** Pass accessibility props to input */
    attrs: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    onKeydown: {
        type: PropType<KeyboardEventHandler>;
    };
    onMousedown: {
        type: PropType<MouseEventHandler>;
    };
    onChange: {
        type: PropType<ChangeEventHandler>;
    };
    onPaste: {
        type: PropType<ClipboardEventHandler>;
    };
    onCompositionstart: {
        type: PropType<CompositionEventHandler>;
    };
    onCompositionend: {
        type: PropType<CompositionEventHandler>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
}>>, {
    attrs: {
        [key: string]: any;
    };
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    editable: boolean;
}>;
export default Input;
