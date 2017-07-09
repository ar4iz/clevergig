/*// create underline
$('.thumb_slider').on('init', function(event, slick){
  $('.thumb-slider-dots .slick-dots').append( "<li class='underline'></li>" );
  $('.underline').css({'width': $(".thumb-slider-dots .slick-dots .slick-active").width(), 'left': 0});
});
*/
// init slider
$(".default_slider").slick({

  autoplay: false,
  dots: true,
  arrows: false,
  speed: 660,
  autoplaySpeed: 5000,
  pauseOnHover: false
});


