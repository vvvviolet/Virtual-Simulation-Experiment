declare const _default: import("vue").DefineComponent<{
    mobile: {
        type: import("vue").PropType<import("../interface").MobileConfig>;
    };
    visible: BooleanConstructor;
    prefixCls: StringConstructor;
    zIndex: NumberConstructor;
    destroyPopupOnHide: BooleanConstructor;
    forceRender: BooleanConstructor;
    animation: (ObjectConstructor | StringConstructor)[];
    transitionName: StringConstructor;
    stretch: {
        type: import("vue").PropType<string>;
    };
    align: {
        type: import("vue").PropType<import("../interface").AlignType>;
    };
    point: {
        type: import("vue").PropType<import("../interface").Point>;
    };
    getRootDomNode: {
        type: import("vue").PropType<() => HTMLElement>;
    };
    getClassNameFromAlign: {
        type: import("vue").PropType<(align: import("../interface").AlignType) => string>;
    };
    onMouseenter: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
    onMouseleave: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
    onMousedown: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
    onTouchstart: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mousedown" | "mouseenter" | "mouseleave" | "touchstart" | "align")[], "mousedown" | "mouseenter" | "mouseleave" | "touchstart" | "align", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mobile: {
        type: import("vue").PropType<import("../interface").MobileConfig>;
    };
    visible: BooleanConstructor;
    prefixCls: StringConstructor;
    zIndex: NumberConstructor;
    destroyPopupOnHide: BooleanConstructor;
    forceRender: BooleanConstructor;
    animation: (ObjectConstructor | StringConstructor)[];
    transitionName: StringConstructor;
    stretch: {
        type: import("vue").PropType<string>;
    };
    align: {
        type: import("vue").PropType<import("../interface").AlignType>;
    };
    point: {
        type: import("vue").PropType<import("../interface").Point>;
    };
    getRootDomNode: {
        type: import("vue").PropType<() => HTMLElement>;
    };
    getClassNameFromAlign: {
        type: import("vue").PropType<(align: import("../interface").AlignType) => string>;
    };
    onMouseenter: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
    onMouseleave: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
    onMousedown: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
    onTouchstart: {
        type: import("vue").PropType<(align: MouseEvent) => void>;
    };
}>> & {
    onMousedown?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
    onTouchstart?: (...args: any[]) => any;
    onAlign?: (...args: any[]) => any;
}, {
    visible: boolean;
    destroyPopupOnHide: boolean;
    forceRender: boolean;
}>;
export default _default;
