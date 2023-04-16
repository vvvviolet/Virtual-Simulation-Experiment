import type { TabPosition, RenderTabBar, TabsLocale, AnimatedConfig, OnTabScroll } from './interface';
import type { CSSProperties, PropType, ExtractPropTypes } from 'vue';
import type { SizeType } from '../../config-provider';
import type { Key } from '../../_util/type';
import type { MouseEventHandler } from '../../_util/EventInterface';
export declare type TabsType = 'line' | 'card' | 'editable-card';
export declare type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export declare const tabsProps: () => {
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    defaultActiveKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    animated: {
        type: PropType<boolean | AnimatedConfig>;
    };
    renderTabBar: {
        type: PropType<RenderTabBar>;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    tabBarStyle: {
        type: PropType<CSSProperties>;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
    hideAdd: BooleanConstructor;
    type: {
        type: PropType<TabsType>;
    };
    size: {
        type: PropType<SizeType>;
    };
    centered: BooleanConstructor;
    onEdit: {
        type: PropType<(e: MouseEvent | KeyboardEvent | Key, action: 'add' | 'remove') => void>;
    };
    onChange: {
        type: PropType<(activeKey: Key) => void>;
    };
    onTabClick: {
        type: PropType<(activeKey: Key, e: KeyboardEvent | MouseEvent) => void>;
    };
    onTabScroll: {
        type: PropType<OnTabScroll>;
    };
    'onUpdate:activeKey': {
        type: PropType<(activeKey: Key) => void>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    onPrevClick: PropType<MouseEventHandler>;
    onNextClick: PropType<MouseEventHandler>;
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
};
export declare type TabsProps = Partial<ExtractPropTypes<ReturnType<typeof tabsProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    defaultActiveKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    animated: {
        type: PropType<boolean | AnimatedConfig>;
    };
    renderTabBar: {
        type: PropType<RenderTabBar>;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    tabBarStyle: {
        type: PropType<CSSProperties>;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
    hideAdd: BooleanConstructor;
    type: {
        type: PropType<TabsType>;
    };
    size: {
        type: PropType<SizeType>;
    };
    centered: BooleanConstructor;
    onEdit: {
        type: PropType<(e: Key | KeyboardEvent | MouseEvent, action: "add" | "remove") => void>;
    };
    onChange: {
        type: PropType<(activeKey: Key) => void>;
    };
    onTabClick: {
        type: PropType<(activeKey: Key, e: KeyboardEvent | MouseEvent) => void>;
    };
    onTabScroll: {
        type: PropType<OnTabScroll>;
    };
    'onUpdate:activeKey': {
        type: PropType<(activeKey: Key) => void>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    onPrevClick: PropType<MouseEventHandler>;
    onNextClick: PropType<MouseEventHandler>;
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    defaultActiveKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    animated: {
        type: PropType<boolean | AnimatedConfig>;
    };
    renderTabBar: {
        type: PropType<RenderTabBar>;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    tabBarStyle: {
        type: PropType<CSSProperties>;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
    hideAdd: BooleanConstructor;
    type: {
        type: PropType<TabsType>;
    };
    size: {
        type: PropType<SizeType>;
    };
    centered: BooleanConstructor;
    onEdit: {
        type: PropType<(e: Key | KeyboardEvent | MouseEvent, action: "add" | "remove") => void>;
    };
    onChange: {
        type: PropType<(activeKey: Key) => void>;
    };
    onTabClick: {
        type: PropType<(activeKey: Key, e: KeyboardEvent | MouseEvent) => void>;
    };
    onTabScroll: {
        type: PropType<OnTabScroll>;
    };
    'onUpdate:activeKey': {
        type: PropType<(activeKey: Key) => void>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    onPrevClick: PropType<MouseEventHandler>;
    onNextClick: PropType<MouseEventHandler>;
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
}>>, {
    locale: TabsLocale;
    destroyInactiveTabPane: boolean;
    hideAdd: boolean;
    centered: boolean;
}>;
export default _default;
