const isStrangeNumber = (num) => {
  let sum = 0;

  // Проверка на отрицательное число и ноль,
  // т.к. странное число не может быть нулем или отрицательным числом.
  if (num <= 0) {
    return false;
  }

  for (let i = 1; i < num; i++) {
    // Если остаток после деления равен нулю, то значение i добавляется к сумме sum.
    if (num % i === 0) {
      sum += i;
    }
  }

  // сравнение num с sum
  return sum === num;
}


// false
console.log(isStrangeNumber(4));
// true
console.log(isStrangeNumber(6));
// false
console.log(isStrangeNumber(645));
// true
console.log(isStrangeNumber(28))