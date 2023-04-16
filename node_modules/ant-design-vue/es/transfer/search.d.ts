import type { ExtractPropTypes } from 'vue';
export declare const transferSearchProps: {
    prefixCls: StringConstructor;
    placeholder: StringConstructor;
    value: StringConstructor;
    handleClear: FunctionConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: FunctionConstructor;
};
export declare type TransferSearchProps = Partial<ExtractPropTypes<typeof transferSearchProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    placeholder: StringConstructor;
    value: StringConstructor;
    handleClear: FunctionConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    placeholder: StringConstructor;
    value: StringConstructor;
    handleClear: FunctionConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: FunctionConstructor;
}>> & {
    onChange?: (...args: any[]) => any;
}, {
    disabled: boolean;
}>;
export default _default;
