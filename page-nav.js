$(document).ready(function(){
  $(".left-button img, .right-button img").hover(function(){
    $(this).css("background-color","rgba(255, 43, 43, .50)");
  },function(){
    $(this).css("background-color","rgba(0,0,0,0)");
  });
  var v =".video";
  var newvcount=1;
  $(".right-button img").click(function(){

    $(this).parents().queue(function(next){
      $(this).siblings(".frame1").css("z-index","6");
      $(this).siblings(".frame1").css("background-color","lightgrey");
      $(this).siblings(".frame2").css("background-color","grey");
      $(this).siblings(".frame3").css("background-color","lightgrey");

      $(this).siblings(".frame1").css("top","70px");
      $(this).siblings(".frame1").css("left","230px");
      $(this).siblings(".frame1").css("height","90px");
      $(this).siblings(".frame1").css("width","135px");
      $(this).siblings(".frame1").attr('class', 'tempframe');

      $(this).siblings(".frame2").css("z-index","100");
      $(this).siblings(".frame2").css("top","50px");
      $(this).siblings(".frame2").css("left","145px");
      $(this).siblings(".frame2").css("height","100px");
      $(this).siblings(".frame2").css("width","150px");
      $(this).siblings(".frame2").attr('class', 'frame1');

      $(this).siblings(".frame3").css("z-index","5");
      $(this).siblings(".frame3").css("top","70px");
      $(this).siblings(".frame3").css("left","75px");
      $(this).siblings(".frame3").attr('class', 'frame2');

      $(this).siblings(".tempframe").attr('class', 'frame3');
      next();
    });

  });

  $(".left-button img").click(function(){
    $(this).parents().queue(function(next){
      $(this).siblings(".video-selects").find(v+newvcount).hide();
      $(this).siblings(".frame3").css("background-color","grey");
      $(this).siblings(".frame1").css("background-color","lightgrey");
      $(this).siblings(".frame2").css("background-color","lightgrey");
      $(this).siblings(".frame1").css("top","70px");
      $(this).siblings(".frame1").css("left","75px");
      $(this).siblings(".frame1").css("height","90px");
      $(this).siblings(".frame1").css("width","135px");
      $(this).siblings(".frame1").css("z-index","6");
      $(this).siblings(".frame1").attr('class', 'tempframe');

      $(this).siblings(".frame3").css("top","50px");
      $(this).siblings(".frame3").css("left","145px");
      $(this).siblings(".frame3").css("height","100px");
      $(this).siblings(".frame3").css("width","150px");
      $(this).siblings(".frame3").css("z-index","100");
      $(this).siblings(".frame3").attr('class', 'frame1');


      $(this).siblings(".frame2").css("top","70px");
      $(this).siblings(".frame2").css("left","230px");
      $(this).siblings(".frame2").css("z-index","5");
      $(this).siblings(".frame2").attr('class','frame3');
      $(this).siblings(".tempframe").attr('class', 'frame2');
      newvcount++;
      if (newvcount==5){
        newvcount = 1;
      }
      $(this).siblings(".video-selects").find(v+newvcount).show();
      next();
    });

  });
  //for frame2
  /*$(this).css("background-color","lightgrey");
  $(this).css("top","70px");
  $(this).css("left","230px");
  $(this).css("height","90px");
  $(this).css("width","135px");
  $(this).css("z-index","-1");
  $(this).attr('class', 'tempframe');*/

});
