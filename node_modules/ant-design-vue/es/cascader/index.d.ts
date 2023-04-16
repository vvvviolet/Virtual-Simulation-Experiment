import type { ShowSearchType, FieldNames, BaseOptionType, DefaultOptionType } from '../vc-cascader';
import type { VueNode } from '../_util/type';
import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
import type { ValueType } from '../vc-cascader/Cascader';
export type { BaseOptionType, DefaultOptionType, ShowSearchType };
export declare type FieldNamesType = FieldNames;
export declare type FilledFieldNamesType = Required<FieldNamesType>;
export interface CascaderOptionType extends DefaultOptionType {
    isLeaf?: boolean;
    loading?: boolean;
    children?: CascaderOptionType[];
    [key: string]: any;
}
export declare function cascaderProps<DataNodeType extends CascaderOptionType = CascaderOptionType>(): {
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SizeType>;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
    };
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    options: PropType<DataNodeType[]>;
    'onUpdate:value': PropType<(value: ValueType) => void>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    value: {
        type: PropType<ValueType>;
    };
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    children: PropType<VueNode[]>;
    transitionName: StringConstructor;
    popupClassName: StringConstructor;
    popupStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    id: StringConstructor;
    autofocus: BooleanConstructor;
    defaultValue: {
        type: PropType<ValueType>;
    };
    fieldNames: PropType<FieldNames>;
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
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
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
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
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
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
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    showCheckedStrategy: {
        type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
        default: string;
    };
    expandTrigger: PropType<"click" | "hover">;
    dropdownPrefixCls: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
};
export declare type CascaderProps = Partial<ExtractPropTypes<ReturnType<typeof cascaderProps>>>;
export interface CascaderRef {
    focus: () => void;
    blur: () => void;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            open: boolean;
            multiple: boolean;
            disabled: boolean;
            dropdownMatchSelectWidth: number | boolean;
            popupStyle: import("vue").CSSProperties;
            popupVisible: boolean;
            autofocus: boolean;
            dropdownStyle: import("vue").CSSProperties;
            loading: boolean;
            showSearch: boolean | ShowSearchType<DefaultOptionType>;
            defaultOpen: boolean;
            allowClear: boolean;
            showArrow: boolean;
            bordered: boolean;
            changeOnSelect: boolean;
            showCheckedStrategy: import("../vc-cascader/Cascader").ShowCheckedStrategy;
            dropdownMenuColumnStyle: import("vue").CSSProperties;
        }> & Omit<Readonly<ExtractPropTypes<{
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<SizeType>;
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            placement: {
                type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
            };
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            options: PropType<CascaderOptionType[]>;
            'onUpdate:value': PropType<(value: ValueType) => void>;
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
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
            value: {
                type: PropType<ValueType>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
            };
            dropdownMatchSelectWidth: {
                type: PropType<number | boolean>;
                default: any;
            };
            children: PropType<VueNode[]>;
            transitionName: StringConstructor;
            popupClassName: StringConstructor;
            popupStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            popupVisible: {
                type: BooleanConstructor;
                default: any;
            };
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
            onPopupVisibleChange: PropType<(open: boolean) => void>;
            id: StringConstructor;
            autofocus: BooleanConstructor;
            defaultValue: {
                type: PropType<ValueType>;
            };
            fieldNames: PropType<FieldNames>;
            dropdownStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
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
            loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
            showSearch: {
                type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
                default: boolean | ShowSearchType<DefaultOptionType>;
            };
            searchValue: StringConstructor;
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
            onSearch: PropType<(value: string) => void>;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: PropType<(open: boolean) => void>;
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
            expandIcon: import("vue-types").VueTypeValidableDef<any>;
            changeOnSelect: {
                type: BooleanConstructor;
                default: any;
            };
            displayRender: PropType<(opt: {
                labels: string[];
                selectedOptions?: DefaultOptionType[];
            }) => any>;
            showCheckedStrategy: {
                type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
                default: string;
            };
            expandTrigger: PropType<"click" | "hover">;
            dropdownPrefixCls: StringConstructor;
            dropdownMenuColumnStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loadingIcon: import("vue-types").VueTypeValidableDef<any>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "multiple" | "disabled" | "dropdownMatchSelectWidth" | "popupStyle" | "popupVisible" | "autofocus" | "dropdownStyle" | "loading" | "showSearch" | "defaultOpen" | "allowClear" | "showArrow" | "bordered" | "changeOnSelect" | "showCheckedStrategy" | "dropdownMenuColumnStyle">;
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
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<SizeType>;
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            placement: {
                type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
            };
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            options: PropType<CascaderOptionType[]>;
            'onUpdate:value': PropType<(value: ValueType) => void>;
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
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
            value: {
                type: PropType<ValueType>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
            };
            dropdownMatchSelectWidth: {
                type: PropType<number | boolean>;
                default: any;
            };
            children: PropType<VueNode[]>;
            transitionName: StringConstructor;
            popupClassName: StringConstructor;
            popupStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            popupVisible: {
                type: BooleanConstructor;
                default: any;
            };
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
            onPopupVisibleChange: PropType<(open: boolean) => void>;
            id: StringConstructor;
            autofocus: BooleanConstructor;
            defaultValue: {
                type: PropType<ValueType>;
            };
            fieldNames: PropType<FieldNames>;
            dropdownStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
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
            loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
            showSearch: {
                type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
                default: boolean | ShowSearchType<DefaultOptionType>;
            };
            searchValue: StringConstructor;
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
            onSearch: PropType<(value: string) => void>;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: PropType<(open: boolean) => void>;
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
            expandIcon: import("vue-types").VueTypeValidableDef<any>;
            changeOnSelect: {
                type: BooleanConstructor;
                default: any;
            };
            displayRender: PropType<(opt: {
                labels: string[];
                selectedOptions?: DefaultOptionType[];
            }) => any>;
            showCheckedStrategy: {
                type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
                default: string;
            };
            expandTrigger: PropType<"click" | "hover">;
            dropdownPrefixCls: StringConstructor;
            dropdownMenuColumnStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loadingIcon: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            open: boolean;
            multiple: boolean;
            disabled: boolean;
            dropdownMatchSelectWidth: number | boolean;
            popupStyle: import("vue").CSSProperties;
            popupVisible: boolean;
            autofocus: boolean;
            dropdownStyle: import("vue").CSSProperties;
            loading: boolean;
            showSearch: boolean | ShowSearchType<DefaultOptionType>;
            defaultOpen: boolean;
            allowClear: boolean;
            showArrow: boolean;
            bordered: boolean;
            changeOnSelect: boolean;
            showCheckedStrategy: import("../vc-cascader/Cascader").ShowCheckedStrategy;
            dropdownMenuColumnStyle: import("vue").CSSProperties;
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
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        size: PropType<SizeType>;
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        placement: {
            type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        };
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        options: PropType<CascaderOptionType[]>;
        'onUpdate:value': PropType<(value: ValueType) => void>;
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onClick: PropType<(e: MouseEvent) => void>;
        onMousedown: PropType<(e: MouseEvent) => void>;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
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
        value: {
            type: PropType<ValueType>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
        };
        dropdownMatchSelectWidth: {
            type: PropType<number | boolean>;
            default: any;
        };
        children: PropType<VueNode[]>;
        transitionName: StringConstructor;
        popupClassName: StringConstructor;
        popupStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        popupVisible: {
            type: BooleanConstructor;
            default: any;
        };
        showAction: {
            type: PropType<("click" | "focus")[]>;
        };
        popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
        onPopupVisibleChange: PropType<(open: boolean) => void>;
        id: StringConstructor;
        autofocus: BooleanConstructor;
        defaultValue: {
            type: PropType<ValueType>;
        };
        fieldNames: PropType<FieldNames>;
        dropdownStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
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
        loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
        showSearch: {
            type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
            default: boolean | ShowSearchType<DefaultOptionType>;
        };
        searchValue: StringConstructor;
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
        onSearch: PropType<(value: string) => void>;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        onClear: PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: PropType<(open: boolean) => void>;
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
        expandIcon: import("vue-types").VueTypeValidableDef<any>;
        changeOnSelect: {
            type: BooleanConstructor;
            default: any;
        };
        displayRender: PropType<(opt: {
            labels: string[];
            selectedOptions?: DefaultOptionType[];
        }) => any>;
        showCheckedStrategy: {
            type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
            default: string;
        };
        expandTrigger: PropType<"click" | "hover">;
        dropdownPrefixCls: StringConstructor;
        dropdownMenuColumnStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SizeType>;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
    };
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    options: PropType<CascaderOptionType[]>;
    'onUpdate:value': PropType<(value: ValueType) => void>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
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
    value: {
        type: PropType<ValueType>;
    };
    tabindex: NumberConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    children: PropType<VueNode[]>;
    transitionName: StringConstructor;
    popupClassName: StringConstructor;
    popupStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    id: StringConstructor;
    autofocus: BooleanConstructor;
    defaultValue: {
        type: PropType<ValueType>;
    };
    fieldNames: PropType<FieldNames>;
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
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
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
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
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
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
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    showCheckedStrategy: {
        type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
        default: string;
    };
    expandTrigger: PropType<"click" | "hover">;
    dropdownPrefixCls: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    open: boolean;
    multiple: boolean;
    disabled: boolean;
    dropdownMatchSelectWidth: number | boolean;
    popupStyle: import("vue").CSSProperties;
    popupVisible: boolean;
    autofocus: boolean;
    dropdownStyle: import("vue").CSSProperties;
    loading: boolean;
    showSearch: boolean | ShowSearchType<DefaultOptionType>;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    bordered: boolean;
    changeOnSelect: boolean;
    showCheckedStrategy: import("../vc-cascader/Cascader").ShowCheckedStrategy;
    dropdownMenuColumnStyle: import("vue").CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
