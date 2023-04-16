import type { ExtractPropTypes, PropType } from 'vue';
import type { VueNode } from '../_util/type';
export declare const stepsProps: () => {
    steps: NumberConstructor;
    size: {
        type: PropType<"default" | "small">;
    };
    strokeColor: StringConstructor;
    trailColor: StringConstructor;
    prefixCls: StringConstructor;
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: PropType<(percent?: number, successPercent?: number) => VueNode>;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: {
        type: BooleanConstructor;
        default: any;
    };
    strokeWidth: NumberConstructor;
    strokeLinecap: PropType<"round" | "butt" | "square">;
    width: NumberConstructor;
    success: {
        type: PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: PropType<"left" | "right" | "bottom" | "top">;
    successPercent: NumberConstructor;
    title: StringConstructor;
};
export declare type StepsProps = Partial<ExtractPropTypes<typeof stepsProps>>;
declare const _default: import("vue").DefineComponent<{
    steps: NumberConstructor;
    size: {
        type: PropType<"default" | "small">;
    };
    strokeColor: StringConstructor;
    trailColor: StringConstructor;
    prefixCls: StringConstructor;
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: PropType<(percent?: number, successPercent?: number) => VueNode>;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: {
        type: BooleanConstructor;
        default: any;
    };
    strokeWidth: NumberConstructor;
    strokeLinecap: PropType<"round" | "butt" | "square">;
    width: NumberConstructor;
    success: {
        type: PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: PropType<"left" | "right" | "bottom" | "top">;
    successPercent: NumberConstructor;
    title: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    steps: NumberConstructor;
    size: {
        type: PropType<"default" | "small">;
    };
    strokeColor: StringConstructor;
    trailColor: StringConstructor;
    prefixCls: StringConstructor;
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: PropType<(percent?: number, successPercent?: number) => VueNode>;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: {
        type: BooleanConstructor;
        default: any;
    };
    strokeWidth: NumberConstructor;
    strokeLinecap: PropType<"round" | "butt" | "square">;
    width: NumberConstructor;
    success: {
        type: PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: PropType<"left" | "right" | "bottom" | "top">;
    successPercent: NumberConstructor;
    title: StringConstructor;
}>>, {
    success: import("./props").SuccessProps;
    showInfo: boolean;
}>;
export default _default;
