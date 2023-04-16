import type { VueNode } from '../_util/type';
export interface RenderEmptyProps {
    componentName?: string;
}
declare function renderEmpty(componentName?: string): VueNode;
export declare type RenderEmptyHandler = typeof renderEmpty;
export default renderEmpty;
