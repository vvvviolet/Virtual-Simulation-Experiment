import type { CustomizeComponent } from '../interface';
export interface ExpandedRowProps {
    prefixCls: string;
    component: CustomizeComponent;
    cellComponent: CustomizeComponent;
    expanded: boolean;
    colSpan: number;
    isEmpty: boolean;
}
declare const _default: import("vue").DefineComponent<ExpandedRowProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExpandedRowProps>, {
    component: any;
    cellComponent: any;
}>;
export default _default;
