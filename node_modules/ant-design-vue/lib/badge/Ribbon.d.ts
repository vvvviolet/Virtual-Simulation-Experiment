import type { LiteralUnion } from '../_util/type';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const ribbonProps: () => {
    prefix: StringConstructor;
    color: {
        type: PropType<LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "geekblue" | "volcano", string>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: {
        type: PropType<"end" | "start">;
        default: string;
    };
};
export declare type RibbonProps = Partial<ExtractPropTypes<ReturnType<typeof ribbonProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefix: StringConstructor;
    color: {
        type: PropType<LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "geekblue" | "volcano", string>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: {
        type: PropType<"end" | "start">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefix: StringConstructor;
    color: {
        type: PropType<LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "geekblue" | "volcano", string>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: {
        type: PropType<"end" | "start">;
        default: string;
    };
}>>, {
    placement: "end" | "start";
}>;
export default _default;
