import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
import type { VueNode } from '../_util/type';
export declare type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType {
    label?: VueNode;
    value: CheckboxValueType;
    disabled?: boolean;
    indeterminate?: boolean;
    onChange?: (e: CheckboxChangeEvent) => void;
}
export interface CheckboxChangeEvent {
    target: CheckboxChangeEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}
export interface CheckboxChangeEventTarget extends CheckboxProps {
    checked: boolean;
}
export declare const abstractCheckboxGroupProps: () => {
    name: StringConstructor;
    prefixCls: StringConstructor;
    options: {
        type: PropType<(string | number | CheckboxOptionType)[]>;
        default: () => (string | number | CheckboxOptionType)[];
    };
    disabled: BooleanConstructor;
    id: StringConstructor;
};
export declare const checkboxGroupProps: () => {
    defaultValue: {
        type: PropType<CheckboxValueType[]>;
    };
    value: {
        type: PropType<CheckboxValueType[]>;
    };
    onChange: {
        type: PropType<(checkedValue: Array<CheckboxValueType>) => void>;
    };
    'onUpdate:value': {
        type: PropType<(checkedValue: Array<CheckboxValueType>) => void>;
    };
    name: StringConstructor;
    prefixCls: StringConstructor;
    options: {
        type: PropType<(string | number | CheckboxOptionType)[]>;
        default: () => (string | number | CheckboxOptionType)[];
    };
    disabled: BooleanConstructor;
    id: StringConstructor;
};
export declare type CheckboxGroupProps = Partial<ExtractPropTypes<ReturnType<typeof checkboxGroupProps>>>;
export declare const abstractCheckboxProps: () => {
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
    indeterminate: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: PropType<(e: CheckboxChangeEvent) => void>;
    'onUpdate:checked': PropType<(checked: boolean) => void>;
    onClick: PropType<MouseEventHandler>;
    skipGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const checkboxProps: () => {
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
    onChange: PropType<(e: CheckboxChangeEvent) => void>;
    'onUpdate:checked': PropType<(checked: boolean) => void>;
    onClick: PropType<MouseEventHandler>;
    skipGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CheckboxProps = Partial<ExtractPropTypes<ReturnType<typeof checkboxProps>>>;
export declare type CheckboxGroupContext = {
    cancelValue: (id: Symbol) => void;
    registerValue: (id: Symbol, value: string) => void;
    toggleOption: (option: CheckboxOptionType) => void;
    name: Ref<string>;
    disabled: Ref<boolean>;
    mergedValue: Ref<CheckboxValueType[]>;
};
export declare const CheckboxGroupContextKey: InjectionKey<CheckboxGroupContext>;
