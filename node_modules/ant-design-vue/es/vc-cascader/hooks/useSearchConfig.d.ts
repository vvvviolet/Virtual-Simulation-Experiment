import type { BaseCascaderProps } from '../Cascader';
import type { Ref } from 'vue';
export default function useSearchConfig(showSearch?: Ref<BaseCascaderProps['showSearch']>): {
    showSearch: Ref<boolean>;
    searchConfig: Ref<{
        filter?: (inputValue: string, options: import("../Cascader").DefaultOptionType[], fieldNames: import("../Cascader").FieldNames) => boolean;
        render?: (arg?: {
            inputValue: string;
            path: import("../Cascader").DefaultOptionType[];
            prefixCls: string;
            fieldNames: import("../Cascader").FieldNames;
        }) => any;
        sort?: (a: import("../Cascader").DefaultOptionType[], b: import("../Cascader").DefaultOptionType[], inputValue: string, fieldNames: import("../Cascader").FieldNames) => number;
        matchInputWidth?: boolean;
        limit?: number | false;
    }>;
};
