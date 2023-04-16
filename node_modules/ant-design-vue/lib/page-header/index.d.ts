import type { ExtractPropTypes, PropType } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
export declare const pageHeaderProps: () => {
    backIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    breadcrumb: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    tags: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    avatar: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onBack: PropType<MouseEventHandler>;
};
export declare type PageHeaderProps = Partial<ExtractPropTypes<ReturnType<typeof pageHeaderProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            ghost: boolean;
            avatar: {
                [key: string]: any;
            };
            breadcrumb: {
                [key: string]: any;
            };
        }> & Omit<Readonly<ExtractPropTypes<{
            backIcon: import("vue-types").VueTypeValidableDef<any>;
            prefixCls: StringConstructor;
            title: import("vue-types").VueTypeValidableDef<any>;
            subTitle: import("vue-types").VueTypeValidableDef<any>;
            breadcrumb: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            tags: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
            avatar: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            onBack: PropType<MouseEventHandler>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "ghost" | "avatar" | "breadcrumb">;
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
            backIcon: import("vue-types").VueTypeValidableDef<any>;
            prefixCls: StringConstructor;
            title: import("vue-types").VueTypeValidableDef<any>;
            subTitle: import("vue-types").VueTypeValidableDef<any>;
            breadcrumb: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            tags: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
            avatar: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            onBack: PropType<MouseEventHandler>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            ghost: boolean;
            avatar: {
                [key: string]: any;
            };
            breadcrumb: {
                [key: string]: any;
            };
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
        backIcon: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        title: import("vue-types").VueTypeValidableDef<any>;
        subTitle: import("vue-types").VueTypeValidableDef<any>;
        breadcrumb: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        tags: import("vue-types").VueTypeValidableDef<any>;
        footer: import("vue-types").VueTypeValidableDef<any>;
        extra: import("vue-types").VueTypeValidableDef<any>;
        avatar: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        onBack: PropType<MouseEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    backIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    breadcrumb: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    tags: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    avatar: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onBack: PropType<MouseEventHandler>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    ghost: boolean;
    avatar: {
        [key: string]: any;
    };
    breadcrumb: {
        [key: string]: any;
    };
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
