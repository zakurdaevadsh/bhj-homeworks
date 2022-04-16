const counter = document.getElementById("clicker__counter")
const img = document.getElementById("cookie")
let x = 0;
img.onclick = () => {
    x++ 
    counter.innerText = x;
    if(x%2 === 0){
        img.width = 200 
    } else {
        img.width = 300
    }
}
