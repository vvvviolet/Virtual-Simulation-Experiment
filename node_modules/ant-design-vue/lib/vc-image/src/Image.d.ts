import type { CSSProperties, PropType } from 'vue';
import type { MouseEventHandler } from '../../_util/EventInterface';
import PreviewGroup from './PreviewGroup';
import type { IDialogChildProps } from '../../vc-dialog/IDialogPropTypes';
export declare type GetContainer = string | HTMLElement | (() => HTMLElement);
import type { PreviewProps } from './Preview';
export declare type ImagePreviewType = Omit<IDialogChildProps, 'mask' | 'visible' | 'closable' | 'prefixCls' | 'onClose' | 'afterClose' | 'wrapClassName'> & {
    src?: string;
    visible?: boolean;
    onVisibleChange?: (value: boolean, prevValue: boolean) => void;
    getContainer?: GetContainer | false;
    maskClassName?: string;
    icons?: PreviewProps['icons'];
};
export declare const imageProps: () => {
    src: StringConstructor;
    wrapperClassName: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    rootClassName: StringConstructor;
    prefixCls: StringConstructor;
    previewPrefixCls: StringConstructor;
    previewMask: {
        type: PropType<false | (() => any)>;
        default: any;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    fallback: StringConstructor;
    preview: {
        type: PropType<boolean | ImagePreviewType>;
        default: boolean | ImagePreviewType;
    };
    onClick: {
        type: PropType<MouseEventHandler>;
    };
    onError: {
        type: PropType<OnErrorEventHandlerNonNull>;
    };
};
export declare type ImageProps = Partial<ReturnType<typeof imageProps>>;
export declare type ImageStatus = 'normal' | 'error' | 'loading';
export declare const mergeDefaultValue: <T extends object>(obj: T, defaultValues: object) => T;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            preview: boolean | ImagePreviewType;
            wrapperStyle: CSSProperties;
            previewMask: false | (() => any);
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            src: StringConstructor;
            wrapperClassName: StringConstructor;
            wrapperStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            rootClassName: StringConstructor;
            prefixCls: StringConstructor;
            previewPrefixCls: StringConstructor;
            previewMask: {
                type: PropType<false | (() => any)>;
                default: any;
            };
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            fallback: StringConstructor;
            preview: {
                type: PropType<boolean | ImagePreviewType>;
                default: boolean | ImagePreviewType;
            };
            onClick: {
                type: PropType<MouseEventHandler>;
            };
            onError: {
                type: PropType<OnErrorEventHandlerNonNull>;
            };
        }>> & {
            onError?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "preview" | "wrapperStyle" | "previewMask">;
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
        $emit: (event: "click" | "error", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            src: StringConstructor;
            wrapperClassName: StringConstructor;
            wrapperStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            rootClassName: StringConstructor;
            prefixCls: StringConstructor;
            previewPrefixCls: StringConstructor;
            previewMask: {
                type: PropType<false | (() => any)>;
                default: any;
            };
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            fallback: StringConstructor;
            preview: {
                type: PropType<boolean | ImagePreviewType>;
                default: boolean | ImagePreviewType;
            };
            onClick: {
                type: PropType<MouseEventHandler>;
            };
            onError: {
                type: PropType<OnErrorEventHandlerNonNull>;
            };
        }>> & {
            onError?: (...args: any[]) => any;
            onClick?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "error")[], string, {
            preview: boolean | ImagePreviewType;
            wrapperStyle: CSSProperties;
            previewMask: false | (() => any);
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
        src: StringConstructor;
        wrapperClassName: StringConstructor;
        wrapperStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        rootClassName: StringConstructor;
        prefixCls: StringConstructor;
        previewPrefixCls: StringConstructor;
        previewMask: {
            type: PropType<false | (() => any)>;
            default: any;
        };
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        fallback: StringConstructor;
        preview: {
            type: PropType<boolean | ImagePreviewType>;
            default: boolean | ImagePreviewType;
        };
        onClick: {
            type: PropType<MouseEventHandler>;
        };
        onError: {
            type: PropType<OnErrorEventHandlerNonNull>;
        };
    }>> & {
        onError?: (...args: any[]) => any;
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    wrapperClassName: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    rootClassName: StringConstructor;
    prefixCls: StringConstructor;
    previewPrefixCls: StringConstructor;
    previewMask: {
        type: PropType<false | (() => any)>;
        default: any;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    fallback: StringConstructor;
    preview: {
        type: PropType<boolean | ImagePreviewType>;
        default: boolean | ImagePreviewType;
    };
    onClick: {
        type: PropType<MouseEventHandler>;
    };
    onError: {
        type: PropType<OnErrorEventHandlerNonNull>;
    };
}>> & {
    onError?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "error")[], "click" | "error", {
    preview: boolean | ImagePreviewType;
    wrapperStyle: CSSProperties;
    previewMask: false | (() => any);
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly PreviewGroup: typeof PreviewGroup;
};
export default _default;
