import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    scrollTop: NumberConstructor;
    scrollHeight: NumberConstructor;
    height: NumberConstructor;
    count: NumberConstructor;
    onScroll: {
        type: PropType<(scrollTop: number) => void>;
    };
    onStartMove: {
        type: PropType<() => void>;
    };
    onStopMove: {
        type: PropType<() => void>;
    };
}, {
    moveRaf: any;
    scrollbarRef: any;
    thumbRef: any;
    visibleTimeout: any;
    state: {
        dragging: boolean;
        pageY: number;
        startTop: number;
        visible: boolean;
    };
}, unknown, {}, {
    delayHidden(): void;
    onScrollbarTouchStart(e: TouchEvent): void;
    onContainerMouseDown(e: MouseEvent): void;
    patchEvents(): void;
    removeEvents(): void;
    onMouseDown(e: MouseEvent | TouchEvent): void;
    onMouseMove(e: MouseEvent | TouchEvent): void;
    onMouseUp(): void;
    getSpinHeight(): number;
    getEnableScrollRange(): number;
    getEnableHeightRange(): number;
    getTop(): number;
    showScroll(): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    scrollTop: NumberConstructor;
    scrollHeight: NumberConstructor;
    height: NumberConstructor;
    count: NumberConstructor;
    onScroll: {
        type: PropType<(scrollTop: number) => void>;
    };
    onStartMove: {
        type: PropType<() => void>;
    };
    onStopMove: {
        type: PropType<() => void>;
    };
}>>, {}>;
export default _default;
