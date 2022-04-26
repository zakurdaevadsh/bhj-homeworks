const modalMain = document.getElementById("modal_main")
const modalSuccess = document.getElementById("modal_success")
const modalSuccessClose = document.querySelector("#modal_success .modal__close")
const modalMainClose = document.querySelector("#modal_main .modal__close")
const showSuccess = document.querySelector(".show-success")

modalMain.classList.add("modal_active")
showSuccess.addEventListener("click", () => {
    modalSuccess.classList.add("modal_active")
})
modalSuccessClose.addEventListener("click", () => {
    modalSuccess.classList.remove("modal_active")
})

modalMainClose.addEventListener("click", () => {
    modalMain.classList.remove("modal_active")
})
