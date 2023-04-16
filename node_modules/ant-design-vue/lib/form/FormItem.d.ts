import type { PropType, ExtractPropTypes, ComputedRef, Ref, ComponentPublicInstance, HTMLAttributes } from 'vue';
import type { InternalNamePath, Rule, RuleError, RuleObject, ValidateOptions } from './interface';
declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
export declare type ValidateStatus = (typeof ValidateStatuses)[number];
export interface FieldExpose {
    fieldValue: Ref<any>;
    fieldId: ComputedRef<any>;
    fieldName: ComputedRef<any>;
    resetField: () => void;
    clearValidate: () => void;
    namePath: ComputedRef<InternalNamePath>;
    rules?: ComputedRef<Rule[]>;
    validateRules: (options: ValidateOptions) => Promise<void> | Promise<RuleError[]>;
}
export declare const formItemProps: () => {
    htmlFor: StringConstructor;
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    help: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    labelCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
    };
    wrapperCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
    };
    hasFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | (string | number)[]>;
    };
    name: {
        type: PropType<string | number | (string | number)[]>;
    };
    rules: PropType<RuleObject | RuleObject[]>;
    autoLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: any;
    };
    validateFirst: {
        type: BooleanConstructor;
        default: any;
    };
    validateStatus: import("vue-types").VueTypeDef<"" | "error" | "validating" | "success" | "warning">;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
    };
    hidden: BooleanConstructor;
    noStyle: BooleanConstructor;
};
export declare type FormItemProps = Partial<ExtractPropTypes<ReturnType<typeof formItemProps>>>;
export declare type FormItemExpose = {
    onFieldBlur: () => void;
    onFieldChange: () => void;
    clearValidate: () => void;
    resetField: () => void;
};
export declare type FormItemInstance = ComponentPublicInstance<FormItemProps, FormItemExpose>;
declare const _default: import("vue").DefineComponent<{
    htmlFor: StringConstructor;
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    help: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    labelCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
    };
    wrapperCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
    };
    hasFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | (string | number)[]>;
    };
    name: {
        type: PropType<string | number | (string | number)[]>;
    };
    rules: PropType<RuleObject | RuleObject[]>;
    autoLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: any;
    };
    validateFirst: {
        type: BooleanConstructor;
        default: any;
    };
    validateStatus: import("vue-types").VueTypeDef<"" | "error" | "validating" | "success" | "warning">;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
    };
    hidden: BooleanConstructor;
    noStyle: BooleanConstructor;
}, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    htmlFor: StringConstructor;
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    help: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    labelCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
    };
    wrapperCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
    };
    hasFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | (string | number)[]>;
    };
    name: {
        type: PropType<string | number | (string | number)[]>;
    };
    rules: PropType<RuleObject | RuleObject[]>;
    autoLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: any;
    };
    validateFirst: {
        type: BooleanConstructor;
        default: any;
    };
    validateStatus: import("vue-types").VueTypeDef<"" | "error" | "validating" | "success" | "warning">;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
    };
    hidden: BooleanConstructor;
    noStyle: BooleanConstructor;
}>>, {
    hidden: boolean;
    required: boolean;
    colon: boolean;
    hasFeedback: boolean;
    autoLink: boolean;
    validateFirst: boolean;
    noStyle: boolean;
}>;
export default _default;
