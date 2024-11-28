lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'fitImagesInViewport': true,
  'disableScrolling': true,
  'positionFromTop': 50
});


// Initialize top carousel
const topCarousel = new Swiper('.top-carousel', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  effect: 'slide',
  speed: 2500,
  autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
  breakpoints: {
    // Mobile - when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 8
    },
    // Large Mobile - when window width is >= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    // Tablet - when window width is >= 768px
    768: {
        slidesPerView: 3,
        spaceBetween: 12
    },
  }
});

// Initialize bottom carousel
const bottomCarousel = new Swiper('.bottom-carousel', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  effect: 'slide',
  speed: 2500,
  autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
      pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 8
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 12
    },
  }
});

// Add these event listeners for both carousels
const carousels = [topCarousel, bottomCarousel];

carousels.forEach(carousel => {
  carousel.el.addEventListener('mouseenter', () => {
    carousel.autoplay.stop();
  });

  carousel.el.addEventListener('mouseleave', () => {
    carousel.autoplay.start();
  });
});
