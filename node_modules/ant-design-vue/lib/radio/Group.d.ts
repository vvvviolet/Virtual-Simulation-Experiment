import type { PropType, ExtractPropTypes } from 'vue';
import type { RadioChangeEvent, RadioGroupButtonStyle, RadioGroupOptionType } from './interface';
declare const RadioGroupSizeTypes: ["large", "default", "small"];
export declare type RadioGroupSize = typeof RadioGroupSizeTypes[number];
export declare type RadioGroupOption = RadioGroupOptionType;
export declare type RadioGroupChildOption = {
    label?: any;
    value: any;
    disabled?: boolean;
};
export declare const radioGroupProps: () => {
    prefixCls: StringConstructor;
    value: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    options: {
        type: PropType<(string | number | RadioGroupChildOption)[]>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    name: StringConstructor;
    buttonStyle: {
        type: PropType<RadioGroupButtonStyle>;
        default: string;
    };
    id: StringConstructor;
    optionType: {
        type: PropType<RadioGroupOptionType>;
        default: string;
    };
    onChange: PropType<(e: RadioChangeEvent) => void>;
    'onUpdate:value': PropType<(val: any) => void>;
};
export declare type RadioGroupProps = Partial<ExtractPropTypes<ReturnType<typeof radioGroupProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    value: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    options: {
        type: PropType<(string | number | RadioGroupChildOption)[]>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    name: StringConstructor;
    buttonStyle: {
        type: PropType<RadioGroupButtonStyle>;
        default: string;
    };
    id: StringConstructor;
    optionType: {
        type: PropType<RadioGroupOptionType>;
        default: string;
    };
    onChange: PropType<(e: RadioChangeEvent) => void>;
    'onUpdate:value': PropType<(val: any) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    value: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
    options: {
        type: PropType<(string | number | RadioGroupChildOption)[]>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    name: StringConstructor;
    buttonStyle: {
        type: PropType<RadioGroupButtonStyle>;
        default: string;
    };
    id: StringConstructor;
    optionType: {
        type: PropType<RadioGroupOptionType>;
        default: string;
    };
    onChange: PropType<(e: RadioChangeEvent) => void>;
    'onUpdate:value': PropType<(val: any) => void>;
}>>, {
    disabled: boolean;
    buttonStyle: RadioGroupButtonStyle;
    optionType: RadioGroupOptionType;
}>;
export default _default;
