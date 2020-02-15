'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    //create the element
    this.element = element;

    //add the template to the element
    this.element.insertAdjacentHTML('beforeend', this.template);

    //find a collection of menu items 
    const listItems = this.element.querySelectorAll('.list-group-item');

    //find the substrate with class 'backdrop'
    const backdrop = document.querySelector('.backdrop');

    //iterate through a set of menu items
    for (let item of listItems) {
      //add event listener 'pointerenter'
      item.addEventListener('pointerenter', (event) => {
        const target = event.target;

        //add to the drop-down item of the menu class 'show'
        target.querySelector('.list-group-item .dropdown-menu').classList.add('show');

        //add to the 'backdrop' class 'show'
        backdrop.classList.add('show');
      });

      //add event listener 'pointerenter'
      item.addEventListener('pointerleave', (event) => {
        const target = event.target;

        //remove from the drop-down item of the menu class 'show'
        target.querySelector('.list-group-item .dropdown-menu').classList.remove('show');

        ////remove from the 'backdrop' class 'show'
        backdrop.classList.remove('show');
      });

      //add event listener 'click'
      item.addEventListener('click', (event) => {
        //find the link with id of selected item of menu
        let a = event.currentTarget.querySelector('a');

        //activate custom event 'select' with parameter 'id' = selected item of menu id
        event.currentTarget.dispatchEvent(new CustomEvent('select', {
          detail: {id: a.id}
        }));
      });

      //add custom event listener 'select'
      item.addEventListener('select', (event) => {
        console.log('detail.id =', event.detail.id);
      });
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;