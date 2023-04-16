import type { Ref, PropType, VNode, HTMLAttributes, ExtractPropTypes, Plugin, CSSProperties, InjectionKey } from 'vue';
import type { Breakpoint } from '../_util/responsiveObserve';
export declare const DescriptionsItemProps: {
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    span: NumberConstructor;
};
declare const descriptionsItemProp: () => {
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    labelStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    span: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type DescriptionsItemProp = Partial<ExtractPropTypes<ReturnType<typeof descriptionsItemProp>>>;
export declare const DescriptionsItem: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    labelStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    span: {
        type: NumberConstructor;
        default: number;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    labelStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    span: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    span: number;
    labelStyle: CSSProperties;
    contentStyle: CSSProperties;
}>;
export declare const descriptionsProps: () => {
    prefixCls: StringConstructor;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: PropType<"default" | "small" | "middle">;
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    column: {
        type: PropType<number | Partial<Record<Breakpoint, number>>>;
        default: () => number | Partial<Record<Breakpoint, number>>;
    };
    layout: PropType<"horizontal" | "vertical">;
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
};
export declare type DescriptionsProps = HTMLAttributes & Partial<ExtractPropTypes<ReturnType<typeof descriptionsProps>>>;
export interface DescriptionsContextProp {
    labelStyle?: Ref<CSSProperties>;
    contentStyle?: Ref<CSSProperties>;
}
export declare const descriptionsContext: InjectionKey<DescriptionsContextProp>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
            colon: boolean;
            bordered: boolean;
            labelStyle: CSSProperties;
            contentStyle: CSSProperties;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            size: {
                type: PropType<"default" | "small" | "middle">;
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
            column: {
                type: PropType<number | Partial<Record<Breakpoint, number>>>;
                default: () => number | Partial<Record<Breakpoint, number>>;
            };
            layout: PropType<"horizontal" | "vertical">;
            colon: {
                type: BooleanConstructor;
                default: any;
            };
            labelStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            contentStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "column" | "size" | "colon" | "bordered" | "labelStyle" | "contentStyle">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            size: {
                type: PropType<"default" | "small" | "middle">;
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
            column: {
                type: PropType<number | Partial<Record<Breakpoint, number>>>;
                default: () => number | Partial<Record<Breakpoint, number>>;
            };
            layout: PropType<"horizontal" | "vertical">;
            colon: {
                type: BooleanConstructor;
                default: any;
            };
            labelStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            contentStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            column: number | Partial<Record<Breakpoint, number>>;
            size: "default" | "small" | "middle";
            colon: boolean;
            bordered: boolean;
            labelStyle: CSSProperties;
            contentStyle: CSSProperties;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        prefixCls: StringConstructor;
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        size: {
            type: PropType<"default" | "small" | "middle">;
            default: string;
        };
        title: import("vue-types").VueTypeValidableDef<any>;
        extra: import("vue-types").VueTypeValidableDef<any>;
        column: {
            type: PropType<number | Partial<Record<Breakpoint, number>>>;
            default: () => number | Partial<Record<Breakpoint, number>>;
        };
        layout: PropType<"horizontal" | "vertical">;
        colon: {
            type: BooleanConstructor;
            default: any;
        };
        labelStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        contentStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: PropType<"default" | "small" | "middle">;
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    column: {
        type: PropType<number | Partial<Record<Breakpoint, number>>>;
        default: () => number | Partial<Record<Breakpoint, number>>;
    };
    layout: PropType<"horizontal" | "vertical">;
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    column: number | Partial<Record<Breakpoint, number>>;
    size: "default" | "small" | "middle";
    colon: boolean;
    bordered: boolean;
    labelStyle: CSSProperties;
    contentStyle: CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof DescriptionsItem;
};
export default _default;
