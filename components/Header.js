import nav from './Nav.js'
function Header () {
    this.create = () =>{
        const header = document.createElement('header');
        header.classList.add('header');
        const lengthCart = JSON.parse(localStorage.getItem('cart')) || [];

        header.innerHTML=`<div class="container">
                                <div class="header__wrapper">
                                    <div class="header__logo">
                                        <a href="/">
                                            <img class="header__logo__image" src="../image/LOGO.png">
                                        </a>
                                    </div>
                                    ${nav.outerHTML}
                                    <div class="header__cart">
                                        <a href="#cart"><img src="../image/cart.png"></a>
                                        <span class="header__cart__quantity ${lengthCart.length > 0 ? 'active' : ''}">
                                            ${lengthCart.length > 0 ? lengthCart.length : ''}
                                        </span>
                                        
                                    </div>
                                </div>
                          </div>`
        return header
    }

    this.init = () => {
        return this.create()
    }
}

const header = new Header().init()

export default header