import type { CellType, StickyOffsets, ColumnType, CustomizeComponent, GetComponentProps, DefaultRecordType } from '../interface';
export interface RowProps<RecordType = DefaultRecordType> {
    cells: readonly CellType<RecordType>[];
    stickyOffsets: StickyOffsets;
    flattenColumns: readonly ColumnType<RecordType>[];
    rowComponent: CustomizeComponent;
    cellComponent: CustomizeComponent;
    customHeaderRow: GetComponentProps<readonly ColumnType<RecordType>[]>;
    index: number;
}
declare const _default: import("vue").DefineComponent<RowProps<any>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<RowProps<any>>, {
    rowComponent: any;
    cellComponent: any;
}>;
export default _default;
