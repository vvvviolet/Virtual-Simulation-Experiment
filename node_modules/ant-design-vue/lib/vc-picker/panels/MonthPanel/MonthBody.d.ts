import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
import type { VueNode } from '../../../_util/type';
export declare const MONTH_COL_COUNT = 3;
export declare type MonthCellRender<DateType> = (obj: {
    current: DateType;
    locale: Locale;
}) => VueNode;
export declare type MonthBodyProps<DateType> = {
    prefixCls: string;
    locale: Locale;
    generateConfig: GenerateConfig<DateType>;
    value?: DateType | null;
    viewDate: DateType;
    disabledDate?: (date: DateType) => boolean;
    monthCellRender?: MonthCellRender<DateType>;
    onSelect: (value: DateType) => void;
};
declare function MonthBody<DateType>(_props: MonthBodyProps<DateType>): JSX.Element;
declare namespace MonthBody {
    var displayName: string;
    var inheritAttrs: boolean;
}
export default MonthBody;
