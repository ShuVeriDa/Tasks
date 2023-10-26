const MathX = (function() {
  // Функция для вычисления чисел Фибоначчи
  const calculateFibonacci = (n) => {
    return Array.from({ length: n + 1 }).reduce((acc, _, i) => {
      // Если i меньше или равен 1, добавляем его в acc.
      if (i <= 1) {
        acc.push(i);
      } else {
        // иначе, вычисляем следующее число Фибоначчи и добавляем его в acc.
        const nextFib = acc[i - 1] + acc[i - 2];
        acc.push(nextFib);
      }
      return acc; // Возвращаем обновленный массив acc
    }, []);
  }

  // Функция isPrime для проверки, является ли число простым.
  const isPrime = (num) => {
    // Если число меньше 2, оно не является простым.
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      // Если остаток после деления равен нулю, тогда оно не является простым
      if (num % i === 0) {
        return false;
      }
    }

    // Если не было делителей, число считается простым.
    return true;
  }

  // Функция для поиска всех простых чисел до числа N.
  function calculatePrimesUpToN(n) {
    return Array.from({ length: n - 1 }).reduce((acc, _, i) => {
      const num = i + 2;

      // Если число простое, добавляем его в массив acc.
      if (isPrime(num)) {
        acc.push(num);
      }

      // Возвращаем обновленный массив acc после каждой итерации.
      return acc;
    }, []);
  }

  // Возвращаем объект, содержащий функции, как часть библиотеки MathX.
  return {
    calculateFibonacci,
    calculatePrimesUpToN,
  };
})();


// Пример использования функций из библиотеки MathX
console.log(MathX.calculateFibonacci(10)); // Вычисление всех чисел Фибоначчи до числа 10
console.log(MathX.calculatePrimesUpToN(12)); // Вычисление всех простых чисел до числа 30
