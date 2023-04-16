/**
 * Removed:
 *  - getCalendarContainer: use `getPopupContainer` instead
 *  - onOk
 *
 * New Feature:
 *  - picker
 *  - allowEmpty
 *  - selectable
 *
 * Tips: Should add faq about `datetime` mode with `defaultValue`
 */
import type { PickerPanelBaseProps, PickerPanelDateProps, PickerPanelTimeProps } from './PickerPanel';
import type { CustomFormat, PickerMode } from './interface';
import type { CSSProperties, HTMLAttributes } from 'vue';
import type { FocusEventHandler, MouseEventHandler } from '../_util/EventInterface';
import type { VueNode } from '../_util/type';
import type { AlignType } from '../vc-align/interface';
import type { SharedTimeProps } from './panels/TimePanel';
export declare type PickerRefConfig = {
    focus: () => void;
    blur: () => void;
};
export declare type PickerSharedProps<DateType> = {
    dropdownClassName?: string;
    dropdownAlign?: AlignType;
    popupStyle?: CSSProperties;
    transitionName?: string;
    placeholder?: string;
    allowClear?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    tabindex?: number;
    open?: boolean;
    defaultOpen?: boolean;
    /** Make input readOnly to avoid popup keyboard in mobile */
    inputReadOnly?: boolean;
    id?: string;
    format?: string | CustomFormat<DateType> | (string | CustomFormat<DateType>)[];
    suffixIcon?: VueNode;
    clearIcon?: VueNode;
    prevIcon?: VueNode;
    nextIcon?: VueNode;
    superPrevIcon?: VueNode;
    superNextIcon?: VueNode;
    getPopupContainer?: (node: HTMLElement) => HTMLElement;
    panelRender?: (originPanel: VueNode) => VueNode;
    inputRender?: (props: HTMLAttributes) => VueNode;
    onChange?: (value: DateType | null, dateString: string) => void;
    onOpenChange?: (open: boolean) => void;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    onMousedown?: MouseEventHandler;
    onMouseup?: MouseEventHandler;
    onMouseenter?: MouseEventHandler;
    onMouseleave?: MouseEventHandler;
    onClick?: MouseEventHandler;
    onContextmenu?: MouseEventHandler;
    onKeydown?: (event: KeyboardEvent, preventDefault: () => void) => void;
    role?: string;
    name?: string;
    autocomplete?: string;
    direction?: 'ltr' | 'rtl';
    showToday?: boolean;
    showTime?: boolean | SharedTimeProps<DateType>;
};
declare type OmitPanelProps<Props> = Omit<Props, 'onChange' | 'hideHeader' | 'pickerValue' | 'onPickerValueChange'>;
export declare type PickerBaseProps<DateType> = {} & PickerSharedProps<DateType> & OmitPanelProps<PickerPanelBaseProps<DateType>>;
export declare type PickerDateProps<DateType> = {} & PickerSharedProps<DateType> & OmitPanelProps<PickerPanelDateProps<DateType>>;
export declare type PickerTimeProps<DateType> = {
    picker: 'time';
    /**
     * @deprecated Please use `defaultValue` directly instead
     * since `defaultOpenValue` will confuse user of current value status
     */
    defaultOpenValue?: DateType;
} & PickerSharedProps<DateType> & Omit<OmitPanelProps<PickerPanelTimeProps<DateType>>, 'format'>;
export declare type PickerProps<DateType> = PickerBaseProps<DateType> | PickerDateProps<DateType> | PickerTimeProps<DateType>;
declare type OmitType<DateType> = Omit<PickerBaseProps<DateType>, 'picker'> & Omit<PickerDateProps<DateType>, 'picker'> & Omit<PickerTimeProps<DateType>, 'picker'>;
declare type MergedPickerProps<DateType> = {
    picker?: PickerMode;
} & OmitType<DateType>;
declare const _default: import("vue").DefineComponent<MergedPickerProps<any>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<MergedPickerProps<any>>, {
    value?: any;
    defaultValue?: any;
    defaultPickerValue?: any;
    defaultOpenValue?: any;
}>;
export default _default;
