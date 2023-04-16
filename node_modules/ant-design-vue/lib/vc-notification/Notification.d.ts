import type { Key } from '../_util/type';
import type { CSSProperties } from 'vue';
import type { NoticeProps } from './Notice';
export interface NoticeContent extends Omit<NoticeProps, 'prefixCls' | 'noticeKey' | 'onClose'> {
    prefixCls?: string;
    key?: Key;
    updateMark?: string;
    content?: any;
    onClose?: () => void;
    style?: CSSProperties;
    class?: String;
}
export declare type NoticeFunc = (noticeProps: NoticeContent) => void;
export declare type HolderReadyCallback = (div: HTMLDivElement, noticeProps: NoticeProps & {
    key: Key;
}) => void;
export interface NotificationInstance {
    notice: NoticeFunc;
    removeNotice: (key: Key) => void;
    destroy: () => void;
    component: Notification;
}
export interface NotificationProps {
    prefixCls?: string;
    transitionName?: string;
    animation?: string | object;
    maxCount?: number;
    closeIcon?: any;
}
declare const Notification: import("vue").DefineComponent<NotificationProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<NotificationProps>, {
    closeIcon?: any;
}>;
export default Notification;
