export type { RowProps } from '../grid';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            wrap: boolean;
            gutter: number | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>> | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            align: import("vue").PropType<"stretch" | "bottom" | "top" | "middle">;
            justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
            prefixCls: StringConstructor;
            gutter: {
                type: import("vue").PropType<import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter]>;
                default: import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
            };
            wrap: {
                type: BooleanConstructor;
                default: any;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "wrap" | "gutter">;
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
            align: import("vue").PropType<"stretch" | "bottom" | "top" | "middle">;
            justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
            prefixCls: StringConstructor;
            gutter: {
                type: import("vue").PropType<import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter]>;
                default: import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
            };
            wrap: {
                type: BooleanConstructor;
                default: any;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            wrap: boolean;
            gutter: number | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>> | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
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
        align: import("vue").PropType<"stretch" | "bottom" | "top" | "middle">;
        justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
        prefixCls: StringConstructor;
        gutter: {
            type: import("vue").PropType<import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter]>;
            default: import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
        };
        wrap: {
            type: BooleanConstructor;
            default: any;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    align: import("vue").PropType<"stretch" | "bottom" | "top" | "middle">;
    justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: import("vue").PropType<import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter]>;
        default: import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    wrap: boolean;
    gutter: number | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>> | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
