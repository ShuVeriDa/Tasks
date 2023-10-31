const form = document.getElementById('form');
const handleSubmit = (e) => {
  // Предотвращение стандартного поведения браузера
  e.preventDefault();

  // Получаем данные из формы
  const nickname = document.getElementById('nickname').value;
  const city = document.getElementById('city').value;

  // отображение всплывающего окна
  alert(`Ник: ${nickname}, Город: ${city}`)
};

form.addEventListener('submit', handleSubmit);