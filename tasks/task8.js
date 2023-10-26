
// 1 вариант
const executeFunctions  = (functions) => () => {
  return functions.map(func => func())
};

// 2вариант
// const executeFunctions  = (functions) => () => functions.reduce((results, func) => {
//   results.push(func());
//   return results;
// }, []);

// 3 вариант
// function executeFunctions(functions) {
//   return function () {
//     const results = [];
//
//     for (const func of functions) {
//       results.push(func());
//     }
//
//     return results;
//   };
// }

const func1 = () => 1;
const func2 = () => 2;
const func3 = () => 3;

const functions = [func1, func2, func3];
const result  = executeFunctions(functions);


console.log(result());
