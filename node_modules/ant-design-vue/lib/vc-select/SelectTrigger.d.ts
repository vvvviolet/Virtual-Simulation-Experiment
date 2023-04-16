import type { CSSProperties } from 'vue';
import type { VueNode } from '../_util/type';
import type { DropdownRender, Placement, RenderDOMFunc } from './BaseSelect';
import type { AlignType } from '../vc-trigger/interface';
export interface RefTriggerProps {
    getPopupElement: () => HTMLDivElement;
}
export interface SelectTriggerProps {
    prefixCls: string;
    disabled: boolean;
    visible: boolean;
    popupElement: VueNode;
    animation?: string;
    transitionName?: string;
    containerWidth: number;
    placement?: Placement;
    dropdownStyle: CSSProperties;
    dropdownClassName: string;
    direction: string;
    dropdownMatchSelectWidth?: boolean | number;
    dropdownRender?: DropdownRender;
    getPopupContainer?: RenderDOMFunc;
    dropdownAlign: AlignType;
    empty: boolean;
    getTriggerDOMNode: () => any;
    onPopupVisibleChange?: (visible: boolean) => void;
    onPopupMouseEnter: () => void;
}
declare const SelectTrigger: import("vue").DefineComponent<SelectTriggerProps, {
    popupRef: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<SelectTriggerProps>, {}>;
export default SelectTrigger;
