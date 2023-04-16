import type { Tab, TabsLocale, EditableConfig } from '../interface';
import type { Key } from '../../../_util/type';
import type { ExtractPropTypes, PropType } from 'vue';
export declare const operationNodeProps: {
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    tabs: {
        type: PropType<(Tab & {
            closeIcon?: () => any;
        })[]>;
    };
    rtl: {
        type: BooleanConstructor;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    mobile: {
        type: BooleanConstructor;
    };
    moreIcon: import("vue-types").VueTypeValidableDef<any>;
    moreTransitionName: {
        type: StringConstructor;
    };
    editable: {
        type: PropType<EditableConfig>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    removeAriaLabel: StringConstructor;
    onTabClick: {
        type: PropType<(key: Key, e: MouseEvent | KeyboardEvent) => void>;
    };
};
export declare type OperationNodeProps = Partial<ExtractPropTypes<typeof operationNodeProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    tabs: {
        type: PropType<(Tab & {
            closeIcon?: () => any;
        })[]>;
    };
    rtl: {
        type: BooleanConstructor;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    mobile: {
        type: BooleanConstructor;
    };
    moreIcon: import("vue-types").VueTypeValidableDef<any>;
    moreTransitionName: {
        type: StringConstructor;
    };
    editable: {
        type: PropType<EditableConfig>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    removeAriaLabel: StringConstructor;
    onTabClick: {
        type: PropType<(key: Key, e: KeyboardEvent | MouseEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "tabClick"[], "tabClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    tabs: {
        type: PropType<(Tab & {
            closeIcon?: () => any;
        })[]>;
    };
    rtl: {
        type: BooleanConstructor;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    mobile: {
        type: BooleanConstructor;
    };
    moreIcon: import("vue-types").VueTypeValidableDef<any>;
    moreTransitionName: {
        type: StringConstructor;
    };
    editable: {
        type: PropType<EditableConfig>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
    removeAriaLabel: StringConstructor;
    onTabClick: {
        type: PropType<(key: Key, e: KeyboardEvent | MouseEvent) => void>;
    };
}>> & {
    onTabClick?: (...args: any[]) => any;
}, {
    rtl: boolean;
    locale: TabsLocale;
    mobile: boolean;
}>;
export default _default;
