import type { Plugin } from 'vue';
import Group from './Group';
import Button from './RadioButton';
export type { RadioProps } from './Radio';
export type { RadioGroupProps } from './Group';
export type { RadioChangeEventTarget, RadioChangeEvent } from './interface';
export { Button, Group, Button as RadioButton, Group as RadioGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            checked: boolean;
            autofocus: boolean;
            isGroup: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            onChange: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
            onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
            'onUpdate:value': import("vue").PropType<(checked: boolean) => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "checked" | "autofocus" | "isGroup">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            onChange: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
            onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
            'onUpdate:value': import("vue").PropType<(checked: boolean) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            checked: boolean;
            autofocus: boolean;
            isGroup: boolean;
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
    } & Readonly<import("vue").ExtractPropTypes<{
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
        onChange: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
        onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
        'onUpdate:value': import("vue").PropType<(checked: boolean) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    onChange: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
    onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
    'onUpdate:value': import("vue").PropType<(checked: boolean) => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    checked: boolean;
    autofocus: boolean;
    isGroup: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof Group;
    readonly Button: typeof Button;
};
export default _default;
