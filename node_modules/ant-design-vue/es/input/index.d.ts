import type { Plugin } from 'vue';
import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';
import Password from './Password';
export type { InputProps, TextAreaProps } from './inputProps';
export { Group as InputGroup, Search as InputSearch, TextArea as Textarea, Password as InputPassword, };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            hidden: boolean;
            disabled: boolean;
            value: string | number;
            type: import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>;
            readonly: boolean;
            autofocus: boolean;
            loading: boolean;
            allowClear: boolean;
            bordered: boolean;
            lazy: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            inputPrefixCls: StringConstructor;
            defaultValue: import("vue-types").VueTypeDef<string | number>;
            value: {
                type: import("vue").PropType<string | number>;
                default: any;
            };
            placeholder: {
                type: import("vue").PropType<string | number>;
            };
            autocomplete: StringConstructor;
            type: {
                type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
                default: string;
            };
            name: StringConstructor;
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            readonly: {
                type: BooleanConstructor;
                default: any;
            };
            addonBefore: import("vue-types").VueTypeValidableDef<any>;
            addonAfter: import("vue-types").VueTypeValidableDef<any>;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            suffix: import("vue-types").VueTypeValidableDef<any>;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: NumberConstructor;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            showCount: {
                type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
            };
            htmlSize: NumberConstructor;
            onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
            onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
            'onUpdate:value': import("vue").PropType<(val: string) => void>;
            valueModifiers: ObjectConstructor;
            hidden: BooleanConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "hidden" | "disabled" | "value" | "type" | "readonly" | "autofocus" | "loading" | "allowClear" | "bordered" | "lazy">;
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
            id: StringConstructor;
            prefixCls: StringConstructor;
            inputPrefixCls: StringConstructor;
            defaultValue: import("vue-types").VueTypeDef<string | number>;
            value: {
                type: import("vue").PropType<string | number>;
                default: any;
            };
            placeholder: {
                type: import("vue").PropType<string | number>;
            };
            autocomplete: StringConstructor;
            type: {
                type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
                default: string;
            };
            name: StringConstructor;
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            readonly: {
                type: BooleanConstructor;
                default: any;
            };
            addonBefore: import("vue-types").VueTypeValidableDef<any>;
            addonAfter: import("vue-types").VueTypeValidableDef<any>;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            suffix: import("vue-types").VueTypeValidableDef<any>;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: NumberConstructor;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            showCount: {
                type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
            };
            htmlSize: NumberConstructor;
            onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
            onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
            'onUpdate:value': import("vue").PropType<(val: string) => void>;
            valueModifiers: ObjectConstructor;
            hidden: BooleanConstructor;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            hidden: boolean;
            disabled: boolean;
            value: string | number;
            type: import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>;
            readonly: boolean;
            autofocus: boolean;
            loading: boolean;
            allowClear: boolean;
            bordered: boolean;
            lazy: boolean;
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
        id: StringConstructor;
        prefixCls: StringConstructor;
        inputPrefixCls: StringConstructor;
        defaultValue: import("vue-types").VueTypeDef<string | number>;
        value: {
            type: import("vue").PropType<string | number>;
            default: any;
        };
        placeholder: {
            type: import("vue").PropType<string | number>;
        };
        autocomplete: StringConstructor;
        type: {
            type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
            default: string;
        };
        name: StringConstructor;
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        readonly: {
            type: BooleanConstructor;
            default: any;
        };
        addonBefore: import("vue-types").VueTypeValidableDef<any>;
        addonAfter: import("vue-types").VueTypeValidableDef<any>;
        prefix: import("vue-types").VueTypeValidableDef<any>;
        suffix: import("vue-types").VueTypeValidableDef<any>;
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: NumberConstructor;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        showCount: {
            type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
        };
        htmlSize: NumberConstructor;
        onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
        onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
        'onUpdate:value': import("vue").PropType<(val: string) => void>;
        valueModifiers: ObjectConstructor;
        hidden: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    inputPrefixCls: StringConstructor;
    defaultValue: import("vue-types").VueTypeDef<string | number>;
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
    autocomplete: StringConstructor;
    type: {
        type: import("vue").PropType<import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>>;
        default: string;
    };
    name: StringConstructor;
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    showCount: {
        type: import("vue").PropType<boolean | import("./inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    valueModifiers: ObjectConstructor;
    hidden: BooleanConstructor;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    hidden: boolean;
    disabled: boolean;
    value: string | number;
    type: import("../_util/type").LiteralUnion<"number" | "search" | "time" | "date" | "week" | "month" | "submit" | "hidden" | "button" | "image" | "text" | "reset" | "checkbox" | "radio" | "color" | "range" | "tel" | "url" | "email" | "datetime-local" | "file" | "password", string>;
    readonly: boolean;
    autofocus: boolean;
    loading: boolean;
    allowClear: boolean;
    bordered: boolean;
    lazy: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Group: typeof Group;
    readonly Search: typeof Search;
    readonly TextArea: typeof TextArea;
    readonly Password: typeof Password;
};
export default _default;
