/**
 * @file vue-awesome-swiper
 * @module directive
 * @author Surmon <https://github.com/surmon-china>
 */
import { DirectiveOptions } from 'vue';
import Swiper, { SwiperOptions } from 'swiper';
export default function getDirective(SwiperClass: typeof Swiper, globalOptions?: SwiperOptions): DirectiveOptions;
