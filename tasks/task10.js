const str = '{"name": "Adam", "age": "28", "city": "Grozny"}'

const parseJson = (str) => {
  try {
    // Конвертирование строки в JSON объект
    return JSON.parse(str)
  } catch (error) {
    // Если произошла ошибка при parse JSON
    throw new Error('Невалидный JSON: ' + error.message)
  }
}

try {
  const obj = parseJson(str)
  console.log(obj)
} catch (error) {
  console.error(error)
}
