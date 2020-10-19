'use strict';
const ulElement = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('button');



// handle the click the ADD button
addButton.addEventListener('click', clickedButton);

function clickedButton(e) {
  // storing the current value of the input element in variable
  const currentValue = input.value;
  // remove it after clicked button
  input.value = '';

  // list element
  const listItem = document.createElement('li');
  listItem.className = "task-item";
  

  // const checkBox = document.createElement('input');
  // checkBox.type = "checkbox";
  // checkBox.className = "list-check-box";
  
  // delete button element
  const removeIcon = document.createElement('button');
  removeIcon.className = "btn";
  const trashIcon = document.createElement('i');
  trashIcon.className = "fas fa-trash trash-icon";
  removeIcon.appendChild(trashIcon);

  // list input element
  const spanElement = document.createElement('span');

  listItem.appendChild(removeIcon);
  // listItem.appendChild(checkBox);
  listItem.appendChild(spanElement);

  spanElement.textContent = currentValue;

  ulElement.appendChild(listItem);




  




}
