const reveals = [...document.querySelectorAll(".reveal")]
document.body.onscroll = () => {
    for (const reveal of reveals) {
        const { top, bottom } = reveal.getBoundingClientRect()
        if (top > window.innerHeight) {
            reveal.classList.remove("reveal_active")
            continue
        }
        if (bottom < 0) {
            reveal.classList.remove("reveal_active")
            continue
        }
        reveal.classList.add("reveal_active")
    }
}
