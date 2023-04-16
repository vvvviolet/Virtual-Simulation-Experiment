import type { App, ExtractPropTypes, CSSProperties, PropType } from 'vue';
export declare const autoCompleteProps: () => {
    dataSource: PropType<string[] | {
        value: any;
        text: any;
    }[]>;
    dropdownMenuStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownMatchSelectWidth: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    prefixCls: StringConstructor;
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    backfill: {
        type: BooleanConstructor;
        default: any;
    };
    filterOption: {
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    size: PropType<import("../button").ButtonSize>;
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    animation: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: PropType<import("../select").SelectValue>;
    };
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    children: PropType<import("../_util/type").VueNode[]>;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    id: StringConstructor;
    placement: {
        type: PropType<import("../vc-select/BaseSelect").Placement>;
    };
    defaultValue: {
        type: PropType<import("../select").SelectValue>;
    };
    'onUpdate:value': PropType<(val: import("../select").SelectValue) => void>;
    options: PropType<import("../select").DefaultOptionType[]>;
    fieldNames: PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    searchValue: StringConstructor;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
    };
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listHeight: NumberConstructor;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type AutoCompleteProps = Partial<ExtractPropTypes<ReturnType<typeof autoCompleteProps>>>;
export declare const AutoCompleteOption: import("./Option").OptionFC;
export declare const AutoCompleteOptGroup: import("./OptGroup").OptionGroupFC;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            open: boolean;
            disabled: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            autofocus: boolean;
            showSearch: boolean;
            choiceTransitionName: string;
            defaultOpen: boolean;
            allowClear: boolean;
            showArrow: boolean;
            backfill: boolean;
            autoClearSearchValue: boolean;
            filterOption: boolean | Function;
            defaultActiveFirstOption: boolean;
            bordered: boolean;
            dropdownMenuStyle: CSSProperties;
        }> & Omit<Readonly<ExtractPropTypes<{
            dataSource: PropType<string[] | {
                value: any;
                text: any;
            }[]>;
            dropdownMenuStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            prefixCls: StringConstructor;
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            backfill: {
                type: BooleanConstructor;
                default: any;
            };
            filterOption: {
                type: (FunctionConstructor | BooleanConstructor)[];
                default: boolean;
            };
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: boolean;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
            size: PropType<import("../button").ButtonSize>;
            direction: {
                type: PropType<"ltr" | "rtl">;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            value: {
                type: PropType<import("../select").SelectValue>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            children: PropType<import("../_util/type").VueNode[]>;
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            id: StringConstructor;
            placement: {
                type: PropType<import("../vc-select/BaseSelect").Placement>;
            };
            defaultValue: {
                type: PropType<import("../select").SelectValue>;
            };
            'onUpdate:value': PropType<(val: import("../select").SelectValue) => void>;
            options: PropType<import("../select").DefaultOptionType[]>;
            fieldNames: PropType<import("../vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: PropType<CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            searchValue: StringConstructor;
            onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tokenSeparators: {
                type: PropType<string[]>;
            };
            tagRender: {
                type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
            };
            optionLabelRender: {
                type: PropType<(option: Record<string, any>) => any>;
            };
            onSearch: PropType<(value: string) => void>;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: PropType<(open: boolean) => void>;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: PropType<(e: UIEvent) => void>;
            menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
            filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "disabled" | "virtual" | "dropdownMatchSelectWidth" | "autofocus" | "showSearch" | "choiceTransitionName" | "defaultOpen" | "allowClear" | "showArrow" | "backfill" | "autoClearSearchValue" | "filterOption" | "defaultActiveFirstOption" | "bordered" | "dropdownMenuStyle">;
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
            dataSource: PropType<string[] | {
                value: any;
                text: any;
            }[]>;
            dropdownMenuStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            prefixCls: StringConstructor;
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            backfill: {
                type: BooleanConstructor;
                default: any;
            };
            filterOption: {
                type: (FunctionConstructor | BooleanConstructor)[];
                default: boolean;
            };
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: boolean;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
            size: PropType<import("../button").ButtonSize>;
            direction: {
                type: PropType<"ltr" | "rtl">;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            value: {
                type: PropType<import("../select").SelectValue>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            children: PropType<import("../_util/type").VueNode[]>;
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            id: StringConstructor;
            placement: {
                type: PropType<import("../vc-select/BaseSelect").Placement>;
            };
            defaultValue: {
                type: PropType<import("../select").SelectValue>;
            };
            'onUpdate:value': PropType<(val: import("../select").SelectValue) => void>;
            options: PropType<import("../select").DefaultOptionType[]>;
            fieldNames: PropType<import("../vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: PropType<CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            searchValue: StringConstructor;
            onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tokenSeparators: {
                type: PropType<string[]>;
            };
            tagRender: {
                type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
            };
            optionLabelRender: {
                type: PropType<(option: Record<string, any>) => any>;
            };
            onSearch: PropType<(value: string) => void>;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: PropType<(open: boolean) => void>;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: PropType<(e: UIEvent) => void>;
            menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
            filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            open: boolean;
            disabled: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            autofocus: boolean;
            showSearch: boolean;
            choiceTransitionName: string;
            defaultOpen: boolean;
            allowClear: boolean;
            showArrow: boolean;
            backfill: boolean;
            autoClearSearchValue: boolean;
            filterOption: boolean | Function;
            defaultActiveFirstOption: boolean;
            bordered: boolean;
            dropdownMenuStyle: CSSProperties;
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
        dataSource: PropType<string[] | {
            value: any;
            text: any;
        }[]>;
        dropdownMenuStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        dropdownMatchSelectWidth: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        prefixCls: StringConstructor;
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        backfill: {
            type: BooleanConstructor;
            default: any;
        };
        filterOption: {
            type: (FunctionConstructor | BooleanConstructor)[];
            default: boolean;
        };
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: boolean;
        };
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onClick: PropType<(e: MouseEvent) => void>;
        onMousedown: PropType<(e: MouseEvent) => void>;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
        onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
        size: PropType<import("../button").ButtonSize>;
        direction: {
            type: PropType<"ltr" | "rtl">;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        animation: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        value: {
            type: PropType<import("../select").SelectValue>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        children: PropType<import("../_util/type").VueNode[]>;
        showAction: {
            type: PropType<("click" | "focus")[]>;
        };
        id: StringConstructor;
        placement: {
            type: PropType<import("../vc-select/BaseSelect").Placement>;
        };
        defaultValue: {
            type: PropType<import("../select").SelectValue>;
        };
        'onUpdate:value': PropType<(val: import("../select").SelectValue) => void>;
        options: PropType<import("../select").DefaultOptionType[]>;
        fieldNames: PropType<import("../vc-select/Select").FieldNames>;
        dropdownStyle: {
            type: PropType<CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        searchValue: StringConstructor;
        onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tokenSeparators: {
            type: PropType<string[]>;
        };
        tagRender: {
            type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
        };
        optionLabelRender: {
            type: PropType<(option: Record<string, any>) => any>;
        };
        onSearch: PropType<(value: string) => void>;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        onClear: PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: PropType<(open: boolean) => void>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: PropType<(e: UIEvent) => void>;
        menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
        listHeight: NumberConstructor;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
        filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    dataSource: PropType<string[] | {
        value: any;
        text: any;
    }[]>;
    dropdownMenuStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownMatchSelectWidth: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    prefixCls: StringConstructor;
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    backfill: {
        type: BooleanConstructor;
        default: any;
    };
    filterOption: {
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    size: PropType<import("../button").ButtonSize>;
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    animation: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: PropType<import("../select").SelectValue>;
    };
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    children: PropType<import("../_util/type").VueNode[]>;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    id: StringConstructor;
    placement: {
        type: PropType<import("../vc-select/BaseSelect").Placement>;
    };
    defaultValue: {
        type: PropType<import("../select").SelectValue>;
    };
    'onUpdate:value': PropType<(val: import("../select").SelectValue) => void>;
    options: PropType<import("../select").DefaultOptionType[]>;
    fieldNames: PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    searchValue: StringConstructor;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
    };
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listHeight: NumberConstructor;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    open: boolean;
    disabled: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    showSearch: boolean;
    choiceTransitionName: string;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    backfill: boolean;
    autoClearSearchValue: boolean;
    filterOption: boolean | Function;
    defaultActiveFirstOption: boolean;
    bordered: boolean;
    dropdownMenuStyle: CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Option: import("./Option").OptionFC;
    OptGroup: import("./OptGroup").OptionGroupFC;
    install(app: App): App<any>;
};
export default _default;
