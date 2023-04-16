import type { ExtractPropTypes, PropType } from 'vue';
import type { RadioChangeEvent } from './interface';
import type { FocusEventHandler, MouseEventHandler } from '../_util/EventInterface';
export declare const radioProps: () => {
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    isGroup: {
        type: BooleanConstructor;
        default: any;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: PropType<(event: RadioChangeEvent) => void>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onClick: PropType<MouseEventHandler>;
    'onUpdate:checked': PropType<(checked: boolean) => void>;
    'onUpdate:value': PropType<(checked: boolean) => void>;
};
export declare type RadioProps = Partial<ExtractPropTypes<ReturnType<typeof radioProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    isGroup: {
        type: BooleanConstructor;
        default: any;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: PropType<(event: RadioChangeEvent) => void>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onClick: PropType<MouseEventHandler>;
    'onUpdate:checked': PropType<(checked: boolean) => void>;
    'onUpdate:value': PropType<(checked: boolean) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    isGroup: {
        type: BooleanConstructor;
        default: any;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: PropType<(event: RadioChangeEvent) => void>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onClick: PropType<MouseEventHandler>;
    'onUpdate:checked': PropType<(checked: boolean) => void>;
    'onUpdate:value': PropType<(checked: boolean) => void>;
}>>, {
    disabled: boolean;
    checked: boolean;
    autofocus: boolean;
    isGroup: boolean;
}>;
export default _default;
