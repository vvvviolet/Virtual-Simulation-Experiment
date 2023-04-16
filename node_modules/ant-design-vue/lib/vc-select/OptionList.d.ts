import type { ScrollConfig } from '../vc-virtual-list/List';
export interface RefOptionListProps {
    onKeydown: (e?: KeyboardEvent) => void;
    onKeyup: (e?: KeyboardEvent) => void;
    scrollTo?: (index: number | ScrollConfig) => void;
}
export declare type OptionListProps = Record<string, never>;
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
declare const OptionList: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default OptionList;
