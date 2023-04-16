import type { PropType, ExtractPropTypes } from 'vue';
import type { SizeType } from '../config-provider';
export declare type SpaceSize = SizeType | number;
export declare const spaceProps: () => {
    prefixCls: StringConstructor;
    size: {
        type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
    };
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    align: import("vue-types").VueTypeDef<"center" | "end" | "start" | "baseline">;
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
};
export declare type SpaceProps = Partial<ExtractPropTypes<ReturnType<typeof spaceProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            direction: "horizontal" | "vertical";
            wrap: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            size: {
                type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
            };
            direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
                default: "horizontal" | "vertical";
            };
            align: import("vue-types").VueTypeDef<"center" | "end" | "start" | "baseline">;
            wrap: {
                type: BooleanConstructor;
                default: any;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "wrap">;
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
            size: {
                type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
            };
            direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
                default: "horizontal" | "vertical";
            };
            align: import("vue-types").VueTypeDef<"center" | "end" | "start" | "baseline">;
            wrap: {
                type: BooleanConstructor;
                default: any;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            direction: "horizontal" | "vertical";
            wrap: boolean;
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
        size: {
            type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
        };
        direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
            default: "horizontal" | "vertical";
        };
        align: import("vue-types").VueTypeDef<"center" | "end" | "start" | "baseline">;
        wrap: {
            type: BooleanConstructor;
            default: any;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
    };
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    align: import("vue-types").VueTypeDef<"center" | "end" | "start" | "baseline">;
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    direction: "horizontal" | "vertical";
    wrap: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
