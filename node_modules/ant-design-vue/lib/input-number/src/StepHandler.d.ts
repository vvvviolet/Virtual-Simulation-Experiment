import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    upDisabled: BooleanConstructor;
    downDisabled: BooleanConstructor;
    onStep: {
        type: PropType<(up: boolean) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    upDisabled: BooleanConstructor;
    downDisabled: BooleanConstructor;
    onStep: {
        type: PropType<(up: boolean) => void>;
    };
}>>, {
    upDisabled: boolean;
    downDisabled: boolean;
}>;
export default _default;
