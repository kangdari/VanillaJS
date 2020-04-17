// 이미지 클릭 시 상세 페이지
class ImageInfo {
  $imageInfo = null;
  data = null;
  onClose = null;

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
  // vislble 속성과 고양이 data를 전달 받습니다.(nextData)
  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    // 모달? 상세 정보를 보여줌.
    // 단, visible의 값이 true일 때...
    if (this.data.visible) {
      this.$imageInfo.style.display = "block";

      // temperament 성격, origin 태생을 다른 api를 호출하여 가져와야합니다.
      const { name, url } = this.data.image;
      // 보여주기
      this.$imageInfo.innerHTML = `
                <div class="content_block">
                    <div class="title">
                        <span>${name}</span>
                        <button class="close_btn">X</button>
                    </div>
                    <img src=${url} art=${name}/>
                    <div class="description">
                        <div>성격: null </div>
                        <div>태생: null </div>
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
