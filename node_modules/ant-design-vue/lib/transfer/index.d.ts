import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { VueNode } from '../_util/type';
import type { TransferListBodyProps } from './ListBody';
import type { PaginationType } from './interface';
export type { TransferListProps } from './list';
export type { TransferOperationProps } from './operation';
export type { TransferSearchProps } from './search';
export declare type TransferDirection = 'left' | 'right';
export interface RenderResultObject {
    label: VueNode;
    value: string;
}
export declare type RenderResult = VueNode | RenderResultObject | string | null;
export interface TransferItem {
    key?: string;
    title?: string;
    description?: string;
    disabled?: boolean;
    [name: string]: any;
}
export declare type KeyWise<T> = T & {
    key: string;
};
export declare type KeyWiseTransferItem = KeyWise<TransferItem>;
declare type TransferRender<RecordType> = (item: RecordType) => RenderResult;
export interface ListStyle {
    direction: TransferDirection;
}
export declare type SelectAllLabel = VueNode | ((info: {
    selectedCount: number;
    totalCount: number;
}) => VueNode);
export interface TransferLocale {
    titles: VueNode[];
    notFoundContent?: VueNode;
    searchPlaceholder: string;
    itemUnit: string;
    itemsUnit: string;
    remove: string;
    selectAll: string;
    selectCurrent: string;
    selectInvert: string;
    removeAll: string;
    removeCurrent: string;
}
export declare const transferProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    dataSource: {
        type: PropType<TransferItem[]>;
        default: any[];
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    targetKeys: {
        type: PropType<string[]>;
        default: any;
    };
    selectedKeys: {
        type: PropType<string[]>;
        default: any;
    };
    render: {
        type: PropType<TransferRender<TransferItem>>;
    };
    listStyle: {
        type: PropType<CSSProperties | ((style: ListStyle) => CSSProperties)>;
        default: () => {};
    };
    operationStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    titles: {
        type: PropType<string[]>;
    };
    operations: {
        type: PropType<string[]>;
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterOption: {
        type: PropType<(inputValue: string, item: TransferItem) => boolean>;
    };
    searchPlaceholder: StringConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    locale: {
        type: PropType<Partial<TransferLocale>>;
        default: () => {};
    };
    rowKey: {
        type: PropType<(record: TransferItem) => string>;
    };
    showSelectAll: {
        type: BooleanConstructor;
        default: any;
    };
    selectAllLabels: {
        type: PropType<SelectAllLabel[]>;
    };
    children: {
        type: PropType<(props: TransferListBodyProps) => VueNode>;
    };
    oneWay: {
        type: BooleanConstructor;
        default: any;
    };
    pagination: {
        type: PropType<PaginationType>;
        default: any;
    };
    onChange: PropType<(targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void>;
    onSelectChange: PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
    onSearch: PropType<(direction: TransferDirection, value: string) => void>;
    onScroll: PropType<(direction: TransferDirection, e: UIEvent) => void>;
    'onUpdate:targetKeys': PropType<(keys: string[]) => void>;
    'onUpdate:selectedKeys': PropType<(keys: string[]) => void>;
};
export declare type TransferProps = Partial<ExtractPropTypes<ReturnType<typeof transferProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            listStyle: CSSProperties | ((style: ListStyle) => CSSProperties);
            disabled: boolean;
            locale: {};
            selectedKeys: string[];
            showSearch: boolean;
            pagination: any;
            dataSource: TransferItem[];
            showSelectAll: boolean;
            oneWay: boolean;
            targetKeys: string[];
            operationStyle: CSSProperties;
        }> & Omit<Readonly<ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            dataSource: {
                type: PropType<TransferItem[]>;
                default: any[];
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            targetKeys: {
                type: PropType<string[]>;
                default: any;
            };
            selectedKeys: {
                type: PropType<string[]>;
                default: any;
            };
            render: {
                type: PropType<TransferRender<TransferItem>>;
            };
            listStyle: {
                type: PropType<CSSProperties | ((style: ListStyle) => CSSProperties)>;
                default: () => {};
            };
            operationStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            titles: {
                type: PropType<string[]>;
            };
            operations: {
                type: PropType<string[]>;
            };
            showSearch: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterOption: {
                type: PropType<(inputValue: string, item: TransferItem) => boolean>;
            };
            searchPlaceholder: StringConstructor;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: PropType<Partial<TransferLocale>>;
                default: () => {};
            };
            rowKey: {
                type: PropType<(record: TransferItem) => string>;
            };
            showSelectAll: {
                type: BooleanConstructor;
                default: any;
            };
            selectAllLabels: {
                type: PropType<SelectAllLabel[]>;
            };
            children: {
                type: PropType<(props: Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    } & {
                        default: () => unknown[];
                    };
                    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showRemove: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pagination: import("vue-types").VueTypeValidableDef<any>;
                    onItemSelect: FunctionConstructor;
                    onScroll: FunctionConstructor;
                    onItemRemove: FunctionConstructor;
                }>>) => VueNode>;
            };
            oneWay: {
                type: BooleanConstructor;
                default: any;
            };
            pagination: {
                type: PropType<PaginationType>;
                default: any;
            };
            onChange: PropType<(targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void>;
            onSelectChange: PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
            onSearch: PropType<(direction: TransferDirection, value: string) => void>;
            onScroll: PropType<(direction: TransferDirection, e: UIEvent) => void>;
            'onUpdate:targetKeys': PropType<(keys: string[]) => void>;
            'onUpdate:selectedKeys': PropType<(keys: string[]) => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "listStyle" | "disabled" | "locale" | "selectedKeys" | "showSearch" | "pagination" | "dataSource" | "showSelectAll" | "oneWay" | "targetKeys" | "operationStyle">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            dataSource: {
                type: PropType<TransferItem[]>;
                default: any[];
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            targetKeys: {
                type: PropType<string[]>;
                default: any;
            };
            selectedKeys: {
                type: PropType<string[]>;
                default: any;
            };
            render: {
                type: PropType<TransferRender<TransferItem>>;
            };
            listStyle: {
                type: PropType<CSSProperties | ((style: ListStyle) => CSSProperties)>;
                default: () => {};
            };
            operationStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            titles: {
                type: PropType<string[]>;
            };
            operations: {
                type: PropType<string[]>;
            };
            showSearch: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterOption: {
                type: PropType<(inputValue: string, item: TransferItem) => boolean>;
            };
            searchPlaceholder: StringConstructor;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: PropType<Partial<TransferLocale>>;
                default: () => {};
            };
            rowKey: {
                type: PropType<(record: TransferItem) => string>;
            };
            showSelectAll: {
                type: BooleanConstructor;
                default: any;
            };
            selectAllLabels: {
                type: PropType<SelectAllLabel[]>;
            };
            children: {
                type: PropType<(props: Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    } & {
                        default: () => unknown[];
                    };
                    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showRemove: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pagination: import("vue-types").VueTypeValidableDef<any>;
                    onItemSelect: FunctionConstructor;
                    onScroll: FunctionConstructor;
                    onItemRemove: FunctionConstructor;
                }>>) => VueNode>;
            };
            oneWay: {
                type: BooleanConstructor;
                default: any;
            };
            pagination: {
                type: PropType<PaginationType>;
                default: any;
            };
            onChange: PropType<(targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void>;
            onSelectChange: PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
            onSearch: PropType<(direction: TransferDirection, value: string) => void>;
            onScroll: PropType<(direction: TransferDirection, e: UIEvent) => void>;
            'onUpdate:targetKeys': PropType<(keys: string[]) => void>;
            'onUpdate:selectedKeys': PropType<(keys: string[]) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            listStyle: CSSProperties | ((style: ListStyle) => CSSProperties);
            disabled: boolean;
            locale: {};
            selectedKeys: string[];
            showSearch: boolean;
            pagination: any;
            dataSource: TransferItem[];
            showSelectAll: boolean;
            oneWay: boolean;
            targetKeys: string[];
            operationStyle: CSSProperties;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        id: StringConstructor;
        prefixCls: StringConstructor;
        dataSource: {
            type: PropType<TransferItem[]>;
            default: any[];
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        targetKeys: {
            type: PropType<string[]>;
            default: any;
        };
        selectedKeys: {
            type: PropType<string[]>;
            default: any;
        };
        render: {
            type: PropType<TransferRender<TransferItem>>;
        };
        listStyle: {
            type: PropType<CSSProperties | ((style: ListStyle) => CSSProperties)>;
            default: () => {};
        };
        operationStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        titles: {
            type: PropType<string[]>;
        };
        operations: {
            type: PropType<string[]>;
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterOption: {
            type: PropType<(inputValue: string, item: TransferItem) => boolean>;
        };
        searchPlaceholder: StringConstructor;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        locale: {
            type: PropType<Partial<TransferLocale>>;
            default: () => {};
        };
        rowKey: {
            type: PropType<(record: TransferItem) => string>;
        };
        showSelectAll: {
            type: BooleanConstructor;
            default: any;
        };
        selectAllLabels: {
            type: PropType<SelectAllLabel[]>;
        };
        children: {
            type: PropType<(props: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                } & {
                    default: () => unknown[];
                };
                selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                showRemove: {
                    type: BooleanConstructor;
                    default: any;
                };
                pagination: import("vue-types").VueTypeValidableDef<any>;
                onItemSelect: FunctionConstructor;
                onScroll: FunctionConstructor;
                onItemRemove: FunctionConstructor;
            }>>) => VueNode>;
        };
        oneWay: {
            type: BooleanConstructor;
            default: any;
        };
        pagination: {
            type: PropType<PaginationType>;
            default: any;
        };
        onChange: PropType<(targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void>;
        onSelectChange: PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
        onSearch: PropType<(direction: TransferDirection, value: string) => void>;
        onScroll: PropType<(direction: TransferDirection, e: UIEvent) => void>;
        'onUpdate:targetKeys': PropType<(keys: string[]) => void>;
        'onUpdate:selectedKeys': PropType<(keys: string[]) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    dataSource: {
        type: PropType<TransferItem[]>;
        default: any[];
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    targetKeys: {
        type: PropType<string[]>;
        default: any;
    };
    selectedKeys: {
        type: PropType<string[]>;
        default: any;
    };
    render: {
        type: PropType<TransferRender<TransferItem>>;
    };
    listStyle: {
        type: PropType<CSSProperties | ((style: ListStyle) => CSSProperties)>;
        default: () => {};
    };
    operationStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    titles: {
        type: PropType<string[]>;
    };
    operations: {
        type: PropType<string[]>;
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterOption: {
        type: PropType<(inputValue: string, item: TransferItem) => boolean>;
    };
    searchPlaceholder: StringConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    locale: {
        type: PropType<Partial<TransferLocale>>;
        default: () => {};
    };
    rowKey: {
        type: PropType<(record: TransferItem) => string>;
    };
    showSelectAll: {
        type: BooleanConstructor;
        default: any;
    };
    selectAllLabels: {
        type: PropType<SelectAllLabel[]>;
    };
    children: {
        type: PropType<(props: Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            showRemove: {
                type: BooleanConstructor;
                default: any;
            };
            pagination: import("vue-types").VueTypeValidableDef<any>;
            onItemSelect: FunctionConstructor;
            onScroll: FunctionConstructor;
            onItemRemove: FunctionConstructor;
        }>>) => VueNode>;
    };
    oneWay: {
        type: BooleanConstructor;
        default: any;
    };
    pagination: {
        type: PropType<PaginationType>;
        default: any;
    };
    onChange: PropType<(targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void>;
    onSelectChange: PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
    onSearch: PropType<(direction: TransferDirection, value: string) => void>;
    onScroll: PropType<(direction: TransferDirection, e: UIEvent) => void>;
    'onUpdate:targetKeys': PropType<(keys: string[]) => void>;
    'onUpdate:selectedKeys': PropType<(keys: string[]) => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    listStyle: CSSProperties | ((style: ListStyle) => CSSProperties);
    disabled: boolean;
    locale: {};
    selectedKeys: string[];
    showSearch: boolean;
    pagination: any;
    dataSource: TransferItem[];
    showSelectAll: boolean;
    oneWay: boolean;
    targetKeys: string[];
    operationStyle: CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
