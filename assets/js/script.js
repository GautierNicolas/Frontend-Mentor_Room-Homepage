const slides = document.querySelectorAll('.top-img')
const textSlides = document.querySelectorAll('.slide-text')
const rightSlide = document.getElementsByClassName('right-swipe-btn')
const leftSlide = document.getElementsByClassName('left-swipe-btn')

let index = 0

function getNext() {
    console.log(index)
    index++
    if(index >= slides.length) {
        index = 0
    }
}

function getPrevious() {
    index--
    if(index <= 0) {
        index = 2
    }
}

function clickToSlide() {
    for (let slide of slides) {
        slide.classList.remove('slide-active')
    }
    slides[index].classList.add('slide-active')
}

function clickToSlideText(){
    for(let text of textSlides){
        console.log("🚀 ~ file: script.js:32 ~ clickToSlideText ~ text:", text)
        text.classList.remove('slide-text-active')
    }
    textSlides[index].classList.add('slide-text-active')
}

rightSlide[0].addEventListener('click', function() {
    getNext()
    clickToSlide()
    clickToSlideText()
})

leftSlide[0].addEventListener('click', function() {
    getPrevious()
    clickToSlide()
})
