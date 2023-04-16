import type { CSSProperties, PropType } from 'vue';
export declare const VcStepProps: () => {
    prefixCls: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    itemWidth: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    status: StringConstructor;
    iconPrefix: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    adjustMarginRight: StringConstructor;
    stepNumber: NumberConstructor;
    stepIndex: NumberConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    progressDot: import("vue-types").VueTypeDef<any>;
    tailContent: import("vue-types").VueTypeValidableDef<any>;
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    onClick: FunctionConstructor;
    onStepClick: FunctionConstructor;
    stepIcon: FunctionConstructor;
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    itemWidth: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    status: StringConstructor;
    iconPrefix: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    adjustMarginRight: StringConstructor;
    stepNumber: NumberConstructor;
    stepIndex: NumberConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    progressDot: import("vue-types").VueTypeDef<any>;
    tailContent: import("vue-types").VueTypeValidableDef<any>;
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    onClick: FunctionConstructor;
    onStepClick: FunctionConstructor;
    stepIcon: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "stepClick")[], "click" | "stepClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    itemWidth: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    status: StringConstructor;
    iconPrefix: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    adjustMarginRight: StringConstructor;
    stepNumber: NumberConstructor;
    stepIndex: NumberConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    progressDot: import("vue-types").VueTypeDef<any>;
    tailContent: import("vue-types").VueTypeValidableDef<any>;
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    onClick: FunctionConstructor;
    onStepClick: FunctionConstructor;
    stepIcon: FunctionConstructor;
}>> & {
    onClick?: (...args: any[]) => any;
    onStepClick?: (...args: any[]) => any;
}, {
    active: boolean;
    disabled: boolean;
    wrapperStyle: CSSProperties;
}>;
export default _default;
