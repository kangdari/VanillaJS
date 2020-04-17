console.log("App is running!!!");
// 전체 클래스 인스턴스 생성
class App {
  $target = null;
  data = [];
  loading = false; // true: 로딩중...

  // $target = #App
  constructor($target) {
    this.$target = $target;

    // ChangeMode 인스턴스 생성
    this.changeTheme = new ChangeTheme({
      $target,
      onClick: (e) => {
        const body = document.body;
        if (e.target.checked) {
          body.classList.toggle('ligth_mode');
        } else {
          body.classList.toggle('ligth_mode');
        }
      },
    });

    // SearchInput 인스턴스 생성
    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        // setState를 한번 호출해서 
        // loading 중임을 렌더링...
        this.setState({
          data: [],
          loading: true // 로딩 시작
        })
        // 검색 api 실행 후 setState 함수를 실행
        // api.fetchCats(keyword).then((res) => this.setState(res.data)); // fetch
        api.fetchCats(keyword).then((res) => this.setState({
          data: res.data,
          loading: false, // 로딩 끝
        })); // fetch
      },
    });

    // SearchResult 인스턴스(3개의 인자값)
    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      // 이미지 클릭 이벤트
      // image = 클릭한 고양이의 data 
      onClick: (image) => {
        // 선택한 고양이의 id 값으로 고양이 상세 정보 api(fetchCatInfo) 호출
        api.fetchCatInfo(image.id).then(({data}) => this.imageInfo.setState({
          visible: true,
          data,
        }))
      },
    });

    // ImageInfo 인스턴스 생성
    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null, // 고양이 data
      },
      // 모달 닫기 이벤트
      onClose: () => {
        this.imageInfo.setState({
          visible: false,
        })
      }
    });
  }

  // 검색 데이터 결과를 저장하고,
  // searchResult 인스턴스에 데이터 저장
  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
    // console.log(this.data);
  }
}
