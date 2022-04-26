const prev = document.querySelector(".slider__arrow_prev")
const next = document.querySelector(".slider__arrow_next")
const items = [...document.querySelectorAll(".slider__item")]
let currentIndex = 0;


function prevHandler(){
    items[currentIndex].classList.remove("slider__item_active")
    currentIndex--
    if(currentIndex === -1){
        currentIndex = items.length - 1
    }
    items[currentIndex].classList.add("slider__item_active")
}
function nextHandler() {
    items[currentIndex].classList.remove("slider__item_active")
    currentIndex++
    if(items.length === currentIndex){
        currentIndex = 0
    }
    items[currentIndex].classList.add("slider__item_active")
}
prev.addEventListener("click", prevHandler)
next.addEventListener("click", nextHandler)