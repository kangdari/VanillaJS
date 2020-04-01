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

let currentIndex = 0;

$container.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex+1) % slide_data.length
    $container.style.left = -200 * currentIndex + 'px'
})

$slide.appendChild($container)
frag.appendChild($slide)
$div.appendChild(frag)
