$(function () {
    //스토리쪽
    $('.story_right li').click(function (e) {
        e.preventDefault();
        if ($(this).find('.check').is(':visible') == true) {
            //체크를 눌렸을때 날짜가 나옴
            $(this).find('.date').css('display', 'inline-block');
            $(this).find('.check').css('display', 'none');

        } else {
            //날짜를 눌렸을때 체크가 나옴
            $(this).find('.check').css('display', 'inline-block');
            $(this).find('.date').css('display', 'none');
            $(this).siblings().find('.date').css('display', 'inline-block');
            $(this).siblings().find('.check').css('display', 'none')
            $('.left_text .panel').eq($(this).index()).css('display', 'inline-block');
            $('.left_text .panel').eq($(this).index()).siblings('.panel').css('display', 'none');

            $('.story_img a').eq($(this).index()).css('display', 'inline-block');
            $('.story_img a').eq($(this).index()).siblings().css('display', 'none');

            console.log($(this).index());
        }
    });
    var interval = 5000;
    /*간격이 3초간 이루어진다는 뜻.*/
    $('.slideBox').each(function () {
        var container = $(this);

        function switchImg() {
            /*페이드 전환 1회분의 함수*/
            var imgs = container.find('.show');
            var first = imgs.eq(0);
            var second = imgs.eq(1);
            /*first.appendTo(container).fadeOut();
            second.fadeIn();*/
            first.appendTo(container).fadeOut();
            second.fadeIn();
            /* first.appendTo(container).animate({
                 width: 'toggle'
             }, 1500);
             second.animate({
                 width: 'toggle'
             }, 1500);*/
            //console.log('test')


        }
        setInterval(switchImg, interval);
        /*3초마다 switchImg를 실행 */
    });
    var interval = 5000;
    $('.one').each(function () {
        var container = $(this);

        function switchImg() {
            /*페이드 전환 1회분의 함수*/
            var imgs = container.find('.slide_one');
            var first = imgs.eq(2);
            var second = imgs.eq(1);
            first.prependTo(container);

            //console.log('test')
        }
        setInterval(switchImg, interval);
        /*3초마다 switchImg를 실행 */
    });

    var interval = 5000;
    $('.slide_text').each(function () {
        var container = $(this);

        function switchImg() {
            /*페이드 전환 1회분의 함수*/
            var imgs = container.find('.imgtext');
            var first = imgs.eq(0);
            var second = imgs.eq(1);
            first.appendTo(container).fadeOut();
            second.fadeIn();

            //console.log('test')
        }
        setInterval(switchImg, interval);
        /*3초마다 switchImg를 실행 */
    });

    $('.online_btn').click(function () {
        alert('감사합니다.')

    });
    




});
