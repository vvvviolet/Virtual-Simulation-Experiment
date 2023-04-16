import type { PanelSharedProps } from '../../interface';
export declare type WeekPanelProps<DateType> = PanelSharedProps<DateType>;
declare function WeekPanel<DateType>(_props: WeekPanelProps<DateType>): JSX.Element;
declare namespace WeekPanel {
    var displayName: string;
    var inheritAttrs: boolean;
}
export default WeekPanel;
