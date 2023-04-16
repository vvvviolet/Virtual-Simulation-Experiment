import type { VueNode } from '../_util/type';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: import("vue").PropType<(percent?: number, successPercent?: number) => VueNode>;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: {
        type: BooleanConstructor;
        default: any;
    };
    strokeWidth: NumberConstructor;
    strokeLinecap: import("vue").PropType<"round" | "butt" | "square">;
    strokeColor: {
        type: import("vue").PropType<string | import("./props").ProgressGradient>;
        default: string | import("./props").ProgressGradient;
    };
    trailColor: StringConstructor;
    width: NumberConstructor;
    success: {
        type: import("vue").PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: import("vue").PropType<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
    steps: NumberConstructor;
    successPercent: NumberConstructor;
    title: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: import("vue").PropType<(percent?: number, successPercent?: number) => VueNode>;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: {
        type: BooleanConstructor;
        default: any;
    };
    strokeWidth: NumberConstructor;
    strokeLinecap: import("vue").PropType<"round" | "butt" | "square">;
    strokeColor: {
        type: import("vue").PropType<string | import("./props").ProgressGradient>;
        default: string | import("./props").ProgressGradient;
    };
    trailColor: StringConstructor;
    width: NumberConstructor;
    success: {
        type: import("vue").PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: import("vue").PropType<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
    steps: NumberConstructor;
    successPercent: NumberConstructor;
    title: StringConstructor;
}>>, {
    success: import("./props").SuccessProps;
    showInfo: boolean;
    strokeColor: string | import("./props").ProgressGradient;
}>;
export default _default;
