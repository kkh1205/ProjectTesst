$(window).scroll(function(){//스크롤 움직이는거 감지해서 펑션 작동

    var scrollPosition = $(window).scrollTop(); //스크롤값 가져오기
  
  
    //여기서부터는 스크롤 내리면 나타내는 효과들
    if(scrollPosition >= 200){//스크롤값 200이상이면 페이드인업 해서 애니메이션 작동
      //ex. movingtasteBox('맛' 이라고 적혀있는 상자)의 id를 검색해서 그 id에 속한 class를 애니메이션이 들어가있는 class로 변경해버림
      document.getElementById('movingtasteBox').className = 'container-fluid row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 500){
      document.getElementById('tasteExplain1').className = 'row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 900){
      document.getElementById('tasteExplain2').className = 'row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 1800){
      document.getElementById('movingganjiBox').className = 'container-fluid row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 2000){
      document.getElementById('ganjiExplain1').className = 'row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 2600){
      document.getElementById('ganjiExplain2').className = 'row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 3000){
      document.getElementById('ganjiExplain3').className = 'container-fluid row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 3800){
      document.getElementById('movingrestBox').className = 'container-fluid row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 4000){
      document.getElementById('restExplain1').className = 'container-fluid row animate__animated animate__fadeInUp';
    }
    if(scrollPosition >= 4500){
      document.getElementById('restExplain2').className = 'container-fluid row animate__animated animate__fadeInUp';
    }
  //스크롤 내리면 나타내는 효과들 끗
  
  
  //여기서부터는 스크롤 올리면 없어지기
  
    if(scrollPosition < 200){//스크롤값 200 미만이면 페이드아웃다운 해서 애니메이션 작동
      //ex. movingtasteBox('맛' 이라고 적혀있는 상자)의 id를 검색해서 그 id에 속한 class를 애니메이션이 들어가있는 class로 변경해버림
      document.getElementById('movingtasteBox').className = 'container-fluid row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 500){
      document.getElementById('tasteExplain1').className = 'row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 900){
      document.getElementById('tasteExplain2').className = 'row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 1800){
      document.getElementById('movingganjiBox').className = 'container-fluid row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 2000){
      document.getElementById('ganjiExplain1').className = 'row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 2600){
      document.getElementById('ganjiExplain2').className = 'row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 3000){
      document.getElementById('ganjiExplain3').className = 'container-fluid row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 3800){
      document.getElementById('movingrestBox').className = 'container-fluid row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 4000){
      document.getElementById('restExplain1').className = 'container-fluid row animate__animated animate__fadeOutDown';
    }
    if(scrollPosition < 4500){
      document.getElementById('restExplain2').className = 'container-fluid row animate__animated animate__fadeOutDown';
    }
  
  
  
  });