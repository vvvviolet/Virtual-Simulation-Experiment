import type { ExtractPropTypes, PropType } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
export declare const breadcrumbItemProps: () => {
    prefixCls: StringConstructor;
    href: StringConstructor;
    separator: import("vue-types").VueTypeValidableDef<any>;
    overlay: import("vue-types").VueTypeValidableDef<any>;
    onClick: PropType<MouseEventHandler>;
};
export declare type BreadcrumbItemProps = Partial<ExtractPropTypes<ReturnType<typeof breadcrumbItemProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    href: StringConstructor;
    separator: import("vue-types").VueTypeValidableDef<any>;
    overlay: import("vue-types").VueTypeValidableDef<any>;
    onClick: PropType<MouseEventHandler>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    href: StringConstructor;
    separator: import("vue-types").VueTypeValidableDef<any>;
    overlay: import("vue-types").VueTypeValidableDef<any>;
    onClick: PropType<MouseEventHandler>;
}>>, {}>;
export default _default;
