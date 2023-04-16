import type { Key } from '../../_util/type';
import type { ExtractPropTypes, PropType } from 'vue';
import type { MenuTheme, MenuMode, BuiltinPlacements, TriggerSubMenuAction, MenuClickEventHandler, SelectEventHandler } from './interface';
import type { CSSMotionProps } from '../../_util/transition';
import type { FocusEventHandler, MouseEventHandler } from '../../_util/EventInterface';
export declare const menuProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    forceSubMenuRender: BooleanConstructor;
    openKeys: PropType<Key[]>;
    selectedKeys: PropType<Key[]>;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    motion: PropType<CSSMotionProps>;
    theme: {
        type: PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: PropType<BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: PropType<TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: PropType<(node: HTMLElement) => HTMLElement>;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
    onOpenChange: PropType<(keys: Key[]) => void>;
    onSelect: PropType<SelectEventHandler>;
    onDeselect: PropType<SelectEventHandler>;
    onClick: PropType<MenuClickEventHandler>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onMousedown: PropType<MouseEventHandler>;
    'onUpdate:openKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:selectedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:activeKey': PropType<(key: Key) => void>;
};
export declare type MenuProps = Partial<ExtractPropTypes<ReturnType<typeof menuProps>>>;
declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    forceSubMenuRender: BooleanConstructor;
    openKeys: PropType<Key[]>;
    selectedKeys: PropType<Key[]>;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    motion: PropType<CSSMotionProps>;
    theme: {
        type: PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: PropType<BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: PropType<TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: PropType<(node: HTMLElement) => HTMLElement>;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
    onOpenChange: PropType<(keys: Key[]) => void>;
    onSelect: PropType<SelectEventHandler>;
    onDeselect: PropType<SelectEventHandler>;
    onClick: PropType<MenuClickEventHandler>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onMousedown: PropType<MouseEventHandler>;
    'onUpdate:openKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:selectedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:activeKey': PropType<(key: Key) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    forceSubMenuRender: BooleanConstructor;
    openKeys: PropType<Key[]>;
    selectedKeys: PropType<Key[]>;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    motion: PropType<CSSMotionProps>;
    theme: {
        type: PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: PropType<BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: PropType<TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: PropType<(node: HTMLElement) => HTMLElement>;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
    onOpenChange: PropType<(keys: Key[]) => void>;
    onSelect: PropType<SelectEventHandler>;
    onDeselect: PropType<SelectEventHandler>;
    onClick: PropType<MenuClickEventHandler>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onMousedown: PropType<MouseEventHandler>;
    'onUpdate:openKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:selectedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:activeKey': PropType<(key: Key) => void>;
}>>, {
    multiple: boolean;
    disabled: boolean;
    mode: MenuMode;
    selectable: boolean;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: TriggerSubMenuAction;
    forceSubMenuRender: boolean;
    disabledOverflow: boolean;
    theme: MenuTheme;
}>;
export default _default;
