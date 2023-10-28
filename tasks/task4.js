// Функция для склонения слов в зависимости от числа
export const getNoun = (num, word1, word2, word3) => {
  // Абсолютное значение числа, чтобы обработать отрицательные числа
  const absoluteNumber = Math.abs(num);
  
  // Последние две цифры числа
  const lastTwoDigits = absoluteNumber % 100;

  // Последняя цифра числа
  const lastDigit = lastTwoDigits % 10;

  // Проверяем, входит ли число в диапазон 11-19, где используется форма word3
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${num} ${word3}`;
  }
  // Проверяем, если последняя цифра равна 1, используем форму word1
  else if (lastDigit === 1) {
    return `${num} ${word1}`;
  }
  // Проверяем, если последняя цифра от 2 до 4, используем форму two
  else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${num} ${word2}`;
  }
  // Во всех остальных случаях используем форму word3
  else {
    return `${num} ${word3}`;
  }
}

const messageEnding = getNoun(12, 'сообщение', 'сообщения', 'сообщений');
const userEnding = getNoun(1024, 'пользователь', 'пользователя', 'пользователей');

// Получаем склонение и выводим результаты в консоль
console.log(messageEnding);
console.log(userEnding);

// Для того чтобы воспользоваться функцией в другом файле
// import { getNoun } from './task4.js';
