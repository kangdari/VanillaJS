// 검색창 input
class SearchInput {
  constructor({ $target, onSearch }) {
    const header = document.querySelector('header')
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색...";
    $searchInput.className = "SearchInput";

    // App에 자식 요소로 추가
    // $target.appendChild($searchBlock);
    // $searchBlock.appendChild($searchInput);

    header.appendChild($searchInput)
    // input에 focus 되도록 설정
    $searchInput.focus();

    // 엔터를 누르면 onSearch 함수 수행
    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        // 입력 값이 있을 때 검색
        if(e.target.value){
          onSearch(e.target.value);
          e.target.value = "";
        }else{
          console.log('검색어를 입력해주세요.')
        }
      }
    });

    // input 클릭 시 input 값 초기화
    $searchInput.addEventListener('click', (e) => {
      e.target.value = "";
    })

    console.log("SearchInput creted", this);
  }
  render() {}
}
