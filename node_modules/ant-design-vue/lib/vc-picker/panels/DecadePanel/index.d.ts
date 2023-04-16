import type { PanelSharedProps } from '../../interface';
export declare type DecadePanelProps<DateType> = PanelSharedProps<DateType>;
export declare const DECADE_UNIT_DIFF = 10;
export declare const DECADE_DISTANCE_COUNT: number;
declare function DecadePanel<DateType>(_props: DecadePanelProps<DateType>): JSX.Element;
declare namespace DecadePanel {
    var displayName: string;
    var inheritAttrs: boolean;
}
export default DecadePanel;
