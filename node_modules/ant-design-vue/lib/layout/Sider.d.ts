import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
export declare type CollapseType = 'clickTrigger' | 'responsive';
export declare const siderProps: () => {
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<"xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
};
export declare type SiderProps = Partial<ExtractPropTypes<ReturnType<typeof siderProps>>>;
export interface SiderContextProps {
    sCollapsed?: boolean;
    collapsedWidth?: string | number;
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<"xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "breakpoint" | "update:collapsed")[], "collapse" | "breakpoint" | "update:collapsed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<"xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    theme: import("vue-types").VueTypeDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
}>> & {
    onBreakpoint?: (...args: any[]) => any;
    onCollapse?: (...args: any[]) => any;
    "onUpdate:collapsed"?: (...args: any[]) => any;
}, {
    theme: "dark" | "light";
    collapsible: boolean;
    collapsed: boolean;
    defaultCollapsed: boolean;
    reverseArrow: boolean;
    zeroWidthTriggerStyle: CSSProperties;
}>;
export default _default;
