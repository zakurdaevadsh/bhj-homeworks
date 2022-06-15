const links = [...document.querySelectorAll(".has-tooltip")]

for (const link of links) {

    link.addEventListener("click", (e) => {
        e.preventDefault()
        if (!link.querySelector(".tooltip")) {
            const title = link.title
            const tooltip = document.createElement("div")
            tooltip.classList.add("tooltip")
            tooltip.innerText = title
            link.insertAdjacentElement("beforeEnd", tooltip)
            const coords = e.target.getBoundingClientRect()
            tooltip.style.left = coords.left + "px"
            tooltip.style.top = coords.bottom + "px"
        }
        const tooltip = link.querySelector(".tooltip")
        tooltip.classList.toggle("tooltip_active")
    })
}