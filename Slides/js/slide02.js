document.body.innerHTML = '<div></div>'
const $div = document.getElementsByTagName('div')[0]

const frag = document.createDocumentFragment();
const $slide = document.createElement('div')
const $container = document.createElement('div')

$div.className = 'wrapper'
$slide.className = 'slide'
$container.className = 'slide_container'

const slide_data = [1, 2, 3, 4, 5, 6]
$container.style.width = slide_data.length * 200 + 'px' // 600px
slide_data.forEach(item => {
    const $slide_box = document.createElement('div')
    $slide_box.className = 'slide_box'
    $slide_box.innerText = item
    $container.appendChild($slide_box)
})

const $prev = document.createElement('div')
$prev.className= 'prev'
const $next = document.createElement('div')
$next.className= 'next'
$next.innerHTML = '>'
$prev.innerHTML = '<'


let currentIndex = 0
// 이전
$prev.addEventListener('click', (e) => {
    if(currentIndex !== 0){
        currentIndex = (currentIndex-1) % slide_data.length
        // console.log(currentIndex)
        $container.style.left = -200 * currentIndex + 'px'
    }
})
// 다음
$next.addEventListener('click', (e) => {
    if(currentIndex !== slide_data.length - 1 ){
        currentIndex = (currentIndex+1) % slide_data.length
        // console.log(currentIndex)
        $container.style.left = -200 * currentIndex + 'px'
    }
})

frag.appendChild($prev); 
frag.appendChild($slide)
frag.appendChild($next); 

$slide.appendChild($container)
$div.appendChild(frag)
