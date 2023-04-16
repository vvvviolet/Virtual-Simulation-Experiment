import type { InnerSelectorProps } from './interface';
import type { VueNode } from '../../_util/type';
interface SelectorProps extends InnerSelectorProps {
    inputElement: VueNode;
    activeValue: string;
    optionLabelRender: Function;
}
declare const SingleSelector: import("vue").DefineComponent<SelectorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<SelectorProps>, {}>;
export default SingleSelector;
