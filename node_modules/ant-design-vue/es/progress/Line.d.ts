import type { ExtractPropTypes, PropType } from 'vue';
import type { Direction } from '../config-provider';
import type { StringGradients, ProgressGradient } from './props';
export declare const lineProps: () => {
    prefixCls: StringConstructor;
    direction: {
        type: PropType<Direction>;
    };
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
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
        type: PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: PropType<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
    steps: NumberConstructor;
    successPercent: NumberConstructor;
    title: StringConstructor;
};
export declare type LineProps = Partial<ExtractPropTypes<ReturnType<typeof lineProps>>>;
/**
 * {
 *   '0%': '#afc163',
 *   '75%': '#009900',
 *   '50%': 'green',     ====>     '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *   '25%': '#66FF00',
 *   '100%': '#ffffff'
 * }
 */
export declare const sortGradient: (gradients: StringGradients) => string;
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
export declare const handleGradient: (strokeColor: ProgressGradient, directionConfig: Direction) => {
    backgroundImage: string;
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    direction: {
        type: PropType<Direction>;
    };
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
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
        type: PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: PropType<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
    steps: NumberConstructor;
    successPercent: NumberConstructor;
    title: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    direction: {
        type: PropType<Direction>;
    };
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
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
        type: PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: PropType<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
    steps: NumberConstructor;
    successPercent: NumberConstructor;
    title: StringConstructor;
}>>, {
    success: import("./props").SuccessProps;
    showInfo: boolean;
    strokeColor: string | ProgressGradient;
}>;
export default _default;
