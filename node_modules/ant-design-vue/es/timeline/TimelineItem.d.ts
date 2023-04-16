import type { ExtractPropTypes } from 'vue';
export declare const timelineItemProps: () => {
    prefixCls: StringConstructor;
    color: StringConstructor;
    dot: import("vue-types").VueTypeValidableDef<any>;
    pending: {
        type: BooleanConstructor;
        default: any;
    };
    position: import("vue-types").VueTypeDef<"" | "left" | "right"> & {
        default: "" | "left" | "right";
    };
    label: import("vue-types").VueTypeValidableDef<any>;
};
export declare type TimelineItemProps = Partial<ExtractPropTypes<ReturnType<typeof timelineItemProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    color: StringConstructor;
    dot: import("vue-types").VueTypeValidableDef<any>;
    pending: {
        type: BooleanConstructor;
        default: any;
    };
    position: import("vue-types").VueTypeDef<"" | "left" | "right"> & {
        default: "" | "left" | "right";
    };
    label: import("vue-types").VueTypeValidableDef<any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    color: StringConstructor;
    dot: import("vue-types").VueTypeValidableDef<any>;
    pending: {
        type: BooleanConstructor;
        default: any;
    };
    position: import("vue-types").VueTypeDef<"" | "left" | "right"> & {
        default: "" | "left" | "right";
    };
    label: import("vue-types").VueTypeValidableDef<any>;
}>>, {
    position: "" | "left" | "right";
    pending: boolean;
}>;
export default _default;
