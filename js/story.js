$(function () {
    $('.allclick').click(function (event) {
        $('.list1').css('display', 'inline-block')
        $('li:nth-child(7)').css('margin-left', '0');
        $('li:nth-child(8)').css('margin-right', '48px');
        if(window.innerWidth<=900){
       console.log('뜬다')
        $('li:nth-child(7)').css('margin-left', '10px');
        $('li:nth-child(8)').css('margin-right', '0');
    }

    });
    $('.ingclick').click(function (event) {

        $('.noting').css('display', 'none')
        $('.ing').css('display', 'inline-block')

    });
    $('.story_tab > ul > li').click(function () {
        event.preventDefault();
        $(this).css("background", "linear-gradient(to left, #d61518, #453a94)")
        $(this).children('a').css("color", "#fff");
        $(this).siblings().css('background', 'white');
        $(this).siblings().children('a').css("color", "#333");
    });
    $('.endclick').click(function (event) {
        $('.ing').css('display', 'none')
        $('.noting').css('display', 'inline-block');


        $('li:nth-child(7)').css('margin-left', '48px');
        $('li:nth-child(8)').css('margin-right', '0');
    if(window.innerWidth<=900){
       console.log('뜬다')
        $('li:nth-child(7)').css('margin-left', '10px');
        $('li:nth-child(8)').css('margin-right', '10px');
    }
    });
    
    
    






    $('.two').click(function () {
        alert('다음페이지 정보가 없습니다.')

    });

    $('#story > section > div > ul > li:nth-child(3)').click(function () {
        alert('다음페이지 정보가 없습니다.')

    });

});
