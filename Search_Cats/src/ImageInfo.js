// 이미지 클릭 시 상세 페이지
class ImageInfo{
    $imageInfo = null;
    data = null;

    constructor({ $target, data }){
        const $imageInfo = document.createElement('section');
        $imageInfo.className = "ImageInfo";
        this.$imageInfo = $imageInfo;

        // #App의 자식 요소로 추가
        $target.appendChild($imageInfo);

        this.data = data;
        
        this.render()
        console.log(`ImageInfo created`, this);
    }

    // onClick 메소드에 의해서 
    // vislble 속성과 고양이 data를 전달 받습니다.(nextData)
    setState(nextData){
        this.data = nextData;
        this.render();
    }

    render() {
        // 모달? 상세 정보를 보여줌.
        // 단, visible의 값이 true일 때...
        if(this.data.visible){
            // temperament 성격, origin 태생을 다른 api를 호출하여 가져와야합니다.
            const { name, url } = this.data.image;
            // 보여주기
            this.$imageInfo.innerHTML = `
                <div class="content_block">
                    <div class="title">
                        <span>${name}</span>
                    </div>
                    <img url=${url} art=${name}/>
                    <div class="description">
                        <div>성격: null </div>
                        <div>태생: null </div>
                    </div>
                </div>
            `
        }else{
            // console.log('안보임')
        }
    }
}