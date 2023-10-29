// Импортируем функцию formatDateTime из модуля './momentUtils.js'
import {formatDateTime} from './momentUtils.js'


const oneVariant = 'MMMM Do YYYY, h:mm:ss a'  // Формат вида "Месяц День Год, час:минуты:секунды AM/PM"
const twoVariant = 'YYYY-MM-DD, HH:mm:ss' // Формат вида "Год-Месяц-День, час:минуты:секунды"
const threeVariant = 'dddd, MMMM Do YYYY';  // День недели, полное имя месяца, день, год
const fourVariant = 'h:mm A, dddd';          // Час:минуты AM/PM, день недели

console.log(formatDateTime(new Date(), oneVariant))
console.log(formatDateTime(new Date(), twoVariant))
console.log(formatDateTime(new Date(), threeVariant));
console.log(formatDateTime(new Date(), fourVariant));

