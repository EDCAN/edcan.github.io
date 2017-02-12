/**
 * Created by janghunlee on 2017. 2. 12..
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