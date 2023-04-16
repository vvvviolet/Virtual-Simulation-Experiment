import buttonProps from './buttonTypes';
import type { ButtonType } from './buttonTypes';
export { buttonProps };
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    type: import("vue").PropType<ButtonType>;
    htmlType: {
        type: import("vue").PropType<import("./buttonTypes").ButtonHTMLType>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("./buttonTypes").ButtonShape>;
    };
    size: {
        type: import("vue").PropType<import(".").ButtonSize>;
    };
    loading: {
        type: import("vue").PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    block: {
        type: BooleanConstructor;
        default: any;
    };
    danger: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    href: StringConstructor;
    target: StringConstructor;
    title: StringConstructor;
    onClick: {
        type: import("vue").PropType<(event: MouseEvent) => void>;
    };
    onMousedown: {
        type: import("vue").PropType<(event: MouseEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    type: import("vue").PropType<ButtonType>;
    htmlType: {
        type: import("vue").PropType<import("./buttonTypes").ButtonHTMLType>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("./buttonTypes").ButtonShape>;
    };
    size: {
        type: import("vue").PropType<import(".").ButtonSize>;
    };
    loading: {
        type: import("vue").PropType<boolean | {
            delay?: number;
        }>;
        default: () => boolean | {
            delay?: number;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    block: {
        type: BooleanConstructor;
        default: any;
    };
    danger: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    href: StringConstructor;
    target: StringConstructor;
    title: StringConstructor;
    onClick: {
        type: import("vue").PropType<(event: MouseEvent) => void>;
    };
    onMousedown: {
        type: import("vue").PropType<(event: MouseEvent) => void>;
    };
}>>, {
    block: boolean;
    disabled: boolean;
    loading: boolean | {
        delay?: number;
    };
    ghost: boolean;
    danger: boolean;
    htmlType: import("./buttonTypes").ButtonHTMLType;
}>;
export default _default;
