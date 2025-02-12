document.addEventListener('DOMContentLoaded', function () {
  const featuresRedmiSwiper = new Swiper('.features-redmi-note14pro__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  });

  const zoomRedmiSwiper = new Swiper('.zoom-redmi-note14pro__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: '.zoom-redmi-note14pro-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const aitoolsRedmiSwiper = new Swiper('.aitools-redmi-note14pro__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const colorsRedmiSwiper = new Swiper('.colors-redmi-note14pro__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: '.colors-redmi-note14pro-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});
