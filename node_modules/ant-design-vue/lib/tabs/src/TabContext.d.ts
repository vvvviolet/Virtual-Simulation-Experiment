import type { Tab } from './interface';
import type { PropType, Ref } from 'vue';
export interface TabContextProps {
    tabs: Ref<Tab[]>;
    prefixCls: Ref<string>;
}
export declare const useProvideTabs: (props: TabContextProps) => void;
export declare const useInjectTabs: () => {
    tabs: Ref<any[]>;
    prefixCls: Ref<any>;
};
declare const TabsContextProvider: import("vue").DefineComponent<{
    tabs: {
        type: PropType<Ref<Tab[]>>;
        default: any;
    };
    prefixCls: {
        type: StringConstructor;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: PropType<Ref<Tab[]>>;
        default: any;
    };
    prefixCls: {
        type: StringConstructor;
        default: any;
    };
}>>, {
    prefixCls: string;
    tabs: Ref<Tab[]>;
}>;
export default TabsContextProvider;
