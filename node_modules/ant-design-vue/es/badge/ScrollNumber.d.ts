import type { ExtractPropTypes, DefineComponent } from 'vue';
declare const scrollNumberProps: {
    prefixCls: StringConstructor;
    count: import("vue-types").VueTypeValidableDef<any>;
    component: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    show: BooleanConstructor;
};
export declare type ScrollNumberProps = Partial<ExtractPropTypes<typeof scrollNumberProps>>;
declare const _default: DefineComponent<{
    prefixCls: StringConstructor;
    count: import("vue-types").VueTypeValidableDef<any>;
    component: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    show: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    count: import("vue-types").VueTypeValidableDef<any>;
    component: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    show: BooleanConstructor;
}>>, {
    show: boolean;
}>;
export default _default;
