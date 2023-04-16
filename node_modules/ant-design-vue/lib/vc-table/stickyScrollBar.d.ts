import type { Ref } from 'vue';
interface StickyScrollBarProps {
    scrollBodyRef: Ref<HTMLElement>;
    onScroll: (params: {
        scrollLeft?: number;
    }) => void;
    offsetScroll: number;
    container: HTMLElement | Window;
    scrollBodySizeInfo: {
        scrollWidth: number;
        clientWidth: number;
    };
}
declare const _default: import("vue").DefineComponent<StickyScrollBarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<StickyScrollBarProps>, {}>;
export default _default;
