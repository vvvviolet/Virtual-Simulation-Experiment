import type { InjectionKey } from 'vue';
import type { ColumnType, StickyOffsets } from '../interface';
export declare type FlattenColumns<RecordType> = readonly (ColumnType<RecordType> & {
    scrollbar?: boolean;
})[];
declare type SummaryContextProps = {
    stickyOffsets?: StickyOffsets;
    scrollColumnIndex?: number;
    flattenColumns?: FlattenColumns<any>;
};
export declare const SummaryContextKey: InjectionKey<SummaryContextProps>;
export declare const useProvideSummary: (props: SummaryContextProps) => void;
export declare const useInjectSummary: () => SummaryContextProps;
export {};
