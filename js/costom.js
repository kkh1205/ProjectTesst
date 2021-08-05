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


