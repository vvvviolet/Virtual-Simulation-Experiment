import type { ExtractPropTypes, CSSProperties } from 'vue';
export type { TriggerType, TooltipPlacement } from './abstractTooltipProps';
export type { AdjustOverflow, PlacementsConfig } from './placements';
export interface TooltipAlignConfig {
    points?: [string, string];
    offset?: [number | string, number | string];
    targetOffset?: [number | string, number | string];
    overflow?: {
        adjustX: boolean;
        adjustY: boolean;
    };
    useCssRight?: boolean;
    useCssBottom?: boolean;
    useCssTransform?: boolean;
}
export declare const tooltipProps: () => {
    title: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue").PropType<import("./abstractTooltipProps").TriggerType | import("./abstractTooltipProps").TriggerType[]>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("./abstractTooltipProps").TooltipPlacement>;
    color: StringConstructor;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("./placements").AdjustOverflow>;
        default: boolean | import("./placements").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
};
export declare const tooltipDefaultProps: () => {
    trigger: string;
    transitionName: string;
    align: {};
    placement: string;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    arrowPointAtCenter: boolean;
    autoAdjustOverflow: boolean;
};
export declare type TooltipProps = Partial<ExtractPropTypes<ReturnType<typeof tooltipProps>>>;
declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue").PropType<import("./abstractTooltipProps").TriggerType | import("./abstractTooltipProps").TriggerType[]>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("./abstractTooltipProps").TooltipPlacement>;
    color: StringConstructor;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("./placements").AdjustOverflow>;
        default: boolean | import("./placements").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    title: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue").PropType<import("./abstractTooltipProps").TriggerType | import("./abstractTooltipProps").TriggerType[]>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("./abstractTooltipProps").TooltipPlacement>;
    color: StringConstructor;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("./placements").AdjustOverflow>;
        default: boolean | import("./placements").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
}>>, {
    visible: boolean;
    align: import("../vc-trigger/interface").AlignType;
    builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
    defaultVisible: boolean;
    overlayStyle: CSSProperties;
    destroyTooltipOnHide: boolean;
    autoAdjustOverflow: boolean | import("./placements").AdjustOverflow;
    arrowPointAtCenter: boolean;
}>;
export default _default;
