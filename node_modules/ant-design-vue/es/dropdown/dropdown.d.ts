import type { ExtractPropTypes } from 'vue';
import { dropdownProps } from './props';
export declare type DropdownProps = Partial<ExtractPropTypes<ReturnType<typeof dropdownProps>>>;
declare const Dropdown: import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>>, {
    visible: boolean;
    disabled: boolean;
    destroyPopupOnHide: boolean;
    forceRender: boolean;
    overlayStyle: import("vue").CSSProperties;
    arrow: any;
    minOverlayWidthMatchTrigger: boolean;
}>;
export default Dropdown;
