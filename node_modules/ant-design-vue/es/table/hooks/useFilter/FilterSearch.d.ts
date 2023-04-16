import type { PropType } from 'vue';
import type { TableLocale } from '../../interface';
declare const _default: import("vue").DefineComponent<{
    value: StringConstructor;
    onChange: PropType<(e: InputEvent) => void>;
    filterSearch: BooleanConstructor;
    tablePrefixCls: StringConstructor;
    locale: {
        type: PropType<TableLocale>;
        default: TableLocale;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: StringConstructor;
    onChange: PropType<(e: InputEvent) => void>;
    filterSearch: BooleanConstructor;
    tablePrefixCls: StringConstructor;
    locale: {
        type: PropType<TableLocale>;
        default: TableLocale;
    };
}>>, {
    locale: TableLocale;
    filterSearch: boolean;
}>;
export default _default;
