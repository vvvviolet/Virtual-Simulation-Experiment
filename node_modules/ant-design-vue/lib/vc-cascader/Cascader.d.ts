import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { BaseSelectRef } from '../vc-select';
import type { Placement } from '../vc-select/BaseSelect';
import type { VueNode } from '../_util/type';
import { SHOW_PARENT, SHOW_CHILD } from './utils/commonUtil';
export { SHOW_PARENT, SHOW_CHILD };
export interface ShowSearchType<OptionType extends BaseOptionType = DefaultOptionType> {
    filter?: (inputValue: string, options: OptionType[], fieldNames: FieldNames) => boolean;
    render?: (arg?: {
        inputValue: string;
        path: OptionType[];
        prefixCls: string;
        fieldNames: FieldNames;
    }) => any;
    sort?: (a: OptionType[], b: OptionType[], inputValue: string, fieldNames: FieldNames) => number;
    matchInputWidth?: boolean;
    limit?: number | false;
}
export interface FieldNames {
    label?: string;
    value?: string;
    children?: string;
}
export interface InternalFieldNames extends Required<FieldNames> {
    key: string;
}
export declare type SingleValueType = (string | number)[];
export declare type ValueType = SingleValueType | SingleValueType[];
export declare type ShowCheckedStrategy = typeof SHOW_PARENT | typeof SHOW_CHILD;
export interface BaseOptionType {
    disabled?: boolean;
    [name: string]: any;
}
export interface DefaultOptionType extends BaseOptionType {
    label?: any;
    value?: string | number | null;
    children?: DefaultOptionType[];
}
declare function baseCascaderProps<OptionType extends BaseOptionType = DefaultOptionType>(): {
    id: StringConstructor;
    prefixCls: StringConstructor;
    fieldNames: PropType<FieldNames>;
    children: PropType<VueNode[]>;
    value: {
        type: PropType<ValueType>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: OptionType[];
    }) => any>;
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    showCheckedStrategy: {
        type: PropType<ShowCheckedStrategy>;
        default: string;
    };
    showSearch: {
        type: PropType<boolean | ShowSearchType<OptionType>>;
        default: boolean | ShowSearchType<OptionType>;
    };
    searchValue: StringConstructor;
    onSearch: PropType<(value: string) => void>;
    expandTrigger: PropType<"click" | "hover">;
    options: PropType<OptionType[]>;
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls: StringConstructor;
    loadData: PropType<(selectOptions: OptionType[]) => void>;
    /** @deprecated Use `open` instead */
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `dropdownStyle` instead */
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `placement` instead */
    popupPlacement: PropType<Placement>;
    placement: PropType<Placement>;
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    autofocus: BooleanConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
};
export declare type BaseCascaderProps = Partial<ExtractPropTypes<ReturnType<typeof baseCascaderProps>>>;
declare type OnSingleChange<OptionType> = (value: SingleValueType, selectOptions: OptionType[]) => void;
declare type OnMultipleChange<OptionType> = (value: SingleValueType[], selectOptions: OptionType[][]) => void;
export declare function singleCascaderProps<OptionType extends BaseOptionType = DefaultOptionType>(): {
    checkable: PropType<false>;
    onChange: PropType<OnSingleChange<OptionType>>;
    id: StringConstructor;
    prefixCls: StringConstructor;
    fieldNames: PropType<FieldNames>;
    children: PropType<VueNode[]>;
    value: {
        type: PropType<ValueType>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    showCheckedStrategy: {
        type: PropType<ShowCheckedStrategy>;
        default: string;
    };
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
    onSearch: PropType<(value: string) => void>;
    expandTrigger: PropType<"click" | "hover">;
    options: PropType<DefaultOptionType[]>;
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls: StringConstructor;
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    /** @deprecated Use `open` instead */
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `dropdownStyle` instead */
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `placement` instead */
    popupPlacement: PropType<Placement>;
    placement: PropType<Placement>;
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    autofocus: BooleanConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
};
export declare type SingleCascaderProps = Partial<ExtractPropTypes<ReturnType<typeof singleCascaderProps>>>;
export declare function multipleCascaderProps<OptionType extends BaseOptionType = DefaultOptionType>(): {
    checkable: PropType<true>;
    onChange: PropType<OnMultipleChange<OptionType>>;
    id: StringConstructor;
    prefixCls: StringConstructor;
    fieldNames: PropType<FieldNames>;
    children: PropType<VueNode[]>;
    value: {
        type: PropType<ValueType>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    showCheckedStrategy: {
        type: PropType<ShowCheckedStrategy>;
        default: string;
    };
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
    onSearch: PropType<(value: string) => void>;
    expandTrigger: PropType<"click" | "hover">;
    options: PropType<DefaultOptionType[]>;
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls: StringConstructor;
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    /** @deprecated Use `open` instead */
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `dropdownStyle` instead */
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `placement` instead */
    popupPlacement: PropType<Placement>;
    placement: PropType<Placement>;
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    autofocus: BooleanConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
};
export declare type MultipleCascaderProps = Partial<ExtractPropTypes<ReturnType<typeof singleCascaderProps>>>;
export declare function internalCascaderProps<OptionType extends BaseOptionType = DefaultOptionType>(): {
    onChange: PropType<(value: ValueType, selectOptions: OptionType[] | OptionType[][]) => void>;
    customSlots: PropType<Record<string, Function>>;
    id: StringConstructor;
    prefixCls: StringConstructor;
    fieldNames: PropType<FieldNames>;
    children: PropType<VueNode[]>;
    value: {
        type: PropType<ValueType>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    showCheckedStrategy: {
        type: PropType<ShowCheckedStrategy>;
        default: string;
    };
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
    onSearch: PropType<(value: string) => void>;
    expandTrigger: PropType<"click" | "hover">;
    options: PropType<DefaultOptionType[]>;
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls: StringConstructor;
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    /** @deprecated Use `open` instead */
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `dropdownStyle` instead */
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `placement` instead */
    popupPlacement: PropType<Placement>;
    placement: PropType<Placement>;
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    autofocus: BooleanConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
};
export declare type CascaderProps = Partial<ExtractPropTypes<ReturnType<typeof internalCascaderProps>>>;
export declare type CascaderRef = Omit<BaseSelectRef, 'scrollTo'>;
declare const _default: import("vue").DefineComponent<{
    onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
    customSlots: PropType<Record<string, Function>>;
    id: StringConstructor;
    prefixCls: StringConstructor;
    fieldNames: PropType<FieldNames>;
    children: PropType<VueNode[]>;
    value: {
        type: PropType<ValueType>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    showCheckedStrategy: {
        type: PropType<ShowCheckedStrategy>;
        default: string;
    };
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
    onSearch: PropType<(value: string) => void>;
    expandTrigger: PropType<"click" | "hover">;
    options: PropType<DefaultOptionType[]>;
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls: StringConstructor;
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    /** @deprecated Use `open` instead */
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `dropdownStyle` instead */
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `placement` instead */
    popupPlacement: PropType<Placement>;
    placement: PropType<Placement>;
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    autofocus: BooleanConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
    customSlots: PropType<Record<string, Function>>;
    id: StringConstructor;
    prefixCls: StringConstructor;
    fieldNames: PropType<FieldNames>;
    children: PropType<VueNode[]>;
    value: {
        type: PropType<ValueType>;
    };
    defaultValue: {
        type: PropType<ValueType>;
    };
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    showCheckedStrategy: {
        type: PropType<ShowCheckedStrategy>;
        default: string;
    };
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
    onSearch: PropType<(value: string) => void>;
    expandTrigger: PropType<"click" | "hover">;
    options: PropType<DefaultOptionType[]>;
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls: StringConstructor;
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    /** @deprecated Use `open` instead */
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `dropdownStyle` instead */
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    /** @deprecated Use `placement` instead */
    popupPlacement: PropType<Placement>;
    placement: PropType<Placement>;
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    autofocus: BooleanConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
}>>, {
    open: boolean;
    disabled: boolean;
    dropdownMatchSelectWidth: number | boolean;
    popupStyle: CSSProperties;
    popupVisible: boolean;
    autofocus: boolean;
    dropdownStyle: CSSProperties;
    checkable: boolean;
    loading: boolean;
    showSearch: boolean | ShowSearchType<DefaultOptionType>;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    changeOnSelect: boolean;
    showCheckedStrategy: ShowCheckedStrategy;
    dropdownMenuColumnStyle: CSSProperties;
}>;
export default _default;
