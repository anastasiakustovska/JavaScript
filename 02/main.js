let num1 = 0.1;
let num2 = 0.2;

console.log((num1 + num2).toFixed(1));
console.log('======');
let line = '1';
let number = 2;

console.log(parseInt(line) + number);
console.log('======');

const MG_GB = 1024;
const FILE_SIZE = 820;

let amount = prompt('Який обсяг флешки?')
let totalFiles = amount * MG_GB / FILE_SIZE;

console.log(Math.floor(totalFiles));
console.log('======');

let sum = parseFloat(prompt('Скільки в тебе бабла?'));
let price = parseFloat(prompt('Скільки коштує одна?'));

let quantity = Math.floor(sum / price);
let spend = quantity * price;
let change = sum - spend;

console.log(quantity);
console.log(change);

let numbers = parseInt(prompt('Пиши сюди циферки'));

if (numbers < 100 || numbers > 999) {
    alert("Неправильно");
} else {
    let result = numbers % 10; // take last digit from number
    numbers = Math.floor(numbers / 10); // remove last digit from number

    result = (result * 10) + (numbers % 10);
    numbers = Math.floor(numbers / 10);

    result = (result * 10) + numbers;

    alert(result);
}

let money = prompt("Скільки грошей є?");
const PERCENTAGE = 5;
const MONTH = 12;
const TERM = 2;
let income = money * PERCENTAGE / 100;
let profit = income / MONTH * TERM;
alert(profit.toFixed(2));

// 2 && 0 && 3 - false

//2 || 0 || 3 - true

//2 && 0 || 3 - true