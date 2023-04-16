import type { Ref, ComponentPublicInstance } from 'vue';
import type { Key } from '../type';
declare type RefType = HTMLElement | ComponentPublicInstance;
export declare type RefsValue = Map<Key, RefType>;
declare type UseRef = [(key: Key) => (el: RefType) => void, Ref<RefsValue>];
declare const useRefs: () => UseRef;
export default useRefs;
