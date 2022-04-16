const timer = document.getElementById("timer")
let second = Number.parseInt(timer.innerText)
setInterval(() => {
    second--
    timer.innerText = second
    if (second === 0){
        alert("Вы победили в конкурсе!")
    }
}, 1000)