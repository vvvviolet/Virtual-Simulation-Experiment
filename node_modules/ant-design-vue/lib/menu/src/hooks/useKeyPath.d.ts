import type { Key } from '../../../_util/type';
import type { ComputedRef, InjectionKey } from 'vue';
import type { StoreMenuInfo } from './useMenuContext';
export declare const OVERFLOW_KEY = "$$__vc-menu-more__key";
declare const KeyPathContext: InjectionKey<{
    parentEventKeys: ComputedRef<string[]>;
    parentKeys: ComputedRef<Key[]>;
    parentInfo: StoreMenuInfo;
}>;
declare const useInjectKeyPath: () => {
    parentEventKeys: ComputedRef<any[]>;
    parentKeys: ComputedRef<any[]>;
    parentInfo: StoreMenuInfo;
};
declare const useProvideKeyPath: (eventKey: string, key: Key, menuInfo: StoreMenuInfo) => ComputedRef<any[]>;
export declare const PathContext: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export declare const useMeasure: () => boolean;
export { useProvideKeyPath, useInjectKeyPath, KeyPathContext };
export default useProvideKeyPath;
