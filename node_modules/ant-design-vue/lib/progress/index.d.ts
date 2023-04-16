export type { ProgressProps } from './props';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            success: import("./props").SuccessProps;
            showInfo: boolean;
            strokeColor: string | import("./props").ProgressGradient;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
            percent: NumberConstructor;
            format: {
                type: import("vue").PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
            };
            status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
            showInfo: {
                type: BooleanConstructor;
                default: any;
            };
            strokeWidth: NumberConstructor;
            strokeLinecap: import("vue").PropType<"round" | "butt" | "square">;
            strokeColor: {
                type: import("vue").PropType<string | import("./props").ProgressGradient>;
                default: string | import("./props").ProgressGradient;
            };
            trailColor: StringConstructor;
            width: NumberConstructor;
            success: {
                type: import("vue").PropType<import("./props").SuccessProps>;
                default: () => import("./props").SuccessProps;
            };
            gapDegree: NumberConstructor;
            gapPosition: import("vue").PropType<"left" | "right" | "bottom" | "top">;
            size: import("vue-types").VueTypeDef<"default" | "small">;
            steps: NumberConstructor;
            successPercent: NumberConstructor;
            title: StringConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "success" | "showInfo" | "strokeColor">;
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
            type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
            percent: NumberConstructor;
            format: {
                type: import("vue").PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
            };
            status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
            showInfo: {
                type: BooleanConstructor;
                default: any;
            };
            strokeWidth: NumberConstructor;
            strokeLinecap: import("vue").PropType<"round" | "butt" | "square">;
            strokeColor: {
                type: import("vue").PropType<string | import("./props").ProgressGradient>;
                default: string | import("./props").ProgressGradient;
            };
            trailColor: StringConstructor;
            width: NumberConstructor;
            success: {
                type: import("vue").PropType<import("./props").SuccessProps>;
                default: () => import("./props").SuccessProps;
            };
            gapDegree: NumberConstructor;
            gapPosition: import("vue").PropType<"left" | "right" | "bottom" | "top">;
            size: import("vue-types").VueTypeDef<"default" | "small">;
            steps: NumberConstructor;
            successPercent: NumberConstructor;
            title: StringConstructor;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            success: import("./props").SuccessProps;
            showInfo: boolean;
            strokeColor: string | import("./props").ProgressGradient;
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
        type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
        percent: NumberConstructor;
        format: {
            type: import("vue").PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
        };
        status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
        showInfo: {
            type: BooleanConstructor;
            default: any;
        };
        strokeWidth: NumberConstructor;
        strokeLinecap: import("vue").PropType<"round" | "butt" | "square">;
        strokeColor: {
            type: import("vue").PropType<string | import("./props").ProgressGradient>;
            default: string | import("./props").ProgressGradient;
        };
        trailColor: StringConstructor;
        width: NumberConstructor;
        success: {
            type: import("vue").PropType<import("./props").SuccessProps>;
            default: () => import("./props").SuccessProps;
        };
        gapDegree: NumberConstructor;
        gapPosition: import("vue").PropType<"left" | "right" | "bottom" | "top">;
        size: import("vue-types").VueTypeDef<"default" | "small">;
        steps: NumberConstructor;
        successPercent: NumberConstructor;
        title: StringConstructor;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    type: import("vue-types").VueTypeDef<"circle" | "line" | "dashboard">;
    percent: NumberConstructor;
    format: {
        type: import("vue").PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
    };
    status: import("vue-types").VueTypeDef<"normal" | "active" | "success" | "exception">;
    showInfo: {
        type: BooleanConstructor;
        default: any;
    };
    strokeWidth: NumberConstructor;
    strokeLinecap: import("vue").PropType<"round" | "butt" | "square">;
    strokeColor: {
        type: import("vue").PropType<string | import("./props").ProgressGradient>;
        default: string | import("./props").ProgressGradient;
    };
    trailColor: StringConstructor;
    width: NumberConstructor;
    success: {
        type: import("vue").PropType<import("./props").SuccessProps>;
        default: () => import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: import("vue").PropType<"left" | "right" | "bottom" | "top">;
    size: import("vue-types").VueTypeDef<"default" | "small">;
    steps: NumberConstructor;
    successPercent: NumberConstructor;
    title: StringConstructor;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    success: import("./props").SuccessProps;
    showInfo: boolean;
    strokeColor: string | import("./props").ProgressGradient;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
