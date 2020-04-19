// 이미지 클릭 시 상세 페이지
class ImageInfo {
  $imageInfo = null;
  data = null;
  onClose = null;
  loading = false;

  constructor({ $target, data, onClose }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;

    // #App의 자식 요소로 추가
    $target.appendChild($imageInfo);

    this.data = data;
    this.onClose = onClose;

    this.render();
    console.log(`ImageInfo created`, this);
  }

  // onClick 메소드에 의해서
  // vislble 속성과 고양이 상세 정보를 전달 받습니다.(nextData)
  setState(nextData) {
    this.data = nextData;
    // console.log(this.data)
    this.render();
  }

  render() {
    // 로딩 중...
    if(this.data.loading){
      console.log('고양이 상세 정보 로딩 시작')
    }
    // 모달: 고양이 상세 정보를 보여줌.
    if (!this.data.loading && this.data.visible) {
      console.log('고양이 상세 정보 로딩 완료')
      this.$imageInfo.style.display = "block";
      const { name, url, temperament, origin } = this.data.data;

      this.$imageInfo.innerHTML = `
                <div class="content_block">
                    <div class="title">
                        <span>${name}</span>
                        <button class="close_btn">X</button>
                    </div>
                    <img src=${url} art=${name}/>
                    <div class="description">
                        <div>성격: ${temperament} </div>
                        <div>태생: ${origin} </div>
                    </div>
                </div>
            `;

      // 모달 외부 영역 클릭 시
      this.$imageInfo.addEventListener("click", (e) => {
        if (e.target.className === "ImageInfo") {
          this.onClose();
        }
      });

      // ESC 클릭 시 
      window.addEventListener("keydown", (e) => {
        if (this.$imageInfo.style.display === "block" && e.keyCode === 27) {
          this.onClose();
        }
      });

      // 닫기 버튼 클릭 시
      document.querySelector('.close_btn').addEventListener('click', () => {
          this.onClose();
      })

    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
