export { paginationProps, paginationConfig } from './Pagination';
export type { PaginationProps, PaginationConfig } from './Pagination';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            responsive: boolean;
            hideOnSinglePage: boolean;
            showSizeChanger: boolean;
            showLessItems: boolean;
            showQuickJumper: boolean | {
                goButton?: any;
            };
            simple: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            pageSizeOptions: import("vue").PropType<(string | number)[]>;
            buildOptionText: import("vue").PropType<(opt: {
                value: any;
            }) => any>;
            showQuickJumper: {
                type: import("vue").PropType<boolean | {
                    goButton?: any;
                }>;
                default: boolean | {
                    goButton?: any;
                };
            };
            showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
            size: import("vue").PropType<"default" | "small">;
            simple: {
                type: BooleanConstructor;
                default: any;
            };
            locale: ObjectConstructor;
            prefixCls: StringConstructor;
            selectPrefixCls: StringConstructor;
            totalBoundaryShowSizeChanger: NumberConstructor;
            selectComponentClass: StringConstructor;
            itemRender: import("vue").PropType<(opt: {
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
            onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
            onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
            'onUpdate:current': import("vue").PropType<(current: number) => void>;
            'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "responsive" | "hideOnSinglePage" | "showSizeChanger" | "showLessItems" | "showQuickJumper" | "simple">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            pageSizeOptions: import("vue").PropType<(string | number)[]>;
            buildOptionText: import("vue").PropType<(opt: {
                value: any;
            }) => any>;
            showQuickJumper: {
                type: import("vue").PropType<boolean | {
                    goButton?: any;
                }>;
                default: boolean | {
                    goButton?: any;
                };
            };
            showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
            size: import("vue").PropType<"default" | "small">;
            simple: {
                type: BooleanConstructor;
                default: any;
            };
            locale: ObjectConstructor;
            prefixCls: StringConstructor;
            selectPrefixCls: StringConstructor;
            totalBoundaryShowSizeChanger: NumberConstructor;
            selectComponentClass: StringConstructor;
            itemRender: import("vue").PropType<(opt: {
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
            onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
            onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
            'onUpdate:current': import("vue").PropType<(current: number) => void>;
            'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            responsive: boolean;
            hideOnSinglePage: boolean;
            showSizeChanger: boolean;
            showLessItems: boolean;
            showQuickJumper: boolean | {
                goButton?: any;
            };
            simple: boolean;
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
    } & Readonly<import("vue").ExtractPropTypes<{
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
        pageSizeOptions: import("vue").PropType<(string | number)[]>;
        buildOptionText: import("vue").PropType<(opt: {
            value: any;
        }) => any>;
        showQuickJumper: {
            type: import("vue").PropType<boolean | {
                goButton?: any;
            }>;
            default: boolean | {
                goButton?: any;
            };
        };
        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
        size: import("vue").PropType<"default" | "small">;
        simple: {
            type: BooleanConstructor;
            default: any;
        };
        locale: ObjectConstructor;
        prefixCls: StringConstructor;
        selectPrefixCls: StringConstructor;
        totalBoundaryShowSizeChanger: NumberConstructor;
        selectComponentClass: StringConstructor;
        itemRender: import("vue").PropType<(opt: {
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
        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
        'onUpdate:current': import("vue").PropType<(current: number) => void>;
        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    pageSizeOptions: import("vue").PropType<(string | number)[]>;
    buildOptionText: import("vue").PropType<(opt: {
        value: any;
    }) => any>;
    showQuickJumper: {
        type: import("vue").PropType<boolean | {
            goButton?: any;
        }>;
        default: boolean | {
            goButton?: any;
        };
    };
    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
    size: import("vue").PropType<"default" | "small">;
    simple: {
        type: BooleanConstructor;
        default: any;
    };
    locale: ObjectConstructor;
    prefixCls: StringConstructor;
    selectPrefixCls: StringConstructor;
    totalBoundaryShowSizeChanger: NumberConstructor;
    selectComponentClass: StringConstructor;
    itemRender: import("vue").PropType<(opt: {
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
    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
    'onUpdate:current': import("vue").PropType<(current: number) => void>;
    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    responsive: boolean;
    hideOnSinglePage: boolean;
    showSizeChanger: boolean;
    showLessItems: boolean;
    showQuickJumper: boolean | {
        goButton?: any;
    };
    simple: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
