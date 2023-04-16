import type { ExtractPropTypes, HTMLAttributes, PropType } from 'vue';
import type { LegacyButtonType } from '../button/buttonTypes';
export declare const popconfirmProps: () => {
    prefixCls: StringConstructor;
    content: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    okType: {
        type: PropType<LegacyButtonType>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: import("vue-types").VueTypeValidableDef<any>;
    cancelText: import("vue-types").VueTypeValidableDef<any>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    okButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes;
    };
    cancelButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes;
    };
    showCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    onConfirm: PropType<(e: MouseEvent) => void>;
    onCancel: PropType<(e: MouseEvent) => void>;
    trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: PropType<import("../tooltip").TooltipPlacement>;
    color: StringConstructor;
    transitionName: StringConstructor;
    overlayStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: PropType<boolean | import("../tooltip").AdjustOverflow>;
        default: boolean | import("../tooltip").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: PropType<(vis: boolean) => void>;
    'onUpdate:visible': PropType<(vis: boolean) => void>;
};
export declare type PopconfirmProps = Partial<ExtractPropTypes<ReturnType<typeof popconfirmProps>>>;
export interface PopconfirmLocale {
    okText: string;
    cancelText: string;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            visible: boolean;
            disabled: boolean;
            align: import("../vc-trigger/interface").AlignType;
            builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
            defaultVisible: boolean;
            overlayStyle: import("vue").CSSProperties;
            destroyTooltipOnHide: boolean;
            autoAdjustOverflow: boolean | import("../tooltip").AdjustOverflow;
            arrowPointAtCenter: boolean;
            okType: LegacyButtonType;
            okButtonProps: Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes;
            cancelButtonProps: Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes;
            showCancel: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            content: import("vue-types").VueTypeValidableDef<any>;
            title: import("vue-types").VueTypeValidableDef<any>;
            okType: {
                type: PropType<LegacyButtonType>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: import("vue-types").VueTypeValidableDef<any>;
            cancelText: import("vue-types").VueTypeValidableDef<any>;
            icon: import("vue-types").VueTypeValidableDef<any>;
            okButtonProps: {
                type: PropType<Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes;
            };
            cancelButtonProps: {
                type: PropType<Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes;
            };
            showCancel: {
                type: BooleanConstructor;
                default: boolean;
            };
            onConfirm: PropType<(e: MouseEvent) => void>;
            onCancel: PropType<(e: MouseEvent) => void>;
            trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("../tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("../tooltip").AdjustOverflow>;
                default: boolean | import("../tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("../vc-trigger/interface").AlignType>;
                default: import("../vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
                default: import("../vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
        }>> & {
            onVisibleChange?: (...args: any[]) => any;
            "onUpdate:visible"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "visible" | "disabled" | "align" | "builtinPlacements" | "defaultVisible" | "overlayStyle" | "destroyTooltipOnHide" | "autoAdjustOverflow" | "arrowPointAtCenter" | "okType" | "okButtonProps" | "cancelButtonProps" | "showCancel">;
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
        $emit: (event: "update:visible" | "visibleChange", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            content: import("vue-types").VueTypeValidableDef<any>;
            title: import("vue-types").VueTypeValidableDef<any>;
            okType: {
                type: PropType<LegacyButtonType>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: import("vue-types").VueTypeValidableDef<any>;
            cancelText: import("vue-types").VueTypeValidableDef<any>;
            icon: import("vue-types").VueTypeValidableDef<any>;
            okButtonProps: {
                type: PropType<Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes;
            };
            cancelButtonProps: {
                type: PropType<Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes;
            };
            showCancel: {
                type: BooleanConstructor;
                default: boolean;
            };
            onConfirm: PropType<(e: MouseEvent) => void>;
            onCancel: PropType<(e: MouseEvent) => void>;
            trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("../tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("../tooltip").AdjustOverflow>;
                default: boolean | import("../tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("../vc-trigger/interface").AlignType>;
                default: import("../vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
                default: import("../vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
        }>> & {
            onVisibleChange?: (...args: any[]) => any;
            "onUpdate:visible"?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "visibleChange")[], string, {
            visible: boolean;
            disabled: boolean;
            align: import("../vc-trigger/interface").AlignType;
            builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
            defaultVisible: boolean;
            overlayStyle: import("vue").CSSProperties;
            destroyTooltipOnHide: boolean;
            autoAdjustOverflow: boolean | import("../tooltip").AdjustOverflow;
            arrowPointAtCenter: boolean;
            okType: LegacyButtonType;
            okButtonProps: Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes;
            cancelButtonProps: Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes;
            showCancel: boolean;
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
        prefixCls: StringConstructor;
        content: import("vue-types").VueTypeValidableDef<any>;
        title: import("vue-types").VueTypeValidableDef<any>;
        okType: {
            type: PropType<LegacyButtonType>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        okText: import("vue-types").VueTypeValidableDef<any>;
        cancelText: import("vue-types").VueTypeValidableDef<any>;
        icon: import("vue-types").VueTypeValidableDef<any>;
        okButtonProps: {
            type: PropType<Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes>;
            default: Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes;
        };
        cancelButtonProps: {
            type: PropType<Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes>;
            default: Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes;
        };
        showCancel: {
            type: BooleanConstructor;
            default: boolean;
        };
        onConfirm: PropType<(e: MouseEvent) => void>;
        onCancel: PropType<(e: MouseEvent) => void>;
        trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        defaultVisible: {
            type: BooleanConstructor;
            default: any;
        };
        placement: PropType<import("../tooltip").TooltipPlacement>;
        color: StringConstructor;
        transitionName: StringConstructor;
        overlayStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        overlayClassName: StringConstructor;
        openClassName: StringConstructor;
        mouseEnterDelay: NumberConstructor;
        mouseLeaveDelay: NumberConstructor;
        getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
        arrowPointAtCenter: {
            type: BooleanConstructor;
            default: any;
        };
        autoAdjustOverflow: {
            type: PropType<boolean | import("../tooltip").AdjustOverflow>;
            default: boolean | import("../tooltip").AdjustOverflow;
        };
        destroyTooltipOnHide: {
            type: BooleanConstructor;
            default: any;
        };
        align: {
            type: PropType<import("../vc-trigger/interface").AlignType>;
            default: import("../vc-trigger/interface").AlignType;
        };
        builtinPlacements: {
            type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
            default: import("../vc-trigger/interface").BuildInPlacements;
        };
        children: ArrayConstructor;
        onVisibleChange: PropType<(vis: boolean) => void>;
        'onUpdate:visible': PropType<(vis: boolean) => void>;
    }>> & {
        onVisibleChange?: (...args: any[]) => any;
        "onUpdate:visible"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    content: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    okType: {
        type: PropType<LegacyButtonType>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: import("vue-types").VueTypeValidableDef<any>;
    cancelText: import("vue-types").VueTypeValidableDef<any>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    okButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes;
    };
    cancelButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes;
    };
    showCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    onConfirm: PropType<(e: MouseEvent) => void>;
    onCancel: PropType<(e: MouseEvent) => void>;
    trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: PropType<import("../tooltip").TooltipPlacement>;
    color: StringConstructor;
    transitionName: StringConstructor;
    overlayStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: PropType<boolean | import("../tooltip").AdjustOverflow>;
        default: boolean | import("../tooltip").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: PropType<(vis: boolean) => void>;
    'onUpdate:visible': PropType<(vis: boolean) => void>;
}>> & {
    onVisibleChange?: (...args: any[]) => any;
    "onUpdate:visible"?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "visibleChange")[], "update:visible" | "visibleChange", {
    visible: boolean;
    disabled: boolean;
    align: import("../vc-trigger/interface").AlignType;
    builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
    defaultVisible: boolean;
    overlayStyle: import("vue").CSSProperties;
    destroyTooltipOnHide: boolean;
    autoAdjustOverflow: boolean | import("../tooltip").AdjustOverflow;
    arrowPointAtCenter: boolean;
    okType: LegacyButtonType;
    okButtonProps: Partial<ExtractPropTypes<{
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
    }>> & HTMLAttributes;
    cancelButtonProps: Partial<ExtractPropTypes<{
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
    }>> & HTMLAttributes;
    showCancel: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
