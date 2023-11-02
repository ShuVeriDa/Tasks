const rootElement = document.getElementById('main');

function traverseDOM(item, action) {
  action(item);

  for (let i = 0; i < item.children.length; i++) {
    traverseDOM(item.children[i], action);
  }
}

const logTagInfo = (el) => {
  if (el.tagName) {
    console.log(`Тег: ${el.tagName}`);
  }
};

traverseDOM(rootElement, logTagInfo);
