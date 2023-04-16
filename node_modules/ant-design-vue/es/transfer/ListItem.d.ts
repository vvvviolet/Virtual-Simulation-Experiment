import type { ExtractPropTypes } from 'vue';
export declare const transferListItemProps: {
    renderedText: import("vue-types").VueTypeValidableDef<any>;
    renderedEl: import("vue-types").VueTypeValidableDef<any>;
    item: import("vue-types").VueTypeValidableDef<any>;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    showRemove: {
        type: BooleanConstructor;
        default: any;
    };
    onClick: FunctionConstructor;
    onRemove: FunctionConstructor;
};
export declare type TransferListItemProps = Partial<ExtractPropTypes<typeof transferListItemProps>>;
declare const _default: import("vue").DefineComponent<{
    renderedText: import("vue-types").VueTypeValidableDef<any>;
    renderedEl: import("vue-types").VueTypeValidableDef<any>;
    item: import("vue-types").VueTypeValidableDef<any>;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    showRemove: {
        type: BooleanConstructor;
        default: any;
    };
    onClick: FunctionConstructor;
    onRemove: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "remove")[], "click" | "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    renderedText: import("vue-types").VueTypeValidableDef<any>;
    renderedEl: import("vue-types").VueTypeValidableDef<any>;
    item: import("vue-types").VueTypeValidableDef<any>;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    showRemove: {
        type: BooleanConstructor;
        default: any;
    };
    onClick: FunctionConstructor;
    onRemove: FunctionConstructor;
}>> & {
    onClick?: (...args: any[]) => any;
    onRemove?: (...args: any[]) => any;
}, {
    disabled: boolean;
    checked: boolean;
    showRemove: boolean;
}>;
export default _default;
