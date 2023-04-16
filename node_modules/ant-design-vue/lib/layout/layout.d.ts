import type { ExtractPropTypes, HTMLAttributes } from 'vue';
export declare const basicProps: () => {
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
};
export declare type BasicProps = Partial<ExtractPropTypes<ReturnType<typeof basicProps>>> & HTMLAttributes;
declare const Layout: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, {
    hasSider: boolean;
}>;
declare const Header: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, {
    hasSider: boolean;
}>;
declare const Footer: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, {
    hasSider: boolean;
}>;
declare const Content: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    hasSider: {
        type: BooleanConstructor;
        default: any;
    };
    tagName: StringConstructor;
}>>, {
    hasSider: boolean;
}>;
export { Header, Footer, Content };
export default Layout;
