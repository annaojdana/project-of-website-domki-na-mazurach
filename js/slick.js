$(document).ready(function () {
  $(".sliders").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: true,
    mobileFirst: true,
    variableWidth: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
responsive: [
    {
      breakpoint: 1440,
      settings: "unslick",
    },
  ]
  });
});