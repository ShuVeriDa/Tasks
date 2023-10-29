// Импортируем библиотеку moment из модуля 'moment'
import moment from 'moment'

// Экспортируем функцию formatDateTime, которая принимает дату и формат
export const formatDateTime = (date, format) => {
  // Форматируем текущую дату и время согласно указанному формату
  return moment().format(format)
}