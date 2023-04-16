/** @private Test usage only */
export declare function getOpenCount(): number;
export declare type GetContainer = string | HTMLElement | (() => HTMLElement);
declare const _default: import("vue").DefineComponent<{
    wrapperClassName: StringConstructor;
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    wrapperClassName: StringConstructor;
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    visible: boolean;
    forceRender: boolean;
}>;
export default _default;
