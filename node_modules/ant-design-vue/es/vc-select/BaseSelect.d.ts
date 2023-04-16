import type { Key, VueNode } from '../_util/type';
import type { KeyboardEventHandler } from '../_util/EventInterface';
import type { ScrollConfig, ScrollTo } from '../vc-virtual-list/List';
import type { CSSProperties, ExtractPropTypes, PropType, VNode } from 'vue';
import type { BaseOptionType } from './Select';
import type { AlignType } from '../vc-trigger/interface';
export declare type RenderNode = VueNode | ((props: any) => VueNode);
export declare type RenderDOMFunc = (props: any) => HTMLElement;
export declare type Mode = 'multiple' | 'tags' | 'combobox';
export declare type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
export declare type RawValueType = string | number;
export interface RefOptionListProps {
    onKeydown: KeyboardEventHandler;
    onKeyup: KeyboardEventHandler;
    scrollTo?: (index: number | ScrollConfig) => void;
}
export declare type CustomTagProps = {
    label: any;
    value: any;
    disabled: boolean;
    onClose: (event?: MouseEvent) => void;
    closable: boolean;
    option: BaseOptionType;
};
export interface DisplayValueType {
    key?: Key;
    value?: RawValueType;
    label?: any;
    disabled?: boolean;
    option?: BaseOptionType;
}
export declare type BaseSelectRef = {
    focus: () => void;
    blur: () => void;
    scrollTo: ScrollTo;
};
declare const baseSelectPrivateProps: () => {
    prefixCls: StringConstructor;
    id: StringConstructor;
    omitDomProps: PropType<string[]>;
    displayValues: PropType<DisplayValueType[]>;
    onDisplayValuesChange: PropType<(values: DisplayValueType[], info: {
        type: 'add' | 'remove' | 'clear';
        values: DisplayValueType[];
    }) => void>;
    /** Current dropdown list active item string value */
    activeValue: StringConstructor;
    /** Link search input with target element */
    activeDescendantId: StringConstructor;
    onActiveValueChange: PropType<(value: string | null) => void>;
    searchValue: StringConstructor;
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: PropType<(searchValue: string, info: {
        source: 'typing' | 'effect' | 'submit' | 'blur';
    }) => void>;
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit: PropType<(words: string[]) => void>;
    maxLength: NumberConstructor;
    OptionList: import("vue-types").VueTypeValidableDef<any>;
    /** Tell if provided `options` is empty */
    emptyOptions: BooleanConstructor;
};
export declare type DropdownObject = {
    menuNode?: VueNode;
    props?: Record<string, any>;
};
export declare type DropdownRender = (opt?: DropdownObject) => VueNode;
export declare const baseSelectPropsWithoutPrivate: () => {
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    tagRender: {
        type: PropType<(props: CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    tabindex: NumberConstructor;
    autofocus: BooleanConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    choiceTransitionName: StringConstructor;
    mode: PropType<Mode>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    /** @private Internal usage. Do not use in your production. */
    getInputElement: {
        type: PropType<() => any>;
    };
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement: {
        type: PropType<() => any>;
    };
    maxTagTextLength: NumberConstructor;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
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
    /** Clear all icon */
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    /** Selector remove icon */
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    animation: StringConstructor;
    transitionName: StringConstructor;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    dropdownRender: {
        type: PropType<DropdownRender>;
    };
    dropdownAlign: PropType<AlignType>;
    placement: {
        type: PropType<Placement>;
    };
    getPopupContainer: {
        type: PropType<RenderDOMFunc>;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
};
declare const baseSelectProps: () => {
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    tagRender: {
        type: PropType<(props: CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    tabindex: NumberConstructor;
    autofocus: BooleanConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    choiceTransitionName: StringConstructor;
    mode: PropType<Mode>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    /** @private Internal usage. Do not use in your production. */
    getInputElement: {
        type: PropType<() => any>;
    };
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement: {
        type: PropType<() => any>;
    };
    maxTagTextLength: NumberConstructor;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
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
    /** Clear all icon */
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    /** Selector remove icon */
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    animation: StringConstructor;
    transitionName: StringConstructor;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    dropdownRender: {
        type: PropType<DropdownRender>;
    };
    dropdownAlign: PropType<AlignType>;
    placement: {
        type: PropType<Placement>;
    };
    getPopupContainer: {
        type: PropType<RenderDOMFunc>;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    prefixCls: StringConstructor;
    id: StringConstructor;
    omitDomProps: PropType<string[]>;
    displayValues: PropType<DisplayValueType[]>;
    onDisplayValuesChange: PropType<(values: DisplayValueType[], info: {
        type: 'add' | 'remove' | 'clear';
        values: DisplayValueType[];
    }) => void>;
    /** Current dropdown list active item string value */
    activeValue: StringConstructor;
    /** Link search input with target element */
    activeDescendantId: StringConstructor;
    onActiveValueChange: PropType<(value: string | null) => void>;
    searchValue: StringConstructor;
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: PropType<(searchValue: string, info: {
        source: 'typing' | 'effect' | 'submit' | 'blur';
    }) => void>;
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit: PropType<(words: string[]) => void>;
    maxLength: NumberConstructor;
    OptionList: import("vue-types").VueTypeValidableDef<any>;
    /** Tell if provided `options` is empty */
    emptyOptions: BooleanConstructor;
};
export declare type BaseSelectPrivateProps = Partial<ExtractPropTypes<ReturnType<typeof baseSelectPrivateProps>>>;
export declare type BaseSelectProps = Partial<ExtractPropTypes<ReturnType<typeof baseSelectProps>>>;
export declare type BaseSelectPropsWithoutPrivate = Omit<BaseSelectProps, keyof BaseSelectPrivateProps>;
export declare function isMultiple(mode: Mode): boolean;
declare const _default: import("vue").DefineComponent<{
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    tagRender: {
        type: PropType<(props: CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    tabindex: NumberConstructor;
    autofocus: BooleanConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    choiceTransitionName: StringConstructor;
    mode: PropType<Mode>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    /** @private Internal usage. Do not use in your production. */
    getInputElement: {
        type: PropType<() => any>;
    };
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement: {
        type: PropType<() => any>;
    };
    maxTagTextLength: NumberConstructor;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
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
    /** Clear all icon */
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    /** Selector remove icon */
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    animation: StringConstructor;
    transitionName: StringConstructor;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    dropdownRender: {
        type: PropType<DropdownRender>;
    };
    dropdownAlign: PropType<AlignType>;
    placement: {
        type: PropType<Placement>;
    };
    getPopupContainer: {
        type: PropType<RenderDOMFunc>;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    prefixCls: StringConstructor;
    id: StringConstructor;
    omitDomProps: PropType<string[]>;
    displayValues: PropType<DisplayValueType[]>;
    onDisplayValuesChange: PropType<(values: DisplayValueType[], info: {
        type: "clear" | "add" | "remove";
        values: DisplayValueType[];
    }) => void>;
    /** Current dropdown list active item string value */
    activeValue: StringConstructor;
    /** Link search input with target element */
    activeDescendantId: StringConstructor;
    onActiveValueChange: PropType<(value: string) => void>;
    searchValue: StringConstructor;
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: PropType<(searchValue: string, info: {
        source: "submit" | "blur" | "typing" | "effect";
    }) => void>;
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit: PropType<(words: string[]) => void>;
    maxLength: NumberConstructor;
    OptionList: import("vue-types").VueTypeValidableDef<any>;
    /** Tell if provided `options` is empty */
    emptyOptions: BooleanConstructor;
}, () => JSX.Element | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    tagRender: {
        type: PropType<(props: CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    tabindex: NumberConstructor;
    autofocus: BooleanConstructor;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    choiceTransitionName: StringConstructor;
    mode: PropType<Mode>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    /** @private Internal usage. Do not use in your production. */
    getInputElement: {
        type: PropType<() => any>;
    };
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement: {
        type: PropType<() => any>;
    };
    maxTagTextLength: NumberConstructor;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
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
    /** Clear all icon */
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    /** Selector remove icon */
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    animation: StringConstructor;
    transitionName: StringConstructor;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    dropdownRender: {
        type: PropType<DropdownRender>;
    };
    dropdownAlign: PropType<AlignType>;
    placement: {
        type: PropType<Placement>;
    };
    getPopupContainer: {
        type: PropType<RenderDOMFunc>;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    prefixCls: StringConstructor;
    id: StringConstructor;
    omitDomProps: PropType<string[]>;
    displayValues: PropType<DisplayValueType[]>;
    onDisplayValuesChange: PropType<(values: DisplayValueType[], info: {
        type: "clear" | "add" | "remove";
        values: DisplayValueType[];
    }) => void>;
    /** Current dropdown list active item string value */
    activeValue: StringConstructor;
    /** Link search input with target element */
    activeDescendantId: StringConstructor;
    onActiveValueChange: PropType<(value: string) => void>;
    searchValue: StringConstructor;
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: PropType<(searchValue: string, info: {
        source: "submit" | "blur" | "typing" | "effect";
    }) => void>;
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit: PropType<(words: string[]) => void>;
    maxLength: NumberConstructor;
    OptionList: import("vue-types").VueTypeValidableDef<any>;
    /** Tell if provided `options` is empty */
    emptyOptions: BooleanConstructor;
}>>, {
    open: boolean;
    disabled: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    loading: boolean;
    showSearch: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    emptyOptions: boolean;
}>;
export default _default;
