import type { Key } from '../interface';
export interface MeasureCellProps {
    columnKey: Key;
    onColumnResize: (key: Key, width: number) => void;
}
declare const _default: import("vue").DefineComponent<MeasureCellProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<MeasureCellProps>, {}>;
export default _default;
