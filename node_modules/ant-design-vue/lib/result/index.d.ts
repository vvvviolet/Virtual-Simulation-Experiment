import type { Plugin, ExtractPropTypes, PropType } from 'vue';
import noFound from './noFound';
import serverError from './serverError';
import unauthorized from './unauthorized';
export declare const IconMap: {
    success: import("@ant-design/icons-vue/lib/icons/CheckCircleFilled").CheckCircleFilledIconType;
    error: import("@ant-design/icons-vue/lib/icons/CloseCircleFilled").CloseCircleFilledIconType;
    info: import("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled").ExclamationCircleFilledIconType;
    warning: import("@ant-design/icons-vue/lib/icons/WarningFilled").WarningFilledIconType;
};
export declare const ExceptionMap: {
    '404': () => JSX.Element;
    '500': () => JSX.Element;
    '403': () => JSX.Element;
};
export declare type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export declare type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;
export declare const resultProps: () => {
    prefixCls: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    status: {
        type: PropType<ResultStatusType>;
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
};
export declare type ResultProps = Partial<ExtractPropTypes<ReturnType<typeof resultProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            status: ResultStatusType;
        }> & Omit<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            icon: import("vue-types").VueTypeValidableDef<any>;
            status: {
                type: PropType<ResultStatusType>;
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            subTitle: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "status">;
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
            icon: import("vue-types").VueTypeValidableDef<any>;
            status: {
                type: PropType<ResultStatusType>;
                default: string;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            subTitle: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            status: ResultStatusType;
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
        icon: import("vue-types").VueTypeValidableDef<any>;
        status: {
            type: PropType<ResultStatusType>;
            default: string;
        };
        title: import("vue-types").VueTypeValidableDef<any>;
        subTitle: import("vue-types").VueTypeValidableDef<any>;
        extra: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    status: {
        type: PropType<ResultStatusType>;
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    subTitle: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    status: ResultStatusType;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly PRESENTED_IMAGE_403: typeof unauthorized;
    readonly PRESENTED_IMAGE_404: typeof noFound;
    readonly PRESENTED_IMAGE_500: typeof serverError;
};
export default _default;
