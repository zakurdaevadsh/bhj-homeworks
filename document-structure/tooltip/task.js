const links = [...document.querySelectorAll(".has-tooltip")]

for (const link of links) {
    const title = link.title
    const tooltip = document.createElement("div")
    tooltip.classList.add("tooltip")
    tooltip.innerText = title
    link.insertAdjacentElement("beforeEnd", tooltip)
    link.addEventListener("click", (e) => {
        e.preventDefault()
        const coords = e.target.getBoundingClientRect()
        tooltip.style.left = coords.left + "px"
        tooltip.style.top = coords.bottom + "px"
        tooltip.classList.toggle("tooltip_active")
    })

}