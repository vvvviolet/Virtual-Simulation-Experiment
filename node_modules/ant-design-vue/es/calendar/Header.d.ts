import type { CalendarMode } from './generateCalendar';
import type { Locale } from '../vc-picker/interface';
import type { GenerateConfig } from '../vc-picker/generate';
export interface CalendarHeaderProps<DateType> {
    prefixCls: string;
    value: DateType;
    validRange?: [DateType, DateType];
    generateConfig: GenerateConfig<DateType>;
    locale: Locale;
    mode: CalendarMode;
    fullscreen: boolean;
    onChange: (date: DateType) => void;
    onModeChange: (mode: CalendarMode) => void;
}
declare const _default: import("vue").DefineComponent<CalendarHeaderProps<any>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<CalendarHeaderProps<any>>, {
    value: any;
}>;
export default _default;
