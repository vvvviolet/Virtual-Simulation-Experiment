import type { Plugin } from 'vue';
import type { ModalFunc } from './Modal';
export type { ActionButtonProps } from '../_util/ActionButton';
export type { ModalProps, ModalFuncProps } from './Modal';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            visible: boolean;
            mask: boolean;
            forceRender: boolean;
            getContainer: string | false | HTMLElement | (() => HTMLElement);
            maskClosable: boolean;
            keyboard: boolean;
            closable: boolean;
            centered: boolean;
            bodyStyle: import("vue").CSSProperties;
            maskStyle: import("vue").CSSProperties;
            destroyOnClose: boolean;
            focusTriggerAfterClose: boolean;
            confirmLoading: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            confirmLoading: {
                type: BooleanConstructor;
                default: any;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            onOk: import("vue").PropType<(e: MouseEvent) => void>;
            onCancel: import("vue").PropType<(e: MouseEvent) => void>;
            'onUpdate:visible': import("vue").PropType<(visible: boolean) => void>;
            onChange: import("vue").PropType<(visible: boolean) => void>;
            afterClose: import("vue").PropType<() => void>;
            centered: {
                type: BooleanConstructor;
                default: any;
            };
            width: (StringConstructor | NumberConstructor)[];
            footer: import("vue-types").VueTypeValidableDef<any>;
            okText: import("vue-types").VueTypeValidableDef<any>;
            okType: import("vue").PropType<import("../button/buttonTypes").LegacyButtonType>;
            cancelText: import("vue-types").VueTypeValidableDef<any>;
            icon: import("vue-types").VueTypeValidableDef<any>;
            maskClosable: {
                type: BooleanConstructor;
                default: any;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            okButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../button").ButtonSize>;
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
            }>>>;
            cancelButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../button").ButtonSize>;
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
            }>>>;
            destroyOnClose: {
                type: BooleanConstructor;
                default: any;
            };
            wrapClassName: StringConstructor;
            maskTransitionName: StringConstructor;
            transitionName: StringConstructor;
            getContainer: {
                type: import("vue").PropType<string | false | HTMLElement | (() => HTMLElement)>;
                default: any;
            };
            zIndex: NumberConstructor;
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            mask: {
                type: BooleanConstructor;
                default: any;
            };
            keyboard: {
                type: BooleanConstructor;
                default: any;
            };
            wrapProps: ObjectConstructor;
            focusTriggerAfterClose: {
                type: BooleanConstructor;
                default: any;
            };
            modalRender: import("vue").PropType<(arg: {
                originVNode: import("../_util/type").VueNode;
            }) => import("../_util/type").VueNode>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "visible" | "mask" | "forceRender" | "getContainer" | "maskClosable" | "keyboard" | "closable" | "centered" | "bodyStyle" | "maskStyle" | "destroyOnClose" | "focusTriggerAfterClose" | "confirmLoading">;
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
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            confirmLoading: {
                type: BooleanConstructor;
                default: any;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            onOk: import("vue").PropType<(e: MouseEvent) => void>;
            onCancel: import("vue").PropType<(e: MouseEvent) => void>;
            'onUpdate:visible': import("vue").PropType<(visible: boolean) => void>;
            onChange: import("vue").PropType<(visible: boolean) => void>;
            afterClose: import("vue").PropType<() => void>;
            centered: {
                type: BooleanConstructor;
                default: any;
            };
            width: (StringConstructor | NumberConstructor)[];
            footer: import("vue-types").VueTypeValidableDef<any>;
            okText: import("vue-types").VueTypeValidableDef<any>;
            okType: import("vue").PropType<import("../button/buttonTypes").LegacyButtonType>;
            cancelText: import("vue-types").VueTypeValidableDef<any>;
            icon: import("vue-types").VueTypeValidableDef<any>;
            maskClosable: {
                type: BooleanConstructor;
                default: any;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            okButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../button").ButtonSize>;
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
            }>>>;
            cancelButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../button").ButtonSize>;
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
            }>>>;
            destroyOnClose: {
                type: BooleanConstructor;
                default: any;
            };
            wrapClassName: StringConstructor;
            maskTransitionName: StringConstructor;
            transitionName: StringConstructor;
            getContainer: {
                type: import("vue").PropType<string | false | HTMLElement | (() => HTMLElement)>;
                default: any;
            };
            zIndex: NumberConstructor;
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            mask: {
                type: BooleanConstructor;
                default: any;
            };
            keyboard: {
                type: BooleanConstructor;
                default: any;
            };
            wrapProps: ObjectConstructor;
            focusTriggerAfterClose: {
                type: BooleanConstructor;
                default: any;
            };
            modalRender: import("vue").PropType<(arg: {
                originVNode: import("../_util/type").VueNode;
            }) => import("../_util/type").VueNode>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            visible: boolean;
            mask: boolean;
            forceRender: boolean;
            getContainer: string | false | HTMLElement | (() => HTMLElement);
            maskClosable: boolean;
            keyboard: boolean;
            closable: boolean;
            centered: boolean;
            bodyStyle: import("vue").CSSProperties;
            maskStyle: import("vue").CSSProperties;
            destroyOnClose: boolean;
            focusTriggerAfterClose: boolean;
            confirmLoading: boolean;
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
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        confirmLoading: {
            type: BooleanConstructor;
            default: any;
        };
        title: import("vue-types").VueTypeValidableDef<any>;
        closable: {
            type: BooleanConstructor;
            default: any;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<any>;
        onOk: import("vue").PropType<(e: MouseEvent) => void>;
        onCancel: import("vue").PropType<(e: MouseEvent) => void>;
        'onUpdate:visible': import("vue").PropType<(visible: boolean) => void>;
        onChange: import("vue").PropType<(visible: boolean) => void>;
        afterClose: import("vue").PropType<() => void>;
        centered: {
            type: BooleanConstructor;
            default: any;
        };
        width: (StringConstructor | NumberConstructor)[];
        footer: import("vue-types").VueTypeValidableDef<any>;
        okText: import("vue-types").VueTypeValidableDef<any>;
        okType: import("vue").PropType<import("../button/buttonTypes").LegacyButtonType>;
        cancelText: import("vue-types").VueTypeValidableDef<any>;
        icon: import("vue-types").VueTypeValidableDef<any>;
        maskClosable: {
            type: BooleanConstructor;
            default: any;
        };
        forceRender: {
            type: BooleanConstructor;
            default: any;
        };
        okButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<import("../button").ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
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
        }>>>;
        cancelButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<import("../button").ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
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
        }>>>;
        destroyOnClose: {
            type: BooleanConstructor;
            default: any;
        };
        wrapClassName: StringConstructor;
        maskTransitionName: StringConstructor;
        transitionName: StringConstructor;
        getContainer: {
            type: import("vue").PropType<string | false | HTMLElement | (() => HTMLElement)>;
            default: any;
        };
        zIndex: NumberConstructor;
        bodyStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        maskStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        mask: {
            type: BooleanConstructor;
            default: any;
        };
        keyboard: {
            type: BooleanConstructor;
            default: any;
        };
        wrapProps: ObjectConstructor;
        focusTriggerAfterClose: {
            type: BooleanConstructor;
            default: any;
        };
        modalRender: import("vue").PropType<(arg: {
            originVNode: import("../_util/type").VueNode;
        }) => import("../_util/type").VueNode>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    confirmLoading: {
        type: BooleanConstructor;
        default: any;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    onOk: import("vue").PropType<(e: MouseEvent) => void>;
    onCancel: import("vue").PropType<(e: MouseEvent) => void>;
    'onUpdate:visible': import("vue").PropType<(visible: boolean) => void>;
    onChange: import("vue").PropType<(visible: boolean) => void>;
    afterClose: import("vue").PropType<() => void>;
    centered: {
        type: BooleanConstructor;
        default: any;
    };
    width: (StringConstructor | NumberConstructor)[];
    footer: import("vue-types").VueTypeValidableDef<any>;
    okText: import("vue-types").VueTypeValidableDef<any>;
    okType: import("vue").PropType<import("../button/buttonTypes").LegacyButtonType>;
    cancelText: import("vue-types").VueTypeValidableDef<any>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    okButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: import("vue").PropType<import("../button").ButtonType>;
        htmlType: {
            type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("../button").ButtonShape>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
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
    }>>>;
    cancelButtonProps: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: import("vue").PropType<import("../button").ButtonType>;
        htmlType: {
            type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("../button").ButtonShape>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
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
    }>>>;
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    wrapClassName: StringConstructor;
    maskTransitionName: StringConstructor;
    transitionName: StringConstructor;
    getContainer: {
        type: import("vue").PropType<string | false | HTMLElement | (() => HTMLElement)>;
        default: any;
    };
    zIndex: NumberConstructor;
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    maskStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    wrapProps: ObjectConstructor;
    focusTriggerAfterClose: {
        type: BooleanConstructor;
        default: any;
    };
    modalRender: import("vue").PropType<(arg: {
        originVNode: import("../_util/type").VueNode;
    }) => import("../_util/type").VueNode>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    visible: boolean;
    mask: boolean;
    forceRender: boolean;
    getContainer: string | false | HTMLElement | (() => HTMLElement);
    maskClosable: boolean;
    keyboard: boolean;
    closable: boolean;
    centered: boolean;
    bodyStyle: import("vue").CSSProperties;
    maskStyle: import("vue").CSSProperties;
    destroyOnClose: boolean;
    focusTriggerAfterClose: boolean;
    confirmLoading: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly info: ModalFunc;
    readonly success: ModalFunc;
    readonly error: ModalFunc;
    readonly warn: ModalFunc;
    readonly warning: ModalFunc;
    readonly confirm: ModalFunc;
    readonly destroyAll: () => void;
};
export default _default;
