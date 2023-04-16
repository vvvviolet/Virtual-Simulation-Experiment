import type { PropType } from 'vue';
import type { SizeType } from '../config-provider';
import type { FocusEventHandler, MouseEventHandler } from '../_util/EventInterface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
    compact: {
        type: BooleanConstructor;
        default: any;
    };
    onMouseenter: {
        type: PropType<MouseEventHandler>;
    };
    onMouseleave: {
        type: PropType<MouseEventHandler>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
    compact: {
        type: BooleanConstructor;
        default: any;
    };
    onMouseenter: {
        type: PropType<MouseEventHandler>;
    };
    onMouseleave: {
        type: PropType<MouseEventHandler>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
}>>, {
    compact: boolean;
}>;
export default _default;
