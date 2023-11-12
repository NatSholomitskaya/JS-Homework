"use script"

{
/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.*/

function example(a, b, c) {
    return (a - b) / c;
};

example();
console.log(example(5, 1, 2));
}

{
/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передпется параметром. */

function cube(a) {
    return a ** 3;
};

cube();
console.log(cube(6));

function square(a) {
    return a ** 2;
};

square();
console.log(square(6));
}

{
/* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.*/

function min (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

min();
console.log(min(7, 9));

function max (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

max ();
console.log(max(6, 9));
}

{
/* 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/

let array = [];

function createArray() {
    let chees = true;
    while(chees) {
        let qwest = prompt('Введите число');
            if (qwest === '') {
                chees = false;
            }
        array.push(qwest);
    }
}

createArray();

function showArray() {
    console.log(array);
};

showArray();
}

{
/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/


function isEven(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEven();
console.log(isEven(13));
}

{
/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей   задачи.*/

function newArr(a6) {
    let array6 = [];
    for (let i =0; i < a6.length; i++) {
        if (isEven(a6[i])) {
            array6.push(a6[i]);
        }
    }
    return array6;
}

console.log(newArr([59, 54, 76, 20, 31, 6]));
}

{
/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы). Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом*/

let symvol = prompt('Введите символ');
function pir(n) {
  for (let i = 1; i <= n; i++) {
    let m = '';
    for(let j = 0; j < i; j++) {
      m += symvol == undefined || symvol.length-1 || symvol == ' ' ? i : symvol;
    };
    console.log(m +'\n');
  }
}

pir(prompt('Введите число строк'));
}

{
/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек. Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.*/

let i = 0,
    j = 0;
let maxx = 7;
let space = '',
    star = '';

while (i < maxx) {
space = '';
star = '';
for (j = 0; j < maxx - i; j++) space += ' ';
for (j = 0; j < 2 * i + 1; j++) star += '*';
    console.log(space + star);
    i++;
}
}

{
/*9. Напишите ф-ию, которая возвращает массив заполненныый числами Фибоначи от 0 до 1000. */
function fibonacci() {
    let array = [0, 1];
    for (let i = 1; array[i] < 1000; i++) {
        array.push(array[i - 1] + array[i]);
    }
    return array;
}
console.log(fibonacci());
}

{
/*10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его циффры. И так, пока сумма не станет однозначным числом(9 и менее). Исп. рекурсию. */
function sumNumerals(n) {
    let n_str = String(n);
    let sum = 0;
    for (let i = 0; i < n_str.length; i++) {
        sum += +n_str[i];
    }
    if (sum > 9) return sumNumerals(sum);
    else return sum;
}
console.log(sumNumerals(177));
}