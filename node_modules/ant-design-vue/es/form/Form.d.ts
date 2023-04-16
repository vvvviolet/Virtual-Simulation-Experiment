import type { PropType, ExtractPropTypes, HTMLAttributes, ComponentPublicInstance } from 'vue';
import FormItem from './FormItem';
import type { Options } from 'scroll-into-view-if-needed';
import type { InternalNamePath, NamePath, ValidateErrorEntity, ValidateOptions, ValidateMessages, FormLabelAlign } from './interface';
import type { SizeType } from '../config-provider';
import useForm from './useForm';
export declare type RequiredMark = boolean | 'optional';
export declare type FormLayout = 'horizontal' | 'inline' | 'vertical';
export declare const formProps: () => {
    layout: import("vue-types").VueTypeDef<FormLayout>;
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
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<FormLabelAlign>;
    labelWrap: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: PropType<"" | RequiredMark>;
        default: any;
    };
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark: {
        type: BooleanConstructor;
        default: any;
    };
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: PropType<{
            [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
        }>;
    };
    validateMessages: {
        type: PropType<ValidateMessages>;
        default: ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: any;
    };
    scrollToFirstError: {
        type: PropType<boolean | Options<any>>;
    };
    onSubmit: PropType<(e: Event) => void>;
    name: StringConstructor;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    size: {
        type: PropType<SizeType>;
    };
    onValuesChange: {
        type: PropType<(changedValues: any, values: any) => void>;
    };
    onFieldsChange: {
        type: PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
    };
    onFinish: {
        type: PropType<(values: any) => void>;
    };
    onFinishFailed: {
        type: PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
    };
    onValidate: {
        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
    };
};
export declare type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>;
export declare type FormExpose = {
    resetFields: (name?: NamePath) => void;
    clearValidate: (name?: NamePath) => void;
    validateFields: (nameList?: NamePath[] | string, options?: ValidateOptions) => Promise<{
        [key: string]: any;
    }>;
    getFieldsValue: (nameList?: InternalNamePath[] | true) => {
        [key: string]: any;
    };
    validate: (nameList?: NamePath[] | string, options?: ValidateOptions) => Promise<{
        [key: string]: any;
    }>;
    scrollToField: (name: NamePath, options?: {}) => void;
};
export declare type FormInstance = ComponentPublicInstance<FormProps, FormExpose>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            colon: boolean;
            requiredMark: "" | RequiredMark;
            labelWrap: boolean;
            validateMessages: ValidateMessages;
            hideRequiredMark: boolean;
            model: {
                [key: string]: any;
            };
            validateOnRuleChange: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<FormLayout>;
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
            colon: {
                type: BooleanConstructor;
                default: any;
            };
            labelAlign: import("vue-types").VueTypeDef<FormLabelAlign>;
            labelWrap: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: PropType<"" | RequiredMark>;
                default: any;
            };
            /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
            hideRequiredMark: {
                type: BooleanConstructor;
                default: any;
            };
            model: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: {
                type: PropType<{
                    [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
                }>;
            };
            validateMessages: {
                type: PropType<ValidateMessages>;
                default: ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: any;
            };
            scrollToFirstError: {
                type: PropType<boolean | Options<any>>;
            };
            onSubmit: PropType<(e: Event) => void>;
            name: StringConstructor;
            validateTrigger: {
                type: PropType<string | string[]>;
            };
            size: {
                type: PropType<SizeType>;
            };
            onValuesChange: {
                type: PropType<(changedValues: any, values: any) => void>;
            };
            onFieldsChange: {
                type: PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
            };
            onFinish: {
                type: PropType<(values: any) => void>;
            };
            onFinishFailed: {
                type: PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
            };
            onValidate: {
                type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "colon" | "requiredMark" | "labelWrap" | "validateMessages" | "hideRequiredMark" | "model" | "validateOnRuleChange">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<FormLayout>;
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
            colon: {
                type: BooleanConstructor;
                default: any;
            };
            labelAlign: import("vue-types").VueTypeDef<FormLabelAlign>;
            labelWrap: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: PropType<"" | RequiredMark>;
                default: any;
            };
            /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
            hideRequiredMark: {
                type: BooleanConstructor;
                default: any;
            };
            model: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: {
                type: PropType<{
                    [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
                }>;
            };
            validateMessages: {
                type: PropType<ValidateMessages>;
                default: ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: any;
            };
            scrollToFirstError: {
                type: PropType<boolean | Options<any>>;
            };
            onSubmit: PropType<(e: Event) => void>;
            name: StringConstructor;
            validateTrigger: {
                type: PropType<string | string[]>;
            };
            size: {
                type: PropType<SizeType>;
            };
            onValuesChange: {
                type: PropType<(changedValues: any, values: any) => void>;
            };
            onFieldsChange: {
                type: PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
            };
            onFinish: {
                type: PropType<(values: any) => void>;
            };
            onFinishFailed: {
                type: PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
            };
            onValidate: {
                type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            colon: boolean;
            requiredMark: "" | RequiredMark;
            labelWrap: boolean;
            validateMessages: ValidateMessages;
            hideRequiredMark: boolean;
            model: {
                [key: string]: any;
            };
            validateOnRuleChange: boolean;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        layout: import("vue-types").VueTypeDef<FormLayout>;
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
        colon: {
            type: BooleanConstructor;
            default: any;
        };
        labelAlign: import("vue-types").VueTypeDef<FormLabelAlign>;
        labelWrap: {
            type: BooleanConstructor;
            default: any;
        };
        prefixCls: StringConstructor;
        requiredMark: {
            type: PropType<"" | RequiredMark>;
            default: any;
        };
        /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
        hideRequiredMark: {
            type: BooleanConstructor;
            default: any;
        };
        model: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        rules: {
            type: PropType<{
                [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
            }>;
        };
        validateMessages: {
            type: PropType<ValidateMessages>;
            default: ValidateMessages;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: any;
        };
        scrollToFirstError: {
            type: PropType<boolean | Options<any>>;
        };
        onSubmit: PropType<(e: Event) => void>;
        name: StringConstructor;
        validateTrigger: {
            type: PropType<string | string[]>;
        };
        size: {
            type: PropType<SizeType>;
        };
        onValuesChange: {
            type: PropType<(changedValues: any, values: any) => void>;
        };
        onFieldsChange: {
            type: PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
        };
        onFinish: {
            type: PropType<(values: any) => void>;
        };
        onFinishFailed: {
            type: PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
        };
        onValidate: {
            type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    layout: import("vue-types").VueTypeDef<FormLayout>;
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
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<FormLabelAlign>;
    labelWrap: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: PropType<"" | RequiredMark>;
        default: any;
    };
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark: {
        type: BooleanConstructor;
        default: any;
    };
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: PropType<{
            [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
        }>;
    };
    validateMessages: {
        type: PropType<ValidateMessages>;
        default: ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: any;
    };
    scrollToFirstError: {
        type: PropType<boolean | Options<any>>;
    };
    onSubmit: PropType<(e: Event) => void>;
    name: StringConstructor;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    size: {
        type: PropType<SizeType>;
    };
    onValuesChange: {
        type: PropType<(changedValues: any, values: any) => void>;
    };
    onFieldsChange: {
        type: PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
    };
    onFinish: {
        type: PropType<(values: any) => void>;
    };
    onFinishFailed: {
        type: PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
    };
    onValidate: {
        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    colon: boolean;
    requiredMark: "" | RequiredMark;
    labelWrap: boolean;
    validateMessages: ValidateMessages;
    hideRequiredMark: boolean;
    model: {
        [key: string]: any;
    };
    validateOnRuleChange: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: typeof FormItem;
    readonly useForm: typeof useForm;
};
export default _default;
