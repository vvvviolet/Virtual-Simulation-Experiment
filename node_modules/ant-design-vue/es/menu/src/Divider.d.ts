import type { ExtractPropTypes } from 'vue';
export declare const menuDividerProps: () => {
    prefixCls: StringConstructor;
    dashed: BooleanConstructor;
};
export declare type MenuDividerProps = Partial<ExtractPropTypes<ReturnType<typeof menuDividerProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    dashed: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    dashed: BooleanConstructor;
}>>, {
    dashed: boolean;
}>;
export default _default;
