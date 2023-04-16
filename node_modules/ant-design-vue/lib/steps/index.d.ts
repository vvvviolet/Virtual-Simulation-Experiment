import type { App, ExtractPropTypes, PropType } from 'vue';
import type { ProgressDotRender } from '../vc-steps/Steps';
import type { MouseEventHandler } from '../_util/EventInterface';
export declare const stepsProps: () => {
    prefixCls: StringConstructor;
    iconPrefix: StringConstructor;
    current: NumberConstructor;
    initial: NumberConstructor;
    percent: NumberConstructor;
    responsive: {
        type: BooleanConstructor;
        default: any;
    };
    labelPlacement: PropType<"horizontal" | "vertical">;
    status: PropType<"wait" | "error" | "finish" | "process">;
    size: PropType<"default" | "small">;
    direction: PropType<"horizontal" | "vertical">;
    progressDot: {
        type: PropType<boolean | ProgressDotRender>;
        default: boolean | ProgressDotRender;
    };
    type: PropType<"default" | "navigation">;
    onChange: PropType<(current: number) => void>;
    'onUpdate:current': PropType<(current: number) => void>;
};
export declare const stepProps: () => {
    description: import("vue-types").VueTypeValidableDef<any>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    status: PropType<"wait" | "error" | "finish" | "process">;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    onClick: PropType<MouseEventHandler>;
};
export declare type StepsProps = Partial<ExtractPropTypes<ReturnType<typeof stepsProps>>>;
export declare type StepProps = Partial<ExtractPropTypes<ReturnType<typeof stepProps>>>;
export declare const Step: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    wrapperStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    itemWidth: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    status: StringConstructor;
    iconPrefix: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    adjustMarginRight: StringConstructor;
    stepNumber: NumberConstructor;
    stepIndex: NumberConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    progressDot: import("vue-types").VueTypeDef<any>;
    tailContent: import("vue-types").VueTypeValidableDef<any>;
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    onClick: FunctionConstructor;
    onStepClick: FunctionConstructor;
    stepIcon: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "stepClick")[], "click" | "stepClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    wrapperStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    itemWidth: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    status: StringConstructor;
    iconPrefix: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    adjustMarginRight: StringConstructor;
    stepNumber: NumberConstructor;
    stepIndex: NumberConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    progressDot: import("vue-types").VueTypeDef<any>;
    tailContent: import("vue-types").VueTypeValidableDef<any>;
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    onClick: FunctionConstructor;
    onStepClick: FunctionConstructor;
    stepIcon: FunctionConstructor;
}>> & {
    onClick?: (...args: any[]) => any;
    onStepClick?: (...args: any[]) => any;
}, {
    active: boolean;
    disabled: boolean;
    wrapperStyle: import("vue").CSSProperties;
}>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            responsive: boolean;
            progressDot: boolean | ProgressDotRender;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            iconPrefix: StringConstructor;
            current: NumberConstructor;
            initial: NumberConstructor;
            percent: NumberConstructor;
            responsive: {
                type: BooleanConstructor;
                default: any;
            };
            labelPlacement: PropType<"horizontal" | "vertical">;
            status: PropType<"wait" | "error" | "finish" | "process">;
            size: PropType<"default" | "small">;
            direction: PropType<"horizontal" | "vertical">;
            progressDot: {
                type: PropType<boolean | ProgressDotRender>;
                default: boolean | ProgressDotRender;
            };
            type: PropType<"default" | "navigation">;
            onChange: PropType<(current: number) => void>;
            'onUpdate:current': PropType<(current: number) => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "responsive" | "progressDot">;
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
            iconPrefix: StringConstructor;
            current: NumberConstructor;
            initial: NumberConstructor;
            percent: NumberConstructor;
            responsive: {
                type: BooleanConstructor;
                default: any;
            };
            labelPlacement: PropType<"horizontal" | "vertical">;
            status: PropType<"wait" | "error" | "finish" | "process">;
            size: PropType<"default" | "small">;
            direction: PropType<"horizontal" | "vertical">;
            progressDot: {
                type: PropType<boolean | ProgressDotRender>;
                default: boolean | ProgressDotRender;
            };
            type: PropType<"default" | "navigation">;
            onChange: PropType<(current: number) => void>;
            'onUpdate:current': PropType<(current: number) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            responsive: boolean;
            progressDot: boolean | ProgressDotRender;
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
        iconPrefix: StringConstructor;
        current: NumberConstructor;
        initial: NumberConstructor;
        percent: NumberConstructor;
        responsive: {
            type: BooleanConstructor;
            default: any;
        };
        labelPlacement: PropType<"horizontal" | "vertical">;
        status: PropType<"wait" | "error" | "finish" | "process">;
        size: PropType<"default" | "small">;
        direction: PropType<"horizontal" | "vertical">;
        progressDot: {
            type: PropType<boolean | ProgressDotRender>;
            default: boolean | ProgressDotRender;
        };
        type: PropType<"default" | "navigation">;
        onChange: PropType<(current: number) => void>;
        'onUpdate:current': PropType<(current: number) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    iconPrefix: StringConstructor;
    current: NumberConstructor;
    initial: NumberConstructor;
    percent: NumberConstructor;
    responsive: {
        type: BooleanConstructor;
        default: any;
    };
    labelPlacement: PropType<"horizontal" | "vertical">;
    status: PropType<"wait" | "error" | "finish" | "process">;
    size: PropType<"default" | "small">;
    direction: PropType<"horizontal" | "vertical">;
    progressDot: {
        type: PropType<boolean | ProgressDotRender>;
        default: boolean | ProgressDotRender;
    };
    type: PropType<"default" | "navigation">;
    onChange: PropType<(current: number) => void>;
    'onUpdate:current': PropType<(current: number) => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    responsive: boolean;
    progressDot: boolean | ProgressDotRender;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Step: import("vue").DefineComponent<{
        prefixCls: StringConstructor;
        wrapperStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        itemWidth: StringConstructor;
        active: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        status: StringConstructor;
        iconPrefix: StringConstructor;
        icon: import("vue-types").VueTypeValidableDef<any>;
        adjustMarginRight: StringConstructor;
        stepNumber: NumberConstructor;
        stepIndex: NumberConstructor;
        description: import("vue-types").VueTypeValidableDef<any>;
        title: import("vue-types").VueTypeValidableDef<any>;
        subTitle: import("vue-types").VueTypeValidableDef<any>;
        progressDot: import("vue-types").VueTypeDef<any>;
        tailContent: import("vue-types").VueTypeValidableDef<any>;
        icons: import("vue-types").VueTypeLooseShape<{
            finish: any;
            error: any;
        }>;
        onClick: FunctionConstructor;
        onStepClick: FunctionConstructor;
        stepIcon: FunctionConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "stepClick")[], "click" | "stepClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
        prefixCls: StringConstructor;
        wrapperStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        itemWidth: StringConstructor;
        active: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        status: StringConstructor;
        iconPrefix: StringConstructor;
        icon: import("vue-types").VueTypeValidableDef<any>;
        adjustMarginRight: StringConstructor;
        stepNumber: NumberConstructor;
        stepIndex: NumberConstructor;
        description: import("vue-types").VueTypeValidableDef<any>;
        title: import("vue-types").VueTypeValidableDef<any>;
        subTitle: import("vue-types").VueTypeValidableDef<any>;
        progressDot: import("vue-types").VueTypeDef<any>;
        tailContent: import("vue-types").VueTypeValidableDef<any>;
        icons: import("vue-types").VueTypeLooseShape<{
            finish: any;
            error: any;
        }>;
        onClick: FunctionConstructor;
        onStepClick: FunctionConstructor;
        stepIcon: FunctionConstructor;
    }>> & {
        onClick?: (...args: any[]) => any;
        onStepClick?: (...args: any[]) => any;
    }, {
        active: boolean;
        disabled: boolean;
        wrapperStyle: import("vue").CSSProperties;
    }>;
    install: (app: App) => App<any>;
};
export default _default;
