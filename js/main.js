var $doc = $(document),
    $win = $(window),
    max = $doc.height() - $win.height() - 7500;

$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    var p = $win.scrollTop() / max;

    console.log(scroll);

    if (scroll == 0) {
        $('nav').css({
            "opacity": "100%",
        });
        $("nav").hover(function () {
            $('nav').css("opacity", "100%");
        }, function () {
            $('nav').css("opacity", "100%");
        });
    } else {
        $('nav').css({
            "opacity": "1%",
        });
    };

    if (scroll > 550) {
        $('nav').css({
            "top": "0%",
        });
    } else {
    };
    if ($('.menu-btn').hasClass('open')) {
        if (scroll == 0) {
            $('nav').css({
                "opacity": "100%",
            });
        } else {
            $('nav').css({
                "opacity": "100%",
            });
        };
    }
});


var nav = false;
var rotateJump = 10;
var line = document.getElementById("line");


$('.menu-btn').click(function () {
    if (nav == false) {
        $('.menu-btn').addClass('open')
        nav = true,
            $('#nav-panel').css({
                "left": "0%",
                "visibility": "visible",
            });
        $('article').css({
            "filter": "blur(2px)"
        });

    } else if (nav == true) {
        nav = false,
            $('.menu-btn').removeClass('open')
        $('#nav-panel').css({
            "left": "-50%",
        });
        $('article').css({
            "filter": "blur(0px)"
        });
    }
});

$('#nav-panel').css({
    "left": "0%",
});

$("nav").hover(function () {
    $('nav').css("opacity", "100%");
}, function () {
    $('nav').css("opacity", "0%");
});

// Horizontal Carrousel

$(document).ready(function () {
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });
});

