import type { ColProps } from '../grid/Col';
import type { ValidateStatus } from './FormItem';
import type { VueNode } from '../_util/type';
export interface FormItemInputMiscProps {
    prefixCls: string;
    errors: VueNode[];
    hasFeedback?: boolean;
    validateStatus?: ValidateStatus;
}
export interface FormItemInputProps {
    wrapperCol?: ColProps;
    help?: VueNode;
    extra?: VueNode;
    status?: ValidateStatus;
}
declare const FormItemInput: import("vue").DefineComponent<Readonly<{
    prefixCls?: any;
    help?: any;
    errors?: any;
    onDomErrorVisibleChange?: any;
    status?: any;
    extra?: any;
    hasFeedback?: any;
    wrapperCol?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    prefixCls?: any;
    help?: any;
    errors?: any;
    onDomErrorVisibleChange?: any;
    status?: any;
    extra?: any;
    hasFeedback?: any;
    wrapperCol?: any;
}>>>, {
    readonly prefixCls?: any;
    readonly help?: any;
    readonly errors?: any;
    readonly onDomErrorVisibleChange?: any;
    readonly status?: any;
    readonly extra?: any;
    readonly hasFeedback?: any;
    readonly wrapperCol?: any;
}>;
export default FormItemInput;
