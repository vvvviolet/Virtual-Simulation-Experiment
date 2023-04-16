import type { PropType } from 'vue';
import type { Key } from '../_util/type';
export declare type CollapsibleType = 'header' | 'disabled';
export declare type ActiveKeyType = Array<string | number> | string | number;
export interface PanelProps {
    isActive?: boolean;
    header?: any;
    showArrow?: boolean;
    forceRender?: boolean;
    /** @deprecated Use `collapsible="disabled"` instead */
    disabled?: boolean;
    extra?: any;
    collapsible?: CollapsibleType;
}
declare const collapseProps: () => {
    prefixCls: StringConstructor;
    activeKey: {
        type: PropType<ActiveKeyType>;
    };
    defaultActiveKey: {
        type: PropType<ActiveKeyType>;
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
    expandIcon: PropType<(panelProps: PanelProps) => any>;
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    expandIconPosition: import("vue-types").VueTypeDef<"left" | "right">;
    collapsible: {
        type: PropType<CollapsibleType>;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: PropType<(key: Key | Key[]) => void>;
    'onUpdate:activeKey': PropType<(key: Key | Key[]) => void>;
};
declare const collapsePanelProps: () => {
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    prefixCls: StringConstructor;
    header: import("vue-types").VueTypeValidableDef<any>;
    headerClass: StringConstructor;
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    isActive: {
        type: BooleanConstructor;
        default: any;
    };
    destroyInactivePanel: {
        type: BooleanConstructor;
        default: any;
    };
    /** @deprecated Use `collapsible="disabled"` instead */
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    accordion: {
        type: BooleanConstructor;
        default: any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    expandIcon: PropType<(panelProps: PanelProps) => any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    panelKey: import("vue-types").VueTypeDef<string | number>;
    collapsible: {
        type: PropType<CollapsibleType>;
    };
    role: StringConstructor;
    onItemClick: {
        type: PropType<(panelKey: Key) => void>;
    };
};
export { collapseProps, collapsePanelProps };
