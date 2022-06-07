const products = [...document.querySelectorAll(".product")]
const basketProducts = []
const basket = document.querySelector(".cart__products")
for (const product of products){
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
        if (n === 0){
            return
        }
        value.innerText = n
    })
    const add = product.querySelector(".product__add")
    add.addEventListener("click", () => {
        if(basketProducts.includes(product.dataset.id)) {
            const basketValue = basket.querySelector(`[data-id="${product.dataset.id}"] .cart__product-count`)
            const n = Number.parseInt(value.innerText)
            const n1 = Number.parseInt(basketValue.innerText)
            basketValue.innerText = n + n1
            return
        } 
        basketProducts.push(product.dataset.id)
        const cart = document.createElement("div")
        cart.classList.add("cart__product")
        cart.dataset.id = product.dataset.id
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