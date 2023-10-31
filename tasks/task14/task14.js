const urlImage = 'https://via.placeholder.com/600/771796';

const loadImg = async (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
        src: url,
      });
    };
    img.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };

    img.src = url;

    return img
  });
};

loadImg(urlImage)
  .then((imageData) => {
    console.log("Изображение успешно загружено:", imageData);
  })
  .catch((error) => {
    console.error("Произошла ошибка при загрузке изображения:", error);
  });