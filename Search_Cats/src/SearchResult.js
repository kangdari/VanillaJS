// 검색 결과를 보여주는 div
class SearchResult {
  $searchResult = null; // div 요소
  data = null;
  onClick = null;
  loading = false;


  // $target = App,
  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "SearchResult";

    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    // 새로고침 시 기존 데이터 불러오기
    this.loadData();

    console.log(`SearchResult created`, this);
  }

  // nextData = 검색 결과
  setState(nextData) {
    this.data = nextData.data; // 검색 결과 data
    this.loading = nextData.loading; // loading 여부
    // 검색한 데이터를 localStorage에 저장
    localStorage.setItem('data', JSON.stringify(this.data));
    this.render();
  }

  // 새로고침 시 기존 데이터 
  loadData(){
    const data = JSON.parse(localStorage.getItem('data'));
    // localStorage에 data가 있는 경우에만 렌더링
    if(data){
      this.setState({data, loading: false})
    }
  }

  render() {
    // 로딩 중...
    if (this.loading) {
      console.log("로딩 중...");
      this.$searchResult.innerHTML = `
        <div>로딩 중...</div>
      `;
    }
    // 로딩이 끝나고 && data가 없을 때. (배열의 길이 = 0)
    // 여기서 오류가 발생하네...
    if (!this.loading && !this.data.length) {
      console.log("검색 결과 없음"  );
      return this.$searchResult.innerHTML = `
        <div>검색 결과가 없습니다.</div>
      `;
    }
    // 로딩이 끝나고 data가 있을 때 
    if (!this.loading && !!this.data.length) {
      this.$searchResult.innerHTML = this.data
        .map(
          (cat) => `
        <article class="item">
            <img src=${cat.url} alt=${cat.name}/>
        </article>
      `
        )
        .join(""); // join 함수를 이용해 배열 요소들을 하나의 값으로 변환

      this.$searchResult.querySelectorAll(".item").forEach((item, i) =>
        item.addEventListener("click", (e) => {
          // 선택한 이미지를 onClick의 인자 값으로 전달하여
          // onClick 함수에서 visibe 값을 설정
          this.onClick(this.data[i]);
        })
      );
      console.log("로딩 완료");

      
    }
  }
}
