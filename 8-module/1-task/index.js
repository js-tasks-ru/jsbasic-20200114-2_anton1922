class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
 
  }

  show() {
    //Return promise
    //Download goods from the server
    return fetch(this.productsUrl)
    //Convert the response to an array
    .then(response => response.json())
    //Get the array of products
    .then(arrayProducts => {
      //Template
      const template = `
        <div class="row justify-content-end">
          <div class="col-lg-9">
            <h3 class="section-title">Top Recommendations for You</h3>
            <div class="row homepage-cards">
                <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
            </div>
          </div>
        </div>`;

      //Add the template to the element
      this.el.insertAdjacentHTML('beforeend', template);

      //Find the container for product cards
      let homepageCards = this.el.querySelector('.homepage-cards');

      //Fucntion to create one card of product
      function createProductCard(product) {
        //Set reviews amount = 0
        let reviewsAmount = 0;
        //Check the old price in the product
        if (!product.oldPrice) {
          product.oldPrice = '';
        } 

        //Check the raitng in the product
        if (product.rating) {
          reviewsAmount = product.rating.reviewsAmount;
        }
        //Create and return the template of one product
        return `
          <div data-product-id="${product.id}" class="products-list-product col-md-6 col-lg-4 mb-4">
            <div class="card">
              <div class="card-img-wrap">
                <img class="card-img-top" src=${product.imageUrl}>
              </div>
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <div class="rate">
                  <span class="rate-amount ml-2">${reviewsAmount}</span>
                </div>
                <p class="card-text price-text discount"><strong>${product.price}</strong>
                <small class="ml-2">${product.oldPrice}</small></p>          
                <button class="product-add-to-cart" data-button-role="add-to-cart">
                  Add to cart
                </button>
              </div>
            </div>
          </div>`;
      }

      //Iterate over the array of products
      for (let product of arrayProducts) {
        //Add product card to the container
        homepageCards.insertAdjacentHTML('beforeend', createProductCard(product));
        //Find the container for stars
        let starsContainer = homepageCards.lastChild.querySelector('.rate');
        //Create empty template for stars
        let allStars = '';

        //Check the rating of product and add stars to template
        for (let j = 1; j <= 5; j++) {
          //If the rating = null
          if (!product.rating) {
            allStars += '<i class="icon-star"></i>';
            continue;
          } 
          //If the rating < 5
          if (j > product.rating.stars) {
            allStars += '<i class="icon-star active"></i>';
            continue;
          }

          allStars += '<i class="icon-star checked active"></i>';
        }

        //Add the template of stars to the container
        starsContainer.insertAdjacentHTML('afterbegin', allStars);
      }

      //Create the cart for products
      let cart = [];

      //Add the event listener to the element
      this.el.addEventListener('click', (event) => {
        //Find the taget element
        const target = event.target;
        
        //Key for localStorage
        let productsStoreKey = this.productsStoreKey;

        //Check the target element. If it is button 'Add to cart'
        if (target.dataset.buttonRole == 'add-to-cart') {
          //Find the product card
          let product = target.closest('.products-list-product');
          //Get id of the product from data attr
          let idProduct = product.dataset.productId;

          //Check user consent
          if (confirm('Вы уверенны, что хотите добавить этот товар в корзину?')) {
            //If user say 'YES', iterate over the array of products
            outer: for (let product of arrayProducts) {
              //Find the target product
              if (product.id == idProduct) {

                //Check availability in the cart
                for (let item of cart) {
                  if (product.id == item.id) {
                    alert('Этот товар уже добавлен в корзину!');
                    break outer;
                  }
                }

                //Add to the cart
                cart.push(product);
              }
            }

            //Add products from cart to the localStorage
            localStorage.setItem(productsStoreKey, JSON.stringify(cart));
          }
        }
      });
    });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
