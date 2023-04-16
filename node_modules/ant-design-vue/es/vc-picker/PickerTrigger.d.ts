import type { CSSProperties } from 'vue';
import type { AlignType } from '../vc-align/interface';
declare type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
export declare type PickerTriggerProps = {
    prefixCls: string;
    visible: boolean;
    popupStyle?: CSSProperties;
    dropdownClassName?: string;
    transitionName?: string;
    getPopupContainer?: (node: HTMLElement) => HTMLElement;
    dropdownAlign?: AlignType;
    range?: boolean;
    popupPlacement?: Placement;
    direction?: 'ltr' | 'rtl';
};
declare function PickerTrigger(props: PickerTriggerProps, { slots }: {
    slots: any;
}): JSX.Element;
export default PickerTrigger;
