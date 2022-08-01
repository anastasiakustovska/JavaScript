//1.1

function firstFunction() {
    return 1;
}

firstFunction();

let secondFunction = function (number) {
    alert(number);
}

secondFunction(4);

let thirdFunction = () => {
    return 'arrow';
}

thirdFunction();

let fourthFunction = num => alert(num);

fourthFunction(5);

//1.2

function getSquare(width, height) {
    return width * height;
}

let result = getSquare(10, 9);
alert(result);

//1.3

let guessNumber = (num1, num2) => {
    if (num1 === num2) {
        return 0;
    }

    return num1 > num2 ? 1 : -1;
}

//1.4

let factorial = (number) => {
    if (number === 0 || number === 1) {
        return 1;
    }

    let fact = 1;

    for (let i = 2; i <= number; i++) {
        fact *= i;
    }

    return fact;
}

//1.5
function getNumbers(number1, number2, number3) {
    return Number(String(number1) + String(number2) + String(number3));
}

let res = getNumbers(1, 4, 9)
alert(res);

//1.6

function countRectangle(width, height = null) {
    if (!height) {
        return width * width;
    }

    return width * height;
}

//2.1 and 2.2

let isPerfectNumber = (number) => {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum = sum + i;
        }
    }

    return number === sum;
}

let getRangePerfectNumbers = function (min, max) {
    if (min > max && min === max) {
        return;
    }

    for (let i = min; i <= max; i++) {
        let isPerfect = isPerfectNumber(i);

        if (isPerfect) {
            console.log('Perfect number: ', i)
        }
    }
}

getRangePerfectNumbers(1, 500);
