$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });
    var wow = new WOW().init();
});