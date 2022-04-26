const menuLinks = [...document.querySelectorAll(".menu__link")]
for (const menuLink of menuLinks){
  menuLink.addEventListener("click", handler)
}

function handler(e){
  if(e.target.nextElementSibling === null){
    return
  }
  e.preventDefault()
  e.target.nextElementSibling.classList.toggle("menu_active")
}