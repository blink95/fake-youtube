$(document).ready(function(){
  $(".home,.trending,.subscriptions,.history,.watch-later,.liked-videos").hover(function(){
    $(this).css("background-color","rgba(181, 181, 181, 0.8)");


  },function(){
    $(this).css("background-color","rgba(181, 181, 181, 0.00)");
  });



});
