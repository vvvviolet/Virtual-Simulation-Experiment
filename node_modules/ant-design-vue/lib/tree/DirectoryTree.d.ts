import type { ExtractPropTypes, PropType } from 'vue';
import type { AntdTreeNodeAttribute } from './Tree';
import type { DataNode, EventDataNode, Key } from '../vc-tree/interface';
export declare type ExpandAction = false | 'click' | 'doubleclick' | 'dblclick';
export declare const directoryTreeProps: () => {
    expandAction: {
        type: PropType<ExpandAction>;
    };
    showLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    expandedKeys: {
        type: PropType<Key[]>;
    };
    checkedKeys: {
        type: PropType<Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }>;
    };
    defaultCheckedKeys: {
        type: PropType<Key[]>;
    };
    selectedKeys: {
        type: PropType<Key[]>;
    };
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
    replaceFields: {
        type: PropType<import("../vc-tree/interface").FieldNames>;
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
        type: PropType<import("../vc-tree/interface").FieldNames>;
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
export declare type DirectoryTreeProps = Partial<ExtractPropTypes<ReturnType<typeof directoryTreeProps>>>;
declare const _default: import("vue").DefineComponent<{
    expandAction: {
        type: PropType<ExpandAction>;
    };
    showLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    expandedKeys: {
        type: PropType<Key[]>;
    };
    checkedKeys: {
        type: PropType<Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }>;
    };
    defaultCheckedKeys: {
        type: PropType<Key[]>;
    };
    selectedKeys: {
        type: PropType<Key[]>;
    };
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
    replaceFields: {
        type: PropType<import("../vc-tree/interface").FieldNames>;
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
        type: PropType<import("../vc-tree/interface").FieldNames>;
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
    expandAction: {
        type: PropType<ExpandAction>;
    };
    showLine: {
        type: PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: any;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: any;
    };
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandParent: {
        type: BooleanConstructor;
        default: any;
    };
    defaultExpandedKeys: {
        type: PropType<Key[]>;
    };
    expandedKeys: {
        type: PropType<Key[]>;
    };
    checkedKeys: {
        type: PropType<Key[] | {
            checked: Key[];
            halfChecked: Key[];
        }>;
    };
    defaultCheckedKeys: {
        type: PropType<Key[]>;
    };
    selectedKeys: {
        type: PropType<Key[]>;
    };
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
    replaceFields: {
        type: PropType<import("../vc-tree/interface").FieldNames>;
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
        type: PropType<import("../vc-tree/interface").FieldNames>;
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
