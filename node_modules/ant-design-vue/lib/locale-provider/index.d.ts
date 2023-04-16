import type { VNode, PropType } from 'vue';
import type { ModalLocale } from '../modal/locale';
import type { ValidateMessages } from '../form/interface';
import type { TransferLocale } from '../transfer';
import type { PickerLocale as DatePickerLocale } from '../date-picker/generatePicker';
import type { PaginationLocale } from '../pagination/Pagination';
import type { TableLocale } from '../table/interface';
import type { UploadLocale } from '../upload/interface';
interface TransferLocaleForEmpty {
    description: string;
}
export interface Locale {
    locale: string;
    Pagination?: PaginationLocale;
    Table?: TableLocale;
    Popconfirm?: Record<string, any>;
    Form?: {
        optional?: string;
        defaultValidateMessages: ValidateMessages;
    };
    Image?: {
        preview: string;
    };
    DatePicker?: DatePickerLocale;
    TimePicker?: Record<string, any>;
    Calendar?: Record<string, any>;
    Modal?: ModalLocale;
    Transfer?: Partial<TransferLocale>;
    Select?: Record<string, any>;
    Upload?: UploadLocale;
    Empty?: TransferLocaleForEmpty;
    global?: Record<string, any>;
    PageHeader?: {
        back: string;
    };
    Icon?: Record<string, any>;
    Text?: {
        edit?: any;
        copy?: any;
        copied?: any;
        expand?: any;
    };
}
export interface LocaleProviderProps {
    locale: Locale;
    children?: VNode | VNode[];
    ANT_MARK__?: string;
}
export declare const ANT_MARK = "internalMark";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{
            locale: {
                type: PropType<Locale>;
            };
            ANT_MARK__: StringConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
            locale: {
                type: PropType<Locale>;
            };
            ANT_MARK__: StringConstructor;
        }>>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & {
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
        locale: {
            type: PropType<Locale>;
        };
        ANT_MARK__: StringConstructor;
    }>> & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    locale: {
        type: PropType<Locale>;
    };
    ANT_MARK__: StringConstructor;
}>>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
