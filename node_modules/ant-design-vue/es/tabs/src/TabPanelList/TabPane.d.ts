import type { ExtractPropTypes } from 'vue';
declare const tabPaneProps: () => {
    tab: import("vue-types").VueTypeValidableDef<any>;
    disabled: {
        type: BooleanConstructor;
    };
    forceRender: {
        type: BooleanConstructor;
    };
    closable: {
        type: BooleanConstructor;
    };
    animated: {
        type: BooleanConstructor;
    };
    active: {
        type: BooleanConstructor;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
    prefixCls: {
        type: StringConstructor;
    };
    tabKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    id: {
        type: StringConstructor;
    };
};
export declare type TabPaneProps = Partial<ExtractPropTypes<ReturnType<typeof tabPaneProps>>>;
declare const _default: import("vue").DefineComponent<{
    tab: import("vue-types").VueTypeValidableDef<any>;
    disabled: {
        type: BooleanConstructor;
    };
    forceRender: {
        type: BooleanConstructor;
    };
    closable: {
        type: BooleanConstructor;
    };
    animated: {
        type: BooleanConstructor;
    };
    active: {
        type: BooleanConstructor;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
    prefixCls: {
        type: StringConstructor;
    };
    tabKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    id: {
        type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    tab: import("vue-types").VueTypeValidableDef<any>;
    disabled: {
        type: BooleanConstructor;
    };
    forceRender: {
        type: BooleanConstructor;
    };
    closable: {
        type: BooleanConstructor;
    };
    animated: {
        type: BooleanConstructor;
    };
    active: {
        type: BooleanConstructor;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
    prefixCls: {
        type: StringConstructor;
    };
    tabKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    id: {
        type: StringConstructor;
    };
}>>, {
    active: boolean;
    disabled: boolean;
    forceRender: boolean;
    closable: boolean;
    animated: boolean;
    destroyInactiveTabPane: boolean;
}>;
export default _default;
