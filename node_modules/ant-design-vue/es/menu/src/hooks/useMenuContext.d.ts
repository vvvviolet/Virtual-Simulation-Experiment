import type { Key } from '../../../_util/type';
import type { ComputedRef, InjectionKey, PropType, Ref } from 'vue';
import type { BuiltinPlacements, MenuClickEventHandler, MenuMode, MenuTheme, TriggerSubMenuAction } from '../interface';
import type { CSSMotionProps } from '../../../_util/transition';
export interface StoreMenuInfo {
    eventKey: string;
    key: Key;
    parentEventKeys: ComputedRef<string[]>;
    childrenEventKeys?: Ref<string[]>;
    isLeaf?: boolean;
    parentKeys: ComputedRef<Key[]>;
}
export interface MenuContextProps {
    isRootMenu: Ref<boolean>;
    store: Ref<Record<string, StoreMenuInfo>>;
    registerMenuInfo: (key: string, info: StoreMenuInfo) => void;
    unRegisterMenuInfo: (key: string) => void;
    prefixCls: ComputedRef<string>;
    openKeys: Ref<Key[]>;
    selectedKeys: Ref<Key[]>;
    selectedSubMenuKeys: Ref<Array<number | string>>;
    rtl?: ComputedRef<boolean>;
    inlineCollapsed: Ref<boolean>;
    antdMenuTheme?: ComputedRef<MenuTheme>;
    siderCollapsed?: ComputedRef<boolean>;
    mode: Ref<MenuMode>;
    disabled?: ComputedRef<boolean>;
    overflowDisabled?: Ref<boolean>;
    activeKeys: Ref<Key[]>;
    changeActiveKeys: (keys: Key[]) => void;
    inlineIndent: ComputedRef<number>;
    motion?: ComputedRef<CSSMotionProps | null>;
    defaultMotions?: ComputedRef<Partial<{
        [key in MenuMode | 'other']: CSSMotionProps | ((name?: string) => CSSMotionProps);
    }> | null>;
    subMenuOpenDelay: ComputedRef<number>;
    subMenuCloseDelay: ComputedRef<number>;
    forceSubMenuRender: ComputedRef<boolean>;
    builtinPlacements?: ComputedRef<BuiltinPlacements>;
    triggerSubMenuAction?: ComputedRef<TriggerSubMenuAction>;
    expandIcon?: ComputedRef<(p?: {
        isOpen: boolean;
        [key: string]: any;
    }) => any>;
    onItemClick: MenuClickEventHandler;
    onOpenChange: (key: Key, open: boolean) => void;
    getPopupContainer: ComputedRef<(node: HTMLElement) => HTMLElement>;
}
declare const MenuContextKey: InjectionKey<MenuContextProps>;
declare const useProvideMenu: (props: MenuContextProps) => void;
declare const useInjectMenu: () => MenuContextProps;
export declare const useProvideForceRender: (forceRender: boolean) => void;
export declare const useInjectForceRender: () => boolean;
declare const MenuFirstLevelContextKey: InjectionKey<Boolean>;
declare const useProvideFirstLevel: (firstLevel: Boolean) => void;
declare const useInjectFirstLevel: () => Boolean;
declare const MenuContextProvider: import("vue").DefineComponent<{
    mode: {
        type: PropType<MenuMode>;
        default: any;
    };
    overflowDisabled: {
        type: BooleanConstructor;
        default: any;
    };
    isRootMenu: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<MenuMode>;
        default: any;
    };
    overflowDisabled: {
        type: BooleanConstructor;
        default: any;
    };
    isRootMenu: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    mode: MenuMode;
    overflowDisabled: boolean;
    isRootMenu: boolean;
}>;
export { useProvideMenu, MenuContextKey, useInjectMenu, MenuFirstLevelContextKey, useProvideFirstLevel, useInjectFirstLevel, MenuContextProvider, };
export default useProvideMenu;
