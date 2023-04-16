import type { App } from 'vue';
export type { UploadProps, UploadListProps, UploadChangeParam, UploadFile } from './interface';
export declare const UploadDragger: import("vue").DefineComponent<{
    capture: import("vue").PropType<boolean | "user" | "environment">;
    type: import("vue").PropType<import("./interface").UploadType>;
    name: StringConstructor;
    defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
    fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
    action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
    directory: {
        type: BooleanConstructor;
        default: any;
    };
    data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
    method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
    headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
    showUploadList: {
        type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
        default: boolean | import("./interface").ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    accept: StringConstructor;
    beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
    onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
    'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
    onDrop: import("vue").PropType<(event: DragEvent) => void>;
    listType: import("vue").PropType<import("./interface").UploadListType>;
    onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
    onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
    onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
    onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
    remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
    previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
    transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
    iconRender: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
        listType?: import("./interface").UploadListType;
    }) => import("../_util/type").VueNode>;
    isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
    progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
    itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
    maxCount: NumberConstructor;
    height: (StringConstructor | NumberConstructor)[];
    removeIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
    downloadIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
    previewIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    capture: import("vue").PropType<boolean | "user" | "environment">;
    type: import("vue").PropType<import("./interface").UploadType>;
    name: StringConstructor;
    defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
    fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
    action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
    directory: {
        type: BooleanConstructor;
        default: any;
    };
    data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
    method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
    headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
    showUploadList: {
        type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
        default: boolean | import("./interface").ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    accept: StringConstructor;
    beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
    onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
    'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
    onDrop: import("vue").PropType<(event: DragEvent) => void>;
    listType: import("vue").PropType<import("./interface").UploadListType>;
    onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
    onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
    onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
    onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
    remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
    previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
    transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
    iconRender: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
        listType?: import("./interface").UploadListType;
    }) => import("../_util/type").VueNode>;
    isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
    progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
    itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
    maxCount: NumberConstructor;
    height: (StringConstructor | NumberConstructor)[];
    removeIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
    downloadIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
    previewIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
}>>, {
    multiple: boolean;
    disabled: boolean;
    locale: import("./interface").UploadLocale;
    directory: boolean;
    withCredentials: boolean;
    openFileDialogOnClick: boolean;
    showUploadList: boolean | import("./interface").ShowUploadListInterface;
    supportServerRender: boolean;
}>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            multiple: boolean;
            disabled: boolean;
            locale: import("./interface").UploadLocale;
            directory: boolean;
            withCredentials: boolean;
            openFileDialogOnClick: boolean;
            showUploadList: boolean | import("./interface").ShowUploadListInterface;
            supportServerRender: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            capture: import("vue").PropType<boolean | "user" | "environment">;
            type: import("vue").PropType<import("./interface").UploadType>;
            name: StringConstructor;
            defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
            directory: {
                type: BooleanConstructor;
                default: any;
            };
            data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
            method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
            headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
            showUploadList: {
                type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
                default: boolean | import("./interface").ShowUploadListInterface;
            };
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            accept: StringConstructor;
            beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
            onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
            'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
            onDrop: import("vue").PropType<(event: DragEvent) => void>;
            listType: import("vue").PropType<import("./interface").UploadListType>;
            onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
            onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
            previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
            transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
            iconRender: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode>;
            isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
            progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
            itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
            maxCount: NumberConstructor;
            height: (StringConstructor | NumberConstructor)[];
            removeIcon: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            downloadIcon: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            previewIcon: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "multiple" | "disabled" | "locale" | "directory" | "withCredentials" | "openFileDialogOnClick" | "showUploadList" | "supportServerRender">;
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
            capture: import("vue").PropType<boolean | "user" | "environment">;
            type: import("vue").PropType<import("./interface").UploadType>;
            name: StringConstructor;
            defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
            directory: {
                type: BooleanConstructor;
                default: any;
            };
            data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
            method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
            headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
            showUploadList: {
                type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
                default: boolean | import("./interface").ShowUploadListInterface;
            };
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            accept: StringConstructor;
            beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
            onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
            'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
            onDrop: import("vue").PropType<(event: DragEvent) => void>;
            listType: import("vue").PropType<import("./interface").UploadListType>;
            onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
            onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
            previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
            transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
            iconRender: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode>;
            isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
            progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
            itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
            maxCount: NumberConstructor;
            height: (StringConstructor | NumberConstructor)[];
            removeIcon: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            downloadIcon: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            previewIcon: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            multiple: boolean;
            disabled: boolean;
            locale: import("./interface").UploadLocale;
            directory: boolean;
            withCredentials: boolean;
            openFileDialogOnClick: boolean;
            showUploadList: boolean | import("./interface").ShowUploadListInterface;
            supportServerRender: boolean;
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
        capture: import("vue").PropType<boolean | "user" | "environment">;
        type: import("vue").PropType<import("./interface").UploadType>;
        name: StringConstructor;
        defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
        directory: {
            type: BooleanConstructor;
            default: any;
        };
        data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
        method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
        headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
        showUploadList: {
            type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
            default: boolean | import("./interface").ShowUploadListInterface;
        };
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        accept: StringConstructor;
        beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
        onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
        'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
        onDrop: import("vue").PropType<(event: DragEvent) => void>;
        listType: import("vue").PropType<import("./interface").UploadListType>;
        onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
        onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
        previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
        transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
        iconRender: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode>;
        isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
        progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
        itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
        maxCount: NumberConstructor;
        height: (StringConstructor | NumberConstructor)[];
        removeIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        downloadIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        previewIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    capture: import("vue").PropType<boolean | "user" | "environment">;
    type: import("vue").PropType<import("./interface").UploadType>;
    name: StringConstructor;
    defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
    fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
    action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
    directory: {
        type: BooleanConstructor;
        default: any;
    };
    data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
    method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
    headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
    showUploadList: {
        type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
        default: boolean | import("./interface").ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    accept: StringConstructor;
    beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
    onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
    'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
    onDrop: import("vue").PropType<(event: DragEvent) => void>;
    listType: import("vue").PropType<import("./interface").UploadListType>;
    onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
    onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
    onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
    onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
    remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
    previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
    transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
    iconRender: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
        listType?: import("./interface").UploadListType;
    }) => import("../_util/type").VueNode>;
    isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
    progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
    itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
    maxCount: NumberConstructor;
    height: (StringConstructor | NumberConstructor)[];
    removeIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
    downloadIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
    previewIcon: import("vue").PropType<(opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    multiple: boolean;
    disabled: boolean;
    locale: import("./interface").UploadLocale;
    directory: boolean;
    withCredentials: boolean;
    openFileDialogOnClick: boolean;
    showUploadList: boolean | import("./interface").ShowUploadListInterface;
    supportServerRender: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Dragger: import("vue").DefineComponent<{
        capture: import("vue").PropType<boolean | "user" | "environment">;
        type: import("vue").PropType<import("./interface").UploadType>;
        name: StringConstructor;
        defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
        directory: {
            type: BooleanConstructor;
            default: any;
        };
        data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
        method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
        headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
        showUploadList: {
            type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
            default: boolean | import("./interface").ShowUploadListInterface;
        };
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        accept: StringConstructor;
        beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
        onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
        'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
        onDrop: import("vue").PropType<(event: DragEvent) => void>;
        listType: import("vue").PropType<import("./interface").UploadListType>;
        onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
        onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
        previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
        transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
        iconRender: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode>;
        isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
        progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
        itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
        maxCount: NumberConstructor;
        height: (StringConstructor | NumberConstructor)[];
        removeIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        downloadIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        previewIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        capture: import("vue").PropType<boolean | "user" | "environment">;
        type: import("vue").PropType<import("./interface").UploadType>;
        name: StringConstructor;
        defaultFileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        fileList: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        action: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
        directory: {
            type: BooleanConstructor;
            default: any;
        };
        data: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
        method: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
        headers: import("vue").PropType<import("./interface").HttpRequestHeader>;
        showUploadList: {
            type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
            default: boolean | import("./interface").ShowUploadListInterface;
        };
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        accept: StringConstructor;
        beforeUpload: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
        onChange: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
        'onUpdate:fileList': import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
        onDrop: import("vue").PropType<(event: DragEvent) => void>;
        listType: import("vue").PropType<import("./interface").UploadListType>;
        onPreview: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        onDownload: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        onReject: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
        onRemove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        remove: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
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
        previewFile: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
        transformFile: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
        iconRender: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode>;
        isImageUrl: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
        progress: import("vue").PropType<import("./interface").UploadListProgressProps>;
        itemRender: import("vue").PropType<import("./interface").ItemRender<any>>;
        maxCount: NumberConstructor;
        height: (StringConstructor | NumberConstructor)[];
        removeIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        downloadIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        previewIcon: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
    }>>, {
        multiple: boolean;
        disabled: boolean;
        locale: import("./interface").UploadLocale;
        directory: boolean;
        withCredentials: boolean;
        openFileDialogOnClick: boolean;
        showUploadList: boolean | import("./interface").ShowUploadListInterface;
        supportServerRender: boolean;
    }>;
    LIST_IGNORE: string;
    install(app: App): App<any>;
};
export default _default;
