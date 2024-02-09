# HW6-prjctr
Основи роботи з функціями

1. Задача про ітерацію

Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

Приклад:

function iterativeOddSumTo(number) {

// тут ваш код

};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25


2. Задача про рекурсію 

Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

Приклад:

function recursiveOddSumTo(number) {

// тут ваш код

};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(9)) // 25
console.log(recursiveOddSumTo(10)) // 25


3. Додаткова задача*

Напишіть стрілочну функцію isXOEqual яка перевіряє чи рядок має однакову кількість символів «x» та «o». Функція повинна повертати логічне значення та бути нечутливою до регістру. Рядок може містити будь-які символи.

const isXOEqual = (str) => {
    // тут ваш код
}

console.log(isXOEqual("ooxx")) // true
console.log(isXOEqual("xooxx")) // false
console.log(isXOEqual("ooxXm")) // true
console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")) // false
