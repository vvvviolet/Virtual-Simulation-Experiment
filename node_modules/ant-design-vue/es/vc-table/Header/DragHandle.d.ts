import type { PropType } from 'vue';
import type { ColumnType } from '../interface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    width: {
        type: NumberConstructor;
        required: true;
    };
    minWidth: {
        type: NumberConstructor;
        default: number;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    column: {
        type: PropType<ColumnType<any>>;
        default: ColumnType<any>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    width: {
        type: NumberConstructor;
        required: true;
    };
    minWidth: {
        type: NumberConstructor;
        default: number;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    column: {
        type: PropType<ColumnType<any>>;
        default: ColumnType<any>;
    };
}>>, {
    column: ColumnType<any>;
    maxWidth: number;
    minWidth: number;
}>;
export default _default;
