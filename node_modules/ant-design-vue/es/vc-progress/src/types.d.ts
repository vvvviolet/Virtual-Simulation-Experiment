import type { PropType, ExtractPropTypes } from 'vue';
export declare type StrokeColorType = string | string[] | object;
export declare type GapPositionType = 'top' | 'right' | 'bottom' | 'left';
export declare type StrokeLinecapType = 'round' | 'butt' | 'square';
export declare const propTypes: {
    gapDegree: NumberConstructor;
    gapPosition: {
        type: PropType<GapPositionType>;
    };
    percent: {
        type: PropType<number | number[]>;
    };
    prefixCls: StringConstructor;
    strokeColor: {
        type: PropType<StrokeColorType>;
    };
    strokeLinecap: {
        type: PropType<StrokeLinecapType>;
    };
    strokeWidth: NumberConstructor;
    trailColor: StringConstructor;
    trailWidth: NumberConstructor;
    transition: StringConstructor;
};
export declare type ProgressProps = Partial<ExtractPropTypes<typeof propTypes>>;
