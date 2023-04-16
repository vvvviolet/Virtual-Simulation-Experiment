import type { Key, VueNode } from '../../_util/type';
import type { TabPaneProps } from './TabPanelList/TabPane';
export declare type TabSizeMap = Map<Key, {
    width: number;
    height: number;
    left: number;
    top: number;
}>;
export interface TabOffset {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
}
export declare type TabOffsetMap = Map<Key, TabOffset>;
export declare type TabPosition = 'left' | 'right' | 'top' | 'bottom';
export interface Tab extends TabPaneProps {
    key: Key;
    node: VueNode;
}
export declare type RenderTabBar = (props: {
    DefaultTabBar: any;
    [key: string]: any;
}) => VueNode;
export interface TabsLocale {
    dropdownAriaLabel?: string;
    removeAriaLabel?: string;
    addAriaLabel?: string;
}
export interface EditableConfig {
    onEdit: (type: 'add' | 'remove', info: {
        key?: Key;
        event: MouseEvent | KeyboardEvent;
    }) => void;
    showAdd?: boolean;
    removeIcon?: () => VueNode;
    addIcon?: () => VueNode;
}
export interface AnimatedConfig {
    inkBar?: boolean;
    tabPane?: boolean;
}
export declare type OnTabScroll = (info: {
    direction: 'left' | 'right' | 'top' | 'bottom';
}) => void;
export declare type TabBarExtraPosition = 'left' | 'right';
export declare type TabBarExtraMap = Partial<Record<TabBarExtraPosition, any>>;
export declare type TabBarExtraContent = VueNode;
