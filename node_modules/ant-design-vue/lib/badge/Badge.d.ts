import type { ExtractPropTypes, CSSProperties, PropType } from 'vue';
export declare const badgeProps: () => {
    /** Number to show in badge */
    count: import("vue-types").VueTypeValidableDef<any>;
    showZero: {
        type: BooleanConstructor;
        default: any;
    };
    /** Max count to show */
    overflowCount: {
        type: NumberConstructor;
        default: number;
    };
    /** whether to show red dot without number */
    dot: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    scrollNumberPrefixCls: StringConstructor;
    status: {
        type: PropType<"default" | "error" | "success" | "warning" | "processing">;
    };
    size: {
        type: PropType<"default" | "small">;
        default: string;
    };
    color: StringConstructor;
    text: import("vue-types").VueTypeValidableDef<any>;
    offset: PropType<[string | number, string | number]>;
    numberStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    title: StringConstructor;
};
export declare type BadgeProps = Partial<ExtractPropTypes<ReturnType<typeof badgeProps>>>;
declare const _default: import("vue").DefineComponent<{
    /** Number to show in badge */
    count: import("vue-types").VueTypeValidableDef<any>;
    showZero: {
        type: BooleanConstructor;
        default: any;
    };
    /** Max count to show */
    overflowCount: {
        type: NumberConstructor;
        default: number;
    };
    /** whether to show red dot without number */
    dot: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    scrollNumberPrefixCls: StringConstructor;
    status: {
        type: PropType<"default" | "error" | "success" | "warning" | "processing">;
    };
    size: {
        type: PropType<"default" | "small">;
        default: string;
    };
    color: StringConstructor;
    text: import("vue-types").VueTypeValidableDef<any>;
    offset: PropType<[string | number, string | number]>;
    numberStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    title: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    /** Number to show in badge */
    count: import("vue-types").VueTypeValidableDef<any>;
    showZero: {
        type: BooleanConstructor;
        default: any;
    };
    /** Max count to show */
    overflowCount: {
        type: NumberConstructor;
        default: number;
    };
    /** whether to show red dot without number */
    dot: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    scrollNumberPrefixCls: StringConstructor;
    status: {
        type: PropType<"default" | "error" | "success" | "warning" | "processing">;
    };
    size: {
        type: PropType<"default" | "small">;
        default: string;
    };
    color: StringConstructor;
    text: import("vue-types").VueTypeValidableDef<any>;
    offset: PropType<[string | number, string | number]>;
    numberStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    title: StringConstructor;
}>>, {
    size: "default" | "small";
    dot: boolean;
    showZero: boolean;
    overflowCount: number;
    numberStyle: CSSProperties;
}>;
export default _default;
