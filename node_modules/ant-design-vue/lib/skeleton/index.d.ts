import type { Plugin } from 'vue';
import SkeletonButton from './Button';
import SkeletonInput from './Input';
import SkeletonImage from './Image';
import SkeletonAvatar from './Avatar';
import SkeletonTitle from './Title';
export type { SkeletonButtonProps } from './Button';
export type { SkeletonInputProps } from './Input';
export type { SkeletonImageProps } from './Image';
export type { SkeletonAvatarProps } from './Avatar';
export type { SkeletonTitleProps } from './Title';
export type { SkeletonProps } from './Skeleton';
export { skeletonProps } from './Skeleton';
export { SkeletonButton, SkeletonAvatar, SkeletonInput, SkeletonImage, SkeletonTitle };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<string | number>;
                };
            }>>;
            round: boolean;
            active: boolean;
            loading: boolean;
            avatar: boolean | {
                prefixCls?: string;
                size?: number | "default" | "small" | "large";
                shape?: "circle" | "square";
            };
            paragraph: boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<(string | number) | (string | number)[]>;
                };
                rows: NumberConstructor;
            }>>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            active: {
                type: BooleanConstructor;
                default: any;
            };
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            avatar: {
                type: import("vue").PropType<boolean | {
                    prefixCls?: string;
                    size?: number | "default" | "small" | "large";
                    shape?: "circle" | "square";
                }>;
                default: boolean | {
                    prefixCls?: string;
                    size?: number | "default" | "small" | "large";
                    shape?: "circle" | "square";
                };
            };
            title: {
                type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<string | number>;
                    };
                }>>>;
                default: boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<string | number>;
                    };
                }>>;
            };
            paragraph: {
                type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<(string | number) | (string | number)[]>;
                    };
                    rows: NumberConstructor;
                }>>>;
                default: boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<(string | number) | (string | number)[]>;
                    };
                    rows: NumberConstructor;
                }>>;
            };
            round: {
                type: BooleanConstructor;
                default: any;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "round" | "active" | "loading" | "avatar" | "paragraph">;
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
            active: {
                type: BooleanConstructor;
                default: any;
            };
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            avatar: {
                type: import("vue").PropType<boolean | {
                    prefixCls?: string;
                    size?: number | "default" | "small" | "large";
                    shape?: "circle" | "square";
                }>;
                default: boolean | {
                    prefixCls?: string;
                    size?: number | "default" | "small" | "large";
                    shape?: "circle" | "square";
                };
            };
            title: {
                type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<string | number>;
                    };
                }>>>;
                default: boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<string | number>;
                    };
                }>>;
            };
            paragraph: {
                type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<(string | number) | (string | number)[]>;
                    };
                    rows: NumberConstructor;
                }>>>;
                default: boolean | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    width: {
                        type: import("vue").PropType<(string | number) | (string | number)[]>;
                    };
                    rows: NumberConstructor;
                }>>;
            };
            round: {
                type: BooleanConstructor;
                default: any;
            };
        }>>, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            title: boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<string | number>;
                };
            }>>;
            round: boolean;
            active: boolean;
            loading: boolean;
            avatar: boolean | {
                prefixCls?: string;
                size?: number | "default" | "small" | "large";
                shape?: "circle" | "square";
            };
            paragraph: boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<(string | number) | (string | number)[]>;
                };
                rows: NumberConstructor;
            }>>;
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
        active: {
            type: BooleanConstructor;
            default: any;
        };
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        prefixCls: StringConstructor;
        avatar: {
            type: import("vue").PropType<boolean | {
                prefixCls?: string;
                size?: number | "default" | "small" | "large";
                shape?: "circle" | "square";
            }>;
            default: boolean | {
                prefixCls?: string;
                size?: number | "default" | "small" | "large";
                shape?: "circle" | "square";
            };
        };
        title: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<string | number>;
                };
            }>>>;
            default: boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<string | number>;
                };
            }>>;
        };
        paragraph: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<(string | number) | (string | number)[]>;
                };
                rows: NumberConstructor;
            }>>>;
            default: boolean | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                width: {
                    type: import("vue").PropType<(string | number) | (string | number)[]>;
                };
                rows: NumberConstructor;
            }>>;
        };
        round: {
            type: BooleanConstructor;
            default: any;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    avatar: {
        type: import("vue").PropType<boolean | {
            prefixCls?: string;
            size?: number | "default" | "small" | "large";
            shape?: "circle" | "square";
        }>;
        default: boolean | {
            prefixCls?: string;
            size?: number | "default" | "small" | "large";
            shape?: "circle" | "square";
        };
    };
    title: {
        type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: import("vue").PropType<string | number>;
            };
        }>>>;
        default: boolean | Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: import("vue").PropType<string | number>;
            };
        }>>;
    };
    paragraph: {
        type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: import("vue").PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>>;
        default: boolean | Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: import("vue").PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>;
    };
    round: {
        type: BooleanConstructor;
        default: any;
    };
}>>, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    title: boolean | Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        width: {
            type: import("vue").PropType<string | number>;
        };
    }>>;
    round: boolean;
    active: boolean;
    loading: boolean;
    avatar: boolean | {
        prefixCls?: string;
        size?: number | "default" | "small" | "large";
        shape?: "circle" | "square";
    };
    paragraph: boolean | Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        width: {
            type: import("vue").PropType<(string | number) | (string | number)[]>;
        };
        rows: NumberConstructor;
    }>>;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Button: typeof SkeletonButton;
    readonly Avatar: typeof SkeletonAvatar;
    readonly Input: typeof SkeletonInput;
    readonly Image: typeof SkeletonImage;
};
export default _default;
