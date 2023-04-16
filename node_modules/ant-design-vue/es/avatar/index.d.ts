import type { Plugin } from 'vue';
import Group from './Group';
export { avatarProps } from './Avatar';
export type { AvatarProps, AvatarSize } from './Avatar';
export type { AvatarGroupProps } from './Group';
export { Group as AvatarGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: import("./Avatar").AvatarSize;
            draggable: boolean;
            shape: "circle" | "square";
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            shape: {
                type: import("vue").PropType<"circle" | "square">;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("./Avatar").AvatarSize>;
                default: () => import("./Avatar").AvatarSize;
            };
            src: StringConstructor;
            srcset: StringConstructor;
            icon: import("vue-types").VueTypeValidableDef<any>;
            alt: StringConstructor;
            gap: NumberConstructor;
            draggable: {
                type: BooleanConstructor;
                default: any;
            };
            crossOrigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
            loadError: {
                type: import("vue").PropType<() => boolean>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "size" | "draggable" | "shape">;
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
            shape: {
                type: import("vue").PropType<"circle" | "square">;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("./Avatar").AvatarSize>;
                default: () => import("./Avatar").AvatarSize;
            };
            src: StringConstructor;
            srcset: StringConstructor;
            icon: import("vue-types").VueTypeValidableDef<any>;
            alt: StringConstructor;
            gap: NumberConstructor;
            draggable: {
                type: BooleanConstructor;
                default: any;
            };
            crossOrigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
            loadError: {
                type: import("vue").PropType<() => boolean>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            size: import("./Avatar").AvatarSize;
            draggable: boolean;
            shape: "circle" | "square";
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
        shape: {
            type: import("vue").PropType<"circle" | "square">;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("./Avatar").AvatarSize>;
            default: () => import("./Avatar").AvatarSize;
        };
        src: StringConstructor;
        srcset: StringConstructor;
        icon: import("vue-types").VueTypeValidableDef<any>;
        alt: StringConstructor;
        gap: NumberConstructor;
        draggable: {
            type: BooleanConstructor;
            default: any;
        };
        crossOrigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
        loadError: {
            type: import("vue").PropType<() => boolean>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./Avatar").AvatarSize>;
        default: () => import("./Avatar").AvatarSize;
    };
    src: StringConstructor;
    srcset: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    alt: StringConstructor;
    gap: NumberConstructor;
    draggable: {
        type: BooleanConstructor;
        default: any;
    };
    crossOrigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
    loadError: {
        type: import("vue").PropType<() => boolean>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("./Avatar").AvatarSize;
    draggable: boolean;
    shape: "circle" | "square";
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof Group;
};
export default _default;
