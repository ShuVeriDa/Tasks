const asyncFetch = async () => {
  try {
    const post = await fetchPost();
    console.log('Результат первой асинхронной операции:', post);

    const user = await fetchUser();
    console.log('Результат второй асинхронной операции:', user);

    return user;
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}

// Пример асинхронных функций asyncFunc1 и fetchUser:
const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  return res.json()
}

async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  return res.json()
}

// Вызываем асинхронную функцию и обрабатываем её результат
asyncFetch()
  .then((result) => {
    console.log('Итог:', result);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });
