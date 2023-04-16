import type { Plugin } from 'vue';
import CheckboxGroup from './Group';
export type { CheckboxProps, CheckboxGroupProps, CheckboxOptionType } from './interface';
export { checkboxProps, checkboxGroupProps } from './interface';
export { CheckboxGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            type: string;
            defaultChecked: boolean;
            checked: boolean;
            autofocus: boolean;
            indeterminate: boolean;
            isGroup: boolean;
            skipGroup: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            onChange: import("vue").PropType<(e: import("./interface").CheckboxChangeEvent) => void>;
            'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
            onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            skipGroup: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "type" | "defaultChecked" | "checked" | "autofocus" | "indeterminate" | "isGroup" | "skipGroup">;
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
            onChange: import("vue").PropType<(e: import("./interface").CheckboxChangeEvent) => void>;
            'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
            onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            skipGroup: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            type: string;
            defaultChecked: boolean;
            checked: boolean;
            autofocus: boolean;
            indeterminate: boolean;
            isGroup: boolean;
            skipGroup: boolean;
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
        onChange: import("vue").PropType<(e: import("./interface").CheckboxChangeEvent) => void>;
        'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
        onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        skipGroup: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    onChange: import("vue").PropType<(e: import("./interface").CheckboxChangeEvent) => void>;
    'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
    onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    skipGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    type: string;
    defaultChecked: boolean;
    checked: boolean;
    autofocus: boolean;
    indeterminate: boolean;
    isGroup: boolean;
    skipGroup: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof CheckboxGroup;
};
export default _default;
