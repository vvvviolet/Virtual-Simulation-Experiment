import type { ExtractPropTypes, PropType } from 'vue';
export declare type SwipeDirection = 'left' | 'down' | 'right' | 'up' | string;
export declare type LazyLoadTypes = 'ondemand' | 'progressive';
export declare type CarouselEffect = 'scrollx' | 'fade';
export declare type DotPosition = 'top' | 'bottom' | 'left' | 'right';
export interface CarouselRef {
    goTo: (slide: number, dontAnimate?: boolean) => void;
    next: () => void;
    prev: () => void;
    autoplay: (palyType?: 'update' | 'leave' | 'blur') => void;
    innerSlider: any;
}
export declare const carouselProps: () => {
    effect: PropType<CarouselEffect>;
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: any;
    };
    autoplay: {
        type: BooleanConstructor;
        default: any;
    };
    easing: StringConstructor;
    beforeChange: PropType<(currentSlide: number, nextSlide: number) => void>;
    afterChange: PropType<(currentSlide: number) => void>;
    prefixCls: StringConstructor;
    accessibility: {
        type: BooleanConstructor;
        default: any;
    };
    nextArrow: import("vue-types").VueTypeValidableDef<any>;
    prevArrow: import("vue-types").VueTypeValidableDef<any>;
    pauseOnHover: {
        type: BooleanConstructor;
        default: any;
    };
    adaptiveHeight: {
        type: BooleanConstructor;
        default: any;
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplaySpeed: NumberConstructor;
    centerMode: {
        type: BooleanConstructor;
        default: any;
    };
    centerPadding: StringConstructor;
    cssEase: StringConstructor;
    dotsClass: StringConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        default: any;
    };
    focusOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    infinite: {
        type: BooleanConstructor;
        default: any;
    };
    initialSlide: NumberConstructor;
    lazyLoad: PropType<LazyLoadTypes>;
    rtl: {
        type: BooleanConstructor;
        default: any;
    };
    slide: StringConstructor;
    slidesToShow: NumberConstructor;
    slidesToScroll: NumberConstructor;
    speed: NumberConstructor;
    swipe: {
        type: BooleanConstructor;
        default: any;
    };
    swipeToSlide: {
        type: BooleanConstructor;
        default: any;
    };
    swipeEvent: PropType<(swipeDirection: SwipeDirection) => void>;
    touchMove: {
        type: BooleanConstructor;
        default: any;
    };
    touchThreshold: NumberConstructor;
    variableWidth: {
        type: BooleanConstructor;
        default: any;
    };
    useCSS: {
        type: BooleanConstructor;
        default: any;
    };
    slickGoTo: NumberConstructor;
    responsive: ArrayConstructor;
    dotPosition: {
        type: PropType<DotPosition>;
        default: any;
    };
    verticalSwiping: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CarouselProps = Partial<ExtractPropTypes<ReturnType<typeof carouselProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            infinite: boolean;
            rtl: boolean;
            vertical: boolean;
            draggable: boolean;
            fade: boolean;
            dots: boolean;
            autoplay: boolean;
            accessibility: boolean;
            pauseOnHover: boolean;
            adaptiveHeight: boolean;
            arrows: boolean;
            centerMode: boolean;
            focusOnSelect: boolean;
            swipe: boolean;
            swipeToSlide: boolean;
            touchMove: boolean;
            variableWidth: boolean;
            useCSS: boolean;
            dotPosition: DotPosition;
            verticalSwiping: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            effect: PropType<CarouselEffect>;
            dots: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: any;
            };
            autoplay: {
                type: BooleanConstructor;
                default: any;
            };
            easing: StringConstructor;
            beforeChange: PropType<(currentSlide: number, nextSlide: number) => void>;
            afterChange: PropType<(currentSlide: number) => void>;
            prefixCls: StringConstructor;
            accessibility: {
                type: BooleanConstructor;
                default: any;
            };
            nextArrow: import("vue-types").VueTypeValidableDef<any>;
            prevArrow: import("vue-types").VueTypeValidableDef<any>;
            pauseOnHover: {
                type: BooleanConstructor;
                default: any;
            };
            adaptiveHeight: {
                type: BooleanConstructor;
                default: any;
            };
            arrows: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoplaySpeed: NumberConstructor;
            centerMode: {
                type: BooleanConstructor;
                default: any;
            };
            centerPadding: StringConstructor;
            cssEase: StringConstructor;
            dotsClass: StringConstructor;
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fade: {
                type: BooleanConstructor;
                default: any;
            };
            focusOnSelect: {
                type: BooleanConstructor;
                default: any;
            };
            infinite: {
                type: BooleanConstructor;
                default: any;
            };
            initialSlide: NumberConstructor;
            lazyLoad: PropType<LazyLoadTypes>;
            rtl: {
                type: BooleanConstructor;
                default: any;
            };
            slide: StringConstructor;
            slidesToShow: NumberConstructor;
            slidesToScroll: NumberConstructor;
            speed: NumberConstructor;
            swipe: {
                type: BooleanConstructor;
                default: any;
            };
            swipeToSlide: {
                type: BooleanConstructor;
                default: any;
            };
            swipeEvent: PropType<(swipeDirection: string) => void>;
            touchMove: {
                type: BooleanConstructor;
                default: any;
            };
            touchThreshold: NumberConstructor;
            variableWidth: {
                type: BooleanConstructor;
                default: any;
            };
            useCSS: {
                type: BooleanConstructor;
                default: any;
            };
            slickGoTo: NumberConstructor;
            responsive: ArrayConstructor;
            dotPosition: {
                type: PropType<DotPosition>;
                default: any;
            };
            verticalSwiping: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "infinite" | "rtl" | "vertical" | "draggable" | "fade" | "dots" | "autoplay" | "accessibility" | "pauseOnHover" | "adaptiveHeight" | "arrows" | "centerMode" | "focusOnSelect" | "swipe" | "swipeToSlide" | "touchMove" | "variableWidth" | "useCSS" | "dotPosition" | "verticalSwiping">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            effect: PropType<CarouselEffect>;
            dots: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: any;
            };
            autoplay: {
                type: BooleanConstructor;
                default: any;
            };
            easing: StringConstructor;
            beforeChange: PropType<(currentSlide: number, nextSlide: number) => void>;
            afterChange: PropType<(currentSlide: number) => void>;
            prefixCls: StringConstructor;
            accessibility: {
                type: BooleanConstructor;
                default: any;
            };
            nextArrow: import("vue-types").VueTypeValidableDef<any>;
            prevArrow: import("vue-types").VueTypeValidableDef<any>;
            pauseOnHover: {
                type: BooleanConstructor;
                default: any;
            };
            adaptiveHeight: {
                type: BooleanConstructor;
                default: any;
            };
            arrows: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoplaySpeed: NumberConstructor;
            centerMode: {
                type: BooleanConstructor;
                default: any;
            };
            centerPadding: StringConstructor;
            cssEase: StringConstructor;
            dotsClass: StringConstructor;
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fade: {
                type: BooleanConstructor;
                default: any;
            };
            focusOnSelect: {
                type: BooleanConstructor;
                default: any;
            };
            infinite: {
                type: BooleanConstructor;
                default: any;
            };
            initialSlide: NumberConstructor;
            lazyLoad: PropType<LazyLoadTypes>;
            rtl: {
                type: BooleanConstructor;
                default: any;
            };
            slide: StringConstructor;
            slidesToShow: NumberConstructor;
            slidesToScroll: NumberConstructor;
            speed: NumberConstructor;
            swipe: {
                type: BooleanConstructor;
                default: any;
            };
            swipeToSlide: {
                type: BooleanConstructor;
                default: any;
            };
            swipeEvent: PropType<(swipeDirection: string) => void>;
            touchMove: {
                type: BooleanConstructor;
                default: any;
            };
            touchThreshold: NumberConstructor;
            variableWidth: {
                type: BooleanConstructor;
                default: any;
            };
            useCSS: {
                type: BooleanConstructor;
                default: any;
            };
            slickGoTo: NumberConstructor;
            responsive: ArrayConstructor;
            dotPosition: {
                type: PropType<DotPosition>;
                default: any;
            };
            verticalSwiping: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            infinite: boolean;
            rtl: boolean;
            vertical: boolean;
            draggable: boolean;
            fade: boolean;
            dots: boolean;
            autoplay: boolean;
            accessibility: boolean;
            pauseOnHover: boolean;
            adaptiveHeight: boolean;
            arrows: boolean;
            centerMode: boolean;
            focusOnSelect: boolean;
            swipe: boolean;
            swipeToSlide: boolean;
            touchMove: boolean;
            variableWidth: boolean;
            useCSS: boolean;
            dotPosition: DotPosition;
            verticalSwiping: boolean;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        effect: PropType<CarouselEffect>;
        dots: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: any;
        };
        autoplay: {
            type: BooleanConstructor;
            default: any;
        };
        easing: StringConstructor;
        beforeChange: PropType<(currentSlide: number, nextSlide: number) => void>;
        afterChange: PropType<(currentSlide: number) => void>;
        prefixCls: StringConstructor;
        accessibility: {
            type: BooleanConstructor;
            default: any;
        };
        nextArrow: import("vue-types").VueTypeValidableDef<any>;
        prevArrow: import("vue-types").VueTypeValidableDef<any>;
        pauseOnHover: {
            type: BooleanConstructor;
            default: any;
        };
        adaptiveHeight: {
            type: BooleanConstructor;
            default: any;
        };
        arrows: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoplaySpeed: NumberConstructor;
        centerMode: {
            type: BooleanConstructor;
            default: any;
        };
        centerPadding: StringConstructor;
        cssEase: StringConstructor;
        dotsClass: StringConstructor;
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        fade: {
            type: BooleanConstructor;
            default: any;
        };
        focusOnSelect: {
            type: BooleanConstructor;
            default: any;
        };
        infinite: {
            type: BooleanConstructor;
            default: any;
        };
        initialSlide: NumberConstructor;
        lazyLoad: PropType<LazyLoadTypes>;
        rtl: {
            type: BooleanConstructor;
            default: any;
        };
        slide: StringConstructor;
        slidesToShow: NumberConstructor;
        slidesToScroll: NumberConstructor;
        speed: NumberConstructor;
        swipe: {
            type: BooleanConstructor;
            default: any;
        };
        swipeToSlide: {
            type: BooleanConstructor;
            default: any;
        };
        swipeEvent: PropType<(swipeDirection: string) => void>;
        touchMove: {
            type: BooleanConstructor;
            default: any;
        };
        touchThreshold: NumberConstructor;
        variableWidth: {
            type: BooleanConstructor;
            default: any;
        };
        useCSS: {
            type: BooleanConstructor;
            default: any;
        };
        slickGoTo: NumberConstructor;
        responsive: ArrayConstructor;
        dotPosition: {
            type: PropType<DotPosition>;
            default: any;
        };
        verticalSwiping: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    effect: PropType<CarouselEffect>;
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: any;
    };
    autoplay: {
        type: BooleanConstructor;
        default: any;
    };
    easing: StringConstructor;
    beforeChange: PropType<(currentSlide: number, nextSlide: number) => void>;
    afterChange: PropType<(currentSlide: number) => void>;
    prefixCls: StringConstructor;
    accessibility: {
        type: BooleanConstructor;
        default: any;
    };
    nextArrow: import("vue-types").VueTypeValidableDef<any>;
    prevArrow: import("vue-types").VueTypeValidableDef<any>;
    pauseOnHover: {
        type: BooleanConstructor;
        default: any;
    };
    adaptiveHeight: {
        type: BooleanConstructor;
        default: any;
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplaySpeed: NumberConstructor;
    centerMode: {
        type: BooleanConstructor;
        default: any;
    };
    centerPadding: StringConstructor;
    cssEase: StringConstructor;
    dotsClass: StringConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        default: any;
    };
    focusOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    infinite: {
        type: BooleanConstructor;
        default: any;
    };
    initialSlide: NumberConstructor;
    lazyLoad: PropType<LazyLoadTypes>;
    rtl: {
        type: BooleanConstructor;
        default: any;
    };
    slide: StringConstructor;
    slidesToShow: NumberConstructor;
    slidesToScroll: NumberConstructor;
    speed: NumberConstructor;
    swipe: {
        type: BooleanConstructor;
        default: any;
    };
    swipeToSlide: {
        type: BooleanConstructor;
        default: any;
    };
    swipeEvent: PropType<(swipeDirection: string) => void>;
    touchMove: {
        type: BooleanConstructor;
        default: any;
    };
    touchThreshold: NumberConstructor;
    variableWidth: {
        type: BooleanConstructor;
        default: any;
    };
    useCSS: {
        type: BooleanConstructor;
        default: any;
    };
    slickGoTo: NumberConstructor;
    responsive: ArrayConstructor;
    dotPosition: {
        type: PropType<DotPosition>;
        default: any;
    };
    verticalSwiping: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    infinite: boolean;
    rtl: boolean;
    vertical: boolean;
    draggable: boolean;
    fade: boolean;
    dots: boolean;
    autoplay: boolean;
    accessibility: boolean;
    pauseOnHover: boolean;
    adaptiveHeight: boolean;
    arrows: boolean;
    centerMode: boolean;
    focusOnSelect: boolean;
    swipe: boolean;
    swipeToSlide: boolean;
    touchMove: boolean;
    variableWidth: boolean;
    useCSS: boolean;
    dotPosition: DotPosition;
    verticalSwiping: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
