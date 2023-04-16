import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    options: {
        type: PropType<Partial<import("vue").ExtractPropTypes<{
            value: StringConstructor;
            disabled: BooleanConstructor;
            label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
        }>>[]>;
        default: () => any[];
    };
    prefixCls: StringConstructor;
    placement: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    getPopupContainer: FunctionConstructor;
    direction: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    options: {
        type: PropType<Partial<import("vue").ExtractPropTypes<{
            value: StringConstructor;
            disabled: BooleanConstructor;
            label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
        }>>[]>;
        default: () => any[];
    };
    prefixCls: StringConstructor;
    placement: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    getPopupContainer: FunctionConstructor;
    direction: StringConstructor;
}>>, {
    visible: boolean;
    options: Partial<import("vue").ExtractPropTypes<{
        value: StringConstructor;
        disabled: BooleanConstructor;
        label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    }>>[];
    loading: boolean;
}>;
export default _default;
