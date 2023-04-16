import type { UploadListType, UploadFile } from '../interface';
import type { VueNode } from '../../_util/type';
declare const _default: import("vue").DefineComponent<{
    listType: import("vue").PropType<UploadListType>;
    onPreview: import("vue").PropType<(file: UploadFile<any>) => void>;
    onDownload: import("vue").PropType<(file: UploadFile<any>) => void>;
    onRemove: import("vue").PropType<(file: UploadFile<any>) => boolean | void>;
    items: import("vue").PropType<UploadFile<any>[]>;
    progress: import("vue").PropType<import("../interface").UploadListProgressProps>;
    prefixCls: import("vue").PropType<string>;
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
    removeIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    downloadIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    previewIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    locale: {
        type: import("vue").PropType<import("../interface").UploadLocale>;
        default: import("../interface").UploadLocale;
    };
    previewFile: import("vue").PropType<(file: Blob | import("../interface").FileType) => PromiseLike<string>>;
    iconRender: import("vue").PropType<(opt: {
        file: UploadFile<any>;
        listType?: UploadListType;
    }) => VueNode>;
    isImageUrl: import("vue").PropType<(file: UploadFile<any>) => boolean>;
    appendAction: import("vue").PropType<() => VueNode>;
    appendActionVisible: {
        type: BooleanConstructor;
        default: any;
    };
    itemRender: import("vue").PropType<import("../interface").ItemRender<any>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    listType: import("vue").PropType<UploadListType>;
    onPreview: import("vue").PropType<(file: UploadFile<any>) => void>;
    onDownload: import("vue").PropType<(file: UploadFile<any>) => void>;
    onRemove: import("vue").PropType<(file: UploadFile<any>) => boolean | void>;
    items: import("vue").PropType<UploadFile<any>[]>;
    progress: import("vue").PropType<import("../interface").UploadListProgressProps>;
    prefixCls: import("vue").PropType<string>;
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
    removeIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    downloadIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    previewIcon: import("vue").PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    locale: {
        type: import("vue").PropType<import("../interface").UploadLocale>;
        default: import("../interface").UploadLocale;
    };
    previewFile: import("vue").PropType<(file: Blob | import("../interface").FileType) => PromiseLike<string>>;
    iconRender: import("vue").PropType<(opt: {
        file: UploadFile<any>;
        listType?: UploadListType;
    }) => VueNode>;
    isImageUrl: import("vue").PropType<(file: UploadFile<any>) => boolean>;
    appendAction: import("vue").PropType<() => VueNode>;
    appendActionVisible: {
        type: BooleanConstructor;
        default: any;
    };
    itemRender: import("vue").PropType<import("../interface").ItemRender<any>>;
}>>, {
    locale: import("../interface").UploadLocale;
    showRemoveIcon: boolean;
    showDownloadIcon: boolean;
    showPreviewIcon: boolean;
    appendActionVisible: boolean;
}>;
export default _default;
