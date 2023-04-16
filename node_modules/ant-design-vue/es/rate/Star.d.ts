import type { ExtractPropTypes } from 'vue';
export declare const starProps: {
    value: NumberConstructor;
    index: NumberConstructor;
    prefixCls: StringConstructor;
    allowHalf: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    count: NumberConstructor;
    onClick: FunctionConstructor;
    onHover: FunctionConstructor;
};
export declare type StarProps = Partial<ExtractPropTypes<typeof starProps>>;
declare const _default: import("vue").DefineComponent<{
    value: NumberConstructor;
    index: NumberConstructor;
    prefixCls: StringConstructor;
    allowHalf: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    count: NumberConstructor;
    onClick: FunctionConstructor;
    onHover: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "hover")[], "click" | "hover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    value: NumberConstructor;
    index: NumberConstructor;
    prefixCls: StringConstructor;
    allowHalf: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    count: NumberConstructor;
    onClick: FunctionConstructor;
    onHover: FunctionConstructor;
}>> & {
    onClick?: (...args: any[]) => any;
    onHover?: (...args: any[]) => any;
}, {
    disabled: boolean;
    focused: boolean;
    allowHalf: boolean;
}>;
export default _default;
