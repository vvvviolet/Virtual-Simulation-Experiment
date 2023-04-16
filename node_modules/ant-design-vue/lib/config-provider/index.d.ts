import type { UnwrapRef, Plugin, WatchStopHandle } from 'vue';
import defaultRenderEmpty from './renderEmpty';
import type { Locale } from '../locale-provider';
import type { MaybeRef } from '../_util/type';
import type { ValidateMessages } from '../form/interface';
import type { ConfigProviderProps, Theme } from './context';
export type { ConfigProviderProps, Theme, SizeType, Direction, CSPConfig } from './context';
export declare const defaultPrefixCls = "ant";
export declare const globalConfigForApi: {
    form?: {
        validateMessages?: {
            default?: string | (() => string);
            required?: string | (() => string);
            enum?: string | (() => string);
            whitespace?: string | (() => string);
            date?: {
                format?: string | (() => string);
                parse?: string | (() => string);
                invalid?: string | (() => string);
            };
            types?: {
                string?: string | (() => string);
                method?: string | (() => string);
                array?: string | (() => string);
                object?: string | (() => string);
                number?: string | (() => string);
                date?: string | (() => string);
                boolean?: string | (() => string);
                integer?: string | (() => string);
                float?: string | (() => string);
                regexp?: string | (() => string);
                email?: string | (() => string);
                url?: string | (() => string);
                hex?: string | (() => string);
            };
            string?: {
                len?: string | (() => string);
                min?: string | (() => string);
                max?: string | (() => string);
                range?: string | (() => string);
            };
            number?: {
                len?: string | (() => string);
                min?: string | (() => string);
                max?: string | (() => string);
                range?: string | (() => string);
            };
            array?: {
                len?: string | (() => string);
                min?: string | (() => string);
                max?: string | (() => string);
                range?: string | (() => string);
            };
            pattern?: {
                mismatch?: string | (() => string);
            };
        };
        requiredMark?: import("../form/Form").RequiredMark;
        colon?: boolean;
    };
    locale?: {
        locale: string;
        Pagination?: {
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
        };
        Table?: {
            filterTitle?: string;
            filterConfirm?: any;
            filterReset?: any;
            filterEmptyText?: any;
            filterCheckall?: any;
            filterSearchPlaceholder?: any;
            emptyText?: any;
            selectAll?: any;
            selectNone?: any;
            selectInvert?: any;
            selectionAll?: any;
            sortTitle?: string;
            expand?: string;
            collapse?: string;
            triggerDesc?: string;
            triggerAsc?: string;
            cancelSort?: string;
        };
        Popconfirm?: Record<string, any>;
        Form?: {
            optional?: string;
            defaultValidateMessages: {
                default?: string | (() => string);
                required?: string | (() => string);
                enum?: string | (() => string);
                whitespace?: string | (() => string);
                date?: {
                    format?: string | (() => string);
                    parse?: string | (() => string);
                    invalid?: string | (() => string);
                };
                types?: {
                    string?: string | (() => string);
                    method?: string | (() => string);
                    array?: string | (() => string);
                    object?: string | (() => string);
                    number?: string | (() => string);
                    date?: string | (() => string);
                    boolean?: string | (() => string);
                    integer?: string | (() => string);
                    float?: string | (() => string);
                    regexp?: string | (() => string);
                    email?: string | (() => string);
                    url?: string | (() => string);
                    hex?: string | (() => string);
                };
                string?: {
                    len?: string | (() => string);
                    min?: string | (() => string);
                    max?: string | (() => string);
                    range?: string | (() => string);
                };
                number?: {
                    len?: string | (() => string);
                    min?: string | (() => string);
                    max?: string | (() => string);
                    range?: string | (() => string);
                };
                array?: {
                    len?: string | (() => string);
                    min?: string | (() => string);
                    max?: string | (() => string);
                    range?: string | (() => string);
                };
                pattern?: {
                    mismatch?: string | (() => string);
                };
            };
        };
        Image?: {
            preview: string;
        };
        DatePicker?: {
            lang: {
                locale: string;
                monthBeforeYear?: boolean;
                yearFormat: string;
                monthFormat?: string;
                quarterFormat?: string;
                today: string;
                now: string;
                backToToday: string;
                ok: string;
                timeSelect: string;
                dateSelect: string;
                weekSelect?: string;
                clear: string;
                month: string;
                year: string;
                previousMonth: string;
                nextMonth: string;
                monthSelect: string;
                yearSelect: string;
                decadeSelect: string;
                dayFormat: string;
                dateFormat: string;
                dateTimeFormat: string;
                previousYear: string;
                nextYear: string;
                previousDecade: string;
                nextDecade: string;
                previousCentury: string;
                nextCentury: string;
                shortWeekDays?: string[];
                shortMonths?: string[];
                placeholder: string;
                yearPlaceholder?: string;
                quarterPlaceholder?: string;
                monthPlaceholder?: string;
                weekPlaceholder?: string;
                rangeYearPlaceholder?: [string, string];
                rangeQuarterPlaceholder?: [string, string];
                rangeMonthPlaceholder?: [string, string];
                rangeWeekPlaceholder?: [string, string];
                rangePlaceholder?: [string, string];
            };
            timePickerLocale: {
                placeholder?: string;
                rangePlaceholder?: [string, string];
            };
            dateFormat?: string;
            dateTimeFormat?: string;
            weekFormat?: string;
            monthFormat?: string;
        };
        TimePicker?: Record<string, any>;
        Calendar?: Record<string, any>;
        Modal?: {
            okText: string;
            cancelText: string;
            justOkText: string;
        };
        Transfer?: {
            titles?: ((string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>)[])[];
            notFoundContent?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>)[];
            searchPlaceholder?: string;
            itemUnit?: string;
            itemsUnit?: string;
            remove?: string;
            selectAll?: string;
            selectCurrent?: string;
            selectInvert?: string;
            removeAll?: string;
            removeCurrent?: string;
        };
        Select?: Record<string, any>;
        Upload?: {
            uploading?: string;
            removeFile?: string;
            downloadFile?: string;
            uploadError?: string;
            previewFile?: string;
        };
        Empty?: {
            description: string;
        };
        global?: Record<string, any>;
        PageHeader?: {
            back: string;
        };
        Icon?: Record<string, any>;
        Text?: {
            edit?: any;
            copy?: any;
            copied?: any;
            expand?: any;
        };
    };
    csp?: {
        nonce?: string;
    };
    dropdownMatchSelectWidth?: number | boolean;
    notUpdateGlobalConfig?: boolean;
    prefixCls?: string;
    input?: {
        autocomplete: string;
    };
    space?: {
        size: number | import("./context").SizeType;
    };
    direction?: "ltr" | "rtl";
    getTargetContainer?: () => HTMLElement;
    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
    getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
    renderEmpty?: typeof defaultRenderEmpty;
    transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
    autoInsertSpaceInButton?: boolean;
    pageHeader?: {
        ghost: boolean;
    };
    componentSize?: import("./context").SizeType;
    virtual?: boolean;
    getRootPrefixCls?: (rootPrefixCls?: string, customizePrefixCls?: string) => string;
};
declare type GlobalConfigProviderProps = {
    prefixCls?: MaybeRef<ConfigProviderProps['prefixCls']>;
    getPopupContainer?: ConfigProviderProps['getPopupContainer'];
};
declare const setGlobalConfig: (params: GlobalConfigProviderProps & {
    theme?: Theme;
}) => void;
export declare const globalConfig: () => {
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
    getRootPrefixCls: (rootPrefixCls?: string, customizePrefixCls?: string) => string;
};
export declare const defaultConfigProvider: UnwrapRef<ConfigProviderProps>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            form: {
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            };
            locale: Locale;
            csp: import("./context").CSPConfig;
            autoInsertSpaceInButton: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            notUpdateGlobalConfig: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            getTargetContainer: {
                type: import("vue").PropType<() => HTMLElement>;
            };
            getPopupContainer: {
                type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
            };
            prefixCls: StringConstructor;
            getPrefixCls: {
                type: import("vue").PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
            };
            renderEmpty: {
                type: import("vue").PropType<typeof defaultRenderEmpty>;
            };
            transformCellText: {
                type: import("vue").PropType<(tableProps: import("../table/interface").TransformCellTextProps) => any>;
            };
            csp: {
                type: import("vue").PropType<import("./context").CSPConfig>;
                default: import("./context").CSPConfig;
            };
            input: {
                type: import("vue").PropType<{
                    autocomplete: string;
                }>;
            };
            autoInsertSpaceInButton: {
                type: BooleanConstructor;
                default: any;
            };
            locale: {
                type: import("vue").PropType<Locale>;
                default: Locale;
            };
            pageHeader: {
                type: import("vue").PropType<{
                    ghost: boolean;
                }>;
            };
            componentSize: {
                type: import("vue").PropType<import("./context").SizeType>;
            };
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            space: {
                type: import("vue").PropType<{
                    size: number | import("./context").SizeType;
                }>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            form: {
                type: import("vue").PropType<{
                    validateMessages?: ValidateMessages;
                    requiredMark?: import("../form/Form").RequiredMark;
                    colon?: boolean;
                }>;
                default: {
                    validateMessages?: ValidateMessages;
                    requiredMark?: import("../form/Form").RequiredMark;
                    colon?: boolean;
                };
            };
            notUpdateGlobalConfig: BooleanConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "form" | "locale" | "csp" | "autoInsertSpaceInButton" | "virtual" | "dropdownMatchSelectWidth" | "notUpdateGlobalConfig">;
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
            getTargetContainer: {
                type: import("vue").PropType<() => HTMLElement>;
            };
            getPopupContainer: {
                type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
            };
            prefixCls: StringConstructor;
            getPrefixCls: {
                type: import("vue").PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
            };
            renderEmpty: {
                type: import("vue").PropType<typeof defaultRenderEmpty>;
            };
            transformCellText: {
                type: import("vue").PropType<(tableProps: import("../table/interface").TransformCellTextProps) => any>;
            };
            csp: {
                type: import("vue").PropType<import("./context").CSPConfig>;
                default: import("./context").CSPConfig;
            };
            input: {
                type: import("vue").PropType<{
                    autocomplete: string;
                }>;
            };
            autoInsertSpaceInButton: {
                type: BooleanConstructor;
                default: any;
            };
            locale: {
                type: import("vue").PropType<Locale>;
                default: Locale;
            };
            pageHeader: {
                type: import("vue").PropType<{
                    ghost: boolean;
                }>;
            };
            componentSize: {
                type: import("vue").PropType<import("./context").SizeType>;
            };
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            space: {
                type: import("vue").PropType<{
                    size: number | import("./context").SizeType;
                }>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            form: {
                type: import("vue").PropType<{
                    validateMessages?: ValidateMessages;
                    requiredMark?: import("../form/Form").RequiredMark;
                    colon?: boolean;
                }>;
                default: {
                    validateMessages?: ValidateMessages;
                    requiredMark?: import("../form/Form").RequiredMark;
                    colon?: boolean;
                };
            };
            notUpdateGlobalConfig: BooleanConstructor;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            form: {
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            };
            locale: Locale;
            csp: import("./context").CSPConfig;
            autoInsertSpaceInButton: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            notUpdateGlobalConfig: boolean;
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
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        getTargetContainer: {
            type: import("vue").PropType<() => HTMLElement>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
        };
        prefixCls: StringConstructor;
        getPrefixCls: {
            type: import("vue").PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
        };
        renderEmpty: {
            type: import("vue").PropType<typeof defaultRenderEmpty>;
        };
        transformCellText: {
            type: import("vue").PropType<(tableProps: import("../table/interface").TransformCellTextProps) => any>;
        };
        csp: {
            type: import("vue").PropType<import("./context").CSPConfig>;
            default: import("./context").CSPConfig;
        };
        input: {
            type: import("vue").PropType<{
                autocomplete: string;
            }>;
        };
        autoInsertSpaceInButton: {
            type: BooleanConstructor;
            default: any;
        };
        locale: {
            type: import("vue").PropType<Locale>;
            default: Locale;
        };
        pageHeader: {
            type: import("vue").PropType<{
                ghost: boolean;
            }>;
        };
        componentSize: {
            type: import("vue").PropType<import("./context").SizeType>;
        };
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        space: {
            type: import("vue").PropType<{
                size: number | import("./context").SizeType;
            }>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        form: {
            type: import("vue").PropType<{
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            }>;
            default: {
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            };
        };
        notUpdateGlobalConfig: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    getTargetContainer: {
        type: import("vue").PropType<() => HTMLElement>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
    };
    prefixCls: StringConstructor;
    getPrefixCls: {
        type: import("vue").PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
    };
    renderEmpty: {
        type: import("vue").PropType<typeof defaultRenderEmpty>;
    };
    transformCellText: {
        type: import("vue").PropType<(tableProps: import("../table/interface").TransformCellTextProps) => any>;
    };
    csp: {
        type: import("vue").PropType<import("./context").CSPConfig>;
        default: import("./context").CSPConfig;
    };
    input: {
        type: import("vue").PropType<{
            autocomplete: string;
        }>;
    };
    autoInsertSpaceInButton: {
        type: BooleanConstructor;
        default: any;
    };
    locale: {
        type: import("vue").PropType<Locale>;
        default: Locale;
    };
    pageHeader: {
        type: import("vue").PropType<{
            ghost: boolean;
        }>;
    };
    componentSize: {
        type: import("vue").PropType<import("./context").SizeType>;
    };
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
    };
    space: {
        type: import("vue").PropType<{
            size: number | import("./context").SizeType;
        }>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    form: {
        type: import("vue").PropType<{
            validateMessages?: ValidateMessages;
            requiredMark?: import("../form/Form").RequiredMark;
            colon?: boolean;
        }>;
        default: {
            validateMessages?: ValidateMessages;
            requiredMark?: import("../form/Form").RequiredMark;
            colon?: boolean;
        };
    };
    notUpdateGlobalConfig: BooleanConstructor;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    form: {
        validateMessages?: ValidateMessages;
        requiredMark?: import("../form/Form").RequiredMark;
        colon?: boolean;
    };
    locale: Locale;
    csp: import("./context").CSPConfig;
    autoInsertSpaceInButton: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    notUpdateGlobalConfig: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly config: typeof setGlobalConfig;
};
export default _default;
