import type { ComponentPublicInstance } from 'vue';
export declare type BindElement = HTMLElement | Window | null | undefined;
export declare function getTargetRect(target: BindElement): DOMRect;
export declare function getFixedTop(placeholderRect: DOMRect, targetRect: DOMRect, offsetTop: number): string;
export declare function getFixedBottom(placeholderRect: DOMRect, targetRect: DOMRect, offsetBottom: number): string;
interface ObserverEntity {
    target: HTMLElement | Window;
    affixList: ComponentPublicInstance<any>[];
    eventHandlers: {
        [eventName: string]: any;
    };
}
export declare function getObserverEntities(): ObserverEntity[];
export declare function addObserveTarget(target: HTMLElement | Window | null, affix: ComponentPublicInstance<any>): void;
export declare function removeObserveTarget(affix: ComponentPublicInstance<any>): void;
export {};
