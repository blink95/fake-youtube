$(document).ready(function() {
    /*$("#searchYT").css("color","blue");// all custom jQuery will go here*/
    var focus =0;
    var hover = 0;
    var input = 0;
    function checkinput(){
      var value=$.trim($("#nav-input").val());
      if(value.length>0)
      {
        input = 1;
       //do some stuffs.
      }
      else{
        input =0;
      }
    }

    $("#searchYT,#forVideos,#placeholder-search").css("pointer-events","none");
    $("#nav-input").keyup(function(){
      checkinput();
      if (input){
        if (hover == 0){
          $(this).css("color","grey");
        }
        else{
          $(this).css("color","white");
        }
        $("#searchYT").css("color","rgba(0, 0, 0, 0)");
        $("#placeholder-search").css("color","rgba(0,0,0,0)");
      }
      else{
        $("#searchYT").css("color","white");
        $("#placeholder-search").css("padding-left","102px");
        $("#placeholder-search").css("color","white");
      }
    });

    $("#nav-input").hover(function(){
      hover = 1;
      $(this).css("background-color","rgba(255, 43, 43, .50)");
      if (input){
        $(this).css("color","white");
        $("#searchYT").css("color","rgba(0,0,0,0)");
        $("#forVideos").css("color","rgba(0,0,0,0)");
        $("#placeholder-search").css("color","rgba(0,0,0,0)");
      }
      else{
        switch(focus){
          case 0:
            $("#placeholder-search").css("color","white");
            $("#placeholder-search").css("padding-left","152px");
            $("#forVideos").css("color","white");
            break;
          case 1:
            $("#placeholder-search").css("color","white");
            $("#placeholder-search").css("padding-left","102px");
            $("#searchYT").css("color","white");
            break;
        }
      }
      //$("#searchYT").css("color","rgba(0,0,0,0)");
    },function(){
      hover = 0;
      $(this).css("background-color","#FFFA");
      $("#searchYT").css("color","rgba(0,0,0,0)");
      $("#forVideos").css("color","rgba(0,0,0,0)");
      if (input){
        $("#placeholder-search").css("color","rgba(0,0,0,0)");
        $(this).css("color","grey");
      }
      else{
        $("#placeholder-search").css("color","grey");
        $("#placeholder-search").css("padding-left","0px");
      }
    });

    $("#nav-input").focusin(function(){
      focus =1;
      if (!input){
        $("#placeholder-search").css("padding-left","102px");
        $("#searchYT").css("color","white");
        $("#forVideos").css("color","rgba(0,0,0,0)");
      }
      /*if (hover == 0){
        $("#searchYT").css("color","rgba(0,0,0,0)");
      }*/
    });

    $("#nav-input").focusout(function(){
      if (input){
        $("#placeholder-search").css("color","rgba(0,0,0,0)");
      }
      else{
        $("#searchYT").css("color","rgba(0,0,0,0)");
        $("#placeholder-search").css("color","grey");
        $("#placeholder-search").css("padding-left","0px");
        hover,focus = 0;
      }

    });
});
