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

  $(".URB").click(function(){
      if(unitCount > 4){

      }
      else{
        unitMargin += window.innerWidth/4*-1;
        unitCount++;
        $(".lh").animate({"margin-left":unitMargin},1000)
      }

  })

  $(".ULB").click(function(){
    if(unitCount == 0){

    }
    else{
      unitMargin += window.innerWidth/4;
      unitCount--;
      $(".lh").animate({"margin-left":unitMargin},1000)
    }
  })

  $(".PRB").click(function(){
    if(projectCount > 4){

    }
    else{
      projectMargin += window.innerWidth/4*-1;
      projectCount++;
      $(".ts").animate({"margin-left":projectMargin},1000)
    }
  })

  $(".PLB").click(function(){
    if(projectCount == 0){

    }
    else{
      projectMargin += window.innerWidth/4;
      projectCount--;
      $(".ts").animate({"margin-left":projectMargin},1000)
    }
  })

  $("#downButton").click(function(){
      var height = window.innerHeight;
    $("body").animate({
      "scrollTop":height
    },500)
  })

})
