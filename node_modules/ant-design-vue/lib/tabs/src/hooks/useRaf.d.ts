import type { Ref } from 'vue';
export default function useRaf<Callback extends Function>(callback: Callback): (...args: any[]) => void;
declare type Callback<T> = (ori: T) => T;
export declare function useRafState<T>(defaultState: T | (() => T)): [Ref<T>, (updater: Callback<T>) => void];
export {};
