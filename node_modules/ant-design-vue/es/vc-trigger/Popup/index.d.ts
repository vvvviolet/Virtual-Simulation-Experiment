declare const _default: import("vue").DefineComponent<{
    mask: BooleanConstructor;
    mobile: {
        type: import("vue").PropType<import("../interface").MobileConfig>;
    };
    maskAnimation: StringConstructor;
    maskTransitionName: StringConstructor;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mask: BooleanConstructor;
    mobile: {
        type: import("vue").PropType<import("../interface").MobileConfig>;
    };
    maskAnimation: StringConstructor;
    maskTransitionName: StringConstructor;
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
}>>, {
    visible: boolean;
    mask: boolean;
    destroyPopupOnHide: boolean;
    forceRender: boolean;
}>;
export default _default;
