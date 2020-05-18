$(document).ready(function ($) {
    $("body").css("padding-top", $("header").height());
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
            
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
            //$(".logo-cont img").attr("src", "images/index/logo-dark.png");
        } else {
            $("header" ).removeClass("scrolled");
            //$(".logo-cont img").attr("src", "images/index/logo.png");
        }
    }
    onScroll();
    
    var menuVisible = false;

    var api = $("#menu").data( "mmenu" );
    $(".toggle-button" ).click(function(){
        if (!menuVisible) 
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).addClass("open");
            menuVisible = true;
        }
        else
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).removeClass("open");
            menuVisible = false;
        }
    });
    
    $(".mobile-menu-cont").hide();


    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });


});