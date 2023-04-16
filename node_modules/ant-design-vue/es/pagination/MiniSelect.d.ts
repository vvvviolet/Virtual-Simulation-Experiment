declare const _default: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<import("../select").SelectValue>;
    };
    defaultValue: {
        type: import("vue").PropType<import("../select").SelectValue>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue").PropType<import("../button").ButtonSize>;
    mode: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    'onUpdate:value': import("vue").PropType<(val: import("../select").SelectValue) => void>;
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onChange: import("vue").PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onClick: import("vue").PropType<(e: MouseEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
    onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    prefixCls: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: import("vue").PropType<number | boolean>;
        default: any;
    };
    children: import("vue").PropType<import("../_util/type").VueNode[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    id: StringConstructor;
    placement: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").Placement>;
    };
    autofocus: BooleanConstructor;
    options: import("vue").PropType<import("../select").DefaultOptionType[]>;
    fieldNames: import("vue").PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    searchValue: StringConstructor;
    onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: import("vue").PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: import("vue").PropType<string[]>;
    };
    tagRender: {
        type: import("vue").PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: import("vue").PropType<(option: Record<string, any>) => any>;
    };
    onSearch: import("vue").PropType<(value: string) => void>;
    onClear: import("vue").PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: import("vue").PropType<(open: boolean) => void>;
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
    onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listHeight: NumberConstructor;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    filterOption: {
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    optionLabelProp: StringConstructor;
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: any;
    };
    labelInValue: {
        type: BooleanConstructor;
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<import("../select").SelectValue>;
    };
    defaultValue: {
        type: import("vue").PropType<import("../select").SelectValue>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: import("vue").PropType<import("../button").ButtonSize>;
    mode: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    'onUpdate:value': import("vue").PropType<(val: import("../select").SelectValue) => void>;
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onChange: import("vue").PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onClick: import("vue").PropType<(e: MouseEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
    onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    prefixCls: StringConstructor;
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: import("vue").PropType<number | boolean>;
        default: any;
    };
    children: import("vue").PropType<import("../_util/type").VueNode[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    id: StringConstructor;
    placement: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").Placement>;
    };
    autofocus: BooleanConstructor;
    options: import("vue").PropType<import("../select").DefaultOptionType[]>;
    fieldNames: import("vue").PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    searchValue: StringConstructor;
    onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: import("vue").PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: import("vue").PropType<string[]>;
    };
    tagRender: {
        type: import("vue").PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: import("vue").PropType<(option: Record<string, any>) => any>;
    };
    onSearch: import("vue").PropType<(value: string) => void>;
    onClear: import("vue").PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: import("vue").PropType<(open: boolean) => void>;
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
    onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listHeight: NumberConstructor;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    filterOption: {
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    optionLabelProp: StringConstructor;
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: any;
    };
    labelInValue: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    open: boolean;
    disabled: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    loading: boolean;
    showSearch: boolean;
    choiceTransitionName: string;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    autoClearSearchValue: boolean;
    filterOption: boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>;
    defaultActiveFirstOption: boolean;
    labelInValue: boolean;
    bordered: boolean;
}>;
export default _default;
