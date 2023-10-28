const objBook = {
  title: "Treasure Island",
  author: "Robert Stevenson",
  yearOfPublication: 1883,

  //  Метод возвращает информацию о книге.
  aboutBook() {
    return `Книгу ${this.title} написал ${this.author}. Она была впервые опубликована в ${this.yearOfPublication} году.`
  },

  //Метод изменяет информацию о книге, если предоставлены новые значения
  // и возвращает обновленную информацию о книге
  changeBook(newTitle, newAuthor, newYearOfPublication) {
    if (newTitle) this.title = newTitle
    if (newAuthor) this.author = newAuthor
    if (newYearOfPublication) this.yearOfPublication = newYearOfPublication

    return this.aboutBook()
  }
}

console.log(objBook.aboutBook())
console.log(objBook.changeBook("Alice in Wonderland", "Lewis Carroll", 1865))