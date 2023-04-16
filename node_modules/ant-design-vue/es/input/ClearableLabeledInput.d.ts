import type { PropType } from 'vue';
import type { Direction, SizeType } from '../config-provider';
import type { MouseEventHandler } from '../_util/EventInterface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    inputType: import("vue-types").VueTypeDef<"input" | "text">;
    value: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    element: import("vue-types").VueTypeValidableDef<any>;
    handleReset: PropType<MouseEventHandler>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: PropType<Direction>;
    };
    size: {
        type: PropType<SizeType>;
    };
    suffix: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerFocus: {
        type: PropType<() => void>;
    };
    hidden: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    inputType: import("vue-types").VueTypeDef<"input" | "text">;
    value: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    element: import("vue-types").VueTypeValidableDef<any>;
    handleReset: PropType<MouseEventHandler>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: PropType<Direction>;
    };
    size: {
        type: PropType<SizeType>;
    };
    suffix: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerFocus: {
        type: PropType<() => void>;
    };
    hidden: BooleanConstructor;
}>>, {
    hidden: boolean;
    disabled: boolean;
    readonly: boolean;
    focused: boolean;
    allowClear: boolean;
    bordered: boolean;
}>;
export default _default;
