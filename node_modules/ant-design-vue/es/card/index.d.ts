import type { Plugin } from 'vue';
import Meta from './Meta';
import Grid from './Grid';
export type { CardProps } from './Card';
export { Meta as CardMeta, Grid as CardGrid };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loading: boolean;
            bordered: boolean;
            bodyStyle: import("vue").CSSProperties;
            headStyle: import("vue").CSSProperties;
            hoverable: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            title: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            headStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            hoverable: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<"inner">;
            };
            size: {
                type: import("vue").PropType<import("./Card").CardSize>;
            };
            actions: import("vue-types").VueTypeValidableDef<any>;
            tabList: {
                type: import("vue").PropType<import("./Card").CardTabListType[]>;
            };
            tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
            activeTabKey: StringConstructor;
            defaultActiveTabKey: StringConstructor;
            cover: import("vue-types").VueTypeValidableDef<any>;
            onTabChange: {
                type: import("vue").PropType<(key: string) => void>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "loading" | "bordered" | "bodyStyle" | "headStyle" | "hoverable">;
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
            title: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            headStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            hoverable: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<"inner">;
            };
            size: {
                type: import("vue").PropType<import("./Card").CardSize>;
            };
            actions: import("vue-types").VueTypeValidableDef<any>;
            tabList: {
                type: import("vue").PropType<import("./Card").CardTabListType[]>;
            };
            tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
            activeTabKey: StringConstructor;
            defaultActiveTabKey: StringConstructor;
            cover: import("vue-types").VueTypeValidableDef<any>;
            onTabChange: {
                type: import("vue").PropType<(key: string) => void>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            loading: boolean;
            bordered: boolean;
            bodyStyle: import("vue").CSSProperties;
            headStyle: import("vue").CSSProperties;
            hoverable: boolean;
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
        title: import("vue-types").VueTypeValidableDef<any>;
        extra: import("vue-types").VueTypeValidableDef<any>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        bodyStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        headStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverable: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<"inner">;
        };
        size: {
            type: import("vue").PropType<import("./Card").CardSize>;
        };
        actions: import("vue-types").VueTypeValidableDef<any>;
        tabList: {
            type: import("vue").PropType<import("./Card").CardTabListType[]>;
        };
        tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
        activeTabKey: StringConstructor;
        defaultActiveTabKey: StringConstructor;
        cover: import("vue-types").VueTypeValidableDef<any>;
        onTabChange: {
            type: import("vue").PropType<(key: string) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    headStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import("vue").PropType<"inner">;
    };
    size: {
        type: import("vue").PropType<import("./Card").CardSize>;
    };
    actions: import("vue-types").VueTypeValidableDef<any>;
    tabList: {
        type: import("vue").PropType<import("./Card").CardTabListType[]>;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    activeTabKey: StringConstructor;
    defaultActiveTabKey: StringConstructor;
    cover: import("vue-types").VueTypeValidableDef<any>;
    onTabChange: {
        type: import("vue").PropType<(key: string) => void>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    loading: boolean;
    bordered: boolean;
    bodyStyle: import("vue").CSSProperties;
    headStyle: import("vue").CSSProperties;
    hoverable: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Meta: typeof Meta;
    readonly Grid: typeof Grid;
};
export default _default;
