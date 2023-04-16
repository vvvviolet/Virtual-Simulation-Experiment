import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { nextTick } from 'vue';
import type { KeyboardEventHandler, MouseEventHandler } from '../_util/EventInterface';
declare type ILevelMove = number | [number, number];
declare const PlacementTypes: ["top", "right", "bottom", "left"];
export declare type placementType = typeof PlacementTypes[number];
declare const SizeTypes: ["default", "large"];
export declare type sizeType = typeof SizeTypes[number];
export interface PushState {
    distance: string | number;
}
export declare const drawerProps: () => {
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    maskStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `style` instead */
    wrapStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    style: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    class: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Use `class` instead */
    wrapClassName: StringConstructor;
    size: {
        type: PropType<"default" | "large">;
    };
    drawerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    headerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentWrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    zIndex: NumberConstructor;
    prefixCls: StringConstructor;
    push: import("vue-types").VueTypeDef<boolean | PushState>;
    placement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    footerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    level: import("vue-types").VueTypeValidableDef<any>;
    levelMove: {
        type: PropType<ILevelMove | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => ILevelMove)>;
    };
    handle: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Use `@afterVisibleChange` instead */
    afterVisibleChange: PropType<(visible: boolean) => void>;
    onAfterVisibleChange: PropType<(visible: boolean) => void>;
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
};
export declare type DrawerProps = Partial<ExtractPropTypes<ReturnType<typeof drawerProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: CSSProperties;
            visible: boolean;
            mask: boolean;
            forceRender: boolean;
            maskClosable: boolean;
            autofocus: boolean;
            keyboard: boolean;
            closable: boolean;
            bodyStyle: CSSProperties;
            maskStyle: CSSProperties;
            contentWrapperStyle: CSSProperties;
            destroyOnClose: boolean;
            wrapStyle: CSSProperties;
            drawerStyle: CSSProperties;
            headerStyle: CSSProperties;
            footerStyle: CSSProperties;
        }> & Omit<Readonly<ExtractPropTypes<{
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            destroyOnClose: {
                type: BooleanConstructor;
                default: any;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            getContainer: import("vue-types").VueTypeValidableDef<any>;
            maskClosable: {
                type: BooleanConstructor;
                default: any;
            };
            mask: {
                type: BooleanConstructor;
                default: any;
            };
            maskStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            /** @deprecated Use `style` instead */
            wrapStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            style: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            class: import("vue-types").VueTypeValidableDef<any>;
            /** @deprecated Use `class` instead */
            wrapClassName: StringConstructor;
            size: {
                type: PropType<"default" | "large">;
            };
            drawerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            headerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            bodyStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            contentWrapperStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            width: import("vue-types").VueTypeDef<string | number>;
            height: import("vue-types").VueTypeDef<string | number>;
            zIndex: NumberConstructor;
            prefixCls: StringConstructor;
            push: import("vue-types").VueTypeDef<boolean | PushState>;
            placement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
            keyboard: {
                type: BooleanConstructor;
                default: any;
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            footerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            level: import("vue-types").VueTypeValidableDef<any>;
            levelMove: {
                type: PropType<ILevelMove | ((e: {
                    target: HTMLElement;
                    open: boolean;
                }) => ILevelMove)>;
            };
            handle: import("vue-types").VueTypeValidableDef<any>;
            /** @deprecated Use `@afterVisibleChange` instead */
            afterVisibleChange: PropType<(visible: boolean) => void>;
            onAfterVisibleChange: PropType<(visible: boolean) => void>;
            'onUpdate:visible': PropType<(visible: boolean) => void>;
            onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "style" | "visible" | "mask" | "forceRender" | "maskClosable" | "autofocus" | "keyboard" | "closable" | "bodyStyle" | "maskStyle" | "contentWrapperStyle" | "destroyOnClose" | "wrapStyle" | "drawerStyle" | "headerStyle" | "footerStyle">;
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
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            destroyOnClose: {
                type: BooleanConstructor;
                default: any;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            getContainer: import("vue-types").VueTypeValidableDef<any>;
            maskClosable: {
                type: BooleanConstructor;
                default: any;
            };
            mask: {
                type: BooleanConstructor;
                default: any;
            };
            maskStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            /** @deprecated Use `style` instead */
            wrapStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            style: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            class: import("vue-types").VueTypeValidableDef<any>;
            /** @deprecated Use `class` instead */
            wrapClassName: StringConstructor;
            size: {
                type: PropType<"default" | "large">;
            };
            drawerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            headerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            bodyStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            contentWrapperStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            width: import("vue-types").VueTypeDef<string | number>;
            height: import("vue-types").VueTypeDef<string | number>;
            zIndex: NumberConstructor;
            prefixCls: StringConstructor;
            push: import("vue-types").VueTypeDef<boolean | PushState>;
            placement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
            keyboard: {
                type: BooleanConstructor;
                default: any;
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            footerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            level: import("vue-types").VueTypeValidableDef<any>;
            levelMove: {
                type: PropType<ILevelMove | ((e: {
                    target: HTMLElement;
                    open: boolean;
                }) => ILevelMove)>;
            };
            handle: import("vue-types").VueTypeValidableDef<any>;
            /** @deprecated Use `@afterVisibleChange` instead */
            afterVisibleChange: PropType<(visible: boolean) => void>;
            onAfterVisibleChange: PropType<(visible: boolean) => void>;
            'onUpdate:visible': PropType<(visible: boolean) => void>;
            onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            style: CSSProperties;
            visible: boolean;
            mask: boolean;
            forceRender: boolean;
            maskClosable: boolean;
            autofocus: boolean;
            keyboard: boolean;
            closable: boolean;
            bodyStyle: CSSProperties;
            maskStyle: CSSProperties;
            contentWrapperStyle: CSSProperties;
            destroyOnClose: boolean;
            wrapStyle: CSSProperties;
            drawerStyle: CSSProperties;
            headerStyle: CSSProperties;
            footerStyle: CSSProperties;
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        closable: {
            type: BooleanConstructor;
            default: any;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<any>;
        destroyOnClose: {
            type: BooleanConstructor;
            default: any;
        };
        forceRender: {
            type: BooleanConstructor;
            default: any;
        };
        getContainer: import("vue-types").VueTypeValidableDef<any>;
        maskClosable: {
            type: BooleanConstructor;
            default: any;
        };
        mask: {
            type: BooleanConstructor;
            default: any;
        };
        maskStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        /** @deprecated Use `style` instead */
        wrapStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        style: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        class: import("vue-types").VueTypeValidableDef<any>;
        /** @deprecated Use `class` instead */
        wrapClassName: StringConstructor;
        size: {
            type: PropType<"default" | "large">;
        };
        drawerStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        headerStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        bodyStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        contentWrapperStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        title: import("vue-types").VueTypeValidableDef<any>;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        width: import("vue-types").VueTypeDef<string | number>;
        height: import("vue-types").VueTypeDef<string | number>;
        zIndex: NumberConstructor;
        prefixCls: StringConstructor;
        push: import("vue-types").VueTypeDef<boolean | PushState>;
        placement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
        keyboard: {
            type: BooleanConstructor;
            default: any;
        };
        extra: import("vue-types").VueTypeValidableDef<any>;
        footer: import("vue-types").VueTypeValidableDef<any>;
        footerStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        level: import("vue-types").VueTypeValidableDef<any>;
        levelMove: {
            type: PropType<ILevelMove | ((e: {
                target: HTMLElement;
                open: boolean;
            }) => ILevelMove)>;
        };
        handle: import("vue-types").VueTypeValidableDef<any>;
        /** @deprecated Use `@afterVisibleChange` instead */
        afterVisibleChange: PropType<(visible: boolean) => void>;
        onAfterVisibleChange: PropType<(visible: boolean) => void>;
        'onUpdate:visible': PropType<(visible: boolean) => void>;
        onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    maskStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `style` instead */
    wrapStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    style: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    class: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Use `class` instead */
    wrapClassName: StringConstructor;
    size: {
        type: PropType<"default" | "large">;
    };
    drawerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    headerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentWrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    zIndex: NumberConstructor;
    prefixCls: StringConstructor;
    push: import("vue-types").VueTypeDef<boolean | PushState>;
    placement: import("vue-types").VueTypeDef<"left" | "right" | "bottom" | "top">;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    footerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    level: import("vue-types").VueTypeValidableDef<any>;
    levelMove: {
        type: PropType<ILevelMove | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => ILevelMove)>;
    };
    handle: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Use `@afterVisibleChange` instead */
    afterVisibleChange: PropType<(visible: boolean) => void>;
    onAfterVisibleChange: PropType<(visible: boolean) => void>;
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    style: CSSProperties;
    visible: boolean;
    mask: boolean;
    forceRender: boolean;
    maskClosable: boolean;
    autofocus: boolean;
    keyboard: boolean;
    closable: boolean;
    bodyStyle: CSSProperties;
    maskStyle: CSSProperties;
    contentWrapperStyle: CSSProperties;
    destroyOnClose: boolean;
    wrapStyle: CSSProperties;
    drawerStyle: CSSProperties;
    headerStyle: CSSProperties;
    footerStyle: CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
