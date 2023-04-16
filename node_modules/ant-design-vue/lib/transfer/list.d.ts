import type { ExtractPropTypes, PropType } from 'vue';
import type { TransferDirection, TransferItem } from './index';
export declare const transferListProps: {
    prefixCls: StringConstructor;
    dataSource: {
        type: PropType<TransferItem[]>;
        default: any[];
    };
    filter: StringConstructor;
    filterOption: FunctionConstructor;
    checkedKeys: import("vue-types").VueTypeDef<string[]>;
    handleFilter: FunctionConstructor;
    handleClear: FunctionConstructor;
    renderItem: FunctionConstructor;
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchPlaceholder: StringConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    itemUnit: StringConstructor;
    itemsUnit: StringConstructor;
    renderList: import("vue-types").VueTypeValidableDef<any>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: PropType<TransferDirection>;
    showSelectAll: {
        type: BooleanConstructor;
        default: any;
    };
    remove: StringConstructor;
    selectAll: StringConstructor;
    selectCurrent: StringConstructor;
    selectInvert: StringConstructor;
    removeAll: StringConstructor;
    removeCurrent: StringConstructor;
    selectAllLabel: import("vue-types").VueTypeValidableDef<any>;
    showRemove: {
        type: BooleanConstructor;
        default: any;
    };
    pagination: import("vue-types").VueTypeValidableDef<any>;
    onItemSelect: FunctionConstructor;
    onItemSelectAll: FunctionConstructor;
    onItemRemove: FunctionConstructor;
    onScroll: FunctionConstructor;
};
export declare type TransferListProps = Partial<ExtractPropTypes<typeof transferListProps>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    dataSource: {
        type: PropType<TransferItem[]>;
        default: any[];
    };
    filter: StringConstructor;
    filterOption: FunctionConstructor;
    checkedKeys: import("vue-types").VueTypeDef<string[]>;
    handleFilter: FunctionConstructor;
    handleClear: FunctionConstructor;
    renderItem: FunctionConstructor;
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchPlaceholder: StringConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    itemUnit: StringConstructor;
    itemsUnit: StringConstructor;
    renderList: import("vue-types").VueTypeValidableDef<any>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: PropType<TransferDirection>;
    showSelectAll: {
        type: BooleanConstructor;
        default: any;
    };
    remove: StringConstructor;
    selectAll: StringConstructor;
    selectCurrent: StringConstructor;
    selectInvert: StringConstructor;
    removeAll: StringConstructor;
    removeCurrent: StringConstructor;
    selectAllLabel: import("vue-types").VueTypeValidableDef<any>;
    showRemove: {
        type: BooleanConstructor;
        default: any;
    };
    pagination: import("vue-types").VueTypeValidableDef<any>;
    onItemSelect: FunctionConstructor;
    onItemSelectAll: FunctionConstructor;
    onItemRemove: FunctionConstructor;
    onScroll: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    dataSource: {
        type: PropType<TransferItem[]>;
        default: any[];
    };
    filter: StringConstructor;
    filterOption: FunctionConstructor;
    checkedKeys: import("vue-types").VueTypeDef<string[]>;
    handleFilter: FunctionConstructor;
    handleClear: FunctionConstructor;
    renderItem: FunctionConstructor;
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchPlaceholder: StringConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    itemUnit: StringConstructor;
    itemsUnit: StringConstructor;
    renderList: import("vue-types").VueTypeValidableDef<any>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: PropType<TransferDirection>;
    showSelectAll: {
        type: BooleanConstructor;
        default: any;
    };
    remove: StringConstructor;
    selectAll: StringConstructor;
    selectCurrent: StringConstructor;
    selectInvert: StringConstructor;
    removeAll: StringConstructor;
    removeCurrent: StringConstructor;
    selectAllLabel: import("vue-types").VueTypeValidableDef<any>;
    showRemove: {
        type: BooleanConstructor;
        default: any;
    };
    pagination: import("vue-types").VueTypeValidableDef<any>;
    onItemSelect: FunctionConstructor;
    onItemSelectAll: FunctionConstructor;
    onItemRemove: FunctionConstructor;
    onScroll: FunctionConstructor;
}>>, {
    disabled: boolean;
    showSearch: boolean;
    showRemove: boolean;
    dataSource: TransferItem[];
    showSelectAll: boolean;
}>;
export default _default;
