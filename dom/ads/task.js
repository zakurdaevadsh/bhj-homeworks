function initRotator (container) {
    const cases = [...container.querySelectorAll(".rotator__case")]
    let index = 0
    setInterval(() => {
        cases[index].classList.remove("rotator__case_active")
        index++
        if(index === cases.length) {
            index = 0
        }
        cases[index].classList.add("rotator__case_active")
    }, 1000) 
}
const container = document.querySelector(".card")
initRotator (container)