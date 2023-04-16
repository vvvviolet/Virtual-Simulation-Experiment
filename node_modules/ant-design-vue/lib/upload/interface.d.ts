import type { RcFile as OriRcFile, UploadRequestOption as RcCustomRequestOptions } from '../vc-upload/interface';
import type { ProgressProps } from '../progress';
import type { VueNode } from '../_util/type';
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
export interface FileType extends OriRcFile {
    readonly lastModifiedDate: Date;
}
export declare type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
export interface HttpRequestHeader {
    [key: string]: string;
}
export interface UploadFile<T = any> {
    uid: string;
    size?: number;
    name: string;
    fileName?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    url?: string;
    status?: UploadFileStatus;
    percent?: number;
    thumbUrl?: string;
    originFileObj?: FileType;
    response?: T;
    error?: any;
    linkProps?: any;
    type?: string;
    xhr?: T;
    preview?: string;
}
export interface InternalUploadFile<T = any> extends UploadFile<T> {
    originFileObj: FileType;
}
export interface ShowUploadListInterface {
    showRemoveIcon?: boolean;
    showPreviewIcon?: boolean;
    showDownloadIcon?: boolean;
}
export interface UploadChangeParam<T = UploadFile> {
    file: T;
    fileList: UploadFile[];
    event?: {
        percent: number;
    };
}
export interface UploadLocale {
    uploading?: string;
    removeFile?: string;
    downloadFile?: string;
    uploadError?: string;
    previewFile?: string;
}
export declare type UploadType = 'drag' | 'select';
export declare type UploadListType = 'text' | 'picture' | 'picture-card';
export declare type UploadListProgressProps = Omit<ProgressProps, 'percent' | 'type'> & {
    class?: string;
    style?: CSSProperties;
};
export declare type ItemRender<T = any> = (opt: {
    originNode: VueNode;
    file: UploadFile;
    fileList: Array<UploadFile<T>>;
    actions: {
        download: () => void;
        preview: () => void;
        remove: () => void;
    };
}) => VueNode;
declare type PreviewFileHandler = (file: FileType | Blob) => PromiseLike<string>;
declare type TransformFileHandler = (file: FileType) => string | Blob | FileType | PromiseLike<string | Blob | FileType>;
declare type BeforeUploadValueType = void | boolean | string | Blob | FileType;
declare function uploadProps<T = any>(): {
    capture: PropType<boolean | "user" | "environment">;
    type: PropType<UploadType>;
    name: StringConstructor;
    defaultFileList: PropType<UploadFile<T>[]>;
    fileList: PropType<UploadFile<T>[]>;
    action: PropType<string | ((file: FileType) => string) | ((file: FileType) => PromiseLike<string>)>;
    directory: {
        type: BooleanConstructor;
        default: any;
    };
    data: PropType<Record<string, unknown> | ((file: UploadFile<T>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
    method: PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
    headers: PropType<HttpRequestHeader>;
    showUploadList: {
        type: PropType<boolean | ShowUploadListInterface>;
        default: boolean | ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    accept: StringConstructor;
    beforeUpload: PropType<(file: FileType, FileList: FileType[]) => BeforeUploadValueType | Promise<BeforeUploadValueType>>;
    onChange: PropType<(info: UploadChangeParam<UploadFile<T>>) => void>;
    'onUpdate:fileList': PropType<(fileList: UploadChangeParam<UploadFile<T>>['fileList']) => void>;
    onDrop: PropType<(event: DragEvent) => void>;
    listType: PropType<UploadListType>;
    onPreview: PropType<(file: UploadFile<T>) => void>;
    onDownload: PropType<(file: UploadFile<T>) => void>;
    onReject: PropType<(fileList: FileType[]) => void>;
    onRemove: PropType<(file: UploadFile<T>) => void | boolean | Promise<void | boolean>>;
    /** @deprecated Please use `onRemove` directly */
    remove: PropType<(file: UploadFile<T>) => void | boolean | Promise<void | boolean>>;
    supportServerRender: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    customRequest: PropType<(options: RcCustomRequestOptions) => void>;
    withCredentials: {
        type: BooleanConstructor;
        default: any;
    };
    openFileDialogOnClick: {
        type: BooleanConstructor;
        default: any;
    };
    locale: {
        type: PropType<UploadLocale>;
        default: UploadLocale;
    };
    id: StringConstructor;
    previewFile: PropType<PreviewFileHandler>;
    /** @deprecated Please use `beforeUpload` directly */
    transformFile: PropType<TransformFileHandler>;
    iconRender: PropType<(opt: {
        file: UploadFile<T>;
        listType?: UploadListType;
    }) => VueNode>;
    isImageUrl: PropType<(file: UploadFile) => boolean>;
    progress: PropType<UploadListProgressProps>;
    itemRender: PropType<ItemRender<T>>;
    /** Config max count of `fileList`. Will replace current one when `maxCount` is 1 */
    maxCount: NumberConstructor;
    height: (StringConstructor | NumberConstructor)[];
    removeIcon: PropType<(opt: {
        file: UploadFile;
    }) => VueNode>;
    downloadIcon: PropType<(opt: {
        file: UploadFile;
    }) => VueNode>;
    previewIcon: PropType<(opt: {
        file: UploadFile;
    }) => VueNode>;
};
export declare type UploadProps = Partial<ExtractPropTypes<ReturnType<typeof uploadProps>>>;
export interface UploadState<T = any> {
    fileList: UploadFile<T>[];
    dragState: string;
}
declare function uploadListProps<T = any>(): {
    listType: PropType<UploadListType>;
    onPreview: PropType<(file: UploadFile<T>) => void>;
    onDownload: PropType<(file: UploadFile<T>) => void>;
    onRemove: PropType<(file: UploadFile<T>) => void | boolean>;
    items: PropType<UploadFile<T>[]>;
    progress: PropType<UploadListProgressProps>;
    prefixCls: PropType<string>;
    showRemoveIcon: {
        type: BooleanConstructor;
        default: any;
    };
    showDownloadIcon: {
        type: BooleanConstructor;
        default: any;
    };
    showPreviewIcon: {
        type: BooleanConstructor;
        default: any;
    };
    removeIcon: PropType<(opt: {
        file: UploadFile;
    }) => VueNode>;
    downloadIcon: PropType<(opt: {
        file: UploadFile;
    }) => VueNode>;
    previewIcon: PropType<(opt: {
        file: UploadFile;
    }) => VueNode>;
    locale: {
        type: PropType<UploadLocale>;
        default: UploadLocale;
    };
    previewFile: PropType<PreviewFileHandler>;
    iconRender: PropType<(opt: {
        file: UploadFile<T>;
        listType?: UploadListType;
    }) => VueNode>;
    isImageUrl: PropType<(file: UploadFile) => boolean>;
    appendAction: PropType<() => VueNode>;
    appendActionVisible: {
        type: BooleanConstructor;
        default: any;
    };
    itemRender: PropType<ItemRender<T>>;
};
export declare type UploadListProps = Partial<ExtractPropTypes<ReturnType<typeof uploadListProps>>>;
export { uploadProps, uploadListProps };
