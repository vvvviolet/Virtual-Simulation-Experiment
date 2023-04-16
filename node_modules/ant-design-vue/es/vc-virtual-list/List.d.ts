import type { PropType, Component, CSSProperties } from 'vue';
import type { Key } from '../_util/type';
export declare type ScrollAlign = 'top' | 'bottom' | 'auto';
export declare type ScrollConfig = {
    index: number;
    align?: ScrollAlign;
    offset?: number;
} | {
    key: Key;
    align?: ScrollAlign;
    offset?: number;
};
export declare type ScrollTo = (arg: number | ScrollConfig) => void;
export interface ListState {
    scrollTop: number;
    scrollMoving: boolean;
}
declare const List: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    data: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    height: NumberConstructor;
    itemHeight: NumberConstructor;
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: {
        type: BooleanConstructor;
        default: any;
    };
    itemKey: {
        type: PropType<Key | ((item: Record<string, any>) => Key)>;
        required: true;
    };
    component: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
    };
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    children: FunctionConstructor;
    onScroll: FunctionConstructor;
    onMousedown: FunctionConstructor;
    onMouseenter: FunctionConstructor;
    onVisibleChange: PropType<(visibleList: any[], fullList: any[]) => void>;
}, {
    state: {
        scrollTop: number;
        scrollMoving: boolean;
    };
    mergedData: import("vue").ShallowRef<any[]>;
    componentStyle: import("vue").ComputedRef<CSSProperties>;
    onFallbackScroll: (e: UIEvent) => void;
    onScrollBar: (newScrollTop: number) => void;
    componentRef: import("vue").Ref<HTMLDivElement>;
    useVirtual: import("vue").ComputedRef<boolean>;
    calRes: {
        scrollHeight?: number;
        start?: number;
        end?: number;
        offset?: number;
    };
    collectHeight: () => void;
    setInstance: (item: Record<string, any>, instance: HTMLElement) => void;
    sharedConfig: {
        getKey: (item: Record<string, any>) => any;
    };
    scrollBarRef: import("vue").Ref<any>;
    fillerInnerRef: import("vue").Ref<HTMLDivElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    data: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    height: NumberConstructor;
    itemHeight: NumberConstructor;
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: {
        type: BooleanConstructor;
        default: any;
    };
    itemKey: {
        type: PropType<Key | ((item: Record<string, any>) => Key)>;
        required: true;
    };
    component: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
    };
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    children: FunctionConstructor;
    onScroll: FunctionConstructor;
    onMousedown: FunctionConstructor;
    onMouseenter: FunctionConstructor;
    onVisibleChange: PropType<(visibleList: any[], fullList: any[]) => void>;
}>>, {
    data: unknown[];
    virtual: boolean;
    fullHeight: boolean;
}>;
export default List;
