export declare type Status = 'error' | 'process' | 'finish' | 'wait';
export declare type StepIconRender = (info: {
    index: number;
    status: Status;
    title: any;
    description: any;
    node: any;
}) => any;
export declare type ProgressDotRender = (info: {
    iconDot: any;
    index: number;
    status: Status;
    title: any;
    description: any;
}) => any;
declare const _default: import("vue").DefineComponent<{
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    iconPrefix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    labelPlacement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    status: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    progressDot: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    initial: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    stepIcon: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    iconPrefix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    labelPlacement: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    status: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    progressDot: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    initial: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    icons: import("vue-types").VueTypeLooseShape<{
        finish: any;
        error: any;
    }>;
    stepIcon: FunctionConstructor;
}>> & {
    onChange?: (...args: any[]) => any;
}, {
    initial: number;
    prefixCls: string;
    size: string;
    direction: string;
    current: number;
    type: string;
    status: string;
    progressDot: any;
    iconPrefix: string;
    labelPlacement: string;
}>;
export default _default;
