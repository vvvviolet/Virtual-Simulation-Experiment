import type { ExtractPropTypes, PropType } from 'vue';
declare const checkableTagProps: () => {
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: {
        type: PropType<(checked: boolean) => void>;
    };
    onClick: {
        type: PropType<(e: MouseEvent) => void>;
    };
    'onUpdate:checked': PropType<(checked: boolean) => void>;
};
export declare type CheckableTagProps = Partial<ExtractPropTypes<ReturnType<typeof checkableTagProps>>>;
declare const CheckableTag: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: {
        type: PropType<(checked: boolean) => void>;
    };
    onClick: {
        type: PropType<(e: MouseEvent) => void>;
    };
    'onUpdate:checked': PropType<(checked: boolean) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: {
        type: PropType<(checked: boolean) => void>;
    };
    onClick: {
        type: PropType<(e: MouseEvent) => void>;
    };
    'onUpdate:checked': PropType<(checked: boolean) => void>;
}>>, {
    checked: boolean;
}>;
export default CheckableTag;
