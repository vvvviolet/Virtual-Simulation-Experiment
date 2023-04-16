import type { ExtractPropTypes, PropType } from 'vue';
export declare const dividerProps: () => {
    prefixCls: StringConstructor;
    type: {
        type: PropType<"" | "horizontal" | "vertical">;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    orientation: {
        type: PropType<"center" | "left" | "right">;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    orientationMargin: (StringConstructor | NumberConstructor)[];
};
export declare type DividerProps = Partial<ExtractPropTypes<ReturnType<typeof dividerProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            dashed: boolean;
            type: "" | "horizontal" | "vertical";
            orientation: "center" | "left" | "right";
            plain: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: {
                type: PropType<"" | "horizontal" | "vertical">;
                default: string;
            };
            dashed: {
                type: BooleanConstructor;
                default: boolean;
            };
            orientation: {
                type: PropType<"center" | "left" | "right">;
                default: string;
            };
            plain: {
                type: BooleanConstructor;
                default: boolean;
            };
            orientationMargin: (StringConstructor | NumberConstructor)[];
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dashed" | "type" | "orientation" | "plain">;
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
            type: {
                type: PropType<"" | "horizontal" | "vertical">;
                default: string;
            };
            dashed: {
                type: BooleanConstructor;
                default: boolean;
            };
            orientation: {
                type: PropType<"center" | "left" | "right">;
                default: string;
            };
            plain: {
                type: BooleanConstructor;
                default: boolean;
            };
            orientationMargin: (StringConstructor | NumberConstructor)[];
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            dashed: boolean;
            type: "" | "horizontal" | "vertical";
            orientation: "center" | "left" | "right";
            plain: boolean;
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
        type: {
            type: PropType<"" | "horizontal" | "vertical">;
            default: string;
        };
        dashed: {
            type: BooleanConstructor;
            default: boolean;
        };
        orientation: {
            type: PropType<"center" | "left" | "right">;
            default: string;
        };
        plain: {
            type: BooleanConstructor;
            default: boolean;
        };
        orientationMargin: (StringConstructor | NumberConstructor)[];
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    type: {
        type: PropType<"" | "horizontal" | "vertical">;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    orientation: {
        type: PropType<"center" | "left" | "right">;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    orientationMargin: (StringConstructor | NumberConstructor)[];
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    dashed: boolean;
    type: "" | "horizontal" | "vertical";
    orientation: "center" | "left" | "right";
    plain: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
