// 검색 결과를 보여주는 div
class SearchResult {
  $searchResult = null; // div 요소
  data = null;
  onClick = null;

  // $target = App,
  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";

    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    // this.render();
    this.render();
    console.log(`SearchResult created`, this);
  }

  // nextData = 검색 결과
  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    // cats data들을 하나씩 렌더링
    this.$searchResult.innerHTML = this.data
      .map(
        (cat) => `
        <div class="item">
            <img src=${cat.url} alt=${cat.name}/>
        </div>
      `
      )
      .join(""); // join 함수를 이용해 배열 요소들을 하나의 값으로 변환

    this.$searchResult.querySelectorAll(".item").forEach((item, i) =>
      item.addEventListener("click", (e) => {
        // 선택한 이미지를 onClick의 인자 값으로 전달하여
        // onClick 함수에서 visibe 값을 설정
        this.onClick(this.data[i])
      })
    );
  }
}
