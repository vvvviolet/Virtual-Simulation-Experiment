import type { ExtractPropTypes, PropType } from 'vue';
import type { NodeMouseEventHandler } from '../vc-tree/contextTypes';
declare const AlertTypes: ["success", "info", "warning", "error"];
export declare type AlertType = typeof AlertTypes[number];
export declare const alertProps: () => {
    /**
     * Type of Alert styles, options: `success`, `info`, `warning`, `error`
     */
    type: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "info">;
    /** Whether Alert can be closed */
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    /** Close text to show */
    closeText: import("vue-types").VueTypeValidableDef<any>;
    /** Content of Alert */
    message: import("vue-types").VueTypeValidableDef<any>;
    /** Additional content of Alert */
    description: import("vue-types").VueTypeValidableDef<any>;
    /** Trigger when animation ending of Alert */
    afterClose: PropType<() => void>;
    /** Whether to show icon */
    showIcon: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    banner: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    onClose: PropType<NodeMouseEventHandler>;
};
export declare type AlertProps = Partial<ExtractPropTypes<ReturnType<typeof alertProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            showIcon: boolean;
            closable: boolean;
            banner: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            /**
             * Type of Alert styles, options: `success`, `info`, `warning`, `error`
             */
            type: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "info">;
            /** Whether Alert can be closed */
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            /** Close text to show */
            closeText: import("vue-types").VueTypeValidableDef<any>;
            /** Content of Alert */
            message: import("vue-types").VueTypeValidableDef<any>;
            /** Additional content of Alert */
            description: import("vue-types").VueTypeValidableDef<any>;
            /** Trigger when animation ending of Alert */
            afterClose: PropType<() => void>;
            /** Whether to show icon */
            showIcon: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            banner: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            onClose: PropType<NodeMouseEventHandler>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "showIcon" | "closable" | "banner">;
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
            /**
             * Type of Alert styles, options: `success`, `info`, `warning`, `error`
             */
            type: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "info">;
            /** Whether Alert can be closed */
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            /** Close text to show */
            closeText: import("vue-types").VueTypeValidableDef<any>;
            /** Content of Alert */
            message: import("vue-types").VueTypeValidableDef<any>;
            /** Additional content of Alert */
            description: import("vue-types").VueTypeValidableDef<any>;
            /** Trigger when animation ending of Alert */
            afterClose: PropType<() => void>;
            /** Whether to show icon */
            showIcon: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            banner: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            onClose: PropType<NodeMouseEventHandler>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            showIcon: boolean;
            closable: boolean;
            banner: boolean;
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
        /**
         * Type of Alert styles, options: `success`, `info`, `warning`, `error`
         */
        type: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "info">;
        /** Whether Alert can be closed */
        closable: {
            type: BooleanConstructor;
            default: any;
        };
        /** Close text to show */
        closeText: import("vue-types").VueTypeValidableDef<any>;
        /** Content of Alert */
        message: import("vue-types").VueTypeValidableDef<any>;
        /** Additional content of Alert */
        description: import("vue-types").VueTypeValidableDef<any>;
        /** Trigger when animation ending of Alert */
        afterClose: PropType<() => void>;
        /** Whether to show icon */
        showIcon: {
            type: BooleanConstructor;
            default: any;
        };
        prefixCls: StringConstructor;
        banner: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        closeIcon: import("vue-types").VueTypeValidableDef<any>;
        onClose: PropType<NodeMouseEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    /**
     * Type of Alert styles, options: `success`, `info`, `warning`, `error`
     */
    type: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "info">;
    /** Whether Alert can be closed */
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    /** Close text to show */
    closeText: import("vue-types").VueTypeValidableDef<any>;
    /** Content of Alert */
    message: import("vue-types").VueTypeValidableDef<any>;
    /** Additional content of Alert */
    description: import("vue-types").VueTypeValidableDef<any>;
    /** Trigger when animation ending of Alert */
    afterClose: PropType<() => void>;
    /** Whether to show icon */
    showIcon: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    banner: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    onClose: PropType<NodeMouseEventHandler>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    showIcon: boolean;
    closable: boolean;
    banner: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
