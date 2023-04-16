import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
export declare type ButtonType = 'link' | 'default' | 'primary' | 'ghost' | 'dashed' | 'text';
export declare type ButtonShape = 'default' | 'circle' | 'round';
export declare type ButtonHTMLType = 'submit' | 'button' | 'reset';
export declare type LegacyButtonType = ButtonType | 'danger';
export declare function convertLegacyProps(type?: LegacyButtonType): ButtonProps;
export declare const buttonProps: () => {
    prefixCls: StringConstructor;
    type: PropType<ButtonType>;
    htmlType: {
        type: PropType<ButtonHTMLType>;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
    };
    size: {
        type: PropType<SizeType>;
    };
    loading: {
        type: PropType<boolean | {
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
        type: PropType<(event: MouseEvent) => void>;
    };
    onMousedown: {
        type: PropType<(event: MouseEvent) => void>;
    };
};
export declare type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof buttonProps>>>;
export default buttonProps;
