import type { RequiredMark } from '../../form/Form';
import type { ComputedRef, UnwrapRef } from 'vue';
import type { ConfigProviderProps, CSPConfig, Direction, SizeType } from '../../config-provider';
import type { VueNode } from '../type';
import type { ValidateMessages } from '../../form/interface';
declare const _default: (name: string, props: Record<any, any>) => {
    configProvider: UnwrapRef<ConfigProviderProps>;
    prefixCls: ComputedRef<string>;
    rootPrefixCls: ComputedRef<string>;
    direction: ComputedRef<Direction>;
    size: ComputedRef<SizeType>;
    getTargetContainer: ComputedRef<() => HTMLElement>;
    space: ComputedRef<{
        size: SizeType | number;
    }>;
    pageHeader: ComputedRef<{
        ghost: boolean;
    }>;
    form?: ComputedRef<{
        requiredMark?: RequiredMark;
        colon?: boolean;
        validateMessages?: ValidateMessages;
    }>;
    autoInsertSpaceInButton: ComputedRef<boolean>;
    renderEmpty?: ComputedRef<(componentName?: string) => VueNode>;
    virtual: ComputedRef<boolean>;
    dropdownMatchSelectWidth: ComputedRef<boolean | number>;
    getPopupContainer: ComputedRef<ConfigProviderProps['getPopupContainer']>;
    getPrefixCls: ConfigProviderProps['getPrefixCls'];
    autocomplete: ComputedRef<string>;
    csp: ComputedRef<CSPConfig>;
};
export default _default;
