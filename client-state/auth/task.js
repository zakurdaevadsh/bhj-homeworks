if (localStorage.getItem("userid")) {
    const welcome = document.querySelector("#welcome")
    welcome.classList.add("welcome_active")
    const userid = document.querySelector("#user_id")
    userid.innerText = localStorage.getItem("userid")
}

const login = document.querySelector("input[name='login']")
const password = document.querySelector("input[name='password']")
const submit = document.querySelector("#signin__form")
submit.addEventListener("submit", async (e) => {
    e.preventDefault()
    e.stopPropagation()
    const data = new FormData()
    data.append("login", login.value)
    data.append("password", password.value)
    const res = await fetch("https://netology-slow-rest.herokuapp.com/auth.php", {
        method: "POST",
        body: data
    })
    const body = await res.json()
    if (!body.success) {
        alert("Неверный логин/пароль")
        return false
    }
    const welcome = document.querySelector("#welcome")
    welcome.classList.add("welcome_active")
    const userid = document.querySelector("#user_id")
    userid.innerText = body.user_id
    localStorage.setItem("userid", body.user_id)
})
