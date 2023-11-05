"use strict"

let  age = prompt('Ваш возраст?');
let name = prompt('Ваше имя?');
let a = 10,
    b = 2;

{
// Задание 1

let city = prompt('Ваш город проживания?'),
    phone = prompt('Ваш контактный номер телефона?'),
    email = prompt('Ваш электронный адрес?'),
    company = prompt('Ваше место работы?');

let page = `Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city}  и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`;

document.write(page);
}

{
// Задание 2

let years = 2023 - age;
let birth = `${name} родился в ${years} году.`;

document.write(birth);       
}

{
// Задание 3

let str = '451736';
    sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

(sum1 = sum2) ? console.log('Да') : console.log('Нет');
}

{
// Задание 4

let a4 = 1,
    a1 = 0,
    a2 = -3;

(a4 > 0) ? console.log('Верно') : console.log('Неверно');
(a1 > 0) ? console.log('Верно') : console.log('Неверно');
(a2 > 0) ? console.log('Верно') : console.log('Неверно');
}

{
// Задание 5

let sum = a + b; 
console.log(sum);

let dif = a - b; 
console.log(dif);

let mult = a * b; 
console.log(mult);

let divis = a / b; 
console.log(divis);

if (sum > 1) console.log(sum ** 2);
if (dif > 1) console.log(dif ** 2);
if (mult > 1) console.log(mult ** 2);
if (divis > 1) console.log(divis ** 2);
}

{
// Задание 6

(a > 2 || a < 11) ? console.log('Верно') : console.log('Неверно');
(b >= 6 || b < 14) ? console.log('Верно') : console.log('Неверно');
}

{
// Задание 7

let n = 8;

if (n >= 0 && n <= 14) console.log('Первая четверть часа');
if (n >= 15 && n <= 29) console.log('Вторая четверть часа');
if (n >= 30 && n <= 44) console.log('Третья четверть часа');
if (n >= 45 && n <= 59) console.log('Четвертая четверть часа');
}

{
// Задание 8

let day = 8;

if (day >= 1 && day <= 10) console.log('Первая декада месяца');
if (day >= 11 && day <= 20) console.log('Вторая декада месяца');
if (day >= 21 && day <= 31) console.log('Третья декада месяца');
}

{
// Задание 9

let days = 100,
    years = Math.round(days / 365),
    months = Math.round (days / 31),
    weeks = Math.round(days / 7),
    hours = Math.round(days / 0.041),
    mins = Math.round(days / 0.000694444),
    seconds = Math.round(days / 0.000011574);

if (years >= 1) {
    console.log(years + ' Год');
} else if(years < 1) {
    console.log('Меньше года');
}
if (months >= 1) {
    console.log(months + ' Месяц');
} else if (months < 1) { 
    console.log('Меньше месяца');
}
if (weeks >=1) {
    console.log(weeks + ' Неделя');
} else if (weeks < 1) {
    console.log('Меньше недели');
}

console.log(`${hours} Часы`);
console.log(`${mins} Минуты`);
console.log(`${seconds} Секунды`);
}

// Задание 10

let day = 298,
    month = 5;
    
if (day <= 31) console.log(month = 1);
if (day > 31 && day <= 59) console.log(month = 2);
if (day > 59 && day <= 90) console.log(month = 3);
if (day > 90 && day <= 120) console.log(month = 4);
if (day > 120 && day <= 151) console.log(month = 5);
if (day > 151 && day <= 181) console.log(month = 6);
if (day > 181 && day <= 212) console.log(month = 7);
if (day > 212 && day <= 243) console.log(month = 8);
if (day > 243 && day <= 273) console.log(month = 9);
if (day > 273 && day <= 304) console.log(month = 10);
if (day > 304 && day <= 334) console.log(month = 11);
if (day > 334 && day <= 365) console.log(month = 12);

switch (month) {
    case 1:
        console.log('Зима');
    break;
    case 2:
        console.log('Зима');
    break;
    case 3:
        console.log('Весна');
    break;
    case 4:
        console.log('Весна');
    break;
    case 5:
        console.log('Весна');
    break;
    case 6:
        console.log('Лето');
    break;
    case 7:
        console.log('Лето');
    break;
    case 8:
        console.log('Лето');
    break;
    case 9:
        console.log('Осень');
    break;
    case 10:
        console.log('Осень');
    break;
    case 11:
        console.log('Осень');
    break;
    case 12:
        console.log('Зима');
    break;
}
