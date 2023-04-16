import type { VueNode } from '../_util/type';
export interface ErrorListProps {
    errors?: VueNode[];
    /** @private Internal Usage. Do not use in your production */
    help?: VueNode;
    /** @private Internal Usage. Do not use in your production */
    onDomErrorVisibleChange?: (visible: boolean) => void;
}
declare const _default: import("vue").DefineComponent<Readonly<{
    help?: any;
    errors?: any;
    onDomErrorVisibleChange?: any;
    helpStatus?: any;
    warnings?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    help?: any;
    errors?: any;
    onDomErrorVisibleChange?: any;
    helpStatus?: any;
    warnings?: any;
}>>>, {
    readonly help?: any;
    readonly errors?: any;
    readonly onDomErrorVisibleChange?: any;
    readonly helpStatus?: any;
    readonly warnings?: any;
}>;
export default _default;
