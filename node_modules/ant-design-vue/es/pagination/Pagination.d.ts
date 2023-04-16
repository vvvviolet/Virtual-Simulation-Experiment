import type { ExtractPropTypes, PropType } from 'vue';
export declare const paginationProps: () => {
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
        type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
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
};
export declare type PaginationPosition = 'top' | 'bottom' | 'both';
export declare const paginationConfig: () => {
    position: PropType<PaginationPosition>;
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
        type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
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
};
export declare type PaginationProps = Partial<ExtractPropTypes<ReturnType<typeof paginationProps>>>;
export declare type PaginationConfig = Partial<ExtractPropTypes<ReturnType<typeof paginationConfig>>>;
export interface PaginationLocale {
    items_per_page?: string;
    jump_to?: string;
    jump_to_confirm?: string;
    page?: string;
    prev_page?: string;
    next_page?: string;
    prev_5?: string;
    next_5?: string;
    prev_3?: string;
    next_3?: string;
}
declare const _default: import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>>, {
    disabled: boolean;
    responsive: boolean;
    hideOnSinglePage: boolean;
    showSizeChanger: boolean;
    showLessItems: boolean;
    showQuickJumper: boolean | {
        goButton?: any;
    };
    simple: boolean;
}>;
export default _default;
