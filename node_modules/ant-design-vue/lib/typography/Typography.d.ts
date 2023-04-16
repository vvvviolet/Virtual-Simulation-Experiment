import type { HTMLAttributes, PropType } from 'vue';
import type { Direction } from '../config-provider';
export interface TypographyProps extends HTMLAttributes {
    direction?: Direction;
    prefixCls?: string;
}
export interface InternalTypographyProps extends TypographyProps {
    component?: string;
}
export declare const typographyProps: () => {
    prefixCls: StringConstructor;
    direction: PropType<Direction>;
    component: StringConstructor;
};
declare const Typography: import("vue").DefineComponent<InternalTypographyProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<InternalTypographyProps>, {
    class?: any;
    inlist?: any;
}>;
export default Typography;
