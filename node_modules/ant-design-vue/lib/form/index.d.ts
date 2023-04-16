import type { Plugin } from 'vue';
import Form, { formProps } from './Form';
import FormItem, { formItemProps } from './FormItem';
import useForm from './useForm';
import FormItemRest, { useInjectFormItemContext } from './FormItemContext';
export type { Rule, RuleObject } from './interface';
export type { FormProps, FormInstance } from './Form';
export type { FormItemProps, FormItemInstance } from './FormItem';
export { FormItem, formItemProps, formProps, FormItemRest, useForm, useInjectFormItemContext };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            colon: boolean;
            requiredMark: "" | import("./Form").RequiredMark;
            labelWrap: boolean;
            validateMessages: import("./interface").ValidateMessages;
            hideRequiredMark: boolean;
            model: {
                [key: string]: any;
            };
            validateOnRuleChange: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<import("./Form").FormLayout>;
            labelCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
            };
            wrapperCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
            };
            colon: {
                type: BooleanConstructor;
                default: any;
            };
            labelAlign: import("vue-types").VueTypeDef<import("./interface").FormLabelAlign>;
            labelWrap: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: import("vue").PropType<"" | import("./Form").RequiredMark>;
                default: any;
            };
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
                type: import("vue").PropType<{
                    [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
                }>;
            };
            validateMessages: {
                type: import("vue").PropType<import("./interface").ValidateMessages>;
                default: import("./interface").ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: any;
            };
            scrollToFirstError: {
                type: import("vue").PropType<boolean | import("scroll-into-view-if-needed").Options<any>>;
            };
            onSubmit: import("vue").PropType<(e: Event) => void>;
            name: StringConstructor;
            validateTrigger: {
                type: import("vue").PropType<string | string[]>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            onValuesChange: {
                type: import("vue").PropType<(changedValues: any, values: any) => void>;
            };
            onFieldsChange: {
                type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
            };
            onFinish: {
                type: import("vue").PropType<(values: any) => void>;
            };
            onFinishFailed: {
                type: import("vue").PropType<(errorInfo: import("./interface").ValidateErrorEntity<any>) => void>;
            };
            onValidate: {
                type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
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
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<import("./Form").FormLayout>;
            labelCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
            };
            wrapperCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("../grid").ColSize>;
                        default: string | number | import("../grid").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import("vue").HTMLAttributes>;
            };
            colon: {
                type: BooleanConstructor;
                default: any;
            };
            labelAlign: import("vue-types").VueTypeDef<import("./interface").FormLabelAlign>;
            labelWrap: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: import("vue").PropType<"" | import("./Form").RequiredMark>;
                default: any;
            };
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
                type: import("vue").PropType<{
                    [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
                }>;
            };
            validateMessages: {
                type: import("vue").PropType<import("./interface").ValidateMessages>;
                default: import("./interface").ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: any;
            };
            scrollToFirstError: {
                type: import("vue").PropType<boolean | import("scroll-into-view-if-needed").Options<any>>;
            };
            onSubmit: import("vue").PropType<(e: Event) => void>;
            name: StringConstructor;
            validateTrigger: {
                type: import("vue").PropType<string | string[]>;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
            };
            onValuesChange: {
                type: import("vue").PropType<(changedValues: any, values: any) => void>;
            };
            onFieldsChange: {
                type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
            };
            onFinish: {
                type: import("vue").PropType<(values: any) => void>;
            };
            onFinishFailed: {
                type: import("vue").PropType<(errorInfo: import("./interface").ValidateErrorEntity<any>) => void>;
            };
            onValidate: {
                type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            colon: boolean;
            requiredMark: "" | import("./Form").RequiredMark;
            labelWrap: boolean;
            validateMessages: import("./interface").ValidateMessages;
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
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        layout: import("vue-types").VueTypeDef<import("./Form").FormLayout>;
        labelCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
        };
        wrapperCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
        };
        colon: {
            type: BooleanConstructor;
            default: any;
        };
        labelAlign: import("vue-types").VueTypeDef<import("./interface").FormLabelAlign>;
        labelWrap: {
            type: BooleanConstructor;
            default: any;
        };
        prefixCls: StringConstructor;
        requiredMark: {
            type: import("vue").PropType<"" | import("./Form").RequiredMark>;
            default: any;
        };
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
            type: import("vue").PropType<{
                [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
            }>;
        };
        validateMessages: {
            type: import("vue").PropType<import("./interface").ValidateMessages>;
            default: import("./interface").ValidateMessages;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: any;
        };
        scrollToFirstError: {
            type: import("vue").PropType<boolean | import("scroll-into-view-if-needed").Options<any>>;
        };
        onSubmit: import("vue").PropType<(e: Event) => void>;
        name: StringConstructor;
        validateTrigger: {
            type: import("vue").PropType<string | string[]>;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
        };
        onValuesChange: {
            type: import("vue").PropType<(changedValues: any, values: any) => void>;
        };
        onFieldsChange: {
            type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
        };
        onFinish: {
            type: import("vue").PropType<(values: any) => void>;
        };
        onFinishFailed: {
            type: import("vue").PropType<(errorInfo: import("./interface").ValidateErrorEntity<any>) => void>;
        };
        onValidate: {
            type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    layout: import("vue-types").VueTypeDef<import("./Form").FormLayout>;
    labelCol: {
        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    wrapperCol: {
        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<import("./interface").FormLabelAlign>;
    labelWrap: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: import("vue").PropType<"" | import("./Form").RequiredMark>;
        default: any;
    };
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
        type: import("vue").PropType<{
            [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
        }>;
    };
    validateMessages: {
        type: import("vue").PropType<import("./interface").ValidateMessages>;
        default: import("./interface").ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: any;
    };
    scrollToFirstError: {
        type: import("vue").PropType<boolean | import("scroll-into-view-if-needed").Options<any>>;
    };
    onSubmit: import("vue").PropType<(e: Event) => void>;
    name: StringConstructor;
    validateTrigger: {
        type: import("vue").PropType<string | string[]>;
    };
    size: {
        type: import("vue").PropType<import("../button").ButtonSize>;
    };
    onValuesChange: {
        type: import("vue").PropType<(changedValues: any, values: any) => void>;
    };
    onFieldsChange: {
        type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
    };
    onFinish: {
        type: import("vue").PropType<(values: any) => void>;
    };
    onFinishFailed: {
        type: import("vue").PropType<(errorInfo: import("./interface").ValidateErrorEntity<any>) => void>;
    };
    onValidate: {
        type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    colon: boolean;
    requiredMark: "" | import("./Form").RequiredMark;
    labelWrap: boolean;
    validateMessages: import("./interface").ValidateMessages;
    hideRequiredMark: boolean;
    model: {
        [key: string]: any;
    };
    validateOnRuleChange: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: import("vue").DefineComponent<{
        htmlFor: StringConstructor;
        prefixCls: StringConstructor;
        label: import("vue-types").VueTypeValidableDef<any>;
        help: import("vue-types").VueTypeValidableDef<any>;
        extra: import("vue-types").VueTypeValidableDef<any>;
        labelCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
        };
        wrapperCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
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
            type: import("vue").PropType<string | number | (string | number)[]>;
        };
        name: {
            type: import("vue").PropType<string | number | (string | number)[]>;
        };
        rules: import("vue").PropType<import("./interface").RuleObject | import("./interface").RuleObject[]>;
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
            type: import("vue").PropType<string | string[]>;
        };
        messageVariables: {
            type: import("vue").PropType<Record<string, string>>;
        };
        hidden: BooleanConstructor;
        noStyle: BooleanConstructor;
    }, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        htmlFor: StringConstructor;
        prefixCls: StringConstructor;
        label: import("vue-types").VueTypeValidableDef<any>;
        help: import("vue-types").VueTypeValidableDef<any>;
        extra: import("vue-types").VueTypeValidableDef<any>;
        labelCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
        };
        wrapperCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("../grid").ColSize>;
                    default: string | number | import("../grid").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import("vue").HTMLAttributes>;
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
            type: import("vue").PropType<string | number | (string | number)[]>;
        };
        name: {
            type: import("vue").PropType<string | number | (string | number)[]>;
        };
        rules: import("vue").PropType<import("./interface").RuleObject | import("./interface").RuleObject[]>;
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
            type: import("vue").PropType<string | string[]>;
        };
        messageVariables: {
            type: import("vue").PropType<Record<string, string>>;
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
    readonly useForm: typeof useForm;
} & Plugin & {
    readonly Item: typeof Form.Item;
    readonly ItemRest: typeof FormItemRest;
    readonly useForm: typeof useForm;
    readonly useInjectFormItemContext: typeof useInjectFormItemContext;
};
export default _default;
