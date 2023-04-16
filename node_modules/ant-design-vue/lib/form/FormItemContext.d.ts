import type { ComputedRef } from 'vue';
export declare type FormItemContext = {
    id: ComputedRef<string>;
    onFieldBlur: () => void;
    onFieldChange: () => void;
    clearValidate: () => void;
};
export declare const useProvideFormItemContext: (props: FormItemContext, useValidation?: ComputedRef<boolean>) => void;
export declare const useInjectFormItemContext: () => FormItemContext;
declare const _default: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
