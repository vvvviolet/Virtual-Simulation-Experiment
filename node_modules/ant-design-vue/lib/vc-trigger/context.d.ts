import type { Ref } from 'vue';
export interface TriggerContextProps {
    setPortal: (val?: any) => void;
    popPortal: boolean;
}
export declare const useProviderTrigger: () => () => any;
export declare const useInjectTrigger: (tryPopPortal?: boolean) => {
    setPortal: () => void;
    popPortal: boolean;
};
export interface PortalContextProps {
    shouldRender: Ref<boolean>;
    inTriggerContext: boolean;
}
export declare const useProvidePortal: (instance: any, config?: {
    inTriggerContext: boolean;
}) => void;
export declare const useInjectPortal: () => {
    shouldRender: import("vue").ComputedRef<boolean>;
};
