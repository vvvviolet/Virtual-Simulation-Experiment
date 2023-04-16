import type { GenerateConfig } from '../vc-picker/generate';
import type { PickerPanelBaseProps as RCPickerPanelBaseProps, PickerPanelDateProps as RCPickerPanelDateProps, PickerPanelTimeProps as RCPickerPanelTimeProps } from '../vc-picker/PickerPanel';
import enUS from './locale/en_US';
import type { VueNode } from '../_util/type';
declare type InjectDefaultProps<Props> = Omit<Props, 'locale' | 'generateConfig' | 'prevIcon' | 'nextIcon' | 'superPrevIcon' | 'superNextIcon'> & {
    locale?: typeof enUS;
    size?: 'large' | 'default' | 'small';
};
export declare type PickerPanelBaseProps<DateType> = InjectDefaultProps<RCPickerPanelBaseProps<DateType>>;
export declare type PickerPanelDateProps<DateType> = InjectDefaultProps<RCPickerPanelDateProps<DateType>>;
export declare type PickerPanelTimeProps<DateType> = InjectDefaultProps<RCPickerPanelTimeProps<DateType>>;
export declare type PickerProps<DateType> = PickerPanelBaseProps<DateType> | PickerPanelDateProps<DateType> | PickerPanelTimeProps<DateType>;
export declare type CalendarMode = 'year' | 'month';
export declare type HeaderRender<DateType> = (config: {
    value: DateType;
    type: CalendarMode;
    onChange: (date: DateType) => void;
    onTypeChange: (type: CalendarMode) => void;
}) => VueNode;
declare type CustomRenderType<DateType> = (config: {
    current: DateType;
}) => VueNode;
export interface CalendarProps<DateType> {
    prefixCls?: string;
    locale?: typeof enUS;
    validRange?: [DateType, DateType];
    disabledDate?: (date: DateType) => boolean;
    dateFullCellRender?: CustomRenderType<DateType>;
    dateCellRender?: CustomRenderType<DateType>;
    monthFullCellRender?: CustomRenderType<DateType>;
    monthCellRender?: CustomRenderType<DateType>;
    headerRender?: HeaderRender<DateType>;
    value?: DateType | string;
    defaultValue?: DateType | string;
    mode?: CalendarMode;
    fullscreen?: boolean;
    onChange?: (date: DateType | string) => void;
    'onUpdate:value'?: (date: DateType | string) => void;
    onPanelChange?: (date: DateType | string, mode: CalendarMode) => void;
    onSelect?: (date: DateType | string) => void;
    valueFormat?: string;
}
declare function generateCalendar<DateType, Props extends CalendarProps<DateType> = CalendarProps<DateType>>(generateConfig: GenerateConfig<DateType>): import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<Props extends import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}> ? import("vue").ExtractPropTypes<Props> : Props>, import("vue").ExtractDefaultPropTypes<Props>>;
export default generateCalendar;
