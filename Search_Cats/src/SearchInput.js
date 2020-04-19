// 검색창 input
class SearchInput {
  // 검색어 목록
  searchWords = [];

  constructor({ $target, onSearch }) {
    const header = document.querySelector('header')
    const $searchInput = document.createElement("input");
    const $serachWords = document.createElement("div");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색...";
    $searchInput.className = "SearchInput";
    $serachWords.className = "SearchWords";

    // App에 자식 요소로 추가
    // $target.appendChild($searchBlock);
    // $searchBlock.appendChild($searchInput);

    header.appendChild($searchInput);
    header.appendChild($serachWords);

    // input에 focus 되도록 설정
    $searchInput.focus();

    // 엔터를 누르면 onSearch 함수 수행
    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        // 입력 값이 있을 때 검색
        if(e.target.value){
          onSearch(e.target.value);

          // 최근 검색어 목록에 추가
          this.searchWords.push(e.target.value); // 배열에 추가
          
          // 출력된 검색어 초기화
          while($serachWords.firstChild){
            $serachWords.removeChild($serachWords.firstChild);
          }

          // 뒤에서 5번째 부터 마지막까지 잘라 출력
          this.searchWords.slice(-5).map((item, i) => {
              const word = document.createElement("span");
              word.className = "searchWord";
              word.addEventListener('click', (e) => onSearch(e.target.innerText))
              word.innerText = item;
              $serachWords.appendChild(word)  
          })

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
