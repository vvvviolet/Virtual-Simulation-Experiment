import type { ComputedRef, Ref, WatchOptions, WatchSource } from 'vue';
/**
 * Any function
 */
export declare type Fn = () => void;
/**
 * A ref that allow to set null or undefined
 */
export declare type RemovableRef<T> = Omit<Ref<T>, 'value'> & {
    get value(): T;
    set value(value: T | null | undefined);
};
/**
 * @deprecated Use `RemovableRef`
 */
export declare type RemoveableRef<T> = RemovableRef<T>;
/**
 * Maybe it's a ref, or a plain value
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
export declare type MaybeRef<T> = T | Ref<T>;
/**
 * Maybe it's a ref, or a plain value, or a getter function
 *
 * ```ts
 * type MaybeComputedRef<T> = (() => T) | T | Ref<T> | ComputedRef<T>
 * ```
 */
export declare type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T>;
/**
 * Maybe it's a computed ref, or a getter function
 *
 * ```ts
 * type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>
 * ```
 */
export declare type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>;
/**
 * Make all the nested attributes of an object or array to MaybeRef<T>
 *
 * Good for accepting options that will be wrapped with `reactive` or `ref`
 *
 * ```ts
 * UnwrapRef<DeepMaybeRef<T>> === T
 * ```
 */
export declare type DeepMaybeRef<T> = T extends Ref<infer V> ? MaybeRef<V> : T extends Array<any> | object ? {
    [K in keyof T]: DeepMaybeRef<T[K]>;
} : MaybeRef<T>;
/**
 * Infers the element type of an array
 */
export declare type ElementOf<T> = T extends (infer E)[] ? E : never;
export declare type ShallowUnwrapRef<T> = T extends Ref<infer P> ? P : T;
export declare type Awaitable<T> = Promise<T> | T;
export declare type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
export interface Pausable {
    /**
     * A ref indicate whether a pausable instance is active
     */
    isActive: Ref<boolean>;
    /**
     * Temporary pause the effect from executing
     */
    pause: Fn;
    /**
     * Resume the effects
     */
    resume: Fn;
}
export interface Stoppable {
    /**
     * A ref indicate whether a stoppable instance is executing
     */
    isPending: Ref<boolean>;
    /**
     * Stop the effect from executing
     */
    stop: Fn;
    /**
     * Start the effects
     */
    start: Fn;
}
/**
 * @deprecated Use `Stoppable`
 */
export declare type Stopable = Stoppable;
export interface ConfigurableFlush {
    /**
     * Timing for monitoring changes, refer to WatchOptions for more details
     *
     * @default 'pre'
     */
    flush?: WatchOptions['flush'];
}
export interface ConfigurableFlushSync {
    /**
     * Timing for monitoring changes, refer to WatchOptions for more details.
     * Unlike `watch()`, the default is set to `sync`
     *
     * @default 'sync'
     */
    flush?: WatchOptions['flush'];
}
export declare type MapSources<T> = {
    [K in keyof T]: T[K] extends WatchSource<infer V> ? V : never;
};
export declare type MapOldSources<T, Immediate> = {
    [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? V | undefined : V : never;
};
