export type { ColProps } from '../grid';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            xxxl: string | number | import("../grid").ColSize;
            xxl: string | number | import("../grid").ColSize;
            xl: string | number | import("../grid").ColSize;
            lg: string | number | import("../grid").ColSize;
            md: string | number | import("../grid").ColSize;
            sm: string | number | import("../grid").ColSize;
            xs: string | number | import("../grid").ColSize;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            xxxl: string | number | import("../grid").ColSize;
            xxl: string | number | import("../grid").ColSize;
            xl: string | number | import("../grid").ColSize;
            lg: string | number | import("../grid").ColSize;
            md: string | number | import("../grid").ColSize;
            sm: string | number | import("../grid").ColSize;
            xs: string | number | import("../grid").ColSize;
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
    } & Readonly<import("vue").ExtractPropTypes<{
        span: (StringConstructor | NumberConstructor)[];
        order: (StringConstructor | NumberConstructor)[];
        offset: (StringConstructor | NumberConstructor)[];
        push: (StringConstructor | NumberConstructor)[];
        pull: (StringConstructor | NumberConstructor)[];
        xs: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        sm: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        md: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        lg: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        xl: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        xxl: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        xxxl: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        prefixCls: StringConstructor;
        flex: (StringConstructor | NumberConstructor)[];
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    span: (StringConstructor | NumberConstructor)[];
    order: (StringConstructor | NumberConstructor)[];
    offset: (StringConstructor | NumberConstructor)[];
    push: (StringConstructor | NumberConstructor)[];
    pull: (StringConstructor | NumberConstructor)[];
    xs: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    sm: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    md: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    lg: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    xl: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    xxl: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    xxxl: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    prefixCls: StringConstructor;
    flex: (StringConstructor | NumberConstructor)[];
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    xxxl: string | number | import("../grid").ColSize;
    xxl: string | number | import("../grid").ColSize;
    xl: string | number | import("../grid").ColSize;
    lg: string | number | import("../grid").ColSize;
    md: string | number | import("../grid").ColSize;
    sm: string | number | import("../grid").ColSize;
    xs: string | number | import("../grid").ColSize;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
