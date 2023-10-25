const isPalindrome = (str) => {
  // Строка приводится к нижнему регистру и удаляются символы.
  const value = str.toLowerCase().replace(/[^a-z0-9]/g, '')

  // Делаем обратную копию строки. Дробим на буквы, переворачиваем и соединяем.
  const reversedString = value.split('').reverse().join('')

  // Сравниваем оригинал с обратным
  return value === reversedString
}
const valuePalindrome = "аргентина манит негра";

// Проверяем
isPalindrome(valuePalindrome)
  ? console.log("Это палиндром.")
  : console.log("Это не палиндром.");