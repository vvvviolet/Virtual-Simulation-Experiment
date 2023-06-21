import { createPinia } from 'pinia';
export { storeToRefs } from 'pinia';
export * from './account';
export * from './menu';
export * from './experiment';
export * from './setting';

const pinia = createPinia();

export default pinia;
