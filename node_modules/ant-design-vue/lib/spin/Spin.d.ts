import type { VNode, ExtractPropTypes, PropType } from 'vue';
export declare type SpinSize = 'small' | 'default' | 'large';
export declare const spinProps: () => {
    prefixCls: StringConstructor;
    spinning: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SpinSize>;
    wrapperClassName: StringConstructor;
    tip: import("vue-types").VueTypeValidableDef<any>;
    delay: NumberConstructor;
    indicator: import("vue-types").VueTypeValidableDef<any>;
};
export declare type SpinProps = Partial<ExtractPropTypes<ReturnType<typeof spinProps>>>;
export declare function setDefaultIndicator(Content: any): void;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    spinning: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SpinSize>;
    wrapperClassName: StringConstructor;
    tip: import("vue-types").VueTypeValidableDef<any>;
    delay: NumberConstructor;
    indicator: import("vue-types").VueTypeValidableDef<any>;
}, {
    originalUpdateSpinning: any;
    configProvider: {
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
                titles?: ((string | number | boolean | void | VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | JSX.Element | (string | number | boolean | void | VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>)[])[];
                notFoundContent?: (string | number | boolean | void | VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | JSX.Element | (string | number | boolean | void | VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            size: number | import("../config-provider").SizeType;
        };
        direction?: "ltr" | "rtl";
        getTargetContainer?: () => HTMLElement;
        getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
        getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
        renderEmpty?: typeof import("../config-provider/renderEmpty").default;
        transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
        autoInsertSpaceInButton?: boolean;
        pageHeader?: {
            ghost: boolean;
        };
        componentSize?: import("../config-provider").SizeType;
        virtual?: boolean;
    };
}, {
    sSpinning: boolean;
}, {}, {
    debouncifyUpdateSpinning(props?: any): void;
    updateSpinning(): void;
    cancelExistingSpin(): void;
    renderIndicator(prefixCls: string): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    spinning: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SpinSize>;
    wrapperClassName: StringConstructor;
    tip: import("vue-types").VueTypeValidableDef<any>;
    delay: NumberConstructor;
    indicator: import("vue-types").VueTypeValidableDef<any>;
}>>, {
    spinning: boolean;
}>;
export default _default;
