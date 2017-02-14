/**
 * Created by janghunlee on 2017. 2. 12.. << FUCK YOU
 */

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
