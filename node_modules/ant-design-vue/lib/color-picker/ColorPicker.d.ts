declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            setState(state: {}, callback: any): void;
            __emit(...args: any[]): void;
        };
    }[];
    namespace inject {
        namespace configProvider {
            function _default(): {
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
            export { _default as default };
        }
    }
    namespace model {
        const prop: string;
        const event: string;
    }
    namespace props {
        const prefixCls: StringConstructor;
        const defaultValue: StringConstructor;
        const config: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const value: StringConstructor;
        const locale: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        const colorRounded: NumberConstructor;
        const size: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        const getPopupContainer: FunctionConstructor;
        namespace disabled {
            export const type: BooleanConstructor;
            const _default_1: boolean;
            export { _default_1 as default };
        }
        const format: StringConstructor;
        namespace alpha {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace hue {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
    }
    function data(): {
        colors: string;
        myOpen: boolean;
        pickr: any;
        i18n: {
            'btn:save': string;
            'btn:cancel': string;
            'btn:clear': string;
        };
    };
    function data(): {
        colors: string;
        myOpen: boolean;
        pickr: any;
        i18n: {
            'btn:save': string;
            'btn:cancel': string;
            'btn:clear': string;
        };
    };
    const watch: {
        'configProvider.locale.ColorPicker': {
            handler(val: any): void;
        };
        locale(val: any): void;
        value(val: any): void;
        disabled(val: any): void;
        config: {
            handler(): void;
            deep: boolean;
        };
        format(val: any): void;
    };
    function mounted(): void;
    function mounted(): void;
    function unmounted(): void;
    function unmounted(): void;
    namespace methods {
        function reInitialize(): void;
        function reInitialize(): void;
        const setColor: import("lodash").DebouncedFunc<(val: any) => void>;
        function eventsBinding(): void;
        function eventsBinding(): void;
        function createPickr(): void;
        function createPickr(): void;
        function handleOpenChange(): void;
        function handleOpenChange(): void;
        function getDefaultLocale(): any;
        function getDefaultLocale(): any;
        function renderColorPicker(): JSX.Element;
        function renderColorPicker(): JSX.Element;
    }
    function render(): JSX.Element;
    function render(): JSX.Element;
}
export default _default;
