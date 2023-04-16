import type { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    trigger: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    transitionName: StringConstructor;
    animation: import("vue-types").VueTypeValidableDef<any>;
    afterVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    overlayClassName: StringConstructor;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
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
    getPopupContainer: PropType<(triggerNode?: HTMLElement) => HTMLElement>;
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    arrowContent: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    tipId: StringConstructor;
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    overlayInnerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    onVisibleChange: FunctionConstructor;
    onPopupAlign: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    trigger: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    transitionName: StringConstructor;
    animation: import("vue-types").VueTypeValidableDef<any>;
    afterVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    overlayClassName: StringConstructor;
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
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
    getPopupContainer: PropType<(triggerNode?: HTMLElement) => HTMLElement>;
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    arrowContent: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    tipId: StringConstructor;
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    overlayInnerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    onVisibleChange: FunctionConstructor;
    onPopupAlign: FunctionConstructor;
}>>, {
    visible: boolean;
    prefixCls: string;
    align: {
        [key: string]: any;
    };
    trigger: any;
    popupVisible: boolean;
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    overlayInnerStyle: CSSProperties;
    arrowContent: any;
    defaultVisible: boolean;
    placement: string;
    afterVisibleChange: (...args: any[]) => any;
    overlayStyle: CSSProperties;
    destroyTooltipOnHide: boolean;
}>;
export default _default;
