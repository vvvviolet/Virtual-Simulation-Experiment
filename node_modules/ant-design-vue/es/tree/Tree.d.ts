import type { PropType, ExtractPropTypes } from 'vue';
import type { DataNode, EventDataNode, FieldNames, Key } from '../vc-tree/interface';
import type { TreeNodeProps } from '../vc-tree/props';
export interface AntdTreeNodeAttribute {
    eventKey: string;
    prefixCls: string;
    class: string;
    expanded: boolean;
    selected: boolean;
    checked: boolean;
    halfChecked: boolean;
    children: any;
    title: any;
    pos: string;
    dragOver: boolean;
    dragOverGapTop: boolean;
    dragOverGapBottom: boolean;
    isLeaf: boolean;
    selectable: boolean;
    disabled: boolean;
    disableCheckbox: boolean;
}
export declare type AntTreeNodeProps = TreeNodeProps;
export declare type TreeDataItem = DataNode;
export interface AntTreeNodeBaseEvent {
    node: EventDataNode;
    nativeEvent: MouseEvent;
}
export interface AntTreeNodeCheckedEvent extends AntTreeNodeBaseEvent {
    event: 'check';
    checked?: boolean;
    checkedNodes?: DataNode[];
}
export interface AntTreeNodeSelectedEvent extends AntTreeNodeBaseEvent {
    event: 'select';
    selected?: boolean;
    selectedNodes?: DataNode[];
}
export interface AntTreeNodeExpandedEvent extends AntTreeNodeBaseEvent {
    expanded?: boolean;
}
export interface AntTreeNodeMouseEvent {
    node: EventDataNode;
    event: DragEvent;
}
export interface AntTreeNodeDragEnterEvent extends AntTreeNodeMouseEvent {
    expandedKeys: Key[];
}
export interface AntTreeNodeDropEvent {
    node: EventDataNode;
    dragNode: EventDataNode;
    dragNodesKeys: Key[];
    dropPosition: number;
    dropToGap?: boolean;
    event: MouseEvent;
}
export declare const treeProps: () => {
    showLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    /** 是否支持多选 */
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否自动展开父节点 */
    autoExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否支持选中 */
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否禁用树 */
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开所有树节点 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开对应树节点 */
    defaultExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）展开指定的树节点 */
    expandedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）选中复选框的树节点 */
    checkedKeys: {
        type: PropType<Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }>;
    };
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）设置选中的树节点 */
    selectedKeys: {
        type: PropType<Key[]>;
    };
    /** 默认选中的树节点 */
    defaultSelectedKeys: {
        type: PropType<Key[]>;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    loadedKeys: {
        type: PropType<Key[]>;
    };
    draggable: {
        type: BooleanConstructor;
        default: any;
    };
    showIcon: {
        type: BooleanConstructor;
        default: any;
    };
    icon: {
        type: PropType<(nodeProps: AntdTreeNodeAttribute) => any>;
    };
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    /**
     * @default{title,key,children}
     * deprecated, please use `fieldNames` instead
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: {
        type: PropType<FieldNames>;
    };
    blockNode: {
        type: BooleanConstructor;
        default: any;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<any>;
    onDoubleclick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    'onUpdate:selectedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:checkedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:expandedKeys': PropType<(keys: Key[]) => void>;
    focusable: {
        type: BooleanConstructor;
        default: any;
    };
    activeKey: PropType<Key>;
    tabindex: NumberConstructor;
    children: import("vue-types").VueTypeValidableDef<any>;
    treeData: {
        type: PropType<DataNode[]>;
    };
    fieldNames: {
        type: PropType<FieldNames>;
    };
    allowDrop: {
        type: PropType<import("../vc-tree/props").AllowDrop<DataNode>>;
    };
    dropIndicatorRender: {
        type: PropType<(props: {
            dropPosition: 0 | 1 | -1;
            dropLevelOffset: number;
            indent: number;
            prefixCls: string;
            direction: import("../vc-tree/interface").Direction;
        }) => any>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onContextmenu: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onClick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onDblclick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onScroll: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onExpand: {
        type: PropType<(expandedKeys: Key[], info: {
            node: EventDataNode;
            expanded: boolean;
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onCheck: {
        type: PropType<(checked: Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }, info: import("../vc-tree/props").CheckInfo) => void>;
    };
    onSelect: {
        type: PropType<(selectedKeys: Key[], info: {
            event: "select";
            selected: boolean;
            node: EventDataNode;
            selectedNodes: DataNode[];
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onLoad: {
        type: PropType<(loadedKeys: Key[], info: {
            event: "load";
            node: EventDataNode;
        }) => void>;
    };
    loadData: {
        type: PropType<(treeNode: EventDataNode) => Promise<void>>;
    };
    onMouseenter: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onMouseleave: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onRightClick: {
        type: PropType<(info: {
            event: MouseEvent;
            node: EventDataNode;
        }) => void>;
    };
    onDragstart: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragenter: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            expandedKeys: Key[];
        }) => void>;
    };
    onDragover: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragleave: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragend: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDrop: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            dragNode: EventDataNode;
            dragNodesKeys: Key[];
            dropPosition: number;
            dropToGap: boolean;
        }) => void>;
    };
    onActiveChange: {
        type: PropType<(key: Key) => void>;
    };
    filterTreeNode: {
        type: PropType<(treeNode: EventDataNode) => boolean>;
    };
    motion: import("vue-types").VueTypeValidableDef<any>;
    height: NumberConstructor;
    itemHeight: NumberConstructor;
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: PropType<import("../vc-tree/interface").Direction>;
    };
};
export declare type TreeProps = Partial<ExtractPropTypes<ReturnType<typeof treeProps>>>;
declare const _default: import("vue").DefineComponent<{
    showLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    /** 是否支持多选 */
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否自动展开父节点 */
    autoExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否支持选中 */
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否禁用树 */
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开所有树节点 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开对应树节点 */
    defaultExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）展开指定的树节点 */
    expandedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）选中复选框的树节点 */
    checkedKeys: {
        type: PropType<Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }>;
    };
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）设置选中的树节点 */
    selectedKeys: {
        type: PropType<Key[]>;
    };
    /** 默认选中的树节点 */
    defaultSelectedKeys: {
        type: PropType<Key[]>;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    loadedKeys: {
        type: PropType<Key[]>;
    };
    draggable: {
        type: BooleanConstructor;
        default: any;
    };
    showIcon: {
        type: BooleanConstructor;
        default: any;
    };
    icon: {
        type: PropType<(nodeProps: AntdTreeNodeAttribute) => any>;
    };
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    /**
     * @default{title,key,children}
     * deprecated, please use `fieldNames` instead
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: {
        type: PropType<FieldNames>;
    };
    blockNode: {
        type: BooleanConstructor;
        default: any;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<any>;
    onDoubleclick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    'onUpdate:selectedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:checkedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:expandedKeys': PropType<(keys: Key[]) => void>;
    focusable: {
        type: BooleanConstructor;
        default: any;
    };
    activeKey: PropType<Key>;
    tabindex: NumberConstructor;
    children: import("vue-types").VueTypeValidableDef<any>;
    treeData: {
        type: PropType<DataNode[]>;
    };
    fieldNames: {
        type: PropType<FieldNames>;
    };
    allowDrop: {
        type: PropType<import("../vc-tree/props").AllowDrop<DataNode>>;
    };
    dropIndicatorRender: {
        type: PropType<(props: {
            dropPosition: 0 | 1 | -1;
            dropLevelOffset: number;
            indent: number;
            prefixCls: string;
            direction: import("../vc-tree/interface").Direction;
        }) => any>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onContextmenu: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onClick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onDblclick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onScroll: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onExpand: {
        type: PropType<(expandedKeys: Key[], info: {
            node: EventDataNode;
            expanded: boolean;
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onCheck: {
        type: PropType<(checked: Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }, info: import("../vc-tree/props").CheckInfo) => void>;
    };
    onSelect: {
        type: PropType<(selectedKeys: Key[], info: {
            event: "select";
            selected: boolean;
            node: EventDataNode;
            selectedNodes: DataNode[];
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onLoad: {
        type: PropType<(loadedKeys: Key[], info: {
            event: "load";
            node: EventDataNode;
        }) => void>;
    };
    loadData: {
        type: PropType<(treeNode: EventDataNode) => Promise<void>>;
    };
    onMouseenter: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onMouseleave: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onRightClick: {
        type: PropType<(info: {
            event: MouseEvent;
            node: EventDataNode;
        }) => void>;
    };
    onDragstart: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragenter: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            expandedKeys: Key[];
        }) => void>;
    };
    onDragover: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragleave: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragend: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDrop: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            dragNode: EventDataNode;
            dragNodesKeys: Key[];
            dropPosition: number;
            dropToGap: boolean;
        }) => void>;
    };
    onActiveChange: {
        type: PropType<(key: Key) => void>;
    };
    filterTreeNode: {
        type: PropType<(treeNode: EventDataNode) => boolean>;
    };
    motion: import("vue-types").VueTypeValidableDef<any>;
    height: NumberConstructor;
    itemHeight: NumberConstructor;
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: PropType<import("../vc-tree/interface").Direction>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    showLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    /** 是否支持多选 */
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否自动展开父节点 */
    autoExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否支持选中 */
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    /** 是否禁用树 */
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开所有树节点 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开对应树节点 */
    defaultExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）展开指定的树节点 */
    expandedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）选中复选框的树节点 */
    checkedKeys: {
        type: PropType<Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }>;
    };
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: {
        type: PropType<Key[]>;
    };
    /** （受控）设置选中的树节点 */
    selectedKeys: {
        type: PropType<Key[]>;
    };
    /** 默认选中的树节点 */
    defaultSelectedKeys: {
        type: PropType<Key[]>;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    loadedKeys: {
        type: PropType<Key[]>;
    };
    draggable: {
        type: BooleanConstructor;
        default: any;
    };
    showIcon: {
        type: BooleanConstructor;
        default: any;
    };
    icon: {
        type: PropType<(nodeProps: AntdTreeNodeAttribute) => any>;
    };
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    /**
     * @default{title,key,children}
     * deprecated, please use `fieldNames` instead
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: {
        type: PropType<FieldNames>;
    };
    blockNode: {
        type: BooleanConstructor;
        default: any;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<any>;
    onDoubleclick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    'onUpdate:selectedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:checkedKeys': PropType<(keys: Key[]) => void>;
    'onUpdate:expandedKeys': PropType<(keys: Key[]) => void>;
    focusable: {
        type: BooleanConstructor;
        default: any;
    };
    activeKey: PropType<Key>;
    tabindex: NumberConstructor;
    children: import("vue-types").VueTypeValidableDef<any>;
    treeData: {
        type: PropType<DataNode[]>;
    };
    fieldNames: {
        type: PropType<FieldNames>;
    };
    allowDrop: {
        type: PropType<import("../vc-tree/props").AllowDrop<DataNode>>;
    };
    dropIndicatorRender: {
        type: PropType<(props: {
            dropPosition: 0 | 1 | -1;
            dropLevelOffset: number;
            indent: number;
            prefixCls: string;
            direction: import("../vc-tree/interface").Direction;
        }) => any>;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onKeydown: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onContextmenu: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onClick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onDblclick: {
        type: PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onScroll: {
        type: PropType<import("../_util/EventInterface").EventHandler>;
    };
    onExpand: {
        type: PropType<(expandedKeys: Key[], info: {
            node: EventDataNode;
            expanded: boolean;
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onCheck: {
        type: PropType<(checked: Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }, info: import("../vc-tree/props").CheckInfo) => void>;
    };
    onSelect: {
        type: PropType<(selectedKeys: Key[], info: {
            event: "select";
            selected: boolean;
            node: EventDataNode;
            selectedNodes: DataNode[];
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onLoad: {
        type: PropType<(loadedKeys: Key[], info: {
            event: "load";
            node: EventDataNode;
        }) => void>;
    };
    loadData: {
        type: PropType<(treeNode: EventDataNode) => Promise<void>>;
    };
    onMouseenter: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onMouseleave: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onRightClick: {
        type: PropType<(info: {
            event: MouseEvent;
            node: EventDataNode;
        }) => void>;
    };
    onDragstart: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragenter: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            expandedKeys: Key[];
        }) => void>;
    };
    onDragover: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragleave: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragend: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDrop: {
        type: PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            dragNode: EventDataNode;
            dragNodesKeys: Key[];
            dropPosition: number;
            dropToGap: boolean;
        }) => void>;
    };
    onActiveChange: {
        type: PropType<(key: Key) => void>;
    };
    filterTreeNode: {
        type: PropType<(treeNode: EventDataNode) => boolean>;
    };
    motion: import("vue-types").VueTypeValidableDef<any>;
    height: NumberConstructor;
    itemHeight: NumberConstructor;
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: PropType<import("../vc-tree/interface").Direction>;
    };
}>>, {
    multiple: boolean;
    disabled: boolean;
    virtual: boolean;
    draggable: boolean;
    checkable: boolean;
    selectable: boolean;
    showIcon: boolean;
    focusable: boolean;
    showLine: boolean | {
        showLeafIcon: boolean;
    };
    checkStrictly: boolean;
    defaultExpandParent: boolean;
    autoExpandParent: boolean;
    defaultExpandAll: boolean;
    blockNode: boolean;
}>;
export default _default;
