import type { InnerSelectorProps } from './interface';
import type { VueNode } from '../../_util/type';
import type { DisplayValueType, RenderNode, CustomTagProps } from '../BaseSelect';
declare type SelectorProps = InnerSelectorProps & {
    removeIcon?: RenderNode;
    maxTagCount?: number | 'responsive';
    maxTagTextLength?: number;
    maxTagPlaceholder?: VueNode | ((omittedValues: DisplayValueType[]) => VueNode);
    tokenSeparators?: string[];
    tagRender?: (props: CustomTagProps) => VueNode;
    onToggleOpen: any;
    choiceTransitionName?: string;
    onRemove: (value: DisplayValueType) => void;
};
declare const SelectSelector: import("vue").DefineComponent<SelectorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<SelectorProps>, {
    onToggleOpen: any;
}>;
export default SelectSelector;
