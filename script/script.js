$(document).ready(function(){
    // NOTE: 다크모드
    $('aside .night').click(function(){
        $('body').addClass('day');
        $('body').removeClass('night');
    })
    $('aside .day').click(function(){
        $('body').addClass('night');
        $('body').removeClass('day');
    })

    // NOTE: nav
    let about = $('#description').offset().top;
    let activity = $('#activity').offset().top;
    let project = $('#project').offset().top;
    let teammate = $('#teammate').offset().top;
    $('header ul > li:nth-child(1)').click(function(){
        $('html, body').animate({scrollTop : about}, 400);
    })
    $('header ul > li:nth-child(2)').click(function(){
        $('html, body').animate({scrollTop : activity}, 400);
    })
    $('header ul > li:nth-child(3)').click(function(){
        $('html, body').animate({scrollTop : project}, 400);
    })
    $('header ul > li:nth-child(4)').click(function(){
        $('html, body').animate({scrollTop : teammate}, 400);
    })
    $('#up').click(function(){
        $('html, body').animate({scrollTop : 0}, 400);
    })
})