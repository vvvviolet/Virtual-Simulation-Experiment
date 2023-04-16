import type { TabPosition, AnimatedConfig } from '../interface';
import type { Key } from '../../../_util/type';
import type { PropType } from 'vue';
export interface TabPanelListProps {
    activeKey: Key;
    id: string;
    rtl: boolean;
    animated?: AnimatedConfig;
    tabPosition?: TabPosition;
    destroyInactiveTabPane?: boolean;
}
declare const _default: import("vue").DefineComponent<{
    activeKey: {
        type: PropType<Key>;
    };
    id: {
        type: StringConstructor;
    };
    rtl: {
        type: BooleanConstructor;
    };
    animated: {
        type: PropType<AnimatedConfig>;
        default: AnimatedConfig;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeKey: {
        type: PropType<Key>;
    };
    id: {
        type: StringConstructor;
    };
    rtl: {
        type: BooleanConstructor;
    };
    animated: {
        type: PropType<AnimatedConfig>;
        default: AnimatedConfig;
    };
    tabPosition: {
        type: PropType<TabPosition>;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
    };
}>>, {
    rtl: boolean;
    animated: AnimatedConfig;
    destroyInactiveTabPane: boolean;
}>;
export default _default;
