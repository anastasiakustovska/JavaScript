// let age = parseFloat(prompt('Який твій вік?'));
//
// if (age < 0 || isNaN(age)) {
//     alert('ERROR');
// } else if (age < 12) {
//     alert('Дитина');
// } else if (age < 18) {
//     alert('Підліток');
// } else if (age < 60) {
//     alert('Дорослий');
// } else {
//     alert('Пенсіонер');
// }
//
// let letter = prompt('Яке число?');
// switch (letter) {
//     case '1':
//         alert('!');
//         break;
//     case '2':
//         alert('@');
//         break;
//     case '3':
//         alert('#');
//         break;
//     case '4':
//         alert('$');
//         break;
//     case '5':
//         alert('%');
//         break;
//     case '6':
//         alert('^');
//         break;
//     case '7':
//         alert('&');
//         break;
//     case '8':
//         alert('*');
//         break;
//     case '9':
//         alert('(');
//         break;
//     case '0':
//         alert(')');
//         break;
//     default:
//         alert('А неправильно!');
//         break;
// }

// let num1 = parseFloat(prompt('Перше число'));
// let num2 = parseFloat(prompt('Друге число'));
// let max = Math.max(num1, num2);
// let min = Math.min(num1, num2);
// let sum = 0;
//
// if (max === min) {
//     sum = max;
// } else {
//     while (min <= max) {
//         sum = sum + min;
//         min++;
//     }
// }
//
// alert(sum);
//
// let number1 = parseFloat(prompt('Перше число'));
// let number2 = parseFloat(prompt('Друге число'));
// let maxNumber = Math.max(number1, number2);
// let minNumber = Math.min(number1, number2);
// let maxDivider = 0;
//
// for (let i = 1; i<= minNumber; i++) {
//    if (minNumber%i===0 && maxNumber%i===0)  {
//        maxDivider=i;
//    }
// }
//
// alert(maxDivider);

// let n = parseFloat(prompt('число'));
// let divisors = '';
//
// for (let j = 1; j<= n; j++){
//  if (n%j===0){
//      divisors = divisors +j + ',';
//  }
// }
//
// alert(divisors);

// let deal = parseFloat(prompt('Сума покупки'));
// let discount = 0;
//
// if (deal < 0 || isNaN(deal)) {
//     alert('ERROR');
// } else if (deal >= 200 && deal <= 300)
// {
//     discount = 0.03;
// }
// else if (deal > 300 && deal <= 500)
// {
//     discount = 0.05;
// }
// else if (deal > 500) {
//     discount = 0.07;
// }
//
// const totalDiscount = discount !== 0 ? deal*discount : 0;
//
// alert(deal-totalDiscount);














