import type { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    action: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    showAction: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    hideAction: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    getPopupClassNameFromAlign: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    afterPopupVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    popup: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupPlacement: StringConstructor;
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    popupTransitionName: StringConstructor;
    popupAnimation: import("vue-types").VueTypeValidableDef<any>;
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    zIndex: NumberConstructor;
    focusDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    blurDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    getPopupContainer: FunctionConstructor;
    getDocument: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    destroyPopupOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupAlign: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultPopupVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskTransitionName: StringConstructor;
    maskAnimation: StringConstructor;
    stretch: StringConstructor;
    alignPoint: {
        type: BooleanConstructor;
        default: any;
    };
    autoDestroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobile: ObjectConstructor;
    getTriggerDOMNode: PropType<(d?: HTMLElement) => HTMLElement>;
    tryPopPortal: BooleanConstructor;
}, {
    popPortal: boolean;
    setPortal: () => void;
    vcTriggerContext: {
        onPopupMouseDown?: (...args: any[]) => void;
    };
    popupRef: any;
    setPopupRef: (val: any) => void;
    triggerRef: any;
    align: import("vue").ComputedRef<{
        [key: string]: any;
    }>;
    focusTime: any;
    clickOutsideHandler: any;
    contextmenuOutsideHandler1: any;
    contextmenuOutsideHandler2: any;
    touchOutsideHandler: any;
    attachId: any;
    delayTimer: any;
    hasPopupMouseDown: boolean;
    preClickTime: any;
    preTouchTime: any;
    mouseDownTimeout: any;
    childOriginEvents: {};
}, {
    prevPopupVisible: any;
    sPopupVisible: any;
    point: any;
}, {}, {
    updatedCal(): void;
    onMouseenter(e: any): void;
    onMouseMove(e: any): void;
    onMouseleave(e: any): void;
    onPopupMouseenter(): void;
    onPopupMouseleave(e: any): void;
    onFocus(e: any): void;
    onMousedown(e: any): void;
    onTouchstart(e: any): void;
    onBlur(e: any): void;
    onContextmenu(e: any): void;
    onContextmenuClose(): void;
    onClick(event: any): void;
    onPopupMouseDown(...args: any[]): void;
    onDocumentClick(event: any): void;
    getPopupDomNode(): any;
    getRootDomNode(): any;
    handleGetPopupClassFromAlign(align: any): string;
    getPopupAlign(): any;
    getComponent(): JSX.Element;
    attachParent(popupContainer: any): void;
    getContainer(): any;
    setPopupVisible(sPopupVisible: boolean, event?: any): void;
    setPoint(point: any): void;
    handlePortalUpdate(): void;
    delaySetPopupVisible(visible: boolean, delayS: number, event?: any): void;
    clearDelayTimer(): void;
    clearOutsideHandler(): void;
    createTwoChains(event: string): any;
    isClickToShow(): boolean;
    isContextMenuOnly(): boolean;
    isContextmenuToShow(): boolean;
    isClickToHide(): boolean;
    isMouseEnterToShow(): boolean;
    isMouseLeaveToHide(): boolean;
    isFocusToShow(): boolean;
    isBlurToHide(): boolean;
    forcePopupAlign(): void;
    fireEvents(type: string, e: Event): void;
    close(): void;
}, {
    methods: {
        setState(state: {}, callback: any): void;
        __emit(...args: any[]): void;
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    action: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    showAction: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    hideAction: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    getPopupClassNameFromAlign: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    afterPopupVisibleChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    popup: import("vue-types").VueTypeValidableDef<any>;
    popupStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    popupPlacement: StringConstructor;
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    popupTransitionName: StringConstructor;
    popupAnimation: import("vue-types").VueTypeValidableDef<any>;
    mouseEnterDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    mouseLeaveDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    zIndex: NumberConstructor;
    focusDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    blurDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    getPopupContainer: FunctionConstructor;
    getDocument: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    destroyPopupOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupAlign: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    defaultPopupVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskTransitionName: StringConstructor;
    maskAnimation: StringConstructor;
    stretch: StringConstructor;
    alignPoint: {
        type: BooleanConstructor;
        default: any;
    };
    autoDestroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobile: ObjectConstructor;
    getTriggerDOMNode: PropType<(d?: HTMLElement) => HTMLElement>;
    tryPopPortal: BooleanConstructor;
}>>, {
    prefixCls: string;
    mask: boolean;
    destroyPopupOnHide: boolean;
    forceRender: boolean;
    popupClassName: string;
    popupStyle: CSSProperties;
    autoDestroy: boolean;
    popupVisible: boolean;
    action: string | string[];
    showAction: any;
    hideAction: any;
    getPopupClassNameFromAlign: any;
    afterPopupVisibleChange: (...args: any[]) => any;
    builtinPlacements: {
        [key: string]: any;
    };
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    focusDelay: number;
    blurDelay: number;
    getDocument: (...args: any[]) => any;
    maskClosable: boolean;
    popupAlign: {
        [key: string]: any;
    };
    defaultPopupVisible: boolean;
    alignPoint: boolean;
    tryPopPortal: boolean;
}>;
export default _default;
