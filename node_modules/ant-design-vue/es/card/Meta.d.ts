import type { ExtractPropTypes } from 'vue';
export declare const cardMetaProps: () => {
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    avatar: import("vue-types").VueTypeValidableDef<any>;
};
export declare type CardGridProps = Partial<ExtractPropTypes<ReturnType<typeof cardMetaProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    avatar: import("vue-types").VueTypeValidableDef<any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    avatar: import("vue-types").VueTypeValidableDef<any>;
}>>, {}>;
export default _default;
