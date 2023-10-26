const people = [
  {name: "John", age: 30},
  {name: "Alice", age: 25},
  {name: "Bob", age: 40},
  {name: "Emma", age: 22},
  {name: "David", age: 25},
  {name: "George", age: 30},
  {name: "Angela", age: 25},
  {name: "Anna", age: 23},
  {name: "Billy", age: 40},
  {name: "Ashley", age: 22}
];

//1 вариант
people.sort((a, b) => {
  return a.age - b.age || a.name.localeCompare(b.name)
});
console.log(people)

// 2 варианте
people.sort((a, b) => {
  if (a.age < b.age) {
    return a.age - b.age
  }
  // Если возрасты равны, сортируем по полю name
  if (a.name < b.name) {
    return a.name - b.name;
  }
});

console.log(people);