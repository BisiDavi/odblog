$(document).ready(function () {
  $('.videoSlide').slick({
    prevArrow: $('.prevArrowLeft'),
    nextArrow: $('.nextArrowRight'),
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true
  });
});
