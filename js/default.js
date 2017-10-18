$(document).ready(function(){

    var mobileTopOffset = 54;
    var desktopTopOffset = 80;
    var topOffset = desktopTopOffset;

    if($(window).width() <= 767) {
        topOffset = mobileTopOffset;
    }

    /* Single page nav
    -----------------------------------------*/
    $('#tmNavbar').singlePageNav({
     'currentClass' : "active",
     offset : topOffset,
     'filter': ':not(.external)'
 }); 

    /* Handle nav offset upon window resize
    -----------------------------------------*/
    $(window).resize(function(){
        if($(window).width() <= 767) {
            topOffset = mobileTopOffset;
        } 
        else {
            topOffset = desktopTopOffset;
        }

        $('#tmNavbar').singlePageNav({
            'currentClass' : "active",
            offset : topOffset,
            'filter': ':not(.external)'
        });
    });


    /* Collapse menu after click 
    -----------------------------------------*/
    $('#tmNavbar a').click(function(){
        $('#tmNavbar').collapse('hide');
    });

    /* Turn navbar background to solid color starting at section 2
    ---------------------------------------------------------------*/
    var target = $("#tm-section-2").offset().top - topOffset;

    if($(window).scrollTop() >= target) {
        $(".tm-navbar-container").addClass("bg-inverse");
    }
    else {
        $(".tm-navbar-container").removeClass("bg-inverse");
    }

    $(window).scroll(function(){

        if($(this).scrollTop() >= target) {
            $(".tm-navbar-container").addClass("bg-inverse");
        }
        else {
            $(".tm-navbar-container").removeClass("bg-inverse");
        }
    });


    /* Smooth Scrolling
    * https://css-tricks.com/snippets/jquery/smooth-scrolling/
    --------------------------------------------------------------*/
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            && location.hostname == this.hostname) {

            var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {

            $('html, body').animate({
                scrollTop: target.offset().top - topOffset
            }, 1000);
            return false;
        }
    }
}); 


    /* Magnific pop up
    ------------------------- */
    $('.tm-img-grid').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true}            
    });            
});