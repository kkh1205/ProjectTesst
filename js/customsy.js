
// sy.스크롤 이벤트 시작
// 스크린 아래에 있으면 true를 반환, 스크린보다 위에 있으면 false를 반환함.
// 여기서 element는 사진, 글 등을 의미

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.up-on-scroll');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";                           // 각 element가 화면보다 아래에 있다면
      elem.style.transform = 'translateY(70px)';          // style 적용
    } else {
      elem.style.opacity = "1";                           // 각 element가 화면 안에 있다면
      elem.style.transform = 'translateY(0px)';           // style 적용
    }
  })
}

window.addEventListener('scroll', handleScroll);

// sy.스크롤 이벤트 끝
