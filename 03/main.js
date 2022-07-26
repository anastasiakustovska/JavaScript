//1.1

let age = parseFloat(prompt('Який твій вік?'));

if (age < 0 || isNaN(age)) {
    alert('ERROR');
} else if (age < 12) {
    alert('Дитина');
} else if (age < 18) {
    alert('Підліток');
} else if (age < 60) {
    alert('Дорослий');
} else {
    alert('Пенсіонер');
}

//1.2

let letter = prompt('Яке число?');
switch (letter) {
    case '1':
        alert('!');
        break;
    case '2':
        alert('@');
        break;
    case '3':
        alert('#');
        break;
    case '4':
        alert('$');
        break;
    case '5':
        alert('%');
        break;
    case '6':
        alert('^');
        break;
    case '7':
        alert('&');
        break;
    case '8':
        alert('*');
        break;
    case '9':
        alert('(');
        break;
    case '0':
        alert(')');
        break;
    default:
        alert('А неправильно!');
        break;
}

//1.3

{
    let num1 = parseFloat(prompt('Перше число'));
    let num2 = parseFloat(prompt('Друге число'));
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let sum = 0;

    if (max === min) {
        sum = max;
    } else {
        while (min <= max) {
            sum = sum + min;
            min++;
        }
    }

    alert(sum);
}

//1.4

let number1 = parseFloat(prompt('Перше число'));
let number2 = parseFloat(prompt('Друге число'));
let maxNumber = Math.max(number1, number2);
let minNumber = Math.min(number1, number2);
let maxDivider = 0;

for (let i = 1; i <= minNumber; i++) {
    if (minNumber % i === 0 && maxNumber % i === 0) {
        maxDivider = i;
    }
}

alert(maxDivider);

//1.5

{
    let n = parseFloat(prompt('число'));
    let divisors = '';

    for (let j = 1; j <= n; j++) {
        if (n % j === 0) {
            divisors = divisors + j + ',';
        }
    }

    alert(divisors);
}

//2.1

function checkPalindrome(num) {
    let numString = num.toString();

    return numString.split("").reverse().join("") === numString;
}

let palindromeNumber = prompt('Паліндром?');

if (checkPalindrome(palindromeNumber)) {
    console.log("Is a palindrome", palindromeNumber);
} else {
    console.log("Not a palindrome", palindromeNumber);
}

// 2.2

let deal = parseFloat(prompt('Сума покупки'));
let discount = 0;

if (deal < 0 || isNaN(deal)) {
    alert('ERROR');
} else if (deal >= 200 && deal <= 300) {
    discount = 0.03;
} else if (deal > 300 && deal <= 500) {
    discount = 0.05;
} else if (deal > 500) {
    discount = 0.07;
}

const totalDiscount = discount !== 0 ? deal * discount : 0;

alert(deal - totalDiscount);

// 2.3

let odds = 0;
let evens = 0;

let zeros = 0;
let positive = 0;
let negative = 0;

for (let counter = 0; counter < 10; counter++) {
    let number = parseFloat(prompt('Введи число :' + counter))

    number % 2 === 0 ? evens++ : odds++;

    if (number === 0) {
        zeros++;
    } else {
        number > 0 ? positive++ : negative++;
    }
}

console.log({
    odds, evens, zeros, positive, negative
})

// 2.4

let currentDay = 1;
let showDialog = true;

do {
    let dayName;

    switch (currentDay) {
        case 1:
            dayName = 'Понеділок';
            break;
        case 2:
            dayName = 'a';
            break;
        case 3:
            dayName = 'b';
            break;
        case 4:
            dayName = 'c';
            break;
        case 5:
            dayName = 'd';
            break;
        case 6:
            dayName = 'e';
            break;
        case 7:
            dayName = 'f';
            break;
        default:
            dayName = 'undefined';
            break;
    }


    showDialog = confirm(dayName + ' Wanna see more?');

    currentDay === 7 ? currentDay = 1 : currentDay++;
} while (showDialog);


function getSmaller(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        alert("They are equals");
    }
}

alert(getSmaller(10, 5));

//3.1

let min = 0;
let max = 100;
let isGuessed = false;
let n = 0;

do {
    n = Math.round((max + min) / 2);

    isGuessed = confirm('Твоє число: ' + n);

    if (isGuessed) {
        isGuessed = true;
        break;
    }

    let choice = confirm('Твоє число більше за:' + n);

    choice ? min = n : max = n;
} while (!isGuessed);

console.log(n);

//3.2

function multiplication(number) {
    for (let i = 2; i <= 9; i++) {
        console.log(number * i);
    }
}

for (let i = 2; i <= 9; i++) {
    multiplication(i);
}

//3.3

const MINUTES_PER_DAY = 3600;
const HOURS_PER_DAY = 24;

let date = new Date((parseInt(prompt("рік"))), (parseInt(prompt("місяць"))), (parseInt(prompt("день"))));
let followingDate = new Date(date.valueOf() + (MINUTES_PER_DAY * HOURS_PER_DAY * 1000));

followingDay = followingDate.getDate()
followingMonth = followingDate.getMonth()
followingYear = followingDate.getFullYear()

console.log(followingDay + '.' + followingMonth + '.' + followingYear);