import type { ExtractPropTypes, PropType } from 'vue';
import type { countdownValueType } from './utils';
export declare const countdownProps: () => {
    value: PropType<countdownValueType>;
    format: StringConstructor;
    onFinish: PropType<() => void>;
    onChange: PropType<(value?: countdownValueType) => void>;
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    valueStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    valueRender: import("vue-types").VueTypeValidableDef<any>;
    formatter: import("vue-types").VueTypeValidableDef<any>;
    precision: NumberConstructor;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
};
export declare type CountdownProps = Partial<ExtractPropTypes<ReturnType<typeof countdownProps>>>;
declare const _default: import("vue").DefineComponent<{
    value: PropType<countdownValueType>;
    format: StringConstructor;
    onFinish: PropType<() => void>;
    onChange: PropType<(value?: countdownValueType) => void>;
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    valueStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    valueRender: import("vue-types").VueTypeValidableDef<any>;
    formatter: import("vue-types").VueTypeValidableDef<any>;
    precision: NumberConstructor;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    value: PropType<countdownValueType>;
    format: StringConstructor;
    onFinish: PropType<() => void>;
    onChange: PropType<(value?: countdownValueType) => void>;
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    valueStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    valueRender: import("vue-types").VueTypeValidableDef<any>;
    formatter: import("vue-types").VueTypeValidableDef<any>;
    precision: NumberConstructor;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    loading: boolean;
    valueStyle: import("vue").CSSProperties;
}>;
export default _default;
