$(function(){
  var margin = 0;
  $("#scrollLeft").click(function(){
    if(margin - 350 < -1050)
    {

    }
    else {
      margin = margin - 350;
      $(".fr").animate({"margin-left":margin})
    }
  })

  $("#scrollRight").click(function(){
    if(margin + 350 > 0)
    {

    }
    else {
      margin = margin + 350;
      $(".fr").animate({"margin-left":margin})
    }
  })

  $("#left").click(function(){
    var year = $("#year").text()
    year--;
    $("#year").text(year)
  })

  $("#right").click(function(){
    var year = $("#year").text()
    year++;
    $("#year").text(year)
  })


})
