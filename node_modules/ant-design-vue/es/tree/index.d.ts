import type { App } from 'vue';
import DirectoryTree from './DirectoryTree';
export type { EventDataNode, DataNode } from '../vc-tree/interface';
export type { TreeProps, AntTreeNodeMouseEvent, AntTreeNodeExpandedEvent, AntTreeNodeCheckedEvent, AntTreeNodeSelectedEvent, AntTreeNodeDragEnterEvent, AntTreeNodeDropEvent, AntdTreeNodeAttribute, TreeDataItem, } from './Tree';
export type { ExpandAction as DirectoryTreeExpandAction, DirectoryTreeProps, } from './DirectoryTree';
declare const TreeNode: import("vue").DefineComponent<{
    eventKey: (StringConstructor | NumberConstructor)[];
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    data: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    parent: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    isStart: {
        type: import("vue").PropType<boolean[]>;
    };
    isEnd: {
        type: import("vue").PropType<boolean[]>;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    onMousemove: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    isLeaf: {
        type: BooleanConstructor;
        default: any;
    };
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    disableCheckbox: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    domRef: {
        type: import("vue").PropType<(arg: any) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    eventKey: (StringConstructor | NumberConstructor)[];
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    data: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    parent: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    isStart: {
        type: import("vue").PropType<boolean[]>;
    };
    isEnd: {
        type: import("vue").PropType<boolean[]>;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    onMousemove: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    isLeaf: {
        type: BooleanConstructor;
        default: any;
    };
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    disableCheckbox: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    domRef: {
        type: import("vue").PropType<(arg: any) => void>;
    };
}>>, {
    data: import("../vc-tree/interface").DataNode;
    active: boolean;
    disabled: boolean;
    checkable: boolean;
    disableCheckbox: boolean;
    isLeaf: boolean;
    selectable: boolean;
    parent: import("../vc-tree/interface").DataNode;
}>;
export { DirectoryTree, TreeNode };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            showLine: {
                type: import("vue").PropType<boolean | {
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
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            expandedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            checkedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                    checked: import("../vc-tree/interface").Key[];
                    halfChecked: import("../vc-tree/interface").Key[];
                }>;
            };
            defaultCheckedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            selectedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            selectable: {
                type: BooleanConstructor;
                default: any;
            };
            loadedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
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
                type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
            };
            switcherIcon: import("vue-types").VueTypeValidableDef<any>;
            prefixCls: StringConstructor;
            replaceFields: {
                type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            };
            blockNode: {
                type: BooleanConstructor;
                default: any;
            };
            openAnimation: import("vue-types").VueTypeValidableDef<any>;
            onDoubleclick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            'onUpdate:checkedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            'onUpdate:expandedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            focusable: {
                type: BooleanConstructor;
                default: any;
            };
            activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
            tabindex: NumberConstructor;
            children: import("vue-types").VueTypeValidableDef<any>;
            treeData: {
                type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
            };
            fieldNames: {
                type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            };
            allowDrop: {
                type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
            };
            dropIndicatorRender: {
                type: import("vue").PropType<(props: {
                    dropPosition: 0 | 1 | -1;
                    dropLevelOffset: number;
                    indent: number;
                    prefixCls: string;
                    direction: import("../vc-tree/interface").Direction;
                }) => any>;
            };
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onKeydown: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onContextmenu: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onClick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            onDblclick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            onScroll: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onExpand: {
                type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                    node: import("../vc-tree/interface").EventDataNode;
                    expanded: boolean;
                    nativeEvent: MouseEvent;
                }) => void>;
            };
            onCheck: {
                type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                    checked: import("../vc-tree/interface").Key[];
                    halfChecked: import("../vc-tree/interface").Key[];
                }, info: import("../vc-tree/props").CheckInfo) => void>;
            };
            onSelect: {
                type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                    event: "select";
                    selected: boolean;
                    node: import("../vc-tree/interface").EventDataNode;
                    selectedNodes: import("../vc-tree/interface").DataNode[];
                    nativeEvent: MouseEvent;
                }) => void>;
            };
            onLoad: {
                type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                    event: "load";
                    node: import("../vc-tree/interface").EventDataNode;
                }) => void>;
            };
            loadData: {
                type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<void>>;
            };
            onMouseenter: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
            };
            onMouseleave: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
            };
            onRightClick: {
                type: import("vue").PropType<(info: {
                    event: MouseEvent;
                    node: import("../vc-tree/interface").EventDataNode;
                }) => void>;
            };
            onDragstart: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragenter: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                    expandedKeys: import("../vc-tree/interface").Key[];
                }) => void>;
            };
            onDragover: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragleave: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragend: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDrop: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                    dragNode: import("../vc-tree/interface").EventDataNode;
                    dragNodesKeys: import("../vc-tree/interface").Key[];
                    dropPosition: number;
                    dropToGap: boolean;
                }) => void>;
            };
            onActiveChange: {
                type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
            };
            filterTreeNode: {
                type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
            };
            motion: import("vue-types").VueTypeValidableDef<any>;
            height: NumberConstructor;
            itemHeight: NumberConstructor;
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            direction: {
                type: import("vue").PropType<import("../vc-tree/interface").Direction>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "multiple" | "disabled" | "virtual" | "draggable" | "checkable" | "selectable" | "showIcon" | "focusable" | "showLine" | "checkStrictly" | "defaultExpandParent" | "autoExpandParent" | "defaultExpandAll" | "blockNode">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            showLine: {
                type: import("vue").PropType<boolean | {
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
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            expandedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            checkedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                    checked: import("../vc-tree/interface").Key[];
                    halfChecked: import("../vc-tree/interface").Key[];
                }>;
            };
            defaultCheckedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            selectedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            };
            selectable: {
                type: BooleanConstructor;
                default: any;
            };
            loadedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
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
                type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
            };
            switcherIcon: import("vue-types").VueTypeValidableDef<any>;
            prefixCls: StringConstructor;
            replaceFields: {
                type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            };
            blockNode: {
                type: BooleanConstructor;
                default: any;
            };
            openAnimation: import("vue-types").VueTypeValidableDef<any>;
            onDoubleclick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            'onUpdate:checkedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            'onUpdate:expandedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            focusable: {
                type: BooleanConstructor;
                default: any;
            };
            activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
            tabindex: NumberConstructor;
            children: import("vue-types").VueTypeValidableDef<any>;
            treeData: {
                type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
            };
            fieldNames: {
                type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            };
            allowDrop: {
                type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
            };
            dropIndicatorRender: {
                type: import("vue").PropType<(props: {
                    dropPosition: 0 | 1 | -1;
                    dropLevelOffset: number;
                    indent: number;
                    prefixCls: string;
                    direction: import("../vc-tree/interface").Direction;
                }) => any>;
            };
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onKeydown: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onContextmenu: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onClick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            onDblclick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            onScroll: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onExpand: {
                type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                    node: import("../vc-tree/interface").EventDataNode;
                    expanded: boolean;
                    nativeEvent: MouseEvent;
                }) => void>;
            };
            onCheck: {
                type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                    checked: import("../vc-tree/interface").Key[];
                    halfChecked: import("../vc-tree/interface").Key[];
                }, info: import("../vc-tree/props").CheckInfo) => void>;
            };
            onSelect: {
                type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                    event: "select";
                    selected: boolean;
                    node: import("../vc-tree/interface").EventDataNode;
                    selectedNodes: import("../vc-tree/interface").DataNode[];
                    nativeEvent: MouseEvent;
                }) => void>;
            };
            onLoad: {
                type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                    event: "load";
                    node: import("../vc-tree/interface").EventDataNode;
                }) => void>;
            };
            loadData: {
                type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<void>>;
            };
            onMouseenter: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
            };
            onMouseleave: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
            };
            onRightClick: {
                type: import("vue").PropType<(info: {
                    event: MouseEvent;
                    node: import("../vc-tree/interface").EventDataNode;
                }) => void>;
            };
            onDragstart: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragenter: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                    expandedKeys: import("../vc-tree/interface").Key[];
                }) => void>;
            };
            onDragover: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragleave: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragend: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDrop: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                    dragNode: import("../vc-tree/interface").EventDataNode;
                    dragNodesKeys: import("../vc-tree/interface").Key[];
                    dropPosition: number;
                    dropToGap: boolean;
                }) => void>;
            };
            onActiveChange: {
                type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
            };
            filterTreeNode: {
                type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
            };
            motion: import("vue-types").VueTypeValidableDef<any>;
            height: NumberConstructor;
            itemHeight: NumberConstructor;
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            direction: {
                type: import("vue").PropType<import("../vc-tree/interface").Direction>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
    } & Readonly<import("vue").ExtractPropTypes<{
        showLine: {
            type: import("vue").PropType<boolean | {
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
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        expandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        checkedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }>;
        };
        defaultCheckedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        selectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        selectable: {
            type: BooleanConstructor;
            default: any;
        };
        loadedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
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
            type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
        };
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        replaceFields: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        blockNode: {
            type: BooleanConstructor;
            default: any;
        };
        openAnimation: import("vue-types").VueTypeValidableDef<any>;
        onDoubleclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        'onUpdate:checkedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        'onUpdate:expandedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        focusable: {
            type: BooleanConstructor;
            default: any;
        };
        activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
        tabindex: NumberConstructor;
        children: import("vue-types").VueTypeValidableDef<any>;
        treeData: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        allowDrop: {
            type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
        };
        dropIndicatorRender: {
            type: import("vue").PropType<(props: {
                dropPosition: 0 | 1 | -1;
                dropLevelOffset: number;
                indent: number;
                prefixCls: string;
                direction: import("../vc-tree/interface").Direction;
            }) => any>;
        };
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onKeydown: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onDblclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onScroll: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onExpand: {
            type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                node: import("../vc-tree/interface").EventDataNode;
                expanded: boolean;
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onCheck: {
            type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }, info: import("../vc-tree/props").CheckInfo) => void>;
        };
        onSelect: {
            type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                event: "select";
                selected: boolean;
                node: import("../vc-tree/interface").EventDataNode;
                selectedNodes: import("../vc-tree/interface").DataNode[];
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onLoad: {
            type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                event: "load";
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        loadData: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<void>>;
        };
        onMouseenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onMouseleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onRightClick: {
            type: import("vue").PropType<(info: {
                event: MouseEvent;
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        onDragstart: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                expandedKeys: import("../vc-tree/interface").Key[];
            }) => void>;
        };
        onDragover: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragend: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDrop: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                dragNode: import("../vc-tree/interface").EventDataNode;
                dragNodesKeys: import("../vc-tree/interface").Key[];
                dropPosition: number;
                dropToGap: boolean;
            }) => void>;
        };
        onActiveChange: {
            type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
        };
        motion: import("vue-types").VueTypeValidableDef<any>;
        height: NumberConstructor;
        itemHeight: NumberConstructor;
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        direction: {
            type: import("vue").PropType<import("../vc-tree/interface").Direction>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    showLine: {
        type: import("vue").PropType<boolean | {
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
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
    };
    expandedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
    };
    checkedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
            checked: import("../vc-tree/interface").Key[];
            halfChecked: import("../vc-tree/interface").Key[];
        }>;
    };
    defaultCheckedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
    };
    selectedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
    };
    defaultSelectedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    loadedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
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
        type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
    };
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    replaceFields: {
        type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
    };
    blockNode: {
        type: BooleanConstructor;
        default: any;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<any>;
    onDoubleclick: {
        type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
    'onUpdate:checkedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
    'onUpdate:expandedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
    focusable: {
        type: BooleanConstructor;
        default: any;
    };
    activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
    tabindex: NumberConstructor;
    children: import("vue-types").VueTypeValidableDef<any>;
    treeData: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
    };
    fieldNames: {
        type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
    };
    allowDrop: {
        type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
    };
    dropIndicatorRender: {
        type: import("vue").PropType<(props: {
            dropPosition: 0 | 1 | -1;
            dropLevelOffset: number;
            indent: number;
            prefixCls: string;
            direction: import("../vc-tree/interface").Direction;
        }) => any>;
    };
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onKeydown: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onDblclick: {
        type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onScroll: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    onExpand: {
        type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
            node: import("../vc-tree/interface").EventDataNode;
            expanded: boolean;
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onCheck: {
        type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
            checked: import("../vc-tree/interface").Key[];
            halfChecked: import("../vc-tree/interface").Key[];
        }, info: import("../vc-tree/props").CheckInfo) => void>;
    };
    onSelect: {
        type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
            event: "select";
            selected: boolean;
            node: import("../vc-tree/interface").EventDataNode;
            selectedNodes: import("../vc-tree/interface").DataNode[];
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onLoad: {
        type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
            event: "load";
            node: import("../vc-tree/interface").EventDataNode;
        }) => void>;
    };
    loadData: {
        type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<void>>;
    };
    onMouseenter: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onMouseleave: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onRightClick: {
        type: import("vue").PropType<(info: {
            event: MouseEvent;
            node: import("../vc-tree/interface").EventDataNode;
        }) => void>;
    };
    onDragstart: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragenter: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            expandedKeys: import("../vc-tree/interface").Key[];
        }) => void>;
    };
    onDragover: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragleave: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragend: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDrop: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            dragNode: import("../vc-tree/interface").EventDataNode;
            dragNodesKeys: import("../vc-tree/interface").Key[];
            dropPosition: number;
            dropToGap: boolean;
        }) => void>;
    };
    onActiveChange: {
        type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
    };
    filterTreeNode: {
        type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
    };
    motion: import("vue-types").VueTypeValidableDef<any>;
    height: NumberConstructor;
    itemHeight: NumberConstructor;
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: import("vue").PropType<import("../vc-tree/interface").Direction>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    DirectoryTree: import("vue").DefineComponent<{
        expandAction: {
            type: import("vue").PropType<import("./DirectoryTree").ExpandAction>;
        };
        showLine: {
            type: import("vue").PropType<boolean | {
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
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        expandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        checkedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }>;
        };
        defaultCheckedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        selectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        selectable: {
            type: BooleanConstructor;
            default: any;
        };
        loadedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
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
            type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
        };
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        replaceFields: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        blockNode: {
            type: BooleanConstructor;
            default: any;
        };
        openAnimation: import("vue-types").VueTypeValidableDef<any>;
        onDoubleclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        'onUpdate:checkedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        'onUpdate:expandedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        focusable: {
            type: BooleanConstructor;
            default: any;
        };
        activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
        tabindex: NumberConstructor;
        children: import("vue-types").VueTypeValidableDef<any>;
        treeData: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        allowDrop: {
            type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
        };
        dropIndicatorRender: {
            type: import("vue").PropType<(props: {
                dropPosition: 0 | 1 | -1;
                dropLevelOffset: number;
                indent: number;
                prefixCls: string;
                direction: import("../vc-tree/interface").Direction;
            }) => any>;
        };
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onKeydown: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onDblclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onScroll: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onExpand: {
            type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                node: import("../vc-tree/interface").EventDataNode;
                expanded: boolean;
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onCheck: {
            type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }, info: import("../vc-tree/props").CheckInfo) => void>;
        };
        onSelect: {
            type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                event: "select";
                selected: boolean;
                node: import("../vc-tree/interface").EventDataNode;
                selectedNodes: import("../vc-tree/interface").DataNode[];
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onLoad: {
            type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                event: "load";
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        loadData: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<void>>;
        };
        onMouseenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onMouseleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onRightClick: {
            type: import("vue").PropType<(info: {
                event: MouseEvent;
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        onDragstart: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                expandedKeys: import("../vc-tree/interface").Key[];
            }) => void>;
        };
        onDragover: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragend: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDrop: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                dragNode: import("../vc-tree/interface").EventDataNode;
                dragNodesKeys: import("../vc-tree/interface").Key[];
                dropPosition: number;
                dropToGap: boolean;
            }) => void>;
        };
        onActiveChange: {
            type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
        };
        motion: import("vue-types").VueTypeValidableDef<any>;
        height: NumberConstructor;
        itemHeight: NumberConstructor;
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        direction: {
            type: import("vue").PropType<import("../vc-tree/interface").Direction>;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        expandAction: {
            type: import("vue").PropType<import("./DirectoryTree").ExpandAction>;
        };
        showLine: {
            type: import("vue").PropType<boolean | {
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
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        expandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        checkedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }>;
        };
        defaultCheckedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        selectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        };
        selectable: {
            type: BooleanConstructor;
            default: any;
        };
        loadedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
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
            type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
        };
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        replaceFields: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        blockNode: {
            type: BooleanConstructor;
            default: any;
        };
        openAnimation: import("vue-types").VueTypeValidableDef<any>;
        onDoubleclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        'onUpdate:checkedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        'onUpdate:expandedKeys': import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        focusable: {
            type: BooleanConstructor;
            default: any;
        };
        activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
        tabindex: NumberConstructor;
        children: import("vue-types").VueTypeValidableDef<any>;
        treeData: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        allowDrop: {
            type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
        };
        dropIndicatorRender: {
            type: import("vue").PropType<(props: {
                dropPosition: 0 | 1 | -1;
                dropLevelOffset: number;
                indent: number;
                prefixCls: string;
                direction: import("../vc-tree/interface").Direction;
            }) => any>;
        };
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onKeydown: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onDblclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onScroll: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onExpand: {
            type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                node: import("../vc-tree/interface").EventDataNode;
                expanded: boolean;
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onCheck: {
            type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }, info: import("../vc-tree/props").CheckInfo) => void>;
        };
        onSelect: {
            type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                event: "select";
                selected: boolean;
                node: import("../vc-tree/interface").EventDataNode;
                selectedNodes: import("../vc-tree/interface").DataNode[];
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onLoad: {
            type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                event: "load";
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        loadData: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<void>>;
        };
        onMouseenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onMouseleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onRightClick: {
            type: import("vue").PropType<(info: {
                event: MouseEvent;
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        onDragstart: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                expandedKeys: import("../vc-tree/interface").Key[];
            }) => void>;
        };
        onDragover: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragend: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDrop: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                dragNode: import("../vc-tree/interface").EventDataNode;
                dragNodesKeys: import("../vc-tree/interface").Key[];
                dropPosition: number;
                dropToGap: boolean;
            }) => void>;
        };
        onActiveChange: {
            type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
        };
        motion: import("vue-types").VueTypeValidableDef<any>;
        height: NumberConstructor;
        itemHeight: NumberConstructor;
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        direction: {
            type: import("vue").PropType<import("../vc-tree/interface").Direction>;
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
    TreeNode: import("vue").DefineComponent<{
        eventKey: (StringConstructor | NumberConstructor)[];
        prefixCls: StringConstructor;
        title: import("vue-types").VueTypeValidableDef<any>;
        data: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        parent: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        isStart: {
            type: import("vue").PropType<boolean[]>;
        };
        isEnd: {
            type: import("vue").PropType<boolean[]>;
        };
        active: {
            type: BooleanConstructor;
            default: any;
        };
        onMousemove: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        isLeaf: {
            type: BooleanConstructor;
            default: any;
        };
        checkable: {
            type: BooleanConstructor;
            default: any;
        };
        selectable: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        disableCheckbox: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        domRef: {
            type: import("vue").PropType<(arg: any) => void>;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        eventKey: (StringConstructor | NumberConstructor)[];
        prefixCls: StringConstructor;
        title: import("vue-types").VueTypeValidableDef<any>;
        data: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        parent: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        isStart: {
            type: import("vue").PropType<boolean[]>;
        };
        isEnd: {
            type: import("vue").PropType<boolean[]>;
        };
        active: {
            type: BooleanConstructor;
            default: any;
        };
        onMousemove: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        isLeaf: {
            type: BooleanConstructor;
            default: any;
        };
        checkable: {
            type: BooleanConstructor;
            default: any;
        };
        selectable: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        disableCheckbox: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        domRef: {
            type: import("vue").PropType<(arg: any) => void>;
        };
    }>>, {
        data: import("../vc-tree/interface").DataNode;
        active: boolean;
        disabled: boolean;
        checkable: boolean;
        disableCheckbox: boolean;
        isLeaf: boolean;
        selectable: boolean;
        parent: import("../vc-tree/interface").DataNode;
    }>;
    install: (app: App) => App<any>;
};
export default _default;
