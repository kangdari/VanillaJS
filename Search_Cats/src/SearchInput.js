// 검색창 input
class SearchInput {
  // 검색어 목록
  searchWords = [];


  constructor({ $target, onSearch, onRandomSearch }) {
    const header = document.querySelector("header");
    const searchBox = document.createElement("div"); 
    const $searchInput = document.createElement("input"); // 검색 입력창
    const $searchWords = document.createElement("div"); // 최근 검색어 목록
    const $randomBtn = document.createElement("button");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색...";
    searchBox.className = "SearchBox";
    $searchInput.className = "SearchInput";
    $searchWords.className = "SearchWords";
    $randomBtn.innerText = "Random";

    // App에 자식 요소로 추가
    // $target.appendChild($searchBlock);
    // $searchBlock.appendChild($searchInput);

    searchBox.appendChild($searchInput);
    searchBox.appendChild($randomBtn)

    // header.appendChild($searchInput);
    // header.appendChild($randomBtn);
    header.appendChild(searchBox);
    header.appendChild($searchWords);

    

    // input에 focus 되도록 설정
    $searchInput.focus();

    // 엔터를 누르면 onSearch 함수 수행
    // keyup => keypress
    $searchInput.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        // 입력 값이 있을 때 검색
        if (e.target.value) {
          onSearch(e.target.value);

          // 최근 검색어 목록에 추가
          this.searchWords.push(e.target.value); // 배열에 추가
          localStorage.setItem("searchWords", JSON.stringify(this.searchWords));

          // 출력된 검색어 초기화
          while ($searchWords.firstChild) {
            $searchWords.removeChild($searchWords.firstChild);
          }

          // 뒤에서 5번째 부터 마지막까지 잘라 출력
          this.searchWords.slice(-5).map((item) => {
            const word = document.createElement("span");
            word.className = "searchWord";
            word.addEventListener("click", (e) => onSearch(e.target.innerText));
            word.innerText = item;
            $searchWords.appendChild(word);
          });

          e.target.value = "";
        } else {
          console.log("검색어를 입력해주세요.");
        }
      }
    });

    // input 클릭 시 input 값 초기화
    $searchInput.addEventListener("click", (e) => {
      e.target.value = "";
    });

    $randomBtn.addEventListener("click", () => onRandomSearch() )

    this.loadData(onSearch);

    console.log("SearchInput creted", this);
  }

  // 새로고침 시 기존 데이터 불러오기
  loadData(onSearch) {
    const LS_words = JSON.parse(localStorage.getItem("searchWords"));
    if (LS_words) {
      this.searchWords = this.searchWords.concat(LS_words);
      this.searchWords.slice(-5).map((item) => {
        const word = document.createElement("span");
        word.className = "searchWord";
        word.addEventListener("click", (e) => onSearch(e.target.innerText));
        word.innerText = item;
        document.querySelector(".SearchWords").appendChild(word);
      });
    }
  }

  render() {}
}
