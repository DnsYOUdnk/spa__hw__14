function UtilsCart () {
    this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ) : [];
    this.dataLocalStorageCatalog = JSON.parse(localStorage.getItem('catalogData'))
    this.cartQuantity = document.querySelector('.header__cart__quantity');
    
    this.addEventAddBtn = () => {
        const addCartButtons = document.querySelectorAll('.catalog__item__button-add')
        addCartButtons.forEach(addButton =>{
            addButton.addEventListener('click', (e) => {                            
                 this.addToCart(e.target.id)
                 this.cartQuantity.classList.add('active')
            })
        })

        const deleteCartButtons = document.querySelectorAll('.catalog__item__button-delete')
        deleteCartButtons.forEach(deleteButton =>{
            deleteButton.addEventListener('click', (e) => {      
                 this.deleteFromCart(e.target.id)
            })
        })
    } 

    this.checkedCart = (idProduct) => {
        return this.cart.findIndex(({id}) => id == idProduct)
    }

    this.addToCart = (idProduct) => {
        const productToCart = this.dataLocalStorageCatalog.find(({id}) => id == idProduct);
        
        if(this.checkedCart(idProduct) != -1) {
            this.cart[this.checkedCart(idProduct)].count +=1
        } else {
            productToCart.count = 1
            this.cart.push(productToCart)
            this.cartQuantity.innerText = `${this.cart.length}`
        }
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    this.deleteFromCart = (idProduct) => {
        const productToCart = this.cart.filter(({id}) => id != idProduct);
        // this.cartQuantity.innerText = `${this.cart.length}`
        localStorage.setItem('cart', JSON.stringify(productToCart))
    }

    this.init = ()=>{
        this.addEventAddBtn()
    }
}

const utilsCart = new UtilsCart()
export default utilsCart