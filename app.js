$(document).ready(() => {
    AOS.init();
})


document.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    $("nav").css("background-color", "rgba(255,255,255," + (st / 200).toString() + ")")
}, false)

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-nav').parent().find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('.navbar-collapse').collapse('hide');
});

new ResizeObserver(entries =>
    console.log('Body height changed:', entries[0].target.clientHeight)
).observe(document.body)