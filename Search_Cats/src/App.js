console.log("App is running!!!");
// 전체 클래스 인스턴스 생성
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
        // 검색 api 실행 후 setState 함수를 실행
        api.fetchCats(keyword).then(res => this.setState(res.data)) // fetch
      },
    });

    // SearchResult 인스턴스(3개의 인자값)
    this.searchResult = new SearchResult({
      $target,
      initialData: this.data, 
      // 이미지 클릭 이벤트
      // image = 클릭한 고양이의 data
      onClick: image => {
        // imageInfo가 보이도록 visible 값
        this.imageInfo.setState({
          visible: true,
          image, // 선택한 고양이 data
        })
      }
    });

    // ImageInfo 인스턴스 생성
    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null, // 고양이 data
      }
    })
    
  }

  // 검색 데이터 결과를 저장하고,
  // searchResult 인스턴스에 데이터 저장
  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
    // console.log(this.data);
  }

}
