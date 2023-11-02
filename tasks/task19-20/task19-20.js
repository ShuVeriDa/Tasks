const clientId = '51781625'; // id клиента
const communityId = '10933209'; // id сообщества
const numberOfPosts = 10; // Количество постов для загрузки
const maxCacheSize = 100; // Максимальный размер кэша

let loading = false; //загрузка
let offset = 0; // Смещение для загрузки следующих постов
let accessToken; //токен для доступа
let cachedPosts = []; //Сохраненные посты в localStorage

// URL для перенаправления
const redirectUri = window.location.href;

// Функция для аутентификации в VK
const authenticateVK = () => {
  const authUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=wall&v=5.131`;
  window.location.href = authUrl;
}

// Функция для отображения загрузки в зависимости от значения флага loading
const isVisibleLoading = () => {
  const loadingComponent = document.getElementById('loading')
  if (loading) {
    loadingComponent.style.display = 'block'
  }
  if (!loading)  {
    loadingComponent.style.display = 'none'
  }
}

// Обработка полученных данных от сервера VK
const handleData = (data) => {
  isVisibleLoading()

  const postList = document.getElementById('postList');
  const newPosts = data.response.items.filter(post => !cachedPosts.some(existingPost => existingPost.id === post.id));

  // Обновление кэшированных постов с новыми данными
  cachedPosts = [...cachedPosts, ...newPosts];

  // Сохранение кэшированных постов в localStorage
  localStorage.setItem('cachedPosts', JSON.stringify(cachedPosts));

  const totalSize= currentLocalStorageSize()
  console.log(`Размер localStorage: ${totalSize} МБ / 5 МБ`);

  if (cachedPosts.length > maxCacheSize) {
    // Сохранение последних maxCacheSize постов
    const postsToKeep = cachedPosts.slice(-maxCacheSize);
    localStorage.setItem('cachedPosts', JSON.stringify(postsToKeep));
  } else {
    localStorage.setItem('cachedPosts', JSON.stringify(cachedPosts));
  }

  // Очищение списка постов
  postList.innerHTML = '';

  // Отображение постов
  cachedPosts.forEach(post => {
    const listItem = document.createElement('li');
    listItem.textContent = post.text;
    postList.appendChild(listItem);
  });

  loading = false;
}

// Функция для загрузки дополнительных постов
const loadMorePosts = () => {
  isVisibleLoading()
  const scrollWidget = document.getElementById('widget');
  console.log(loading)
  if (loading) {
    return;
  }

  if (scrollWidget.scrollTop + scrollWidget.clientHeight >= scrollWidget.scrollHeight - 10) {

    loading = true;

    // Загружаем следующие 10 постов
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?owner_id=-${communityId}&access_token=${accessToken}&count=${numberOfPosts}&offset=${offset}&v=5.131&callback=handleData`;
    document.body.appendChild(script);

    offset += numberOfPosts;
  }
}


// Добавьте обработчик события прокрутки виджета
document.addEventListener('DOMContentLoaded', function() {
  const widgetContainer = document.getElementById('widget');
  widgetContainer.addEventListener('scroll', loadMorePosts);
});

// Обработка аутентификации и загрузка кэшированных постов
const handleAuthentication = () => {
  const hashParams = window.location.hash.substring(1).split('&');
  const tokenParam = hashParams.find((param) => param.startsWith('access_token='));

  if (tokenParam) {
    // Извлечение ключа доступа из параметров URI
    accessToken = tokenParam.split('=')[1];
    console.log(accessToken);

    // Проверка, на наличие кэшированных постов
    cachedPosts = JSON.parse(localStorage.getItem('cachedPosts')) || [];

    // Отображение кэшированных постов
    handleData({ response: { items: cachedPosts } });

    // Добавление тега script для получения новых данных
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?owner_id=-${communityId}&access_token=${accessToken}&count=${numberOfPosts}&v=5.131&callback=handleData`;
    document.body.appendChild(script);
  }
}

// Вычисление объема памяти занимаемого данными в LocalStorage
const currentLocalStorageSize = () => {
  let totalSize = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const itemSize = (key.length + value.length) * 2; // Учитываем размер ключа и значения в байтах
    totalSize += itemSize;
  }

  const totalSizeMB = totalSize / (1024 * 1024)

  // Размер `localStorage` в байтах
  return totalSizeMB.toFixed(3)
}
