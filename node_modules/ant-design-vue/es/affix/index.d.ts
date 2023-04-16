import type { ComponentPublicInstance, CSSProperties, ExtractPropTypes, PropType } from 'vue';
declare function getDefaultTarget(): Window & typeof globalThis;
declare enum AffixStatus {
    None = 0,
    Prepare = 1
}
export interface AffixState {
    affixStyle?: CSSProperties;
    placeholderStyle?: CSSProperties;
    status: AffixStatus;
    lastAffix: boolean;
    prevTarget: Window | HTMLElement | null;
}
export declare const affixProps: () => {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: NumberConstructor;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom: NumberConstructor;
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target: {
        type: PropType<() => Window | HTMLElement | null>;
        default: typeof getDefaultTarget;
    };
    prefixCls: StringConstructor;
    /** 固定状态改变时触发的回调函数 */
    onChange: PropType<(lastAffix: boolean) => void>;
    onTestUpdatePosition: PropType<() => void>;
};
export declare type AffixProps = Partial<ExtractPropTypes<ReturnType<typeof affixProps>>>;
export declare type AffixEmits = {
    change: (lastAffix: boolean) => void;
    testUpdatePosition: () => void;
};
export declare type AffixExpose = {
    updatePosition: (...args: any[]) => void;
    lazyUpdatePosition: (...args: any[]) => void;
};
export declare type AffixInstance = ComponentPublicInstance<AffixProps, AffixExpose>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            target: () => Window | HTMLElement;
        }> & Omit<Readonly<ExtractPropTypes<{
            /**
             * 距离窗口顶部达到指定偏移量后触发
             */
            offsetTop: NumberConstructor;
            /** 距离窗口底部达到指定偏移量后触发 */
            offsetBottom: NumberConstructor;
            /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
            target: {
                type: PropType<() => Window | HTMLElement>;
                default: typeof getDefaultTarget;
            };
            prefixCls: StringConstructor;
            /** 固定状态改变时触发的回调函数 */
            onChange: PropType<(lastAffix: boolean) => void>;
            onTestUpdatePosition: PropType<() => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "target">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            /**
             * 距离窗口顶部达到指定偏移量后触发
             */
            offsetTop: NumberConstructor;
            /** 距离窗口底部达到指定偏移量后触发 */
            offsetBottom: NumberConstructor;
            /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
            target: {
                type: PropType<() => Window | HTMLElement>;
                default: typeof getDefaultTarget;
            };
            prefixCls: StringConstructor;
            /** 固定状态改变时触发的回调函数 */
            onChange: PropType<(lastAffix: boolean) => void>;
            onTestUpdatePosition: PropType<() => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            target: () => Window | HTMLElement;
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
            errorCaptured?: ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        /**
         * 距离窗口顶部达到指定偏移量后触发
         */
        offsetTop: NumberConstructor;
        /** 距离窗口底部达到指定偏移量后触发 */
        offsetBottom: NumberConstructor;
        /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
        target: {
            type: PropType<() => Window | HTMLElement>;
            default: typeof getDefaultTarget;
        };
        prefixCls: StringConstructor;
        /** 固定状态改变时触发的回调函数 */
        onChange: PropType<(lastAffix: boolean) => void>;
        onTestUpdatePosition: PropType<() => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: NumberConstructor;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom: NumberConstructor;
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target: {
        type: PropType<() => Window | HTMLElement>;
        default: typeof getDefaultTarget;
    };
    prefixCls: StringConstructor;
    /** 固定状态改变时触发的回调函数 */
    onChange: PropType<(lastAffix: boolean) => void>;
    onTestUpdatePosition: PropType<() => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    target: () => Window | HTMLElement;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
