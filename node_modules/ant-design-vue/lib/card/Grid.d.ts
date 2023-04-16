import type { ExtractPropTypes } from 'vue';
export declare const cardGridProps: () => {
    prefixCls: StringConstructor;
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CardGridProps = Partial<ExtractPropTypes<ReturnType<typeof cardGridProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    hoverable: boolean;
}>;
export default _default;
