import { collapsePanelProps } from './commonProps';
import type { ExtractPropTypes } from 'vue';
export { collapsePanelProps };
export declare type CollapsePanelProps = Partial<ExtractPropTypes<ReturnType<typeof collapsePanelProps>>>;
declare const _default: import("vue").DefineComponent<{
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
    expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    panelKey: import("vue-types").VueTypeDef<string | number>;
    collapsible: {
        type: import("vue").PropType<import("./commonProps").CollapsibleType>;
    };
    role: StringConstructor;
    onItemClick: {
        type: import("vue").PropType<(panelKey: import("../_util/type").Key) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    expandIcon: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    panelKey: import("vue-types").VueTypeDef<string | number>;
    collapsible: {
        type: import("vue").PropType<import("./commonProps").CollapsibleType>;
    };
    role: StringConstructor;
    onItemClick: {
        type: import("vue").PropType<(panelKey: import("../_util/type").Key) => void>;
    };
}>>, {
    disabled: boolean;
    forceRender: boolean;
    openAnimation: {
        [key: string]: any;
    };
    showArrow: boolean;
    isActive: boolean;
    destroyInactivePanel: boolean;
    accordion: boolean;
}>;
export default _default;
