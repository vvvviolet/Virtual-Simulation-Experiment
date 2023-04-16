import type { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    minOverlayWidthMatchTrigger: {
        type: BooleanConstructor;
        default: any;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    transitionName: StringConstructor;
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    openClassName: StringConstructor;
    animation: import("vue-types").VueTypeValidableDef<any>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    placement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    alignPoint: {
        type: BooleanConstructor;
        default: any;
    };
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    hideAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    getPopupContainer: FunctionConstructor;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibleChange" | "overlayClick")[], "visibleChange" | "overlayClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    minOverlayWidthMatchTrigger: {
        type: BooleanConstructor;
        default: any;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    transitionName: StringConstructor;
    overlayClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    openClassName: StringConstructor;
    animation: import("vue-types").VueTypeValidableDef<any>;
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    placement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    overlay: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    alignPoint: {
        type: BooleanConstructor;
        default: any;
    };
    showAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    hideAction: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    getPopupContainer: FunctionConstructor;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}>> & {
    onVisibleChange?: (...args: any[]) => any;
    onOverlayClick?: (...args: any[]) => any;
}, {
    visible: boolean;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    trigger: string | string[];
    showAction: unknown[];
    hideAction: unknown[];
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    alignPoint: boolean;
    defaultVisible: boolean;
    placement: string;
    overlayStyle: CSSProperties;
    overlayClassName: string;
    arrow: boolean;
    minOverlayWidthMatchTrigger: boolean;
}>;
export default _default;
