import type { ColumnType, Key, TableLocale, GetPopupContainer } from '../../interface';
import type { FilterState } from '.';
export interface FilterDropdownProps<RecordType> {
    tablePrefixCls: string;
    prefixCls: string;
    dropdownPrefixCls: string;
    column: ColumnType<RecordType>;
    filterState?: FilterState<RecordType>;
    filterMultiple: boolean;
    filterMode?: 'menu' | 'tree';
    filterSearch?: boolean;
    columnKey: Key;
    triggerFilter: (filterState: FilterState<RecordType>) => void;
    locale: TableLocale;
    getPopupContainer?: GetPopupContainer;
}
declare const _default: import("vue").DefineComponent<FilterDropdownProps<any>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<FilterDropdownProps<any>>, {}>;
export default _default;
