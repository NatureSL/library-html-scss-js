export const SwiperSlider = () => {
    //sli
    var swiper = new Swiper(".about-section__slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
          loop: true,
        },
        1024: {
          loop: false,
  
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  };
  