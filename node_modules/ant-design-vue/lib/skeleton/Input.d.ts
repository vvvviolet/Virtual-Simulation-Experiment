import type { PropType } from 'vue';
import type { SkeletonElementProps } from './Element';
export interface SkeletonInputProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
    size?: 'large' | 'small' | 'default';
}
declare const SkeletonInput: import("vue").DefineComponent<{
    size: PropType<"default" | "small" | "large">;
    prefixCls: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: PropType<"default" | "small" | "large">;
    prefixCls: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    active: boolean;
}>;
export default SkeletonInput;
