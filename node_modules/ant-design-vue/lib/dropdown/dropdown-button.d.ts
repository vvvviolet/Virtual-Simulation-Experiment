import type { ExtractPropTypes } from 'vue';
import { dropdownButtonProps } from './props';
export declare type DropdownButtonProps = Partial<ExtractPropTypes<ReturnType<typeof dropdownButtonProps>>>;
declare const _default: import("vue").DefineComponent<{
    type: import("vue").PropType<import("../button").ButtonType>;
    size: import("vue").PropType<"small" | "large">;
    htmlType: {
        type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
        default: string;
    };
    href: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    title: StringConstructor;
    loading: {
        type: import("vue").PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
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
    align: {
        type: import("vue").PropType<import("./props").Align>;
    };
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    type: import("vue").PropType<import("../button").ButtonType>;
    size: import("vue").PropType<"small" | "large">;
    htmlType: {
        type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
        default: string;
    };
    href: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    title: StringConstructor;
    loading: {
        type: import("vue").PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    };
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
    align: {
        type: import("vue").PropType<import("./props").Align>;
    };
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
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
}>>, {
    visible: boolean;
    disabled: boolean;
    destroyPopupOnHide: boolean;
    forceRender: boolean;
    overlayStyle: import("vue").CSSProperties;
    arrow: any;
    loading: boolean | {
        delay?: number;
    };
    minOverlayWidthMatchTrigger: boolean;
    htmlType: import("../button/buttonTypes").ButtonHTMLType;
}>;
export default _default;
