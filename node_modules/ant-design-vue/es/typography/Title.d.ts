import type { ExtractPropTypes, FunctionalComponent, PropType } from 'vue';
export declare const titleProps: () => {
    level: PropType<1 | 5 | 2 | 3 | 4>;
    prefixCls: StringConstructor;
    code: {
        type: BooleanConstructor;
        default: any;
    };
    mark: {
        type: BooleanConstructor;
        default: any;
    };
    ellipsis: {
        type: PropType<boolean | import("./Base").EllipsisConfig>;
        default: boolean | import("./Base").EllipsisConfig;
    };
    content: StringConstructor;
    underline: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    type: PropType<import("./Base").BaseType>;
    editable: {
        type: PropType<boolean | import("./Base").EditConfig>;
        default: boolean | import("./Base").EditConfig;
    };
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    delete: {
        type: BooleanConstructor;
        default: any;
    };
    copyable: {
        type: PropType<boolean | import("./Base").CopyConfig>;
        default: boolean | import("./Base").CopyConfig;
    };
    'onUpdate:content': PropType<(content: string) => void>;
};
export declare type TitleProps = Partial<ExtractPropTypes<ReturnType<typeof titleProps>>>;
declare const Title: FunctionalComponent<TitleProps>;
export default Title;
