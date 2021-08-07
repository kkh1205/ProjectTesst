//sm. 슬라이드 이미지 작동 스크립트(swiper)
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        //시간 1000 이 1초
        delay: 2500,
        disableOnInteraction: false,
       },
    //    effect: 'cube',
    //    cubeEffect: {
    //      slideShadows: false,
    //      shadow : false,
    //    },
       speed: 1000,
  });

  
//sm. 플로팅 배너 작동 스크립트
  var floatPosition = parseInt($(".sideBanner").css('top'))

  // scroll 인식
  $(window).scroll(function() {
    
      // 현재 스크롤 위치
      var currentTop = $(window).scrollTop();
      var bannerTop = currentTop + floatPosition + "px";
  
      //이동 애니메이션
      $(".sideBanner").stop().animate({
        "top" : bannerTop
      }, 500);
  
  }).scroll();



  $(document).ready(function() {
    $(window).scroll( function(){
        $('.animate__fadeInUp').each( function(i){
            

            
        }); 
    });
});
