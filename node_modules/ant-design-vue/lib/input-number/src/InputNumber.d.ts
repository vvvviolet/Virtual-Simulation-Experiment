import type { ValueType } from './utils/MiniDecimal';
import type { PropType } from 'vue';
import type { KeyboardEventHandler } from '../../_util/EventInterface';
export declare const inputNumberProps: () => {
    /** value will show as string */
    stringMode: {
        type: PropType<boolean>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    value: {
        type: PropType<ValueType>;
    };
    prefixCls: {
        type: PropType<string>;
    };
    min: {
        type: PropType<ValueType>;
    };
    max: {
        type: PropType<ValueType>;
    };
    step: {
        type: PropType<ValueType>;
        default: number;
    };
    tabindex: {
        type: PropType<number>;
    };
    controls: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    autofocus: {
        type: PropType<boolean>;
    };
    keyboard: {
        type: PropType<boolean>;
        default: boolean;
    };
    /** Parse display value to validate number */
    parser: {
        type: PropType<(displayValue: string | undefined) => ValueType>;
    };
    /** Transform `value` to display value show in input */
    formatter: {
        type: PropType<(value: ValueType | undefined, info: {
            userTyping: boolean;
            input: string;
        }) => string>;
    };
    /** Syntactic sugar of `formatter`. Config precision of display. */
    precision: {
        type: PropType<number>;
    };
    /** Syntactic sugar of `formatter`. Config decimal separator of display. */
    decimalSeparator: {
        type: PropType<string>;
    };
    onInput: {
        type: PropType<(text: string) => void>;
    };
    onChange: {
        type: PropType<(value: ValueType) => void>;
    };
    onPressEnter: {
        type: PropType<KeyboardEventHandler>;
    };
    onStep: {
        type: PropType<(value: ValueType, info: {
            offset: ValueType;
            type: 'up' | 'down';
        }) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
};
declare const _default: import("vue").DefineComponent<{
    lazy: BooleanConstructor;
    /** value will show as string */
    stringMode: {
        type: PropType<boolean>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    value: {
        type: PropType<ValueType>;
    };
    prefixCls: {
        type: PropType<string>;
    };
    min: {
        type: PropType<ValueType>;
    };
    max: {
        type: PropType<ValueType>;
    };
    step: {
        type: PropType<ValueType>;
        default: number;
    };
    tabindex: {
        type: PropType<number>;
    };
    controls: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    autofocus: {
        type: PropType<boolean>;
    };
    keyboard: {
        type: PropType<boolean>;
        default: boolean;
    };
    /** Parse display value to validate number */
    parser: {
        type: PropType<(displayValue: string) => ValueType>;
    };
    /** Transform `value` to display value show in input */
    formatter: {
        type: PropType<(value: ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string>;
    };
    /** Syntactic sugar of `formatter`. Config precision of display. */
    precision: {
        type: PropType<number>;
    };
    /** Syntactic sugar of `formatter`. Config decimal separator of display. */
    decimalSeparator: {
        type: PropType<string>;
    };
    onInput: {
        type: PropType<(text: string) => void>;
    };
    onChange: {
        type: PropType<(value: ValueType) => void>;
    };
    onPressEnter: {
        type: PropType<KeyboardEventHandler>;
    };
    onStep: {
        type: PropType<(value: ValueType, info: {
            offset: ValueType;
            type: "down" | "up";
        }) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    lazy: BooleanConstructor;
    /** value will show as string */
    stringMode: {
        type: PropType<boolean>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    value: {
        type: PropType<ValueType>;
    };
    prefixCls: {
        type: PropType<string>;
    };
    min: {
        type: PropType<ValueType>;
    };
    max: {
        type: PropType<ValueType>;
    };
    step: {
        type: PropType<ValueType>;
        default: number;
    };
    tabindex: {
        type: PropType<number>;
    };
    controls: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    autofocus: {
        type: PropType<boolean>;
    };
    keyboard: {
        type: PropType<boolean>;
        default: boolean;
    };
    /** Parse display value to validate number */
    parser: {
        type: PropType<(displayValue: string) => ValueType>;
    };
    /** Transform `value` to display value show in input */
    formatter: {
        type: PropType<(value: ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string>;
    };
    /** Syntactic sugar of `formatter`. Config precision of display. */
    precision: {
        type: PropType<number>;
    };
    /** Syntactic sugar of `formatter`. Config decimal separator of display. */
    decimalSeparator: {
        type: PropType<string>;
    };
    onInput: {
        type: PropType<(text: string) => void>;
    };
    onChange: {
        type: PropType<(value: ValueType) => void>;
    };
    onPressEnter: {
        type: PropType<KeyboardEventHandler>;
    };
    onStep: {
        type: PropType<(value: ValueType, info: {
            offset: ValueType;
            type: "down" | "up";
        }) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
}>>, {
    step: ValueType;
    keyboard: boolean;
    lazy: boolean;
    controls: boolean;
}>;
export default _default;
