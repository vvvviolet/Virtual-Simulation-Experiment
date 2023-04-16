import type { ComponentPublicInstance } from 'vue';
import type { MaybeComputedRef, MaybeRef } from './types';
export declare type VueInstance = ComponentPublicInstance;
export declare type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>;
export declare type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeComputedRef<T>;
export declare type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null;
export declare type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance ? Exclude<MaybeElement, VueInstance> : T | undefined;
/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
export declare function unrefElement<T extends MaybeElement>(elRef: MaybeComputedElementRef<T>): UnRefElementReturn<T>;
