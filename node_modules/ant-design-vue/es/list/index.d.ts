import type { Plugin, ExtractPropTypes, PropType, HTMLAttributes } from 'vue';
import Item from './Item';
import type { Key } from '../_util/type';
import ItemMeta from './ItemMeta';
export type { ListItemProps } from './Item';
export type { ListItemMetaProps } from './ItemMeta';
export declare type ColumnType = 'gutter' | 'column' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export declare type ColumnCount = number;
export interface ListGridType {
    gutter?: number;
    column?: ColumnCount;
    xs?: ColumnCount;
    sm?: ColumnCount;
    md?: ColumnCount;
    lg?: ColumnCount;
    xl?: ColumnCount;
    xxl?: ColumnCount;
    xxxl?: ColumnCount;
}
export declare type ListSize = 'small' | 'default' | 'large';
export declare type ListItemLayout = 'horizontal' | 'vertical';
export declare const listProps: () => {
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    grid: {
        type: PropType<ListGridType>;
        default: ListGridType;
    };
    itemLayout: PropType<ListItemLayout>;
    loading: {
        type: PropType<boolean | (Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes)>;
        default: boolean | (Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes);
    };
    loadMore: import("vue-types").VueTypeValidableDef<any>;
    pagination: {
        type: PropType<false | Partial<ExtractPropTypes<{
            position: PropType<import("../pagination/Pagination").PaginationPosition>;
            total: NumberConstructor;
            defaultCurrent: NumberConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            current: NumberConstructor;
            defaultPageSize: NumberConstructor;
            pageSize: NumberConstructor;
            hideOnSinglePage: {
                type: BooleanConstructor;
                default: any;
            };
            showSizeChanger: {
                type: BooleanConstructor;
                default: any;
            };
            pageSizeOptions: PropType<(string | number)[]>;
            buildOptionText: PropType<(opt: {
                value: any;
            }) => any>;
            showQuickJumper: {
                type: PropType<boolean | {
                    goButton?: any;
                }>;
                default: boolean | {
                    goButton?: any;
                };
            };
            showTotal: PropType<(total: number, range: [number, number]) => any>;
            size: PropType<"default" | "small">;
            simple: {
                type: BooleanConstructor;
                default: any;
            };
            locale: ObjectConstructor;
            prefixCls: StringConstructor;
            selectPrefixCls: StringConstructor;
            totalBoundaryShowSizeChanger: NumberConstructor;
            selectComponentClass: StringConstructor;
            itemRender: PropType<(opt: {
                page: number;
                type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any>;
            role: StringConstructor;
            responsive: BooleanConstructor;
            showLessItems: {
                type: BooleanConstructor;
                default: any;
            };
            onChange: PropType<(page: number, pageSize: number) => void>;
            onShowSizeChange: PropType<(current: number, size: number) => void>;
            'onUpdate:current': PropType<(current: number) => void>;
            'onUpdate:pageSize': PropType<(size: number) => void>;
        }>>>;
        default: false | Partial<ExtractPropTypes<{
            position: PropType<import("../pagination/Pagination").PaginationPosition>;
            total: NumberConstructor;
            defaultCurrent: NumberConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            current: NumberConstructor;
            defaultPageSize: NumberConstructor;
            pageSize: NumberConstructor;
            hideOnSinglePage: {
                type: BooleanConstructor;
                default: any;
            };
            showSizeChanger: {
                type: BooleanConstructor;
                default: any;
            };
            pageSizeOptions: PropType<(string | number)[]>;
            buildOptionText: PropType<(opt: {
                value: any;
            }) => any>;
            showQuickJumper: {
                type: PropType<boolean | {
                    goButton?: any;
                }>;
                default: boolean | {
                    goButton?: any;
                };
            };
            showTotal: PropType<(total: number, range: [number, number]) => any>;
            size: PropType<"default" | "small">;
            simple: {
                type: BooleanConstructor;
                default: any;
            };
            locale: ObjectConstructor;
            prefixCls: StringConstructor;
            selectPrefixCls: StringConstructor;
            totalBoundaryShowSizeChanger: NumberConstructor;
            selectComponentClass: StringConstructor;
            itemRender: PropType<(opt: {
                page: number;
                type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any>;
            role: StringConstructor;
            responsive: BooleanConstructor;
            showLessItems: {
                type: BooleanConstructor;
                default: any;
            };
            onChange: PropType<(page: number, pageSize: number) => void>;
            onShowSizeChange: PropType<(current: number, size: number) => void>;
            'onUpdate:current': PropType<(current: number) => void>;
            'onUpdate:pageSize': PropType<(size: number) => void>;
        }>>;
    };
    prefixCls: StringConstructor;
    rowKey: PropType<Key | ((item: any) => Key)>;
    renderItem: PropType<(opt: {
        item: any;
        index: number;
    }) => any>;
    size: PropType<ListSize>;
    split: {
        type: BooleanConstructor;
        default: any;
    };
    header: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    locale: {
        type: PropType<ListLocale>;
    };
};
export interface ListLocale {
    emptyText: any;
}
export declare type ListProps = Partial<ExtractPropTypes<ReturnType<typeof listProps>>>;
export { ItemMeta as ListItemMeta, Item as ListItem };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            split: boolean;
            grid: ListGridType;
            loading: boolean | (Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes);
            bordered: boolean;
            pagination: false | Partial<ExtractPropTypes<{
                position: PropType<import("../pagination/Pagination").PaginationPosition>;
                total: NumberConstructor;
                defaultCurrent: NumberConstructor;
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                current: NumberConstructor;
                defaultPageSize: NumberConstructor;
                pageSize: NumberConstructor;
                hideOnSinglePage: {
                    type: BooleanConstructor;
                    default: any;
                };
                showSizeChanger: {
                    type: BooleanConstructor;
                    default: any;
                };
                pageSizeOptions: PropType<(string | number)[]>;
                buildOptionText: PropType<(opt: {
                    value: any;
                }) => any>;
                showQuickJumper: {
                    type: PropType<boolean | {
                        goButton?: any;
                    }>;
                    default: boolean | {
                        goButton?: any;
                    };
                };
                showTotal: PropType<(total: number, range: [number, number]) => any>;
                size: PropType<"default" | "small">;
                simple: {
                    type: BooleanConstructor;
                    default: any;
                };
                locale: ObjectConstructor;
                prefixCls: StringConstructor;
                selectPrefixCls: StringConstructor;
                totalBoundaryShowSizeChanger: NumberConstructor;
                selectComponentClass: StringConstructor;
                itemRender: PropType<(opt: {
                    page: number;
                    type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                    originalElement: any;
                }) => any>;
                role: StringConstructor;
                responsive: BooleanConstructor;
                showLessItems: {
                    type: BooleanConstructor;
                    default: any;
                };
                onChange: PropType<(page: number, pageSize: number) => void>;
                onShowSizeChange: PropType<(current: number, size: number) => void>;
                'onUpdate:current': PropType<(current: number) => void>;
                'onUpdate:pageSize': PropType<(size: number) => void>;
            }>>;
            dataSource: unknown[];
        }> & Omit<Readonly<ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: PropType<ListGridType>;
                default: ListGridType;
            };
            itemLayout: PropType<ListItemLayout>;
            loading: {
                type: PropType<boolean | (Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes)>;
                default: boolean | (Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: PropType<false | Partial<ExtractPropTypes<{
                    position: PropType<import("../pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: PropType<(string | number)[]>;
                    buildOptionText: PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: PropType<(total: number, range: [number, number]) => any>;
                    size: PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: PropType<(current: number, size: number) => void>;
                    'onUpdate:current': PropType<(current: number) => void>;
                    'onUpdate:pageSize': PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<ExtractPropTypes<{
                    position: PropType<import("../pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: PropType<(string | number)[]>;
                    buildOptionText: PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: PropType<(total: number, range: [number, number]) => any>;
                    size: PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: PropType<(current: number, size: number) => void>;
                    'onUpdate:current': PropType<(current: number) => void>;
                    'onUpdate:pageSize': PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: PropType<Key | ((item: any) => Key)>;
            renderItem: PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: PropType<ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: PropType<ListLocale>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "split" | "grid" | "loading" | "bordered" | "pagination" | "dataSource">;
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
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: PropType<ListGridType>;
                default: ListGridType;
            };
            itemLayout: PropType<ListItemLayout>;
            loading: {
                type: PropType<boolean | (Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes)>;
                default: boolean | (Partial<ExtractPropTypes<{
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
                }>> & HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: PropType<false | Partial<ExtractPropTypes<{
                    position: PropType<import("../pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: PropType<(string | number)[]>;
                    buildOptionText: PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: PropType<(total: number, range: [number, number]) => any>;
                    size: PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: PropType<(current: number, size: number) => void>;
                    'onUpdate:current': PropType<(current: number) => void>;
                    'onUpdate:pageSize': PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<ExtractPropTypes<{
                    position: PropType<import("../pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: PropType<(string | number)[]>;
                    buildOptionText: PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: PropType<(total: number, range: [number, number]) => any>;
                    size: PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: PropType<(current: number, size: number) => void>;
                    'onUpdate:current': PropType<(current: number) => void>;
                    'onUpdate:pageSize': PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: PropType<Key | ((item: any) => Key)>;
            renderItem: PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: PropType<ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: PropType<ListLocale>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            split: boolean;
            grid: ListGridType;
            loading: boolean | (Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes);
            bordered: boolean;
            pagination: false | Partial<ExtractPropTypes<{
                position: PropType<import("../pagination/Pagination").PaginationPosition>;
                total: NumberConstructor;
                defaultCurrent: NumberConstructor;
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                current: NumberConstructor;
                defaultPageSize: NumberConstructor;
                pageSize: NumberConstructor;
                hideOnSinglePage: {
                    type: BooleanConstructor;
                    default: any;
                };
                showSizeChanger: {
                    type: BooleanConstructor;
                    default: any;
                };
                pageSizeOptions: PropType<(string | number)[]>;
                buildOptionText: PropType<(opt: {
                    value: any;
                }) => any>;
                showQuickJumper: {
                    type: PropType<boolean | {
                        goButton?: any;
                    }>;
                    default: boolean | {
                        goButton?: any;
                    };
                };
                showTotal: PropType<(total: number, range: [number, number]) => any>;
                size: PropType<"default" | "small">;
                simple: {
                    type: BooleanConstructor;
                    default: any;
                };
                locale: ObjectConstructor;
                prefixCls: StringConstructor;
                selectPrefixCls: StringConstructor;
                totalBoundaryShowSizeChanger: NumberConstructor;
                selectComponentClass: StringConstructor;
                itemRender: PropType<(opt: {
                    page: number;
                    type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                    originalElement: any;
                }) => any>;
                role: StringConstructor;
                responsive: BooleanConstructor;
                showLessItems: {
                    type: BooleanConstructor;
                    default: any;
                };
                onChange: PropType<(page: number, pageSize: number) => void>;
                onShowSizeChange: PropType<(current: number, size: number) => void>;
                'onUpdate:current': PropType<(current: number) => void>;
                'onUpdate:pageSize': PropType<(size: number) => void>;
            }>>;
            dataSource: unknown[];
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
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        extra: import("vue-types").VueTypeValidableDef<any>;
        grid: {
            type: PropType<ListGridType>;
            default: ListGridType;
        };
        itemLayout: PropType<ListItemLayout>;
        loading: {
            type: PropType<boolean | (Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes)>;
            default: boolean | (Partial<ExtractPropTypes<{
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
            }>> & HTMLAttributes);
        };
        loadMore: import("vue-types").VueTypeValidableDef<any>;
        pagination: {
            type: PropType<false | Partial<ExtractPropTypes<{
                position: PropType<import("../pagination/Pagination").PaginationPosition>;
                total: NumberConstructor;
                defaultCurrent: NumberConstructor;
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                current: NumberConstructor;
                defaultPageSize: NumberConstructor;
                pageSize: NumberConstructor;
                hideOnSinglePage: {
                    type: BooleanConstructor;
                    default: any;
                };
                showSizeChanger: {
                    type: BooleanConstructor;
                    default: any;
                };
                pageSizeOptions: PropType<(string | number)[]>;
                buildOptionText: PropType<(opt: {
                    value: any;
                }) => any>;
                showQuickJumper: {
                    type: PropType<boolean | {
                        goButton?: any;
                    }>;
                    default: boolean | {
                        goButton?: any;
                    };
                };
                showTotal: PropType<(total: number, range: [number, number]) => any>;
                size: PropType<"default" | "small">;
                simple: {
                    type: BooleanConstructor;
                    default: any;
                };
                locale: ObjectConstructor;
                prefixCls: StringConstructor;
                selectPrefixCls: StringConstructor;
                totalBoundaryShowSizeChanger: NumberConstructor;
                selectComponentClass: StringConstructor;
                itemRender: PropType<(opt: {
                    page: number;
                    type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                    originalElement: any;
                }) => any>;
                role: StringConstructor;
                responsive: BooleanConstructor;
                showLessItems: {
                    type: BooleanConstructor;
                    default: any;
                };
                onChange: PropType<(page: number, pageSize: number) => void>;
                onShowSizeChange: PropType<(current: number, size: number) => void>;
                'onUpdate:current': PropType<(current: number) => void>;
                'onUpdate:pageSize': PropType<(size: number) => void>;
            }>>>;
            default: false | Partial<ExtractPropTypes<{
                position: PropType<import("../pagination/Pagination").PaginationPosition>;
                total: NumberConstructor;
                defaultCurrent: NumberConstructor;
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                current: NumberConstructor;
                defaultPageSize: NumberConstructor;
                pageSize: NumberConstructor;
                hideOnSinglePage: {
                    type: BooleanConstructor;
                    default: any;
                };
                showSizeChanger: {
                    type: BooleanConstructor;
                    default: any;
                };
                pageSizeOptions: PropType<(string | number)[]>;
                buildOptionText: PropType<(opt: {
                    value: any;
                }) => any>;
                showQuickJumper: {
                    type: PropType<boolean | {
                        goButton?: any;
                    }>;
                    default: boolean | {
                        goButton?: any;
                    };
                };
                showTotal: PropType<(total: number, range: [number, number]) => any>;
                size: PropType<"default" | "small">;
                simple: {
                    type: BooleanConstructor;
                    default: any;
                };
                locale: ObjectConstructor;
                prefixCls: StringConstructor;
                selectPrefixCls: StringConstructor;
                totalBoundaryShowSizeChanger: NumberConstructor;
                selectComponentClass: StringConstructor;
                itemRender: PropType<(opt: {
                    page: number;
                    type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                    originalElement: any;
                }) => any>;
                role: StringConstructor;
                responsive: BooleanConstructor;
                showLessItems: {
                    type: BooleanConstructor;
                    default: any;
                };
                onChange: PropType<(page: number, pageSize: number) => void>;
                onShowSizeChange: PropType<(current: number, size: number) => void>;
                'onUpdate:current': PropType<(current: number) => void>;
                'onUpdate:pageSize': PropType<(size: number) => void>;
            }>>;
        };
        prefixCls: StringConstructor;
        rowKey: PropType<Key | ((item: any) => Key)>;
        renderItem: PropType<(opt: {
            item: any;
            index: number;
        }) => any>;
        size: PropType<ListSize>;
        split: {
            type: BooleanConstructor;
            default: any;
        };
        header: import("vue-types").VueTypeValidableDef<any>;
        footer: import("vue-types").VueTypeValidableDef<any>;
        locale: {
            type: PropType<ListLocale>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    grid: {
        type: PropType<ListGridType>;
        default: ListGridType;
    };
    itemLayout: PropType<ListItemLayout>;
    loading: {
        type: PropType<boolean | (Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes)>;
        default: boolean | (Partial<ExtractPropTypes<{
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
        }>> & HTMLAttributes);
    };
    loadMore: import("vue-types").VueTypeValidableDef<any>;
    pagination: {
        type: PropType<false | Partial<ExtractPropTypes<{
            position: PropType<import("../pagination/Pagination").PaginationPosition>;
            total: NumberConstructor;
            defaultCurrent: NumberConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            current: NumberConstructor;
            defaultPageSize: NumberConstructor;
            pageSize: NumberConstructor;
            hideOnSinglePage: {
                type: BooleanConstructor;
                default: any;
            };
            showSizeChanger: {
                type: BooleanConstructor;
                default: any;
            };
            pageSizeOptions: PropType<(string | number)[]>;
            buildOptionText: PropType<(opt: {
                value: any;
            }) => any>;
            showQuickJumper: {
                type: PropType<boolean | {
                    goButton?: any;
                }>;
                default: boolean | {
                    goButton?: any;
                };
            };
            showTotal: PropType<(total: number, range: [number, number]) => any>;
            size: PropType<"default" | "small">;
            simple: {
                type: BooleanConstructor;
                default: any;
            };
            locale: ObjectConstructor;
            prefixCls: StringConstructor;
            selectPrefixCls: StringConstructor;
            totalBoundaryShowSizeChanger: NumberConstructor;
            selectComponentClass: StringConstructor;
            itemRender: PropType<(opt: {
                page: number;
                type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any>;
            role: StringConstructor;
            responsive: BooleanConstructor;
            showLessItems: {
                type: BooleanConstructor;
                default: any;
            };
            onChange: PropType<(page: number, pageSize: number) => void>;
            onShowSizeChange: PropType<(current: number, size: number) => void>;
            'onUpdate:current': PropType<(current: number) => void>;
            'onUpdate:pageSize': PropType<(size: number) => void>;
        }>>>;
        default: false | Partial<ExtractPropTypes<{
            position: PropType<import("../pagination/Pagination").PaginationPosition>;
            total: NumberConstructor;
            defaultCurrent: NumberConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            current: NumberConstructor;
            defaultPageSize: NumberConstructor;
            pageSize: NumberConstructor;
            hideOnSinglePage: {
                type: BooleanConstructor;
                default: any;
            };
            showSizeChanger: {
                type: BooleanConstructor;
                default: any;
            };
            pageSizeOptions: PropType<(string | number)[]>;
            buildOptionText: PropType<(opt: {
                value: any;
            }) => any>;
            showQuickJumper: {
                type: PropType<boolean | {
                    goButton?: any;
                }>;
                default: boolean | {
                    goButton?: any;
                };
            };
            showTotal: PropType<(total: number, range: [number, number]) => any>;
            size: PropType<"default" | "small">;
            simple: {
                type: BooleanConstructor;
                default: any;
            };
            locale: ObjectConstructor;
            prefixCls: StringConstructor;
            selectPrefixCls: StringConstructor;
            totalBoundaryShowSizeChanger: NumberConstructor;
            selectComponentClass: StringConstructor;
            itemRender: PropType<(opt: {
                page: number;
                type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any>;
            role: StringConstructor;
            responsive: BooleanConstructor;
            showLessItems: {
                type: BooleanConstructor;
                default: any;
            };
            onChange: PropType<(page: number, pageSize: number) => void>;
            onShowSizeChange: PropType<(current: number, size: number) => void>;
            'onUpdate:current': PropType<(current: number) => void>;
            'onUpdate:pageSize': PropType<(size: number) => void>;
        }>>;
    };
    prefixCls: StringConstructor;
    rowKey: PropType<Key | ((item: any) => Key)>;
    renderItem: PropType<(opt: {
        item: any;
        index: number;
    }) => any>;
    size: PropType<ListSize>;
    split: {
        type: BooleanConstructor;
        default: any;
    };
    header: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    locale: {
        type: PropType<ListLocale>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    split: boolean;
    grid: ListGridType;
    loading: boolean | (Partial<ExtractPropTypes<{
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
    }>> & HTMLAttributes);
    bordered: boolean;
    pagination: false | Partial<ExtractPropTypes<{
        position: PropType<import("../pagination/Pagination").PaginationPosition>;
        total: NumberConstructor;
        defaultCurrent: NumberConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        current: NumberConstructor;
        defaultPageSize: NumberConstructor;
        pageSize: NumberConstructor;
        hideOnSinglePage: {
            type: BooleanConstructor;
            default: any;
        };
        showSizeChanger: {
            type: BooleanConstructor;
            default: any;
        };
        pageSizeOptions: PropType<(string | number)[]>;
        buildOptionText: PropType<(opt: {
            value: any;
        }) => any>;
        showQuickJumper: {
            type: PropType<boolean | {
                goButton?: any;
            }>;
            default: boolean | {
                goButton?: any;
            };
        };
        showTotal: PropType<(total: number, range: [number, number]) => any>;
        size: PropType<"default" | "small">;
        simple: {
            type: BooleanConstructor;
            default: any;
        };
        locale: ObjectConstructor;
        prefixCls: StringConstructor;
        selectPrefixCls: StringConstructor;
        totalBoundaryShowSizeChanger: NumberConstructor;
        selectComponentClass: StringConstructor;
        itemRender: PropType<(opt: {
            page: number;
            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
            originalElement: any;
        }) => any>;
        role: StringConstructor;
        responsive: BooleanConstructor;
        showLessItems: {
            type: BooleanConstructor;
            default: any;
        };
        onChange: PropType<(page: number, pageSize: number) => void>;
        onShowSizeChange: PropType<(current: number, size: number) => void>;
        'onUpdate:current': PropType<(current: number) => void>;
        'onUpdate:pageSize': PropType<(size: number) => void>;
    }>>;
    dataSource: unknown[];
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof Item & {
        readonly Meta: typeof ItemMeta;
    };
};
export default _default;
