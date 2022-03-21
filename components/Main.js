import { title as pageTitle } from './Head.js'
function Main () {
    this.main;
    this.data = JSON.parse(localStorage.getItem('data'))

    this.create = () => {
        this.main = document.createElement('main');
        this.main.classList.add('main');
        this.container = document.createElement('div');
        this.container.classList.add('container') 
        
        this.main.append(this.container)

        window.addEventListener('hashchange', () => {
            this.render(location.hash)
        })
    },

    this.render = (hash) => {
        const slugOfHash = hash? hash.slice(1) : 'home';
        if(slugOfHash == 'cart') {
            import("./Cart.js").then(cartData => {
                const cart = cartData.default.init();
                this.container.innerHTML = cart.outerHTML
                import('../utils/UtilsCart.js').then(responseUtils => {
                    responseUtils.default.init()
                })   
            })
        } else {
            const componentData = this.data.filter(({ slug }) => slugOfHash.includes(slug))
            const { content, title } = componentData[0];

            pageTitle.innerHTML= title;

            this.container.innerHTML= !slugOfHash.includes('/') ? `<div class="main__title__wrapper">
                                    <h1>${title}</h1>
                                    <p>${content}</p>
                                </div>` : '';
                                
            if (slugOfHash.includes('catalog')) {
                import('./Catalog.js').then(responseCatalog => {
                    responseCatalog.default.init().then(catalogData => {
                    this.container.appendChild(catalogData)
                    import('../utils/UtilsCart.js').then(responseUtils => {
                        responseUtils.default.init()
                    })                   
                    })
                })
            } else if (slugOfHash.includes('home')) {
                import('./HomePage.js')
                .then(responseCatalog => {
                    responseCatalog.default.init().then(catalogData => {
                    this.container.appendChild(catalogData)
                    })
                })
            }
        }
    }    

    this.init = () => {
        this.create()
        this.render(location.hash)
        return this.main
    }
}

const main = new Main().init()

export default main