/**
 * @file vue-awesome-swiper
 * @module constants
 * @author Surmon <https://github.com/surmon-china>
 */
import { CommonEvent } from 'swiper';
export declare enum CoreNames {
    SwiperComponent = "Swiper",
    SwiperSlideComponent = "SwiperSlide",
    SwiperDirective = "swiper",
    SwiperInstance = "$swiper"
}
export declare const DEFAULT_CLASSES: Readonly<{
    containerClass: string;
    wrapperClass: string;
    slideClass: string;
}>;
export declare type SwiperClassKey = keyof typeof DEFAULT_CLASSES;
export declare enum ComponentEvents {
    Ready = "ready",
    ClickSlide = "clickSlide"
}
export declare enum ComponentPropNames {
    AutoUpdate = "autoUpdate",
    AutoDestroy = "autoDestroy",
    DeleteInstanceOnDestroy = "deleteInstanceOnDestroy",
    CleanupStylesOnDestroy = "cleanupStylesOnDestroy"
}
export declare const SWIPER_EVENTS: CommonEvent[];
