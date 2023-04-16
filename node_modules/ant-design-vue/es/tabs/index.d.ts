import type { Plugin } from 'vue';
import { TabPane } from './src';
export type { TabsProps, TabPaneProps } from './src';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            locale: import("./src/interface").TabsLocale;
            destroyInactiveTabPane: boolean;
            hideAdd: boolean;
            centered: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
            };
            id: {
                type: StringConstructor;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            defaultActiveKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            animated: {
                type: import("vue").PropType<boolean | import("./src/interface").AnimatedConfig>;
            };
            renderTabBar: {
                type: import("vue").PropType<import("./src/interface").RenderTabBar>;
            };
            tabBarGutter: {
                type: NumberConstructor;
            };
            tabBarStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            tabPosition: {
                type: import("vue").PropType<import("./src/interface").TabPosition>;
            };
            destroyInactiveTabPane: {
                type: BooleanConstructor;
            };
            hideAdd: BooleanConstructor;
            type: {
                type: import("vue").PropType<import("./src/Tabs").TabsType>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            centered: BooleanConstructor;
            onEdit: {
                type: import("vue").PropType<(e: import("../_util/type").Key | KeyboardEvent | MouseEvent, action: "add" | "remove") => void>;
            };
            onChange: {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
            };
            onTabClick: {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key, e: KeyboardEvent | MouseEvent) => void>;
            };
            onTabScroll: {
                type: import("vue").PropType<import("./src/interface").OnTabScroll>;
            };
            'onUpdate:activeKey': {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
            };
            locale: {
                type: import("vue").PropType<import("./src/interface").TabsLocale>;
                default: import("./src/interface").TabsLocale;
            };
            onPrevClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            onNextClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "locale" | "destroyInactiveTabPane" | "hideAdd" | "centered">;
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
            prefixCls: {
                type: StringConstructor;
            };
            id: {
                type: StringConstructor;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            defaultActiveKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            animated: {
                type: import("vue").PropType<boolean | import("./src/interface").AnimatedConfig>;
            };
            renderTabBar: {
                type: import("vue").PropType<import("./src/interface").RenderTabBar>;
            };
            tabBarGutter: {
                type: NumberConstructor;
            };
            tabBarStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            tabPosition: {
                type: import("vue").PropType<import("./src/interface").TabPosition>;
            };
            destroyInactiveTabPane: {
                type: BooleanConstructor;
            };
            hideAdd: BooleanConstructor;
            type: {
                type: import("vue").PropType<import("./src/Tabs").TabsType>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            centered: BooleanConstructor;
            onEdit: {
                type: import("vue").PropType<(e: import("../_util/type").Key | KeyboardEvent | MouseEvent, action: "add" | "remove") => void>;
            };
            onChange: {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
            };
            onTabClick: {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key, e: KeyboardEvent | MouseEvent) => void>;
            };
            onTabScroll: {
                type: import("vue").PropType<import("./src/interface").OnTabScroll>;
            };
            'onUpdate:activeKey': {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
            };
            locale: {
                type: import("vue").PropType<import("./src/interface").TabsLocale>;
                default: import("./src/interface").TabsLocale;
            };
            onPrevClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            onNextClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            locale: import("./src/interface").TabsLocale;
            destroyInactiveTabPane: boolean;
            hideAdd: boolean;
            centered: boolean;
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
        prefixCls: {
            type: StringConstructor;
        };
        id: {
            type: StringConstructor;
        };
        activeKey: {
            type: (StringConstructor | NumberConstructor)[];
        };
        defaultActiveKey: {
            type: (StringConstructor | NumberConstructor)[];
        };
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        animated: {
            type: import("vue").PropType<boolean | import("./src/interface").AnimatedConfig>;
        };
        renderTabBar: {
            type: import("vue").PropType<import("./src/interface").RenderTabBar>;
        };
        tabBarGutter: {
            type: NumberConstructor;
        };
        tabBarStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        tabPosition: {
            type: import("vue").PropType<import("./src/interface").TabPosition>;
        };
        destroyInactiveTabPane: {
            type: BooleanConstructor;
        };
        hideAdd: BooleanConstructor;
        type: {
            type: import("vue").PropType<import("./src/Tabs").TabsType>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        centered: BooleanConstructor;
        onEdit: {
            type: import("vue").PropType<(e: import("../_util/type").Key | KeyboardEvent | MouseEvent, action: "add" | "remove") => void>;
        };
        onChange: {
            type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
        };
        onTabClick: {
            type: import("vue").PropType<(activeKey: import("../_util/type").Key, e: KeyboardEvent | MouseEvent) => void>;
        };
        onTabScroll: {
            type: import("vue").PropType<import("./src/interface").OnTabScroll>;
        };
        'onUpdate:activeKey': {
            type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
        };
        locale: {
            type: import("vue").PropType<import("./src/interface").TabsLocale>;
            default: import("./src/interface").TabsLocale;
        };
        onPrevClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        onNextClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    defaultActiveKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    animated: {
        type: import("vue").PropType<boolean | import("./src/interface").AnimatedConfig>;
    };
    renderTabBar: {
        type: import("vue").PropType<import("./src/interface").RenderTabBar>;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    tabBarStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    tabPosition: {
        type: import("vue").PropType<import("./src/interface").TabPosition>;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
    hideAdd: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./src/Tabs").TabsType>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    centered: BooleanConstructor;
    onEdit: {
        type: import("vue").PropType<(e: import("../_util/type").Key | KeyboardEvent | MouseEvent, action: "add" | "remove") => void>;
    };
    onChange: {
        type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
    };
    onTabClick: {
        type: import("vue").PropType<(activeKey: import("../_util/type").Key, e: KeyboardEvent | MouseEvent) => void>;
    };
    onTabScroll: {
        type: import("vue").PropType<import("./src/interface").OnTabScroll>;
    };
    'onUpdate:activeKey': {
        type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
    };
    locale: {
        type: import("vue").PropType<import("./src/interface").TabsLocale>;
        default: import("./src/interface").TabsLocale;
    };
    onPrevClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    onNextClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    locale: import("./src/interface").TabsLocale;
    destroyInactiveTabPane: boolean;
    hideAdd: boolean;
    centered: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly TabPane: typeof TabPane;
};
export default _default;
export { TabPane };
