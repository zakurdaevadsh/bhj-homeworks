async function main() {
    const res = await fetch("https://netology-slow-rest.herokuapp.com/")
    const data = await res.json()
    const valutes = Object.values(data.response.Valute)
    let items = []
    for (const valute of valutes){
        const item = `<div class="item__code">
                        ${valute.CharCode}
                    </div>
                    <div class="item__value">
                        ${valute.Value}
                    </div>
                    <div class="item__currency">
                        ${valute.Name}
                    </div>`
        items.push(item)
    }
    items = items.join("")
    const container = document.querySelector("#items")
    container.innerHTML = items
    const loader = document.querySelector("#loader")
    loader.classList.remove("loader_active")
}
main()
