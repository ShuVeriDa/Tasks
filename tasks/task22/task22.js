function documentWrite(n) {
  if (n > 0) {
    document.write('Элемент ' + (31 - n) + '<br>');
    document.write('<script>documentWrite(' + (n - 1) + ')</script>');
  }
}

documentWrite(30);
//"Элемент 21" будет последним элементом, т.к. точное количество вложенных вызовов, которые могут быть выполнены, зависит от браузера. (Yandex Browser это 21.)