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

                /* УРОК 020. Об'єкти, дестриктуризація */

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

                /* УРОК 021 . Масиви і псевдомасиви*/

const arr = [11, 2, 33, 5, 7];
arr.sort(compareNum);                                       //сортування чисел
console.log(arr);

function compareNum(a, b){                                  //функція для сортування чисел
    return a - b;    
}

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} всередині масиву ${arr}`);   //перебір масиву
});

arr.forEach((item, i) => {                                  //перебір масиву(стрілочна)
     console.log(`${i}: ${item} всередині масиву ${arr}`);
 });


 arr.pop();                                                // видалення останього елемента з масиву
 arr.push('hello');                                        // додавання останього елемента в масив

// console.log(arr);

                                                            // перебір елементів масиву
 for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
 }

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

                /* УРОК 022 . Передача по посиланню  */

                                    // копіювання властивостей об'єкта
function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 10,
        y: 3
    }
};

const newNumber = copy(numbers);        // поверхневе копіювання

newNumber.a = 10;

console.log(numbers);
console.log(newNumber);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));    // з'єднання двох об'єктів

const clon = Object.assign({}, add);    // з'єднання двох об'єктів
clon.d = 11;

console.log(clon);
console.log(add);

const oldArr = ['a', 'b', 'c'];         // поверхневе копіювання масивів
const newArr = oldArr.slice();
newArr[0] = 't';

console.log(oldArr);
console.log(newArr);

                                        // розворіт масивів
const video = ['youtube', 'vimeo', 'vlc'],  
     blogs = ['wordpress', 'livejornal', 'bloger'],
     internet = [...video, ...blogs, 'Vova', 'Olha'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [1, 4, 6];

log(...nums);

const q = {                                            // розворіт об'єктів
    rr: 1,
    tt: 2
};

const qCopy = {...q};
qCopy.tt = 5;

console.log(q);
console.log(qCopy);

                /* УРОК 023. Прототипи  */

const soldier = {
    health: 400,
    armor: 300,
    sayHello: function(){
        console.log('Hello');
    }
};

// const john = {
//     health: 250
// };

// john.__proto__ = soldier;                            // прототип(застаріле)

const john = Object.create(soldier);

console.log(john);
john.sayHello();

// Object.setPrototypeOf(john, soldier);                // прототип



                /*  УРОК 026. Линамічна типізація   */

                                                        // To String
                                                        // 1)
console.log(typeof(String(null)));
console.log(typeof(String(325)));
                                                        // 2)
console.log(typeof(325 + ''));             

const nam = 5;
console.log('https://www.ukr/net/' + nam);              // interpolation
                                                        
                                                        // To Number
                                                        // 1)
console.log(typeof(Number('5')));
console.log(Number('5'));
                                                        // 2)
console.log(typeof((+'5')));
console.log((+'5'));
                                                        // 3)
console.log(typeof(parseInt('15px', 10)));

                                                        // To Boolean
// 0, "", Nan, undefined, null => false                 1)
                                                        // 2)
console.log(typeof(Boolean('5')));
                                                        // 3)
console.log(typeof(!!'sd5'));



