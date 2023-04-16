import type { AvatarSize } from './Avatar';
import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
export declare const groupProps: () => {
    prefixCls: StringConstructor;
    maxCount: NumberConstructor;
    maxStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maxPopoverPlacement: {
        type: PropType<"bottom" | "top">;
        default: string;
    };
    maxPopoverTrigger: PropType<"click" | "focus" | "hover">;
    size: {
        type: PropType<AvatarSize>;
        default: AvatarSize;
    };
};
export declare type AvatarGroupProps = Partial<ExtractPropTypes<ReturnType<typeof groupProps>>>;
declare const Group: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    maxCount: NumberConstructor;
    maxStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maxPopoverPlacement: {
        type: PropType<"bottom" | "top">;
        default: string;
    };
    maxPopoverTrigger: PropType<"click" | "focus" | "hover">;
    size: {
        type: PropType<AvatarSize>;
        default: AvatarSize;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    maxCount: NumberConstructor;
    maxStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maxPopoverPlacement: {
        type: PropType<"bottom" | "top">;
        default: string;
    };
    maxPopoverTrigger: PropType<"click" | "focus" | "hover">;
    size: {
        type: PropType<AvatarSize>;
        default: AvatarSize;
    };
}>>, {
    size: number | "default" | "small" | "large" | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>>;
    maxStyle: CSSProperties;
    maxPopoverPlacement: "bottom" | "top";
}>;
export default Group;
