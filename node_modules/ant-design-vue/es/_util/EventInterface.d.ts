export declare type FocusEventHandler = (e: FocusEvent) => void;
export declare type MouseEventHandler = (e: MouseEvent) => void;
export declare type KeyboardEventHandler = (e: KeyboardEvent) => void;
export declare type CompositionEventHandler = (e: CompositionEvent) => void;
export declare type ClipboardEventHandler = (e: ClipboardEvent) => void;
export declare type ChangeEventHandler = (e: ChangeEvent) => void;
export declare type WheelEventHandler = (e: WheelEvent) => void;
export declare type ChangeEvent = Event & {
    target: {
        value?: string | undefined;
    };
};
export declare type CheckboxChangeEvent = Event & {
    target: {
        checked?: boolean;
    };
};
export declare type EventHandler = (...args: any[]) => void;
