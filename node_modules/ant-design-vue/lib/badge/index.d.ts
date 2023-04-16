import type { Plugin } from 'vue';
import Ribbon from './Ribbon';
export type { BadgeProps } from './Badge';
export { Ribbon as BadgeRibbon };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: "default" | "small";
            dot: boolean;
            showZero: boolean;
            overflowCount: number;
            numberStyle: import("vue").CSSProperties;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            count: import("vue-types").VueTypeValidableDef<any>;
            showZero: {
                type: BooleanConstructor;
                default: any;
            };
            overflowCount: {
                type: NumberConstructor;
                default: number;
            };
            dot: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            scrollNumberPrefixCls: StringConstructor;
            status: {
                type: import("vue").PropType<"default" | "error" | "success" | "warning" | "processing">;
            };
            size: {
                type: import("vue").PropType<"default" | "small">;
                default: string;
            };
            color: StringConstructor;
            text: import("vue-types").VueTypeValidableDef<any>;
            offset: import("vue").PropType<[string | number, string | number]>;
            numberStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            title: StringConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "size" | "dot" | "showZero" | "overflowCount" | "numberStyle">;
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
            count: import("vue-types").VueTypeValidableDef<any>;
            showZero: {
                type: BooleanConstructor;
                default: any;
            };
            overflowCount: {
                type: NumberConstructor;
                default: number;
            };
            dot: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            scrollNumberPrefixCls: StringConstructor;
            status: {
                type: import("vue").PropType<"default" | "error" | "success" | "warning" | "processing">;
            };
            size: {
                type: import("vue").PropType<"default" | "small">;
                default: string;
            };
            color: StringConstructor;
            text: import("vue-types").VueTypeValidableDef<any>;
            offset: import("vue").PropType<[string | number, string | number]>;
            numberStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            title: StringConstructor;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            size: "default" | "small";
            dot: boolean;
            showZero: boolean;
            overflowCount: number;
            numberStyle: import("vue").CSSProperties;
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
        count: import("vue-types").VueTypeValidableDef<any>;
        showZero: {
            type: BooleanConstructor;
            default: any;
        };
        overflowCount: {
            type: NumberConstructor;
            default: number;
        };
        dot: {
            type: BooleanConstructor;
            default: any;
        };
        prefixCls: StringConstructor;
        scrollNumberPrefixCls: StringConstructor;
        status: {
            type: import("vue").PropType<"default" | "error" | "success" | "warning" | "processing">;
        };
        size: {
            type: import("vue").PropType<"default" | "small">;
            default: string;
        };
        color: StringConstructor;
        text: import("vue-types").VueTypeValidableDef<any>;
        offset: import("vue").PropType<[string | number, string | number]>;
        numberStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        title: StringConstructor;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    count: import("vue-types").VueTypeValidableDef<any>;
    showZero: {
        type: BooleanConstructor;
        default: any;
    };
    overflowCount: {
        type: NumberConstructor;
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    scrollNumberPrefixCls: StringConstructor;
    status: {
        type: import("vue").PropType<"default" | "error" | "success" | "warning" | "processing">;
    };
    size: {
        type: import("vue").PropType<"default" | "small">;
        default: string;
    };
    color: StringConstructor;
    text: import("vue-types").VueTypeValidableDef<any>;
    offset: import("vue").PropType<[string | number, string | number]>;
    numberStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    title: StringConstructor;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: "default" | "small";
    dot: boolean;
    showZero: boolean;
    overflowCount: number;
    numberStyle: import("vue").CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Ribbon: typeof Ribbon;
};
export default _default;
