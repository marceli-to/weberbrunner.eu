import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function initSlideshows() {
  const slideshowElements = document.querySelectorAll('[data-slideshow]');

  slideshowElements.forEach((element) => {
    new Swiper(element, {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      centeredSlides: false,
      direction: 'horizontal',
      speed: 800,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
}
