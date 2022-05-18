const buttons = [...document.querySelectorAll(".font-size")]
const book = document.querySelector("#book")
for(const button of buttons) {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        clear()
        e.target.classList.add("font-size_active")
        const size = e.target.dataset.size
        switch(size){
            case "small":
                book.classList.add("book_fs-small")
                break
            case "big":
                book.classList.add("book_fs-big")
                break
        }
    })
}
function clear() {
    book.classList.remove("book_fs-small")
    book.classList.remove("book_fs-big")
    buttons.forEach((button) => {
        button.classList.remove("font-size_active")
    })
}