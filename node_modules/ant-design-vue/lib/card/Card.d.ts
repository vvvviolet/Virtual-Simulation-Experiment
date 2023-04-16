import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
export interface CardTabListType {
    key: string;
    tab: any;
    /** @deprecated Please use `customTab` instead. */
    slots?: {
        tab: string;
    };
    disabled?: boolean;
}
export declare type CardType = 'inner';
export declare type CardSize = 'default' | 'small';
export declare const cardProps: () => {
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    headStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"inner">;
    };
    size: {
        type: PropType<CardSize>;
    };
    actions: import("vue-types").VueTypeValidableDef<any>;
    tabList: {
        type: PropType<CardTabListType[]>;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    activeTabKey: StringConstructor;
    defaultActiveTabKey: StringConstructor;
    cover: import("vue-types").VueTypeValidableDef<any>;
    onTabChange: {
        type: PropType<(key: string) => void>;
    };
};
export declare type CardProps = Partial<ExtractPropTypes<ReturnType<typeof cardProps>>>;
declare const Card: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    headStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"inner">;
    };
    size: {
        type: PropType<CardSize>;
    };
    actions: import("vue-types").VueTypeValidableDef<any>;
    tabList: {
        type: PropType<CardTabListType[]>;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    activeTabKey: StringConstructor;
    defaultActiveTabKey: StringConstructor;
    cover: import("vue-types").VueTypeValidableDef<any>;
    onTabChange: {
        type: PropType<(key: string) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    headStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"inner">;
    };
    size: {
        type: PropType<CardSize>;
    };
    actions: import("vue-types").VueTypeValidableDef<any>;
    tabList: {
        type: PropType<CardTabListType[]>;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    activeTabKey: StringConstructor;
    defaultActiveTabKey: StringConstructor;
    cover: import("vue-types").VueTypeValidableDef<any>;
    onTabChange: {
        type: PropType<(key: string) => void>;
    };
}>>, {
    loading: boolean;
    bordered: boolean;
    bodyStyle: CSSProperties;
    headStyle: CSSProperties;
    hoverable: boolean;
}>;
export default Card;
