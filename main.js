let name = 'Anastasia';
let surname='Kustovska'

alert(name+' '+surname);

let firstName = 'Victoria';
let lastName='Kustovska'

alert(firstName+' '+lastName);

/*
let 4irstName = 'Victoria';
let __astName='Kustovska'

let 53a = 'Victoria';
let 6464e='Kustovska'
*/
//single line comment

let my_phone_number = 99; //snake_case
let MyPhoneNumber = 99; //PascalCase
let myPhoneNumber = 99; //camelCase

let yourName = prompt("Як тебе звати?");
alert("Привіт, " + yourName);

const CURRENT_YEAR = 2022;
let yourBirthday = prompt("Який рік народження?");
alert( CURRENT_YEAR - parseInt(yourBirthday));

let length = prompt("Яка довжина сторони квадрату?");
alert(parseFloat(length) * 4);

let radius = prompt("Який радіус кола?");
alert (Math.PI * Math.pow(parseFloat(radius), 2));

let distance = prompt("Яка відстань в кілометрах між містами?");
let time = prompt("За який проміжок часу потрібно дістатись?");
alert(parseFloat (distance)/ parseFloat (time));

const COEFFICIENT= 0.978;
let amount = prompt("Скільки в тебе баксів?");

let result = parseFloat(amount) * COEFFICIENT;
alert(result.toFixed(2));








