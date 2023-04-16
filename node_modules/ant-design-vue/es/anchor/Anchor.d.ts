import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
export declare type AnchorContainer = HTMLElement | Window;
export declare const anchorProps: () => {
    prefixCls: StringConstructor;
    offsetTop: NumberConstructor;
    bounds: NumberConstructor;
    affix: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInkInFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    getContainer: PropType<() => AnchorContainer>;
    wrapperClass: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    getCurrentAnchor: PropType<() => string>;
    targetOffset: NumberConstructor;
    onChange: PropType<(currentActiveLink: string) => void>;
    onClick: PropType<(e: MouseEvent, link: {
        title: any;
        href: string;
    }) => void>;
};
export declare type AnchorProps = Partial<ExtractPropTypes<ReturnType<typeof anchorProps>>>;
export interface AnchorState {
    scrollContainer: HTMLElement | Window;
    links: string[];
    scrollEvent: any;
    animating: boolean;
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    offsetTop: NumberConstructor;
    bounds: NumberConstructor;
    affix: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInkInFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    getContainer: PropType<() => AnchorContainer>;
    wrapperClass: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    getCurrentAnchor: PropType<() => string>;
    targetOffset: NumberConstructor;
    onChange: PropType<(currentActiveLink: string) => void>;
    onClick: PropType<(e: MouseEvent, link: {
        title: any;
        href: string;
    }) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    offsetTop: NumberConstructor;
    bounds: NumberConstructor;
    affix: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInkInFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    getContainer: PropType<() => AnchorContainer>;
    wrapperClass: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    getCurrentAnchor: PropType<() => string>;
    targetOffset: NumberConstructor;
    onChange: PropType<(currentActiveLink: string) => void>;
    onClick: PropType<(e: MouseEvent, link: {
        title: any;
        href: string;
    }) => void>;
}>>, {
    affix: boolean;
    showInkInFixed: boolean;
    wrapperStyle: CSSProperties;
}>;
export default _default;
