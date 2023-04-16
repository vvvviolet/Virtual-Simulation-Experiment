import type { AntTreeNodeProps } from '../Tree';
export interface SwitcherIconProps extends AntTreeNodeProps {
    expanded: boolean;
    loading: boolean;
}
export default function renderSwitcherIcon(prefixCls: string, switcherIcon: any, showLine: boolean | {
    showLeafIcon: boolean;
} | undefined, props: SwitcherIconProps): any;
