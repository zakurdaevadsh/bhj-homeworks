const timer = document.getElementById("timer")
let second = Number.parseInt(timer.innerText)
const interval = setInterval(() => {
    second--
    timer.innerText = second
    if (second === 0){
        clearInterval(interval);
        alert("Вы победили в конкурсе!")
    }
}, 1000)