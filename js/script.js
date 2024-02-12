"use strict";

// 1. Задача про ітерацію

function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(9));
console.log(iterativeOddSumTo(10));

// 2. Задача про рекурсію

function recursiveOddSumTo(number) {
  if (number === 1) {
    return 1;
  } else if (number % 2 === 0) {
    return recursiveOddSumTo(number - 1);
  }
  return number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(9));
console.log(recursiveOddSumTo(10));

// 3. Додаткова задача*

const isXOEqual = (string) => {
  let charAmountX = 0;
  let charAmountO = 0;

  for (let char of string.toLowerCase()) {
    if (char === "x") {
      charAmountX += 1;
    }
    if (char === "o") {
      charAmountO += 1;
    }
  }
  return charAmountX === charAmountO;
};

console.log(isXOEqual("ooxx"));
console.log(isXOEqual("xooxx"));
console.log(isXOEqual("ooxXm"));
console.log(isXOEqual("zpzpzpp")); // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo"));
