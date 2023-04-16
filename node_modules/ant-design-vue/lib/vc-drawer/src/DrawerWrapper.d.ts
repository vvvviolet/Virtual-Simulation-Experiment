declare const DrawerWrapper: import("vue").DefineComponent<{
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeDef<any>;
    prefixCls: StringConstructor;
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    class: StringConstructor;
    placement: {
        type: import("vue").PropType<import("./IDrawerPropTypes").IPlacement>;
    };
    wrapperClassName: StringConstructor;
    level: {
        type: import("vue").PropType<string | string[]>;
    };
    levelMove: {
        type: import("vue").PropType<(number | [number, number]) | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => number | [number, number])>;
    };
    duration: StringConstructor;
    ease: StringConstructor;
    showMask: {
        type: BooleanConstructor;
        default: any;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    maskStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    afterVisibleChange: FunctionConstructor;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    contentWrapperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "handleClick")[], "close" | "handleClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeDef<any>;
    prefixCls: StringConstructor;
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    class: StringConstructor;
    placement: {
        type: import("vue").PropType<import("./IDrawerPropTypes").IPlacement>;
    };
    wrapperClassName: StringConstructor;
    level: {
        type: import("vue").PropType<string | string[]>;
    };
    levelMove: {
        type: import("vue").PropType<(number | [number, number]) | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => number | [number, number])>;
    };
    duration: StringConstructor;
    ease: StringConstructor;
    showMask: {
        type: BooleanConstructor;
        default: any;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    maskStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    afterVisibleChange: FunctionConstructor;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    contentWrapperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
}>> & {
    onClose?: (...args: any[]) => any;
    onHandleClick?: (...args: any[]) => any;
}, {
    style: import("vue").CSSProperties;
    open: boolean;
    forceRender: boolean;
    maskClosable: boolean;
    autofocus: boolean;
    keyboard: boolean;
    showMask: boolean;
    maskStyle: import("vue").CSSProperties;
    contentWrapperStyle: import("vue").CSSProperties;
}>;
export default DrawerWrapper;
