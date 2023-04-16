import type { ExtractPropTypes, CSSProperties, PropType } from 'vue';
import type { ButtonProps as ButtonPropsType, LegacyButtonType } from '../button/buttonTypes';
import type { Direction } from '../config-provider';
import type { VueNode } from '../_util/type';
export declare const modalProps: () => {
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
    onOk: PropType<(e: MouseEvent) => void>;
    onCancel: PropType<(e: MouseEvent) => void>;
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    onChange: PropType<(visible: boolean) => void>;
    afterClose: PropType<() => void>;
    centered: {
        type: BooleanConstructor;
        default: any;
    };
    width: (StringConstructor | NumberConstructor)[];
    footer: import("vue-types").VueTypeValidableDef<any>;
    okText: import("vue-types").VueTypeValidableDef<any>;
    okType: PropType<LegacyButtonType>;
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
    okButtonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
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
            type: PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: PropType<(event: MouseEvent) => void>;
        };
    }>>>;
    cancelButtonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
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
            type: PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: PropType<(event: MouseEvent) => void>;
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
        type: PropType<string | false | HTMLElement | getContainerFunc>;
        default: any;
    };
    zIndex: NumberConstructor;
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maskStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
    modalRender: PropType<(arg: {
        originVNode: VueNode;
    }) => VueNode>;
};
export declare type ModalProps = Partial<ExtractPropTypes<ReturnType<typeof modalProps>>>;
export interface ModalFuncProps {
    prefixCls?: string;
    class?: string;
    visible?: boolean;
    title?: string | (() => VueNode) | VueNode;
    closable?: boolean;
    content?: string | (() => VueNode) | VueNode;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    afterClose?: () => void;
    okButtonProps?: ButtonPropsType;
    cancelButtonProps?: ButtonPropsType;
    centered?: boolean;
    width?: string | number;
    okText?: string | (() => VueNode) | VueNode;
    okType?: LegacyButtonType;
    cancelText?: string | (() => VueNode) | VueNode;
    icon?: (() => VueNode) | VueNode;
    wrapClassName?: String;
    iconType?: string;
    mask?: boolean;
    maskClosable?: boolean;
    zIndex?: number;
    okCancel?: boolean;
    style?: CSSProperties | string;
    maskStyle?: CSSProperties;
    type?: 'info' | 'success' | 'error' | 'warn' | 'warning' | 'confirm';
    keyboard?: boolean;
    getContainer?: string | HTMLElement | getContainerFunc | false | null;
    autoFocusButton?: null | 'ok' | 'cancel';
    transitionName?: string;
    maskTransitionName?: string;
    direction?: Direction;
    bodyStyle?: CSSProperties;
    closeIcon?: string | (() => VueNode) | VueNode;
    modalRender?: (arg: {
        originVNode: VueNode;
    }) => VueNode;
    focusTriggerAfterClose?: boolean;
    /** @deprecated please use `appContext` instead */
    parentContext?: any;
    appContext?: any;
}
declare type getContainerFunc = () => HTMLElement;
export declare type ModalFunc = (props: ModalFuncProps) => {
    destroy: () => void;
    update: (newConfig: ModalFuncProps) => void;
};
export interface ModalLocale {
    okText: string;
    cancelText: string;
    justOkText: string;
}
export declare const destroyFns: any[];
declare const _default: import("vue").DefineComponent<{
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
    onOk: PropType<(e: MouseEvent) => void>;
    onCancel: PropType<(e: MouseEvent) => void>;
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    onChange: PropType<(visible: boolean) => void>;
    afterClose: PropType<() => void>;
    centered: {
        type: BooleanConstructor;
        default: any;
    };
    width: (StringConstructor | NumberConstructor)[];
    footer: import("vue-types").VueTypeValidableDef<any>;
    okText: import("vue-types").VueTypeValidableDef<any>;
    okType: PropType<LegacyButtonType>;
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
    okButtonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
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
            type: PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: PropType<(event: MouseEvent) => void>;
        };
    }>>>;
    cancelButtonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
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
            type: PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: PropType<(event: MouseEvent) => void>;
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
        type: PropType<string | false | HTMLElement | getContainerFunc>;
        default: any;
    };
    zIndex: NumberConstructor;
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maskStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
    modalRender: PropType<(arg: {
        originVNode: VueNode;
    }) => VueNode>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    onOk: PropType<(e: MouseEvent) => void>;
    onCancel: PropType<(e: MouseEvent) => void>;
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    onChange: PropType<(visible: boolean) => void>;
    afterClose: PropType<() => void>;
    centered: {
        type: BooleanConstructor;
        default: any;
    };
    width: (StringConstructor | NumberConstructor)[];
    footer: import("vue-types").VueTypeValidableDef<any>;
    okText: import("vue-types").VueTypeValidableDef<any>;
    okType: PropType<LegacyButtonType>;
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
    okButtonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
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
            type: PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: PropType<(event: MouseEvent) => void>;
        };
    }>>>;
    cancelButtonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
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
            type: PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: PropType<(event: MouseEvent) => void>;
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
        type: PropType<string | false | HTMLElement | getContainerFunc>;
        default: any;
    };
    zIndex: NumberConstructor;
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maskStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
    modalRender: PropType<(arg: {
        originVNode: VueNode;
    }) => VueNode>;
}>>, {
    visible: boolean;
    mask: boolean;
    forceRender: boolean;
    getContainer: string | false | HTMLElement | getContainerFunc;
    maskClosable: boolean;
    keyboard: boolean;
    closable: boolean;
    centered: boolean;
    bodyStyle: CSSProperties;
    maskStyle: CSSProperties;
    destroyOnClose: boolean;
    focusTriggerAfterClose: boolean;
    confirmLoading: boolean;
}>;
export default _default;
