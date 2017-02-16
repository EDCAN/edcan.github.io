/**
 * Created by janghunlee on 2017. 2. 12.. << FUCK YOU
 */
$(document).ready(
  function () {
    $('nav').css('height',$(document).height())
  }
)
$(".project").hover(
    function () {
        $(".project_list").removeClass("none");
    },
    function (){
        $(".project_list").addClass("none");
    }
);

$(".unit").hover(
    function () {
        $(".unit_list").removeClass("none");
    },
    function (){
        $(".unit_list").addClass("none");
    }
);
$(".menu-icon").click(
  function() {
    if($('nav').hasClass('open')){
      $('nav').removeClass("open");
      $('nav').addClass("close");
    }
    else{
      $('nav').addClass("open");
      $('nav').removeClass("close");
    }
  }
)
$('.side-unit-title').click(
  function() {
    if($(".side-unit-index").hasClass('none')){
      $(".side-unit-index").removeClass("none");
    }
    else{
      $(".side-unit-index").addClass("none");
    }
  }
)
$('.side-project-title').click(
  function() {
    if($(".side-project-index").hasClass('none')){
      $(".side-project-index").removeClass("none");
    }
    else{
      $(".side-project-index").addClass("none");
    }
  }
);
