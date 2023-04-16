import type { Plugin } from 'vue';
import { collapseProps } from './Collapse';
import CollapsePanel, { collapsePanelProps } from './CollapsePanel';
export type { CollapseProps } from './Collapse';
export type { CollapsePanelProps } from './CollapsePanel';
export { CollapsePanel, collapseProps, collapsePanelProps };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            openAnimation: {
                [key: string]: any;
            };
            bordered: boolean;
            ghost: boolean;
            destroyInactivePanel: boolean;
            accordion: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            activeKey: {
                type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
            };
            defaultActiveKey: {
                type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
            };
            accordion: {
                type: BooleanConstructor;
                default: any;
            };
            destroyInactivePanel: {
                type: BooleanConstructor;
                default: any;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
            openAnimation: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            expandIconPosition: import("vue-types").VueTypeDef<"left" | "right">;
            collapsible: {
                type: import("vue").PropType<import("./commonProps").CollapsibleType>;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            onChange: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
            'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "openAnimation" | "bordered" | "ghost" | "destroyInactivePanel" | "accordion">;
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
            activeKey: {
                type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
            };
            defaultActiveKey: {
                type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
            };
            accordion: {
                type: BooleanConstructor;
                default: any;
            };
            destroyInactivePanel: {
                type: BooleanConstructor;
                default: any;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
            openAnimation: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            expandIconPosition: import("vue-types").VueTypeDef<"left" | "right">;
            collapsible: {
                type: import("vue").PropType<import("./commonProps").CollapsibleType>;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            onChange: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
            'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            openAnimation: {
                [key: string]: any;
            };
            bordered: boolean;
            ghost: boolean;
            destroyInactivePanel: boolean;
            accordion: boolean;
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
        activeKey: {
            type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
        };
        defaultActiveKey: {
            type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
        };
        accordion: {
            type: BooleanConstructor;
            default: any;
        };
        destroyInactivePanel: {
            type: BooleanConstructor;
            default: any;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
        openAnimation: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        expandIconPosition: import("vue-types").VueTypeDef<"left" | "right">;
        collapsible: {
            type: import("vue").PropType<import("./commonProps").CollapsibleType>;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        onChange: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
        'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    activeKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
    };
    defaultActiveKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
    };
    accordion: {
        type: BooleanConstructor;
        default: any;
    };
    destroyInactivePanel: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    expandIconPosition: import("vue-types").VueTypeDef<"left" | "right">;
    collapsible: {
        type: import("vue").PropType<import("./commonProps").CollapsibleType>;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
    'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    openAnimation: {
        [key: string]: any;
    };
    bordered: boolean;
    ghost: boolean;
    destroyInactivePanel: boolean;
    accordion: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Panel: typeof CollapsePanel;
};
export default _default;
