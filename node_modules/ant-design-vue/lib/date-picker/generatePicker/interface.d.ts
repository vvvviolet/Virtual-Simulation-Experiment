import type { PickerBaseProps as RCPickerBaseProps, PickerDateProps as RCPickerDateProps, PickerTimeProps as RCPickerTimeProps } from '../../vc-picker/Picker';
import type { RangePickerBaseProps as RCRangePickerBaseProps, RangePickerDateProps as RCRangePickerDateProps, RangePickerTimeProps as RCRangePickerTimeProps } from '../../vc-picker/RangePicker';
import type { Locale as RcPickerLocale } from '../../vc-picker/interface';
import type { TimePickerLocale } from '../../time-picker';
import type { SizeType } from '../../config-provider';
declare type InjectDefaultProps<Props> = Omit<Props, 'locale' | 'generateConfig' | 'prevIcon' | 'nextIcon' | 'superPrevIcon' | 'superNextIcon' | 'hideHeader' | 'components'> & {
    locale?: PickerLocale;
    size?: SizeType;
    bordered?: boolean;
};
export declare type PickerLocale = {
    lang: RcPickerLocale & AdditionalPickerLocaleLangProps;
    timePickerLocale: TimePickerLocale;
} & AdditionalPickerLocaleProps;
export declare type AdditionalPickerLocaleProps = {
    dateFormat?: string;
    dateTimeFormat?: string;
    weekFormat?: string;
    monthFormat?: string;
};
export declare type AdditionalPickerLocaleLangProps = {
    placeholder: string;
    yearPlaceholder?: string;
    quarterPlaceholder?: string;
    monthPlaceholder?: string;
    weekPlaceholder?: string;
    rangeYearPlaceholder?: [string, string];
    rangeQuarterPlaceholder?: [string, string];
    rangeMonthPlaceholder?: [string, string];
    rangeWeekPlaceholder?: [string, string];
    rangePlaceholder?: [string, string];
};
export declare type PickerBaseProps<DateType> = InjectDefaultProps<RCPickerBaseProps<DateType>>;
export declare type PickerDateProps<DateType> = InjectDefaultProps<RCPickerDateProps<DateType>>;
export declare type PickerTimeProps<DateType> = InjectDefaultProps<RCPickerTimeProps<DateType>>;
export declare type PickerProps<DateType> = PickerBaseProps<DateType> | PickerDateProps<DateType> | PickerTimeProps<DateType>;
export declare type RangePickerBaseProps<DateType> = InjectDefaultProps<RCRangePickerBaseProps<DateType>>;
export declare type RangePickerDateProps<DateType> = InjectDefaultProps<RCRangePickerDateProps<DateType>>;
export declare type RangePickerTimeProps<DateType> = InjectDefaultProps<RCRangePickerTimeProps<DateType>>;
export declare type RangePickerProps<DateType> = RangePickerBaseProps<DateType> | RangePickerDateProps<DateType> | RangePickerTimeProps<DateType>;
export {};
