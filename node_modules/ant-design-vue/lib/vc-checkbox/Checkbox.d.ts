export declare const checkboxProps: {
    prefixCls: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: StringConstructor;
    defaultChecked: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: any;
    };
    checked: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: any;
    };
    disabled: BooleanConstructor;
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
    };
    readonly: BooleanConstructor;
    autofocus: BooleanConstructor;
    value: import("vue-types").VueTypeValidableDef<any>;
    required: BooleanConstructor;
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: StringConstructor;
    defaultChecked: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: any;
    };
    checked: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: any;
    };
    disabled: BooleanConstructor;
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
    };
    readonly: BooleanConstructor;
    autofocus: BooleanConstructor;
    value: import("vue-types").VueTypeValidableDef<any>;
    required: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], "change" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: StringConstructor;
    defaultChecked: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: any;
    };
    checked: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: any;
    };
    disabled: BooleanConstructor;
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
    };
    readonly: BooleanConstructor;
    autofocus: BooleanConstructor;
    value: import("vue-types").VueTypeValidableDef<any>;
    required: BooleanConstructor;
}>> & {
    onChange?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
}, {
    disabled: boolean;
    required: boolean;
    defaultChecked: number | boolean;
    checked: number | boolean;
    readonly: boolean;
    autofocus: boolean;
}>;
export default _default;
