// 무한 루프 슬라이드

const slideList = document.querySelector(".slide_list");
const slideContents = document.querySelectorAll(".slide_content");
const slideBtnNext = document.querySelector(".slide_btn_next");
const slideBtnPrev = document.querySelector(".slide_btn_prev");
const pagination = document.querySelector('.slide_pagination');
const slideLen = slideContents.length;
const slideWidth = 400;
const slideSpeed = 300;
const startNum = 0; // slide index ( 0 ~ 4 )

// copy first, last slide
const firstSlide = slideList.firstElementChild; 
const lastSlide = slideList.lastElementChild;
const cloneFirst = firstSlide.cloneNode(true); // dom 복제
const cloneLast = lastSlide.cloneNode(true); // dom 복제

slideList.appendChild(cloneFirst); // 마지막에 cloneFirst 추가 
slideList.insertBefore(cloneLast, slideList.firstElementChild); // 0번 슬라이드 앞에 cloneLast 추가
// 처음음 cloneFirstSlide 크기만큼 slideList 이동 = 400px
// slideList의 시작점을 -400px로 설정
slideList.style.transform = `translate3d(-${slideWidth * (startNum+1)}px, 0px, 0px)`;

// slideList 크기 지정 = 400 * (5 + 2(clone))
slideList.style.width = slideWidth * (slideLen + 2) + "px";

let currentIndex = startNum; // current slide index, copied slide 제외
let currentSlide = slideContents[currentIndex]; // 1번 슬라이드
currentSlide.classList.add('slide_active') // 현재- 보여지는 슬라이드

slideBtnNext.addEventListener("click", () => {
  // slideLen: 5, 0 ~ 4 
  if (currentIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms"; // 0.3s
    slideList.style.transform = `translate3d(-${slideWidth * (currentIndex+2)}px, 0px, 0px)`;
  }
  // 5번 슬라이드일 때...(인덱스 4일 때) 클릭하면 > 다시 1번 슬라이드 이동 페이크
  if(currentIndex === slideLen - 1){
    setTimeout(()=> {
        slideList.style.transition = "0ms";
        // 0.3s 후 1번 슬라이드 위치로 이동
        slideList.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)` 
    }, slideSpeed); 
    currentIndex = -1;
  }
  currentSlide.classList.remove('slide_active');
  // currentIndex === -1 이라면 5번 슬라이드(4 인덱스)의 dot_active 클래스 제거
  pageDots[(currentIndex === -1) ? slideLen-1 : currentIndex].classList.remove('dot_active');
  currentSlide = slideContents[++currentIndex]; // 현재 슬라이드 변경
  currentSlide.classList.add('slide_active'); // 현재 슬라이더에 클래스 추가
  pageDots[currentIndex].classList.add('dot_active')
});

slideBtnPrev.addEventListener('click', () => {
    // 1번 슬라이드 까지
    if(currentIndex >= 0){
        slideList.style.transition = slideSpeed + "ms"; // 0.3s
        slideList.style.transform = `translate3d(-${slideWidth * (currentIndex)}px, 0px, 0px)`
    }
    // 1번 슬라이드를 눌렀을 때 5번 슬라이드로 이동 페이크
    if(currentIndex === 0) {
        setTimeout(() => {
            slideList.style.transition = '0s';
            // 5번 슬라이드 위치 = 2000px로 이동
            slideList.style.transform = `translate3d(-${slideWidth * (slideLen)}px, 0px, 0px)`
        }, slideSpeed);
        currentIndex = slideLen;
    }
    currentSlide.classList.remove('slide_active');
    // currentIndex === slideLen일 때 즉 1번 슬라이드의 dot_active 클래스 제거
    pageDots[(currentIndex === slideLen) ? 0 : currentIndex].classList.remove('dot_active');
    currentSlide = slideContents[--currentIndex];
    currentSlide.classList.add('slide_active');
    pageDots[currentIndex].classList.add('dot_active');
})

// `Pagination`
let pageChild = '';
for(let i=0; i<slideLen; i++){
    pageChild += `<li class="dot`;
    pageChild += (i === startNum) ? ' dot_active' : '';
    pageChild += `" data-index="${i}" ><a herf="#"></a></li>`
}

pagination.innerHTML = pageChild;
const pageDots = [...document.querySelectorAll('.dot')];

let currentDot;
pageDots.forEach((dot, i) => {
    // event 부여
    dot.addEventListener('click', (e) => {

        // 1) 이전 currentDot을 찾아 / 2) dot_active 클래스 제거
        currentDot = document.querySelector('.dot_active');
        currentDot.classList.remove('dot_active')

        // 1) 새로운 currentDot 설정 ( 클릭한 요소 )하고 / 2) dot_active 클래스 추가
        currentDot = e.target
        currentDot.classList.add('dot_active')

        // 1) 현재 slide의 slide_active 클래스 제거하고  / 2) 클릭한 요소로부터 currentIndex을 찾아 
        // 3) currentSlide를 설정하고 / 4) 그 slide에 slide_active 클래스 추가
        // 5) currentSlide의 위치로 이동
        currentSlide.classList.remove('slide_active'); 
        currentIndex = Number(currentDot.getAttribute('data-index'));
        currentSlide = slideContents[currentIndex];
        currentSlide.classList.add('slide_active');
        slideList.style.transition = slideSpeed + 'ms';
        // 1번 슬라이드 -> 3번 슬라이드 : 800px 이동
        slideList.style.transform = `translate3d(-${slideWidth * (currentIndex+1)}px, 0px, 0px)`
    })
})

