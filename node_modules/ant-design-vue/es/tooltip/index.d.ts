import { tooltipProps } from './Tooltip';
export type { TooltipProps, AdjustOverflow, PlacementsConfig, TooltipAlignConfig, TooltipPlacement, } from './Tooltip';
export { tooltipProps };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            visible: boolean;
            align: import("../vc-trigger/interface").AlignType;
            builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
            defaultVisible: boolean;
            overlayStyle: import("vue").CSSProperties;
            destroyTooltipOnHide: boolean;
            autoAdjustOverflow: boolean | import("./placements").AdjustOverflow;
            arrowPointAtCenter: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            title: import("vue-types").VueTypeValidableDef<any>;
            trigger: import("vue").PropType<import("./abstractTooltipProps").TriggerType | import("./abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: import("vue").PropType<import("./abstractTooltipProps").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: import("vue").PropType<boolean | import("./placements").AdjustOverflow>;
                default: boolean | import("./placements").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
                default: import("../vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
                default: import("../vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
            'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "visible" | "align" | "builtinPlacements" | "defaultVisible" | "overlayStyle" | "destroyTooltipOnHide" | "autoAdjustOverflow" | "arrowPointAtCenter">;
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
            title: import("vue-types").VueTypeValidableDef<any>;
            trigger: import("vue").PropType<import("./abstractTooltipProps").TriggerType | import("./abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: import("vue").PropType<import("./abstractTooltipProps").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: import("vue").PropType<boolean | import("./placements").AdjustOverflow>;
                default: boolean | import("./placements").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
                default: import("../vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
                default: import("../vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
            'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            visible: boolean;
            align: import("../vc-trigger/interface").AlignType;
            builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
            defaultVisible: boolean;
            overlayStyle: import("vue").CSSProperties;
            destroyTooltipOnHide: boolean;
            autoAdjustOverflow: boolean | import("./placements").AdjustOverflow;
            arrowPointAtCenter: boolean;
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
        title: import("vue-types").VueTypeValidableDef<any>;
        trigger: import("vue").PropType<import("./abstractTooltipProps").TriggerType | import("./abstractTooltipProps").TriggerType[]>;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        defaultVisible: {
            type: BooleanConstructor;
            default: any;
        };
        placement: import("vue").PropType<import("./abstractTooltipProps").TooltipPlacement>;
        color: StringConstructor;
        transitionName: StringConstructor;
        overlayStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        overlayClassName: StringConstructor;
        openClassName: StringConstructor;
        prefixCls: StringConstructor;
        mouseEnterDelay: NumberConstructor;
        mouseLeaveDelay: NumberConstructor;
        getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
        arrowPointAtCenter: {
            type: BooleanConstructor;
            default: any;
        };
        autoAdjustOverflow: {
            type: import("vue").PropType<boolean | import("./placements").AdjustOverflow>;
            default: boolean | import("./placements").AdjustOverflow;
        };
        destroyTooltipOnHide: {
            type: BooleanConstructor;
            default: any;
        };
        align: {
            type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
            default: import("../vc-trigger/interface").AlignType;
        };
        builtinPlacements: {
            type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
            default: import("../vc-trigger/interface").BuildInPlacements;
        };
        children: ArrayConstructor;
        onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
        'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue").PropType<import("./abstractTooltipProps").TriggerType | import("./abstractTooltipProps").TriggerType[]>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("./abstractTooltipProps").TooltipPlacement>;
    color: StringConstructor;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("./placements").AdjustOverflow>;
        default: boolean | import("./placements").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    visible: boolean;
    align: import("../vc-trigger/interface").AlignType;
    builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
    defaultVisible: boolean;
    overlayStyle: import("vue").CSSProperties;
    destroyTooltipOnHide: boolean;
    autoAdjustOverflow: boolean | import("./placements").AdjustOverflow;
    arrowPointAtCenter: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
