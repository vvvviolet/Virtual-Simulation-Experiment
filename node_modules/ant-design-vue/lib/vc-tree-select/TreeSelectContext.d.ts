import type { DefaultOptionType, InternalFieldName, OnInternalSelect } from './TreeSelect';
export interface TreeSelectContextProps {
    virtual?: boolean;
    listHeight: number;
    listItemHeight: number;
    treeData: DefaultOptionType[];
    fieldNames: InternalFieldName;
    onSelect: OnInternalSelect;
}
export declare function useProvideSelectContext(props: TreeSelectContextProps): void;
export default function useInjectSelectContext(): TreeSelectContextProps;
