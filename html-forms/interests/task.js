const interest__check = [...document.querySelectorAll(".interest__check")]
for(const check of interest__check){
    check.addEventListener("change", (e) => {
        const parent = e.target.closest(".interest")
        const children = parent.querySelectorAll(".interests .interest__check")
        for(const child of children){
            child.checked = e.target.checked
        }
    })
}