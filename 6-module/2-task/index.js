'use strict';

class Carousel {

  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    //create a property element
    this.el = element;

    //create a slider template
    const carouselTemplate = `
    <div id="mainCarousel" class="main-carousel slide">
      <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
      </ol>
      <div class="carousel-inner">
        <!--Вот здесь будет активный слайд-->
      </div>
      
      <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>`;

    //add to an element slider template
    this.el.insertAdjacentHTML('beforeend', carouselTemplate);

    //find a container for slides and create such a property
    this.carouselInner = this.el.querySelector('.carousel-inner');

    //create a property number of slide with a value of the first slide
    this.numberSlide = 0;

    //create a slide template and such a property
    this.slideTemplate = `
    <div class="carousel-item active">
      <img src=${this.slides[this.numberSlide].img} alt="Activelide">
      <div class="container">
        <div class="carousel-caption">
          <h3 class="h1">${this.slides[this.numberSlide].title}</h3>
          <div>
            <a class="btn" href="#" role="button">
              View all DEALS
              <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>`;

    //add the first slide to container
    this.carouselInner.insertAdjacentHTML('beforeend', this.slideTemplate);

    //find the active dot indicator and add the 'active' class to it
    const nextActiveIndicator = this.el.querySelector(`*[data-slide-to="${this.numberSlide}"]`);
    nextActiveIndicator.classList.add('active');

    //add event listener to the element
    this.el.addEventListener('click', (event) => {
    //find a target element
      let target = event.target;

      //find a container of indicators
      let carouselIndicators = this.el.querySelector('.carousel-indicators');

      /***CHECK THE TARGET OF THE EVENT***/
      //prev button
      if (target.className == 'carousel-control-prev' || target.className == 'carousel-control-prev-icon') {
      //remove the class 'active from indicator'
        carouselIndicators.querySelector('.active').classList.remove('active');
        
        //check, that the slide is not the first
        if (this.numberSlide == 0) {
        //if the slide is first, then slide number = length - 1
          this.numberSlide = this.slides[this.slides.length - 1].id;
        } else {
        //if the slide is not the first, then reduce the number of the slide by 1 
          this.numberSlide--;
        }

        //find the indicator with attr data-slide-to as such number of active slide and add the class 'active'
        this.el.querySelector(`*[data-slide-to="${this.numberSlide}"]`).classList.add('active');

        //create the new active slide
        this.slideTemplate = `
        <div class="carousel-item active">
          <img src=${this.slides[this.numberSlide].img} alt="Activelide">
          <div class="container">
            <div class="carousel-caption">
              <h3 class="h1">${this.slides[this.numberSlide].title}</h3>
              <div>
                <a class="btn" href="#" role="button">
                  View all DEALS
                  <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>`;

        //add the new slide to container
        this.carouselInner.innerHTML = this.slideTemplate;
      }

      //next button
      if (target.className == 'carousel-control-next' || target.className == 'carousel-control-next-icon') {
      //remove the class 'active from indicator'
        carouselIndicators.querySelector('.active').classList.remove('active');
        
        //check, that the slide is not the last
        if (this.numberSlide == this.slides[this.slides.length - 1].id) {
        //if the slide is first, then slide number = length - 1
          this.numberSlide = 0;
        } else {
        //if the slide is not the last, then increase the number of the slide by 1 
          this.numberSlide++;
        }

        //find the indicator with attr data-slide-to as such number of active slide and add the class 'active'
        this.el.querySelector(`*[data-slide-to="${this.numberSlide}"]`).classList.add('active');

        //create the new active slide
        this.slideTemplate = `
        <div class="carousel-item active">
          <img src=${this.slides[this.numberSlide].img} alt="Activelide">
          <div class="container">
            <div class="carousel-caption">
              <h3 class="h1">${this.slides[this.numberSlide].title}</h3>
              <div>
                <a class="btn" href="#" role="button">
                  View all DEALS
                  <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>`;

        //add the new slide to container
        this.carouselInner.innerHTML = this.slideTemplate;

      }

      //indicators
      if (target.className == 'carousel-indicator') {
      //remove the class 'active from indicator'
        carouselIndicators.querySelector('.active').classList.remove('active');

        //add the class 'active to the active indicator'
        target.classList.add('active');

        //number of the slide = attr data-slide-to of the active indicator
        this.numberSlide = target.dataset.slideTo;

        //create the new active slide
        this.slideTemplate = `
        <div class="carousel-item active">
          <img src=${this.slides[this.numberSlide].img} alt="Activelide">
          <div class="container">
            <div class="carousel-caption">
              <h3 class="h1">${this.slides[this.numberSlide].title}</h3>
              <div>
                <a class="btn" href="#" role="button">
                  View all DEALS
                  <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>`;

        //add the new slide to container
        this.carouselInner.innerHTML = this.slideTemplate;
      }
    });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
