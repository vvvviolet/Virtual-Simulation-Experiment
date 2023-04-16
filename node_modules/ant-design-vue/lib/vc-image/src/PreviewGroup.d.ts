import type { PropType, Ref, ComputedRef } from 'vue';
import { type ImagePreviewType } from './Image';
import type { PreviewProps } from './Preview';
export interface PreviewGroupPreview extends Omit<ImagePreviewType, 'icons' | 'mask' | 'maskClassName'> {
    /**
     * If Preview the show img index
     * @default 0
     */
    current?: number;
}
export interface GroupConsumerProps {
    previewPrefixCls?: string;
    icons?: PreviewProps['icons'];
    preview?: boolean | PreviewGroupPreview;
}
export interface GroupConsumerValue extends GroupConsumerProps {
    isPreviewGroup?: Ref<boolean | undefined>;
    previewUrls: ComputedRef<Map<number, string>>;
    setPreviewUrls: (id: number, url: string, canPreview?: boolean) => void;
    current: Ref<number>;
    setCurrent: (current: number) => void;
    setShowPreview: (isShowPreview: boolean) => void;
    setMousePosition: (mousePosition: null | {
        x: number;
        y: number;
    }) => void;
    registerImage: (id: number, url: string, canPreview?: boolean) => () => void;
    rootClassName?: string;
}
export declare const context: {
    provide: (val: GroupConsumerValue) => void;
    inject: () => GroupConsumerValue;
};
declare const Group: import("vue").DefineComponent<{
    previewPrefixCls: StringConstructor;
    preview: {
        type: PropType<boolean | ImagePreviewType>;
        default: boolean | ImagePreviewType;
    };
    icons: {
        type: PropType<{
            rotateLeft?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            rotateRight?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            zoomIn?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            zoomOut?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            close?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            left?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            right?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        }>;
        default: () => {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    previewPrefixCls: StringConstructor;
    preview: {
        type: PropType<boolean | ImagePreviewType>;
        default: boolean | ImagePreviewType;
    };
    icons: {
        type: PropType<{
            rotateLeft?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            rotateRight?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            zoomIn?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            zoomOut?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            close?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            left?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            right?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        }>;
        default: () => {};
    };
}>>, {
    preview: boolean | ImagePreviewType;
    icons: {};
}>;
export default Group;
