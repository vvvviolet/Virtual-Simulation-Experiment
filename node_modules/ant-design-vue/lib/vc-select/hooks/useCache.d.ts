import type { Ref } from 'vue';
import type { RawValueType } from '../BaseSelect';
import type { DefaultOptionType, LabelInValueType } from '../Select';
declare const _default: (labeledValues: Ref<LabelInValueType[]>, valueOptions: Ref<Map<RawValueType, DefaultOptionType>>) => [Ref<LabelInValueType[]>, (val: RawValueType) => DefaultOptionType];
/**
 * Cache `value` related LabeledValue & options.
 */
export default _default;
