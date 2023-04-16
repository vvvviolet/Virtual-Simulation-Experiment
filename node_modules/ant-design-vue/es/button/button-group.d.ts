import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
export declare const buttonGroupProps: () => {
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
};
export declare type ButtonGroupProps = Partial<ExtractPropTypes<ReturnType<typeof buttonGroupProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
}>>, {}>;
export default _default;
