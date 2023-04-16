import type { CSSProperties, VNodeTypes, PropType, ExtractPropTypes } from 'vue';
import type { VueNode } from '../_util/type';
import type { TooltipPlacement } from '../tooltip/Tooltip';
import type { FocusEventHandler } from '../_util/EventInterface';
export declare type SliderValue = number | [number, number];
export interface SliderMarks {
    [key: number]: VueNode | {
        style: CSSProperties;
        label: any;
    };
}
interface HandleGeneratorInfo {
    value?: number;
    dragging?: boolean;
    index: number;
}
export interface SliderRange {
    draggableTrack?: boolean;
}
export declare type HandleGeneratorFn = (config: {
    tooltipPrefixCls?: string;
    prefixCls?: string;
    info: HandleGeneratorInfo;
}) => VNodeTypes;
declare type Value = [number, number] | number;
export declare const sliderProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    tooltipPrefixCls: StringConstructor;
    range: {
        type: PropType<boolean | SliderRange>;
        default: any;
    };
    reverse: {
        type: BooleanConstructor;
        default: any;
    };
    min: NumberConstructor;
    max: NumberConstructor;
    step: {
        type: PropType<number>;
    };
    marks: {
        type: PropType<SliderMarks>;
    };
    dots: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: PropType<Value>;
    };
    defaultValue: {
        type: PropType<Value>;
    };
    included: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    vertical: {
        type: BooleanConstructor;
        default: any;
    };
    tipFormatter: {
        type: PropType<(value?: number) => any>;
        default: () => (value: number) => string;
    };
    tooltipVisible: {
        type: BooleanConstructor;
        default: any;
    };
    tooltipPlacement: {
        type: PropType<TooltipPlacement>;
    };
    getTooltipPopupContainer: {
        type: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    handleStyle: {
        type: PropType<CSSProperties | CSSProperties[]>;
    };
    trackStyle: {
        type: PropType<CSSProperties | CSSProperties[]>;
    };
    onChange: {
        type: PropType<(value: Value) => void>;
    };
    onAfterChange: {
        type: PropType<(value: Value) => void>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
    'onUpdate:value': {
        type: PropType<(value: Value) => void>;
    };
};
export declare type SliderProps = Partial<ExtractPropTypes<ReturnType<typeof sliderProps>>>;
export declare type Visibles = {
    [index: number]: boolean;
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            vertical: boolean;
            range: any;
            disabled: boolean;
            autofocus: boolean;
            included: boolean;
            dots: boolean;
            tipFormatter: (value?: number) => any;
            tooltipVisible: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            tooltipPrefixCls: StringConstructor;
            range: {
                type: PropType<boolean | SliderRange>;
                default: any;
            };
            reverse: {
                type: BooleanConstructor;
                default: any;
            };
            min: NumberConstructor;
            max: NumberConstructor;
            step: {
                type: PropType<number>;
            };
            marks: {
                type: PropType<SliderMarks>;
            };
            dots: {
                type: BooleanConstructor;
                default: any;
            };
            value: {
                type: PropType<Value>;
            };
            defaultValue: {
                type: PropType<Value>;
            };
            included: {
                type: BooleanConstructor;
                default: any;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            vertical: {
                type: BooleanConstructor;
                default: any;
            };
            tipFormatter: {
                type: PropType<(value?: number) => any>;
                default: () => (value: number) => string;
            };
            tooltipVisible: {
                type: BooleanConstructor;
                default: any;
            };
            tooltipPlacement: {
                type: PropType<TooltipPlacement>;
            };
            getTooltipPopupContainer: {
                type: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            handleStyle: {
                type: PropType<CSSProperties | CSSProperties[]>;
            };
            trackStyle: {
                type: PropType<CSSProperties | CSSProperties[]>;
            };
            onChange: {
                type: PropType<(value: Value) => void>;
            };
            onAfterChange: {
                type: PropType<(value: Value) => void>;
            };
            onFocus: {
                type: PropType<FocusEventHandler>;
            };
            onBlur: {
                type: PropType<FocusEventHandler>;
            };
            'onUpdate:value': {
                type: PropType<(value: Value) => void>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "vertical" | "range" | "disabled" | "autofocus" | "included" | "dots" | "tipFormatter" | "tooltipVisible">;
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
            id: StringConstructor;
            prefixCls: StringConstructor;
            tooltipPrefixCls: StringConstructor;
            range: {
                type: PropType<boolean | SliderRange>;
                default: any;
            };
            reverse: {
                type: BooleanConstructor;
                default: any;
            };
            min: NumberConstructor;
            max: NumberConstructor;
            step: {
                type: PropType<number>;
            };
            marks: {
                type: PropType<SliderMarks>;
            };
            dots: {
                type: BooleanConstructor;
                default: any;
            };
            value: {
                type: PropType<Value>;
            };
            defaultValue: {
                type: PropType<Value>;
            };
            included: {
                type: BooleanConstructor;
                default: any;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            vertical: {
                type: BooleanConstructor;
                default: any;
            };
            tipFormatter: {
                type: PropType<(value?: number) => any>;
                default: () => (value: number) => string;
            };
            tooltipVisible: {
                type: BooleanConstructor;
                default: any;
            };
            tooltipPlacement: {
                type: PropType<TooltipPlacement>;
            };
            getTooltipPopupContainer: {
                type: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            handleStyle: {
                type: PropType<CSSProperties | CSSProperties[]>;
            };
            trackStyle: {
                type: PropType<CSSProperties | CSSProperties[]>;
            };
            onChange: {
                type: PropType<(value: Value) => void>;
            };
            onAfterChange: {
                type: PropType<(value: Value) => void>;
            };
            onFocus: {
                type: PropType<FocusEventHandler>;
            };
            onBlur: {
                type: PropType<FocusEventHandler>;
            };
            'onUpdate:value': {
                type: PropType<(value: Value) => void>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            reverse: boolean;
            vertical: boolean;
            range: any;
            disabled: boolean;
            autofocus: boolean;
            included: boolean;
            dots: boolean;
            tipFormatter: (value?: number) => any;
            tooltipVisible: boolean;
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
        id: StringConstructor;
        prefixCls: StringConstructor;
        tooltipPrefixCls: StringConstructor;
        range: {
            type: PropType<boolean | SliderRange>;
            default: any;
        };
        reverse: {
            type: BooleanConstructor;
            default: any;
        };
        min: NumberConstructor;
        max: NumberConstructor;
        step: {
            type: PropType<number>;
        };
        marks: {
            type: PropType<SliderMarks>;
        };
        dots: {
            type: BooleanConstructor;
            default: any;
        };
        value: {
            type: PropType<Value>;
        };
        defaultValue: {
            type: PropType<Value>;
        };
        included: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        vertical: {
            type: BooleanConstructor;
            default: any;
        };
        tipFormatter: {
            type: PropType<(value?: number) => any>;
            default: () => (value: number) => string;
        };
        tooltipVisible: {
            type: BooleanConstructor;
            default: any;
        };
        tooltipPlacement: {
            type: PropType<TooltipPlacement>;
        };
        getTooltipPopupContainer: {
            type: PropType<(triggerNode: HTMLElement) => HTMLElement>;
        };
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        handleStyle: {
            type: PropType<CSSProperties | CSSProperties[]>;
        };
        trackStyle: {
            type: PropType<CSSProperties | CSSProperties[]>;
        };
        onChange: {
            type: PropType<(value: Value) => void>;
        };
        onAfterChange: {
            type: PropType<(value: Value) => void>;
        };
        onFocus: {
            type: PropType<FocusEventHandler>;
        };
        onBlur: {
            type: PropType<FocusEventHandler>;
        };
        'onUpdate:value': {
            type: PropType<(value: Value) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    tooltipPrefixCls: StringConstructor;
    range: {
        type: PropType<boolean | SliderRange>;
        default: any;
    };
    reverse: {
        type: BooleanConstructor;
        default: any;
    };
    min: NumberConstructor;
    max: NumberConstructor;
    step: {
        type: PropType<number>;
    };
    marks: {
        type: PropType<SliderMarks>;
    };
    dots: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: PropType<Value>;
    };
    defaultValue: {
        type: PropType<Value>;
    };
    included: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    vertical: {
        type: BooleanConstructor;
        default: any;
    };
    tipFormatter: {
        type: PropType<(value?: number) => any>;
        default: () => (value: number) => string;
    };
    tooltipVisible: {
        type: BooleanConstructor;
        default: any;
    };
    tooltipPlacement: {
        type: PropType<TooltipPlacement>;
    };
    getTooltipPopupContainer: {
        type: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    handleStyle: {
        type: PropType<CSSProperties | CSSProperties[]>;
    };
    trackStyle: {
        type: PropType<CSSProperties | CSSProperties[]>;
    };
    onChange: {
        type: PropType<(value: Value) => void>;
    };
    onAfterChange: {
        type: PropType<(value: Value) => void>;
    };
    onFocus: {
        type: PropType<FocusEventHandler>;
    };
    onBlur: {
        type: PropType<FocusEventHandler>;
    };
    'onUpdate:value': {
        type: PropType<(value: Value) => void>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    reverse: boolean;
    vertical: boolean;
    range: any;
    disabled: boolean;
    autofocus: boolean;
    included: boolean;
    dots: boolean;
    tipFormatter: (value?: number) => any;
    tooltipVisible: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
