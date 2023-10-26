const callFunctions = (func, index) => {
  // если индекс меньше, чем количество функций
  if (index < func.length) {
    // текущая функция
    const currentFunction = func[index]

    console.log(`Вызывается функция ${index + 1}`);

    // Вызывается текущую функцию, передавая в нее колбэк
    currentFunction(() => {
      // Рекурсивно вызываем функцию callFunctions для следующей функции
      callFunctions(func, index + 1)
    })
  }
}

// Пример массива функций
const func1 = (callback) => {
  setTimeout(() => {
    console.log('Функция 1 завершена');
    callback();
  }, 1000);
};

const func2 = (callback) => {
  setTimeout(() => {
    console.log('Функция 2 завершена');
    callback();
  }, 1000);
};

const func3 = (callback) => {
  setTimeout(() => {
    console.log('Функция 3 завершена');
    callback();
  }, 1000);
};

const functions = [func1, func2, func3]

// Вызываем функцию начиная с первой функции
callFunctions(functions, 0)

