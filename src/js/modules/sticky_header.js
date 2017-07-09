$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

//remove  notification
$('.top-bar .close').click( function () {
  $('.top-bar').slideUp(200);
})

//scroll to second slide
$('.go_bottom').click( function(){
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length != 0) {

    var sliderOffset = $(scroll_el).offset().top;

    if ($(window).width() < 960) {
      var scrollHeight = sliderOffset - 160;
    } else {
      var scrollHeight = sliderOffset - 90;
    }
    
    $('html, body').animate({ scrollTop: scrollHeight}, 1000);
  }
  return false;
});