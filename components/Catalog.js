function Catalog () {
    
    this.create = (data) => {
        data = data || [];
        const catalog = document.createElement('div')
        catalog.classList.add('catalog')
        let listItem = '';
        
        data.forEach(({title, id, price, ...a}) => {
            listItem += `<li class="catalog__item">
                        <div class="catalog__item__image">
                            <img src="${a.image}">
                            <div class="catalog__item__title"><a href="#catalog/${id}">${title}</a></div>
                        </div>
                        <div class="catalog__item__description">
                            <div class="catalog__item__option">
                                <div class="catalog__item__price">${price} BYN.</div>
                                <button id="${id}" class="catalog__item__button-add"> + add to cart</button>
                            </div>
                        </div>
                    </li>`
            
        });

        catalog.innerHTML = `<div class="catalog__wrapper">
                                    <ul class="catalog__items">
                                        ${listItem}
                                    </ul>
                            </div>`
        return catalog
    },

    this.createProduct = ({title, description, image, id, price, category }) => {
        const product = document.createElement('div')
        product.classList.add('product')

        product.innerHTML=`
                <div class="product__wraper">
                    <div class="product__image"><img src="${image}"></div>
                    <div class="product__description">
                        <h1>${title}</h1>
                        <h2>${category}</h2>
                        <p>${description}</p>
                        <p class="product__price">${price} BYN</p>
                        <div class="product__buttons">
                            <button id="${id}" class="catalog__item__button-add"> <span>+</span> add to cart</button>
                        </div>
                    </div>
                </div>
                
                <div class="product__back__btn"><a href="#catalog"> Back to the catalog</a></div>
        `
    return product
    }

    this.getProductData = (data) => {
        const idProduct = location.hash.split('/')[1]
        const productData = data.filter(({id}) => id == idProduct )
        return productData[0]
    }

    this.init = async () => {
       const data = await JSON.parse(localStorage.getItem('catalogData'));
       if(location.hash.includes('/')){
           const productData = this.getProductData(data)           
           return this.createProduct(productData)
       } else {
       return this.create(data)
    }
    }
}

const catalog = new Catalog()

export default catalog