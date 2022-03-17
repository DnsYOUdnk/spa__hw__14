function Catalog () {
    
    this.getCatalogData = async () => {
        let data = [];

        if(localStorage.getItem('catalogData')){
            data = JSON.parse(localStorage.getItem('catalogData'))
        } else {
            const response = await fetch('https://dummyjson.com/products')
            data = await response.json()            
            data = data.products
            data.forEach(element => element.image = element.images[0])
            const data2 = await this.getCatalogData2();
                  data2.forEach(item => {
                      item.id = item.id + data[data.length-1].id;
                      return item
                  })
            data = data.concat(data2)
            localStorage.setItem('catalogData', JSON.stringify(data))
        }
        return data
    }

    this.getCatalogData2 = async () => {
        let data = [];
            const response = await fetch('https://fakestoreapi.com/products');
            data = await response.json();
        return data
    }

    this.create = (data) => {
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
                                <button id="${id}" class="catalog__item__button-add">add to cart</button>
                            </div>
                        </div>
                    </li>`
            
        });

        catalog.innerHTML = `<div class="container">
                                <div class="catalog__wrapper">
                                    <ul class="catalog__items">
                                        ${listItem}
                                    </ul>
                                </div>
                            </div>`
        return catalog
    },

    this.createProduct = ({title, description, image, id, price, category }) => {
        const product = document.createElement('div')
        product.classList.add('product')

        product.innerHTML=`
            <div class="container">
                <div class="product__wraper">
                    <h1>${title}</h1>
                    <h2>${category}</h2>
                    <img src="${image}">
                    <p>${description}</p>
                    <p>${price} BYN</p>
                </div>
            </div>
        `
    return product
    }

    this.getProductData = (data) => {
        const idProduct = location.hash.split('/')[1]
        const productData = data.filter(({id}) => id == idProduct )
        return productData[0]
    }

    this.init = async () => {
       const data = await this.getCatalogData();
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