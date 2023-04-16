import type { PropType } from 'vue';
import type { Key, VueNode } from '../_util/type';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    item: import("vue-types").VueTypeValidableDef<any>;
    renderItem: PropType<(item: any) => VueNode>;
    responsive: BooleanConstructor;
    itemKey: {
        type: PropType<string | number>;
    };
    registerSize: PropType<(key: Key, width: number | null) => void>;
    display: BooleanConstructor;
    order: NumberConstructor;
    component: import("vue-types").VueTypeValidableDef<any>;
    invalidate: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    item: import("vue-types").VueTypeValidableDef<any>;
    renderItem: PropType<(item: any) => VueNode>;
    responsive: BooleanConstructor;
    itemKey: {
        type: PropType<string | number>;
    };
    registerSize: PropType<(key: Key, width: number | null) => void>;
    display: BooleanConstructor;
    order: NumberConstructor;
    component: import("vue-types").VueTypeValidableDef<any>;
    invalidate: BooleanConstructor;
}>>, {
    display: boolean;
    responsive: boolean;
    invalidate: boolean;
}>;
export default _default;
