$(document).ready(function(){

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

    // NOTE: header
    $(window).scroll(function(){
        if($(document).scrollTop() >= 50){
            $('header').css({"height": "90px"})
        }else{
            $('header').css({"height": "110px"})
        }
    })

    for(let i = 1; i<=9; i++){
        $("#photo"+i).click(function(){
            if($("#photo"+i).css("background-image") != "none"){
                $("#pop_photo").show();
                $("#pop_photo_img").css("background-image", $("#photo"+i).css("background-image"));
                $("#pop_photo").click(function(){
                    $(this).hide()
                })
            }
        })
    }
})