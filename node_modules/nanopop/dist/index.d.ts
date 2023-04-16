type Direction = 'top' | 'left' | 'bottom' | 'right';
type Alignment = 'start' | 'middle' | 'end';
export type VariantFlipOrder = {
    start: string;
    middle: string;
    end: string;
};
export type PositionFlipOrder = {
    top: string;
    right: string;
    bottom: string;
    left: string;
};
export type NanoPopPosition = `${Direction}-${Alignment}` | Direction;
export type NanoPopOptions = {
    container: DOMRect;
    position: NanoPopPosition;
    variantFlipOrder: VariantFlipOrder;
    positionFlipOrder: PositionFlipOrder;
    margin: number;
    reference?: HTMLElement;
    popper?: HTMLElement;
    arrow?: HTMLElement;
    padding?: number;
};
export type PositionMatch = 'ts' | 'tm' | 'te' | 'bs' | 'bm' | 'be' | 'ls' | 'lm' | 'le' | 'rs' | 'rm' | 're';
export interface NanoPop {
    update(updatedOptions?: Partial<NanoPopOptions>): PositionMatch | null;
}
export interface NanoPopConstructor {
    /**
     * @param reference Reference element
     * @param popper Actual popper element
     * @param options Optional options
     */
    (reference: HTMLElement, popper: HTMLElement, options?: Partial<NanoPopOptions>): NanoPop;
    /**
     * @param options Partial options which get merged with the current one
     */
    (options?: Partial<NanoPopOptions>): NanoPop;
}
export declare const version: string;
export declare const defaults: {
    variantFlipOrder: {
        start: string;
        middle: string;
        end: string;
    };
    positionFlipOrder: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    position: string;
    margin: number;
    padding: number;
};
/**
 * Repositions an element once using the provided options and elements.
 * @param reference Reference element
 * @param popper Popper element
 * @param opt Optional, additional options
 */
export declare const reposition: (reference: HTMLElement, popper: HTMLElement, opt?: Partial<NanoPopOptions>) => PositionMatch | null;
/**
 * Creates a stateful popper.
 * You can either...
 * ... pass an options object: createPopper(<options>)
 * ... pass both the reference and popper: create(<ref>, <el>, <?options>)
 * ... pass nothing, in this case you'll have to set at least both a reference and a popper in update.
 *
 * @param reference | options Reference element or options
 * @param popper Popper element
 * @param options Optional additional options
 */
export declare const createPopper: NanoPopConstructor;
export {};
