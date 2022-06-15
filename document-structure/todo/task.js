const submit = document.querySelector("#tasks__add")
submit.addEventListener("click", (e) => {
    const input = document.querySelector("#task__input")
    e.preventDefault()
    const value = input.value.trim()
    input.value = ""
    if (value === "") {
        return
    }
    const task = document.createElement("div")
    task.classList.add("task")
    const taskTitle = document.createElement("div")
    taskTitle.classList.add("task__title")
    const taskRemove = document.createElement("a")
    taskRemove.classList.add("task__remove")
    taskRemove.innerHTML = "&times;"
    task.appendChild(taskTitle)
    task.appendChild(taskRemove)
    taskTitle.innerText = value
    taskRemove.addEventListener("click", (e) => {
        e.preventDefault()
        task.remove()
    })
    const container = document.querySelector("#tasks__list")
    container.appendChild(task)
})