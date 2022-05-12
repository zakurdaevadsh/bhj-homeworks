function initTabs(container) {
    const tabs = [...container.querySelectorAll(".tab")]
    const tabContents = [...container.querySelectorAll(".tab__content")]
    let currentIndex = 0

    for(const tab of tabs){
        tab.addEventListener("click", (e) => {
            tabContents[currentIndex].classList.remove("tab__content_active")
            currentIndex = tabs.indexOf(e.target)
            tabContents[currentIndex].classList.add("tab__content_active")
        })
    }
}
const tabs1 = document.querySelector("#tabs1");
initTabs(tabs1);