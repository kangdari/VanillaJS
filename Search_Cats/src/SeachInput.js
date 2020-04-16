// 검색창 input
class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색...";

    const header = document.querySelector('header')

    $searchInput.className = "SearchInput";

    // App에 자식 요소로 추가
    // $target.appendChild($searchBlock);
    // $searchBlock.appendChild($searchInput);

    header.appendChild($searchInput)

    // 엔터를 누르면 onSearch 함수 수행
    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        // 입력 값으로 검색
        onSearch(e.target.value);
        e.target.value = "";
      }
    });
    console.log("SearchInput creted", this);
  }
  render() {}
}
