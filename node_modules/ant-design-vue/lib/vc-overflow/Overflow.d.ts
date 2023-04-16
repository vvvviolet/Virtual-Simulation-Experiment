import type { ExtractPropTypes, HTMLAttributes, PropType } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
import type { Key, VueNode } from '../_util/type';
import RawItem from './RawItem';
declare const RESPONSIVE: "responsive";
declare const INVALIDATE: "invalidate";
declare const overflowProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    data: ArrayConstructor;
    itemKey: PropType<Key | ((item: any) => Key)>;
    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth: {
        type: NumberConstructor;
        default: number;
    };
    renderItem: PropType<(item: any) => VueNode>;
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem: PropType<(item: any, index: number) => VueNode>;
    maxCount: PropType<number | "responsive" | "invalidate">;
    renderRest: PropType<(items: any[]) => VueNode>;
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest: PropType<(items: any[]) => VueNode>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    component: StringConstructor;
    itemComponent: import("vue-types").VueTypeValidableDef<any>;
    /** @private This API may be refactor since not well design */
    onVisibleChange: PropType<(visibleCount: number) => void>;
    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr: PropType<"full">;
    onMousedown: PropType<MouseEventHandler>;
};
declare type InterOverflowProps = Partial<ExtractPropTypes<ReturnType<typeof overflowProps>>>;
export declare type OverflowProps = HTMLAttributes & InterOverflowProps;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            class?: any;
            suffix?: any;
            itemComponent?: any;
            inlist?: any;
        }> & Omit<Readonly<OverflowProps> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "class" | "suffix" | "itemComponent" | "inlist">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<OverflowProps>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            class?: any;
            suffix?: any;
            itemComponent?: any;
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
    } & Readonly<OverflowProps> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<OverflowProps>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    class?: any;
    suffix?: any;
    itemComponent?: any;
    inlist?: any;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: typeof RawItem;
    readonly RESPONSIVE: typeof RESPONSIVE;
    readonly INVALIDATE: typeof INVALIDATE;
};
export default _default;
