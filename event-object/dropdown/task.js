const dropdown = document.querySelector(".dropdown")

function initDropdown(dropdown) {
    const value = dropdown.querySelector(".dropdown__value")
    const list = dropdown.querySelector(".dropdown__list")
    const items = [...dropdown.querySelectorAll(".dropdown__item")]

    value.addEventListener("click", (e) => {
        list.classList.toggle("dropdown__list_active")
    })
    for (const item of items) {
        item.addEventListener("click", (e) => {
            e.preventDefault()
            const text = e.target.textContent 
            value.textContent = text
            list.classList.remove("dropdown__list_active")
        })
    }
}
initDropdown(dropdown);