"use strict";

// обрізка строк з ... по

const str = 'Hello world!';

console.log(str.slice(6, 12));

console.log(str.substring(6, 12));

console.log(str.substr(6, 6));

const num = 12.2;
console.log(Math.round(num));   

// округлення числа

const test = '12.2s23px';
console.log(parseInt(test)); 
console.log(parseFloat(test)); 

                /* УРОК 020 */

const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {                  //створення методу
        console.log('Test');
    }
}

const {border, bg} = option.colors;         //деструктиризація
console.log(border);

// option.makeTest();

console.log(Object.keys(option).length);    // кількість властивостей

// console.log(option.name);
// console.log(option['colors']['bg']);

// delete option.name;

// console.log(option);

// перебір властивостями в об'єкті

//let counter = 0;                          // лічильник
for (let key in option){
    if (typeof(option[key]) === 'object'){  // перевірка чи є об'єкт
        for (let i in option[key]){
            console.log(`Властивість ${i} властивості ${key} має значення ${option[key][i]}`);
            //counter++;
        } 
    } else {
        console.log(`Властивість ${key} має значення ${option[key]}`);
        //counter++;
    }
}

//console.log(counter);

                /* УРОК 021 */

const arr = [11, 2, 33, 5, 7];
arr.sort(compareNum);                         //сортування чисел
console.log(arr);

function compareNum(a, b){                    //функція для сортування чисел
    return a - b;    
}

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} всередині масиву ${arr}`);
});

// arr.pop();                       // видалення останього елемента з масиву
// arr.push('hello');               // додавання останього елемента в масив

// console.log(arr);

                                    // перебір елементів масиву
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

                                    // перебір елементів масиву 2
for (let value of arr) {
    console.log(value);
}

                                    // з строки робимо масив, кожен елемент розділений комою ', '
const string = prompt('', '');
const products = string.split(', ');
products.sort();                    // сортування строк
// console.log(products);
                                    // з масиву робимо строки, кожен елемент розділений комою '; '
console.log(products.join('; '));