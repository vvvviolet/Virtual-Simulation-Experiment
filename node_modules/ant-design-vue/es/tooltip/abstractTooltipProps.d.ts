import type { CSSProperties, PropType } from 'vue';
import type { AlignType, BuildInPlacements } from '../vc-trigger/interface';
import type { AdjustOverflow } from './placements';
export declare type TriggerType = 'hover' | 'focus' | 'click' | 'contextmenu';
export declare type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
declare const _default: () => {
    trigger: PropType<TriggerType | TriggerType[]>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: PropType<TooltipPlacement>;
    color: StringConstructor;
    transitionName: StringConstructor;
    overlayStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: PropType<boolean | AdjustOverflow>;
        default: boolean | AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: PropType<AlignType>;
        default: AlignType;
    };
    builtinPlacements: {
        type: PropType<BuildInPlacements>;
        default: BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: PropType<(vis: boolean) => void>;
    'onUpdate:visible': PropType<(vis: boolean) => void>;
};
export default _default;
