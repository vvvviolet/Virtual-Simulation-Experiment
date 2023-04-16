declare const _default: import("vue").DefineComponent<{
    eventKey: (StringConstructor | NumberConstructor)[];
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    data: {
        type: import("vue").PropType<import("./interface").DataNode>;
        default: import("./interface").DataNode;
    };
    parent: {
        type: import("vue").PropType<import("./interface").DataNode>;
        default: import("./interface").DataNode;
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
        type: import("vue").PropType<import("./interface").DataNode>;
        default: import("./interface").DataNode;
    };
    parent: {
        type: import("vue").PropType<import("./interface").DataNode>;
        default: import("./interface").DataNode;
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
    data: import("./interface").DataNode;
    active: boolean;
    disabled: boolean;
    checkable: boolean;
    disableCheckbox: boolean;
    isLeaf: boolean;
    selectable: boolean;
    parent: import("./interface").DataNode;
}>;
export default _default;
