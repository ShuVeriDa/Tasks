class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Функция createLinkedListFromJSON принимает JSON и создает односвязный список из данных JSON-массива.
function createLinkedListFromJSON(json) {
  // Разбираем JSON в массив объектов
  const data = JSON.parse(json);
  let head = null;  // Инициализируем начало списка как null
  let current = null;  // Инициализируем текущий узел как null

  // Проходим по каждому объекту в массиве данных
  for (const item of data) {
    // Создаем новый узел с данными из объекта и указателем на следующий узел (изначально null)
    const newNode = new Node(item);

    if (!head) {
      // Если список пуст, устанавливаем новый узел как начало списка и текущий узел
      head = newNode;
      current = newNode;
    } else {
      // Если список не пуст, связываем текущий узел с новым узлом и перемещаем текущий узел на новый
      current.next = newNode;
      current = newNode;
    }
  }

  // Возвращаем начало списка
  return head;
}

// Функция рекурсивно выводит данные односвязного списка, начиная с заданного узла.
function printLinkedList(node) {
  if (node) {
    console.log(node.data);  // Выводим данные текущего узла
    printLinkedList(node.next);  // Рекурсивно вызываем функцию для следующего узла, если он существует
  }
}

// Пример использования:
const inputJSON = '[{"name":"Алиса","age":30,"city":"Нью-Йорк"},{"name":"Боб","age":25,"city":"Лос-Анджелес"},{"name":"Карла","age":35,"city":"Чикаго"}]';
const linkedList = createLinkedListFromJSON(inputJSON);  // Создаем односвязный список из JSON

printLinkedList(linkedList);  // Выводим данные односвязного списка
