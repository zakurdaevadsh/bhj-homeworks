document.querySelector(".menu_main").onclick = function (event) {
  console.log(event);
  if(event.target.nodeName !=="li") return;
  event.target.nextElementsSibling.classList.toggle("menu_active");
}