$(function(){
  var unit = new Array()
  unit =  ['an','gz','db','px','lh']
  var unitMargin = 0;
  var projectMargin = 0;
  var i = 2015;

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

  $(".URB").click(function(){

    if(window.innerWidth < 401){
      if(unitMargin - 370 < -1480){

      }
      else{
        unitMargin = unitMargin - 370;
        $(".lh").animate({"margin-left":unitMargin},1000)
      }
    }
    else{
      if(unitMargin - 420 < -1300){

      }
      else{
        unitMargin = unitMargin - 420;
        $(".lh").animate({"margin-left":unitMargin},1000)
      }
    }
  })

  $(".ULB").click(function(){
    if(window.innerWidth < 401){
      if(unitMargin + 370 >0)
      {

      }
      else{
        unitMargin = unitMargin + 370;
        $(".lh").animate({"margin-left":unitMargin},1000)
      }
    }
    else{
      if(unitMargin + 420 >0)
      {

      }
      else{
        unitMargin = unitMargin + 420;
        $(".lh").animate({"margin-left":unitMargin},1000)
      }
    }
  })

  $(".PRB").click(function(){

    if(window.innerWidth < 401){
      if(projectMargin - 400 < -1480){

      }
      else{
        projectMargin = projectMargin - 400;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
    else{
      if(projectMargin - 420 < -1300){

      }
      else{
        projectMargin = projectMargin - 420;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
  })

  $(".PLB").click(function(){
    if(window.innerWidth < 401){
      if(projectMargin + 430 >0)
      {

      }
      else{
        projectMargin =projectMargin + 430;
        $(".ts").animate({"margin-left":projectMargin},1000)
      }
    }
    else{
      if(projectMargin + 420 >0)
      {

      }
      else{
        projectMargin = projectMargin + 420;
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
