const holes = document.querySelectorAll(".hole")
const dead = document.querySelector("#dead")
let deadCounter = 0;
const lost = document.querySelector("#lost")
let lostCounter = 0;
const handler = (e) => {
    const hole = e.target
    if(hole.classList.contains("hole_has-mole")){
        deadCounter++ 
       if(deadCounter === 10){
          alert("Вы победили!")
          deadCounter = 0 
          lostCounter = 0
        }
        dead.innerText = deadCounter
    } else {
        lostCounter++
        if(lostCounter === 5){
            alert("Вы проиграли.")
            deadCounter = 0 
            lostCounter = 0
        }
        lost.innerText = lostCounter
    }
}
for(const hole of [...holes]){
    hole.onclick = handler
}