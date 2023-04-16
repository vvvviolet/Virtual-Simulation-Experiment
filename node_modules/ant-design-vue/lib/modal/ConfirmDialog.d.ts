import type { ModalFuncProps } from './Modal';
interface ConfirmDialogProps extends ModalFuncProps {
    afterClose?: () => void;
    close?: (...args: any[]) => void;
    autoFocusButton?: null | 'ok' | 'cancel';
    rootPrefixCls: string;
    iconPrefixCls?: string;
}
declare const _default: import("vue").DefineComponent<ConfirmDialogProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ConfirmDialogProps>, {
    appContext?: any;
    parentContext?: any;
}>;
export default _default;
