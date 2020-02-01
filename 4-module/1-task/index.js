/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
'use strict';

function makeFriendsList(friends) {
  //create list
  let list = document.createElement('ul');

  //create item of list and add to it first name and last name
  friends.forEach(item => {
    let listItem = document.createElement('li');

    listItem.innerHTML = `${item.firstName} ${item.lastName}`;

    list.append(listItem);
  });
  
  //return list 
  return list; 
}
