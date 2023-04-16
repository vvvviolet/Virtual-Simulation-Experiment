import type { ExtractPropTypes, PropType } from 'vue';
import type { Direction } from '../config-provider';
import type { AutoSizeType } from '../input/inputProps';
declare const editableProps: () => {
    prefixCls: StringConstructor;
    value: StringConstructor;
    maxlength: NumberConstructor;
    autoSize: {
        type: PropType<boolean | AutoSizeType>;
    };
    onSave: PropType<(val: string) => void>;
    onCancel: PropType<() => void>;
    onEnd: PropType<() => void>;
    onChange: PropType<(val: string) => void>;
    originContent: StringConstructor;
    direction: PropType<Direction>;
};
export declare type EditableProps = Partial<ExtractPropTypes<ReturnType<typeof editableProps>>>;
declare const Editable: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    value: StringConstructor;
    maxlength: NumberConstructor;
    autoSize: {
        type: PropType<boolean | AutoSizeType>;
    };
    onSave: PropType<(val: string) => void>;
    onCancel: PropType<() => void>;
    onEnd: PropType<() => void>;
    onChange: PropType<(val: string) => void>;
    originContent: StringConstructor;
    direction: PropType<Direction>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    value: StringConstructor;
    maxlength: NumberConstructor;
    autoSize: {
        type: PropType<boolean | AutoSizeType>;
    };
    onSave: PropType<(val: string) => void>;
    onCancel: PropType<() => void>;
    onEnd: PropType<() => void>;
    onChange: PropType<(val: string) => void>;
    originContent: StringConstructor;
    direction: PropType<Direction>;
}>>, {}>;
export default Editable;
