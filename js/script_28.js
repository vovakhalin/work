"use strict";

const box = document.getElementById('box');

// const btns = document.getElementsByTagName('button');
const btns = document.getElementsByTagName('button');


const circle = document.getElementsByClassName('circle');
// console.log(circle); 

const hearts = document.querySelectorAll('.heart');
// console.log(hearts); 

// hearts.forEach(items => {
//     console.log(items);
// }); 

const oneHeart = document.querySelector('.heart'); // перший елемент
const wrapper = document.querySelectorAll('.wrapper');
// console.dir(box);

// box.style.background = 'green';
// box.style.width = '450px';
box.style.cssText = 'background-color: green; width: 500px';    // властивості

btns[3].style.borderRadius = '50%';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.cssText = 'background-color: green; border: 1px solid black';
} */

hearts.forEach (item => {                                 // надати властивість всім елементам
    item.style.background = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('Hello World');
div.classList.add('black');                              // додати клас елементу

document.body.append(div);
// document.querySelector('.wrapper').append(div);
// document.querySelector('.circle').append(div);

//wrapper.prepend(div);                                    // втавити в кінець wrapper
//wrapper.prependChild(div);                                // (старий метод) втавити в кінець wrapper

//hearts[1].after(div);                                   // вставити після hearts[1]
//hearts[1].befor(div);                                   // вставити до hearts[1]
//wrapper.insertBefor(div, hearts[0]);                      // (старий метод) втавити

//hearts[0].remove();                                     // видалити
//wrapper.removeChild(hearts[1]);                             // (старий метод)

//hearts[1].replaceWith(circle[2]);

div.innerHTML = '<h1>Hello World</h1>';                    // додавання НТМL коду

// div.textContent = 'Hello';                                      // додавання тексту

div.insertAdjacentHTML("beforeend", '<h1>Good night</h1>');         // додати після елемента/до елемента