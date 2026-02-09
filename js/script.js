

$(document).ready(function () {
  // website lang
  var bodyDir = $("body").css("direction");
  console.log(bodyDir);
  var dirAr;
  if (bodyDir == "rtl") {
    dirAr = true;
  } else {
    dirAr = false;
  }

  $(".hero-sec .cars-slider.owl-carousel").owlCarousel({
    nav: false,
    center: true,
    responsiveClass: true,
    margin: 16,
    loop: true,
    items: 1.2,
    dots: true,
    autoplay: true,
    animateOut: 'fadeOut',
    rtl: dirAr,
    responsive: {
      992: {
        items: 1.4
      },
    }
  });

  var swiper = new Swiper(".partners .swiper", {
    loop: true,
    speed: 3000,
    slidesPerView: 6,
    spaceBetween: 0,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      992: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 5
      },
      576: {
        slidesPerView: 3
      },
      0: {
        slidesPerView: 1.4,
        spaceBetween: 0,
      }
    }

  });

  $(".projects .owl-carousel").each(function () {
    const itemsCount = $(this).data("items");
    $(this).owlCarousel({
      nav: false,
      loop: true,
      autoplay: true,
      responsiveClass: true,
      // stagePadding: 120,
      items: 1,
      margin: 16,
      rtl: dirAr,
      responsive: {
        0: {
          // stagePadding: 20,
        },
        768: {
          // stagePadding: 60,
        },
        992: {
          // stagePadding: 80,
          items: itemsCount,
        }
      }
    });
  })

  $(".testimonials .owl-carousel").owlCarousel({
    nav: false,
    loop: true,
    autoplay: true,
    responsiveClass: true,
    // stagePadding: 40,
    margin: 16,
    rtl: dirAr,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $(".blogs .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    responsiveClass: true,
    margin: 16,
    // stagePadding: 40,
    rtl: dirAr,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // select2
  $('select').select2();

});
