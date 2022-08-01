const modal = document.querySelector("#subscribe-modal")
if(document.cookie === ""){
    modal.classList.add("modal_active")
    const close = document.querySelector(".modal__close")
    close.addEventListener("click", () => {
        modal.classList.remove("modal_active")
        document.cookie = "1"
    })
}