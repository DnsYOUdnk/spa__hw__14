function HomePage () {
    this.getCatalogData = async () => {
        let data = [];

        if(localStorage.getItem('catalogData')){
            data = JSON.parse(localStorage.getItem('catalogData'))
        } else {
            const response = await fetch('../data/products/products.js')
            data = await response.json()
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

    this.randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

    this.create = (data) => {
        const homePage = document.createElement('div')
        homePage.classList.add('home__page');
        const gifImage = JSON.parse(localStorage.getItem('data'))[0].imageGif;

        let listItem = '';

        const randomNum = this.randomInteger(0,data.length-10)
        data = data.slice(randomNum,randomNum+10)
        let i =0;
        data.forEach(({ id, image}) => {
            listItem += `<li class="home__page__item">
                            <div class="home__page__item__image">
                                <div class="home__page__item__title"><a href="#catalog/${id}"><img src="${image}"></a></div>
                            </div>
                        </li>
                        <li class="home__page__item">
                            <div class="home__page__item__image">
                                <div class="home__page__item__title"><img src="${gifImage[i]}"></div>
                            </div>
                        </li>
                        `
            i++;
        });

        homePage.innerHTML = `<div class="home__page__wrapper">
                                    <ul class="home__page__items">
                                        ${listItem}
                                    </ul>
                            </div>`
        return homePage
    }

    this.init = async () => {
        const data = await this.getCatalogData();
        return this.create(data)
    }
}

const homePage = new HomePage()

export default homePage