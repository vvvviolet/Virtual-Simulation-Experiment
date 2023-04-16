declare const _default: import("vue").DefineComponent<{
    rootPrefixCls: StringConstructor;
    page: NumberConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    last: {
        type: BooleanConstructor;
        default: any;
    };
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    showTitle: {
        type: BooleanConstructor;
        default: any;
    };
    itemRender: {
        type: FunctionConstructor;
        default: () => void;
    };
    onClick: {
        type: FunctionConstructor;
    };
    onKeypress: {
        type: FunctionConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rootPrefixCls: StringConstructor;
    page: NumberConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    last: {
        type: BooleanConstructor;
        default: any;
    };
    locale: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    showTitle: {
        type: BooleanConstructor;
        default: any;
    };
    itemRender: {
        type: FunctionConstructor;
        default: () => void;
    };
    onClick: {
        type: FunctionConstructor;
    };
    onKeypress: {
        type: FunctionConstructor;
    };
}>>, {
    last: boolean;
    active: boolean;
    locale: {
        [key: string]: any;
    };
    showTitle: boolean;
    itemRender: Function;
}>;
export default _default;
