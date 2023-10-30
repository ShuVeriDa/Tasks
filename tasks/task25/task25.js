const createAndStyleEl = (tagName, styles) => {
  // Создаем новый элемент
  const el = document.createElement(tagName);

  // Устанавливаются стили
  for (const [key, value] of Object.entries(styles)) {
    el.style[key] = value;
  }

  // Добавляется элемент в DOM
  el.textContent = 'Hello World'
  document.body.appendChild(el);

};

//Стили
const elStyles = {
  width: '250px',
  height: '250px',
  backgroundColor: 'purple',
  color: 'white',
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  fontSize: '24px',
};

createAndStyleEl('div', elStyles);