import type { Locale } from '../../interface';
import type { GenerateConfig } from '../../generate';
export declare type DateHeaderProps<DateType> = {
    prefixCls: string;
    viewDate: DateType;
    value?: DateType | null;
    locale: Locale;
    generateConfig: GenerateConfig<DateType>;
    onPrevYear: () => void;
    onNextYear: () => void;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    onYearClick: () => void;
    onMonthClick: () => void;
};
declare function DateHeader<DateType>(_props: DateHeaderProps<DateType>): JSX.Element;
declare namespace DateHeader {
    var displayName: string;
    var inheritAttrs: boolean;
}
export default DateHeader;
