import type { ExtractPropTypes, PropType } from 'vue';
import type { Direction } from '../config-provider';
import type { FocusEventHandler, KeyboardEventHandler } from '../_util/EventInterface';
export declare const rateProps: () => {
    prefixCls: StringConstructor;
    count: NumberConstructor;
    value: NumberConstructor;
    allowHalf: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    tooltips: PropType<string[]>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    character: import("vue-types").VueTypeValidableDef<any>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    direction: PropType<Direction>;
    id: StringConstructor;
    onChange: PropType<(value: number) => void>;
    onHoverChange: PropType<(value: number) => void>;
    'onUpdate:value': PropType<(value: number) => void>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onKeydown: PropType<KeyboardEventHandler>;
};
export declare type RateProps = Partial<ExtractPropTypes<ReturnType<typeof rateProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            autofocus: boolean;
            allowClear: boolean;
            allowHalf: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            count: NumberConstructor;
            value: NumberConstructor;
            allowHalf: {
                type: BooleanConstructor;
                default: any;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            tooltips: PropType<string[]>;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            character: import("vue-types").VueTypeValidableDef<any>;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            tabindex: import("vue-types").VueTypeDef<string | number>;
            direction: PropType<Direction>;
            id: StringConstructor;
            onChange: PropType<(value: number) => void>;
            onHoverChange: PropType<(value: number) => void>;
            'onUpdate:value': PropType<(value: number) => void>;
            onFocus: PropType<FocusEventHandler>;
            onBlur: PropType<FocusEventHandler>;
            onKeydown: PropType<KeyboardEventHandler>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "autofocus" | "allowClear" | "allowHalf">;
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
            prefixCls: StringConstructor;
            count: NumberConstructor;
            value: NumberConstructor;
            allowHalf: {
                type: BooleanConstructor;
                default: any;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            tooltips: PropType<string[]>;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            character: import("vue-types").VueTypeValidableDef<any>;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            tabindex: import("vue-types").VueTypeDef<string | number>;
            direction: PropType<Direction>;
            id: StringConstructor;
            onChange: PropType<(value: number) => void>;
            onHoverChange: PropType<(value: number) => void>;
            'onUpdate:value': PropType<(value: number) => void>;
            onFocus: PropType<FocusEventHandler>;
            onBlur: PropType<FocusEventHandler>;
            onKeydown: PropType<KeyboardEventHandler>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            autofocus: boolean;
            allowClear: boolean;
            allowHalf: boolean;
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
        prefixCls: StringConstructor;
        count: NumberConstructor;
        value: NumberConstructor;
        allowHalf: {
            type: BooleanConstructor;
            default: any;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        tooltips: PropType<string[]>;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        character: import("vue-types").VueTypeValidableDef<any>;
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        tabindex: import("vue-types").VueTypeDef<string | number>;
        direction: PropType<Direction>;
        id: StringConstructor;
        onChange: PropType<(value: number) => void>;
        onHoverChange: PropType<(value: number) => void>;
        'onUpdate:value': PropType<(value: number) => void>;
        onFocus: PropType<FocusEventHandler>;
        onBlur: PropType<FocusEventHandler>;
        onKeydown: PropType<KeyboardEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    count: NumberConstructor;
    value: NumberConstructor;
    allowHalf: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    tooltips: PropType<string[]>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    character: import("vue-types").VueTypeValidableDef<any>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    direction: PropType<Direction>;
    id: StringConstructor;
    onChange: PropType<(value: number) => void>;
    onHoverChange: PropType<(value: number) => void>;
    'onUpdate:value': PropType<(value: number) => void>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onKeydown: PropType<KeyboardEventHandler>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    autofocus: boolean;
    allowClear: boolean;
    allowHalf: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
