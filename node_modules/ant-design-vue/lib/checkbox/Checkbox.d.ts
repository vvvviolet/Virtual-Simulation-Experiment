import type { CheckboxChangeEvent } from './interface';
declare const _default: import("vue").DefineComponent<{
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    defaultChecked: {
        type: BooleanConstructor;
        default: any;
    };
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
    type: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: import("vue").PropType<(e: CheckboxChangeEvent) => void>;
    'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
    onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    skipGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    defaultChecked: {
        type: BooleanConstructor;
        default: any;
    };
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
    type: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: import("vue").PropType<(e: CheckboxChangeEvent) => void>;
    'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
    onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    skipGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    disabled: boolean;
    type: string;
    defaultChecked: boolean;
    checked: boolean;
    autofocus: boolean;
    indeterminate: boolean;
    isGroup: boolean;
    skipGroup: boolean;
}>;
export default _default;
