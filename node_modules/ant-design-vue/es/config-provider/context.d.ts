import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue';
import type { ValidateMessages } from '../form/interface';
import type { RequiredMark } from '../form/Form';
import type { RenderEmptyHandler } from './renderEmpty';
import type { TransformCellTextProps } from '../table/interface';
import type { Locale } from '../locale-provider';
declare type GlobalFormCOntextProps = {
    validateMessages?: Ref<ValidateMessages>;
};
export declare const GlobalFormContextKey: InjectionKey<GlobalFormCOntextProps>;
export declare const useProvideGlobalForm: (state: GlobalFormCOntextProps) => void;
export declare const useInjectGlobalForm: () => GlobalFormCOntextProps;
export declare const GlobalConfigContextKey: InjectionKey<GlobalFormCOntextProps>;
export interface CSPConfig {
    nonce?: string;
}
export interface Theme {
    primaryColor?: string;
    infoColor?: string;
    successColor?: string;
    processingColor?: string;
    errorColor?: string;
    warningColor?: string;
}
export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export declare type Direction = 'ltr' | 'rtl';
export interface ConfigConsumerProps {
    getTargetContainer?: () => HTMLElement;
    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
    rootPrefixCls?: string;
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
    renderEmpty: RenderEmptyHandler;
    transformCellText?: (tableProps: TransformCellTextProps) => any;
    csp?: CSPConfig;
    autoInsertSpaceInButton?: boolean;
    input?: {
        autocomplete?: string;
    };
    locale?: Locale;
    pageHeader?: {
        ghost: boolean;
    };
    componentSize?: SizeType;
    direction?: 'ltr' | 'rtl';
    space?: {
        size?: SizeType | number;
    };
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean | number;
    form?: {
        requiredMark?: RequiredMark;
        colon?: boolean;
    };
}
export declare const configProviderProps: () => {
    getTargetContainer: {
        type: PropType<() => HTMLElement>;
    };
    getPopupContainer: {
        type: PropType<(triggerNode?: HTMLElement) => HTMLElement>;
    };
    prefixCls: StringConstructor;
    getPrefixCls: {
        type: PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
    };
    renderEmpty: {
        type: PropType<typeof import("./renderEmpty").default>;
    };
    transformCellText: {
        type: PropType<(tableProps: TransformCellTextProps) => any>;
    };
    csp: {
        type: PropType<CSPConfig>;
        default: CSPConfig;
    };
    input: {
        type: PropType<{
            autocomplete: string;
        }>;
    };
    autoInsertSpaceInButton: {
        type: BooleanConstructor;
        default: any;
    };
    locale: {
        type: PropType<Locale>;
        default: Locale;
    };
    pageHeader: {
        type: PropType<{
            ghost: boolean;
        }>;
    };
    componentSize: {
        type: PropType<SizeType>;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
    };
    space: {
        type: PropType<{
            size: SizeType | number;
        }>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    form: {
        type: PropType<{
            validateMessages?: ValidateMessages;
            requiredMark?: RequiredMark;
            colon?: boolean;
        }>;
        default: {
            validateMessages?: ValidateMessages;
            requiredMark?: RequiredMark;
            colon?: boolean;
        };
    };
    notUpdateGlobalConfig: BooleanConstructor;
};
export declare type ConfigProviderProps = Partial<ExtractPropTypes<ReturnType<typeof configProviderProps>>>;
export {};
