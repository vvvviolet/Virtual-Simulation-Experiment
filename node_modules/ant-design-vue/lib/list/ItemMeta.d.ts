import type { ExtractPropTypes } from 'vue';
export declare const listItemMetaProps: () => {
    avatar: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
};
export declare type ListItemMetaProps = Partial<ExtractPropTypes<ReturnType<typeof listItemMetaProps>>>;
declare const _default: import("vue").DefineComponent<{
    avatar: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    avatar: import("vue-types").VueTypeValidableDef<any>;
    description: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
}>>, {}>;
export default _default;
