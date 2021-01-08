let owl = $('.owl-carousel');

$(document).ready(function () {
  owl.owlCarousel({
    loop: true,
    margin: 25,
    dotsEach: true,
    items: 3
  });
});

$('.nextButton').click(function () {
  owl.trigger('next.owl.carousel');
});

$('.prevButton').click(function () {
  owl.trigger('prev.owl.carousel', [300]);
});
