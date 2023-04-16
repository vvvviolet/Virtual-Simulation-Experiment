export interface scrollLockOptions {
    container: HTMLElement;
}
declare const DrawerChild: import("vue").DefineComponent<{
    getContainer: FunctionConstructor;
    getOpenCount: import("vue").PropType<() => number>;
    scrollLocker: import("vue-types").VueTypeValidableDef<any>;
    switchScrollingEffect: FunctionConstructor;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "handleClick")[], "change" | "close" | "handleClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    getContainer: FunctionConstructor;
    getOpenCount: import("vue").PropType<() => number>;
    scrollLocker: import("vue-types").VueTypeValidableDef<any>;
    switchScrollingEffect: FunctionConstructor;
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
    onChange?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onHandleClick?: (...args: any[]) => any;
}, {
    style: import("vue").CSSProperties;
    open: boolean;
    maskClosable: boolean;
    autofocus: boolean;
    keyboard: boolean;
    showMask: boolean;
    maskStyle: import("vue").CSSProperties;
    contentWrapperStyle: import("vue").CSSProperties;
}>;
export default DrawerChild;
