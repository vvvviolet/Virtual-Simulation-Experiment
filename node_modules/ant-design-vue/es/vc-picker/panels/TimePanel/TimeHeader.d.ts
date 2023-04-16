import type { Locale } from '../../interface';
import type { GenerateConfig } from '../../generate';
export declare type TimeHeaderProps<DateType> = {
    prefixCls: string;
    value?: DateType | null;
    locale: Locale;
    generateConfig: GenerateConfig<DateType>;
    format: string;
};
declare function TimeHeader<DateType>(_props: TimeHeaderProps<DateType>): JSX.Element;
declare namespace TimeHeader {
    var displayName: string;
    var inheritAttrs: boolean;
}
export default TimeHeader;
