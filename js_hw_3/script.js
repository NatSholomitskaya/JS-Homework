"use script"

// {
// // Задание 1

// for (let a1 = 1; a1 <= 50; a1++) {
//     console.log(a1);
// }

// for (let b1 = 35; b1 >= 8; b1--) {
//     console.log(b1);
// }
// }

// {
// // Задание 2
// console.log('Задание 2');

// let a2 = 89;
// while (a2 >= 11) {
//     document.write(a2 + '<br/>');
//     a2--;
// }
// }

// {
// // Задание 3

// let a3 = 100;
//     sum = 0;

// for (let i = 1; i <= a3; i++) {
//     sum += i;
//     console.log(sum);
// }
// }

// {
// // Задание 4

// let a4 = 5;
// let sum4 = 0;

// for (let i4 = 1; i4 <= a4; i4++) {
//     sum4 = 0;

//     for (let j4 = 1; j4 <= i4; j4++) {
//         sum4 += j4;
//     }
    
//     console.log(`В числе ${i4} сумма составляет ${sum4}`);
// }
// }

// {
// // Задание 5

// let b5 = 8;

// while(b5 <= 56) {
//     b5++;
//     if(b5 % 2 === 1) continue;
    
//     console.log(b5); // Почему в ответ не вошло число 8??
// }

// for(let b5 = 8; b5 <= 56; b5++) {
//     if (b5 % 2 == 1) continue

//     console.log(b5);
// }
// }

// {
// // Задание 6

// for (let a6 = 2; a6 <= 10; a6++) {
//     sum6 = 0;

//     for (let b6 = 1; b6 <= 10; b6++) {
//         sum6 = a6 * b6;
//         document.write(`${a6} * ${b6} = ${sum6} <br/>`);
//     }
// }
// }

// {
// // Задание 7

// let n = 1000;
//     num = 0;

// while (n > 50) {
//     num++;
// 	n = n / 2;
//     console.log(n, num);
// }
// }

// {
// // Задание N8

// let sum8 = 0,
//     a8 = 0;

// for (let num8; num8 != 0 && num8 != ' ';) {
//     num8 = +prompt('Введите число!');

//     if (isNaN(num8)) {
//         alert('Вы ввели не число! Будьте внимательны!');
//         continue;
//     }

//     if (num8 != 0) a8++;

//     sum8 += num8;

//     console.log(num8);
// }

// console.log('Сумма: ', sum8);
// console.log('Среднее арифметическое: ', sum8 / a8);
// }

// {
// // Задание 9 -  Решение загуглено, сама не смогла решить

// let strNums = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

// let min;
// let max;

// let num9 = '';

// for (let i = 0; i < strNums.length; i++) {
//     if (strNums[i] != ' ') {
//         num9 += strNums[i];
//         if (i != strNums.length-1) continue;   
//     }

//     num9 = +num9;

//     if (min == undefined) min = num9;
//     if (max == undefined) max = num9;

//     if (num9 > max) max = num9;
//     if (num9 < min) min = num9;

//     num9 = '';
// }
// console.log('Минимальное число: ', min, 'Максимальное число: ', max);
// }

//{
// //Задание 10

//{
// // a. разбивает число n на цифры и выводит их на экран;
// let n = 678;
// n = String(n);

// for (let i = 0; i < n.length; i++){
//     console.log(n[i]);
// }
//}

//{
// b. подсчитывает сколько цифр в числе n;

//let n = 678;
// n = String(n);

//console.log('Количество цифр: ', n.length);
//}

//{
// c. находит сумму цифр числа n;
// let n = 678;
// let sum = 0;
// n = String(n);
// for (let i = 0; i <= n.length - 1; i++) {
//     sum += +n[i];
//     console.log(sum);
// }
//}

//{
// d. меняет порядок цифр числа n на обратный. Не совсем верно. По-другому не додумалась!!((
// let n = 678;
// let rev = 0;
// n = String(n);
//  for (let i = n.length - 1; i >= 0; i--) {
//     rev += n[i];
//     console.log(rev);
// }
//}