const products = [...document.querySelectorAll(".product")]


for (const product of products) {
    const id = product.dataset.id
    console.log(id)
    const inc = product.querySelector(".product__quantity-control_inc")
    const dec = product.querySelector(".product__quantity-control_dec")
    const value = product.querySelector(".product__quantity-value")
    inc.addEventListener("click", () => {
        let n = Number.parseInt(value.innerText)
        value.innerText = n + 1
    })
    dec.addEventListener("click", () => {
        let n = Number.parseInt(value.innerText)
        n--
        if (n === 0) {
            return
        }
        value.innerText = n
    })
    const add = product.querySelector(".product__add")
    add.addEventListener("click", () => {
        const basket = document.querySelector(".cart__products")
        const basketProducts = [...basket.querySelectorAll(".cart__product")]
        const basketProduct = basketProducts.find((product) => product.dataset.id === id)
        if (basketProduct) {
            const basketValue = basketProduct.querySelector(".cart__product-count")
            const n = Number.parseInt(value.innerText)
            const n1 = Number.parseInt(basketValue.innerText)
            basketValue.innerText = n + n1
            return
        }
        const cart = document.createElement("div")
        cart.classList.add("cart__product")
        cart.dataset.id = id
        const image = document.createElement("img")
        image.classList.add("cart__product-image")
        const productImage = product.querySelector(".product__image")
        image.src = productImage.src
        const cartCount = document.createElement("div")
        cartCount.classList.add("cart__product-count")
        cart.appendChild(image)
        cart.appendChild(cartCount)
        cartCount.innerText = value.innerText
        basket.appendChild(cart)

    })
}