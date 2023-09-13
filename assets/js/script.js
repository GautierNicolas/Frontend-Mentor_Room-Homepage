const slides = document.querySelectorAll('.top-img')
const rightSlide = document.getElementsByClassName('right-swipe-btn')
const leftSlide = document.getElementsByClassName('left-swipe-btn')
let currentSlide = 0

let index = 0

function getNextImage() {
    console.log(index)
    index++
    if(index >= slides.length) {
        index = 0
    }
}

function getPreviousImage() {
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


rightSlide[0].addEventListener('click', function() {
    getNextImage()
    clickToSlide()
})

leftSlide[0].addEventListener('click', function() {
    getPreviousImage()
    clickToSlide()
})
