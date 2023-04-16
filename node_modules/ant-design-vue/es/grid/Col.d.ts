import type { ExtractPropTypes, PropType } from 'vue';
declare type ColSpanType = number | string;
export interface ColSize {
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
}
export declare const colProps: () => {
    span: (StringConstructor | NumberConstructor)[];
    order: (StringConstructor | NumberConstructor)[];
    offset: (StringConstructor | NumberConstructor)[];
    push: (StringConstructor | NumberConstructor)[];
    pull: (StringConstructor | NumberConstructor)[];
    xs: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    sm: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    md: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    lg: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xxl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xxxl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    prefixCls: StringConstructor;
    flex: (StringConstructor | NumberConstructor)[];
};
export declare type ColProps = Partial<ExtractPropTypes<ReturnType<typeof colProps>>>;
declare const _default: import("vue").DefineComponent<{
    span: (StringConstructor | NumberConstructor)[];
    order: (StringConstructor | NumberConstructor)[];
    offset: (StringConstructor | NumberConstructor)[];
    push: (StringConstructor | NumberConstructor)[];
    pull: (StringConstructor | NumberConstructor)[];
    xs: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    sm: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    md: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    lg: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xxl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xxxl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    prefixCls: StringConstructor;
    flex: (StringConstructor | NumberConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    span: (StringConstructor | NumberConstructor)[];
    order: (StringConstructor | NumberConstructor)[];
    offset: (StringConstructor | NumberConstructor)[];
    push: (StringConstructor | NumberConstructor)[];
    pull: (StringConstructor | NumberConstructor)[];
    xs: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    sm: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    md: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    lg: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xxl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    xxxl: {
        type: PropType<string | number | ColSize>;
        default: string | number | ColSize;
    };
    prefixCls: StringConstructor;
    flex: (StringConstructor | NumberConstructor)[];
}>>, {
    xxxl: string | number | ColSize;
    xxl: string | number | ColSize;
    xl: string | number | ColSize;
    lg: string | number | ColSize;
    md: string | number | ColSize;
    sm: string | number | ColSize;
    xs: string | number | ColSize;
}>;
export default _default;
