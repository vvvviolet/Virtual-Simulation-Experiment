import type { PropType, ExtractPropTypes } from 'vue';
import type { MouseEventHandler } from '../../_util/EventInterface';
import type { Key } from 'ant-design-vue/es/_util/type';
export declare const subMenuProps: () => {
    icon: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    disabled: BooleanConstructor;
    level: NumberConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<[number, number]>;
    internalPopupClose: BooleanConstructor;
    eventKey: StringConstructor;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onTitleClick: PropType<(e: MouseEvent, key: Key) => void>;
};
export declare type SubMenuProps = Partial<ExtractPropTypes<ReturnType<typeof subMenuProps>>>;
declare const _default: import("vue").DefineComponent<{
    icon: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    disabled: BooleanConstructor;
    level: NumberConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<[number, number]>;
    internalPopupClose: BooleanConstructor;
    eventKey: StringConstructor;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onTitleClick: PropType<(e: MouseEvent, key: Key) => void>;
}, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    icon: import("vue-types").VueTypeValidableDef<any>;
    title: import("vue-types").VueTypeValidableDef<any>;
    disabled: BooleanConstructor;
    level: NumberConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<[number, number]>;
    internalPopupClose: BooleanConstructor;
    eventKey: StringConstructor;
    expandIcon: PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onTitleClick: PropType<(e: MouseEvent, key: Key) => void>;
}>>, {
    disabled: boolean;
    internalPopupClose: boolean;
}>;
export default _default;
