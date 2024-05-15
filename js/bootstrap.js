$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
  $('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
  });
});

