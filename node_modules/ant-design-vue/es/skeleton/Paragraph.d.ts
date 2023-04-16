import type { ExtractPropTypes, PropType } from 'vue';
declare type widthUnit = number | string;
export declare const skeletonParagraphProps: () => {
    prefixCls: StringConstructor;
    width: {
        type: PropType<widthUnit | widthUnit[]>;
    };
    rows: NumberConstructor;
};
export declare type SkeletonParagraphProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonParagraphProps>>>;
declare const SkeletonParagraph: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    width: {
        type: PropType<widthUnit | widthUnit[]>;
    };
    rows: NumberConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    width: {
        type: PropType<widthUnit | widthUnit[]>;
    };
    rows: NumberConstructor;
}>>, {}>;
export default SkeletonParagraph;
