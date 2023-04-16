import type { ExtractPropTypes } from 'vue';
import { vcMentionsProps } from './mentionsProps';
export declare type MentionsProps = Partial<ExtractPropTypes<typeof vcMentionsProps>>;
declare const _default: import("vue").DefineComponent<{
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    prefix: import("vue-types").VueTypeDef<string | string[]>;
    prefixCls: StringConstructor;
    value: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    split: StringConstructor;
    transitionName: StringConstructor;
    placement: import("vue-types").VueTypeDef<"bottom" | "top">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    filterOption: {
        type: import("vue").PropType<false | typeof import("./util").filterOption>;
    };
    validateSearch: FunctionConstructor;
    getPopupContainer: {
        type: import("vue").PropType<() => HTMLElement>;
    };
    options: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            value: StringConstructor;
            disabled: BooleanConstructor;
            label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
        }>>>;
        default: () => any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    rows: (StringConstructor | NumberConstructor)[];
    direction: {
        type: import("vue").PropType<import("./mentionsProps").Direction>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "blur" | "change" | "focus" | "select" | "pressenter")[], "search" | "select" | "blur" | "change" | "focus" | "pressenter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    prefix: import("vue-types").VueTypeDef<string | string[]>;
    prefixCls: StringConstructor;
    value: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    split: StringConstructor;
    transitionName: StringConstructor;
    placement: import("vue-types").VueTypeDef<"bottom" | "top">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    filterOption: {
        type: import("vue").PropType<false | typeof import("./util").filterOption>;
    };
    validateSearch: FunctionConstructor;
    getPopupContainer: {
        type: import("vue").PropType<() => HTMLElement>;
    };
    options: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            value: StringConstructor;
            disabled: BooleanConstructor;
            label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
        }>>>;
        default: () => any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    rows: (StringConstructor | NumberConstructor)[];
    direction: {
        type: import("vue").PropType<import("./mentionsProps").Direction>;
    };
}>> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    onSearch?: (...args: any[]) => any;
    onPressenter?: (...args: any[]) => any;
}, {
    disabled: boolean;
    autofocus: boolean;
    options: any;
    loading: boolean;
}>;
export default _default;
