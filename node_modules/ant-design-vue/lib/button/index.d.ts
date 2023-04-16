import type { Plugin } from 'vue';
import ButtonGroup from './button-group';
import type { ButtonProps, ButtonShape, ButtonType } from './buttonTypes';
import type { ButtonGroupProps } from './button-group';
import type { SizeType as ButtonSize } from '../config-provider';
export type { ButtonProps, ButtonShape, ButtonType, ButtonGroupProps, ButtonSize };
export { ButtonGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            block: boolean;
            disabled: boolean;
            loading: boolean | {
                delay?: number;
            };
            ghost: boolean;
            danger: boolean;
            htmlType: import("./buttonTypes").ButtonHTMLType;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("./buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<ButtonShape>;
            };
            size: {
                type: import("vue").PropType<ButtonSize>;
            };
            loading: {
                type: import("vue").PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: import("vue").PropType<(event: MouseEvent) => void>;
            };
            onMousedown: {
                type: import("vue").PropType<(event: MouseEvent) => void>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "block" | "disabled" | "loading" | "ghost" | "danger" | "htmlType">;
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
            type: import("vue").PropType<ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("./buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<ButtonShape>;
            };
            size: {
                type: import("vue").PropType<ButtonSize>;
            };
            loading: {
                type: import("vue").PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: import("vue").PropType<(event: MouseEvent) => void>;
            };
            onMousedown: {
                type: import("vue").PropType<(event: MouseEvent) => void>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            block: boolean;
            disabled: boolean;
            loading: boolean | {
                delay?: number;
            };
            ghost: boolean;
            danger: boolean;
            htmlType: import("./buttonTypes").ButtonHTMLType;
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
        type: import("vue").PropType<ButtonType>;
        htmlType: {
            type: import("vue").PropType<import("./buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<ButtonShape>;
        };
        size: {
            type: import("vue").PropType<ButtonSize>;
        };
        loading: {
            type: import("vue").PropType<boolean | {
                delay?: number;
            }>;
            default: () => boolean | {
                delay?: number;
            };
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        block: {
            type: BooleanConstructor;
            default: any;
        };
        danger: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        href: StringConstructor;
        target: StringConstructor;
        title: StringConstructor;
        onClick: {
            type: import("vue").PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: import("vue").PropType<(event: MouseEvent) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    type: import("vue").PropType<ButtonType>;
    htmlType: {
        type: import("vue").PropType<import("./buttonTypes").ButtonHTMLType>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<ButtonShape>;
    };
    size: {
        type: import("vue").PropType<ButtonSize>;
    };
    loading: {
        type: import("vue").PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    block: {
        type: BooleanConstructor;
        default: any;
    };
    danger: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    href: StringConstructor;
    target: StringConstructor;
    title: StringConstructor;
    onClick: {
        type: import("vue").PropType<(event: MouseEvent) => void>;
    };
    onMousedown: {
        type: import("vue").PropType<(event: MouseEvent) => void>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    block: boolean;
    disabled: boolean;
    loading: boolean | {
        delay?: number;
    };
    ghost: boolean;
    danger: boolean;
    htmlType: import("./buttonTypes").ButtonHTMLType;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof ButtonGroup;
};
export default _default;
