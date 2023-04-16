import type { TransitionNameType, AnimationType } from '../interface';
export interface MaskProps {
    prefixCls: string;
    visible?: boolean;
    zIndex?: number;
    mask?: boolean;
    maskAnimation?: AnimationType;
    maskTransitionName?: TransitionNameType;
}
declare function Mask(props: MaskProps): JSX.Element;
declare namespace Mask {
    var displayName: string;
}
export default Mask;
