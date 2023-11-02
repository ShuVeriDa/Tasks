const getLocalStorageFreeSpace = () => {
  try {
    if ('localStorage' in window && window['localStorage'] !== null) {
      // Получаем текущий размер данных в localStorage и переводим в байты
      const currentStorageSize = JSON.stringify(localStorage).length;
      // Устанавливаем максимальный размер localStorage в байтах (5 МБ)
      const totalSize = 5 * 1024 * 1024;
      // Вычисляем доступное место в МБ
      const freeSpace = (totalSize - currentStorageSize) / (1024 * 1024);
      // Возвращаем доступное место
      return freeSpace.toFixed(3)
    }``
    return null; // localStorage не поддерживается
  } catch (e) {
    return null; // Произошла ошибка при получении доступного места
  }
}

const freeSpace = getLocalStorageFreeSpace();
if (freeSpace !== null) {
  console.log(`Доступное место в localStorage: ${freeSpace} МБ`);
} else {
  console.log('localStorage не поддерживается или произошла ошибка');
}
