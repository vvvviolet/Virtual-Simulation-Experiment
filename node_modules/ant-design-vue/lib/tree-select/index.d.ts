import type { App, ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
import type { FieldNames, Key } from '../vc-tree-select/interface';
import type { BaseSelectRef } from '../vc-select';
import type { BaseOptionType, DefaultOptionType } from '../vc-tree-select/TreeSelect';
declare type RawValue = string | number;
export interface LabeledValue {
    key?: string;
    value: RawValue;
    label?: any;
}
export declare type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[];
export declare type RefTreeSelectProps = BaseSelectRef;
export declare function treeSelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType>(): {
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: PropType<SizeType>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    treeLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    replaceFields: {
        type: PropType<FieldNames>;
    };
    'onUpdate:value': {
        type: PropType<(value: any) => void>;
    };
    'onUpdate:treeExpandedKeys': {
        type: PropType<(keys: Key[]) => void>;
    };
    'onUpdate:searchValue': {
        type: PropType<(value: string) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: {
        type: PropType<(value: ValueType, labelList: any[], extra: import("../vc-tree-select/TreeSelect").ChangeEventExtra) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
    prefixCls: StringConstructor;
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    animation: StringConstructor;
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
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
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    children: PropType<import("../_util/type").VueNode[]>;
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    id: StringConstructor;
    placement: {
        type: PropType<import("../vc-select/BaseSelect").Placement>;
    };
    autofocus: BooleanConstructor;
    defaultValue: {
        type: PropType<ValueType>;
    };
    fieldNames: {
        type: PropType<import("../vc-tree-select/TreeSelect").FieldNames>;
    };
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    loadData: {
        type: PropType<(dataNode: import("../vc-tree-select/TreeSelect").LegacyDataNode) => Promise<unknown>>;
    };
    filterTreeNode: {
        type: PropType<boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean)>;
        default: any;
    };
    treeData: {
        type: PropType<OptionType[]>;
    };
    treeCheckable: {
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
    maxTagPlaceholder: {
        type: PropType<(omittedValues: import("../vc-select/BaseSelect").DisplayValueType[]) => any>;
    };
    tokenSeparators: {
        type: PropType<string[]>;
    };
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onSearch: {
        type: PropType<(value: string) => void>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
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
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    listHeight: NumberConstructor;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
    labelInValue: {
        type: BooleanConstructor;
        default: any;
    };
    showCheckedStrategy: {
        type: PropType<import("../vc-tree-select/utils/strategyUtil").CheckedStrategy>;
    };
    treeDefaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    treeIcon: import("vue-types").VueTypeValidableDef<any>;
    treeLoadedKeys: {
        type: PropType<Key[]>;
    };
    onTreeLoad: {
        type: PropType<(loadedKeys: Key[]) => void>;
    };
    treeNodeFilterProp: StringConstructor;
    treeNodeLabelProp: StringConstructor;
    treeCheckStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    treeDataSimpleMode: {
        type: PropType<boolean | import("../vc-tree-select/TreeSelect").SimpleModeConfig>;
        default: any;
    };
    treeExpandedKeys: {
        type: PropType<Key[]>;
    };
    treeDefaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    onTreeExpand: {
        type: PropType<(expandedKeys: Key[]) => void>;
    };
    dropdownPopupAlign: import("vue-types").VueTypeValidableDef<any>;
};
export declare type TreeSelectProps = Partial<ExtractPropTypes<ReturnType<typeof treeSelectProps>>>;
export declare const TreeSelectNode: import("vue").FunctionalComponent<import("../vc-tree-select/TreeNode").TreeNodeProps, {}> & {
    isTreeSelectNode: boolean;
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            open: boolean;
            multiple: boolean;
            disabled: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            autofocus: boolean;
            loading: boolean;
            filterTreeNode: boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean);
            treeCheckable: boolean;
            showSearch: boolean;
            defaultOpen: boolean;
            allowClear: boolean;
            showArrow: boolean;
            autoClearSearchValue: boolean;
            labelInValue: boolean;
            bordered: boolean;
            treeDefaultExpandAll: boolean;
            treeLine: boolean | {
                showLeafIcon: boolean;
            };
            treeCheckStrictly: boolean;
            treeDataSimpleMode: any;
        }> & Omit<Readonly<ExtractPropTypes<{
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            size: {
                type: PropType<SizeType>;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            treeLine: {
                type: PropType<boolean | {
                    showLeafIcon: boolean;
                }>;
                default: any;
            };
            replaceFields: {
                type: PropType<FieldNames>;
            };
            'onUpdate:value': {
                type: PropType<(value: any) => void>;
            };
            'onUpdate:treeExpandedKeys': {
                type: PropType<(keys: Key[]) => void>;
            };
            'onUpdate:searchValue': {
                type: PropType<(value: string) => void>;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: {
                type: PropType<(value: any, labelList: any[], extra: import("../vc-tree-select/TreeSelect").ChangeEventExtra) => void>;
            };
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            onSelect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
            prefixCls: StringConstructor;
            direction: {
                type: PropType<"ltr" | "rtl">;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            value: {
                type: PropType<any>;
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
            transitionName: StringConstructor;
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            id: StringConstructor;
            placement: {
                type: PropType<import("../vc-select/BaseSelect").Placement>;
            };
            autofocus: BooleanConstructor;
            defaultValue: {
                type: PropType<any>;
            };
            fieldNames: {
                type: PropType<import("../vc-tree-select/TreeSelect").FieldNames>;
            };
            dropdownStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            switcherIcon: import("vue-types").VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            loadData: {
                type: PropType<(dataNode: import("../vc-tree-select/TreeSelect").LegacyDataNode) => Promise<unknown>>;
            };
            filterTreeNode: {
                type: PropType<boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean)>;
                default: any;
            };
            treeData: {
                type: PropType<DefaultOptionType[]>;
            };
            treeCheckable: {
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
            maxTagPlaceholder: {
                type: PropType<(omittedValues: import("../vc-select/BaseSelect").DisplayValueType[]) => any>;
            };
            tokenSeparators: {
                type: PropType<string[]>;
            };
            tagRender: {
                type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
            };
            choiceTransitionName: StringConstructor;
            optionLabelRender: {
                type: PropType<(option: Record<string, any>) => any>;
            };
            onSearch: {
                type: PropType<(value: string) => void>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: PropType<(open: boolean) => void>;
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
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: PropType<(e: UIEvent) => void>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            onDeselect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
            labelInValue: {
                type: BooleanConstructor;
                default: any;
            };
            showCheckedStrategy: {
                type: PropType<import("../vc-tree-select/utils/strategyUtil").CheckedStrategy>;
            };
            treeDefaultExpandAll: {
                type: BooleanConstructor;
                default: any;
            };
            treeIcon: import("vue-types").VueTypeValidableDef<any>;
            treeLoadedKeys: {
                type: PropType<Key[]>;
            };
            onTreeLoad: {
                type: PropType<(loadedKeys: Key[]) => void>;
            };
            treeNodeFilterProp: StringConstructor;
            treeNodeLabelProp: StringConstructor;
            treeCheckStrictly: {
                type: BooleanConstructor;
                default: any;
            };
            treeDataSimpleMode: {
                type: PropType<boolean | import("../vc-tree-select/TreeSelect").SimpleModeConfig>;
                default: any;
            };
            treeExpandedKeys: {
                type: PropType<Key[]>;
            };
            treeDefaultExpandedKeys: {
                type: PropType<Key[]>;
            };
            onTreeExpand: {
                type: PropType<(expandedKeys: Key[]) => void>;
            };
            dropdownPopupAlign: import("vue-types").VueTypeValidableDef<any>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "multiple" | "disabled" | "virtual" | "dropdownMatchSelectWidth" | "autofocus" | "loading" | "filterTreeNode" | "treeCheckable" | "showSearch" | "defaultOpen" | "allowClear" | "showArrow" | "autoClearSearchValue" | "labelInValue" | "bordered" | "treeDefaultExpandAll" | "treeLine" | "treeCheckStrictly" | "treeDataSimpleMode">;
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
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            size: {
                type: PropType<SizeType>;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            treeLine: {
                type: PropType<boolean | {
                    showLeafIcon: boolean;
                }>;
                default: any;
            };
            replaceFields: {
                type: PropType<FieldNames>;
            };
            'onUpdate:value': {
                type: PropType<(value: any) => void>;
            };
            'onUpdate:treeExpandedKeys': {
                type: PropType<(keys: Key[]) => void>;
            };
            'onUpdate:searchValue': {
                type: PropType<(value: string) => void>;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: {
                type: PropType<(value: any, labelList: any[], extra: import("../vc-tree-select/TreeSelect").ChangeEventExtra) => void>;
            };
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            onSelect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
            prefixCls: StringConstructor;
            direction: {
                type: PropType<"ltr" | "rtl">;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            value: {
                type: PropType<any>;
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
            transitionName: StringConstructor;
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            id: StringConstructor;
            placement: {
                type: PropType<import("../vc-select/BaseSelect").Placement>;
            };
            autofocus: BooleanConstructor;
            defaultValue: {
                type: PropType<any>;
            };
            fieldNames: {
                type: PropType<import("../vc-tree-select/TreeSelect").FieldNames>;
            };
            dropdownStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            switcherIcon: import("vue-types").VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            loadData: {
                type: PropType<(dataNode: import("../vc-tree-select/TreeSelect").LegacyDataNode) => Promise<unknown>>;
            };
            filterTreeNode: {
                type: PropType<boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean)>;
                default: any;
            };
            treeData: {
                type: PropType<DefaultOptionType[]>;
            };
            treeCheckable: {
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
            maxTagPlaceholder: {
                type: PropType<(omittedValues: import("../vc-select/BaseSelect").DisplayValueType[]) => any>;
            };
            tokenSeparators: {
                type: PropType<string[]>;
            };
            tagRender: {
                type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
            };
            choiceTransitionName: StringConstructor;
            optionLabelRender: {
                type: PropType<(option: Record<string, any>) => any>;
            };
            onSearch: {
                type: PropType<(value: string) => void>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: PropType<(open: boolean) => void>;
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
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: PropType<(e: UIEvent) => void>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            onDeselect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
            labelInValue: {
                type: BooleanConstructor;
                default: any;
            };
            showCheckedStrategy: {
                type: PropType<import("../vc-tree-select/utils/strategyUtil").CheckedStrategy>;
            };
            treeDefaultExpandAll: {
                type: BooleanConstructor;
                default: any;
            };
            treeIcon: import("vue-types").VueTypeValidableDef<any>;
            treeLoadedKeys: {
                type: PropType<Key[]>;
            };
            onTreeLoad: {
                type: PropType<(loadedKeys: Key[]) => void>;
            };
            treeNodeFilterProp: StringConstructor;
            treeNodeLabelProp: StringConstructor;
            treeCheckStrictly: {
                type: BooleanConstructor;
                default: any;
            };
            treeDataSimpleMode: {
                type: PropType<boolean | import("../vc-tree-select/TreeSelect").SimpleModeConfig>;
                default: any;
            };
            treeExpandedKeys: {
                type: PropType<Key[]>;
            };
            treeDefaultExpandedKeys: {
                type: PropType<Key[]>;
            };
            onTreeExpand: {
                type: PropType<(expandedKeys: Key[]) => void>;
            };
            dropdownPopupAlign: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            open: boolean;
            multiple: boolean;
            disabled: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            autofocus: boolean;
            loading: boolean;
            filterTreeNode: boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean);
            treeCheckable: boolean;
            showSearch: boolean;
            defaultOpen: boolean;
            allowClear: boolean;
            showArrow: boolean;
            autoClearSearchValue: boolean;
            labelInValue: boolean;
            bordered: boolean;
            treeDefaultExpandAll: boolean;
            treeLine: boolean | {
                showLeafIcon: boolean;
            };
            treeCheckStrictly: boolean;
            treeDataSimpleMode: any;
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
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        size: {
            type: PropType<SizeType>;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        treeLine: {
            type: PropType<boolean | {
                showLeafIcon: boolean;
            }>;
            default: any;
        };
        replaceFields: {
            type: PropType<FieldNames>;
        };
        'onUpdate:value': {
            type: PropType<(value: any) => void>;
        };
        'onUpdate:treeExpandedKeys': {
            type: PropType<(keys: Key[]) => void>;
        };
        'onUpdate:searchValue': {
            type: PropType<(value: string) => void>;
        };
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onChange: {
            type: PropType<(value: any, labelList: any[], extra: import("../vc-tree-select/TreeSelect").ChangeEventExtra) => void>;
        };
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onClick: PropType<(e: MouseEvent) => void>;
        onMousedown: PropType<(e: MouseEvent) => void>;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
        onSelect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
        prefixCls: StringConstructor;
        direction: {
            type: PropType<"ltr" | "rtl">;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        animation: StringConstructor;
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        value: {
            type: PropType<any>;
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
        transitionName: StringConstructor;
        showAction: {
            type: PropType<("click" | "focus")[]>;
        };
        id: StringConstructor;
        placement: {
            type: PropType<import("../vc-select/BaseSelect").Placement>;
        };
        autofocus: BooleanConstructor;
        defaultValue: {
            type: PropType<any>;
        };
        fieldNames: {
            type: PropType<import("../vc-tree-select/TreeSelect").FieldNames>;
        };
        dropdownStyle: {
            type: PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        loadData: {
            type: PropType<(dataNode: import("../vc-tree-select/TreeSelect").LegacyDataNode) => Promise<unknown>>;
        };
        filterTreeNode: {
            type: PropType<boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean)>;
            default: any;
        };
        treeData: {
            type: PropType<DefaultOptionType[]>;
        };
        treeCheckable: {
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
        maxTagPlaceholder: {
            type: PropType<(omittedValues: import("../vc-select/BaseSelect").DisplayValueType[]) => any>;
        };
        tokenSeparators: {
            type: PropType<string[]>;
        };
        tagRender: {
            type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
        };
        choiceTransitionName: StringConstructor;
        optionLabelRender: {
            type: PropType<(option: Record<string, any>) => any>;
        };
        onSearch: {
            type: PropType<(value: string) => void>;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        onClear: PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: PropType<(open: boolean) => void>;
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
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: PropType<(e: UIEvent) => void>;
        listHeight: NumberConstructor;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        onDeselect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
        labelInValue: {
            type: BooleanConstructor;
            default: any;
        };
        showCheckedStrategy: {
            type: PropType<import("../vc-tree-select/utils/strategyUtil").CheckedStrategy>;
        };
        treeDefaultExpandAll: {
            type: BooleanConstructor;
            default: any;
        };
        treeIcon: import("vue-types").VueTypeValidableDef<any>;
        treeLoadedKeys: {
            type: PropType<Key[]>;
        };
        onTreeLoad: {
            type: PropType<(loadedKeys: Key[]) => void>;
        };
        treeNodeFilterProp: StringConstructor;
        treeNodeLabelProp: StringConstructor;
        treeCheckStrictly: {
            type: BooleanConstructor;
            default: any;
        };
        treeDataSimpleMode: {
            type: PropType<boolean | import("../vc-tree-select/TreeSelect").SimpleModeConfig>;
            default: any;
        };
        treeExpandedKeys: {
            type: PropType<Key[]>;
        };
        treeDefaultExpandedKeys: {
            type: PropType<Key[]>;
        };
        onTreeExpand: {
            type: PropType<(expandedKeys: Key[]) => void>;
        };
        dropdownPopupAlign: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: PropType<SizeType>;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    treeLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    replaceFields: {
        type: PropType<FieldNames>;
    };
    'onUpdate:value': {
        type: PropType<(value: any) => void>;
    };
    'onUpdate:treeExpandedKeys': {
        type: PropType<(keys: Key[]) => void>;
    };
    'onUpdate:searchValue': {
        type: PropType<(value: string) => void>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: {
        type: PropType<(value: any, labelList: any[], extra: import("../vc-tree-select/TreeSelect").ChangeEventExtra) => void>;
    };
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onClick: PropType<(e: MouseEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
    prefixCls: StringConstructor;
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    animation: StringConstructor;
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    value: {
        type: PropType<any>;
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
    transitionName: StringConstructor;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    id: StringConstructor;
    placement: {
        type: PropType<import("../vc-select/BaseSelect").Placement>;
    };
    autofocus: BooleanConstructor;
    defaultValue: {
        type: PropType<any>;
    };
    fieldNames: {
        type: PropType<import("../vc-tree-select/TreeSelect").FieldNames>;
    };
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    loadData: {
        type: PropType<(dataNode: import("../vc-tree-select/TreeSelect").LegacyDataNode) => Promise<unknown>>;
    };
    filterTreeNode: {
        type: PropType<boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean)>;
        default: any;
    };
    treeData: {
        type: PropType<DefaultOptionType[]>;
    };
    treeCheckable: {
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
    maxTagPlaceholder: {
        type: PropType<(omittedValues: import("../vc-select/BaseSelect").DisplayValueType[]) => any>;
    };
    tokenSeparators: {
        type: PropType<string[]>;
    };
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onSearch: {
        type: PropType<(value: string) => void>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
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
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    listHeight: NumberConstructor;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<unknown, import("../select").BaseOptionType>>;
    labelInValue: {
        type: BooleanConstructor;
        default: any;
    };
    showCheckedStrategy: {
        type: PropType<import("../vc-tree-select/utils/strategyUtil").CheckedStrategy>;
    };
    treeDefaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    treeIcon: import("vue-types").VueTypeValidableDef<any>;
    treeLoadedKeys: {
        type: PropType<Key[]>;
    };
    onTreeLoad: {
        type: PropType<(loadedKeys: Key[]) => void>;
    };
    treeNodeFilterProp: StringConstructor;
    treeNodeLabelProp: StringConstructor;
    treeCheckStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    treeDataSimpleMode: {
        type: PropType<boolean | import("../vc-tree-select/TreeSelect").SimpleModeConfig>;
        default: any;
    };
    treeExpandedKeys: {
        type: PropType<Key[]>;
    };
    treeDefaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    onTreeExpand: {
        type: PropType<(expandedKeys: Key[]) => void>;
    };
    dropdownPopupAlign: import("vue-types").VueTypeValidableDef<any>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    open: boolean;
    multiple: boolean;
    disabled: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    loading: boolean;
    filterTreeNode: boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean);
    treeCheckable: boolean;
    showSearch: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    autoClearSearchValue: boolean;
    labelInValue: boolean;
    bordered: boolean;
    treeDefaultExpandAll: boolean;
    treeLine: boolean | {
        showLeafIcon: boolean;
    };
    treeCheckStrictly: boolean;
    treeDataSimpleMode: any;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    TreeNode: import("vue").FunctionalComponent<import("../vc-tree-select/TreeNode").TreeNodeProps, {}> & {
        isTreeSelectNode: boolean;
    };
    SHOW_ALL: "SHOW_ALL";
    SHOW_PARENT: "SHOW_PARENT";
    SHOW_CHILD: "SHOW_CHILD";
    install: (app: App) => App<any>;
};
export default _default;
