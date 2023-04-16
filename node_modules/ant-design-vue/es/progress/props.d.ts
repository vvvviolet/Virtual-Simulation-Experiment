import type { VueNode } from '../_util/type';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const progressStatuses: ["normal", "exception", "active", "success"];
export declare type ProgressStatusesType = typeof progressStatuses[number];
declare const ProgressType: ["line", "circle", "dashboard"];
export declare type ProgressType = typeof ProgressType[number];
declare const ProgressSize: ["default", "small"];
export declare type ProgressSize = typeof ProgressSize[number];
export declare type StringGradients = {
    [percentage: string]: string;
};
declare type FromToGradients = {
    from: string;
    to: string;
};
export declare type ProgressGradient = {
    direction?: string;
} & (StringGradients | FromToGradients);
export interface SuccessProps {
    percent?: number;
    strokeColor?: string;
}
export declare const progressProps: () => {
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
    strokeColor: {
        type: PropType<string | ProgressGradient>;
        default: string | ProgressGradient;
    };
    trailColor: StringConstructor;
    width: NumberConstructor;
    success: {
        type: PropType<SuccessProps>;
        default: () => SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: PropType<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
    steps: NumberConstructor;
    /** @deprecated Use `success` instead */
    successPercent: NumberConstructor;
    title: StringConstructor;
};
export declare type ProgressProps = Partial<ExtractPropTypes<ReturnType<typeof progressProps>>>;
export {};
