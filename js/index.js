$(function(){
  var unit = new Array()
  unit =  ['an','gz','db','px','lh']
  var margin = 0;
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
    location.href="unit.html"
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

    if(window.innerWidth < 401){
      if(margin - 400 < -1600){

      }
      else{
        margin = margin - 400;
        $(".lh").animate({"margin-left":margin},1000)
      }
    }
    else{
      if(margin - 400 < -1200){

      }
      else{
        margin = margin - 400;
        $(".lh").animate({"margin-left":margin},1000)
      }
    }
  })

  $(".leftBtn").click(function(){
    if(window.innerWidth < 401){
      if(margin + 380>0)
      {

      }
      else{
        margin = margin + 400;
        $(".lh").animate({"margin-left":margin},1000)
      }
    }
    else{
      if(margin + 400 >0)
      {

      }
      else{
        margin = margin + 400;
        $(".lh").animate({"margin-left":margin},1000)
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
