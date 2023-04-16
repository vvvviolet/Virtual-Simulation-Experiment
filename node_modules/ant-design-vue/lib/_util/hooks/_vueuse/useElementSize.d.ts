import type { MaybeComputedElementRef } from './unrefElement';
import type { UseResizeObserverOptions } from './useResizeObserver';
export interface ElementSize {
    width: number;
    height: number;
}
/**
 * Reactive size of an HTML element.
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
export declare function useElementSize(target: MaybeComputedElementRef, initialSize?: ElementSize, options?: UseResizeObserverOptions): {
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
};
export declare type UseElementSizeReturn = ReturnType<typeof useElementSize>;
