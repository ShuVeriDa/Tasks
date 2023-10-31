
function createAndAddElement() {
  const template = document.createElement('template');

  // Создается простой <div> элемент
  template.innerHTML = '<div class="new-element">Новый элемент</div>'

  // Ссылка на корневой элемент шаблона
  const templateRoot = template.content;

  // Извлекаем созданный элемент из шаблона
  const newElement = templateRoot.querySelector('.new-element');

  // Добавляем новый элемент в DOM (например, в тело <body>)
  document.body.appendChild(newElement);
}


createAndAddElement();
