const holes = document.querySelectorAll(".hole")
const dead = document.querySelector("#dead")
let d = 0;
const lost = document.querySelector("#lost")
let l = 0;
const handler = (e) => {
    const hole = e.target
    if(hole.classList.contains("hole_has-mole")){
       d++ 
       if(d === 10){
          alert("Вы победили!")
          d = 0 
          l = 0
        }
        dead.innerText = d
    } else {
        l++
        if(l === 5){
            alert("Вы проиграли.")
            d = 0 
            l = 0
        }
        lost.innerText = l
    }
}
for(const hole of [...holes]){
    hole.onclick = handler
}