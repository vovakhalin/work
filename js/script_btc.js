"use strict"

const btcPrice = prompt('What is Bitcoin price today?', '');
const btcPriceNumber = Number.parseInt(btcPrice, 10);

const countDol = prompt('How much $ do you have?', '');
const countDolNumber = Number.parseInt(countDol, 10);

const summa = countDolNumber / btcPriceNumber;

if (btcPrice == btcPriceNumber && countDol == countDolNumber){
    alert(`You can buy: ${summa} btc`);
}
else {  
    alert('Please, enter only digit');
}

