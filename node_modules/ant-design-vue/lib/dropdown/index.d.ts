import type { Plugin } from 'vue';
import DropdownButton from './dropdown-button';
import { dropdownProps, dropdownButtonProps } from './props';
export type { DropdownProps } from './dropdown';
export type { DropdownButtonProps } from './dropdown-button';
export { DropdownButton, dropdownProps, dropdownButtonProps };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            visible: boolean;
            disabled: boolean;
            destroyPopupOnHide: boolean;
            forceRender: boolean;
            overlayStyle: import("vue").CSSProperties;
            arrow: any;
            minOverlayWidthMatchTrigger: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            arrow: {
                type: import("vue").PropType<boolean | import("./props").DropdownArrowOptions>;
                default: any;
            };
            trigger: {
                type: import("vue").PropType<import("./props").Trigger | import("./props").Trigger[]>;
            };
            overlay: import("vue-types").VueTypeValidableDef<any>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: import("vue").PropType<import("./props").Align>;
            };
            getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            prefixCls: StringConstructor;
            transitionName: StringConstructor;
            placement: import("vue").PropType<"bottom" | "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "topCenter" | "bottomCenter">;
            overlayClassName: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            openClassName: StringConstructor;
            minOverlayWidthMatchTrigger: {
                type: BooleanConstructor;
                default: any;
            };
            destroyPopupOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            onVisibleChange: {
                type: import("vue").PropType<(val: boolean) => void>;
            };
            'onUpdate:visible': {
                type: import("vue").PropType<(val: boolean) => void>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "visible" | "disabled" | "destroyPopupOnHide" | "forceRender" | "overlayStyle" | "arrow" | "minOverlayWidthMatchTrigger">;
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
            arrow: {
                type: import("vue").PropType<boolean | import("./props").DropdownArrowOptions>;
                default: any;
            };
            trigger: {
                type: import("vue").PropType<import("./props").Trigger | import("./props").Trigger[]>;
            };
            overlay: import("vue-types").VueTypeValidableDef<any>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: import("vue").PropType<import("./props").Align>;
            };
            getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            prefixCls: StringConstructor;
            transitionName: StringConstructor;
            placement: import("vue").PropType<"bottom" | "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "topCenter" | "bottomCenter">;
            overlayClassName: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            openClassName: StringConstructor;
            minOverlayWidthMatchTrigger: {
                type: BooleanConstructor;
                default: any;
            };
            destroyPopupOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            onVisibleChange: {
                type: import("vue").PropType<(val: boolean) => void>;
            };
            'onUpdate:visible': {
                type: import("vue").PropType<(val: boolean) => void>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            visible: boolean;
            disabled: boolean;
            destroyPopupOnHide: boolean;
            forceRender: boolean;
            overlayStyle: import("vue").CSSProperties;
            arrow: any;
            minOverlayWidthMatchTrigger: boolean;
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
        arrow: {
            type: import("vue").PropType<boolean | import("./props").DropdownArrowOptions>;
            default: any;
        };
        trigger: {
            type: import("vue").PropType<import("./props").Trigger | import("./props").Trigger[]>;
        };
        overlay: import("vue-types").VueTypeValidableDef<any>;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        align: {
            type: import("vue").PropType<import("./props").Align>;
        };
        getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
        prefixCls: StringConstructor;
        transitionName: StringConstructor;
        placement: import("vue").PropType<"bottom" | "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "topCenter" | "bottomCenter">;
        overlayClassName: StringConstructor;
        overlayStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        forceRender: {
            type: BooleanConstructor;
            default: any;
        };
        mouseEnterDelay: NumberConstructor;
        mouseLeaveDelay: NumberConstructor;
        openClassName: StringConstructor;
        minOverlayWidthMatchTrigger: {
            type: BooleanConstructor;
            default: any;
        };
        destroyPopupOnHide: {
            type: BooleanConstructor;
            default: any;
        };
        onVisibleChange: {
            type: import("vue").PropType<(val: boolean) => void>;
        };
        'onUpdate:visible': {
            type: import("vue").PropType<(val: boolean) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    arrow: {
        type: import("vue").PropType<boolean | import("./props").DropdownArrowOptions>;
        default: any;
    };
    trigger: {
        type: import("vue").PropType<import("./props").Trigger | import("./props").Trigger[]>;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("./props").Align>;
    };
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    prefixCls: StringConstructor;
    transitionName: StringConstructor;
    placement: import("vue").PropType<"bottom" | "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "topCenter" | "bottomCenter">;
    overlayClassName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    openClassName: StringConstructor;
    minOverlayWidthMatchTrigger: {
        type: BooleanConstructor;
        default: any;
    };
    destroyPopupOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    onVisibleChange: {
        type: import("vue").PropType<(val: boolean) => void>;
    };
    'onUpdate:visible': {
        type: import("vue").PropType<(val: boolean) => void>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    visible: boolean;
    disabled: boolean;
    destroyPopupOnHide: boolean;
    forceRender: boolean;
    overlayStyle: import("vue").CSSProperties;
    arrow: any;
    minOverlayWidthMatchTrigger: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Button: typeof DropdownButton;
};
export default _default;
