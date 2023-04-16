import type { DataIndex, ColumnType, CustomizeComponent, DefaultRecordType, AlignType, CellEllipsisType, TransformCellText, AdditionalProps } from '../interface';
export interface CellProps<RecordType = DefaultRecordType> {
    prefixCls?: string;
    record?: RecordType;
    /** `column` index is the real show rowIndex */
    index?: number;
    /** the index of the record. For the render(value, record, renderIndex) */
    renderIndex?: number;
    dataIndex?: DataIndex;
    customRender?: ColumnType<RecordType>['customRender'];
    component?: CustomizeComponent;
    colSpan?: number;
    rowSpan?: number;
    ellipsis?: CellEllipsisType;
    align?: AlignType;
    fixLeft?: number | false;
    fixRight?: number | false;
    firstFixLeft?: boolean;
    lastFixLeft?: boolean;
    firstFixRight?: boolean;
    lastFixRight?: boolean;
    /** @private Used for `expandable` with nest tree */
    appendNode?: any;
    additionalProps?: AdditionalProps;
    rowType?: 'header' | 'body' | 'footer';
    isSticky?: boolean;
    column?: ColumnType<RecordType>;
    cellType?: 'header' | 'body';
    transformCellText?: TransformCellText<RecordType>;
}
declare const _default: import("vue").DefineComponent<CellProps<any>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<CellProps<any>>, {
    component?: any;
    record?: any;
    appendNode?: any;
}>;
export default _default;
