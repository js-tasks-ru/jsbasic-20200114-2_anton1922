'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    this.element = parentElement;

    //Template
    const template = `
      <div class="product-list-box">
        <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
      </div>`;

    //Add the template into the element
    this.element.insertAdjacentHTML('beforeend', template);

    //Key for localStorage
    const productsStoreKey = this.productsStoreKey;
    //Find the element with class '.product-list-box'
    const productListBox = this.element.querySelector('.product-list-box');
    //Get an array 'cartList' with products for the cart from localStorage
    let cartList = JSON.parse(localStorage.getItem(productsStoreKey));

    //Function for create product card
    function createProductCard(product) {
      //Set reviews amount = 0
      let reviewsAmount = 0;

      //Check the raitng in the product
      if (product.rating) {
        reviewsAmount = product.rating.reviewsAmount;
      }
      //Create the template of one product in cart list
      let templateProduct = `
       <div data-product-id="${product.id}" class="product-wrapper box-inner-col description-col">
  
        <div class="product-image-container">
          <img class="product-image" src=${product.imageUrl} alt="img">
        </div>
        
        <div class="product-description">
          <h4 class="col-title mb-2">${product.title}</h4>
          <div class="rate"></div>
          <p class="rate-amount d-none d-md-block mt-1">11 reviews</p>
        </div>
        
        <div class="product-price">
          <p class="mb-0 font-weight-light">Price:</p>
          <h4 class="col-title price-text mb-2">${product.price}</h4>
        </div>
        
        <div class="product-remove-button-wrapper">
          <button type="button"
                  data-button-role="checkout-remove-product"
                  class="product-remove-button">
            X
          </button>
        </div>

      </div>`;
      //Add and return product card into the product list
      return productListBox.insertAdjacentHTML('beforeend', templateProduct);
    }

    //Fucntion for create stars in a product card
    function createStars(product) {
      let starsContainer = productListBox.lastChild.querySelector('.rate');
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

      //Add and return the template of stars to the container
      return starsContainer.insertAdjacentHTML('afterbegin', allStars);
    }

    //Function for crete product list of cart
    function createCartList(cartList) {
      productListBox.innerHTML = '';

      for (let product of cartList) {
        createProductCard(product);

        createStars(product);
      }
    }
    
    //Create product list of the cart on the page
    createCartList(cartList);

    //Add event listener on the element
    this.element.addEventListener('click', (event) => {
      //Define the target element
      const target = event.target;

      //Check that target element is button for remove product from the cart
      if (target.dataset.buttonRole == 'checkout-remove-product' && 
        confirm('Вы уверенны, что хотите удалить этот товар из корзины?')) 
      {
        //Find the card removed product
        let productRemoved = target.closest('.product-wrapper');
        //Define the id of removed product
        let productRemovedId = productRemoved.dataset.productId;

        //Iterate over the array 'cartList'
        for (let i = 0; i < cartList.length; i++) {

          if (productRemovedId == cartList[i].id) {
            //Remove removed product from the array 'cartList'
            cartList.splice(i, 1);

            //clear the localStorage
            localStorage.clear();

            //Add to the localStorage new array 'cartList'
            localStorage.setItem(productsStoreKey, JSON.stringify(cartList));

            //Create new product list of the cart on the page
            createCartList(cartList);
          }
        }
      }
    });
    
  }
}

window.CheckoutProductList = CheckoutProductList;
