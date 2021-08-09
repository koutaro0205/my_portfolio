AOS.init()

$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('header>nav').fadeToggle(500);
  $('body').toggleClass('noscroll');
});

$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});


