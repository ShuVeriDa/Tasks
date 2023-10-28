const counterFunc = () => {
  let count = 0

  // Функция увеличивающая count на 1
  const increment = () => {
    count++
    console.log(count)
  }

  // Функция уменьшающая count на 1
  const decrement = () => {
    count--
    console.log(count)
  }

  // Возврат объекта, содержащего функции increment и decrement.
  return {
    increment,
    decrement
  }
}

const counter = counterFunc()

counter.increment() // 1
counter.increment() // 2
counter.increment() // 3
counter.decrement() // 2