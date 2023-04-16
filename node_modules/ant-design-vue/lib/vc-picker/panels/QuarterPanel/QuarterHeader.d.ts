import type { Locale } from '../../interface';
import type { GenerateConfig } from '../../generate';
export declare type QuarterHeaderProps<DateType> = {
    prefixCls: string;
    viewDate: DateType;
    locale: Locale;
    generateConfig: GenerateConfig<DateType>;
    onPrevYear: () => void;
    onNextYear: () => void;
    onYearClick: () => void;
};
declare function QuarterHeader<DateType>(_props: QuarterHeaderProps<DateType>): JSX.Element;
declare namespace QuarterHeader {
    var displayName: string;
    var inheritAttrs: boolean;
}
export default QuarterHeader;
