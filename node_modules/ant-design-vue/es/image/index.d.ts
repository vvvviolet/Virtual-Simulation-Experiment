import type { ExtractPropTypes, ImgHTMLAttributes, Plugin } from 'vue';
import { imageProps } from '../vc-image/src/Image';
import PreviewGroup from './PreviewGroup';
export declare type ImageProps = Partial<ExtractPropTypes<ReturnType<typeof imageProps>> & Omit<ImgHTMLAttributes, 'placeholder' | 'onClick'>>;
export { imageProps };
export { PreviewGroup as ImagePreviewGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            class?: any;
            placeholder?: any;
            inlist?: any;
        }> & Omit<Readonly<Partial<{
            preview: boolean | import("../vc-image").ImagePreviewType;
            wrapperStyle: import("vue").CSSProperties;
        } & {
            onError?: OnErrorEventHandlerNonNull;
            onClick?: import("../_util/EventInterface").MouseEventHandler;
            prefixCls?: string;
            placeholder?: any;
            wrapperClassName?: string;
            src?: string;
            rootClassName?: string;
            previewPrefixCls?: string;
            previewMask?: false | (() => any);
            fallback?: string;
        } & Omit<ImgHTMLAttributes, "onClick" | "placeholder">>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "class" | "placeholder" | "inlist">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<Partial<{
            preview: boolean | import("../vc-image").ImagePreviewType;
            wrapperStyle: import("vue").CSSProperties;
        } & {
            onError?: OnErrorEventHandlerNonNull;
            onClick?: import("../_util/EventInterface").MouseEventHandler;
            prefixCls?: string;
            placeholder?: any;
            wrapperClassName?: string;
            src?: string;
            rootClassName?: string;
            previewPrefixCls?: string;
            previewMask?: false | (() => any);
            fallback?: string;
        } & Omit<ImgHTMLAttributes, "onClick" | "placeholder">>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            class?: any;
            placeholder?: any;
            inlist?: any;
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
    } & Readonly<Partial<{
        preview: boolean | import("../vc-image").ImagePreviewType;
        wrapperStyle: import("vue").CSSProperties;
    } & {
        onError?: OnErrorEventHandlerNonNull;
        onClick?: import("../_util/EventInterface").MouseEventHandler;
        prefixCls?: string;
        placeholder?: any;
        wrapperClassName?: string;
        src?: string;
        rootClassName?: string;
        previewPrefixCls?: string;
        previewMask?: false | (() => any);
        fallback?: string;
    } & Omit<ImgHTMLAttributes, "onClick" | "placeholder">>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<Partial<{
    preview: boolean | import("../vc-image").ImagePreviewType;
    wrapperStyle: import("vue").CSSProperties;
} & {
    onError?: OnErrorEventHandlerNonNull;
    onClick?: import("../_util/EventInterface").MouseEventHandler;
    prefixCls?: string;
    placeholder?: any;
    wrapperClassName?: string;
    src?: string;
    rootClassName?: string;
    previewPrefixCls?: string;
    previewMask?: false | (() => any);
    fallback?: string;
} & Omit<ImgHTMLAttributes, "onClick" | "placeholder">>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    class?: any;
    placeholder?: any;
    inlist?: any;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly PreviewGroup: typeof PreviewGroup;
};
export default _default;
