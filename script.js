$(document).ready(function() {
    /*$("#searchYT").css("color","blue");// all custom jQuery will go here*/
    var focus =0;
    var hover = 0;
    $("#nav-input").keyup(function(){
      $("#searchYT").css("color","rgba(0, 0, 0, 0)");
    });

    $("#nav-input").hover(function(){
      hover = 1;
      switch(focus){
        case 0:
          $(this).css("background-color","rgba(255, 43, 43, .72)");
          $("#forVideos").css("color","white");
          break;
        case 1:
          $(this).css("background-color","rgba(255,43,43,.72)");
          $("#searchYT").css("color","white");
          break;
      }
      //$("#searchYT").css("color","rgba(0,0,0,0)");
    },function(){
      hover = 0;
      $(this).css("background-color","#FFFA");
      $("#forVideos").css("color","rgba(0,0,0,0)");
      $("#searchYT").css("color","rgba(0,0,0,0)");
    });

    $("#nav-input").focusin(function(){
      focus =1;
      $("#searchYT").css("color","white");
      $("#forVideos").css("color","rgba(0,0,0,0)");
      /*if (hover == 0){
        $("#searchYT").css("color","rgba(0,0,0,0)");
      }*/
    });

    $("#nav-input").focusout(function(){
      hover,focus = 0;
    });
});
