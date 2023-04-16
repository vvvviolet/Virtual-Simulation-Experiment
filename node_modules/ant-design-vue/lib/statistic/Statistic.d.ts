import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { valueType } from './utils';
export declare const statisticProps: () => {
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    format: StringConstructor;
    value: {
        type: PropType<valueType>;
    };
    valueStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
export declare type StatisticProps = Partial<ExtractPropTypes<ReturnType<typeof statisticProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    format: StringConstructor;
    value: {
        type: PropType<valueType>;
    };
    valueStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    format: StringConstructor;
    value: {
        type: PropType<valueType>;
    };
    valueStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
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
    valueStyle: CSSProperties;
}>;
export default _default;
