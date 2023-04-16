import type { CSSProperties, FunctionalComponent } from 'vue';
import type { VueNode } from '../_util/type';
export interface EmptyProps {
    prefixCls?: string;
    class?: any;
    style?: string | CSSProperties;
    imageStyle?: CSSProperties;
    image?: VueNode | null;
    description?: VueNode;
}
interface EmptyType extends FunctionalComponent<EmptyProps> {
    displayName: string;
    PRESENTED_IMAGE_DEFAULT: VueNode;
    PRESENTED_IMAGE_SIMPLE: VueNode;
}
declare const _default: EmptyType & import("@vue/runtime-core").Plugin;
export default _default;
