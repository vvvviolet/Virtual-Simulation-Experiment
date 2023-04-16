declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    isGroup: {
        type: BooleanConstructor;
        default: any;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
    onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
    'onUpdate:value': import("vue").PropType<(checked: boolean) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    isGroup: {
        type: BooleanConstructor;
        default: any;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
    onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onClick: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    'onUpdate:checked': import("vue").PropType<(checked: boolean) => void>;
    'onUpdate:value': import("vue").PropType<(checked: boolean) => void>;
}>>, {
    disabled: boolean;
    checked: boolean;
    autofocus: boolean;
    isGroup: boolean;
}>;
export default _default;
