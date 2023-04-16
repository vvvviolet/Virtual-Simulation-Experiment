import type { PropType } from 'vue';
import type { EditableConfig, TabsLocale } from '../interface';
export interface AddButtonProps {
    prefixCls: string;
    editable?: EditableConfig;
    locale?: TabsLocale;
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    editable: {
        type: PropType<EditableConfig>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    editable: {
        type: PropType<EditableConfig>;
    };
    locale: {
        type: PropType<TabsLocale>;
        default: TabsLocale;
    };
}>>, {
    locale: TabsLocale;
}>;
export default _default;
