import type { ExtractPropTypes } from 'vue';
export declare const menuItemGroupProps: () => {
    title: import("vue-types").VueTypeValidableDef<any>;
};
export declare type MenuItemGroupProps = Partial<ExtractPropTypes<ReturnType<typeof menuItemGroupProps>>>;
declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeValidableDef<any>;
}, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    title: import("vue-types").VueTypeValidableDef<any>;
}>>, {}>;
export default _default;
