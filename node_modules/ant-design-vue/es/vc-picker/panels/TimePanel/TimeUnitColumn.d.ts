export declare type Unit = {
    label: any;
    value: number;
    disabled: boolean;
};
export declare type TimeUnitColumnProps = {
    prefixCls?: string;
    units?: Unit[];
    value?: number;
    active?: boolean;
    hideDisabledOptions?: boolean;
    onSelect?: (value: number) => void;
};
declare const _default: import("vue").DefineComponent<TimeUnitColumnProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<TimeUnitColumnProps>, {}>;
export default _default;
