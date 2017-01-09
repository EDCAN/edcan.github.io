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

  $(".gg").click(function(){
    $.ajax({
      method:"POST",
      data:{"unit":"gz"},
      url:"http://iwin248:3000/unit",
      success:function(data){

      },
      error:function(){
        alert("Server Error 500")
      }
    })
  })

  $(".la").click(function(){
    $.ajax({
      method:"POST",
      data:{"unit":"lu"},
      url:"http://iwin248:3000/unit",
      success:function(data){

      },
      error:function(){
        alert("Server Error 500")
      }
    })
  })

  $(".ao").click(function(){
    $.ajax({
      method:"POST",
      data:{"unit":"ad"},
      url:"http://iwin248:3000/unit",
      success:function(data){

      },
      error:function(){
        alert("Server Error 500")
      }
    })
  })

  $(".pl").click(function(){
    $.ajax({
      method:"POST",
      data:{"unit":"px"},
      url:"http://iwin248:3000/unit",
      success:function(data){

      },
      error:function(){
        alert("Server Error 500")
      }
    })
  })

  $(".db").click(function(){
    $.ajax({
      method:"POST",
      data:{"unit":"dr"},
      url:"http://iwin248:3000/unit",
      success:function(data){

      },
      error:function(){
        alert("Server Error 500")
      }
    })
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
      if(margin - 370 < -1480){

      }
      else{
        margin = margin - 370;
        $(".lh").animate({"margin-left":margin},1000)
      }
    }
    else{
      if(margin - 420 < -1300){

      }
      else{
        margin = margin - 420;
        $(".lh").animate({"margin-left":margin},1000)
      }
    }
  })

  $(".leftBtn").click(function(){
    if(window.innerWidth < 401){
      if(margin + 370 >0)
      {

      }
      else{
        margin = margin + 370;
        $(".lh").animate({"margin-left":margin},1000)
      }
    }
    else{
      if(margin + 420 >0)
      {

      }
      else{
        margin = margin + 420;
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
