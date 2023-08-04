const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      if (index < 2) {
        return '<span class="' + className + '"></span>';
      }
    },
  },
  slidesPerView: 3,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

function updateSwiperParams() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 800) {
    swiper.params.slidesPerView = 2;
    swiper.params.slidesPerGroup = 1;
    swiper.update();
  } else {
    swiper.params.slidesPerView = 3;
    swiper.params.slidesPerGroup = 1;
    swiper.update();
  }
}

updateSwiperParams();

window.addEventListener('resize', () => {
  updateSwiperParams();
});
