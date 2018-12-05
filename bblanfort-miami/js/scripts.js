$(document).ready(function () {

    $('div.branding nav a').click(function (event) {
        event.preventDefault();

        var whichSect = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(whichSect).offset().top
        }, 2000);

    });

    $(window).scroll(function () {
        var howFar = $(window).scrollTop();
        // console.log(howFar);
        if (howFar >= 233) {
            $('body').addClass('pinned');
        } else {
            $('body').removeClass('pinned');
        }
    });

});
/*-------------------------------------
| Birds Animation
-------------------------------------*/
function birds_animate() {
    $('.birds')
        .css({
            'background-position-x': '0px'
        })
        .animate({
            'background-position-x': '-1300px'
        }, 20000, 'linear', birds_animate);
}
birds_animate();
/*-------------------------------------
| Set The Stage
-------------------------------------*/
function set_the_stage() {
    $('.beach1.sun').stop().css({
        'right': '-350px'
    });
    $('.beach2.sun').stop().css({
        'top': '390px'
    });
    $('.beach3.sun').stop().css({
        'top': '-350px'
    });
    $('.beach4.sun').stop().css({
        'right': '-350px'
    });

    $('.beach1.boat').stop().css({
        'right': '1100px'
    });
    $('.beach2.boat1').stop().css({
        'right': '-350px'
    });
    $('.beach3.boat').stop().css({
        'right': '-350px'
    });
    $('.beach4.boat').stop().css({
        'right': '1100px'
    });

    $('.beach1.ball').stop().css({
        'left': '-350px'
    });
    $('.beach2.ball').stop().css({
        'left': '-350px'
    });
    $('.beach3.ball').stop().css({
        'left': '-350px'
    });
    $('.beach4.ball').stop().css({
        'left': '-350px'
    });

    $('.beach1.chair').stop().css({
        'left': '-350px'
    });
    $('.beach2.boat2').stop().css({
        'right': '-350px'
    });
    $('.beach3.paddleman').stop().css({
        'right': '-350px'
    });
    $('.beach4.aircraft').stop().css({
        'right': '-350px'
    });

}
set_the_stage();
/*-------------------------------------
| Slide 1
-------------------------------------*/
/* Animate in -------------------------------*/
function slide1() {
    $('.beach1.sun').animate({
        'right': '20px'
    }, 2000);
    $('.beach1.boat').animate({
        'right': '750px'
    }, 3000);
    $('.beach1.ball').animate({
        'left': '282px'
    }, 2000);
    $('.beach1.chair').animate({
        'left': '90px'
    }, 3000);
}
// slide1();
/*-------------------------------------
| Slide 2
-------------------------------------*/
/* Animate out -------------------------------*/
function slide2() {
    $('.beach1.sun').animate({
        'right': '1100px'
    }, 2000);
    $('.beach1.boat').animate({
        'right': '-350px'
    }, 2000);
    $('.beach1.ball').animate({
        'left': '1100px'
    }, 2000);
    $('.beach1.chair').animate({
        'left': '-350px'
    }, 2000);

    /* Animate in -------------------------------*/
    $('.beach2.sun').animate({
        'top': '-20px'
    }, 7000);
    $('.beach2.boat1').animate({
        'right': '350px'
    }, 5000);
    $('.beach2.ball').animate({
        'left': '55px'
    }, 4000);
    $('.beach2.boat2').animate({
        'right': '144px'
    }, 6000);
}
// slide2();
/*-------------------------------------
| Slide 3
-------------------------------------*/
/* Animate out -------------------------------*/
function slide3() {
    $('.beach2.sun').animate({
        'top': '-350px'
    }, 1000);
    $('.beach2.boat1').animate({
        'right': '1100px'
    }, 3000);
    $('.beach2.ball').animate({
        'left': '1100px'
    }, 2000);
    $('.beach2.boat2').animate({
        'right': '1100px'
    }, 3000);

    /* Animate in -------------------------------*/
    $('.beach3.sun').animate({
        'top': '-20px'
    }, 9000);
    $('.beach3.boat').animate({
        'right': '340px'
    }, 8000);
    $('.beach3.ball').animate({
        'left': '55px'
    }, 7000);
    $('.beach3.paddleman').animate({
        'right': '150px'
    }, 9000);
}
// slide3();
/*-------------------------------------
| Slide 4
-------------------------------------*/
/* Animate out -------------------------------*/
function slide4() {
    $('.beach3.sun').animate({
        'top': '390px'
    }, 2000);
    $('.beach3.boat').animate({
        'right': '1100px'
    }, 3000);
    $('.beach3.ball').animate({
        'left': '1100px'
    }, 3000);
    $('.beach3.paddleman').animate({
        'right': '1100px'
    }, 3000);

    /* Animate in -------------------------------*/
    $('.beach4.sun').animate({
        'right': '1100px'
    }, 11000);
    $('.beach4.boat').animate({
        'right': '-350px'
    }, 15000);
    $('.beach4.ball').animate({
        'left': '1100px'
    }, 10000);
    $('.beach4.aircraft').animate({
        'right': '1100px'
    }, 15000);
}
// slide4();

/*-------------------------------------
| Arrow Buttons
-------------------------------------*/
/* Default -------------------------------*/
var currentSlide = 1;

/* add 1 -------------------------------*/
function right_arrow_click() {
    currentSlide = currentSlide + 1;
    if (currentSlide == 6) {
        currentSlide = 5;
    }
    console.log(currentSlide);

    move_to_slide();
}
$('.arrow.right').click(right_arrow_click);

/* subtract 1 -------------------------------*/
function left_arrow_click() {
    currentSlide = currentSlide - 1;
    if (currentSlide == 0) {
        currentSlide = 1;
    }
    console.log(currentSlide);

    set_the_stage();

    move_to_slide();
}
$('.arrow.left').click(left_arrow_click);

/*-------------------------------------
| Move To Chosen Slide
-------------------------------------*/
function move_to_slide() {
    if (currentSlide == 1) {
        set_the_stage();
    } else if (currentSlide == 2) {
        slide1();
    } else if (currentSlide == 3) {
        slide2();
    } else if (currentSlide == 4) {
        slide3();
    } else if (currentSlide == 5) {
        slide4();
    } else if (currentSlide == 6) {
        slide5();
    }
}
/*-------------------------------------
| In Viewport :: Section 2
-------------------------------------*/
function sect2_onStage() {
    if ($('#sect2 .inview-block').is(':in-viewport')) {
        $('#sect2 img.polaroid1').removeClass('offstage');
        $('#sect2 img.polaroid2').removeClass('offstage');
        $('#sect2 img.polaroid3').removeClass('offstage');
        $('#sect2 img.polaroid4').removeClass('offstage');
        $('#sect2 img.polaroid5').removeClass('offstage');
        $('#sect2 img.polaroid6').removeClass('offstage');
        $('#sect2 img.polaroid7').removeClass('offstage');
        $('#sect2 img.polaroid8').removeClass('offstage');
        $('#sect2 img.polaroid-icon').removeClass('offstage');
        $('#sect2 img.miami-title').removeClass('offstage');
    } else {
        $('#sect2 img.polaroid1').addClass('offstage');
        $('#sect2 img.polaroid2').addClass('offstage');
        $('#sect2 img.polaroid3').addClass('offstage');
        $('#sect2 img.polaroid4').addClass('offstage');
        $('#sect2 img.polaroid5').addClass('offstage');
        $('#sect2 img.polaroid6').addClass('offstage');
        $('#sect2 img.polaroid7').addClass('offstage');
        $('#sect2 img.polaroid8').addClass('offstage');
        $('#sect2 img.polaroid-icon').addClass('offstage');
        $('#sect2 img.miami-title').addClass('offstage');
    }

}
$(window).scroll(sect2_onStage);
/*-------------------------------------
| Parallax
-------------------------------------*/
function parallax_move(theSection, posLeft, scrollSpeed) {

    var sectHowFar = theSection.offset().top;
    var scrollFromTop = $(window).scrollTop();

    var posTop = (scrollFromTop - sectHowFar) * scrollSpeed;

    theSection.css('background-position', posLeft + ' ' + posTop + 'px, center center');

}
$(window).scroll(function () {
    parallax_move($('#sect4'), '200px', 0.75);
});
