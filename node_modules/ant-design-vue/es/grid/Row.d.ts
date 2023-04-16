import type { ExtractPropTypes, PropType } from 'vue';
import type { Breakpoint } from '../_util/responsiveObserve';
export declare type Gutter = number | Partial<Record<Breakpoint, number>>;
export interface rowContextState {
    gutter?: [number, number];
}
export declare const rowProps: () => {
    align: PropType<"stretch" | "bottom" | "top" | "middle">;
    justify: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: PropType<Gutter | [Gutter, Gutter]>;
        default: Gutter | [Gutter, Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
};
export declare type RowProps = Partial<ExtractPropTypes<ReturnType<typeof rowProps>>>;
declare const ARow: import("vue").DefineComponent<{
    align: PropType<"stretch" | "bottom" | "top" | "middle">;
    justify: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: PropType<Gutter | [Gutter, Gutter]>;
        default: Gutter | [Gutter, Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    align: PropType<"stretch" | "bottom" | "top" | "middle">;
    justify: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: PropType<Gutter | [Gutter, Gutter]>;
        default: Gutter | [Gutter, Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    wrap: boolean;
    gutter: number | Partial<Record<Breakpoint, number>> | [Gutter, Gutter];
}>;
export default ARow;
