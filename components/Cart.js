function Cart () {
    
    this.create = (cartData) => {
        const cart = document.createElement('div')
        cart.classList.add('cart')
        if(cartData.length == 0) {
            cart.innerHTML=`<div class="cart__wrapper">
                                    <div class="cart__gif">
                                    <h2>There are no products in the basket</h2>
                                    <img src="../image/gif/about.gif">
                                    </div>
                            </div>`
        } else {
            let list="";
            let all = 0;
            cartData.forEach(({title, price, count, image, id}) => {
                    all += price*count;
                list += `
                    <div class="cart__product__item">
                        <div class="cart__product__image"><img src="${image}"></div>
                        <div class="cart__product__title catalog__item__title">Product name: <a href="#catalog/${id}" >${title}</a><p>${price} BYN</p></div>
                        <div class="cart__product__count">Count: <button class="cart__product__count__btn" id="${id+'minus'}">-</button>${count}<button class="cart__product__count__btn" id="${id+'plus'}">+</button></div>
                        <div class="cart__product__price">Price: ${(price*count).toFixed(2)} BYN</div>
                        <div class="cart__product__button">
                        <button id="${id}" class="catalog__item__button-delete">Remove the product</button></div>
                    </div>
                `
                cart.innerHTML = `<div class="cart__wrapper">
                                    <div class="cart__product__items">
                                        <h2>Cart</h2>
                                        ${list}
                                    </div>
                                    <div class="cart__all__price">Total: ${all.toFixed(2)} BYN</div>
                                  </div>`
            });
        }

        return cart
    }
    
    this.init = () => {
        const cartLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :  []

        return this.create(cartLocalStorage)
    }
}

const cart = new Cart()
export default cart