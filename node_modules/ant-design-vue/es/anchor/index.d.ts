import type { Plugin } from 'vue';
import type { AnchorProps } from './Anchor';
import type { AnchorLinkProps } from './AnchorLink';
import AnchorLink from './AnchorLink';
export type { AnchorLinkProps, AnchorProps };
export { AnchorLink, AnchorLink as Link };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            affix: boolean;
            showInkInFixed: boolean;
            wrapperStyle: import("vue").CSSProperties;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            offsetTop: NumberConstructor;
            bounds: NumberConstructor;
            affix: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInkInFixed: {
                type: BooleanConstructor;
                default: boolean;
            };
            getContainer: import("vue").PropType<() => import("./Anchor").AnchorContainer>;
            wrapperClass: StringConstructor;
            wrapperStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            getCurrentAnchor: import("vue").PropType<() => string>;
            targetOffset: NumberConstructor;
            onChange: import("vue").PropType<(currentActiveLink: string) => void>;
            onClick: import("vue").PropType<(e: MouseEvent, link: {
                title: any;
                href: string;
            }) => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "affix" | "showInkInFixed" | "wrapperStyle">;
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
            offsetTop: NumberConstructor;
            bounds: NumberConstructor;
            affix: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInkInFixed: {
                type: BooleanConstructor;
                default: boolean;
            };
            getContainer: import("vue").PropType<() => import("./Anchor").AnchorContainer>;
            wrapperClass: StringConstructor;
            wrapperStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            getCurrentAnchor: import("vue").PropType<() => string>;
            targetOffset: NumberConstructor;
            onChange: import("vue").PropType<(currentActiveLink: string) => void>;
            onClick: import("vue").PropType<(e: MouseEvent, link: {
                title: any;
                href: string;
            }) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            affix: boolean;
            showInkInFixed: boolean;
            wrapperStyle: import("vue").CSSProperties;
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
        offsetTop: NumberConstructor;
        bounds: NumberConstructor;
        affix: {
            type: BooleanConstructor;
            default: boolean;
        };
        showInkInFixed: {
            type: BooleanConstructor;
            default: boolean;
        };
        getContainer: import("vue").PropType<() => import("./Anchor").AnchorContainer>;
        wrapperClass: StringConstructor;
        wrapperStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        getCurrentAnchor: import("vue").PropType<() => string>;
        targetOffset: NumberConstructor;
        onChange: import("vue").PropType<(currentActiveLink: string) => void>;
        onClick: import("vue").PropType<(e: MouseEvent, link: {
            title: any;
            href: string;
        }) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    offsetTop: NumberConstructor;
    bounds: NumberConstructor;
    affix: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInkInFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    getContainer: import("vue").PropType<() => import("./Anchor").AnchorContainer>;
    wrapperClass: StringConstructor;
    wrapperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    getCurrentAnchor: import("vue").PropType<() => string>;
    targetOffset: NumberConstructor;
    onChange: import("vue").PropType<(currentActiveLink: string) => void>;
    onClick: import("vue").PropType<(e: MouseEvent, link: {
        title: any;
        href: string;
    }) => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    affix: boolean;
    showInkInFixed: boolean;
    wrapperStyle: import("vue").CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Link: typeof AnchorLink;
};
export default _default;
