import type { TableProps as RcTableProps } from '../vc-table/Table';
import type { SpinProps } from '../spin';
import type { TooltipProps } from '../tooltip';
import type { TableRowSelection, GetRowKey, ColumnType, ColumnsType, TableCurrentDataSource, SorterResult, GetPopupContainer, TablePaginationConfig, SortOrder, TableLocale, FilterValue } from './interface';
import type { SizeType } from '../config-provider';
import type { CSSProperties, PropType } from 'vue';
import type { DefaultRecordType } from '../vc-table/interface';
import type { ContextSlots } from './context';
export type { ColumnsType, TablePaginationConfig };
export interface TableProps<RecordType = DefaultRecordType> extends Omit<RcTableProps<RecordType>, 'transformColumns' | 'internalHooks' | 'internalRefs' | 'data' | 'columns' | 'scroll' | 'emptyText' | 'canExpandable' | 'onUpdateInternalRefs'> {
    dropdownPrefixCls?: string;
    dataSource?: RcTableProps<RecordType>['data'];
    columns?: ColumnsType<RecordType>;
    pagination?: false | TablePaginationConfig;
    loading?: boolean | SpinProps;
    size?: SizeType;
    bordered?: boolean;
    locale?: TableLocale;
    onChange?: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<RecordType> | SorterResult<RecordType>[], extra: TableCurrentDataSource<RecordType>) => void;
    rowSelection?: TableRowSelection<RecordType>;
    getPopupContainer?: GetPopupContainer;
    scroll?: RcTableProps<RecordType>['scroll'] & {
        scrollToFirstRowOnChange?: boolean;
    };
    sortDirections?: SortOrder[];
    showSorterTooltip?: boolean | TooltipProps;
}
export declare const tableProps: () => {
    prefixCls: {
        type: PropType<string>;
        default: any;
    };
    columns: {
        type: PropType<ColumnsType<any>>;
        default: any;
    };
    rowKey: {
        type: PropType<string | GetRowKey<any>>;
        default: any;
    };
    tableLayout: {
        type: PropType<import("../vc-table/interface").TableLayout>;
        default: any;
    };
    rowClassName: {
        type: PropType<string | import("../vc-table/interface").RowClassName<any>>;
        default: any;
    };
    title: {
        type: PropType<import("../vc-table/interface").PanelRender<any>>;
        default: any;
    };
    footer: {
        type: PropType<import("../vc-table/interface").PanelRender<any>>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    showHeader: {
        type: PropType<boolean>;
        default: any;
    };
    components: {
        type: PropType<import("../vc-table/interface").TableComponents<any>>;
        default: any;
    };
    customRow: {
        type: PropType<import("../vc-table/interface").GetComponentProps<any>>;
        default: any;
    };
    customHeaderRow: {
        type: PropType<import("../vc-table/interface").GetComponentProps<import("../vc-table/interface").ColumnType<any>[]>>;
        default: any;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
        default: any;
    };
    expandFixed: {
        type: PropType<boolean | "left" | "right">;
        default: any;
    };
    expandColumnWidth: {
        type: PropType<number>;
        default: any;
    };
    expandedRowKeys: {
        type: PropType<import("../vc-table/interface").Key[]>;
        default: import("../vc-table/interface").Key[];
    };
    defaultExpandedRowKeys: {
        type: PropType<import("../vc-table/interface").Key[]>;
        default: import("../vc-table/interface").Key[];
    };
    expandedRowRender: {
        type: PropType<import("../vc-table/interface").ExpandedRowRender<any>>;
        default: any;
    };
    expandRowByClick: {
        type: PropType<boolean>;
        default: any;
    };
    expandIcon: {
        type: PropType<import("../vc-table/interface").RenderExpandIcon<any>>;
        default: any;
    };
    onExpand: {
        type: PropType<(expanded: boolean, record: any) => void>;
        default: any;
    };
    onExpandedRowsChange: {
        type: PropType<(expandedKeys: import("../vc-table/interface").Key[]) => void>;
        default: any;
    };
    'onUpdate:expandedRowKeys': {
        type: PropType<(expandedKeys: import("../vc-table/interface").Key[]) => void>;
        default: any;
    };
    defaultExpandAllRows: {
        type: PropType<boolean>;
        default: any;
    };
    indentSize: {
        type: PropType<number>;
        default: any;
    };
    /** @deprecated Please use `EXPAND_COLUMN` in `columns` directly */
    expandIconColumnIndex: {
        type: PropType<number>;
        default: any;
    };
    showExpandColumn: {
        type: BooleanConstructor;
        default: any;
    };
    expandedRowClassName: {
        type: PropType<import("../vc-table/interface").RowClassName<any>>;
        default: any;
    };
    childrenColumnName: {
        type: PropType<string>;
        default: any;
    };
    rowExpandable: {
        type: PropType<(record: any) => boolean>;
        default: any;
    };
    sticky: {
        type: PropType<boolean | import("../vc-table/interface").TableSticky>;
        default: any;
    };
    dropdownPrefixCls: StringConstructor;
    dataSource: {
        type: PropType<any[]>;
        default: any;
    };
    pagination: {
        type: PropType<false | TablePaginationConfig>;
        default: any;
    };
    loading: {
        type: PropType<boolean | Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            spinning: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<import("../spin/Spin").SpinSize>;
            wrapperClassName: StringConstructor;
            tip: import("vue-types").VueTypeValidableDef<any>;
            delay: NumberConstructor;
            indicator: import("vue-types").VueTypeValidableDef<any>;
        }>>>;
        default: any;
    };
    size: {
        type: PropType<SizeType>;
        default: any;
    };
    bordered: BooleanConstructor;
    locale: {
        type: PropType<TableLocale>;
        default: any;
    };
    onChange: {
        type: PropType<(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult | SorterResult[], extra: TableCurrentDataSource) => void>;
        default: any;
    };
    onResizeColumn: {
        type: PropType<(w: number, col: ColumnType) => void>;
        default: any;
    };
    rowSelection: {
        type: PropType<TableRowSelection<any>>;
        default: any;
    };
    getPopupContainer: {
        type: PropType<GetPopupContainer>;
        default: any;
    };
    scroll: {
        type: PropType<{
            x?: string | number | true;
            y?: string | number;
        } & {
            scrollToFirstRowOnChange?: boolean;
        }>;
        default: any;
    };
    sortDirections: {
        type: PropType<SortOrder[]>;
        default: any;
    };
    showSorterTooltip: {
        type: PropType<boolean | Partial<import("vue").ExtractPropTypes<{
            title: import("vue-types").VueTypeValidableDef<any>;
            trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("../tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("../tooltip").AdjustOverflow>;
                default: boolean | import("../tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("../vc-trigger/interface").AlignType>;
                default: import("../vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
                default: import("../vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
        }>>>;
        default: boolean;
    };
    contextSlots: {
        type: PropType<ContextSlots>;
    };
    transformCellText: {
        type: PropType<import("../vc-table/interface").TransformCellText<any>>;
    };
};
declare const Table: import("vue").DefineComponent<TableProps<any>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<TableProps<any>>, {}>;
export default Table;
