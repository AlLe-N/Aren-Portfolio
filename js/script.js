$('.menu-btn').on('click',function(){
  $('.menu-content').toggleClass('open');
});
$('.menu-list').on('click',function(){
  $('.menu-content').removeClass('open');
});