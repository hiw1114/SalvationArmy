// JavaScript Document
$(document).ready(function() {
    
/*
$(대상).이벤트(실행문(){
 
 $(실행될대상).대상에 대한 명령어();
	
});
*/
//$(대상).메소드();


$(".sub").hide();

$(".main_nav > ul > li").mouseover(function(){
	
 //$(this).find(".sub").show();
 //$(this).find(".sub").stop().slideDown()
 $(this).find(".sub").stop().fadeIn();
});


$(".main_nav > ul > li").mouseout(function(){
	
 //$(this).find(".sub").hide();
 //$(this).find(".sub").stop().slideUp();
 $(this).find(".sub").stop().fadeOut();
});






/* 메인 슬라이드*/
    var current = 0;//현재보이는 메인이미지 몇번째 값
    var setIntervalId;// 자동실행문을 저장하는 변수
    
    $("#main_img .btns li").click(function(){
            var i = $(this).index();
            move(i);
    });

     
    $("#main_img").hover(
        //마우스를 대상에 올릴때
        function(){
            clearInterval(setIntervalId);
            //setInterval 작동을 멈춤
        },
        //마우스를 대상에 나갈때
        function(){
            timer();
        }    
    );

    timer();//실행함수 호출
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == 3){//조건문 최종번호가되면 처음번호로 초기화
                n = 0;
            }
            
           move(n)
		   		   
        }, 3000);
		//setInterval(function(){실행문},간격시간)
    }
   
    
    function move(i){
        if(current == i) return;
        
        var currentEl = $(".imgs li").eq(current);
	    //변수 currentEl 안에 .imgs li의 "eq(0)"은 0번째를 의미
        var nextEl = $(".imgs li").eq(i);
		//변수 nextEl 안에 .imgs li의 "eq(1)"은 1번째를 의미
        
        currentEl.css({opacity:1}).stop().animate({opacity:0});
		/*
		currentEl는 현재대상에 "css({left:0})"스타일시트 left:0값을 선언
		animate({left:'-100%'},1000) 애니매이션을 준다 left값만큼
		1000이 1초를 의미하고 생략하거나 원하는 초를 선언한다
		*/
        nextEl.css({opacity:0}).stop().animate({opacity:1});

        current = i;
    }

    

/*탭작업*/
$(".group > article").hide();
$(".group > .notice").show();

$('.h_btns > li').click(function(){
   var i = $(this).index();
   $(".group > article").hide();
   $(".group > article").eq(i).show();
});



/*팝업창*/
$(".popup").hide();

$(".notice .li01").click(function(){
 
   $(".popup").show();	
	
});

$(".close_bt").click(function(){
	
 $(".popup").hide();	
	
});



});