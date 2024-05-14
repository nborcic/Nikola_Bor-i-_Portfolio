$(document).ready(function () {
  var owl = $('.owl-carousel').owlCarousel({
    items: 2, // Adjust this according to your needs
    loop: true,
    nav: true, // Disable default navigation buttons
    dots: false, // Enable dots if needed
    autoplay: true,
    autoplayTimeout: 3000, // Adjust the autoplay timeout
    autoplayHoverPause: true
  });

  $('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  $('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
});

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

