import Splide from '@splidejs/splide';

const splide = new Splide('.splide', {
  type: 'fade',
  pagination: false,
  classes: {
    arrows: 'splide__arrows slide__navigate',
    arrow: 'splide__arrow ',
    prev: 'splide__arrow--prev slide-previous',
    next: 'splide__arrow--next slide-next',
  },
});

splide.mount();

window.addEventListener('shopify:inspector:activate', () => {
  console.log('hellox');
});
