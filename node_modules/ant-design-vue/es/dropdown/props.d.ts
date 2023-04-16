import type { CSSProperties, PropType } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
export declare type Align = {
    points?: [string, string];
    offset?: [number, number];
    targetOffset?: [number, number];
    overflow?: {
        adjustX?: boolean;
        adjustY?: boolean;
    };
    useCssRight?: boolean;
    useCssBottom?: boolean;
    useCssTransform?: boolean;
};
export declare type Trigger = 'click' | 'hover' | 'contextmenu';
export declare type DropdownArrowOptions = {
    pointAtCenter?: boolean;
};
declare const dropdownProps: () => {
    arrow: {
        type: PropType<boolean | DropdownArrowOptions>;
        default: any;
    };
    trigger: {
        type: PropType<Trigger | Trigger[]>;
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
        type: PropType<Align>;
    };
    getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    prefixCls: StringConstructor;
    transitionName: StringConstructor;
    placement: PropType<"bottom" | "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "topCenter" | "bottomCenter">;
    overlayClassName: StringConstructor;
    overlayStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
        type: PropType<(val: boolean) => void>;
    };
    'onUpdate:visible': {
        type: PropType<(val: boolean) => void>;
    };
};
declare const dropdownButtonProps: () => {
    type: PropType<import("../button/buttonTypes").ButtonType>;
    size: PropType<"small" | "large">;
    htmlType: {
        type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
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
        type: PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    onClick: {
        type: PropType<MouseEventHandler>;
    };
    arrow: {
        type: PropType<boolean | DropdownArrowOptions>;
        default: any;
    };
    trigger: {
        type: PropType<Trigger | Trigger[]>;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: PropType<Align>;
    };
    getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    transitionName: StringConstructor;
    placement: PropType<"bottom" | "top" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "topCenter" | "bottomCenter">;
    overlayClassName: StringConstructor;
    overlayStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
        type: PropType<(val: boolean) => void>;
    };
    'onUpdate:visible': {
        type: PropType<(val: boolean) => void>;
    };
};
export { dropdownProps, dropdownButtonProps };
export default dropdownProps;
