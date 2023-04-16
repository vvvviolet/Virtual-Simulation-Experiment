import type { App } from 'vue';
export type { BasicProps as LayoutProps } from './layout';
export type { SiderProps } from './Sider';
export declare const LayoutHeader: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, {
    hasSider: boolean;
}>;
export declare const LayoutFooter: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, {
    hasSider: boolean;
}>;
export declare const LayoutSider: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<"xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    onBreakpoint: import("vue").PropType<(broken: boolean) => void>;
    onCollapse: import("vue").PropType<(collapsed: boolean, type: import("./Sider").CollapseType) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "breakpoint" | "update:collapsed")[], "collapse" | "breakpoint" | "update:collapsed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<"xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    onBreakpoint: import("vue").PropType<(broken: boolean) => void>;
    onCollapse: import("vue").PropType<(collapsed: boolean, type: import("./Sider").CollapseType) => void>;
}>> & {
    onBreakpoint?: (...args: any[]) => any;
    onCollapse?: (...args: any[]) => any;
    "onUpdate:collapsed"?: (...args: any[]) => any;
}, {
    theme: "dark" | "light";
    collapsible: boolean;
    collapsed: boolean;
    defaultCollapsed: boolean;
    reverseArrow: boolean;
    zeroWidthTriggerStyle: import("vue").CSSProperties;
}>;
export declare const LayoutContent: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, {
    hasSider: boolean;
}>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            hasSider: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            hasSider: {
                type: BooleanConstructor;
                default: any;
            };
            tagName: StringConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "hasSider">;
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
            hasSider: {
                type: BooleanConstructor;
                default: any;
            };
            tagName: StringConstructor;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            hasSider: boolean;
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
        hasSider: {
            type: BooleanConstructor;
            default: any;
        };
        tagName: StringConstructor;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    hasSider: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Header: import("vue").DefineComponent<{
        prefixCls: StringConstructor;
        hasSider: {
            type: BooleanConstructor;
            default: any;
        };
        tagName: StringConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        hasSider: {
            type: BooleanConstructor;
            default: any;
        };
        tagName: StringConstructor;
    }>>, {
        hasSider: boolean;
    }>;
    Footer: import("vue").DefineComponent<{
        prefixCls: StringConstructor;
        hasSider: {
            type: BooleanConstructor;
            default: any;
        };
        tagName: StringConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        hasSider: {
            type: BooleanConstructor;
            default: any;
        };
        tagName: StringConstructor;
    }>>, {
        hasSider: boolean;
    }>;
    Content: import("vue").DefineComponent<{
        prefixCls: StringConstructor;
        hasSider: {
            type: BooleanConstructor;
            default: any;
        };
        tagName: StringConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        hasSider: {
            type: BooleanConstructor;
            default: any;
        };
        tagName: StringConstructor;
    }>>, {
        hasSider: boolean;
    }>;
    Sider: import("vue").DefineComponent<{
        prefixCls: StringConstructor;
        collapsible: {
            type: BooleanConstructor;
            default: any;
        };
        collapsed: {
            type: BooleanConstructor;
            default: any;
        };
        defaultCollapsed: {
            type: BooleanConstructor;
            default: any;
        };
        reverseArrow: {
            type: BooleanConstructor;
            default: any;
        };
        zeroWidthTriggerStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        trigger: import("vue-types").VueTypeValidableDef<any>;
        width: import("vue-types").VueTypeDef<string | number>;
        collapsedWidth: import("vue-types").VueTypeDef<string | number>;
        breakpoint: import("vue-types").VueTypeDef<"xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
            default: "dark" | "light";
        };
        onBreakpoint: import("vue").PropType<(broken: boolean) => void>;
        onCollapse: import("vue").PropType<(collapsed: boolean, type: import("./Sider").CollapseType) => void>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "breakpoint" | "update:collapsed")[], "collapse" | "breakpoint" | "update:collapsed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        collapsible: {
            type: BooleanConstructor;
            default: any;
        };
        collapsed: {
            type: BooleanConstructor;
            default: any;
        };
        defaultCollapsed: {
            type: BooleanConstructor;
            default: any;
        };
        reverseArrow: {
            type: BooleanConstructor;
            default: any;
        };
        zeroWidthTriggerStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        trigger: import("vue-types").VueTypeValidableDef<any>;
        width: import("vue-types").VueTypeDef<string | number>;
        collapsedWidth: import("vue-types").VueTypeDef<string | number>;
        breakpoint: import("vue-types").VueTypeDef<"xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
            default: "dark" | "light";
        };
        onBreakpoint: import("vue").PropType<(broken: boolean) => void>;
        onCollapse: import("vue").PropType<(collapsed: boolean, type: import("./Sider").CollapseType) => void>;
    }>> & {
        onBreakpoint?: (...args: any[]) => any;
        onCollapse?: (...args: any[]) => any;
        "onUpdate:collapsed"?: (...args: any[]) => any;
    }, {
        theme: "dark" | "light";
        collapsible: boolean;
        collapsed: boolean;
        defaultCollapsed: boolean;
        reverseArrow: boolean;
        zeroWidthTriggerStyle: import("vue").CSSProperties;
    }>;
    install: (app: App) => App<any>;
};
export default _default;
