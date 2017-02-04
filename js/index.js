$(function(){
  var cache = [];
  var unit = new Array()
  unit =  ['an','gz','db','px','lh']
  var unitMargin = 0;
  var projectMargin = 0;

  var year = 2015;

  var unitCount = 0;
  var projectCount = 0;

  var twFive = new Array();
  var twSix = new Array();

  var text;


  $(document).ready(function(){

    if(screen.width < 600){

    }

    $.ajax({
      method:"GET",
      url:"http://iwin247.net:3000/award",
      success:function(data){

        twFive = data[0]['awards'];
        twSix = data[1]['awards'];
      },
      error:function(){
        alert("Server Error");
      }
    })
  })

  $.preLoadImages = function() {
  var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }

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
    text = "";
    if(year < 2016){
      for(var i = 0; i<twFive.length; i++){
        text += "<div class=\"calender-list\"> <span class=\"calender-service\">"
        text += twFive[i]['project_name']+"</span>"
        text += "<span class=\"calender-team\">"
        for(var j = 0; j<twFive[i][member].length; j++){
          text+=twFive[i][member][j]+" "
        }
        text +="</span>"
        text +="<div class=\"calender-contest\">"
        text +=twFive[i]['where']+"<span class=\"calender-award\">"
        text +=twFive[i]['prize']+"</span></div>"
      }

      $(".cal").html(text)
    }
    else{
      year = year-1;
      $("#calender-year").text(year);
      if(year == 2015){
        for(var i = 0; i<twFive.length; i++){
          text += "<div class=\"calender-list\"> <span class=\"calender-service\">"
          text += twFive[i]['project_name']+"</span>"
          text += "<span class=\"calender-team\">"
          for(var j = 0; j<twFive[i]['member'].length; j++){
            text+=twFive[i]['member'][j]+" "
          }
          text +="</span>"
          text +="<div class=\"calender-contest\">"
          text +=twFive[i]['where']+"<span class=\"calender-award\">"
          text +=" "+twFive[i]['prize']+"</span></div></div>"
        }
      }

        else if(year == 2016){

          for(var i = 0; i<twSix.length; i++){

            text += "<div class=\"calender-list\"> <span class=\"calender-service\">"
            text += twSix[i]['project_name']+"</span>"
            text += "<span class=\"calender-team\">"
            for(var j = 0; j<twSix[i]['member'].length; j++){
              text+=twSix[i]['member'][j]+" "
            }
            text +="</span>"
            text +="<div class=\"calender-contest\">"
            text +=twSix[i]['where']+"<span class=\"calender-award\">"
            text +=" "+twSix[i]['prize']+"</span></div></div>"
          }
        }

        $(".cal").html(text)

      }

  })

  $("#right-angle").click(function(){
    text = ""
    if(year == 2017){

    }
    else{
      year = year+1;
      if(year == 2016){
        for(var i = 0; i<twSix.length; i++){
          text += "<div class=\"calender-list\"> <span class=\"calender-service\">"
          text += twSix[i]['project_name']+"</span>"
          text += "<span class=\"calender-team\">"
          for(var j = 0; j<twSix[i]['member'].length; j++){
            text+=twSix[i]['member'][j]+" "
          }
          text +="</span>"
          text +="<div class=\"calender-contest\">"
          text +=twSix[i]['where']+"<span class=\"calender-award\">"
          text +=" "+twSix[i]['prize']+"</span></div></div>"
        }
      }
    }

    $("#calender-year").text(year);
    $(".cal").html(text)

  })

  $(".rightBtn").click(function(){
      if(window.innerWidth < 600){
        if(unitCount > 3){

        }
        else{
          unitMargin += window.innerWidth*-1;
          unitCount++;
          $(".atl").animate({"margin-left":unitMargin},1000)
        }
      }
      else if(window.innerWidth > 1200){
        if(unitCount > 1){

        }
        else{
          unitMargin += window.innerWidth/4*-1;
          unitCount++;
          $(".atl").animate({"margin-left":unitMargin},1000)
        }
      }
      else{
        if(unitCount > 4){

        }
        else{
          unitMargin += window.innerWidth/4*-1;
          unitCount++;
          $(".atl").animate({"margin-left":unitMargin},1000)
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
        $(".atl").animate({"margin-left":unitMargin},1000)
      }
    }
    else{
      if(unitCount == 0){

      }
      else{
        unitMargin += window.innerWidth/4;
        unitCount--;
        $(".atl").animate({"margin-left":unitMargin},1000)
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

  $(".t_d").click(function(){
      var height = window.innerHeight;
    $("body").animate({
      "scrollTop":height
    },500)
  })

})
