const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenSum = numbers.filter(number => number % 2 === 0).reduce((fallback, currentValue) => fallback + currentValue);

console.log(evenSum)