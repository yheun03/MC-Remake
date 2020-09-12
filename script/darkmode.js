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
})