//init testimoral slider
$('.pure-slider').slick({
  autoplay: true,
    dots: true,
  arrows: false,
  speed: 660,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  fade: true,
  pauseOnHover: false,
  customPaging : function(slider, i) {
    var title = $(slider.$slides[i]).data('title');
    return '<img class="pager__item" src="'+title+'">';
  }
});