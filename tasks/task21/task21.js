const getCallStackSize = () => {
  try {
    return getCallStackSize() + 1;
  } catch (e) {
    return 0;
  }
}

const maxDepth = getCallStackSize();
console.log(`Максимальная количество стека вызовов: ${maxDepth}`);