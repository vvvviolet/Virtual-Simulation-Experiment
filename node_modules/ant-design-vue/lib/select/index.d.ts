import type { PropType, Plugin, ExtractPropTypes } from 'vue';
import type { BaseSelectRef } from '../vc-select';
import { Option, OptGroup } from '../vc-select';
import type { BaseOptionType, DefaultOptionType } from '../vc-select/Select';
import type { OptionProps } from '../vc-select/Option';
import type { SizeType } from '../config-provider';
declare type RawValue = string | number;
export declare type OptionType = typeof Option;
export type { OptionProps, BaseSelectRef as RefSelectProps, BaseOptionType, DefaultOptionType };
export interface LabeledValue {
    key?: string;
    value: RawValue;
    label?: any;
}
export declare type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[] | undefined;
export declare const selectProps: () => {
    value: {
        type: PropType<SelectValue>;
    };
    defaultValue: {
        type: PropType<SelectValue>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: PropType<SizeType>;
    mode: PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    'onUpdate:value': PropType<(val: SelectValue) => void>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    prefixCls: StringConstructor;
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
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
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
    autofocus: BooleanConstructor;
    options: PropType<DefaultOptionType[]>;
    fieldNames: PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
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
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    filterOption: {
        type: PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
        default: any;
    };
    filterSort: PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
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
};
export declare type SelectProps = Partial<ExtractPropTypes<ReturnType<typeof selectProps>>>;
export declare const SelectOption: any;
export declare const SelectOptGroup: any;
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
            loading: boolean;
            showSearch: boolean;
            choiceTransitionName: string;
            defaultOpen: boolean;
            allowClear: boolean;
            showArrow: boolean;
            autoClearSearchValue: boolean;
            filterOption: boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>;
            defaultActiveFirstOption: boolean;
            labelInValue: boolean;
            bordered: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            value: {
                type: PropType<SelectValue>;
            };
            defaultValue: {
                type: PropType<SelectValue>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            size: PropType<SizeType>;
            mode: PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            'onUpdate:value': PropType<(val: SelectValue) => void>;
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            onSelect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
            prefixCls: StringConstructor;
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
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: PropType<number | boolean>;
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
            autofocus: BooleanConstructor;
            options: PropType<DefaultOptionType[]>;
            fieldNames: PropType<import("../vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
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
            onDeselect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
            filterOption: {
                type: PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
                default: any;
            };
            filterSort: PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "disabled" | "virtual" | "dropdownMatchSelectWidth" | "autofocus" | "loading" | "showSearch" | "choiceTransitionName" | "defaultOpen" | "allowClear" | "showArrow" | "autoClearSearchValue" | "filterOption" | "defaultActiveFirstOption" | "labelInValue" | "bordered">;
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
            value: {
                type: PropType<SelectValue>;
            };
            defaultValue: {
                type: PropType<SelectValue>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            size: PropType<SizeType>;
            mode: PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            'onUpdate:value': PropType<(val: SelectValue) => void>;
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            onSelect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
            prefixCls: StringConstructor;
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
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: PropType<number | boolean>;
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
            autofocus: BooleanConstructor;
            options: PropType<DefaultOptionType[]>;
            fieldNames: PropType<import("../vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
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
            onDeselect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
            filterOption: {
                type: PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
                default: any;
            };
            filterSort: PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
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
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
            filterOption: boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>;
            defaultActiveFirstOption: boolean;
            labelInValue: boolean;
            bordered: boolean;
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
        value: {
            type: PropType<SelectValue>;
        };
        defaultValue: {
            type: PropType<SelectValue>;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        size: PropType<SizeType>;
        mode: PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        'onUpdate:value': PropType<(val: SelectValue) => void>;
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onChange: PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onClick: PropType<(e: MouseEvent) => void>;
        onMousedown: PropType<(e: MouseEvent) => void>;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
        onSelect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
        prefixCls: StringConstructor;
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
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: PropType<number | boolean>;
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
        autofocus: BooleanConstructor;
        options: PropType<DefaultOptionType[]>;
        fieldNames: PropType<import("../vc-select/Select").FieldNames>;
        dropdownStyle: {
            type: PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
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
        onDeselect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
        filterOption: {
            type: PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
            default: any;
        };
        filterSort: PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
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
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    value: {
        type: PropType<SelectValue>;
    };
    defaultValue: {
        type: PropType<SelectValue>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: PropType<SizeType>;
    mode: PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    'onUpdate:value': PropType<(val: SelectValue) => void>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    prefixCls: StringConstructor;
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
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
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
    autofocus: BooleanConstructor;
    options: PropType<DefaultOptionType[]>;
    fieldNames: PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
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
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    filterOption: {
        type: PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
        default: any;
    };
    filterSort: PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
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
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
    filterOption: boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>;
    defaultActiveFirstOption: boolean;
    labelInValue: boolean;
    bordered: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Option: typeof Option;
    readonly OptGroup: typeof OptGroup;
    readonly SECRET_COMBOBOX_MODE_DO_NOT_USE: 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
};
export default _default;
