import type { ExtractPropTypes, PropType } from 'vue';
import type { MouseEventHandler } from '../../_util/EventInterface';
export declare const menuItemProps: () => {
    id: StringConstructor;
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onClick: PropType<MouseEventHandler>;
    onKeydown: PropType<MouseEventHandler>;
    onFocus: PropType<MouseEventHandler>;
};
export declare type MenuItemProps = Partial<ExtractPropTypes<ReturnType<typeof menuItemProps>>>;
declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onClick: PropType<MouseEventHandler>;
    onKeydown: PropType<MouseEventHandler>;
    onFocus: PropType<MouseEventHandler>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    id: StringConstructor;
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onClick: PropType<MouseEventHandler>;
    onKeydown: PropType<MouseEventHandler>;
    onFocus: PropType<MouseEventHandler>;
}>>, {
    title: string | boolean;
    disabled: boolean;
    danger: boolean;
}>;
export default _default;
