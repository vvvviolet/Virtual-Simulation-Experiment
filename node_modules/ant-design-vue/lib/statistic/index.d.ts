import type { Plugin } from 'vue';
import Countdown from './Countdown';
export type { StatisticProps } from './Statistic';
export declare const StatisticCountdown: any;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loading: boolean;
            valueStyle: import("vue").CSSProperties;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            decimalSeparator: StringConstructor;
            groupSeparator: StringConstructor;
            format: StringConstructor;
            value: {
                type: import("vue").PropType<import("./utils").valueType>;
            };
            valueStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            valueRender: import("vue-types").VueTypeValidableDef<any>;
            formatter: import("vue-types").VueTypeValidableDef<any>;
            precision: NumberConstructor;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            suffix: import("vue-types").VueTypeValidableDef<any>;
            title: import("vue-types").VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "loading" | "valueStyle">;
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
            prefixCls: StringConstructor;
            decimalSeparator: StringConstructor;
            groupSeparator: StringConstructor;
            format: StringConstructor;
            value: {
                type: import("vue").PropType<import("./utils").valueType>;
            };
            valueStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            valueRender: import("vue-types").VueTypeValidableDef<any>;
            formatter: import("vue-types").VueTypeValidableDef<any>;
            precision: NumberConstructor;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            suffix: import("vue-types").VueTypeValidableDef<any>;
            title: import("vue-types").VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            loading: boolean;
            valueStyle: import("vue").CSSProperties;
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
        prefixCls: StringConstructor;
        decimalSeparator: StringConstructor;
        groupSeparator: StringConstructor;
        format: StringConstructor;
        value: {
            type: import("vue").PropType<import("./utils").valueType>;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        valueRender: import("vue-types").VueTypeValidableDef<any>;
        formatter: import("vue-types").VueTypeValidableDef<any>;
        precision: NumberConstructor;
        prefix: import("vue-types").VueTypeValidableDef<any>;
        suffix: import("vue-types").VueTypeValidableDef<any>;
        title: import("vue-types").VueTypeValidableDef<any>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    format: StringConstructor;
    value: {
        type: import("vue").PropType<import("./utils").valueType>;
    };
    valueStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    valueRender: import("vue-types").VueTypeValidableDef<any>;
    formatter: import("vue-types").VueTypeValidableDef<any>;
    precision: NumberConstructor;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    loading: boolean;
    valueStyle: import("vue").CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Countdown: typeof Countdown;
};
export default _default;
