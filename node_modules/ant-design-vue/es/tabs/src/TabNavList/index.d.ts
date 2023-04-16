import type { TabPosition, RenderTabBar, TabsLocale, EditableConfig, AnimatedConfig, OnTabScroll } from '../interface';
import type { Key } from '../../../_util/type';
import type { ExtractPropTypes, PropType } from 'vue';
export declare const tabNavListProps: () => {
    id: {
        type: StringConstructor;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    rtl: {
        type: BooleanConstructor;
    };
    animated: {
        type: PropType<AnimatedConfig>;
        default: AnimatedConfig;
    };
    editable: {
        type: PropType<EditableConfig>;
    };
    moreIcon: import("vue-types").VueTypeValidableDef<any>;
    moreTransitionName: {
        type: StringConstructor;
    };
    mobile: {
        type: BooleanConstructor;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    renderTabBar: {
        type: PropType<RenderTabBar>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    onTabClick: {
        type: PropType<(activeKey: Key, e: MouseEvent | KeyboardEvent) => void>;
    };
    onTabScroll: {
        type: PropType<OnTabScroll>;
    };
};
export declare type TabNavListProps = Partial<ExtractPropTypes<ReturnType<typeof tabNavListProps>>>;
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    rtl: {
        type: BooleanConstructor;
    };
    animated: {
        type: PropType<AnimatedConfig>;
        default: AnimatedConfig;
    };
    editable: {
        type: PropType<EditableConfig>;
    };
    moreIcon: import("vue-types").VueTypeValidableDef<any>;
    moreTransitionName: {
        type: StringConstructor;
    };
    mobile: {
        type: BooleanConstructor;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    renderTabBar: {
        type: PropType<RenderTabBar>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    onTabClick: {
        type: PropType<(activeKey: Key, e: KeyboardEvent | MouseEvent) => void>;
    };
    onTabScroll: {
        type: PropType<OnTabScroll>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("tabClick" | "tabScroll")[], "tabClick" | "tabScroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    id: {
        type: StringConstructor;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    rtl: {
        type: BooleanConstructor;
    };
    animated: {
        type: PropType<AnimatedConfig>;
        default: AnimatedConfig;
    };
    editable: {
        type: PropType<EditableConfig>;
    };
    moreIcon: import("vue-types").VueTypeValidableDef<any>;
    moreTransitionName: {
        type: StringConstructor;
    };
    mobile: {
        type: BooleanConstructor;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    renderTabBar: {
        type: PropType<RenderTabBar>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    onTabClick: {
        type: PropType<(activeKey: Key, e: KeyboardEvent | MouseEvent) => void>;
    };
    onTabScroll: {
        type: PropType<OnTabScroll>;
    };
}>> & {
    onTabClick?: (...args: any[]) => any;
    onTabScroll?: (...args: any[]) => any;
}, {
    rtl: boolean;
    locale: TabsLocale;
    mobile: boolean;
    animated: AnimatedConfig;
}>;
export default _default;
