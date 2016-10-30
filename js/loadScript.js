window.addEventListener("load", main);

function main() {
    var scroller = document.getElementById("about-scroller");
    var top = $("#edcan-about").offset().top;

    function scrollTo(px) {
        $("body").animate({
            scrollTop: px
        });
    }

    scroller.addEventListener("click", function () {
        scrollTo(top);
    });
}