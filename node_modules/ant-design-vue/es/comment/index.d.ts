import type { ExtractPropTypes } from 'vue';
export declare const commentProps: () => {
    actions: ArrayConstructor;
    /** The element to display as the comment author. */
    author: import("vue-types").VueTypeValidableDef<any>;
    /** The element to display as the comment avatar - generally an antd Avatar */
    avatar: import("vue-types").VueTypeValidableDef<any>;
    /** The main content of the comment */
    content: import("vue-types").VueTypeValidableDef<any>;
    /** Comment prefix defaults to '.ant-comment' */
    prefixCls: StringConstructor;
    /** A datetime element containing the time to be displayed */
    datetime: import("vue-types").VueTypeValidableDef<any>;
};
export declare type CommentProps = Partial<ExtractPropTypes<ReturnType<typeof commentProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<{
            actions: ArrayConstructor;
            /** The element to display as the comment author. */
            author: import("vue-types").VueTypeValidableDef<any>;
            /** The element to display as the comment avatar - generally an antd Avatar */
            avatar: import("vue-types").VueTypeValidableDef<any>;
            /** The main content of the comment */
            content: import("vue-types").VueTypeValidableDef<any>;
            /** Comment prefix defaults to '.ant-comment' */
            prefixCls: StringConstructor;
            /** A datetime element containing the time to be displayed */
            datetime: import("vue-types").VueTypeValidableDef<any>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
            actions: ArrayConstructor;
            /** The element to display as the comment author. */
            author: import("vue-types").VueTypeValidableDef<any>;
            /** The element to display as the comment avatar - generally an antd Avatar */
            avatar: import("vue-types").VueTypeValidableDef<any>;
            /** The main content of the comment */
            content: import("vue-types").VueTypeValidableDef<any>;
            /** Comment prefix defaults to '.ant-comment' */
            prefixCls: StringConstructor;
            /** A datetime element containing the time to be displayed */
            datetime: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & {
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
        actions: ArrayConstructor;
        /** The element to display as the comment author. */
        author: import("vue-types").VueTypeValidableDef<any>;
        /** The element to display as the comment avatar - generally an antd Avatar */
        avatar: import("vue-types").VueTypeValidableDef<any>;
        /** The main content of the comment */
        content: import("vue-types").VueTypeValidableDef<any>;
        /** Comment prefix defaults to '.ant-comment' */
        prefixCls: StringConstructor;
        /** A datetime element containing the time to be displayed */
        datetime: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    actions: ArrayConstructor;
    /** The element to display as the comment author. */
    author: import("vue-types").VueTypeValidableDef<any>;
    /** The element to display as the comment avatar - generally an antd Avatar */
    avatar: import("vue-types").VueTypeValidableDef<any>;
    /** The main content of the comment */
    content: import("vue-types").VueTypeValidableDef<any>;
    /** Comment prefix defaults to '.ant-comment' */
    prefixCls: StringConstructor;
    /** A datetime element containing the time to be displayed */
    datetime: import("vue-types").VueTypeValidableDef<any>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
