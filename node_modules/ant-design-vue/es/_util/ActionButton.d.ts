import type { ExtractPropTypes, PropType } from 'vue';
import type { LegacyButtonType } from '../button/buttonTypes';
declare const actionButtonProps: {
    type: {
        type: PropType<LegacyButtonType>;
    };
    actionFn: PropType<(...args: any[]) => any | PromiseLike<any>>;
    close: FunctionConstructor;
    autofocus: BooleanConstructor;
    prefixCls: StringConstructor;
    buttonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
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
    }>>>;
    emitEvent: BooleanConstructor;
    quitOnNullishReturnValue: BooleanConstructor;
};
export declare type ActionButtonProps = ExtractPropTypes<typeof actionButtonProps>;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<LegacyButtonType>;
    };
    actionFn: PropType<(...args: any[]) => any>;
    close: FunctionConstructor;
    autofocus: BooleanConstructor;
    prefixCls: StringConstructor;
    buttonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
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
    }>>>;
    emitEvent: BooleanConstructor;
    quitOnNullishReturnValue: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    type: {
        type: PropType<LegacyButtonType>;
    };
    actionFn: PropType<(...args: any[]) => any>;
    close: FunctionConstructor;
    autofocus: BooleanConstructor;
    prefixCls: StringConstructor;
    buttonProps: PropType<Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
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
    }>>>;
    emitEvent: BooleanConstructor;
    quitOnNullishReturnValue: BooleanConstructor;
}>>, {
    autofocus: boolean;
    emitEvent: boolean;
    quitOnNullishReturnValue: boolean;
}>;
export default _default;
