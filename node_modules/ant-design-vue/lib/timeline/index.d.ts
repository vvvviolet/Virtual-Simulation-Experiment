import type { Plugin } from 'vue';
import { timelineProps } from './Timeline';
import TimelineItem, { timelineItemProps } from './TimelineItem';
export type { TimelineProps } from './Timeline';
export type { TimelineItemProps } from './TimelineItem';
export { TimelineItem, timelineProps, timelineItemProps };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            pending: import("vue-types").VueTypeValidableDef<any>;
            pendingDot: import("vue-types").VueTypeValidableDef<any>;
            reverse: {
                type: BooleanConstructor;
                default: any;
            };
            mode: import("vue-types").VueTypeDef<"" | "alternate" | "left" | "right">;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse">;
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
            pending: import("vue-types").VueTypeValidableDef<any>;
            pendingDot: import("vue-types").VueTypeValidableDef<any>;
            reverse: {
                type: BooleanConstructor;
                default: any;
            };
            mode: import("vue-types").VueTypeDef<"" | "alternate" | "left" | "right">;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            reverse: boolean;
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
        pending: import("vue-types").VueTypeValidableDef<any>;
        pendingDot: import("vue-types").VueTypeValidableDef<any>;
        reverse: {
            type: BooleanConstructor;
            default: any;
        };
        mode: import("vue-types").VueTypeDef<"" | "alternate" | "left" | "right">;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    pending: import("vue-types").VueTypeValidableDef<any>;
    pendingDot: import("vue-types").VueTypeValidableDef<any>;
    reverse: {
        type: BooleanConstructor;
        default: any;
    };
    mode: import("vue-types").VueTypeDef<"" | "alternate" | "left" | "right">;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    reverse: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof TimelineItem;
};
export default _default;
