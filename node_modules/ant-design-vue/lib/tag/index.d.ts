import type { HTMLAttributes, PropType, ExtractPropTypes, Plugin } from 'vue';
import type { LiteralUnion } from '../_util/type';
import CheckableTag from './CheckableTag';
export declare const tagProps: () => {
    prefixCls: StringConstructor;
    color: {
        type: PropType<LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>>;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    onClose: {
        type: PropType<(e: MouseEvent) => void>;
    };
    'onUpdate:visible': PropType<(vis: boolean) => void>;
    icon: import("vue-types").VueTypeValidableDef<any>;
};
export declare type TagProps = HTMLAttributes & Partial<ExtractPropTypes<ReturnType<typeof tagProps>>>;
export { CheckableTag };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            visible: boolean;
            closable: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            color: {
                type: PropType<LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>>;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            onClose: {
                type: PropType<(e: MouseEvent) => void>;
            };
            'onUpdate:visible': PropType<(vis: boolean) => void>;
            icon: import("vue-types").VueTypeValidableDef<any>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "visible" | "closable">;
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
            color: {
                type: PropType<LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>>;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            onClose: {
                type: PropType<(e: MouseEvent) => void>;
            };
            'onUpdate:visible': PropType<(vis: boolean) => void>;
            icon: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            visible: boolean;
            closable: boolean;
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
        color: {
            type: PropType<LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>>;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<any>;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        onClose: {
            type: PropType<(e: MouseEvent) => void>;
        };
        'onUpdate:visible': PropType<(vis: boolean) => void>;
        icon: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    color: {
        type: PropType<LiteralUnion<"default" | "blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "error" | "success" | "warning" | "processing" | "geekblue" | "volcano", string>>;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    onClose: {
        type: PropType<(e: MouseEvent) => void>;
    };
    'onUpdate:visible': PropType<(vis: boolean) => void>;
    icon: import("vue-types").VueTypeValidableDef<any>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    visible: boolean;
    closable: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly CheckableTag: typeof CheckableTag;
};
export default _default;
