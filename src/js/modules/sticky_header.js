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
$('.go_bottom').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
  if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки

    var sliderOffset = $(scroll_el).offset().top;

    if ($(window).width() < 960) {
      var scrollHeight = sliderOffset - 160;
    } else {
      var scrollHeight = sliderOffset - 90; // анимируем скроолинг к элементу scroll_el
    }
    
    $('html, body').animate({ scrollTop: scrollHeight}, 1000);
  }
  return false; // выключаем стандартное действие
});