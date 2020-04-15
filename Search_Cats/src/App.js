console.log("App is running!!!");

class App {
  $target = null;
  data = [];
  loading = false;

  // $target = #App
  constructor($target) {
    this.$target = $target;

    // SearchInput 인스턴스 생성
    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then(res => this.setState(res.data)) // fetch
      },
    });
  }

  // 상태 저장 함수
  setState(nextData) {
    this.data = nextData;
    console.log(this.data);
  }

}
