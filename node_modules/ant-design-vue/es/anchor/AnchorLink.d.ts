import type { ExtractPropTypes } from 'vue';
export declare const anchorLinkProps: () => {
    prefixCls: StringConstructor;
    href: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    target: StringConstructor;
};
export declare type AnchorLinkProps = Partial<ExtractPropTypes<ReturnType<typeof anchorLinkProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    href: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    target: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    href: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    target: StringConstructor;
}>>, {}>;
export default _default;
