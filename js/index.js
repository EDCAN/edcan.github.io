$(function(){
  var unit = new Array()
  unit =  ['an','gz','db','px','lh']
  var unitMargin = 0;
  var projectMargin = 0;

  var i = 2015;

  var unitCount = 0;
  var projectCount = 0;

  $(".youtube").click(function(){
    location.href ="https://www.youtube.com/channel/UCt-s5ERAPuDsxvDhe5U5Ujw"
  })

  $(".facebook").click(function(){
    location.href="https://www.facebook.com/edcancircle/?fref=ts"
  })

  $(".play").click(function(){
    location.href="https://play.google.com/store/apps/dev?id=4808147375171715879&hl=ko"
  })

  $(".github").click(function(){
    location.href="https://github.com/EDCAN"
  })

  $(".unit_button").click(function(){
    location.href="unit"
  })

  $("#left-angle").click(function(){
    i = i-1;
    $("#calender-year").text(i);
    $(".calender-list").html("")
  })

  $("#right-angle").click(function(){
    i = i+1;
    $("#calender-year").text(i);
    $(".calender-list").html("")
  })

  $(".rightBtn").click(function(){
      if(window.innerWidth < 600){
        if(unitCount > 3){

        }
        else{
          unitMargin += window.innerWidth*-1;
          unitCount++;
          $(".lh").animate({"margin-left":unitMargin},1000)
        }
      }
      else if(window.innerWidth > 1200){
        if(unitCount > 1){

        }
        else{
          unitMargin += window.innerWidth/4*-1;
          unitCount++;
          $(".lh").animate({"margin-left":unitMargin},1000)
        }
      }
      else{
        if(unitCount > 4){

        }
        else{
          unitMargin += window.innerWidth/4*-1;
          unitCount++;
          $(".lh").animate({"margin-left":unitMargin},1000)
        }
      }

  })

  $(".leftBtn").click(function(){
    if(window.innerWidth < 600){

      if(unitCount == 0){

      }
      else{
        unitMargin += window.innerWidth;
        unitCount--;
        $(".lh").animate({"margin-left":unitMargin},1000)
      }
    }
    else{
      if(unitCount == 0){

      }
      else{
        unitMargin += window.innerWidth/4;
        unitCount--;
        $(".lh").animate({"margin-left":unitMargin},1000)
      }
    }
  })

  $(".rightBtn2").click(function(){
    if(window.innerWidth < 600){
      if(projectCount > 3){

      }
      else{
        projectMargin += window.innerWidth/1*-1;
        projectCount++;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
    else if(window.innerWidth > 1200){
      if(projectCount > 1){

      }
      else{
        projectMargin += window.innerWidth/4*-1;
        projectCount++;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
    else{
      if(projectCount > 4){

      }
      else{
        projectMargin += window.innerWidth/4*-1;
        projectCount++;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
  })

  $(".leftBtn2").click(function(){
    if(window.innerWidth < 600){

      if(projectCount == 0){

      }
      else{
        projectMargin += window.innerWidth/1;
        projectCount--;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
    else{
      if(projectCount == 0){

      }
      else{
        projectMargin += window.innerWidth/4;
        projectCount--;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
  })

  $("#downButton").click(function(){
      var height = window.innerHeight;
    $("body").animate({
      "scrollTop":height
    },500)
  })

})
