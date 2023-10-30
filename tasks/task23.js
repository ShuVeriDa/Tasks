const assessPassword = (password) => {

  if (typeof password !== "string") {
    return "Ошибка: Недопустимый тип данных. Ожидается строка в качестве пароля."
  }
  //  Переменные для оценки сложности
  let lengthScore;
  let lowercaseScore = 0;
  let uppercaseScore = 0;
  let digitScore = 0;
  let specialCharScore = 0;


  // Подсчет длины пароля
  lengthScore = password.length;

  // Проверка на наличие специальных символов
  if (/[!@#\$%\^&\*\(\)_\+{}\[\]:;<>,.?~\\]/.test(password)) {
    specialCharScore = 1;
  }

  // Проверка на наличие символов в нижнем регистре
  if (/[a-z]/.test(password)) {
    lowercaseScore = 1;
  }

  // Проверка на наличие цифр
  if (/\d/.test(password)) {
    digitScore = 1;
  }

  // Проверка на наличие символов в верхнем регистре
  if (/[A-Z]/.test(password)) {
    uppercaseScore = 1;
  }


  // Вычисление общего балла сложности
  const totalScore = lengthScore + digitScore + lowercaseScore + uppercaseScore + specialCharScore;

  // Оценка пароля
  if (totalScore < 5) {
    return "Очень слабый пароль. Добавьте больше разнообразных символов и увеличьте длину.";
  } else if (totalScore < 8) {
    return "Слабый пароль. Рекомендуется увеличить длину пароля и добавить больше разнообразных символов.";
  } else if (totalScore < 12) {
    return "Средний пароль";
  } else if (totalScore < 16) {
    return "Сильный пароль";
  } else {
    return "Очень сильный пароль";
  }
};


const password1 = 1234;
const password2 = "1.4f45xd@#%";
const password3 = "JavaScriptEs6";
console.log(`Оценка сложности пароля: ${assessPassword(password1)}`);
console.log(`Оценка сложности пароля: ${assessPassword(password2)}`);
console.log(`Оценка сложности пароля: ${assessPassword(password3)}`);
