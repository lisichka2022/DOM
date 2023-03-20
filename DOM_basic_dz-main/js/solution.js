'use strict'
let list = document.querySelector('ul');
let itemList = list.querySelectorAll('li');
let textArray= [];
for (let item of itemList) {
 textArray.push(item.textContent);}
console.log(`Общее количество элементов:  ${itemList.length}`);
console.log(textArray);