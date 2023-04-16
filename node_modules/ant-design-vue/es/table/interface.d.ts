import type { GetRowKey, ColumnType as RcColumnType, RenderedCell as RcRenderedCell, ExpandableConfig, DefaultRecordType, FixedType } from '../vc-table/interface';
import type { TooltipProps } from '../tooltip';
import type { CheckboxProps } from '../checkbox';
import type { PaginationProps } from '../pagination';
import type { Breakpoint } from '../_util/responsiveObserve';
import type { INTERNAL_SELECTION_ITEM } from './hooks/useSelection';
import type { VueNode } from '../_util/type';
import type { CSSProperties } from 'vue';
export type { GetRowKey, ExpandableConfig };
export declare type Key = string | number;
export declare type RowSelectionType = 'checkbox' | 'radio';
export declare type SelectionItemSelectFn = (currentRowKeys: Key[]) => void;
export declare type ExpandType = null | 'row' | 'nest';
export interface TableLocale {
    filterTitle?: string;
    filterConfirm?: any;
    filterReset?: any;
    filterEmptyText?: any;
    filterCheckall?: any;
    filterSearchPlaceholder?: any;
    emptyText?: any | (() => any);
    selectAll?: any;
    selectNone?: any;
    selectInvert?: any;
    selectionAll?: any;
    sortTitle?: string;
    expand?: string;
    collapse?: string;
    triggerDesc?: string;
    triggerAsc?: string;
    cancelSort?: string;
}
export declare type SortOrder = 'descend' | 'ascend' | null;
declare const TableActions: ["paginate", "sort", "filter"];
export declare type TableAction = typeof TableActions[number];
export declare type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;
export interface ColumnFilterItem {
    text: VueNode;
    value: string | number | boolean;
    children?: ColumnFilterItem[];
}
export interface ColumnTitleProps<RecordType> {
    /** @deprecated Please use `sorterColumns` instead. */
    sortOrder?: SortOrder;
    /** @deprecated Please use `sorterColumns` instead. */
    sortColumn?: ColumnType<RecordType>;
    sortColumns?: {
        column: ColumnType<RecordType>;
        order: SortOrder;
    }[];
    filters?: Record<string, string[]>;
}
export declare type ColumnTitle<RecordType> = VueNode | ((props: ColumnTitleProps<RecordType>) => VueNode);
export declare type FilterValue = (Key | boolean)[];
export declare type FilterKey = Key[] | null;
export declare type FilterSearchType = boolean | ((input: string, record: {}) => boolean);
export interface FilterConfirmProps {
    closeDropdown: boolean;
}
export interface FilterDropdownProps<RecordType> {
    prefixCls: string;
    setSelectedKeys: (selectedKeys: Key[]) => void;
    selectedKeys: Key[];
    confirm: (param?: FilterConfirmProps) => void;
    clearFilters?: () => void;
    filters?: ColumnFilterItem[];
    visible: boolean;
    column: ColumnType<RecordType>;
}
export interface ColumnType<RecordType = DefaultRecordType> extends RcColumnType<RecordType> {
    title?: ColumnTitle<RecordType>;
    sorter?: boolean | CompareFn<RecordType> | {
        compare?: CompareFn<RecordType>;
        /** Config multiple sorter order priority */
        multiple?: number;
    };
    sortOrder?: SortOrder;
    defaultSortOrder?: SortOrder;
    sortDirections?: SortOrder[];
    showSorterTooltip?: boolean | TooltipProps;
    filtered?: boolean;
    filters?: ColumnFilterItem[];
    filterDropdown?: VueNode | ((props: FilterDropdownProps<RecordType>) => VueNode);
    filterMultiple?: boolean;
    filteredValue?: FilterValue | null;
    defaultFilteredValue?: FilterValue | null;
    filterIcon?: VueNode | ((opt: {
        filtered: boolean;
        column: ColumnType;
    }) => VueNode);
    filterMode?: 'menu' | 'tree';
    filterSearch?: boolean;
    onFilter?: (value: string | number | boolean, record: RecordType) => boolean;
    filterDropdownVisible?: boolean;
    onFilterDropdownVisibleChange?: (visible: boolean) => void;
    responsive?: Breakpoint[];
}
export interface ColumnGroupType<RecordType> extends Omit<ColumnType<RecordType>, 'dataIndex'> {
    children: ColumnsType<RecordType>;
}
export declare type ColumnsType<RecordType = DefaultRecordType> = (ColumnGroupType<RecordType> | ColumnType<RecordType>)[];
export interface SelectionItem {
    key: string;
    text: VueNode;
    onSelect?: SelectionItemSelectFn;
}
export declare type SelectionSelectFn<T> = (record: T, selected: boolean, selectedRows: T[], nativeEvent: Event) => void;
export interface TableRowSelection<T = DefaultRecordType> {
    /** Keep the selection keys in list even the key not exist in `dataSource` anymore */
    preserveSelectedRowKeys?: boolean;
    type?: RowSelectionType;
    selectedRowKeys?: Key[];
    defaultSelectedRowKeys?: Key[];
    onChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;
    getCheckboxProps?: (record: T) => Partial<Omit<CheckboxProps, 'checked' | 'defaultChecked'>>;
    onSelect?: SelectionSelectFn<T>;
    onSelectMultiple?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
    /** @deprecated This function is meaningless and should use `onChange` instead */
    onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
    /** @deprecated This function is meaningless and should use `onChange` instead */
    onSelectInvert?: (selectedRowKeys: Key[]) => void;
    onSelectNone?: () => void;
    selections?: INTERNAL_SELECTION_ITEM[] | boolean;
    hideSelectAll?: boolean;
    fixed?: FixedType;
    columnWidth?: string | number;
    columnTitle?: string | VueNode;
    checkStrictly?: boolean;
    renderCell?: (value: boolean, record: T, index: number, originNode: VueNode) => VueNode | RcRenderedCell<T>;
}
export declare type TransformColumns<RecordType> = (columns: ColumnsType<RecordType>) => ColumnsType<RecordType>;
export interface TableCurrentDataSource<RecordType = DefaultRecordType> {
    currentDataSource: RecordType[];
    action: TableAction;
}
export interface SorterResult<RecordType = DefaultRecordType> {
    column?: ColumnType<RecordType>;
    order?: SortOrder;
    field?: Key | readonly Key[];
    columnKey?: Key;
}
export declare type GetPopupContainer = (triggerNode: HTMLElement) => HTMLElement;
declare type TablePaginationPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export interface TablePaginationConfig extends PaginationProps {
    position?: TablePaginationPosition[];
    class?: string;
    style?: CSSProperties;
}
export interface TransformCellTextProps {
    text: any;
    column: ColumnType;
    record: any;
    index: number;
}
