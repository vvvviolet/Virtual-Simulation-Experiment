import type { PropType, ExtractPropTypes, App } from 'vue';
import type { SizeType } from '../config-provider';
export declare const inputNumberProps: () => {
    size: {
        type: PropType<SizeType>;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: StringConstructor;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    'onUpdate:value': {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
    };
    valueModifiers: ObjectConstructor;
    stringMode: {
        type: PropType<boolean>;
    };
    defaultValue: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    value: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    prefixCls: {
        type: PropType<string>;
    };
    min: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    max: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    step: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
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
    parser: {
        type: PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
    };
    formatter: {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string>;
    };
    precision: {
        type: PropType<number>;
    };
    decimalSeparator: {
        type: PropType<string>;
    };
    onInput: {
        type: PropType<(text: string) => void>;
    };
    onChange: {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
    };
    onPressEnter: {
        type: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    };
    onStep: {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            offset: import("./src/utils/MiniDecimal").ValueType;
            type: "down" | "up";
        }) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
};
export declare type InputNumberProps = Partial<ExtractPropTypes<ReturnType<typeof inputNumberProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            step: import("./src/utils/MiniDecimal").ValueType;
            keyboard: boolean;
            bordered: boolean;
            controls: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            size: {
                type: PropType<SizeType>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            name: StringConstructor;
            id: StringConstructor;
            type: StringConstructor;
            addonBefore: import("vue-types").VueTypeValidableDef<any>;
            addonAfter: import("vue-types").VueTypeValidableDef<any>;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            'onUpdate:value': {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
            };
            valueModifiers: ObjectConstructor;
            stringMode: {
                type: PropType<boolean>;
            };
            defaultValue: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            value: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            prefixCls: {
                type: PropType<string>;
            };
            min: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            max: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            step: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
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
            parser: {
                type: PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
            };
            formatter: {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                    userTyping: boolean;
                    input: string;
                }) => string>;
            };
            precision: {
                type: PropType<number>;
            };
            decimalSeparator: {
                type: PropType<string>;
            };
            onInput: {
                type: PropType<(text: string) => void>;
            };
            onChange: {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
            };
            onPressEnter: {
                type: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            };
            onStep: {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                    offset: import("./src/utils/MiniDecimal").ValueType;
                    type: "down" | "up";
                }) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "step" | "keyboard" | "bordered" | "controls">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            size: {
                type: PropType<SizeType>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            name: StringConstructor;
            id: StringConstructor;
            type: StringConstructor;
            addonBefore: import("vue-types").VueTypeValidableDef<any>;
            addonAfter: import("vue-types").VueTypeValidableDef<any>;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            'onUpdate:value': {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
            };
            valueModifiers: ObjectConstructor;
            stringMode: {
                type: PropType<boolean>;
            };
            defaultValue: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            value: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            prefixCls: {
                type: PropType<string>;
            };
            min: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            max: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
            };
            step: {
                type: PropType<import("./src/utils/MiniDecimal").ValueType>;
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
            parser: {
                type: PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
            };
            formatter: {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                    userTyping: boolean;
                    input: string;
                }) => string>;
            };
            precision: {
                type: PropType<number>;
            };
            decimalSeparator: {
                type: PropType<string>;
            };
            onInput: {
                type: PropType<(text: string) => void>;
            };
            onChange: {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
            };
            onPressEnter: {
                type: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            };
            onStep: {
                type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                    offset: import("./src/utils/MiniDecimal").ValueType;
                    type: "down" | "up";
                }) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
        }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            step: import("./src/utils/MiniDecimal").ValueType;
            keyboard: boolean;
            bordered: boolean;
            controls: boolean;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        size: {
            type: PropType<SizeType>;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        name: StringConstructor;
        id: StringConstructor;
        type: StringConstructor;
        addonBefore: import("vue-types").VueTypeValidableDef<any>;
        addonAfter: import("vue-types").VueTypeValidableDef<any>;
        prefix: import("vue-types").VueTypeValidableDef<any>;
        'onUpdate:value': {
            type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
        };
        valueModifiers: ObjectConstructor;
        stringMode: {
            type: PropType<boolean>;
        };
        defaultValue: {
            type: PropType<import("./src/utils/MiniDecimal").ValueType>;
        };
        value: {
            type: PropType<import("./src/utils/MiniDecimal").ValueType>;
        };
        prefixCls: {
            type: PropType<string>;
        };
        min: {
            type: PropType<import("./src/utils/MiniDecimal").ValueType>;
        };
        max: {
            type: PropType<import("./src/utils/MiniDecimal").ValueType>;
        };
        step: {
            type: PropType<import("./src/utils/MiniDecimal").ValueType>;
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
        parser: {
            type: PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
        };
        formatter: {
            type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                userTyping: boolean;
                input: string;
            }) => string>;
        };
        precision: {
            type: PropType<number>;
        };
        decimalSeparator: {
            type: PropType<string>;
        };
        onInput: {
            type: PropType<(text: string) => void>;
        };
        onChange: {
            type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
        };
        onPressEnter: {
            type: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        };
        onStep: {
            type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                offset: import("./src/utils/MiniDecimal").ValueType;
                type: "down" | "up";
            }) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    size: {
        type: PropType<SizeType>;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: StringConstructor;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    'onUpdate:value': {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
    };
    valueModifiers: ObjectConstructor;
    stringMode: {
        type: PropType<boolean>;
    };
    defaultValue: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    value: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    prefixCls: {
        type: PropType<string>;
    };
    min: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    max: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
    };
    step: {
        type: PropType<import("./src/utils/MiniDecimal").ValueType>;
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
    parser: {
        type: PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
    };
    formatter: {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string>;
    };
    precision: {
        type: PropType<number>;
    };
    decimalSeparator: {
        type: PropType<string>;
    };
    onInput: {
        type: PropType<(text: string) => void>;
    };
    onChange: {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
    };
    onPressEnter: {
        type: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    };
    onStep: {
        type: PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            offset: import("./src/utils/MiniDecimal").ValueType;
            type: "down" | "up";
        }) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    step: import("./src/utils/MiniDecimal").ValueType;
    keyboard: boolean;
    bordered: boolean;
    controls: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => App<any>;
};
export default _default;
