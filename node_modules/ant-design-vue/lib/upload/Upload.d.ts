import type { UploadType, UploadListType, UploadFile, UploadChangeParam, ShowUploadListInterface, FileType } from './interface';
import type { VueNode } from '../_util/type';
export declare const LIST_IGNORE: string;
declare const _default: import("vue").DefineComponent<{
    capture: import("vue").PropType<boolean | "user" | "environment">;
    type: import("vue").PropType<UploadType>;
    name: StringConstructor;
    defaultFileList: import("vue").PropType<UploadFile<any>[]>;
    fileList: import("vue").PropType<UploadFile<any>[]>;
    action: import("vue").PropType<string | ((file: FileType) => string) | ((file: FileType) => PromiseLike<string>)>;
    directory: {
        type: BooleanConstructor;
        default: any;
    };
    data: import("vue").PropType<Record<string, unknown> | ((file: UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
    method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
    headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
    showUploadList: {
        type: import("vue").PropType<boolean | ShowUploadListInterface>;
        default: boolean | ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    accept: StringConstructor;
    beforeUpload: import("vue").PropType<(file: FileType, FileList: FileType[]) => (string | boolean | void | Blob | FileType) | Promise<string | boolean | void | Blob | FileType>>;
    onChange: import("vue").PropType<(info: UploadChangeParam<UploadFile<any>>) => void>;
    'onUpdate:fileList': import("vue").PropType<(fileList: UploadFile<any>[]) => void>;
    onDrop: import("vue").PropType<(event: DragEvent) => void>;
    listType: import("vue").PropType<UploadListType>;
    onPreview: import("vue").PropType<(file: UploadFile<any>) => void>;
    onDownload: import("vue").PropType<(file: UploadFile<any>) => void>;
    onReject: import("vue").PropType<(fileList: FileType[]) => void>;
    onRemove: import("vue").PropType<(file: UploadFile<any>) => boolean | void | Promise<boolean | void>>;
    remove: import("vue").PropType<(file: UploadFile<any>) => boolean | void | Promise<boolean | void>>;
    supportServerRender: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    customRequest: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
    withCredentials: {
        type: BooleanConstructor;
        default: any;
    };
    openFileDialogOnClick: {
        type: BooleanConstructor;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./interface").UploadLocale>;
        default: import("./interface").UploadLocale;
    };
    id: StringConstructor;
    previewFile: import("vue").PropType<(file: Blob | FileType) => PromiseLike<string>>;
    transformFile: import("vue").PropType<(file: FileType) => string | Blob | FileType | PromiseLike<string | Blob | FileType>>;
    iconRender: import("vue").PropType<(opt: {
        file: UploadFile<any>;
        listType?: UploadListType;
    }) => VueNode>;
    isImageUrl: import("vue").PropType<(file: UploadFile<any>) => boolean>;
    progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
    itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
    maxCount: NumberConstructor;
    height: (StringConstructor | NumberConstructor)[];
    removeIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    downloadIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    previewIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    capture: import("vue").PropType<boolean | "user" | "environment">;
    type: import("vue").PropType<UploadType>;
    name: StringConstructor;
    defaultFileList: import("vue").PropType<UploadFile<any>[]>;
    fileList: import("vue").PropType<UploadFile<any>[]>;
    action: import("vue").PropType<string | ((file: FileType) => string) | ((file: FileType) => PromiseLike<string>)>;
    directory: {
        type: BooleanConstructor;
        default: any;
    };
    data: import("vue").PropType<Record<string, unknown> | ((file: UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
    method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
    headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
    showUploadList: {
        type: import("vue").PropType<boolean | ShowUploadListInterface>;
        default: boolean | ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    accept: StringConstructor;
    beforeUpload: import("vue").PropType<(file: FileType, FileList: FileType[]) => (string | boolean | void | Blob | FileType) | Promise<string | boolean | void | Blob | FileType>>;
    onChange: import("vue").PropType<(info: UploadChangeParam<UploadFile<any>>) => void>;
    'onUpdate:fileList': import("vue").PropType<(fileList: UploadFile<any>[]) => void>;
    onDrop: import("vue").PropType<(event: DragEvent) => void>;
    listType: import("vue").PropType<UploadListType>;
    onPreview: import("vue").PropType<(file: UploadFile<any>) => void>;
    onDownload: import("vue").PropType<(file: UploadFile<any>) => void>;
    onReject: import("vue").PropType<(fileList: FileType[]) => void>;
    onRemove: import("vue").PropType<(file: UploadFile<any>) => boolean | void | Promise<boolean | void>>;
    remove: import("vue").PropType<(file: UploadFile<any>) => boolean | void | Promise<boolean | void>>;
    supportServerRender: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    customRequest: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
    withCredentials: {
        type: BooleanConstructor;
        default: any;
    };
    openFileDialogOnClick: {
        type: BooleanConstructor;
        default: any;
    };
    locale: {
        type: import("vue").PropType<import("./interface").UploadLocale>;
        default: import("./interface").UploadLocale;
    };
    id: StringConstructor;
    previewFile: import("vue").PropType<(file: Blob | FileType) => PromiseLike<string>>;
    transformFile: import("vue").PropType<(file: FileType) => string | Blob | FileType | PromiseLike<string | Blob | FileType>>;
    iconRender: import("vue").PropType<(opt: {
        file: UploadFile<any>;
        listType?: UploadListType;
    }) => VueNode>;
    isImageUrl: import("vue").PropType<(file: UploadFile<any>) => boolean>;
    progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
    itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
    maxCount: NumberConstructor;
    height: (StringConstructor | NumberConstructor)[];
    removeIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    downloadIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    previewIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
}>>, {
    multiple: boolean;
    disabled: boolean;
    locale: import("./interface").UploadLocale;
    directory: boolean;
    withCredentials: boolean;
    openFileDialogOnClick: boolean;
    showUploadList: boolean | ShowUploadListInterface;
    supportServerRender: boolean;
}>;
export default _default;
