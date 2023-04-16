import type { ExtractPropTypes } from 'vue';
export declare const timelineProps: () => {
    prefixCls: StringConstructor;
    /** 指定最后一个幽灵节点是否存在或内容 */
    pending: import("vue-types").VueTypeValidableDef<any>;
    pendingDot: import("vue-types").VueTypeValidableDef<any>;
    reverse: {
        type: BooleanConstructor;
        default: any;
    };
    mode: import("vue-types").VueTypeDef<"" | "alternate" | "left" | "right">;
};
export declare type TimelineProps = Partial<ExtractPropTypes<ReturnType<typeof timelineProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    /** 指定最后一个幽灵节点是否存在或内容 */
    pending: import("vue-types").VueTypeValidableDef<any>;
    pendingDot: import("vue-types").VueTypeValidableDef<any>;
    reverse: {
        type: BooleanConstructor;
        default: any;
    };
    mode: import("vue-types").VueTypeDef<"" | "alternate" | "left" | "right">;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    /** 指定最后一个幽灵节点是否存在或内容 */
    pending: import("vue-types").VueTypeValidableDef<any>;
    pendingDot: import("vue-types").VueTypeValidableDef<any>;
    reverse: {
        type: BooleanConstructor;
        default: any;
    };
    mode: import("vue-types").VueTypeDef<"" | "alternate" | "left" | "right">;
}>>, {
    reverse: boolean;
}>;
export default _default;
