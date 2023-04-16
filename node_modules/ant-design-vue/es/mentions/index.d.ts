import type { App, PropType, ExtractPropTypes } from 'vue';
import type { KeyboardEventHandler } from '../_util/EventInterface';
interface MentionsConfig {
    prefix?: string | string[];
    split?: string;
}
export interface MentionsOptionProps {
    value: string;
    disabled?: boolean;
    label?: string | number | ((o: MentionsOptionProps) => any);
    [key: string]: any;
}
interface MentionsEntity {
    prefix: string;
    value: string;
}
export declare type MentionPlacement = 'top' | 'bottom';
export declare const mentionsProps: () => {
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onSelect: {
        type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
    };
    onChange: {
        type: PropType<(text: string) => void>;
    };
    onPressenter: {
        type: PropType<KeyboardEventHandler>;
    };
    'onUpdate:value': {
        type: PropType<(text: string) => void>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    prefix: import("vue-types").VueTypeDef<string | string[]>;
    prefixCls: StringConstructor;
    value: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    split: StringConstructor;
    transitionName: StringConstructor;
    placement: import("vue-types").VueTypeDef<"bottom" | "top">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    filterOption: {
        type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
    };
    validateSearch: FunctionConstructor;
    getPopupContainer: {
        type: PropType<() => HTMLElement>;
    };
    options: {
        type: PropType<Partial<ExtractPropTypes<{
            value: StringConstructor;
            disabled: BooleanConstructor;
            label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
        }>>>;
        default: () => any;
    };
    rows: (StringConstructor | NumberConstructor)[];
    direction: {
        type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
    };
};
export declare type MentionsProps = Partial<ExtractPropTypes<ReturnType<typeof mentionsProps>>>;
export declare const MentionsOption: import("vue").DefineComponent<{
    value: StringConstructor;
    disabled: BooleanConstructor;
    label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    value: StringConstructor;
    disabled: BooleanConstructor;
    label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
}>>, {
    disabled: boolean;
}>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            autofocus: boolean;
            options: any;
            loading: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onSelect: {
                type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
            };
            onChange: {
                type: PropType<(text: string) => void>;
            };
            onPressenter: {
                type: PropType<KeyboardEventHandler>;
            };
            'onUpdate:value': {
                type: PropType<(text: string) => void>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            defaultValue: StringConstructor;
            id: StringConstructor;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            prefix: import("vue-types").VueTypeDef<string | string[]>;
            prefixCls: StringConstructor;
            value: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            split: StringConstructor;
            transitionName: StringConstructor;
            placement: import("vue-types").VueTypeDef<"bottom" | "top">;
            character: import("vue-types").VueTypeValidableDef<any>;
            characterRender: FunctionConstructor;
            filterOption: {
                type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
            };
            validateSearch: FunctionConstructor;
            getPopupContainer: {
                type: PropType<() => HTMLElement>;
            };
            options: {
                type: PropType<Partial<ExtractPropTypes<{
                    value: StringConstructor;
                    disabled: BooleanConstructor;
                    label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
                }>>>;
                default: () => any;
            };
            rows: (StringConstructor | NumberConstructor)[];
            direction: {
                type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "autofocus" | "options" | "loading">;
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
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onSelect: {
                type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
            };
            onChange: {
                type: PropType<(text: string) => void>;
            };
            onPressenter: {
                type: PropType<KeyboardEventHandler>;
            };
            'onUpdate:value': {
                type: PropType<(text: string) => void>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            defaultValue: StringConstructor;
            id: StringConstructor;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            prefix: import("vue-types").VueTypeDef<string | string[]>;
            prefixCls: StringConstructor;
            value: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            split: StringConstructor;
            transitionName: StringConstructor;
            placement: import("vue-types").VueTypeDef<"bottom" | "top">;
            character: import("vue-types").VueTypeValidableDef<any>;
            characterRender: FunctionConstructor;
            filterOption: {
                type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
            };
            validateSearch: FunctionConstructor;
            getPopupContainer: {
                type: PropType<() => HTMLElement>;
            };
            options: {
                type: PropType<Partial<ExtractPropTypes<{
                    value: StringConstructor;
                    disabled: BooleanConstructor;
                    label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
                }>>>;
                default: () => any;
            };
            rows: (StringConstructor | NumberConstructor)[];
            direction: {
                type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            autofocus: boolean;
            options: any;
            loading: boolean;
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
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onSelect: {
            type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
        };
        onChange: {
            type: PropType<(text: string) => void>;
        };
        onPressenter: {
            type: PropType<KeyboardEventHandler>;
        };
        'onUpdate:value': {
            type: PropType<(text: string) => void>;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        defaultValue: StringConstructor;
        id: StringConstructor;
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        prefix: import("vue-types").VueTypeDef<string | string[]>;
        prefixCls: StringConstructor;
        value: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        split: StringConstructor;
        transitionName: StringConstructor;
        placement: import("vue-types").VueTypeDef<"bottom" | "top">;
        character: import("vue-types").VueTypeValidableDef<any>;
        characterRender: FunctionConstructor;
        filterOption: {
            type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
        };
        validateSearch: FunctionConstructor;
        getPopupContainer: {
            type: PropType<() => HTMLElement>;
        };
        options: {
            type: PropType<Partial<ExtractPropTypes<{
                value: StringConstructor;
                disabled: BooleanConstructor;
                label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
            }>>>;
            default: () => any;
        };
        rows: (StringConstructor | NumberConstructor)[];
        direction: {
            type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onSelect: {
        type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
    };
    onChange: {
        type: PropType<(text: string) => void>;
    };
    onPressenter: {
        type: PropType<KeyboardEventHandler>;
    };
    'onUpdate:value': {
        type: PropType<(text: string) => void>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    prefix: import("vue-types").VueTypeDef<string | string[]>;
    prefixCls: StringConstructor;
    value: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    split: StringConstructor;
    transitionName: StringConstructor;
    placement: import("vue-types").VueTypeDef<"bottom" | "top">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    filterOption: {
        type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
    };
    validateSearch: FunctionConstructor;
    getPopupContainer: {
        type: PropType<() => HTMLElement>;
    };
    options: {
        type: PropType<Partial<ExtractPropTypes<{
            value: StringConstructor;
            disabled: BooleanConstructor;
            label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
        }>>>;
        default: () => any;
    };
    rows: (StringConstructor | NumberConstructor)[];
    direction: {
        type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    autofocus: boolean;
    options: any;
    loading: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Option: import("vue").DefineComponent<{
        value: StringConstructor;
        disabled: BooleanConstructor;
        label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
        value: StringConstructor;
        disabled: BooleanConstructor;
        label: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    }>>, {
        disabled: boolean;
    }>;
    getMentions: (value?: string, config?: MentionsConfig) => MentionsEntity[];
    install: (app: App) => App<any>;
};
export default _default;
