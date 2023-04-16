import type { CollapsibleType } from './commonProps';
import { collapseProps } from './commonProps';
import type { ExtractPropTypes } from 'vue';
export { collapseProps };
export declare type CollapseProps = Partial<ExtractPropTypes<ReturnType<typeof collapseProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    activeKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
    };
    defaultActiveKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
    };
    accordion: {
        type: BooleanConstructor;
        default: any;
    };
    destroyInactivePanel: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    expandIconPosition: import("vue-types").VueTypeDef<"left" | "right">;
    collapsible: {
        type: import("vue").PropType<CollapsibleType>;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
    'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    activeKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
    };
    defaultActiveKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
    };
    accordion: {
        type: BooleanConstructor;
        default: any;
    };
    destroyInactivePanel: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    expandIconPosition: import("vue-types").VueTypeDef<"left" | "right">;
    collapsible: {
        type: import("vue").PropType<CollapsibleType>;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
    'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
}>>, {
    openAnimation: {
        [key: string]: any;
    };
    bordered: boolean;
    ghost: boolean;
    destroyInactivePanel: boolean;
    accordion: boolean;
}>;
export default _default;
