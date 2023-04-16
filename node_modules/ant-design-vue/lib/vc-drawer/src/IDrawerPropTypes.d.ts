import type { CSSProperties, PropType } from 'vue';
export declare type IPlacement = 'left' | 'top' | 'right' | 'bottom';
declare type ILevelMove = number | [number, number];
declare const drawerProps: () => {
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeDef<any>;
    prefixCls: StringConstructor;
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    style: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    class: StringConstructor;
    placement: {
        type: PropType<IPlacement>;
    };
    wrapperClassName: StringConstructor;
    level: {
        type: PropType<string | string[]>;
    };
    levelMove: {
        type: PropType<ILevelMove | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => ILevelMove)>;
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
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    afterVisibleChange: FunctionConstructor;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    contentWrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
};
declare const drawerChildProps: () => {
    getContainer: FunctionConstructor;
    getOpenCount: PropType<() => number>;
    scrollLocker: import("vue-types").VueTypeValidableDef<any>;
    switchScrollingEffect: FunctionConstructor;
    prefixCls: StringConstructor;
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    style: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    class: StringConstructor;
    placement: {
        type: PropType<IPlacement>;
    };
    wrapperClassName: StringConstructor;
    level: {
        type: PropType<string | string[]>;
    };
    levelMove: {
        type: PropType<ILevelMove | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => ILevelMove)>;
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
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    afterVisibleChange: FunctionConstructor;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    contentWrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
};
export { drawerProps, drawerChildProps };
