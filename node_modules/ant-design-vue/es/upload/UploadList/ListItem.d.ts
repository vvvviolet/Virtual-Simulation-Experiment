import type { ExtractPropTypes, PropType } from 'vue';
import type { ItemRender, UploadFile, UploadListProgressProps, UploadListType, UploadLocale } from '../interface';
import type { VueNode } from '../../_util/type';
export declare const listItemProps: () => {
    prefixCls: StringConstructor;
    locale: {
        type: PropType<UploadLocale>;
        default: UploadLocale;
    };
    file: PropType<UploadFile<any>>;
    items: PropType<UploadFile<any>[]>;
    listType: PropType<UploadListType>;
    isImgUrl: PropType<(file: UploadFile) => boolean>;
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
    iconRender: PropType<(opt: {
        file: UploadFile;
    }) => VueNode>;
    actionIconRender: PropType<(opt: {
        customIcon: VueNode;
        callback: () => void;
        prefixCls: string;
        title?: string | undefined;
    }) => VueNode>;
    itemRender: PropType<ItemRender<any>>;
    onPreview: PropType<(file: UploadFile, e: Event) => void>;
    onClose: PropType<(file: UploadFile) => void>;
    onDownload: PropType<(file: UploadFile) => void>;
    progress: PropType<UploadListProgressProps>;
};
export declare type ListItemProps = Partial<ExtractPropTypes<ReturnType<typeof listItemProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    locale: {
        type: PropType<UploadLocale>;
        default: UploadLocale;
    };
    file: PropType<UploadFile<any>>;
    items: PropType<UploadFile<any>[]>;
    listType: PropType<UploadListType>;
    isImgUrl: PropType<(file: UploadFile<any>) => boolean>;
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
        file: UploadFile<any>;
    }) => VueNode>;
    downloadIcon: PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    previewIcon: PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    iconRender: PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    actionIconRender: PropType<(opt: {
        customIcon: VueNode;
        callback: () => void;
        prefixCls: string;
        title?: string;
    }) => VueNode>;
    itemRender: PropType<ItemRender<any>>;
    onPreview: PropType<(file: UploadFile<any>, e: Event) => void>;
    onClose: PropType<(file: UploadFile<any>) => void>;
    onDownload: PropType<(file: UploadFile<any>) => void>;
    progress: PropType<UploadListProgressProps>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    locale: {
        type: PropType<UploadLocale>;
        default: UploadLocale;
    };
    file: PropType<UploadFile<any>>;
    items: PropType<UploadFile<any>[]>;
    listType: PropType<UploadListType>;
    isImgUrl: PropType<(file: UploadFile<any>) => boolean>;
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
        file: UploadFile<any>;
    }) => VueNode>;
    downloadIcon: PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    previewIcon: PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    iconRender: PropType<(opt: {
        file: UploadFile<any>;
    }) => VueNode>;
    actionIconRender: PropType<(opt: {
        customIcon: VueNode;
        callback: () => void;
        prefixCls: string;
        title?: string;
    }) => VueNode>;
    itemRender: PropType<ItemRender<any>>;
    onPreview: PropType<(file: UploadFile<any>, e: Event) => void>;
    onClose: PropType<(file: UploadFile<any>) => void>;
    onDownload: PropType<(file: UploadFile<any>) => void>;
    progress: PropType<UploadListProgressProps>;
}>>, {
    locale: UploadLocale;
    showRemoveIcon: boolean;
    showDownloadIcon: boolean;
    showPreviewIcon: boolean;
}>;
export default _default;
